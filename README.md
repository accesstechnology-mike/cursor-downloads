# Cursor Download Hub

A simple, automatically updated site providing the latest download links for the [Cursor](https://cursor.com) code editor.

**Live Site:** [downloadcursor.app](https://downloadcursor.app)

**Latest Version:** v1.3.6 (Released: 2025-07-30)

## Features

- Displays download links for Windows, macOS, and Linux.
- Version history for the last 3 major versions using an expandable UI.
- Dark theme.
- Automatically updates when new versions of Cursor are released (via GitHub Actions).
- Hero section with direct download buttons for popular platforms.

## Development

1.  Clone the repository:
    ```bash
    git clone https://github.com/accesstechnology-mike/downloadcursor.app.git
    cd downloadcursor.app
    ```
2.  Install dependencies:
    ```bash
    bun install
    ```
3.  Run the update script (fetches latest links and updates this `README.md`):
    ```bash
    bun run scripts/update-links.ts
    ```
4.  To serve `index.html` locally (e.g., for quick viewing, though it's a static file):
    ```bash
    bun run dev
    ```
    (Note: `bun run dev` uses Bun's simple HTTP server. The `index.html` is a static file maintained separately.)

## How it Works

The `scripts/update-links.ts` script fetches the latest download URLs from the official Cursor API. It then:

1.  Updates the `version-history.json` file (pruning to the last 3 major versions).
2.  Updates this `README.md` with the latest version information and project details.

A GitHub Actions workflow in `.github/workflows/update.yml` runs this script periodically to keep the site and version information up-to-date.
