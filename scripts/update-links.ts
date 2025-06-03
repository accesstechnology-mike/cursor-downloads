import * as fs from "fs";
import * as path from "path";

interface PlatformInfo {
  platforms: string[];
  readableNames: string[];
  section: string;
}

interface PlatformMap {
  [key: string]: PlatformInfo;
}

interface VersionInfo {
  url: string;
  version: string;
}

interface ResultMap {
  [os: string]: {
    [platform: string]: VersionInfo;
  };
}

interface DownloadResponse {
  downloadUrl: string;
}

// Interface for version history JSON
interface VersionHistoryEntry {
  version: string;
  date: string;
  platforms: {
    [platform: string]: string; // platform -> download URL
  };
}

interface VersionHistory {
  versions: VersionHistoryEntry[];
}

const PLATFORMS: PlatformMap = {
  windows: {
    platforms: [
      "win32-x64-user",
      "win32-arm64-user",
      "win32-x64-system",
      "win32-arm64-system",
      "win32-x64",
      "win32-arm64",
    ],
    readableNames: [
      "win32-x64-user",
      "win32-arm64-user",
      "win32-x64-system",
      "win32-arm64-system",
      "win32-x64",
      "win32-arm64",
    ],
    section: "Windows Installer",
  },
  mac: {
    platforms: ["darwin-universal", "darwin-x64", "darwin-arm64"],
    readableNames: ["darwin-universal", "darwin-x64", "darwin-arm64"],
    section: "Mac Installer",
  },
  linux: {
    platforms: ["linux-x64", "linux-arm64"],
    readableNames: ["linux-x64", "linux-arm64"],
    section: "Linux Installer",
  },
};

type PlatformType =
  | "darwin-universal"
  | "darwin-x64"
  | "darwin-arm64"
  | "win32-x64-system"
  | "win32-arm64-system"
  | "win32-x64-user"
  | "win32-arm64-user"
  | "linux-x64"
  | "linux-arm64"
  | "win32-x64"
  | "win32-arm64";

/**
 * Extract version from URL or filename
 */
function extractVersion(url: string): string {
  // For Windows
  const winMatch = url.match(/Cursor(User|)Setup-[^-]+-([0-9\.]+)\.exe/);
  if (winMatch && winMatch[2]) return winMatch[2];

  // For other URLs, try to find version pattern
  const versionMatch = url.match(/[0-9]+\.[0-9]+\.[0-9]+/);
  return versionMatch ? versionMatch[0] : "Unknown";
}

/**
 * Format date as YYYY-MM-DD
 */
function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/**
 * Fetch latest download URL for a platform
 */
async function fetchLatestDownloadUrl(
  platform: string,
): Promise<string | null> {
  try {
    let apiPlatform = platform;
    let isSystemVersion = false;

    // Handle system version URLs
    if (platform.endsWith("-system")) {
      apiPlatform = platform.replace("-system", "");
      isSystemVersion = true;
    }

    const response = await fetch(
      `https://www.cursor.com/api/download?platform=${apiPlatform}&releaseTrack=latest`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          "Cache-Control": "no-cache",
        },
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = (await response.json()) as DownloadResponse;
    let downloadUrl = data.downloadUrl;

    if (isSystemVersion) {
      downloadUrl = downloadUrl.replace(
        "user-setup/CursorUserSetup",
        "system-setup/CursorSetup",
      );
    }

    return downloadUrl;
  } catch (error) {
    console.error(
      `Error fetching download URL for platform ${platform}:`,
      error instanceof Error ? error.message : "Unknown error",
    );
    return null;
  }
}

/**
 * Read version history from JSON file with static import fallback
 */
function readVersionHistory(): VersionHistory {
  const historyPath = path.join(process.cwd(), "version-history.json");
  if (fs.existsSync(historyPath)) {
    try {
      const jsonData = fs.readFileSync(historyPath, "utf8");
      return JSON.parse(jsonData) as VersionHistory;
    } catch (error) {
      console.error(
        "Error reading version history:",
        error instanceof Error ? error.message : "Unknown error",
      );
      return { versions: [] };
    }
  } else {
    console.log("version-history.json not found, creating a new file");
    return { versions: [] };
  }
}

/**
 * Extract major version number from semantic version string
 * For 0.X.Y versioning, we consider X the major version.
 */
function getMajorVersion(version: string): number {
  // Split by dots and get the second component as major version for 0.X.Y versioning
  const parts = version.split(".");
  if (parts.length >= 2 && parts[0] === "0") {
    return parseInt(parts[1], 10);
  }
  return parseInt(parts[0], 10); // Fallback to first component
}

/**
 * Filter version history to keep only the last 3 major versions
 */
function limitToLastThreeMajorVersions(
  history: VersionHistory,
): VersionHistory {
  // Get unique major versions
  const majorVersions = new Set<number>();
  history.versions.forEach((entry) => {
    const majorVersion = getMajorVersion(entry.version);
    majorVersions.add(majorVersion);
  });

  // Sort major versions descending
  const sortedMajorVersions = Array.from(majorVersions).sort((a, b) => b - a);

  // Keep only the last 3 major versions
  const majorVersionsToKeep = sortedMajorVersions.slice(0, 3);

  // Filter versions to only include those with major versions in the keep list
  const filteredVersions = history.versions.filter((entry) =>
    majorVersionsToKeep.includes(getMajorVersion(entry.version)),
  );

  return {
    versions: filteredVersions,
  };
}

/**
 * Save version history to JSON file
 * Only the last 3 major versions will be kept to keep the file size and table manageable.
 */
function saveVersionHistory(history: VersionHistory): void {
  if (!history || !Array.isArray(history.versions)) {
    console.error("Invalid version history object provided");
    return;
  }

  const historyPath = path.join(process.cwd(), "version-history.json");

  if (fs.existsSync(historyPath)) {
    try {
      const backupPath = `${historyPath}.backup`;
      fs.copyFileSync(historyPath, backupPath);
      console.log(`Created backup at ${backupPath}`);
    } catch (error) {
      console.error(
        "Failed to create backup of version history:",
        error instanceof Error ? error.message : "Unknown error",
      );
    }
  }

  try {
    // Limit to the last 3 major versions
    const limitedHistory = limitToLastThreeMajorVersions(history);
    const jsonData = JSON.stringify(limitedHistory, null, 2);

    try {
      JSON.parse(jsonData);
    } catch (parseError) {
      console.error(
        "Generated invalid JSON data, aborting save:",
        parseError instanceof Error ? parseError.message : "Unknown error",
      );
      return;
    }

    const tempPath = `${historyPath}.tmp`;
    fs.writeFileSync(tempPath, jsonData, "utf8");
    fs.renameSync(tempPath, historyPath);

    if (fs.existsSync(historyPath)) {
      console.log("Version history saved to version-history.json");
    } else {
      console.error(
        "Failed to save version history: File does not exist after write",
      );
    }
  } catch (error) {
    console.error(
      "Error saving version history:",
      error instanceof Error ? error.message : "Unknown error",
    );
    throw error;
  }
}

/**
 * Send notification for new version
 */
async function sendNewVersionNotification(version: string, releaseDate: string): Promise<void> {
  try {
    // Only send notifications in production (when running on Vercel or CI)
    const isProduction = process.env.VERCEL || process.env.CI || process.env.NODE_ENV === 'production';
    const notificationSecret = process.env.NOTIFICATION_SECRET;
    
    if (!isProduction) {
      console.log(`[DEV] Would send notification for version ${version} (skipping in development)`);
      return;
    }

    if (!notificationSecret) {
      console.log('NOTIFICATION_SECRET not set, skipping email notifications');
      return;
    }

    const baseUrl = process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : 'https://downloadcursor.app';

    const response = await fetch(`${baseUrl}/api/send-notification`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${notificationSecret}`,
      },
      body: JSON.stringify({
        version,
        releaseDate,
      }),
    });

    if (response.ok) {
      const result = await response.json();
      console.log(`✅ Notifications sent: ${result.sent} emails, ${result.errors} errors`);
    } else {
      const error = await response.text();
      console.error(`❌ Failed to send notifications: ${response.status} - ${error}`);
    }
  } catch (error) {
    console.error('❌ Error sending notifications:', error instanceof Error ? error.message : 'Unknown error');
  }
}

/**
 * Generate Markdown content for README.md
 */
function generateReadmeMarkdown(
  latestVersion: string,
  releaseDate: string,
): string {
  const repoUrl = "https://github.com/accesstechnology-mike/downloadcursor.app";
  const liveSiteUrl = "https://downloadcursor.app";

  return `# Cursor Download Hub

A simple, automatically updated site providing the latest download links for the [Cursor](https://cursor.com) code editor.

**Live Site:** [${liveSiteUrl.replace("https://", "")}](${liveSiteUrl})

**Latest Version:** v${latestVersion} (Released: ${releaseDate})

## Features

- Displays download links for Windows, macOS, and Linux.
- Version history for the last 3 major versions using an expandable UI.
- Dark theme.
- Automatically updates when new versions of Cursor are released (via GitHub Actions).
- Hero section with direct download buttons for popular platforms.

## Development

1.  Clone the repository:
    \`\`\`bash
    git clone ${repoUrl}.git
    cd downloadcursor.app
    \`\`\`
2.  Install dependencies:
    \`\`\`bash
    bun install
    \`\`\`
3.  Run the update script (fetches latest links and updates this \`README.md\`):
    \`\`\`bash
    bun run scripts/update-links.ts
    \`\`\`
4.  To serve \`index.html\` locally (e.g., for quick viewing, though it's a static file):
    \`\`\`bash
    bun run dev
    \`\`\`
    (Note: \`bun run dev\` uses Bun's simple HTTP server. The \`index.html\` is a static file maintained separately.)

## How it Works

The \`scripts/update-links.ts\` script fetches the latest download URLs from the official Cursor API. It then:

1.  Updates the \`version-history.json\` file (pruning to the last 3 major versions).
2.  Updates this \`README.md\` with the latest version information and project details.

A GitHub Actions workflow in \`.github/workflows/update.yml\` runs this script periodically to keep the site and version information up-to-date.`;
}

/**
 * Main function to run the update with proper error handling - only updates version-history.json and README.md
 */
async function main(): Promise<void> {
  try {
    const startTime = Date.now();
    console.log(
      `Starting version history update at ${new Date().toISOString()}`,
    );

    const results: ResultMap = {};
    let latestVersion = "0.0.0";
    const currentDate = formatDate(new Date());

    // Fetch latest download URLs for all platforms
    for (const [osKey, osData] of Object.entries(PLATFORMS)) {
      results[osKey] = {};
      for (const platform of osData.platforms) {
        const url = await fetchLatestDownloadUrl(platform);
        if (url) {
          const version = extractVersion(url);
          results[osKey][platform] = { url, version };
          if (
            version !== "Unknown" &&
            version.localeCompare(latestVersion, undefined, { numeric: true }) >
              0
          ) {
            latestVersion = version;
          }
        }
      }
    }

    if (latestVersion === "0.0.0") {
      console.error("Failed to retrieve any valid version information");
      process.exit(1);
    }
    console.log(`Latest version detected: ${latestVersion}`);

    // Read existing version history
    const history = readVersionHistory();
    const existingVersionIndex = history.versions.findIndex(
      (entry) => entry.version === latestVersion,
    );

    // Add new version to history if it doesn't exist
    let isNewVersion = false;
    if (existingVersionIndex === -1) {
      const platforms: { [platform: string]: string } = {};
      for (const osKey in results) {
        for (const [platform, info] of Object.entries(results[osKey])) {
          platforms[platform] = info.url;
        }
      }
      const newEntry: VersionHistoryEntry = {
        version: latestVersion,
        date: currentDate,
        platforms,
      };
      history.versions.unshift(newEntry); // Add to top
      console.log(`Added new version ${latestVersion} to history`);
      isNewVersion = true;
    } else {
      console.log(`Version ${latestVersion} already exists in history`);
    }

    // Limit to last 3 major versions and save
    const limitedHistory = limitToLastThreeMajorVersions(history);
    saveVersionHistory(limitedHistory);

    // Send notification if this is a new version
    if (isNewVersion && limitedHistory.versions.length > 0) {
      const latestEntry = limitedHistory.versions[0];
      console.log(`🚀 New version detected: ${latestEntry.version}. Sending notifications...`);
      await sendNewVersionNotification(latestEntry.version, latestEntry.date);
    }

    // Update README.md with latest version information
    if (limitedHistory.versions.length > 0) {
      const latestEntry = limitedHistory.versions[0]; // The actual latest version after pruning and sorting
      const readmeContent = generateReadmeMarkdown(
        latestEntry.version,
        latestEntry.date,
      );
      const readmePath = path.join(process.cwd(), "README.md");
      fs.writeFileSync(readmePath, readmeContent.trim(), "utf8");
      console.log("README.md updated successfully.");
    } else {
      console.warn("Skipping README.md update as version history is empty.");
    }

    const elapsedTime = Date.now() - startTime;
    console.log(
      `Version history and README update completed in ${elapsedTime}ms`,
    );

    // Verify the saved file
    const historyPath = path.join(process.cwd(), "version-history.json");
    if (!fs.existsSync(historyPath)) {
      console.warn(
        "Warning: version-history.json does not exist after update.",
      );
    } else {
      try {
        const content = fs.readFileSync(historyPath, "utf8");
        JSON.parse(content) as VersionHistory;
        console.log(
          "Verified version-history.json exists and contains valid JSON.",
        );
      } catch (err) {
        console.warn(
          "Warning: version-history.json exists but contains invalid JSON:",
          err instanceof Error ? err.message : "Unknown error",
        );
      }
    }
  } catch (error) {
    console.error(
      "Critical error during version history update:",
      error instanceof Error ? error.message : "Unknown error",
    );
    process.exit(1);
  }
}

export {
  fetchLatestDownloadUrl,
  readVersionHistory,
  saveVersionHistory,
  extractVersion,
  formatDate,
  main,
};

// Check if this file is being executed directly
if (require.main === module) {
  main().catch((error) => {
    console.error(
      "Unhandled error:",
      error instanceof Error ? error.message : "Unknown error",
    );
    process.exit(1);
  });
}
