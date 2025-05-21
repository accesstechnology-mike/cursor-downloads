import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// Get dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define types for Bun's fetch if needed

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
    platforms: ['win32-x64-user', 'win32-arm64-user', 'win32-x64-system', 'win32-arm64-system', 'win32-x64', 'win32-arm64'],
    readableNames: ['win32-x64-user', 'win32-arm64-user', 'win32-x64-system', 'win32-arm64-system', 'win32-x64', 'win32-arm64'],
    section: 'Windows Installer'
  },
  mac: {
    platforms: ['darwin-universal', 'darwin-x64', 'darwin-arm64'],
    readableNames: ['darwin-universal', 'darwin-x64', 'darwin-arm64'],
    section: 'Mac Installer'
  },
  linux: {
    platforms: ['linux-x64', 'linux-arm64'],
    readableNames: ['linux-x64', 'linux-arm64'],
    section: 'Linux Installer'
  }
};

interface PlatformBadgeConfig {
  color: string;
  logo: string;
  label: string;
}

type PlatformType = 'darwin-universal' | 'darwin-x64' | 'darwin-arm64' |
  'win32-x64-system' | 'win32-arm64-system' | 'win32-x64-user' | 'win32-arm64-user' |
  'linux-x64' | 'linux-arm64' | 'win32-x64' | 'win32-arm64';

/**
 * Extract version from URL or filename
 */
function extractVersion(url: string): string {
  // For Windows
  const winMatch = url.match(/Cursor(User|)Setup-[^-]+-([0-9\.]+)\.exe/);
  if (winMatch && winMatch[2]) return winMatch[2];

  // For other URLs, try to find version pattern
  const versionMatch = url.match(/[0-9]+\.[0-9]+\.[0-9]+/);
  return versionMatch ? versionMatch[0] : 'Unknown';
}

/**
 * Format date as YYYY-MM-DD
 */
function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Fetch latest download URL for a platform
 */
async function fetchLatestDownloadUrl(platform: string): Promise<string | null> {
  try {
    let apiPlatform = platform;
    let isSystemVersion = false;

    // Handle system version URLs
    if (platform.endsWith('-system')) {
      apiPlatform = platform.replace('-system', '');
      isSystemVersion = true;
    }

    const response = await fetch(`https://www.cursor.com/api/download?platform=${apiPlatform}&releaseTrack=latest`, {
      headers: {
        'User-Agent': 'Cursor-Version-Checker',
        'Cache-Control': 'no-cache',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json() as DownloadResponse;
    let downloadUrl = data.downloadUrl;

    if (isSystemVersion) {
      downloadUrl = downloadUrl.replace('user-setup/CursorUserSetup', 'system-setup/CursorSetup');
    }

    return downloadUrl;
  } catch (error) {
    console.error(`Error fetching download URL for platform ${platform}:`, error instanceof Error ? error.message : 'Unknown error');
    return null;
  }
}

/**
 * Read version history from JSON file
 */
function readVersionHistory(): VersionHistory {
  const historyPath = path.join(process.cwd(), 'version-history.json');
  if (fs.existsSync(historyPath)) {
    try {
      const jsonData = fs.readFileSync(historyPath, 'utf8');
      return JSON.parse(jsonData) as VersionHistory;
    } catch (error) {
      console.error('Error reading version history:', error instanceof Error ? error.message : 'Unknown error');
      return { versions: [] };
    }
  } else {
    console.log('version-history.json not found, creating a new file');
    return { versions: [] };
  }
}

/**
 * Extract major version number from semantic version string
 * For 0.X.Y versioning, we consider X the major version.
 */
function getMajorVersion(version: string): number {
  // Split by dots and get the second component as major version for 0.X.Y versioning
  const parts = version.split('.');
  if (parts.length >= 2 && parts[0] === '0') {
    return parseInt(parts[1], 10);
  }
  return parseInt(parts[0], 10); // Fallback to first component
}

/**
 * Filter version history to keep only the last 3 major versions
 */
function limitToLastThreeMajorVersions(history: VersionHistory): VersionHistory {
  // Get unique major versions
  const majorVersions = new Set<number>();
  history.versions.forEach(entry => {
    const majorVersion = getMajorVersion(entry.version);
    majorVersions.add(majorVersion);
  });

  // Sort major versions descending
  const sortedMajorVersions = Array.from(majorVersions).sort((a, b) => b - a);
  
  // Keep only the last 3 major versions
  const majorVersionsToKeep = sortedMajorVersions.slice(0, 3);
  
  // Filter versions to only include those with major versions in the keep list
  const filteredVersions = history.versions.filter(entry => 
    majorVersionsToKeep.includes(getMajorVersion(entry.version))
  );
  
  return {
    versions: filteredVersions
  };
}

/**
 * Save version history to JSON file
 * Only the last 3 major versions will be kept to keep the file size and table manageable.
 */
function saveVersionHistory(history: VersionHistory): void {
  if (!history || !Array.isArray(history.versions)) {
    console.error('Invalid version history object provided');
    return;
  }

  const historyPath = path.join(process.cwd(), 'version-history.json');

  if (fs.existsSync(historyPath)) {
    try {
      const backupPath = `${historyPath}.backup`;
      fs.copyFileSync(historyPath, backupPath);
      console.log(`Created backup at ${backupPath}`);
    } catch (error) {
      console.error('Failed to create backup of version history:', error instanceof Error ? error.message : 'Unknown error');
    }
  }

  try {
    // Limit to the last 3 major versions
    const limitedHistory = limitToLastThreeMajorVersions(history);
    const jsonData = JSON.stringify(limitedHistory, null, 2);

    try {
      JSON.parse(jsonData);
    } catch (parseError) {
      console.error('Generated invalid JSON data, aborting save:', parseError instanceof Error ? parseError.message : 'Unknown error');
      return;
    }

    const tempPath = `${historyPath}.tmp`;
    fs.writeFileSync(tempPath, jsonData, 'utf8');
    fs.renameSync(tempPath, historyPath);

    if (fs.existsSync(historyPath)) {
      console.log('Version history saved to version-history.json');
    } else {
      console.error('Failed to save version history: File does not exist after write');
    }
  } catch (error) {
    console.error('Error saving version history:', error instanceof Error ? error.message : 'Unknown error');
    throw error;
  }
}

/**
 * Generate a unified download badge for a platform
 */
function generateDownloadBadge(platform: PlatformType, url: string): string {
  const platformConfig: Record<PlatformType, PlatformBadgeConfig> = {
    'darwin-universal': { color: '000000', logo: 'apple', label: 'macOS Universal' },
    'darwin-x64': { color: '000000', logo: 'apple', label: 'macOS Intel' },
    'darwin-arm64': { color: '000000', logo: 'apple', label: 'macOS Apple Silicon' },
    'win32-x64-system': { color: '0078D6', logo: 'windows', label: 'Windows x64 System' },
    'win32-arm64-system': { color: '0078D6', logo: 'windows', label: 'Windows ARM64 System' },
    'win32-x64-user': { color: '0078D6', logo: 'windows', label: 'Windows x64 User' },
    'win32-arm64-user': { color: '0078D6', logo: 'windows', label: 'Windows ARM64 User' },
    'win32-x64': { color: '0078D6', logo: 'windows', label: 'Windows x64' },
    'win32-arm64': { color: '0078D6', logo: 'windows', label: 'Windows ARM64' },
    'linux-x64': { color: 'FCC624', logo: 'linux', label: 'Linux x64' },
    'linux-arm64': { color: 'FCC624', logo: 'linux', label: 'Linux ARM64' }
  };

  const config = platformConfig[platform];
  if (!config || !url) {
    return '';
  }

  const encodedLabel = config.label.replace(/\s+/g, '%20');
  return `<a href="${url}" class="button"><img src="https://img.shields.io/badge/${encodedLabel}-Download-${config.color}?style=for-the-badge&logo=${config.logo}&logoColor=white" alt="${config.label}"></a>`;
}

function generateDownloadLink(platform: PlatformType, url: string): string {
  if (!url) return 'N/A';
  return `<a href="${url}">${platform}</a>`;
}

/**
 * Generate the latest version card content
 */
function generateLatestVersionCard(version: string, date: string, results: ResultMap): string {
  let cardContent = `
<div class="version-card">
  <h2 style="text-align: center;">🚀 Cursor ${version}</h2>
  <p style="text-align: center; color: #666;">Release Date: ${date}</p>
  <div style="display: flex; justify-content: space-around; flex-wrap: wrap; gap: 1em;">`;

  // Windows
  cardContent += '<div class="download-section">'
  cardContent += '<h3><img src="https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows"></h3>';
  cardContent += '<div class="download-links">';
  if (results.windows) {
    cardContent += generateDownloadBadge('win32-x64-user', results.windows['win32-x64-user']?.url || results.windows['win32-x64']?.url);
    cardContent += generateDownloadBadge('win32-arm64-user', results.windows['win32-arm64-user']?.url || results.windows['win32-arm64']?.url);
    cardContent += generateDownloadBadge('win32-x64-system', results.windows['win32-x64-system']?.url);
    cardContent += generateDownloadBadge('win32-arm64-system', results.windows['win32-arm64-system']?.url);
  }
  cardContent += '</div></div>';

  // macOS
  cardContent += '<div class="download-section">'
  cardContent += '<h3><img src="https://img.shields.io/badge/macOS-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS"></h3>';
  cardContent += '<div class="download-links">';
  if (results.mac) {
    cardContent += generateDownloadBadge('darwin-universal', results.mac['darwin-universal']?.url);
    cardContent += generateDownloadBadge('darwin-x64', results.mac['darwin-x64']?.url);
    cardContent += generateDownloadBadge('darwin-arm64', results.mac['darwin-arm64']?.url);
  }
  cardContent += '</div></div>';

  // Linux
  cardContent += '<div class="download-section">'
  cardContent += '<h3><img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux"></h3>';
  cardContent += '<div class="download-links">';
  if (results.linux) {
    cardContent += generateDownloadBadge('linux-x64', results.linux['linux-x64']?.url);
    cardContent += generateDownloadBadge('linux-arm64', results.linux['linux-arm64']?.url);
  }
  cardContent += '</div></div>';

  cardContent += `</div></div>`;
  return cardContent;
}

/**
 * Generate the detailed version card content for a single version
 */
function generateDetailedVersionCard(version: string, date: string, platforms: { [platform: string]: string }): string {
  let cardContent = `
<details class="version-card">
  <summary><b>Version ${version}</b> (${date})</summary>
  <div style="padding-top: 1em;">
  <h4>Windows</h4><div class="download-links">`;

  if (platforms['win32-x64-user']) cardContent += generateDownloadBadge('win32-x64-user', platforms['win32-x64-user']);
  if (platforms['win32-arm64-user']) cardContent += generateDownloadBadge('win32-arm64-user', platforms['win32-arm64-user']);
  if (platforms['win32-x64-system']) cardContent += generateDownloadBadge('win32-x64-system', platforms['win32-x64-system']);
  if (platforms['win32-arm64-system']) cardContent += generateDownloadBadge('win32-arm64-system', platforms['win32-arm64-system']);
  if (platforms['win32-x64']) cardContent += generateDownloadBadge('win32-x64', platforms['win32-x64']);
  if (platforms['win32-arm64']) cardContent += generateDownloadBadge('win32-arm64', platforms['win32-arm64']);
  cardContent += '</div>';

  cardContent += `
  <h4>macOS</h4><div class="download-links">`;
  if (platforms['darwin-universal']) cardContent += generateDownloadBadge('darwin-universal', platforms['darwin-universal']);
  if (platforms['darwin-x64']) cardContent += generateDownloadBadge('darwin-x64', platforms['darwin-x64']);
  if (platforms['darwin-arm64']) cardContent += generateDownloadBadge('darwin-arm64', platforms['darwin-arm64']);
  cardContent += '</div>';

  cardContent += `
  <h4>Linux</h4><div class="download-links">`;
  if (platforms['linux-x64']) cardContent += generateDownloadBadge('linux-x64', platforms['linux-x64']);
  if (platforms['linux-arm64']) cardContent += generateDownloadBadge('linux-arm64', platforms['linux-arm64']);
  cardContent += '</div>';

  cardContent += `
  </div>
</details>`;
  return cardContent;
}

/**
 * Generate detailed cards for all versions
 */
function generateAllDetailedCards(history: VersionHistory): string {
  let allCards = '';
  const sortedVersions = [...history.versions].sort((a, b) => b.version.localeCompare(a.version, undefined, { numeric: true }));
  for (const entry of sortedVersions) {
    allCards += generateDetailedVersionCard(entry.version, entry.date, entry.platforms);
  }
  return allCards;
}

/**
 * Generate table row for a single version
 */
function generateTableRow(version: string, date: string, platforms: { [platform: string]: string }): string {
  let windowsLinks = ['win32-x64-user', 'win32-arm64-user', 'win32-x64-system', 'win32-arm64-system', 'win32-x64', 'win32-arm64']
    .map(p => generateDownloadLink(p as PlatformType, platforms[p]))
    .filter(Boolean).join('<br>') || 'N/A';
  let macLinks = ['darwin-universal', 'darwin-x64', 'darwin-arm64']
    .map(p => generateDownloadLink(p as PlatformType, platforms[p]))
    .filter(Boolean).join('<br>') || 'N/A';
  let linuxLinks = ['linux-x64', 'linux-arm64']
    .map(p => generateDownloadLink(p as PlatformType, platforms[p]))
    .filter(Boolean).join('<br>') || 'N/A';

  return `<tr><td>${version}</td><td>${date}</td><td>${windowsLinks}</td><td>${macLinks}</td><td>${linuxLinks}</td></tr>`;
}

/**
 * Generate the complete versions table
 */
function generateVersionsTable(history: VersionHistory): string {
  let tableContent = `
  <table>
    <thead>
      <tr><th>Version</th><th>Date</th><th>Windows</th><th>macOS</th><th>Linux</th></tr>
    </thead>
    <tbody>`;
  const sortedVersions = [...history.versions].sort((a, b) => b.version.localeCompare(a.version, undefined, { numeric: true }));
  for (const entry of sortedVersions) {
    tableContent += generateTableRow(entry.version, entry.date, entry.platforms);
  }
  tableContent += '</tbody></table>';
  return tableContent;
}

// --- MATERIAL 3 HTML GENERATION ---

function platformDisplayName(platform: string): string {
  switch (platform) {
    case 'win32-x64-user': return 'Windows x64 (User)';
    case 'win32-arm64-user': return 'Windows ARM64 (User)';
    case 'win32-x64-system': return 'Windows x64 (System)';
    case 'win32-arm64-system': return 'Windows ARM64 (System)';
    case 'win32-x64': return 'Windows x64';
    case 'win32-arm64': return 'Windows ARM64';
    case 'darwin-universal': return 'macOS Universal';
    case 'darwin-x64': return 'macOS Intel';
    case 'darwin-arm64': return 'macOS Apple Silicon';
    case 'linux-x64': return 'Linux x64';
    case 'linux-arm64': return 'Linux ARM64';
    default: return platform;
  }
}

function platformIcon(platform: string): string {
  if (platform.startsWith('win32')) return '🪟';
  if (platform.startsWith('darwin')) return '🍏';
  if (platform.startsWith('linux')) return '🐧';
  return '';
}

function generateHeroButtons(latestPlatforms: { [platform: string]: string }): string {
  // Group platforms by OS
  const windowsPlatforms = ['win32-x64-user', 'win32-arm64-user'].filter(p => latestPlatforms[p]);
  const macPlatforms = ['darwin-universal', 'darwin-x64', 'darwin-arm64'].filter(p => latestPlatforms[p]);
  const linuxPlatforms = ['linux-x64', 'linux-arm64'].filter(p => latestPlatforms[p]);

  // Generate buttons for Windows
  const windowsButtons = windowsPlatforms.map(p => 
      `<a href="${latestPlatforms[p]}" style="text-decoration: none; display: inline-block; margin-bottom: 0.5em;">
        <md-filled-button style="font-size:1.1rem;padding:1.1em 2.2em;min-width:180px;background:#5e35b1;">
          ${platformIcon(p)} ${platformDisplayName(p)}
        </md-filled-button>
      </a>`
    ).join('\n');
  
  // Generate buttons for macOS
  const macButtons = macPlatforms.map(p => 
      `<a href="${latestPlatforms[p]}" style="text-decoration: none; display: inline-block; margin-bottom: 0.5em;">
        <md-filled-button style="font-size:1.1rem;padding:1.1em 2.2em;min-width:180px;background:#5e35b1;">
          ${platformIcon(p)} ${platformDisplayName(p)}
        </md-filled-button>
      </a>`
    ).join('\n');
  
  // Generate buttons for Linux
  const linuxButtons = linuxPlatforms.map(p => 
      `<a href="${latestPlatforms[p]}" style="text-decoration: none; display: inline-block; margin-bottom: 0.5em;">
        <md-filled-button style="font-size:1.1rem;padding:1.1em 2.2em;min-width:180px;background:#5e35b1;">
          ${platformIcon(p)} ${platformDisplayName(p)}
        </md-filled-button>
      </a>`
    ).join('\n');
  
  // Return completely new content without div nesting
  return `
    <!-- Windows buttons -->
    <div class="button-group">
      ${windowsButtons}
    </div>
    
    <!-- macOS buttons -->
    <div class="button-group">
      ${macButtons}
    </div>
    
    <!-- Linux buttons -->
    <div class="button-group">
      ${linuxButtons}
    </div>
  `;
}

function generateMaterialTable(history: VersionHistory): string {
  // No table header, just a list of details/summary elements
  let html = `<div class="expandable-version-list">`;

  // Sort versions by version number descending before generating HTML
  const sortedVersions = [...history.versions].sort((a, b) => 
    b.version.localeCompare(a.version, undefined, { numeric: true, sensitivity: 'base' })
  );

  for (const entry of sortedVersions) {
    const winLinks = [
      'win32-x64-user', 'win32-arm64-user',
      'win32-x64-system', 'win32-arm64-system',
      'win32-x64', 'win32-arm64'
    ]
      .filter((p) => entry.platforms[p])
      .map((p) => `<a href="${entry.platforms[p]}" target="_blank">${platformDisplayName(p)}</a>`)
      .join('<br>') || '—';
    const macLinks = ['darwin-universal', 'darwin-x64', 'darwin-arm64']
      .filter((p) => entry.platforms[p])
      .map((p) => `<a href="${entry.platforms[p]}" target="_blank">${platformDisplayName(p)}</a>`)
      .join('<br>') || '—';
    const linuxLinks = ['linux-x64', 'linux-arm64']
      .filter((p) => entry.platforms[p])
      .map((p) => `<a href="${entry.platforms[p]}" target="_blank">${platformDisplayName(p)}</a>`)
      .join('<br>') || '—';

    html += `
        <details class="version-details">
          <summary class="version-summary">
            <span class="version-number">${entry.version}</span>
            <span class="version-date">${entry.date}</span>
            <span class="expand-icon"></span>
          </summary>
          <div class="version-links">
            <strong>${platformIcon('win32')} Windows:</strong><br>${winLinks}<br><br>
            <strong>${platformIcon('darwin')} macOS:</strong><br>${macLinks}<br><br>
            <strong>${platformIcon('linux')} Linux:</strong><br>${linuxLinks}
          </div>
        </details>`;
  }
  html += '</div>'; // Close expandable-version-list
  return html;
}

// --- MAIN UPDATE FUNCTION ---

async function updateIndexHtml(): Promise<boolean> {
  console.log(`Starting update check at ${new Date().toISOString()}`);

  const results: ResultMap = {};
  let latestVersion = '0.0.0';
  const currentDate = formatDate(new Date());

  for (const [osKey, osData] of Object.entries(PLATFORMS)) {
    results[osKey] = {};
    for (const platform of osData.platforms) {
      const url = await fetchLatestDownloadUrl(platform);
      if (url) {
        const version = extractVersion(url);
        results[osKey][platform] = { url, version };
        if (version !== 'Unknown' && version.localeCompare(latestVersion, undefined, { numeric: true }) > 0) {
          latestVersion = version;
        }
      }
    }
  }

  if (latestVersion === '0.0.0') {
    console.error('Failed to retrieve any valid version information');
    return false;
  }
  console.log(`Latest version detected: ${latestVersion}`);

  const history = readVersionHistory();
  const existingVersionIndex = history.versions.findIndex(entry => entry.version === latestVersion);

  // Add new version to history if needed
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
      platforms
    };
    history.versions.unshift(newEntry); // Add to top
    saveVersionHistory(history);
  }

  try {
    // Limit to the last 3 major versions for display
    const limitedHistory = limitToLastThreeMajorVersions(history);
    
    // Get the latest version info (should be the same as before)
    const latest = limitedHistory.versions[0];
    const heroVersion = `Latest Version: v${latest.version} <span style='color:#888;font-size:0.95em;'>(released ${latest.date})</span>`;
    
    // Generate the button HTML
    const heroButtons = generateHeroButtons(latest.platforms);
    
    // Create the details table with the limited history
    const detailsTable = generateMaterialTable(limitedHistory);
    
    // Create the complete HTML file from scratch using a template
    const completeHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Download Cursor</title>
    <!-- Material 3 Web Components -->
    <script type="module" src="https://esm.run/@material/web/all.js"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap">
    <style>
        body {
            font-family: 'Roboto', Arial, sans-serif;
            background: #1c1c1e;
            margin: 0;
            padding: 0;
            min-height: 100vh;
            color: #e0e0e0;
        }
        main {
            max-width: 900px;
            margin: 0 auto;
            padding: 2rem 1rem 3rem 1rem;
        }
        .hero-card {
            margin-top: 2rem;
            margin-bottom: 2.5rem;
            padding: 0;
            background: linear-gradient(120deg, #2c3e50 0%, #1e2a38 100%);
            box-shadow: 0 8px 32px rgba(0,0,0,0.16);
            border-radius: 24px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
        .hero-content {
            padding: 2.5rem 2rem 2rem 2rem;
        }
        .hero-title {
            font-size: 2.7rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            letter-spacing: -1px;
            color: #ffffff;
        }
        .hero-version {
            font-size: 1.2rem;
            color: #64b5f6;
            font-weight: 500;
            margin-bottom: 1.2rem;
        }
        .hero-desc {
            font-size: 1.1rem;
            color: #bdc3c7;
            margin-bottom: 2rem;
        }
        .download-buttons {
            display: flex;
            flex-direction: column;
            gap: 1.2rem;
            justify-content: center;
            margin-bottom: 1.5rem;
        }
        .button-group {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            justify-content: center;
            margin-bottom: 0.5rem;
        }
        .note {
            color: #95a5a6;
            font-size: 0.98rem;
            margin-bottom: 0.5rem;
        }
        .details-card {
            background: #2a2a2c;
            border-radius: 18px;
            box-shadow: 0 2px 12px rgba(0,0,0,0.2);
            padding: 1.5rem;
            margin-bottom: 2rem;
        }

        /* Styles for expandable version list - THESE ARE THE CRITICAL STYLES */
        .expandable-version-list {
            margin-top: 0;
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
        }
        .expandable-version-list .version-details {
            width: 100%;
            background-color: #2b2d2f;
            border-radius: 8px;
            border: 1px solid #3e4042;
            box-shadow: 0 1px 2px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.1);
            overflow: hidden;
            transition: box-shadow 0.25s ease-in-out, border-color 0.25s ease-in-out;
        }
        .expandable-version-list .version-details:hover {
             border-color: #505254;
             box-shadow: 0 2px 4px rgba(0,0,0,0.15), 0 4px 8px rgba(0,0,0,0.15);
        }
        .expandable-version-list .version-summary {
            display: grid;
            grid-template-columns: 1fr auto auto;
            align-items: center;
            padding: 14px 18px;
            cursor: pointer;
            transition: background-color 0.2s ease-in-out;
        }
        .expandable-version-list .version-details[open] .version-summary {
            background-color: #303234;
            border-bottom: 1px solid #3e4042;
        }
        .expandable-version-list .version-summary:hover {
            background-color: #333537;
        }
        .expandable-version-list .version-number {
            font-family: 'Roboto', Arial, sans-serif;
            font-size: 1.05rem;
            font-weight: 500;
            color: #e8e8e8;
        }
        .expandable-version-list .version-date {
            font-family: 'Roboto', Arial, sans-serif;
            font-size: 0.85rem; 
            color: #9e9e9e;
            justify-self: end;
            margin-right: 1.25rem;
        }
        .expandable-version-list .version-links {
            padding: 18px 20px;
            background-color: #26282a;
            color: #c0c0c0;
        }
        .expandable-version-list .version-links strong {
            font-family: 'Roboto', Arial, sans-serif;
            font-size: 0.9rem; 
            font-weight: 500;
            color: #8ab4f8;
            display: block;
            margin-bottom: 6px;
        }
        .expandable-version-list .version-links a {
            font-family: 'Roboto', Arial, sans-serif;
            font-size: 0.9rem;
            font-weight: 400;
            color: #8ab4f8;
            text-decoration: none;
            display: inline-block;
            padding: 2px 0;
        }
         .expandable-version-list .version-links a:hover {
            text-decoration: underline;
            color: #a6cfff;
        }
        .expandable-version-list .expand-icon {
            display: inline-block;
            width: 0.6em; 
            height: 0.6em;
            border-right: 0.18em solid #9e9e9e;
            border-bottom: 0.18em solid #9e9e9e;
            transform: rotate(45deg) translateY(-0.1em);
            transition: transform 0.25s ease-in-out, border-color 0.2s ease-in-out;
            justify-self: end;
        }
        .expandable-version-list .version-details[open] .expand-icon {
            transform: rotate(-135deg) translateY(0.1em);
            border-color: #8ab4f8;
        }
        .expandable-version-list summary::-webkit-details-marker {
            display: none;
        }
        .expandable-version-list summary {
            list-style: none;
        }
        .expandable-version-list summary::marker {
            display: none;
        }
        /* END Styles for expandable version list */

        footer {
            text-align: center;
            color: #7f8c8d; /* Softer grey for footer text */
            font-size: 0.85rem; /* Slightly smaller font */
            margin-top: 3rem; /* Increased space from main content */
            padding: 1.5rem 0 2rem 0; /* Adjusted top and bottom padding */
            border-top: 1px solid #3e4042; /* Subtle separator line */
        }
        footer a {
            color: #8ab4f8; /* Link color consistent with other links */
            text-decoration: none;
        }
        footer a:hover {
            text-decoration: underline;
            color: #a6cfff; /* Brighter on hover */
        }
        @media (max-width: 600px) {
            .hero-title { font-size: 2rem; }
            .hero-content { padding: 1.2rem 0.5rem; }
            .details-card { padding: 1rem 0.2rem; }
        }
    </style>
</head>
<body>
    <main>
        <!-- HERO SECTION -->
        <section class="hero-card" id="hero-section">
            <div class="hero-content">
                <div class="hero-title">Download Cursor</div>
                <div class="hero-version" id="latest-version">${heroVersion}</div>
                <div class="hero-desc">
                    The fastest, AI-powered code editor. Download the latest version for your platform.<br>
                    <span class="note">All download links are direct from Cursor's official servers.</span>
                </div>
                <div class="download-buttons" id="download-buttons">
${heroButtons}
                </div>
            </div>
        </section>

        <!-- DETAILS SECTION -->
        <section class="details-card">
            <h2 style="margin-top:0; font-size:1.5rem; color:#64b5f6; font-weight:600;">All Versions & Platforms</h2>
            <div id="details-table">
${detailsTable}
            </div>
        </section>
    </main>
    <footer>
        <div>This site is automatically generated. View the source on <a href="https://github.com/accesstechnology-mike/downloadcursor.app" target="_blank">GitHub</a>.</div>
    </footer>
</body>
</html>`;

    // Write the complete HTML to the file
    const indexPath = path.join(process.cwd(), 'index.html');
    fs.writeFileSync(indexPath, completeHtml, 'utf8');
    console.log('index.html completely replaced with fresh template.');
    return true;
  } catch (error) {
    console.error('Error updating index.html:', error instanceof Error ? error.message : 'Unknown error');
    return false;
  }
}

/**
 * Generate Markdown content for README.md
 */
function generateReadmeMarkdown(latestVersion: string, releaseDate: string): string {
  const repoUrl = "https://github.com/accesstechnology-mike/downloadcursor.app";
  // It's common for Vercel projects to use the repo name as the domain or a subdomain.
  // User can update this if the live site URL is different.
  const liveSiteUrl = "https://downloadcursor.app"; 

  return `
# Cursor Download Hub

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
    cd ${repoUrl.split("/").pop()}
    \`\`\`
2.  Install dependencies:
    \`\`\`bash
    bun install
    \`\`\`
3.  Run the update script (fetches latest links, builds \`index.html\`, and updates this \`README.md\`):
    \`\`\`bash
    bun run scripts/update-links.ts
    \`\`\`
4.  To serve \`index.html\` locally (e.g., for quick viewing, though it's a static file):
    \`\`\`bash
    bun run dev 
    \`\`\`
    (Note: \`bun run dev\` uses Bun's simple HTTP server. The \`index.html\` is fully generated by the update script.)


## How it Works

The \`scripts/update-links.ts\` script fetches the latest download URLs from the official Cursor API. It then:
1.  Generates the \`index.html\` page with the latest links and version history.
2.  Updates the \`version-history.json\` file (pruning to the last 3 major versions).
3.  Updates this \`README.md\` with the latest version information and project details.

A GitHub Actions workflow in \`.github/workflows/update.yml\` runs this script periodically to keep the site and version information up-to-date.
`;
}

/**
 * Main function to run the update with proper error handling
 */
async function main(): Promise<void> {
  try {
    const startTime = Date.now();
    console.log(`Starting update process at ${new Date().toISOString()}`);

    const indexUpdated = await updateIndexHtml();
    const elapsedTime = Date.now() - startTime;

    if (indexUpdated) {
      console.log(`Update for index.html completed successfully in ${elapsedTime}ms. Index.html possibly updated.`);
    } else {
      console.log(`Update for index.html completed in ${elapsedTime}ms. No new version found or error occurred for index.html.`);
    }

    // Read history, limit it, and save it.
    // This ensures version-history.json is pruned correctly.
    let history = readVersionHistory(); // Read fresh, possibly updated by updateIndexHtml
    history = limitToLastThreeMajorVersions(history);
    saveVersionHistory(history); // Save the pruned history

    // After updating index.html and version-history.json, update README.md
    if (history.versions.length > 0) {
      const latestEntry = history.versions[0]; // The actual latest version after pruning and sorting
      const readmeContent = generateReadmeMarkdown(latestEntry.version, latestEntry.date);
      const readmePath = path.join(process.cwd(), 'README.md');
      fs.writeFileSync(readmePath, readmeContent.trim(), 'utf8');
      console.log('README.md updated successfully.');
    } else {
      console.warn('Skipping README.md update as version history is empty.');
    }
    

    const historyPath = path.join(process.cwd(), 'version-history.json');
    if (!fs.existsSync(historyPath)) {
      console.warn('Warning: version-history.json does not exist after update.');
    } else {
      try {
        const content = fs.readFileSync(historyPath, 'utf8');
        JSON.parse(content) as VersionHistory;
        console.log('Verified version-history.json exists and contains valid JSON.');
      } catch (err) {
        console.warn('Warning: version-history.json exists but contains invalid JSON:',
          err instanceof Error ? err.message : 'Unknown error');
      }
    }
  } catch (error) {
    console.error('Critical error during update process:', error instanceof Error ? error.message : 'Unknown error');
    process.exit(1);
  }
}

export {
  fetchLatestDownloadUrl,
  updateIndexHtml,
  readVersionHistory,
  saveVersionHistory,
  extractVersion,
  formatDate,
  main
};

// Check if this file is being executed directly
if (import.meta.url.endsWith('update-links.ts')) {
  main().catch(error => {
    console.error('Unhandled error:', error instanceof Error ? error.message : 'Unknown error');
    process.exit(1);
  });
} 