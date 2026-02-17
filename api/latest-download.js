const fs = require("fs");
const path = require("path");

async function readVersionHistory(req) {
  const candidatePaths = [
    path.join(process.cwd(), "version-history.json"),
    path.join(__dirname, "..", "version-history.json"),
  ];

  for (const historyPath of candidatePaths) {
    try {
      if (fs.existsSync(historyPath)) {
        const raw = fs.readFileSync(historyPath, "utf-8");
        return JSON.parse(raw);
      }
    } catch {}
  }

  // Fallback to HTTP fetch from the same host if local file not available
  try {
    const base = req?.headers?.host
      ? `https://${req.headers.host}`
      : "https://downloadcursor.app";
    const res = await fetch(new URL("/version-history.json", base));
    if (res.ok) {
      return await res.json();
    }
  } catch {}

  throw new Error("version-history.json not found");
}

function getLatestVersion(history) {
  if (!history || !Array.isArray(history.versions) || history.versions.length === 0) {
    return null;
  }
  return history.versions[0];
}

function normalizePlatformParam(param) {
  if (!param) return null;
  const p = String(param).toLowerCase();
  // Accept canonical keys exactly as in version-history.json
  // Also accept a few friendly aliases commonly used by users/tools
  const aliases = {
    windows: "win32-x64-user",
    "windows-user": "win32-x64-user",
    "windows-system": "win32-x64-system",
    mac: "darwin-universal",
    macos: "darwin-universal",
    "macos-arm64": "darwin-arm64",
    "macos-x64": "darwin-x64",
    linux: "linux-x64",
    "linux-x64": "linux-x64",
    "linux-arm64": "linux-arm64",
  };
  return aliases[p] || param; // if user passed canonical key, keep as-is
}

module.exports = async (req, res) => {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store, must-revalidate");

  try {
    const history = await readVersionHistory(req);
    const latest = getLatestVersion(history);

    if (!latest) {
      return res.status(500).json({ error: "No version data available" });
    }

    const urlParams = new URL(req.url, `http://${req.headers.host}`);
    const platformParam = normalizePlatformParam(urlParams.searchParams.get("platform"));

    // If a platform is specified, return a minimal, LLM-friendly JSON for that platform
    if (platformParam) {
      const url = latest.platforms?.[platformParam];
      const details = latest.platformDetails?.[platformParam];

      if (!url) {
        const available = Object.keys(latest.platforms || {});
        return res.status(404).json({
          error: "Unknown or unavailable platform",
          platform: platformParam,
          availablePlatforms: available,
        });
      }

      return res.status(200).json({
        version: latest.version,
        date: latest.date,
        platform: platformParam,
        url,
        sizeBytes: details?.sizeBytes ?? null,
        sha256: details?.sha256 ?? null,
      });
    }

    // Otherwise return concise metadata for the latest release
    return res.status(200).json({
      version: latest.version,
      date: latest.date,
      platforms: latest.platforms || {},
      platformDetails: latest.platformDetails || {},
    });
  } catch (err) {
    console.error("/api/latest-download error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};
