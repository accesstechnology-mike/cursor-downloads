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
  <strong>Latest Version:</strong> v3.13.10 <span style="font-size:1.2rem; font-weight:normal;">(Released: 2026-07-24)</span>
</h2>

# Downloads (latest)

| Platform               | Link                                                                                                                                                  | Size     | SHA256                                                             |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/4f02290ccd9304f0e6bf8ee85f6e9106f02ac1f7/win32/x64/user-setup/CursorUserSetup-x64-3.13.10.exe)     | 190.0 MB | `2f99ebb41bcce62cd6c8e4611e56a613b9abaf2399a8ce02e7925798e0f64522` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/4f02290ccd9304f0e6bf8ee85f6e9106f02ac1f7/win32/x64/system-setup/CursorSetup-x64-3.13.10.exe)       | 190.0 MB | `397674f6e57d7f82fc9634fb532199a5ae8571ae012487f5a2d527e5f916ec46` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/4f02290ccd9304f0e6bf8ee85f6e9106f02ac1f7/win32/arm64/user-setup/CursorUserSetup-arm64-3.13.10.exe) | 180.5 MB | `7cd6c817263f0ef12de2a64c44c8323ee399ffb8fe17782e0270b5a3c044e771` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/4f02290ccd9304f0e6bf8ee85f6e9106f02ac1f7/win32/arm64/system-setup/CursorSetup-arm64-3.13.10.exe)   | 180.5 MB | `b1018b9fac7cff40bb4a8b722eeaf5f1f233fc379b46f0dd61ff02818ae06f3f` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/4f02290ccd9304f0e6bf8ee85f6e9106f02ac1f7/darwin/universal/Cursor-darwin-universal.dmg)             | 410.2 MB | `42b1edea8912eb0b2fc686ea89a4a0047aaaf43da4f7d8eb34a4bafa35d477b1` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/4f02290ccd9304f0e6bf8ee85f6e9106f02ac1f7/darwin/arm64/Cursor-darwin-arm64.dmg)                     | 262.1 MB | `77f6dd8baec53770418c81b9188f8ed86b5851e1cb296d226518ce1b1c2e4b4a` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/4f02290ccd9304f0e6bf8ee85f6e9106f02ac1f7/darwin/x64/Cursor-darwin-x64.dmg)                         | 272.2 MB | `746740c7c127e98a992811c211cac197a308e1eab0d49916e3be82f9511c4a08` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/4f02290ccd9304f0e6bf8ee85f6e9106f02ac1f7/linux/x64/Cursor-3.13.10-x86_64.AppImage.zsync)           | 541.6 KB | `857a4458f49844e1757857f8d5ceb212d0729f17d7dd61724d7c5d096270a2d7` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/4f02290ccd9304f0e6bf8ee85f6e9106f02ac1f7/linux/arm64/Cursor-3.13.10-aarch64.AppImage.zsync)        | 489.9 KB | `e2378530c89a93cba90e12bc03a31e05a7ab7274cf764f6fd226a9c3774ede8e` |

## Security & integrity

- All download links resolve directly to Cursor's official distribution servers (`downloads.cursor.com` / official endpoints).
- For additional peace of mind, verify the SHA‑256 checksums locally after download.
- Always prefer downloading from official sources.

<details open>
<summary style="font-size:1.35em; padding:0.5em 0;"><strong>All versions</strong></summary>

<div style="font-size:1.13em; line-height:1.7;">

#### v3.13.10 — 2026-07-24

| Platform               | Link                                                                                                                                                  | Size     | SHA256                                                             |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/4f02290ccd9304f0e6bf8ee85f6e9106f02ac1f7/win32/x64/user-setup/CursorUserSetup-x64-3.13.10.exe)     | 190.0 MB | `2f99ebb41bcce62cd6c8e4611e56a613b9abaf2399a8ce02e7925798e0f64522` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/4f02290ccd9304f0e6bf8ee85f6e9106f02ac1f7/win32/x64/system-setup/CursorSetup-x64-3.13.10.exe)       | 190.0 MB | `397674f6e57d7f82fc9634fb532199a5ae8571ae012487f5a2d527e5f916ec46` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/4f02290ccd9304f0e6bf8ee85f6e9106f02ac1f7/win32/arm64/user-setup/CursorUserSetup-arm64-3.13.10.exe) | 180.5 MB | `7cd6c817263f0ef12de2a64c44c8323ee399ffb8fe17782e0270b5a3c044e771` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/4f02290ccd9304f0e6bf8ee85f6e9106f02ac1f7/win32/arm64/system-setup/CursorSetup-arm64-3.13.10.exe)   | 180.5 MB | `b1018b9fac7cff40bb4a8b722eeaf5f1f233fc379b46f0dd61ff02818ae06f3f` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/4f02290ccd9304f0e6bf8ee85f6e9106f02ac1f7/darwin/universal/Cursor-darwin-universal.dmg)             | 410.2 MB | `42b1edea8912eb0b2fc686ea89a4a0047aaaf43da4f7d8eb34a4bafa35d477b1` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/4f02290ccd9304f0e6bf8ee85f6e9106f02ac1f7/darwin/arm64/Cursor-darwin-arm64.dmg)                     | 262.1 MB | `77f6dd8baec53770418c81b9188f8ed86b5851e1cb296d226518ce1b1c2e4b4a` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/4f02290ccd9304f0e6bf8ee85f6e9106f02ac1f7/darwin/x64/Cursor-darwin-x64.dmg)                         | 272.2 MB | `746740c7c127e98a992811c211cac197a308e1eab0d49916e3be82f9511c4a08` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/4f02290ccd9304f0e6bf8ee85f6e9106f02ac1f7/linux/x64/Cursor-3.13.10-x86_64.AppImage.zsync)           | 541.6 KB | `857a4458f49844e1757857f8d5ceb212d0729f17d7dd61724d7c5d096270a2d7` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/4f02290ccd9304f0e6bf8ee85f6e9106f02ac1f7/linux/arm64/Cursor-3.13.10-aarch64.AppImage.zsync)        | 489.9 KB | `e2378530c89a93cba90e12bc03a31e05a7ab7274cf764f6fd226a9c3774ede8e` |

#### v3.12.30 — 2026-07-22

| Platform               | Link                                                                                                                                                  | Size     | SHA256                                                             |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/63a2996a10d9e476b6c28e951dd7691d9c0cf480/win32/x64/user-setup/CursorUserSetup-x64-3.12.30.exe)     | 188.9 MB | `8ff252fae50d7272b4aec6708b791450f9b6de5aef10f5116be53eeef16315ad` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/63a2996a10d9e476b6c28e951dd7691d9c0cf480/win32/x64/system-setup/CursorSetup-x64-3.12.30.exe)       | 188.9 MB | `06caacee8f684f82561cab5a9c8fe91995b468697db82f565906bae410750fc1` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/63a2996a10d9e476b6c28e951dd7691d9c0cf480/win32/arm64/user-setup/CursorUserSetup-arm64-3.12.30.exe) | 179.4 MB | `350beb6d07f8731f40905562f6a0f7a3e383ade49d4e37fbd43bcb61b0783d4b` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/63a2996a10d9e476b6c28e951dd7691d9c0cf480/win32/arm64/system-setup/CursorSetup-arm64-3.12.30.exe)   | 179.4 MB | `f3c2d20ab6b14e2d10687980fe39e8653d6d983a488a0d42188569e4a41a294d` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/63a2996a10d9e476b6c28e951dd7691d9c0cf480/darwin/universal/Cursor-darwin-universal.zip)             | 418.3 MB | `40aad5867f18d22c55020eb7f2baf57a075132764abe934eac97114624e24758` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/63a2996a10d9e476b6c28e951dd7691d9c0cf480/darwin/arm64/Cursor-darwin-arm64.zip)                     | 269.8 MB | `5d8f4374d2153a35b2a72249e34f473fe290ab73d9d5edef0ef80909f503596c` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/63a2996a10d9e476b6c28e951dd7691d9c0cf480/darwin/x64/Cursor-darwin-x64.zip)                         | 280.1 MB | `7405a4a441b3fb955b8c62e4484ae1bef12c5aee0baf0c5ac26975f9a2978938` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/63a2996a10d9e476b6c28e951dd7691d9c0cf480/linux/x64/Cursor-3.12.30-x86_64.AppImage.zsync)           | 538.2 KB | `50ed727e11481763219c3ac002677f5d0ea1195a8f6b7584beb782c053fe160a` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/63a2996a10d9e476b6c28e951dd7691d9c0cf480/linux/arm64/Cursor-3.12.30-aarch64.AppImage.zsync)        | 486.7 KB | `7f8fe61afc319a1e821667b57fdb4e35bdc09cd56a57e96463f779a20054d378` |

#### v3.12.29 — 2026-07-21

| Platform               | Link                                                                                                                                                  | Size     | SHA256                                                             |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/cd1c87ff9b66021918fb9731605f8d1d5fd2f0b2/win32/x64/user-setup/CursorUserSetup-x64-3.12.29.exe)     | 188.9 MB | `552e9ed55ed77027c6ae1594c418cda6814c8217c620b823825f6f0da2cd4d9d` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/cd1c87ff9b66021918fb9731605f8d1d5fd2f0b2/win32/x64/system-setup/CursorSetup-x64-3.12.29.exe)       | 188.9 MB | `479edd9daea89f48cf4537109467c569b1dec24f76dcfd11c3a49dd3207eb946` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/cd1c87ff9b66021918fb9731605f8d1d5fd2f0b2/win32/arm64/user-setup/CursorUserSetup-arm64-3.12.29.exe) | 179.4 MB | `5d3c31a2dcf2b196ec6490164fdabc46e783c39376bb9233e651ba338b55d5bc` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/cd1c87ff9b66021918fb9731605f8d1d5fd2f0b2/win32/arm64/system-setup/CursorSetup-arm64-3.12.29.exe)   | 179.4 MB | `1293d96ee788506e15229022c6ba1ab84753eabbf4c114ea3f5fadfc3646c3e9` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/cd1c87ff9b66021918fb9731605f8d1d5fd2f0b2/darwin/universal/Cursor-darwin-universal.dmg)             | 408.3 MB | `5fe2ec4f8a9ec341bb7bd9663883ccffdfef3e5598eafe0008cfc4fff5d04ad4` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/cd1c87ff9b66021918fb9731605f8d1d5fd2f0b2/darwin/arm64/Cursor-darwin-arm64.dmg)                     | 260.2 MB | `31b61e72d7b015039ab02e909ad3964cde88a7fdb6f3ee811ec286199bb41a9c` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/cd1c87ff9b66021918fb9731605f8d1d5fd2f0b2/darwin/x64/Cursor-darwin-x64.dmg)                         | 270.4 MB | `62d2d65f02899d7e59f4d7e09c46ffabd86ac61bbbcab072e501fa6f0fb77d6e` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/cd1c87ff9b66021918fb9731605f8d1d5fd2f0b2/linux/x64/Cursor-3.12.29-x86_64.AppImage.zsync)           | 538.2 KB | `30388ff4b3b29bd8d846826b1157bfec3c7cf13772feb907970476972b810c58` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/cd1c87ff9b66021918fb9731605f8d1d5fd2f0b2/linux/arm64/Cursor-3.12.29-aarch64.AppImage.zsync)        | 486.6 KB | `45d48c2ff62a9606bada90a018221d2aa5e79c2c62718b24e089a5741b45b1ec` |

#### v3.12.17 — 2026-07-17

| Platform               | Link                                                                                                                                                  | Size     | SHA256                                                             |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/0fb762053c34788bb7760d5673f8a6d4c8589d52/win32/x64/user-setup/CursorUserSetup-x64-3.12.17.exe)     | 188.8 MB | `44ee92c357d70fefb120b57854c19ef1405f583d3904004bdf910f40f5380290` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/0fb762053c34788bb7760d5673f8a6d4c8589d52/win32/x64/system-setup/CursorSetup-x64-3.12.17.exe)       | 188.8 MB | `4b2d744b54caeb4003220a33f34f66ebce00c4ba19eb34adba320d00d2eaca16` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/0fb762053c34788bb7760d5673f8a6d4c8589d52/win32/arm64/user-setup/CursorUserSetup-arm64-3.12.17.exe) | 179.3 MB | `a4a8d78472f39224701c658d18fb69bfc1a4a1b80037f47230e289b5536ac8cf` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/0fb762053c34788bb7760d5673f8a6d4c8589d52/win32/arm64/system-setup/CursorSetup-arm64-3.12.17.exe)   | 179.3 MB | `475afd3895d651fb818a99c6da0c710d7ce5b5dce893db4c1bec04960a4c1dd1` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/0fb762053c34788bb7760d5673f8a6d4c8589d52/darwin/universal/Cursor-darwin-universal.dmg)             | 408.2 MB | `63fd7b4e5bd88ef9a724a9ec6abac7a032ebe0c91a8e88a1410de2aa77b120b0` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/0fb762053c34788bb7760d5673f8a6d4c8589d52/darwin/arm64/Cursor-darwin-arm64.dmg)                     | 260.1 MB | `59a501825abe26a6b50a7d2cc7ad9c71b0522a1622073d6ed4f8dd1f171f40a1` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/0fb762053c34788bb7760d5673f8a6d4c8589d52/darwin/x64/Cursor-darwin-x64.dmg)                         | 270.2 MB | `9acfe9fb28e887a3304e975a6b0470d9a8d212246cbb6afde6d04709956b1c5b` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/0fb762053c34788bb7760d5673f8a6d4c8589d52/linux/x64/Cursor-3.12.17-x86_64.AppImage.zsync)           | 538.0 KB | `b221688d82e700fc175f64e51de3895858eadeed6a5cb7053441e1ce58216ebd` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/0fb762053c34788bb7760d5673f8a6d4c8589d52/linux/arm64/Cursor-3.12.17-aarch64.AppImage.zsync)        | 486.4 KB | `d8950e2c04c9f70e7109fbae4c82140a00eef15d0f73cfef5f82e6b316aa4e63` |

#### v3.12.10 — 2026-07-16

| Platform               | Link                                                                                                                                                  | Size     | SHA256                                                             |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/24a12dbd9cabf48956ce5bb3dbd234e41385b3df/win32/x64/user-setup/CursorUserSetup-x64-3.12.10.exe)     | 188.9 MB | `420d9784d9d8767a8b97960fc3a375e17deade93e49affe23cb1d0e176e1e886` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/24a12dbd9cabf48956ce5bb3dbd234e41385b3df/win32/x64/system-setup/CursorSetup-x64-3.12.10.exe)       | 188.9 MB | `1d440a69f1aa8ee6851e01d95937d3ce830bc13d1bb7fb3dd67c8b70f90a300f` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/24a12dbd9cabf48956ce5bb3dbd234e41385b3df/win32/arm64/user-setup/CursorUserSetup-arm64-3.12.10.exe) | 179.3 MB | `d15b8636fe1785794a1019e8eea3a8ebc4f9234ed5e55121fa4af9c5480e6015` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/24a12dbd9cabf48956ce5bb3dbd234e41385b3df/win32/arm64/system-setup/CursorSetup-arm64-3.12.10.exe)   | 179.3 MB | `b7b7fec27641ad07548bbea2940339acb9881107c9f407c5861596b376581940` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/24a12dbd9cabf48956ce5bb3dbd234e41385b3df/darwin/universal/Cursor-darwin-universal.dmg)             | 408.2 MB | `f2867ef94f983fb207bc9e941dadf906e49a12c57271524d53c2b64bc9091fe5` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/24a12dbd9cabf48956ce5bb3dbd234e41385b3df/darwin/arm64/Cursor-darwin-arm64.dmg)                     | 260.1 MB | `79b3aa164ce30b3af33c8a858e29225ac7a70988987d535a6aca17455189f9ab` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/24a12dbd9cabf48956ce5bb3dbd234e41385b3df/darwin/x64/Cursor-darwin-x64.dmg)                         | 270.2 MB | `a01d5b16ac148bff8096dcb87117e97b6fbaae6e4083b1872cab89c702cd5159` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/24a12dbd9cabf48956ce5bb3dbd234e41385b3df/linux/x64/Cursor-3.12.10-x86_64.AppImage)                 | 307.3 MB | `72e6b14332bd33ab24f60037b76d579bcf9cedd0329462b25e0186a09fb9f618` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/24a12dbd9cabf48956ce5bb3dbd234e41385b3df/linux/arm64/Cursor-3.12.10-aarch64.AppImage)              | 277.8 MB | `69740f42204be7fca133ee2263040780b405fd82e83b1c3f4fed5700feb185a6` |

#### v3.11.25 — 2026-07-15

| Platform               | Link                                                                                                                                                  | Size     | SHA256                                                             |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/fc2563ec93d793fc275eef734405a4fdf8b47b26/win32/x64/user-setup/CursorUserSetup-x64-3.11.25.exe)     | 188.3 MB | `600b959bdb7f57de1737e9a3d25828b54d725adba95e43ecb312d6521cd3c71b` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/fc2563ec93d793fc275eef734405a4fdf8b47b26/win32/x64/system-setup/CursorSetup-x64-3.11.25.exe)       | 188.3 MB | `9256a939039de90010aa8e0b748d1d43adadd5d4cc941bb897168e099e0a1290` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/fc2563ec93d793fc275eef734405a4fdf8b47b26/win32/arm64/user-setup/CursorUserSetup-arm64-3.11.25.exe) | 178.8 MB | `a9874a1f6df8f0259b2fe9dfa98749594daf6a94ebaa5b9b5adc920312136160` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/fc2563ec93d793fc275eef734405a4fdf8b47b26/win32/arm64/system-setup/CursorSetup-arm64-3.11.25.exe)   | 178.8 MB | `b41f9a6f5136b948b1976c45ec0e3ac5946ffb725df781d47f329c36d2d19cb7` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/fc2563ec93d793fc275eef734405a4fdf8b47b26/darwin/universal/Cursor-darwin-universal.dmg)             | 407.3 MB | `6bcd69558fe1f1db2b722ccaf63e33192cfca6030f87e332ef392e03f55bbbd1` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/fc2563ec93d793fc275eef734405a4fdf8b47b26/darwin/arm64/Cursor-darwin-arm64.dmg)                     | 259.2 MB | `5067f9b7ffae8586f24832f1546f143f72e5a0dc9109e36fc7b0a82e21a77321` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/fc2563ec93d793fc275eef734405a4fdf8b47b26/darwin/x64/Cursor-darwin-x64.dmg)                         | 269.2 MB | `207a13f8dff728d04550aa8dac48e0bea5b0388d060b35a8a7dd22fc208f3d47` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/fc2563ec93d793fc275eef734405a4fdf8b47b26/linux/x64/Cursor-3.11.25-x86_64.AppImage.zsync)           | 536.3 KB | `ffcf2494070f6d2d1d9647576281e5b6d38ac9b90caee707ddc53395650c2b48` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/fc2563ec93d793fc275eef734405a4fdf8b47b26/linux/arm64/Cursor-3.11.25-aarch64.AppImage.zsync)        | 485.0 KB | `14265e4cfcdf09e83ebc13d1b89594689122c6b8ac9972b5a0ac6b2c9ae6206b` |

#### v3.11.19 — 2026-07-13

| Platform               | Link                                                                                                                                                  | Size     | SHA256                                                             |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/bf249e6efb5b097f23d7e21d7283429f0760b74a/win32/x64/user-setup/CursorUserSetup-x64-3.11.19.exe)     | 184.2 MB | `b40c2deea978d9d6965a744344dadbf81001d7e48987fc9147e6c0f2b2fc5755` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/bf249e6efb5b097f23d7e21d7283429f0760b74a/win32/x64/system-setup/CursorSetup-x64-3.11.19.exe)       | 184.2 MB | `bbc607488b0e1f4d7f07a28b46891e244c3a3350a798804b0a3d30f2ac7710bf` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/bf249e6efb5b097f23d7e21d7283429f0760b74a/win32/arm64/user-setup/CursorUserSetup-arm64-3.11.19.exe) | 174.9 MB | `90b714de157c743c040f29a4b41010466623eb5e6836d1301d9518dd6c128af5` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/bf249e6efb5b097f23d7e21d7283429f0760b74a/win32/arm64/system-setup/CursorSetup-arm64-3.11.19.exe)   | 174.9 MB | `1f0f481dc67bf57d9922aee10e3b40cfc482e179a506ca7ee8b06c5fee90edc3` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/bf249e6efb5b097f23d7e21d7283429f0760b74a/darwin/universal/Cursor-darwin-universal.dmg)             | 396.7 MB | `a7e2e1c224e76afe2563e6edc95681002a72562f6cff1c9aecca188edd36b32a` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/bf249e6efb5b097f23d7e21d7283429f0760b74a/darwin/arm64/Cursor-darwin-arm64.dmg)                     | 252.7 MB | `590d8e7d3686a842d64df8e05389f9b607e04c7412034e91c4445aea991dba45` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/bf249e6efb5b097f23d7e21d7283429f0760b74a/darwin/x64/Cursor-darwin-x64.dmg)                         | 262.6 MB | `80cd05384f5d4deb79169ecf1b40c7b074976f97cba21b8d8a212dd49db06d21` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/bf249e6efb5b097f23d7e21d7283429f0760b74a/linux/x64/Cursor-3.11.19-x86_64.AppImage.zsync)           | 532.6 KB | `ceea679bf61dcbc9de8db4209d38b18b7f161d08a996292c3d2f36fd9ffc84fc` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/bf249e6efb5b097f23d7e21d7283429f0760b74a/linux/arm64/Cursor-3.11.19-aarch64.AppImage.zsync)        | 481.7 KB | `75757c63c8058ca3524c0a2d94368de5a7b9c45d9ac1d49ad841b4ec415c3c40` |

#### v3.11.13 — 2026-07-10

| Platform               | Link                                                                                                                                                  | Size     | SHA256                                                             |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/3f21b08f0b436a07be29fbfe00b304fa15553353/win32/x64/user-setup/CursorUserSetup-x64-3.11.13.exe)     | 184.2 MB | `e8d9a9e3eac63189739eb34be97a6df7bf2853fe17ef2b75ca6ac455c8682744` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/3f21b08f0b436a07be29fbfe00b304fa15553353/win32/x64/system-setup/CursorSetup-x64-3.11.13.exe)       | 184.2 MB | `5c9bee73dd89db7f1bd4cd7a939bea0ba085e6a2875712bef9a9b4b2d1d2f544` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/3f21b08f0b436a07be29fbfe00b304fa15553353/win32/arm64/user-setup/CursorUserSetup-arm64-3.11.13.exe) | 174.9 MB | `3431641153f10ab523671c0cd1feedc327bd2bb24e022ca269c52be79c0a3d44` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/3f21b08f0b436a07be29fbfe00b304fa15553353/win32/arm64/system-setup/CursorSetup-arm64-3.11.13.exe)   | 174.9 MB | `2cd3809662824d852f6345892ec8bb80eeab6f55cedf07c2378f92b8ddaa946b` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/3f21b08f0b436a07be29fbfe00b304fa15553353/darwin/universal/Cursor-darwin-universal.dmg)             | 396.7 MB | `3570a2278191ba636f3949342f4cca747979d0e682312b232622ed03aa559be9` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/3f21b08f0b436a07be29fbfe00b304fa15553353/darwin/arm64/Cursor-darwin-arm64.dmg)                     | 252.6 MB | `8f5938d261590d69cd4e5fc8c02077f4967e65ce3f27012d84d87c48f0970191` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/3f21b08f0b436a07be29fbfe00b304fa15553353/darwin/x64/Cursor-darwin-x64.dmg)                         | 262.6 MB | `15b481b916962a34c3eef760d06bc5b22ce66e936f9cdcb307ac80963300b52b` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/3f21b08f0b436a07be29fbfe00b304fa15553353/linux/x64/Cursor-3.11.13-x86_64.AppImage.zsync)           | 532.6 KB | `59dd6137738d6e3c53cb89a09e880b1118f97f0611327e23653c36630c79edbf` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/3f21b08f0b436a07be29fbfe00b304fa15553353/linux/arm64/Cursor-3.11.13-aarch64.AppImage.zsync)        | 481.7 KB | `3b763280b1844bc73ac12a6bfa3c8bdb26a05b927ea9af15d4df376b1e4bc939` |

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
