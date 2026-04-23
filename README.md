# Cursor Download Hub

A simple, automatically updated site providing the latest download links for the [Cursor](https://cursor.com) code editor.

**Live Site:** [downloadcursor.app](https://downloadcursor.app)

### JSON API (LLM-friendly)

- **Latest release (all platforms):** `https://downloadcursor.app/api/latest-download`
- **Latest for a specific platform:** `https://downloadcursor.app/api/latest-download?platform=<key>`

Supported platform keys include: `win32-x64-user`, `win32-x64-system`, `win32-arm64-user`, `win32-arm64-system`, `darwin-universal`, `darwin-arm64`, `darwin-x64`, `linux-x64`, `linux-arm64`. Aliases accepted: `windows`, `windows-user`, `windows-system`, `mac`, `macos`, `macos-arm64`, `macos-x64`, `linux`.

Example response (platform-filtered):

```json
{
  "version": "<version>",
  "date": "<date>",
  "platform": "win32-x64-user",
  "url": "https://downloads.cursor.com/.../CursorUserSetup-x64-<version>.exe",
  "sizeBytes": <sizeBytes>,
  "sha256": "<sha256>"
}
```

For the full machine-readable history, you can also use `https://downloadcursor.app/version-history.json`.

![GitHub stars](https://img.shields.io/github/stars/accesstechnology-mike/cursor-downloads?style=social)
![Last commit](https://img.shields.io/github/last-commit/accesstechnology-mike/cursor-downloads)
![Update workflow](https://img.shields.io/github/actions/workflow/status/accesstechnology-mike/cursor-downloads/update.yml?branch=main)
[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-%E2%98%95%EF%B8%8F-orange?labelColor=555&style=flat)](https://coff.ee/mikethrussell)

## Why this exists

- **Rollbacks and pinning**: Browse every available version and grab the exact installer link to quickly downgrade when a release breaks an extension, setting, or workflow.
- **Reproducible installs**: Pin a specific URL in scripts or CI to ensure teammates and servers install the same Cursor version every time.
- **Cross‑platform variants**: Clear links for Windows User/System installers, macOS Universal/Apple Silicon/Intel, and Linux x64/ARM64.
- **Pre‑release visibility**: Surfaces prereleases when available so early adopters can test fixes before they ship to stable.
- **Automation‑friendly**: Machine‑readable `version-history.json` and predictable link structure make it easy to integrate with tooling.

<h2 align="center" style="font-size:2rem; margin-top:2.5em; margin-bottom:0.5em;">
  <strong>Latest Version:</strong> v3.1.17 <span style="font-size:1.2rem; font-weight:normal;">(Released: 2026-04-20)</span>
</h2>

# Downloads (latest)

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/fce1e9ab7844f9ea35793da01e634aa7e50bce90/win32/x64/user-setup/CursorUserSetup-x64-3.1.17.exe)     | 178.7 MB | `620ce01d23e8ba565a98dfa82c60b0cc038b7333d2d7f68fe4211b28dd52818e` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/fce1e9ab7844f9ea35793da01e634aa7e50bce90/win32/x64/system-setup/CursorSetup-x64-3.1.17.exe)       | 178.7 MB | `14f6e7c8244175496bf8be1af05a7004d7013b6928576a0cdc350705baa8808d` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/fce1e9ab7844f9ea35793da01e634aa7e50bce90/win32/arm64/user-setup/CursorUserSetup-arm64-3.1.17.exe) | 169.8 MB | `df7d23b545b29c6c72f2dc9de36d80bd783d59bb5a38aa9c69d368a0e44c308b` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/fce1e9ab7844f9ea35793da01e634aa7e50bce90/win32/arm64/system-setup/CursorSetup-arm64-3.1.17.exe)   | 169.8 MB | `7bc46d3e82084b3a29832a4bad20997fe533310f79b7e6d620202b6332639a84` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/fce1e9ab7844f9ea35793da01e634aa7e50bce90/darwin/universal/Cursor-darwin-universal.zip)            | 396.2 MB | `9a8f504dde71e5da442c1d62394ffe7f60edfc598d7feb24e88311eb0c744ba0` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/fce1e9ab7844f9ea35793da01e634aa7e50bce90/darwin/arm64/Cursor-darwin-arm64.zip)                    | 257.8 MB | `2c308456eb5b834da262fe4f3cca744e179e68eb25591d0b4f83c3b742956290` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/fce1e9ab7844f9ea35793da01e634aa7e50bce90/darwin/x64/Cursor-darwin-x64.zip)                        | 267.0 MB | `2d68f308fbad2e2355beea0dbdeb86b2132106e1e3efc92b809ecb637fa16d3d` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/fce1e9ab7844f9ea35793da01e634aa7e50bce90/linux/x64/Cursor-3.1.17-x86_64.AppImage.zsync)           | 502.3 KB | `f0288278a10d04932ffe1124e5d5ad928d36b3e802fdfa8fe4b258853396854f` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/fce1e9ab7844f9ea35793da01e634aa7e50bce90/linux/arm64/Cursor-3.1.17-aarch64.AppImage.zsync)        | 457.3 KB | `b31a0f10befdf9822b4f6265097e5f631d9d5e194a2e8d40ea43f3132f38e53c` |

## Security & integrity

- All download links resolve directly to Cursor's official distribution servers (`downloads.cursor.com` / official endpoints).
- For additional peace of mind, verify the SHA‑256 checksums locally after download.
- Always prefer downloading from official sources.

<details open>
<summary style="font-size:1.35em; padding:0.5em 0;"><strong>All versions</strong></summary>

<div style="font-size:1.13em; line-height:1.7;">

#### v3.1.17 — 2026-04-20

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/fce1e9ab7844f9ea35793da01e634aa7e50bce90/win32/x64/user-setup/CursorUserSetup-x64-3.1.17.exe)     | 178.7 MB | `620ce01d23e8ba565a98dfa82c60b0cc038b7333d2d7f68fe4211b28dd52818e` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/fce1e9ab7844f9ea35793da01e634aa7e50bce90/win32/x64/system-setup/CursorSetup-x64-3.1.17.exe)       | 178.7 MB | `14f6e7c8244175496bf8be1af05a7004d7013b6928576a0cdc350705baa8808d` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/fce1e9ab7844f9ea35793da01e634aa7e50bce90/win32/arm64/user-setup/CursorUserSetup-arm64-3.1.17.exe) | 169.8 MB | `df7d23b545b29c6c72f2dc9de36d80bd783d59bb5a38aa9c69d368a0e44c308b` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/fce1e9ab7844f9ea35793da01e634aa7e50bce90/win32/arm64/system-setup/CursorSetup-arm64-3.1.17.exe)   | 169.8 MB | `7bc46d3e82084b3a29832a4bad20997fe533310f79b7e6d620202b6332639a84` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/fce1e9ab7844f9ea35793da01e634aa7e50bce90/darwin/universal/Cursor-darwin-universal.zip)            | 396.2 MB | `9a8f504dde71e5da442c1d62394ffe7f60edfc598d7feb24e88311eb0c744ba0` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/fce1e9ab7844f9ea35793da01e634aa7e50bce90/darwin/arm64/Cursor-darwin-arm64.zip)                    | 257.8 MB | `2c308456eb5b834da262fe4f3cca744e179e68eb25591d0b4f83c3b742956290` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/fce1e9ab7844f9ea35793da01e634aa7e50bce90/darwin/x64/Cursor-darwin-x64.zip)                        | 267.0 MB | `2d68f308fbad2e2355beea0dbdeb86b2132106e1e3efc92b809ecb637fa16d3d` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/fce1e9ab7844f9ea35793da01e634aa7e50bce90/linux/x64/Cursor-3.1.17-x86_64.AppImage.zsync)           | 502.3 KB | `f0288278a10d04932ffe1124e5d5ad928d36b3e802fdfa8fe4b258853396854f` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/fce1e9ab7844f9ea35793da01e634aa7e50bce90/linux/arm64/Cursor-3.1.17-aarch64.AppImage.zsync)        | 457.3 KB | `b31a0f10befdf9822b4f6265097e5f631d9d5e194a2e8d40ea43f3132f38e53c` |

#### v3.1.15 — 2026-04-15

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/3a67af7b780e0bfc8d32aefa96b8ff1cb8817f88/win32/x64/user-setup/CursorUserSetup-x64-3.1.15.exe)     | 178.7 MB | `08e1b14294e05907bce4d4164cb7ebabc1dda6fde0b3a57453ce1ad5ffe678fa` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/3a67af7b780e0bfc8d32aefa96b8ff1cb8817f88/win32/x64/system-setup/CursorSetup-x64-3.1.15.exe)       | 178.7 MB | `d667e13c7e538e11b23569071f2a47b271494038f9ae0be6c424a30c318bc73b` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/3a67af7b780e0bfc8d32aefa96b8ff1cb8817f88/win32/arm64/user-setup/CursorUserSetup-arm64-3.1.15.exe) | 169.8 MB | `1c20ed9ad26d54ec3bb0f19fe0e718b0833c57e17b88834551dc71f90c69da85` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/3a67af7b780e0bfc8d32aefa96b8ff1cb8817f88/win32/arm64/system-setup/CursorSetup-arm64-3.1.15.exe)   | 169.8 MB | `e8b2d6b3d8cf7dcb1878c420bb7c45951fdd2392d90164d29d56cfea4e1bb5b0` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/3a67af7b780e0bfc8d32aefa96b8ff1cb8817f88/darwin/universal/Cursor-darwin-universal.zip)            | 396.2 MB | `351881adde20ba752f6366c5a9c798f6a42783f78da7894d7aba230a2d8f94b4` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/3a67af7b780e0bfc8d32aefa96b8ff1cb8817f88/darwin/arm64/Cursor-darwin-arm64.zip)                    | 257.8 MB | `e0b65b57d30d94eb668151c9b44d474f7fbb9c78a2bc4ec1bdff1a537bbc21a2` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/3a67af7b780e0bfc8d32aefa96b8ff1cb8817f88/darwin/x64/Cursor-darwin-x64.zip)                        | 267.0 MB | `759712de7745d847806334e83dc7b46f2a2981fcd51cf4ec8e0c9b97ca39bcbe` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/3a67af7b780e0bfc8d32aefa96b8ff1cb8817f88/linux/x64/Cursor-3.1.15-x86_64.AppImage.zsync)           | 502.3 KB | `89177dcc33d60f25a64d70bfba239846bc208272f440bc5fa72b9bd118ed17f1` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/3a67af7b780e0bfc8d32aefa96b8ff1cb8817f88/linux/arm64/Cursor-3.1.15-aarch64.AppImage.zsync)        | 457.3 KB | `b65e1f1ff4abdafaeec5e629751331eacb9e406e0d507c6efbb987167750d7a1` |

#### v3.1.14 — 2026-04-14

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/d8673fb56ba50fda33ad78382000b519bb8acb7e/win32/x64/user-setup/CursorUserSetup-x64-3.1.14.exe)     | 178.8 MB | `5f19f5e0bd919205c7b6675e3bd22a00a6ccb8525e89dd59df3d37d1c3985844` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/d8673fb56ba50fda33ad78382000b519bb8acb7e/win32/x64/system-setup/CursorSetup-x64-3.1.14.exe)       | 178.8 MB | `ad341c2685daa9f28e8b5668b560f3d369b3533e1118388bf2d93824731786f5` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/d8673fb56ba50fda33ad78382000b519bb8acb7e/win32/arm64/user-setup/CursorUserSetup-arm64-3.1.14.exe) | 169.9 MB | `6c0938ae9db2857f882bbefed81624d29567044579855b6e8fb01b1bfa4f08fe` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/d8673fb56ba50fda33ad78382000b519bb8acb7e/win32/arm64/system-setup/CursorSetup-arm64-3.1.14.exe)   | 169.9 MB | `eeeebf51530ba3e3c502f1fb13bf4acb9dc8dbc37f80e59e63bab1f79be3c41a` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/d8673fb56ba50fda33ad78382000b519bb8acb7e/darwin/universal/Cursor-darwin-universal.zip)            | 396.2 MB | `2613b7850237fb591268c6541e175393098238ffa86d1659d4c755b615ebcd4b` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/d8673fb56ba50fda33ad78382000b519bb8acb7e/darwin/arm64/Cursor-darwin-arm64.zip)                    | 257.8 MB | `6c763800e44447a0aabf1c713cf895f2d951e6b785be45dc7652a8771819d754` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/d8673fb56ba50fda33ad78382000b519bb8acb7e/darwin/x64/Cursor-darwin-x64.zip)                        | 267.0 MB | `40d8681e4361c0cb44f98b80a16bb8c4c854e3bbefb55027651f0510b7c7a2a1` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/d8673fb56ba50fda33ad78382000b519bb8acb7e/linux/x64/Cursor-3.1.14-x86_64.AppImage.zsync)           | 502.2 KB | `8812cf9e957bca826c04abc105c1084992564762899eba4d33a6e04e8caa55a9` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/d8673fb56ba50fda33ad78382000b519bb8acb7e/linux/arm64/Cursor-3.1.14-aarch64.AppImage.zsync)        | 457.3 KB | `c82d5b4ad7042ed35655de25afdf3b560a55913ea02195a06a956f5e053f7ca0` |

#### v3.1.10 — 2026-04-13

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/dacbe9b31599a253763e4910eb6ab3870465332c/win32/x64/user-setup/CursorUserSetup-x64-3.1.10.exe)     | 178.7 MB | `86b437e2d12a9466c7b7c4c9f3738b6c76ee5b97ba4d69e8842143e3c79b5d50` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/dacbe9b31599a253763e4910eb6ab3870465332c/win32/x64/system-setup/CursorSetup-x64-3.1.10.exe)       | 178.7 MB | `02bf36d917c69db591cee1f47ce45be8769f42890c5373361b2a3ddaa9a40a4d` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/dacbe9b31599a253763e4910eb6ab3870465332c/win32/arm64/user-setup/CursorUserSetup-arm64-3.1.10.exe) | 169.8 MB | `be6e3a76c98303b6878f4fcaf6c5206703c10445fd53985b58efe53c8c22aea0` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/dacbe9b31599a253763e4910eb6ab3870465332c/win32/arm64/system-setup/CursorSetup-arm64-3.1.10.exe)   | 169.8 MB | `62ee7a3cb06e208597e71ca8c69b4fc760cbbb51b6c0b49337e2416de33ac06f` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/dacbe9b31599a253763e4910eb6ab3870465332c/darwin/universal/Cursor-darwin-universal.zip)            | 396.2 MB | `9180ae35a4df55ab986a576601f303bbebe75bcc62c77e536ee189d97712041d` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/dacbe9b31599a253763e4910eb6ab3870465332c/darwin/arm64/Cursor-darwin-arm64.zip)                    | 257.8 MB | `7eb3950a1d058281e040715982395e60c60a5ad81256c8dcf515cbd0c6eab167` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/dacbe9b31599a253763e4910eb6ab3870465332c/darwin/x64/Cursor-darwin-x64.zip)                        | 267.0 MB | `beab6f3f7e096909affe1d6d42fd819f25b66852075eb777abae9839b8e52608` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/dacbe9b31599a253763e4910eb6ab3870465332c/linux/x64/Cursor-3.1.10-x86_64.AppImage.zsync)           | 502.3 KB | `b8e86a7e7b5334bc63b08d2ea23c26dfd0ac0445ff10dc6cfff88a3c52efa4cf` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/dacbe9b31599a253763e4910eb6ab3870465332c/linux/arm64/Cursor-3.1.10-aarch64.AppImage.zsync)        | 457.3 KB | `330ab99927cc3d7ad17be941d9458cfc00dd478104b3e56f47c979d189b40fe2` |

#### v3.0.16 — 2026-04-09

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/475871d112608994deb2e3065dfb7c6b0baa0c54/win32/x64/user-setup/CursorUserSetup-x64-3.0.16.exe)     | 179.3 MB | `a7248a79ac5957456d738f3021410159de1f9d4e8aa0087eb5e9ed9d82e3d918` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/475871d112608994deb2e3065dfb7c6b0baa0c54/win32/x64/system-setup/CursorSetup-x64-3.0.16.exe)       | 179.3 MB | `75ab7093bc90f56261d09eb7c247b1315af065b42afbdbe02f3e0f1c79f3946c` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/475871d112608994deb2e3065dfb7c6b0baa0c54/win32/arm64/user-setup/CursorUserSetup-arm64-3.0.16.exe) | 170.3 MB | `f46f58af3b68b3b11b4b6e3ea3a49f6d234e8714d878d7ea76f3b97f299ca44e` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/475871d112608994deb2e3065dfb7c6b0baa0c54/win32/arm64/system-setup/CursorSetup-arm64-3.0.16.exe)   | 170.3 MB | `44b90f604104e41ce0f0ec05e38a138bc9c807c2970db6905d58772a40e98e35` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/475871d112608994deb2e3065dfb7c6b0baa0c54/darwin/universal/Cursor-darwin-universal.zip)            | 396.9 MB | `8fd704eb81bfcef1e99dccb67ac25877d089cb45c3a5055abe7b97f14be250f2` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/475871d112608994deb2e3065dfb7c6b0baa0c54/darwin/arm64/Cursor-darwin-arm64.zip)                    | 258.4 MB | `a7a28894fc93725d0565ef014bef90de1488d9c4b66ad1f3f0abada9ace2f8df` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/475871d112608994deb2e3065dfb7c6b0baa0c54/darwin/x64/Cursor-darwin-x64.zip)                        | 267.6 MB | `f6e77ca95ae06b5300102985c01c736b5464e3318b7d6187c575f1df782fc933` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/475871d112608994deb2e3065dfb7c6b0baa0c54/linux/x64/Cursor-3.0.16-x86_64.AppImage.zsync)           | 503.5 KB | `ff3a82e2dfbfedacb02be666f1b50d85549ee0c49a36f8671ec142fbff811a42` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/475871d112608994deb2e3065dfb7c6b0baa0c54/linux/arm64/Cursor-3.0.16-aarch64.AppImage.zsync)        | 458.3 KB | `750faaf7cc45e769e5bff63adf68ad97edcfa9e41103c9d4b49bec439d68c549` |

#### v3.0.13 — 2026-04-07

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/48a15759f53cd5fc9b5c20936ad7d79847d914b5/win32/x64/user-setup/CursorUserSetup-x64-3.0.13.exe)     | 179.2 MB | `54d33017430a431596d2ca36ecb63f3858d0e5e1302c53a8c318094f2ef3d23d` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/48a15759f53cd5fc9b5c20936ad7d79847d914b5/win32/x64/system-setup/CursorSetup-x64-3.0.13.exe)       | 179.2 MB | `e28116738637ee473fc345f4e1e29a3e31f12784019d1b0157ff49ce77e16708` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/48a15759f53cd5fc9b5c20936ad7d79847d914b5/win32/arm64/user-setup/CursorUserSetup-arm64-3.0.13.exe) | 170.3 MB | `d2a6986503b4dde36c19ec6bbef0585a4d2df20dbb73da007c1e6b32c504ccb6` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/48a15759f53cd5fc9b5c20936ad7d79847d914b5/win32/arm64/system-setup/CursorSetup-arm64-3.0.13.exe)   | 170.3 MB | `c65d730e7caca5afe513433b66b6462f923eb1f68c83961b5ff5c30060ab94e1` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/48a15759f53cd5fc9b5c20936ad7d79847d914b5/darwin/universal/Cursor-darwin-universal.dmg)            | 386.3 MB | `7cfb67c79746fab33947854fd9a911de90d4787c2936d6ad5acf8e074704b133` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/48a15759f53cd5fc9b5c20936ad7d79847d914b5/darwin/arm64/Cursor-darwin-arm64.dmg)                    | 248.1 MB | `a9178b16a9fda9e7fde762d360999a284982875f8d7a104507f7f0a810eb5025` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/48a15759f53cd5fc9b5c20936ad7d79847d914b5/darwin/x64/Cursor-darwin-x64.dmg)                        | 257.2 MB | `40cc3cc8b2b4929cb8449fa78ffa065c604514da4152493b157abe380c50d364` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/48a15759f53cd5fc9b5c20936ad7d79847d914b5/linux/x64/Cursor-3.0.13-x86_64.AppImage)                 | 287.6 MB | `31bb505a47f653c7bffe9028638986168c458bfef3c309c8fe3ca55391f180ce` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/48a15759f53cd5fc9b5c20936ad7d79847d914b5/linux/arm64/Cursor-3.0.13-aarch64.AppImage)              | 261.8 MB | `01049d883af5e671b729a0a4ceeaa44e175b968012162c059115b9fb8600461d` |

#### v3.0.12 — 2026-04-04

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/a80ff7dfcaa45d7750f6e30be457261379c29b06/win32/x64/user-setup/CursorUserSetup-x64-3.0.12.exe)     | 179.2 MB | `8f25f7297361c915a785c9aa8ac38787399a6ec9e4fd6d3f4750727ce6f51e20` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/a80ff7dfcaa45d7750f6e30be457261379c29b06/win32/x64/system-setup/CursorSetup-x64-3.0.12.exe)       | 179.2 MB | `1ba2e7f58c959d60fba8200f3dc0eee735d70596511baece4d88e97959a1af58` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/a80ff7dfcaa45d7750f6e30be457261379c29b06/win32/arm64/user-setup/CursorUserSetup-arm64-3.0.12.exe) | 170.3 MB | `dff22ea80cf3ac022a4c456266e26c6eef5e3c51fb569f439e37ee7eb560c2a4` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/a80ff7dfcaa45d7750f6e30be457261379c29b06/win32/arm64/system-setup/CursorSetup-arm64-3.0.12.exe)   | 170.3 MB | `2cbd7a774634944bc6f05b789e33db95da97997c6b10b28b250072013da963cb` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/a80ff7dfcaa45d7750f6e30be457261379c29b06/darwin/universal/Cursor-darwin-universal.zip)            | 396.9 MB | `e5b6db11cac651a959d7bca592afa3c0a14a92149334471075f66560924bc134` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/a80ff7dfcaa45d7750f6e30be457261379c29b06/darwin/arm64/Cursor-darwin-arm64.zip)                    | 258.4 MB | `55b5e1f61c12e4e92186ec1b8748fa445329cd3ff30d3af68974d9dbb10e2793` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/a80ff7dfcaa45d7750f6e30be457261379c29b06/darwin/x64/Cursor-darwin-x64.zip)                        | 267.6 MB | `21aa9727f8b22e7f918b552f9d1c0c10fcfcc1e61e97b9b54527ccb6b1fb8fee` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/a80ff7dfcaa45d7750f6e30be457261379c29b06/linux/x64/Cursor-3.0.12-x86_64.AppImage.zsync)           | 503.5 KB | `77e1a3cbee4753b227f538842177b73188f3e67335bfe8449e540aa7c7e635ab` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/a80ff7dfcaa45d7750f6e30be457261379c29b06/linux/arm64/Cursor-3.0.12-aarch64.AppImage.zsync)        | 458.3 KB | `f80d0b9f288da9af485cdff121f9450ca3fffb6d46a63734ba448dc67e412541` |

#### v3.0.9 — 2026-04-03

| Platform               | Link                                                                                                                                                | Size     | SHA256                                                             |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/93e276db8a03af947eafb2d10241e2de17806c29/win32/x64/user-setup/CursorUserSetup-x64-3.0.9.exe)     | 179.3 MB | `64e9672d14533c5873af2dd76eac9df39abdc14e72bf84359815d1f9e145f848` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/93e276db8a03af947eafb2d10241e2de17806c29/win32/x64/system-setup/CursorSetup-x64-3.0.9.exe)       | 179.3 MB | `4131d83e76a93da008c3d723940e4edb5012e6c91c47de5fec74cc2b5232c191` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/93e276db8a03af947eafb2d10241e2de17806c29/win32/arm64/user-setup/CursorUserSetup-arm64-3.0.9.exe) | 170.3 MB | `0887dc9629de1c9289db1c40387074bd7ec29b82311261e0bb56a82e05946f85` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/93e276db8a03af947eafb2d10241e2de17806c29/win32/arm64/system-setup/CursorSetup-arm64-3.0.9.exe)   | 170.3 MB | `82d0ba4457657803db5afe25524852b5a94c99e7801e292df1e8b79d0a689156` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/93e276db8a03af947eafb2d10241e2de17806c29/darwin/universal/Cursor-darwin-universal.zip)           | 396.9 MB | `f41c0e8e8e3e8e251e75e9ce4dd48d32784acac08cbf9f3c8396215ec3059b7f` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/93e276db8a03af947eafb2d10241e2de17806c29/darwin/arm64/Cursor-darwin-arm64.zip)                   | 258.4 MB | `f0faab3618e06d5187cf4425d9b48ad9c006ad1eda41c6707c7ff81785638f20` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/93e276db8a03af947eafb2d10241e2de17806c29/darwin/x64/Cursor-darwin-x64.zip)                       | 267.6 MB | `db504c4a9cc2d9c9687d349964422fa1eefaae9382032381e38c9a3d86546ea4` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/93e276db8a03af947eafb2d10241e2de17806c29/linux/x64/Cursor-3.0.9-x86_64.AppImage.zsync)           | 503.5 KB | `116e0432d806333efcfb4942665202fcc79893013a1c4c7eaa3b971e493358b1` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/93e276db8a03af947eafb2d10241e2de17806c29/linux/arm64/Cursor-3.0.9-aarch64.AppImage.zsync)        | 458.3 KB | `3e3ad4799fe2a7857f755098441b67c7fc8dfe42ec562576b6ca2ef9142b3941` |

#### v3.0.8 — 2026-04-03

| Platform               | Link                                                                                                                                                | Size     | SHA256                                                             |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/6647960cb6f6b36f1429af95df8d7887a1b87b49/win32/x64/user-setup/CursorUserSetup-x64-3.0.8.exe)     | 179.3 MB | `ed16189a11a9ef832cd96b7986c75b9f3734eb4e814a5a85a8ceb4a218028996` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/6647960cb6f6b36f1429af95df8d7887a1b87b49/win32/x64/system-setup/CursorSetup-x64-3.0.8.exe)       | 179.3 MB | `f2d424db2a6ffc02e68ce26e953b718830defa19cf4af508d388bdfcd00f0107` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/6647960cb6f6b36f1429af95df8d7887a1b87b49/win32/arm64/user-setup/CursorUserSetup-arm64-3.0.8.exe) | 170.3 MB | `05e1b76aa5b5145636048f7ab3a2fc904501ce69fbe5b743d8db1aa13b930fd9` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/6647960cb6f6b36f1429af95df8d7887a1b87b49/win32/arm64/system-setup/CursorSetup-arm64-3.0.8.exe)   | 170.3 MB | `4e46f1fdd6c8b2c1a3eed6e2b406bfd917e7826d5e4088dcfe0440583187fc3f` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/6647960cb6f6b36f1429af95df8d7887a1b87b49/darwin/universal/Cursor-darwin-universal.dmg)           | 386.3 MB | `1b7694296f81690e92e59fd6d34f0fa6a05132a94b5cbcd4f3da827bcef1cea7` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/6647960cb6f6b36f1429af95df8d7887a1b87b49/darwin/arm64/Cursor-darwin-arm64.dmg)                   | 248.1 MB | `bbab232246a1cebe7e2ef8d883889387e7f0ae1ff810a67b537886ce4c6c4064` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/6647960cb6f6b36f1429af95df8d7887a1b87b49/darwin/x64/Cursor-darwin-x64.dmg)                       | 257.2 MB | `440dff96e0b2c7e030611def16ba463399162a8745b4fb4d5b7a98406b53727a` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/c6285feaba0ad62603f7c22e72f0a170dc8415a5/linux/x64/Cursor-2.6.22-x86_64.AppImage)                | 277.0 MB | `ae63d7069207229f3bc85d0f0c986a220bed5ce5584f42571d3eba6329f08208` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/c6285feaba0ad62603f7c22e72f0a170dc8415a5/linux/arm64/Cursor-2.6.22-aarch64.AppImage)             | 252.3 MB | `90c5e6803cdaf409dd54828450561a3f1397e42ef07cd63a51658aa9d5f71251` |

#### v3.0.6 — 2026-04-03

| Platform               | Link                                                                                                                                                | Size     | SHA256                                                             |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/6e696fa8ae574d6a40e0f1dbf74bd7d823f0b0d8/win32/x64/user-setup/CursorUserSetup-x64-3.0.6.exe)     | 179.3 MB | `7a6c085c63df36bf9c76e5b6e875c9b6e63347bf981ed6620d454f363a20497d` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/6e696fa8ae574d6a40e0f1dbf74bd7d823f0b0d8/win32/x64/system-setup/CursorSetup-x64-3.0.6.exe)       | 179.3 MB | `270db3deb93c4022d5b4b0567702837341c6c58362eae251aaa387c64a0e78ab` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/6e696fa8ae574d6a40e0f1dbf74bd7d823f0b0d8/win32/arm64/user-setup/CursorUserSetup-arm64-3.0.6.exe) | 170.3 MB | `da61228d914edc83a16591afdbd1a8ac139318cf55bccacd71cf5f3607fc172f` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/6e696fa8ae574d6a40e0f1dbf74bd7d823f0b0d8/win32/arm64/system-setup/CursorSetup-arm64-3.0.6.exe)   | 170.3 MB | `bd4eda50d351ee07b74217fe241164d6e63274fae9dd5652f4e181bc1636f4c4` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/6e696fa8ae574d6a40e0f1dbf74bd7d823f0b0d8/darwin/universal/Cursor-darwin-universal.dmg)           | 386.3 MB | `d1d40d8c6b7fb52a5234bd1d37a16ea7f793f21912cc94aa38fe9e4859221053` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/6e696fa8ae574d6a40e0f1dbf74bd7d823f0b0d8/darwin/arm64/Cursor-darwin-arm64.dmg)                   | 248.1 MB | `5de5f7cc88a64ac90a5597efb8a23458113e6080eedce62741fcce629a062c03` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/6e696fa8ae574d6a40e0f1dbf74bd7d823f0b0d8/darwin/x64/Cursor-darwin-x64.dmg)                       | 257.2 MB | `cf05b5a3137d6e8d7621bf114442657d14d6086b4ef16d808fb959ab17f6fa93` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/c6285feaba0ad62603f7c22e72f0a170dc8415a5/linux/x64/Cursor-2.6.22-x86_64.AppImage)                | 277.0 MB | `ae63d7069207229f3bc85d0f0c986a220bed5ce5584f42571d3eba6329f08208` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/c6285feaba0ad62603f7c22e72f0a170dc8415a5/linux/arm64/Cursor-2.6.22-aarch64.AppImage)             | 252.3 MB | `90c5e6803cdaf409dd54828450561a3f1397e42ef07cd63a51658aa9d5f71251` |

#### v3.0.4 — 2026-04-02

| Platform               | Link                                                                                                                                                | Size     | SHA256                                                             |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/63715ffc1807793ce209e935e5c3ab9b79fddc85/win32/x64/user-setup/CursorUserSetup-x64-3.0.4.exe)     | 179.4 MB | `aca39cfec68cd5a1ec8cbe1166250f6705bdc433e7f04840c93b725e9cdaf134` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/63715ffc1807793ce209e935e5c3ab9b79fddc85/win32/x64/system-setup/CursorSetup-x64-3.0.4.exe)       | 179.4 MB | `9ad82a8efe4822b0ef971314c9d80f90b0cd3c472053b508c4d962f3f250ab7f` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/63715ffc1807793ce209e935e5c3ab9b79fddc85/win32/arm64/user-setup/CursorUserSetup-arm64-3.0.4.exe) | 170.3 MB | `9b37b8a82f8ea9a7e24ab3c4c889a8032b4ea4ef6c92b97633c016ff1712da42` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/63715ffc1807793ce209e935e5c3ab9b79fddc85/win32/arm64/system-setup/CursorSetup-arm64-3.0.4.exe)   | 170.3 MB | `9c7181672bfaa8677a76d9cd72e7b0fdd83e0f191ab8ee55f7106e49abd16d17` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/63715ffc1807793ce209e935e5c3ab9b79fddc85/darwin/universal/Cursor-darwin-universal.zip)           | 396.9 MB | `7465a3a83ce7e9378b0ff2b966408ade48588b3cab14de79dafff15efe56c8de` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/63715ffc1807793ce209e935e5c3ab9b79fddc85/darwin/arm64/Cursor-darwin-arm64.zip)                   | 258.4 MB | `919c4dd7f4156c5c1ee23ec6ca3fcd69b2d9610c41980c10a8a52d38d06e214a` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/63715ffc1807793ce209e935e5c3ab9b79fddc85/darwin/x64/Cursor-darwin-x64.zip)                       | 267.6 MB | `ea71bd6cffe16a7080aed8d2512441ef534b8db84cd0433fdb2d994e3169c625` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/63715ffc1807793ce209e935e5c3ab9b79fddc85/linux/x64/Cursor-3.0.4-x86_64.AppImage.zsync)           | 503.5 KB | `e80ae5b1d746231569a9d6b3b8943721fb3045dca93271ca72fffcad0a35f17f` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/63715ffc1807793ce209e935e5c3ab9b79fddc85/linux/arm64/Cursor-3.0.4-aarch64.AppImage.zsync)        | 458.3 KB | `aa00c94f7e07257b547c2eecef94269f8ec84fae5564cc22cf87dcc46f1df405` |

#### v2.6.22 — 2026-03-27

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/c6285feaba0ad62603f7c22e72f0a170dc8415a5/win32/x64/user-setup/CursorUserSetup-x64-2.6.22.exe)     | 171.1 MB | `6f774eae29338c1b67aec9e1f627ea8ec4fc499c27569cbcddb8c542431f50a3` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/c6285feaba0ad62603f7c22e72f0a170dc8415a5/win32/x64/system-setup/CursorSetup-x64-2.6.22.exe)       | 171.1 MB | `57d97a7778cbcc25473c661af086c26256c6464db84bd943c7282d7a7fa1b230` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/c6285feaba0ad62603f7c22e72f0a170dc8415a5/win32/arm64/user-setup/CursorUserSetup-arm64-2.6.22.exe) | 162.1 MB | `29089b4170445104d3453b5feecb2802d88169f241ff4c241b3c295e4231af28` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/c6285feaba0ad62603f7c22e72f0a170dc8415a5/win32/arm64/system-setup/CursorSetup-arm64-2.6.22.exe)   | 162.1 MB | `55bf42abb6dfd951df946de1c05c4d672eb75e06b07a51e51ee6ea0236a8fda7` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/c6285feaba0ad62603f7c22e72f0a170dc8415a5/darwin/universal/Cursor-darwin-universal.zip)            | 386.4 MB | `2d9b357a7bc789c8a6ef29c4c7897c3a94af133c4e1f4432b46fab94878f676b` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/c6285feaba0ad62603f7c22e72f0a170dc8415a5/darwin/arm64/Cursor-darwin-arm64.zip)                    | 247.4 MB | `e3d3202fb6f27e8475b5e9a7f6510f75308eaa47fe8551484edf256aaf1fcb2e` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/c6285feaba0ad62603f7c22e72f0a170dc8415a5/darwin/x64/Cursor-darwin-x64.zip)                        | 256.7 MB | `4f5a581c11f962959fd196c7f4d0ff8a8f760076fd1dfc0c1fa08e9e3be5a6a4` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/c6285feaba0ad62603f7c22e72f0a170dc8415a5/linux/x64/Cursor-2.6.22-x86_64.AppImage.zsync)           | 484.9 KB | `2b3244177c6c3a826cac730717cfc00a680a646aea23177d9b3cdefd8694220d` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/c6285feaba0ad62603f7c22e72f0a170dc8415a5/linux/arm64/Cursor-2.6.22-aarch64.AppImage.zsync)        | 441.8 KB | `2f8a1086e5088c22c0c553340a212f47cf26046ad6d8f120ca5ff59862fce3e3` |

#### v2.6.21 — 2026-03-23

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/fea2f546c979a0a4ad1deab23552a43568807592/win32/x64/user-setup/CursorUserSetup-x64-2.6.21.exe)     | 171.1 MB | `ecc9478202d6144b3b4f58d4a401e58ffbe3b9e9434adf7338bb9a1ee43f6f02` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/fea2f546c979a0a4ad1deab23552a43568807592/win32/x64/system-setup/CursorSetup-x64-2.6.21.exe)       | 171.1 MB | `3081f4d61fbbdd6d2af2b26f9523f09f950af3b81d5350824efb391117100c64` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/fea2f546c979a0a4ad1deab23552a43568807592/win32/arm64/user-setup/CursorUserSetup-arm64-2.6.21.exe) | 162.1 MB | `39a4d98b31f6827dd34b937e07cae31022ed400db65b618bc22ef0067fd448cd` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/fea2f546c979a0a4ad1deab23552a43568807592/win32/arm64/system-setup/CursorSetup-arm64-2.6.21.exe)   | 162.1 MB | `e009a39c36c27036925efd5c2502ffe16f026589ef342228da07104ebd827c34` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/fea2f546c979a0a4ad1deab23552a43568807592/darwin/universal/Cursor-darwin-universal.zip)            | 386.4 MB | `10b18f06363d709c6ba495b79b14117c278f7e60a8810834a942c5eca485e4db` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/fea2f546c979a0a4ad1deab23552a43568807592/darwin/arm64/Cursor-darwin-arm64.zip)                    | 247.5 MB | `cb8a210c607f0b69c7c892130bfce9a3f5a5a0bbaed68a51273c3869038a073b` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/fea2f546c979a0a4ad1deab23552a43568807592/darwin/x64/Cursor-darwin-x64.zip)                        | 256.7 MB | `2602f5c9f0f337fc60ed67f78c17694865d902fd948c7df1f4593dd58a873747` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/fea2f546c979a0a4ad1deab23552a43568807592/linux/x64/Cursor-2.6.21-x86_64.AppImage.zsync)           | 484.9 KB | `6edc5832ffc0027eeae521a91a00b885f010e12c90c61ecd4ce3016bdce104c6` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/fea2f546c979a0a4ad1deab23552a43568807592/linux/arm64/Cursor-2.6.21-aarch64.AppImage.zsync)        | 441.8 KB | `b69d9c90ca784447f1b7729540e8369594ace932f0f8bc14a7b23f1ecfddef33` |

#### v2.6.20 — 2026-03-17

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/b29eb4ee5f9f6d1cb2afbc09070198d3ea6ad76f/win32/x64/user-setup/CursorUserSetup-x64-2.6.20.exe)     | 171.3 MB | `13ec20471cc16b5dd473038ccfaa26d1eae66d59551a4db648eed3187638c356` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/b29eb4ee5f9f6d1cb2afbc09070198d3ea6ad76f/win32/x64/system-setup/CursorSetup-x64-2.6.20.exe)       | 171.3 MB | `418ad9b982e94afdcfce51be593db43ceee1d88fc5d3686efb419f68bd5b74d0` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/b29eb4ee5f9f6d1cb2afbc09070198d3ea6ad76f/win32/arm64/user-setup/CursorUserSetup-arm64-2.6.20.exe) | 162.2 MB | `632a95fc37e9347a562ffc76a9bcb95df03e263a4d28599727012d9fa0b7f9af` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/b29eb4ee5f9f6d1cb2afbc09070198d3ea6ad76f/win32/arm64/system-setup/CursorSetup-arm64-2.6.20.exe)   | 162.2 MB | `bb4979e65c88027aa1ae31b7397b3ef1a55d32939a6f1e5dd6b8e91384df38f9` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/b29eb4ee5f9f6d1cb2afbc09070198d3ea6ad76f/darwin/universal/Cursor-darwin-universal.zip)            | 386.4 MB | `032d870651d74ded30ddf12c5592e0e8dd846e2485c1f5dcb367d832555393c9` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/b29eb4ee5f9f6d1cb2afbc09070198d3ea6ad76f/darwin/arm64/Cursor-darwin-arm64.zip)                    | 247.4 MB | `68a4a6cfc15bbd2f0f084423bef1702f1f53fe709f37365bb1194e1985009827` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/b29eb4ee5f9f6d1cb2afbc09070198d3ea6ad76f/darwin/x64/Cursor-darwin-x64.zip)                        | 256.7 MB | `920bd44d6ced5d793101472824e619e3c1706648beeaa5ffd4c415375afeb5bc` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/b29eb4ee5f9f6d1cb2afbc09070198d3ea6ad76f/linux/x64/Cursor-2.6.20-x86_64.AppImage.zsync)           | 484.8 KB | `2006175dcb1e1876868b7431bcdd7d7c5efba8710959dadda6b4014aae575d84` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/b29eb4ee5f9f6d1cb2afbc09070198d3ea6ad76f/linux/arm64/Cursor-2.6.20-aarch64.AppImage.zsync)        | 441.8 KB | `8144ff3980cb89e8b5ea97aeca483c021968dd0573d0a869b9d24de9197b92db` |

#### v2.6.19 — 2026-03-12

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/224838f96445be37e3db643a163a817c15b3606c/win32/x64/user-setup/CursorUserSetup-x64-2.6.19.exe)     | 171.1 MB | `5ccfa69ceee2a2f501041def1c0520f5d86fbb57e977d691a2b162fd3fe56bd8` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/224838f96445be37e3db643a163a817c15b3606c/win32/x64/system-setup/CursorSetup-x64-2.6.19.exe)       | 171.1 MB | `7d2dd38bdc907e0c1360e17cc243ce0e023e70b441668e619adb020f238a80e1` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/224838f96445be37e3db643a163a817c15b3606c/win32/arm64/user-setup/CursorUserSetup-arm64-2.6.19.exe) | 162.1 MB | `c84dc4d48984157162b84c27fae955a889949a357a5821dbea5674ea1e113870` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/224838f96445be37e3db643a163a817c15b3606c/win32/arm64/system-setup/CursorSetup-arm64-2.6.19.exe)   | 162.1 MB | `32da2e06b08dd4f86b6216a1afcd05dcd70eb329f6c5451a9f8c77933bb3a9d4` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/224838f96445be37e3db643a163a817c15b3606c/darwin/universal/Cursor-darwin-universal.zip)            | 386.4 MB | `2b215a68f6e26dba287fc74ca57974f2b9d9b5de1b2b9265b56816f924b745c4` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/224838f96445be37e3db643a163a817c15b3606c/darwin/arm64/Cursor-darwin-arm64.zip)                    | 247.4 MB | `27c10a2ae006108b39bd969f8ca3d4f5a2f6d27ea925e3ce3b6eae3474eaad6e` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/224838f96445be37e3db643a163a817c15b3606c/darwin/x64/Cursor-darwin-x64.zip)                        | 256.6 MB | `1ee2261c686efe1191f6fb0435c04ceb4d138ae7f3b6d4d8263f7d6767258aec` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/224838f96445be37e3db643a163a817c15b3606c/linux/x64/Cursor-2.6.19-x86_64.AppImage.zsync)           | 484.9 KB | `79444adc8a0739ee5adc242c5f237b443e73eb3e263fdfd42bd50a55247f580b` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/224838f96445be37e3db643a163a817c15b3606c/linux/arm64/Cursor-2.6.19-aarch64.AppImage.zsync)        | 441.8 KB | `ece01caa809bafb3bd4a086ffa66e31431f436365ce34962496c573223b16c42` |

#### v2.6.18 — 2026-03-10

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/eb1c4e0702d201d1226d2a7afb25c501c2e56088/win32/x64/user-setup/CursorUserSetup-x64-2.6.14.exe)     | 171.1 MB | `742016fd9346ec79d407fc0064c59459f223917afd0a428bc51b0ea71b795a1f` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/eb1c4e0702d201d1226d2a7afb25c501c2e56088/win32/x64/system-setup/CursorSetup-x64-2.6.14.exe)       | 171.1 MB | `f568391ebc6bb2c0c73389864a5864efdc2431d492ec20bd4f89758072ccc8e5` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/eb1c4e0702d201d1226d2a7afb25c501c2e56088/win32/arm64/user-setup/CursorUserSetup-arm64-2.6.14.exe) | 162.1 MB | `0a735495e821ee9de48f8eec53032195b0ddee0e716841272e582a2e717102f2` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/eb1c4e0702d201d1226d2a7afb25c501c2e56088/win32/arm64/system-setup/CursorSetup-arm64-2.6.14.exe)   | 162.1 MB | `349260e7b53b22501f9212a293fcb12c1573fe0bad5f6754a745550f2aa0f737` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/eb1c4e0702d201d1226d2a7afb25c501c2e56088/darwin/universal/Cursor-darwin-universal.dmg)            | 376.1 MB | `d14b9dc077fb98031aa506994aecdefe6387b5dc9bf2c229e18413d1664030a4` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/eb1c4e0702d201d1226d2a7afb25c501c2e56088/darwin/arm64/Cursor-darwin-arm64.dmg)                    | 237.4 MB | `17917f7afa2e94b39eb3715528c7d655b5169956f21136fbe608a706a9390422` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/eb1c4e0702d201d1226d2a7afb25c501c2e56088/darwin/x64/Cursor-darwin-x64.dmg)                        | 246.4 MB | `4981f17cf707794351256af79e85d12c1d78ed12f896bf4652e36ae9f555a0cf` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/68fbec5aed9da587d1c6a64172792f505bafa252/linux/x64/Cursor-2.6.18-x86_64.AppImage.zsync)           | 484.9 KB | `3e76437059d6c8ecb5dc77e6b23d0951d7af9ed4ab4eda8782dd83a2c9c79ff3` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/68fbec5aed9da587d1c6a64172792f505bafa252/linux/arm64/Cursor-2.6.18-aarch64.AppImage.zsync)        | 441.8 KB | `411ab5cbb7f6deadd2b5013a86e541ec752467c146198b23f901510c4d400058` |

#### v2.6.14 — 2026-03-08

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/eb1c4e0702d201d1226d2a7afb25c501c2e56088/win32/x64/user-setup/CursorUserSetup-x64-2.6.14.exe)     | 171.1 MB | `742016fd9346ec79d407fc0064c59459f223917afd0a428bc51b0ea71b795a1f` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/eb1c4e0702d201d1226d2a7afb25c501c2e56088/win32/x64/system-setup/CursorSetup-x64-2.6.14.exe)       | 171.1 MB | `f568391ebc6bb2c0c73389864a5864efdc2431d492ec20bd4f89758072ccc8e5` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/eb1c4e0702d201d1226d2a7afb25c501c2e56088/win32/arm64/user-setup/CursorUserSetup-arm64-2.6.14.exe) | 162.1 MB | `0a735495e821ee9de48f8eec53032195b0ddee0e716841272e582a2e717102f2` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/eb1c4e0702d201d1226d2a7afb25c501c2e56088/win32/arm64/system-setup/CursorSetup-arm64-2.6.14.exe)   | 162.1 MB | `349260e7b53b22501f9212a293fcb12c1573fe0bad5f6754a745550f2aa0f737` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/60faf7b51077ed1df1db718157bbfed740d2e168/darwin/universal/Cursor-darwin-universal.dmg)            | 376.1 MB | `8a588d20df812fa5708d6452758210db2a7c8245cc88d0b7c8772def2d6b3a86` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/60faf7b51077ed1df1db718157bbfed740d2e168/darwin/arm64/Cursor-darwin-arm64.dmg)                    | 237.4 MB | `bc809a9e48fac1587dcf7c6dc5c03abc8d9e6d7301fffbddde42393d1caea863` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/60faf7b51077ed1df1db718157bbfed740d2e168/darwin/x64/Cursor-darwin-x64.dmg)                        | 246.4 MB | `0b78dcda289469228a65003dacfb09b1dd9d14582cb413b7c3e0885d9b231ccf` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/eb1c4e0702d201d1226d2a7afb25c501c2e56088/linux/x64/Cursor-2.6.14-x86_64.AppImage.zsync)           | 484.9 KB | `27c88fc1f0ff57fa253fb619eb060f7a12a401e0931656ca8e1ee66cd85be40d` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/eb1c4e0702d201d1226d2a7afb25c501c2e56088/linux/arm64/Cursor-2.6.14-aarch64.AppImage.zsync)        | 441.7 KB | `8949bd0d59a43e6a021e01208c8aa3e71b73f152fdfba5608cf8666fb6ffaa23` |

#### v2.6.13 — 2026-03-06

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/60faf7b51077ed1df1db718157bbfed740d2e168/win32/x64/user-setup/CursorUserSetup-x64-2.6.13.exe)     | 171.1 MB | `4fa5c1900425ced14c6d4c1fbd3e6b637064ecb44600818d67418d5748145cb9` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/60faf7b51077ed1df1db718157bbfed740d2e168/win32/x64/system-setup/CursorSetup-x64-2.6.13.exe)       | 171.1 MB | `ff38e8ec04ab371329e2fb5c1260017cb86e2185c9342e28edf97ee481809b42` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/60faf7b51077ed1df1db718157bbfed740d2e168/win32/arm64/user-setup/CursorUserSetup-arm64-2.6.13.exe) | 162.1 MB | `42b90523d4807fb83d1c2e54682162d654410d8e7342e313be95221eaabc74bc` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/60faf7b51077ed1df1db718157bbfed740d2e168/win32/arm64/system-setup/CursorSetup-arm64-2.6.13.exe)   | 162.1 MB | `234d88254a2719e9def576a7ef890b73e90702413113cd9e480e38bb601912c6` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/60faf7b51077ed1df1db718157bbfed740d2e168/darwin/universal/Cursor-darwin-universal.zip)            | 386.4 MB | `3e95181e3d0035a9ae8350a489a0c714c1b5fb38fdb4da0447b8302d4ebc7a39` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/60faf7b51077ed1df1db718157bbfed740d2e168/darwin/arm64/Cursor-darwin-arm64.zip)                    | 247.4 MB | `caab3cc70330c641f63fb497d4891202c1fb37b042060987538fbe550e470c48` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/60faf7b51077ed1df1db718157bbfed740d2e168/darwin/x64/Cursor-darwin-x64.zip)                        | 256.6 MB | `286a2f064676d85d11da9c1d1f9706a41fc7933a8761823294d886349da128ea` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/60faf7b51077ed1df1db718157bbfed740d2e168/linux/x64/Cursor-2.6.13-x86_64.AppImage.zsync)           | 484.9 KB | `9bb79f2c8358788a69e43dd375b2add624fc0588caf4117bed4d1ef442288dc7` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/60faf7b51077ed1df1db718157bbfed740d2e168/linux/arm64/Cursor-2.6.13-aarch64.AppImage.zsync)        | 441.7 KB | `326bb33a5f2954307bc4a34b2b640c2c6495459ff419393db7a177402a75a501` |

#### v2.6.12 — 2026-03-05

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/1917e900a0c4b0111dc7975777cfff60853059d3/win32/x64/user-setup/CursorUserSetup-x64-2.6.12.exe)     | 171.1 MB | `561c74b491521ab577270f55281695c6f7261b917f98544d5370f8429768a1b4` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/1917e900a0c4b0111dc7975777cfff60853059d3/win32/x64/system-setup/CursorSetup-x64-2.6.12.exe)       | 171.1 MB | `ba1392a88c668822f47a1d1c76ab974950cc1926842682c375be0e3858f56e0a` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/1917e900a0c4b0111dc7975777cfff60853059d3/win32/arm64/user-setup/CursorUserSetup-arm64-2.6.12.exe) | 162.0 MB | `fb9fbca14041b56d65e8c6ea8136b9ccf1646441026014699368971fa4239d51` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/1917e900a0c4b0111dc7975777cfff60853059d3/win32/arm64/system-setup/CursorSetup-arm64-2.6.12.exe)   | 162.0 MB | `a10fc08b621cdcab24624a065eb12c4e3c9cbec8c42ec4d41d77435607142fb7` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/8c95649f251a168cc4bb34c89531fae7db4bd992/darwin/universal/Cursor-darwin-universal.dmg)            | 378.5 MB | `2e6d2ca6a67f153d0b8b7f535f9292ba36621fd19d837015e1ab71ae803ee035` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/8c95649f251a168cc4bb34c89531fae7db4bd992/darwin/arm64/Cursor-darwin-arm64.dmg)                    | 239.8 MB | `00ed1c7d44bd7c02c3b46bd09754e011e3552713253513a7626b2675898580b9` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/8c95649f251a168cc4bb34c89531fae7db4bd992/darwin/x64/Cursor-darwin-x64.dmg)                        | 248.9 MB | `da0fa68686892cbc2da3434d7e61653b19c85844850cdd98997ed454c4de7cdb` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/1917e900a0c4b0111dc7975777cfff60853059d3/linux/x64/Cursor-2.6.12-x86_64.AppImage.zsync)           | 484.7 KB | `7b1c455c4e7ce1ce9273e7f1807cb2cc8d8d0047593102b910403fc4fe2d26f7` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/1917e900a0c4b0111dc7975777cfff60853059d3/linux/arm64/Cursor-2.6.12-aarch64.AppImage.zsync)        | 441.6 KB | `dee1d6b3b3872265cb373d051090d38fbaa9b862a0564a2bf5112747b1539044` |

#### v2.6.11 — 2026-03-03

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/8c95649f251a168cc4bb34c89531fae7db4bd992/win32/x64/user-setup/CursorUserSetup-x64-2.6.11.exe)     | 173.5 MB | `6e778d608da880b306eb963e2722c7096d3a4282de3f42d7dcfce420db30f402` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/8c95649f251a168cc4bb34c89531fae7db4bd992/win32/x64/system-setup/CursorSetup-x64-2.6.11.exe)       | 173.5 MB | `673ff93b507bcf510845bd14af39b1e818ca26594facc1e9ea0f19919ce0051e` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/8c95649f251a168cc4bb34c89531fae7db4bd992/win32/arm64/user-setup/CursorUserSetup-arm64-2.6.11.exe) | 164.5 MB | `cb27180eb4493e095398065589454e9e322bbaafcc1451b2f6fb4d3440ba66a8` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/8c95649f251a168cc4bb34c89531fae7db4bd992/win32/arm64/system-setup/CursorSetup-arm64-2.6.11.exe)   | 164.5 MB | `c50454357a3b091467f93bb15567e16494822266844d890400de1dadfb18dad1` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/8c95649f251a168cc4bb34c89531fae7db4bd992/darwin/universal/Cursor-darwin-universal.zip)            | 388.8 MB | `ed9ab4a6469eb14d387a513de8d0dd698436885d524133442f761f6feb9579da` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/8c95649f251a168cc4bb34c89531fae7db4bd992/darwin/arm64/Cursor-darwin-arm64.zip)                    | 249.9 MB | `f6e16ec6d199bebbec61ae0ef84b04fe6eae5a3fc12dbb1ed37d5c1371c9ed9e` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/8c95649f251a168cc4bb34c89531fae7db4bd992/darwin/x64/Cursor-darwin-x64.zip)                        | 259.1 MB | `f2af15238b38c8f0c9fae0cd87c5c29992da3e5dd724575fb9a96cc13b70a68a` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/8c95649f251a168cc4bb34c89531fae7db4bd992/linux/x64/Cursor-2.6.11-x86_64.AppImage.zsync)           | 491.2 KB | `a29f9e95f08a67e133b936e1829c0c025e1a6cbd8aa93ea587457d8e03c01e67` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/8c95649f251a168cc4bb34c89531fae7db4bd992/linux/arm64/Cursor-2.6.11-aarch64.AppImage.zsync)        | 447.4 KB | `29a46b5d99d67d3829ebd02d66a8f808595ff3c529e3c95732292f0890288e45` |

#### v2.6.8 — 2026-03-03

| Platform               | Link                                                                                                                                                | Size     | SHA256                                                             |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/860af19aa4e53f128bd7bdc300e7874cfe03b924/win32/x64/user-setup/CursorUserSetup-x64-2.6.8.exe)     | 173.5 MB | `1937b1af146e12ee4689cbdda0cf63dec49eb6e9159b150d6cfac7f93c0e166b` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/860af19aa4e53f128bd7bdc300e7874cfe03b924/win32/x64/system-setup/CursorSetup-x64-2.6.8.exe)       | 173.5 MB | `afdb53e6677210c75db43eea29be3970ded18eb512eb03e292b0f93baed34220` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/860af19aa4e53f128bd7bdc300e7874cfe03b924/win32/arm64/user-setup/CursorUserSetup-arm64-2.6.8.exe) | 164.5 MB | `d29edd01979f8e21f7e09c931a44c0ae587d0e5524e169937036a56dfdb1c324` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/860af19aa4e53f128bd7bdc300e7874cfe03b924/win32/arm64/system-setup/CursorSetup-arm64-2.6.8.exe)   | 164.5 MB | `d792300e8a3ae17f0ac93924547018f84841d436b8c060c42cbcb15061c3d976` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/860af19aa4e53f128bd7bdc300e7874cfe03b924/darwin/universal/Cursor-darwin-universal.zip)           | 388.8 MB | `690835fdf5153e784c6e125c4263d20a371761e0118b38cb9394500e0b068702` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/860af19aa4e53f128bd7bdc300e7874cfe03b924/darwin/arm64/Cursor-darwin-arm64.zip)                   | 249.8 MB | `cc3ce5f51cdca7aeef4b2512df70fbb461d418ef294a8cc53e87cc33341b117b` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/860af19aa4e53f128bd7bdc300e7874cfe03b924/darwin/x64/Cursor-darwin-x64.zip)                       | 259.1 MB | `8de9467b0b6300b013900233b3afa4f660a5e4e78a8aeba41a5a3a7cfba97993` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/860af19aa4e53f128bd7bdc300e7874cfe03b924/linux/x64/Cursor-2.6.8-x86_64.AppImage.zsync)           | 491.1 KB | `b21d1b2c00d82174e375f611b991504ab1686c3618bdfe9f5d0189f760f3988b` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/860af19aa4e53f128bd7bdc300e7874cfe03b924/linux/arm64/Cursor-2.6.8-aarch64.AppImage.zsync)        | 447.4 KB | `a326b4f0d71a7d2d9f24f49681dd544350b4f55030b9e9c5238d156a5bf7525b` |

</div>

</details>

## Development

1.  Clone the repository:
    ```bash
    git clone https://github.com/accesstechnology-mike/cursor-downloads.git
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

1.  Updates the `version-history.json` file.
2.  Updates this `README.md` with the latest version information and project details.

A GitHub Actions workflow in `.github/workflows/update.yml` runs this script periodically to keep the site and version information up-to-date.
