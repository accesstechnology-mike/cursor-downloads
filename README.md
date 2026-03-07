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
  <strong>Latest Version:</strong> v2.6.13 <span style="font-size:1.2rem; font-weight:normal;">(Released: 2026-03-06)</span>
</h2>

# Downloads (latest)

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

## Security & integrity

- All download links resolve directly to Cursor's official distribution servers (`downloads.cursor.com` / official endpoints).
- For additional peace of mind, verify the SHA‑256 checksums locally after download.
- Always prefer downloading from official sources.

<details open>
<summary style="font-size:1.35em; padding:0.5em 0;"><strong>All versions</strong></summary>

<div style="font-size:1.13em; line-height:1.7;">

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

#### v2.5.26 — 2026-02-27

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/7d96c2a03bb088ad367615e9da1a3fe20fbbc6ae/win32/x64/user-setup/CursorUserSetup-x64-2.5.26.exe)     | 175.4 MB | `ae18f69a94f46739bb33ede285e1df6b5069338425758374a9f2d2b1ddf19e7d` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/7d96c2a03bb088ad367615e9da1a3fe20fbbc6ae/win32/x64/system-setup/CursorSetup-x64-2.5.26.exe)       | 175.4 MB | `aeb60b24f7a8f0d606f193726201505b413ee84b9ccfa6fff726f6ad3fc759be` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/7d96c2a03bb088ad367615e9da1a3fe20fbbc6ae/win32/arm64/user-setup/CursorUserSetup-arm64-2.5.26.exe) | 166.5 MB | `f5052d571c9647dc88d1544ff052d7a733353da41b17661d3de104db9f5f7c0c` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/7d96c2a03bb088ad367615e9da1a3fe20fbbc6ae/win32/arm64/system-setup/CursorSetup-arm64-2.5.26.exe)   | 166.5 MB | `23a186c3731b06af994e22cde102c18174138c4d56b903e0dbd51b3bc9e7f2c9` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/7d96c2a03bb088ad367615e9da1a3fe20fbbc6ae/darwin/universal/Cursor-darwin-universal.zip)            | 390.4 MB | `94a799544b8034d21e3956fa28f85064c8d888cca2674e4b736273a58b2e8449` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/7d96c2a03bb088ad367615e9da1a3fe20fbbc6ae/darwin/arm64/Cursor-darwin-arm64.zip)                    | 251.4 MB | `90d807b45a560292bd3892ce1afe83572b4ce36d8c33eba388121bc3779b09f4` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/7d96c2a03bb088ad367615e9da1a3fe20fbbc6ae/darwin/x64/Cursor-darwin-x64.zip)                        | 260.6 MB | `6763db60d1d33b4ba19254b5ec3b8990cf7684e419ad6d439624b6a913149c63` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/7d96c2a03bb088ad367615e9da1a3fe20fbbc6ae/linux/x64/Cursor-2.5.26-x86_64.AppImage.zsync)           | 494.4 KB | `f98555b963403f5d12e3d74e07bc6d1055159d28f035c85ac9ad07e6ac55f7b0` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/7d96c2a03bb088ad367615e9da1a3fe20fbbc6ae/linux/arm64/Cursor-2.5.26-aarch64.AppImage.zsync)        | 450.7 KB | `16a2df8eae755e887c573470b241f727bf9f9c3dd45908b1716677d2c09a0612` |

#### v2.5.25 — 2026-02-24

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/7150844152b426ed50d2b68dd6b33b5c5beb73ca/win32/x64/user-setup/CursorUserSetup-x64-2.5.25.exe)     | 175.5 MB | `e8d1bc4303b1a3b257bf24ab43f5dd8c7d676f54be812aebdbdd3035b1919cc8` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/7150844152b426ed50d2b68dd6b33b5c5beb73ca/win32/x64/system-setup/CursorSetup-x64-2.5.25.exe)       | 175.5 MB | `c1dfa2f356fddc01bb11c37e548f2fa44df55789453120eedc58f671b78f8d72` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/7150844152b426ed50d2b68dd6b33b5c5beb73ca/win32/arm64/user-setup/CursorUserSetup-arm64-2.5.25.exe) | 166.5 MB | `497f9efd5587539c4ad126eefe314da1a8100c2c105218dd819d9984cf20ccce` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/7150844152b426ed50d2b68dd6b33b5c5beb73ca/win32/arm64/system-setup/CursorSetup-arm64-2.5.25.exe)   | 166.5 MB | `5a34e16fb35ee24d25d8a4f23925ae77e91f108162dcd4f5bee710b308bc37b3` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/7150844152b426ed50d2b68dd6b33b5c5beb73ca/darwin/universal/Cursor-darwin-universal.zip)            | 390.4 MB | `1cc70376ca5f5e209700c99602ea885c571feb0518c8f8dd632ed129eb2132d3` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/7150844152b426ed50d2b68dd6b33b5c5beb73ca/darwin/arm64/Cursor-darwin-arm64.zip)                    | 251.4 MB | `8d214562829a657f9736617f9730cdf637b8f4d7f230ce994fa1678e6aad2427` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/7150844152b426ed50d2b68dd6b33b5c5beb73ca/darwin/x64/Cursor-darwin-x64.zip)                        | 260.6 MB | `b7d41e7f047e916a10d15266212059fac135c41dd9ac5e49ae84acb0a1e20769` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/7150844152b426ed50d2b68dd6b33b5c5beb73ca/linux/x64/Cursor-2.5.25-x86_64.AppImage.zsync)           | 494.4 KB | `16da33259aa704897d5d03d069e13fd1fdb60d0df8b2f6b2ca222191e434bc14` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/7150844152b426ed50d2b68dd6b33b5c5beb73ca/linux/arm64/Cursor-2.5.25-aarch64.AppImage.zsync)        | 450.7 KB | `c535bdb6c034f6bb6dc5820a396ba28fccc0f7362be4b8057e5254be603a7164` |

#### v2.5.24 — 2026-02-24

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/77bf005db89a809d9c79f4adcb9c9b1b56165396/win32/x64/user-setup/CursorUserSetup-x64-2.5.24.exe)     | 175.5 MB | `a1a8bf98e1031ce8744bffadb4421bf3c965742cc8a73c7ab7877cb2adb1f254` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/77bf005db89a809d9c79f4adcb9c9b1b56165396/win32/x64/system-setup/CursorSetup-x64-2.5.24.exe)       | 175.5 MB | `945038ed1989ff43cca03df161ab44a536d81e8178b0b23583f42b5fd1793fc4` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/77bf005db89a809d9c79f4adcb9c9b1b56165396/win32/arm64/user-setup/CursorUserSetup-arm64-2.5.24.exe) | 166.5 MB | `5958df8462400a063f5a7d501c8728caddb3eaec79d58de3f248c3efa4a33dc2` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/77bf005db89a809d9c79f4adcb9c9b1b56165396/win32/arm64/system-setup/CursorSetup-arm64-2.5.24.exe)   | 166.5 MB | `9c8cc0ad4441b04121be5aa4d84ec1b72803ca6964f81e8d1a8d11a58ede16af` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/511523af765daeb1fa69500ab0df5b6524424612/darwin/universal/Cursor-darwin-universal.dmg)            | 380.1 MB | `3004fe01fa107f1c4169c9c0a950bc80e9c22739ac52e044b64f4c3fb5b4af91` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/511523af765daeb1fa69500ab0df5b6524424612/darwin/arm64/Cursor-darwin-arm64.dmg)                    | 241.3 MB | `9c3adb4738b6f8064fbcf05b7dc2e921d943558ec0d3649dae96f6f1d3972fec` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/511523af765daeb1fa69500ab0df5b6524424612/darwin/x64/Cursor-darwin-x64.dmg)                        | 250.5 MB | `5abd05fc3a57492d56ed6d28beee60d4fe96468f6cc8fecff1c3f9c049c52de2` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/77bf005db89a809d9c79f4adcb9c9b1b56165396/linux/x64/Cursor-2.5.24-x86_64.AppImage.zsync)           | 494.4 KB | `c241fef0e8449b9a56ae2b9830e3ed0f256abd68aec03a6e23eb1f97dcc24968` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/77bf005db89a809d9c79f4adcb9c9b1b56165396/linux/arm64/Cursor-2.5.24-aarch64.AppImage.zsync)        | 450.7 KB | `6d81be62b03c8b96b3607508ab1cf6d88a23666c59f7cb5d96bd03f37998f329` |

#### v2.5.22 — 2026-02-23

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/0eda506a36f70f8dc866c1ea642fcaf620090083/win32/x64/user-setup/CursorUserSetup-x64-2.5.22.exe)     | 175.5 MB | `32714a117b48e8d48325c398c299e2e727ccf8f7fb3ed6d6027cffea2d8f10b7` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/0eda506a36f70f8dc866c1ea642fcaf620090083/win32/x64/system-setup/CursorSetup-x64-2.5.22.exe)       | 175.5 MB | `b5a87aa782a614b1ee8c216b458d308758818541b329d2c796a0eec94e6d6a23` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/0eda506a36f70f8dc866c1ea642fcaf620090083/win32/arm64/user-setup/CursorUserSetup-arm64-2.5.22.exe) | 166.5 MB | `81938d8d477e9aacdca2be9d3114fb2d95fe80bddfbb44d2c41e14312d71b978` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/0eda506a36f70f8dc866c1ea642fcaf620090083/win32/arm64/system-setup/CursorSetup-arm64-2.5.22.exe)   | 166.5 MB | `008f7b9a3133bdd572ee9e31c3c95ec439ccbb3e38501dfad07f96ff01b98e6a` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/0eda506a36f70f8dc866c1ea642fcaf620090083/darwin/universal/Cursor-darwin-universal.zip)            | 390.4 MB | `6544515c5cd3b6b332a172eacf821c05c4ce3d39dd7293d7dbe1dd42381947a4` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/0eda506a36f70f8dc866c1ea642fcaf620090083/darwin/arm64/Cursor-darwin-arm64.zip)                    | 251.4 MB | `9cdb481e0cf7f398bae8a3b513a14c1a72d2fd1657dbde26799ca8e62d60697d` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/0eda506a36f70f8dc866c1ea642fcaf620090083/darwin/x64/Cursor-darwin-x64.zip)                        | 260.6 MB | `2ad88d93b9f572e4b0104abdb61ceb8ebf1c7502d43fbf4243bc437abbff8015` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/0eda506a36f70f8dc866c1ea642fcaf620090083/linux/x64/Cursor-2.5.22-x86_64.AppImage.zsync)           | 494.4 KB | `928c81c4389638625433c1d76c4c21d19d5c1c09404d55ea4f103346411f3c95` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/0eda506a36f70f8dc866c1ea642fcaf620090083/linux/arm64/Cursor-2.5.22-aarch64.AppImage.zsync)        | 450.7 KB | `1fa5ad153a3be4430adb868764d94a3547285093398cab483b949e15d6e0ce64` |

#### v2.5.21 — 2026-02-22

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/cac477624e01caa3a59aa2f52ac453e3427e135b/win32/x64/user-setup/CursorUserSetup-x64-2.5.21.exe)     | 175.5 MB | `fa094429452d69f0c95feeeff7cf28d02a56f73fc08b2e47595ecd8baa3959cd` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/cac477624e01caa3a59aa2f52ac453e3427e135b/win32/x64/system-setup/CursorSetup-x64-2.5.21.exe)       | 175.5 MB | `68b9b191d05992ed522d67719c6c37e9b61d47f9b0e186cb852ebf4c3aaa5729` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/cac477624e01caa3a59aa2f52ac453e3427e135b/win32/arm64/user-setup/CursorUserSetup-arm64-2.5.21.exe) | 166.5 MB | `9361a2e3fd2653b4ba89b234832001ce6b5e1d1db2483068ea05bcbe981f73b8` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/cac477624e01caa3a59aa2f52ac453e3427e135b/win32/arm64/system-setup/CursorSetup-arm64-2.5.21.exe)   | 166.5 MB | `12c0d7cc3c2ad97d11170e1f3ab49dd2aab097cb6927e42cd9394e39062aec96` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/cac477624e01caa3a59aa2f52ac453e3427e135b/darwin/universal/Cursor-darwin-universal.zip)            | 390.4 MB | `c30bc44b53a2bf6dd27564eee1e4b304ea18d54e7ecfe96683eae357b6335451` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/cac477624e01caa3a59aa2f52ac453e3427e135b/darwin/arm64/Cursor-darwin-arm64.zip)                    | 251.4 MB | `44a6a0f707d896917113fa5fbc0414b0c6df91a5720702907cffbf8025abe72e` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/cac477624e01caa3a59aa2f52ac453e3427e135b/darwin/x64/Cursor-darwin-x64.zip)                        | 260.6 MB | `3675974854418048a58846d30a5d703aa1ab756124b04d88cbe51eee596f397a` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/cac477624e01caa3a59aa2f52ac453e3427e135b/linux/x64/Cursor-2.5.21-x86_64.AppImage.zsync)           | 494.4 KB | `c3187166241959f50b98937154de067cc59c3db7e4c66073f87cecc2ec4cfa7f` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/cac477624e01caa3a59aa2f52ac453e3427e135b/linux/arm64/Cursor-2.5.21-aarch64.AppImage.zsync)        | 450.7 KB | `bcf6decb2422db141c92255c0a91272be2a65156877573cb397a5ca8dd68dc84` |

#### v2.5.20 — 2026-02-19

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/511523af765daeb1fa69500ab0df5b6524424612/win32/x64/user-setup/CursorUserSetup-x64-2.5.20.exe)     | 175.5 MB | `55135951aa727a22182a15c21cf94d5874b9d3415c3d16789f7d4337fbbcc86b` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/511523af765daeb1fa69500ab0df5b6524424612/win32/x64/system-setup/CursorSetup-x64-2.5.20.exe)       | 175.5 MB | `944e7c83cf098b8cba139f7c944e2ff8a9cb913e8c69feedfd54c9516895fed8` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/511523af765daeb1fa69500ab0df5b6524424612/win32/arm64/user-setup/CursorUserSetup-arm64-2.5.20.exe) | 166.5 MB | `6138ff67ca406d0e2bdb2f77e23539e7d565b23ba42df6989374dc0d7bc481e1` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/511523af765daeb1fa69500ab0df5b6524424612/win32/arm64/system-setup/CursorSetup-arm64-2.5.20.exe)   | 166.5 MB | `2540a05c1440bb2ea4aa4ed67136764b80bc7188188ee62a260f9df4995d4aae` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/511523af765daeb1fa69500ab0df5b6524424612/darwin/universal/Cursor-darwin-universal.zip)            | 390.4 MB | `271ec076dd0aacfe50282004c220c93bc464f1fa634d1a82a40e7f00a02858a1` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/511523af765daeb1fa69500ab0df5b6524424612/darwin/arm64/Cursor-darwin-arm64.zip)                    | 251.4 MB | `280d0eeaf1f9235e962d115a83356dd6f0579a46efd1fd05e62d1da3af6a5176` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/511523af765daeb1fa69500ab0df5b6524424612/darwin/x64/Cursor-darwin-x64.zip)                        | 260.6 MB | `4209aef1ddc6810c6f7aca4562d8b9c0c7ecdaf38c2550271a3014cace4ae18f` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/511523af765daeb1fa69500ab0df5b6524424612/linux/x64/Cursor-2.5.20-x86_64.AppImage.zsync)           | 494.4 KB | `8e86886a515b02f21ae581b5768da5aab00f37dc883bc31751289c9400809bde` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/511523af765daeb1fa69500ab0df5b6524424612/linux/arm64/Cursor-2.5.20-aarch64.AppImage.zsync)        | 450.7 KB | `892b7d1cd6f9e54a3ed7d13a981a8ea98ac58e2dc0c99e57f3742d947637edc4` |

#### v2.5.17 — 2026-02-17

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/7b98dcb824ea96c9c62362a5e80dbf0d1aae4775/win32/x64/user-setup/CursorUserSetup-x64-2.5.17.exe)     | 175.5 MB | `00ffccda001d7de33b433acfa249e78c16c51655c4314a944975ec29710b039f` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/7b98dcb824ea96c9c62362a5e80dbf0d1aae4775/win32/x64/system-setup/CursorSetup-x64-2.5.17.exe)       | 175.5 MB | `6e59386f692a5ddf54c1ea56ec2c5270a2a97f3096b023f94c6d1fe8b2ecbd08` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/7b98dcb824ea96c9c62362a5e80dbf0d1aae4775/win32/arm64/user-setup/CursorUserSetup-arm64-2.5.17.exe) | 166.5 MB | `231bb1f9361aee1e8c46f72aba3b59bfefe8ebf0eae70717fd278d91ad090147` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/7b98dcb824ea96c9c62362a5e80dbf0d1aae4775/win32/arm64/system-setup/CursorSetup-arm64-2.5.17.exe)   | 166.5 MB | `c36075cd5edc158471e3ec467548f90792552ca4275576f20fa43a83b7a98cf0` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/7b98dcb824ea96c9c62362a5e80dbf0d1aae4775/darwin/universal/Cursor-darwin-universal.zip)            | 390.4 MB | `0be9f4d22b7d29ca3c65d71b531a675b8dbc0884c49a4446b9cf9586f1bb5dd4` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/7b98dcb824ea96c9c62362a5e80dbf0d1aae4775/darwin/arm64/Cursor-darwin-arm64.zip)                    | 251.4 MB | `feb4176d369c033ca44b586681b5dc43d20328c230b7523bca2f78d6f1f7e4ae` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/7b98dcb824ea96c9c62362a5e80dbf0d1aae4775/darwin/x64/Cursor-darwin-x64.zip)                        | 260.6 MB | `c33bed22ac80cb83361f836e6f2c1e368e6c755d1ddb2c34f5c66cf6d36235a8` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/7b98dcb824ea96c9c62362a5e80dbf0d1aae4775/linux/x64/Cursor-2.5.17-x86_64.AppImage.zsync)           | 494.4 KB | `281caf2714da6a458d6a0546898308b4de75e336ae18f5380f9063af88557367` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/7b98dcb824ea96c9c62362a5e80dbf0d1aae4775/linux/arm64/Cursor-2.5.17-aarch64.AppImage.zsync)        | 450.7 KB | `9bc8a1c074eadb1abac749863e8aa7c75bb6038adcb15f961736a1f093ec8648` |

#### v2.5.16 — 2026-02-16

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/28d8e0b9dedf48f994d5222de1b516f94a48b47c/win32/x64/user-setup/CursorUserSetup-x64-2.5.16.exe)     | 175.5 MB | `faa8b6b67cb1d9fd44dfcab8cc7116ec69053f2f8f796ca4380568140e886687` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/28d8e0b9dedf48f994d5222de1b516f94a48b47c/win32/x64/system-setup/CursorSetup-x64-2.5.16.exe)       | 175.5 MB | `345b6dff829e48346a1739f27a4af39c1892d74560ae818510fd6969a5a1a291` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/28d8e0b9dedf48f994d5222de1b516f94a48b47c/win32/arm64/user-setup/CursorUserSetup-arm64-2.5.16.exe) | 166.5 MB | `ca033ff50e9b192e3eaa8e63d7b6460763c1007729d2af9dbdfc7a41496ad70e` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/28d8e0b9dedf48f994d5222de1b516f94a48b47c/win32/arm64/system-setup/CursorSetup-arm64-2.5.16.exe)   | 166.5 MB | `fdea39447246cf22f93ef42658e362464143b5b7e7fd299389e7dcb818ccc1f8` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/28d8e0b9dedf48f994d5222de1b516f94a48b47c/darwin/universal/Cursor-darwin-universal.zip)            | 390.4 MB | `d2b0c89526aeeb15ba52b1f415057b6523d9fd317465a55ac753e80ea33bc6d8` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/28d8e0b9dedf48f994d5222de1b516f94a48b47c/darwin/arm64/Cursor-darwin-arm64.zip)                    | 251.4 MB | `eacbe85259296980be6e50ab4e1e9c8a3d9cda0cf6b7b40a67bab7bed1502419` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/28d8e0b9dedf48f994d5222de1b516f94a48b47c/darwin/x64/Cursor-darwin-x64.zip)                        | 260.6 MB | `e85784fa0580c6aa7b2fe6fe07ce3992dbc854b2d2cc320d7346f5d5f7c80f1a` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/28d8e0b9dedf48f994d5222de1b516f94a48b47c/linux/x64/Cursor-2.5.16-x86_64.AppImage.zsync)           | 494.4 KB | `4e8cc20f8cf7ca450b8faed966d369cd56bd1cf73fd5d40eca7ad1a3e02f9b84` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/28d8e0b9dedf48f994d5222de1b516f94a48b47c/linux/arm64/Cursor-2.5.16-aarch64.AppImage.zsync)        | 450.8 KB | `ac3e7d9e8b8487670bb119f7931f192cc75c22884aed849830ab44e46064543c` |

#### v2.5.15 — 2026-02-16

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/578fd4ade188ac623bd692156274a32fd68eaa8d/win32/x64/user-setup/CursorUserSetup-x64-2.5.15.exe)     | 175.5 MB | `9bb2e1e9c787a6f767d293d8be24d4423871ece184745ae69b69ef46c89239c4` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/578fd4ade188ac623bd692156274a32fd68eaa8d/win32/x64/system-setup/CursorSetup-x64-2.5.15.exe)       | 175.5 MB | `9c5347d7295ff3dc5ad0205d269437ed43e79b68492956edd641d91157c6abe2` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/578fd4ade188ac623bd692156274a32fd68eaa8d/win32/arm64/user-setup/CursorUserSetup-arm64-2.5.15.exe) | 166.5 MB | `2f57c8cc8d6f7d5ae171008104791149e13ed56ca8ea8e3e2c300a55c951423e` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/578fd4ade188ac623bd692156274a32fd68eaa8d/win32/arm64/system-setup/CursorSetup-arm64-2.5.15.exe)   | 166.5 MB | `d71edeb6e2c0d3d3ec3ba4255000a7c362c3c153d280450a7419dfe85ebcde37` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/578fd4ade188ac623bd692156274a32fd68eaa8d/darwin/universal/Cursor-darwin-universal.zip)            | 390.4 MB | `b0fc6cc001162d3fdfd3211b58045a5c56396682108342de59fb4d1e5016b0f3` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/578fd4ade188ac623bd692156274a32fd68eaa8d/darwin/arm64/Cursor-darwin-arm64.zip)                    | 251.4 MB | `e0b2d9d31b7a512712dc03d6debabc13001e1190344652dc195f67706c406721` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/578fd4ade188ac623bd692156274a32fd68eaa8d/darwin/x64/Cursor-darwin-x64.zip)                        | 260.6 MB | `49e4890c115c267979ce18e806b37e89fe218f38bddcc0c71fc3ef95f894aac1` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/578fd4ade188ac623bd692156274a32fd68eaa8d/linux/x64/Cursor-2.5.15-x86_64.AppImage.zsync)           | 494.4 KB | `483ed74e732344d9cc014bb0a8a749904ac5da1f3a07624f0cb8c16d8ac69df5` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/578fd4ade188ac623bd692156274a32fd68eaa8d/linux/arm64/Cursor-2.5.15-aarch64.AppImage.zsync)        | 450.8 KB | `711c447ac1c09aa01c113a76ef06da9594ff76bf2dc27851e89e27025effdafa` |

#### v2.5.14 — 2026-02-15

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/7b9c34466f5c119e93c3e654bb80fe9306b6cc79/win32/x64/user-setup/CursorUserSetup-x64-2.4.37.exe)     | 169.8 MB | `22e6401807031c50ec1f156d0a56caafab6e18a5bed70c9cf228f14db4cf6f93` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/7b9c34466f5c119e93c3e654bb80fe9306b6cc79/win32/x64/system-setup/CursorSetup-x64-2.4.37.exe)       | 169.8 MB | `a15ef09dd775a003a8310f57dcf8eb6e3ee6c2abd7528438c21942f057680de2` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/7b9c34466f5c119e93c3e654bb80fe9306b6cc79/win32/arm64/user-setup/CursorUserSetup-arm64-2.4.37.exe) | 160.9 MB | `340aa59ad93d3e8fd366ac00242bf55ba7a75e623394263e11dfee8fc81792a3` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/7b9c34466f5c119e93c3e654bb80fe9306b6cc79/win32/arm64/system-setup/CursorSetup-arm64-2.4.37.exe)   | 160.9 MB | `ccec93286160c2bbd3a4504f9bd80f232430d441defd400e516f53c881dc2e45` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/7b9c34466f5c119e93c3e654bb80fe9306b6cc79/darwin/universal/Cursor-darwin-universal.dmg)            | 367.8 MB | `bdf59ac369f483f67b3542ebf86a08447e483b3828a8097d095cf53be3bd6692` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/7b9c34466f5c119e93c3e654bb80fe9306b6cc79/darwin/arm64/Cursor-darwin-arm64.dmg)                    | 231.3 MB | `4b150ad0fee4a783a1ebe646ec8aa2ca1f5f2a56d473279ae45199f286119d80` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/7b9c34466f5c119e93c3e654bb80fe9306b6cc79/darwin/x64/Cursor-darwin-x64.dmg)                        | 239.6 MB | `18c4695b1cb943524fb59af9c2b5a4a3b89c725da9c55ef3c24dd0e6d910dea7` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/9bda0059a130a70126468c18165a0e49ce97916c/linux/x64/Cursor-2.5.14-x86_64.AppImage.zsync)           | 494.3 KB | `1a917fd4cc489eb2aa4f3d8bbe503b86decbe39eab20b1223102af75794dde07` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/9bda0059a130a70126468c18165a0e49ce97916c/linux/arm64/Cursor-2.5.14-aarch64.AppImage.zsync)        | 450.7 KB | `cc075511ef931fa7a710f5606aa177bc5d331231591828ec3f008a0d22994c16` |

#### v2.4.37 — 2026-02-13

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/7b9c34466f5c119e93c3e654bb80fe9306b6cc79/win32/x64/user-setup/CursorUserSetup-x64-2.4.37.exe)     | 169.8 MB | `22e6401807031c50ec1f156d0a56caafab6e18a5bed70c9cf228f14db4cf6f93` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/7b9c34466f5c119e93c3e654bb80fe9306b6cc79/win32/x64/system-setup/CursorSetup-x64-2.4.37.exe)       | 169.8 MB | `a15ef09dd775a003a8310f57dcf8eb6e3ee6c2abd7528438c21942f057680de2` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/7b9c34466f5c119e93c3e654bb80fe9306b6cc79/win32/arm64/user-setup/CursorUserSetup-arm64-2.4.37.exe) | 160.9 MB | `340aa59ad93d3e8fd366ac00242bf55ba7a75e623394263e11dfee8fc81792a3` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/7b9c34466f5c119e93c3e654bb80fe9306b6cc79/win32/arm64/system-setup/CursorSetup-arm64-2.4.37.exe)   | 160.9 MB | `ccec93286160c2bbd3a4504f9bd80f232430d441defd400e516f53c881dc2e45` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/7b9c34466f5c119e93c3e654bb80fe9306b6cc79/darwin/universal/Cursor-darwin-universal.zip)            | 376.2 MB | `bbc673a4e6c4e9e2181cecb7f6b92288a82490b11498c72603194548f3044d02` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/7b9c34466f5c119e93c3e654bb80fe9306b6cc79/darwin/arm64/Cursor-darwin-arm64.zip)                    | 239.4 MB | `5c6289bd2bcd5b23ba4435c5124a686eed0cd902affca866470d2f8cea863e59` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/7b9c34466f5c119e93c3e654bb80fe9306b6cc79/darwin/x64/Cursor-darwin-x64.zip)                        | 247.8 MB | `ab9a046d6324b725760ea3df7321f83f5646001c20b543430f6b3af55e02c59b` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/7b9c34466f5c119e93c3e654bb80fe9306b6cc79/linux/x64/Cursor-2.4.37-x86_64.AppImage.zsync)           | 477.4 KB | `841a44a8e5c58a4324d6b427feb00843e6dfb310de04a5f471539fcefcc5f7b8` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/7b9c34466f5c119e93c3e654bb80fe9306b6cc79/linux/arm64/Cursor-2.4.37-aarch64.AppImage.zsync)        | 435.1 KB | `d5f32c409fa741aba6d57d487866ced01bbd5aaf98b12c49e11d352c8c5409bf` |

#### v2.4.36 — 2026-02-13

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/f9919bf991f247689f9ead605b5c5a3239a2a794/win32/x64/user-setup/CursorUserSetup-x64-2.4.36.exe)     | 169.8 MB | `1e1c2613e0463f689241248b230f2b8b35e15ea4359d6bed3f8b3591b47a37e3` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/f9919bf991f247689f9ead605b5c5a3239a2a794/win32/x64/system-setup/CursorSetup-x64-2.4.36.exe)       | 169.8 MB | `a8ac1c44e6704ad8bee7137305a80554056e319ea4419969c61d1ee0604272c4` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/f9919bf991f247689f9ead605b5c5a3239a2a794/win32/arm64/user-setup/CursorUserSetup-arm64-2.4.36.exe) | 160.9 MB | `a4ef1e4bf12a5d71d39d93cf376413420c44013b70261c40db2b536b8bc6edb9` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/f9919bf991f247689f9ead605b5c5a3239a2a794/win32/arm64/system-setup/CursorSetup-arm64-2.4.36.exe)   | 160.9 MB | `6a60d22154e333d2e72a27ad356395e46d2eee5b7d92ad069be8aaeebb1ceff7` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/f9919bf991f247689f9ead605b5c5a3239a2a794/darwin/universal/Cursor-darwin-universal.zip)            | 376.2 MB | `f0e706dfe5d3e8fdea2fe1472908aa91586ba090be1867aa2ed510e9d60c12e7` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/f9919bf991f247689f9ead605b5c5a3239a2a794/darwin/arm64/Cursor-darwin-arm64.zip)                    | 239.4 MB | -                                                                  |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/f9919bf991f247689f9ead605b5c5a3239a2a794/darwin/x64/Cursor-darwin-x64.zip)                        | 247.8 MB | `9eb4656513de0c0be6c8dc5a3ed26e11c6f989b85b10b1e483a392857cba7bd0` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/f9919bf991f247689f9ead605b5c5a3239a2a794/linux/x64/Cursor-2.4.36-x86_64.AppImage.zsync)           | 477.4 KB | `a3c7fe2e131c513e9702ae919c5eb94fd2068c7368287ebcb135dacfe7c15cfd` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/f9919bf991f247689f9ead605b5c5a3239a2a794/linux/arm64/Cursor-2.4.36-aarch64.AppImage.zsync)        | 435.1 KB | `98891feb5defc8ddd891c191cb7b24f8b46c18c395a14f646b49615917e6aee2` |

#### v2.4.35 — 2026-02-10

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/d2bf8ec12017b1049f304ad3a5c8867b117ed836/win32/x64/user-setup/CursorUserSetup-x64-2.4.35.exe)     | 169.8 MB | `2de61abf25151ee53949cfaedcd8bc627aa35a5551e98d135cf81d8d96333b9d` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/d2bf8ec12017b1049f304ad3a5c8867b117ed836/win32/x64/system-setup/CursorSetup-x64-2.4.35.exe)       | 169.9 MB | `7b40cfd9c3fff33e66316ddd0e6fe2a370e5f0b2bce59662960352f3f4e4887b` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/d2bf8ec12017b1049f304ad3a5c8867b117ed836/win32/arm64/user-setup/CursorUserSetup-arm64-2.4.35.exe) | 160.9 MB | `86837abce00a755dc4cad0445e231245432bca235d082b482294f5b5b0a3ab07` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/d2bf8ec12017b1049f304ad3a5c8867b117ed836/win32/arm64/system-setup/CursorSetup-arm64-2.4.35.exe)   | 160.9 MB | `80e2a437789d0d7e05e8147ee8649806b76afcbc6622a47daa9028162c5167f1` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/d2bf8ec12017b1049f304ad3a5c8867b117ed836/darwin/universal/Cursor-darwin-universal.zip)            | 376.2 MB | `aebee94fe6365ff1efa6dcbd5691e73777c6bc786f372400bd22269a1f5fc779` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/d2bf8ec12017b1049f304ad3a5c8867b117ed836/darwin/arm64/Cursor-darwin-arm64.zip)                    | 239.4 MB | `67e2caf70bcecae3dcb6c2e5f4b296e93cc3d1077d77ab4b586bffe9d4fdaeca` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/d2bf8ec12017b1049f304ad3a5c8867b117ed836/darwin/x64/Cursor-darwin-x64.zip)                        | 247.8 MB | `ff8192ca0efcb50006d01807e1d7dddc2c3a94a3579c857e5dc2c82722a12c41` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/d2bf8ec12017b1049f304ad3a5c8867b117ed836/linux/x64/Cursor-2.4.35-x86_64.AppImage.zsync)           | 477.4 KB | `e82421c7b9bf90b43c4986c3e0a0c58c2e855c3d861aacd6eeec9efc7751dea1` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/d2bf8ec12017b1049f304ad3a5c8867b117ed836/linux/arm64/Cursor-2.4.35-aarch64.AppImage.zsync)        | 435.1 KB | `42d3fe47fcfaa9c71761870536ba4972570478843d3fd8d437f06d1130b68bfc` |

#### v2.4.32 — 2026-02-09

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/dac77182205e080f83e43f13ee42d822740a6e1f/win32/x64/user-setup/CursorUserSetup-x64-2.4.32.exe)     | 169.9 MB | `cd44c18415a0108141c804fb109dbc7b3f630da5a4bb3aacac60fd3510130e81` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/dac77182205e080f83e43f13ee42d822740a6e1f/win32/x64/system-setup/CursorSetup-x64-2.4.32.exe)       | 169.9 MB | `60bf6e0371eb4f406a92f62c43162e2d68b8b39fc58178ffdde5bb4c9f23851e` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/dac77182205e080f83e43f13ee42d822740a6e1f/win32/arm64/user-setup/CursorUserSetup-arm64-2.4.32.exe) | 160.9 MB | `d812f5353c066cdfc4ac2ecc9b40eafc535dbab2bcfce6148422f96a9e0010b9` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/dac77182205e080f83e43f13ee42d822740a6e1f/win32/arm64/system-setup/CursorSetup-arm64-2.4.32.exe)   | 160.9 MB | `0975e69032787553331bdba9ef85851a31e7493acac25b1208d1adf6b25d49a5` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/dac77182205e080f83e43f13ee42d822740a6e1f/darwin/universal/Cursor-darwin-universal.zip)            | 376.2 MB | `80321ed528a80f68f95073a3c1ab2a1f9157e36e969b31fcba5bf865497c7b07` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/dac77182205e080f83e43f13ee42d822740a6e1f/darwin/arm64/Cursor-darwin-arm64.zip)                    | 239.4 MB | `85da537cd916ded58b79a203cee7e0e5eedd3efe1dafaa2c3e1e238495b5bea1` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/dac77182205e080f83e43f13ee42d822740a6e1f/darwin/x64/Cursor-darwin-x64.zip)                        | 247.8 MB | `fbfb68fc529804a26de0b3cd237d9075c70254fa73008d713901e91b6c601507` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/dac77182205e080f83e43f13ee42d822740a6e1f/linux/x64/Cursor-2.4.32-x86_64.AppImage.zsync)           | 477.4 KB | `49cce79430c015c7a21b66561240719c52311fc9589e6c27762d1e1a3b40a829` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/dac77182205e080f83e43f13ee42d822740a6e1f/linux/arm64/Cursor-2.4.32-aarch64.AppImage.zsync)        | 435.1 KB | `d92177bdde620f05dc4a0f7e87b13246d051993117dcba522fcfc5802fb058a9` |

#### v2.4.31 — 2026-02-08

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/3578107fdf149b00059ddad37048220e4168100f/win32/x64/user-setup/CursorUserSetup-x64-2.4.31.exe)     | 169.8 MB | `9afacf330062507eb154a0554ab10134baf30f81698d1cda340d1cd41b9beef5` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/3578107fdf149b00059ddad37048220e4168100f/win32/x64/system-setup/CursorSetup-x64-2.4.31.exe)       | 169.8 MB | `fe09ad553a1de99c7e42a6a86f194ac0b281f7816056487699a90d4c65597456` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/3578107fdf149b00059ddad37048220e4168100f/win32/arm64/user-setup/CursorUserSetup-arm64-2.4.31.exe) | 160.9 MB | `ecf3e8130d8f3f28498631e08d0566431044456e442242bafee4d872975fa393` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/3578107fdf149b00059ddad37048220e4168100f/win32/arm64/system-setup/CursorSetup-arm64-2.4.31.exe)   | 160.9 MB | `78df89aff946cfddff23a65f3017fb9139bf9046870fa1ad7b3341ef394e45b8` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/3578107fdf149b00059ddad37048220e4168100f/darwin/universal/Cursor-darwin-universal.zip)            | 376.2 MB | `3dd672c4e98367cf608207646c6c1b0b2987a847e166f1dceed3d40512c0476b` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/3578107fdf149b00059ddad37048220e4168100f/darwin/arm64/Cursor-darwin-arm64.zip)                    | 239.4 MB | `b29b74536826caddf86cfccd6d78fd51032761169c741b4207cb136f58d31e25` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/3578107fdf149b00059ddad37048220e4168100f/darwin/x64/Cursor-darwin-x64.zip)                        | 247.8 MB | `f0b687fded3a63578dc2e842e194109b012d9c759c732ef282c50fdce7debf7a` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/3578107fdf149b00059ddad37048220e4168100f/linux/x64/Cursor-2.4.31-x86_64.AppImage.zsync)           | 477.4 KB | `ee2e092001a5013ac0932dcc6918eca11cdaf91a25eb6985640449496416e31e` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/3578107fdf149b00059ddad37048220e4168100f/linux/arm64/Cursor-2.4.31-aarch64.AppImage.zsync)        | 435.1 KB | `411f29eace835d23cedd1eb381512cf04b041794a692c02e6408170ee41e55b7` |

#### v2.4.30 — 2026-02-07

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/0f8217a84adf66daf250228a3ebf0da631d3c9b5/win32/x64/user-setup/CursorUserSetup-x64-2.4.30.exe)     | 169.8 MB | `297041ec970af88dbe0a9f28545ae17d12c207d4c0767980540e4edfb03f3ce4` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/0f8217a84adf66daf250228a3ebf0da631d3c9b5/win32/x64/system-setup/CursorSetup-x64-2.4.30.exe)       | 169.8 MB | `4f51e92daabe78b2b2f7c14b6b410cca8bc2a6beb6c3ca5447512a1ca5d799b4` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/0f8217a84adf66daf250228a3ebf0da631d3c9b5/win32/arm64/user-setup/CursorUserSetup-arm64-2.4.30.exe) | 161.9 MB | `a00fa12f2c4b16d9d5528c5084b2c5ef7f306b195338103698ebace1757eab29` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/0f8217a84adf66daf250228a3ebf0da631d3c9b5/win32/arm64/system-setup/CursorSetup-arm64-2.4.30.exe)   | 161.9 MB | `5eccc30fb78f42905bced3b2a7a57f4be89a2d0e57bef22f85db33214bb05939` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/0f8217a84adf66daf250228a3ebf0da631d3c9b5/darwin/universal/Cursor-darwin-universal.zip)            | 376.2 MB | `a937a18cfd4c7875743d033a1ff868ce9d76713740c214e7c4832f8f8f0e48cb` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/0f8217a84adf66daf250228a3ebf0da631d3c9b5/darwin/arm64/Cursor-darwin-arm64.zip)                    | 239.4 MB | `df9659158a4c7a784f9a19b991b0750f8df5cbb8f4e46e1a114ad4781c9e9cf2` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/0f8217a84adf66daf250228a3ebf0da631d3c9b5/darwin/x64/Cursor-darwin-x64.zip)                        | 247.8 MB | `95bf38d0284a48bf851299d1dda1e7198e1ddc9b59812a001f51ea778f32815f` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/0f8217a84adf66daf250228a3ebf0da631d3c9b5/linux/x64/Cursor-2.4.30-x86_64.AppImage.zsync)           | 477.4 KB | `855b6e576acf88614f696a5fce34f4f4095f3c29ef1d25c4ceac206dbf7efad2` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/0f8217a84adf66daf250228a3ebf0da631d3c9b5/linux/arm64/Cursor-2.4.30-aarch64.AppImage.zsync)        | 435.1 KB | `6d96c0a56dd20728abc41269cd384407b3a1746106a7b42aefabc9f582644f61` |

#### v2.4.28 — 2026-02-04

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/f3f5cec40024283013878b50c4f9be4002e0b587/win32/x64/user-setup/CursorUserSetup-x64-2.4.28.exe)     | 170.8 MB | `57dcc5fb15cd11c96c735f51d96e873487997afda9aeb217bcc182ef59eb68b3` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/f3f5cec40024283013878b50c4f9be4002e0b587/win32/x64/system-setup/CursorSetup-x64-2.4.28.exe)       | 170.8 MB | `dfca365324b55697a89e90e5311441e7de9844d2735d0c6daadc616aca56d157` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/f3f5cec40024283013878b50c4f9be4002e0b587/win32/arm64/user-setup/CursorUserSetup-arm64-2.4.28.exe) | 161.9 MB | `ea09d4d2ca2fbf270216884b8f4af10888f73d9331ca2c8bc7cfa0799c3068b4` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/f3f5cec40024283013878b50c4f9be4002e0b587/win32/arm64/system-setup/CursorSetup-arm64-2.4.28.exe)   | 161.9 MB | `8863e67878c541fbcc12f47480b956a385002289b85a1126a9831ad41f3088b7` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/f3f5cec40024283013878b50c4f9be4002e0b587/darwin/universal/Cursor-darwin-universal.zip)            | 376.2 MB | `4a4ff3c48d3015f107c8ec18caa46d9524011a14eb6da38c63cfadc5ce9f65f5` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/f3f5cec40024283013878b50c4f9be4002e0b587/darwin/arm64/Cursor-darwin-arm64.zip)                    | 239.5 MB | `681e3b783116796103601cacb8b224019550b3b80837c9f47e49240ef8137b50` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/f3f5cec40024283013878b50c4f9be4002e0b587/darwin/x64/Cursor-darwin-x64.zip)                        | 247.9 MB | `e06e09d170642ea3215943cb7caf20f95ca1c5bb75b2d75fd364f691b2643d02` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/f3f5cec40024283013878b50c4f9be4002e0b587/linux/x64/Cursor-2.4.28-x86_64.AppImage.zsync)           | 477.4 KB | `510ba72378b938b4f911f50e180a354e66ed2dad687ae7d98cf410c987891ad2` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/f3f5cec40024283013878b50c4f9be4002e0b587/linux/arm64/Cursor-2.4.28-aarch64.AppImage.zsync)        | 435.2 KB | `c93f09e9d038b60dbbf95e558d8b9625f8d96fa6c200309e34de6caf3d2ed862` |

#### v2.4.27 — 2026-01-31

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/4f2b772756b8f609e1354b3063de282ccbe7a69b/win32/x64/user-setup/CursorUserSetup-x64-2.4.27.exe)     | 170.7 MB | `ce051b7d50b430e8ce078ba24e5a2b67ec8655329e8e4a53fa3a22bd30c1d16e` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/4f2b772756b8f609e1354b3063de282ccbe7a69b/win32/x64/system-setup/CursorSetup-x64-2.4.27.exe)       | 170.7 MB | `ac642f40bb09b41f5fc7f6dfd8ab1536bf447a0ccc15f8221c159c5087416135` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/4f2b772756b8f609e1354b3063de282ccbe7a69b/win32/arm64/user-setup/CursorUserSetup-arm64-2.4.27.exe) | 161.7 MB | `2e9e9ca4a5d35098d29c9b60e75d59ba9562206371975f3773fb01eaa9b3ad93` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/4f2b772756b8f609e1354b3063de282ccbe7a69b/win32/arm64/system-setup/CursorSetup-arm64-2.4.27.exe)   | 161.7 MB | `bd2ef5222ecc47e15f3a515e99666420d55030923a8520c8bd92dafff45401e0` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/4f2b772756b8f609e1354b3063de282ccbe7a69b/darwin/universal/Cursor-darwin-universal.zip)            | 377.1 MB | `7daf74cb1bc55b082e6e683b990d1c85de87e207ec663d07d4c8e0bc617a3816` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/4f2b772756b8f609e1354b3063de282ccbe7a69b/darwin/arm64/Cursor-darwin-arm64.zip)                    | 240.4 MB | `d803a3261750edccdf98bcb54e1edad84bcbfccaa725d86c5c1ac4edd513a5e0` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/4f2b772756b8f609e1354b3063de282ccbe7a69b/darwin/x64/Cursor-darwin-x64.zip)                        | 248.8 MB | `1f7e2afb3ae6f0ffa91a8721613cdb132d3f7631dc8bb3ea02962d97838d8088` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/4f2b772756b8f609e1354b3063de282ccbe7a69b/linux/x64/Cursor-2.4.27-x86_64.AppImage.zsync)           | 479.0 KB | `aa5350b01425f352cffa786c128d86646acb04155daabb21a2c783b5992ebc4f` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/4f2b772756b8f609e1354b3063de282ccbe7a69b/linux/arm64/Cursor-2.4.27-aarch64.AppImage.zsync)        | 436.7 KB | `74237a2ce774b05c31b520f4f17dd12274f75bc0a4e93a478b15484abfaf1eb6` |

#### v2.4.26 — 2026-01-31

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/4242cd7cb86877e6fd337290a38fa5031d312155/win32/x64/user-setup/CursorUserSetup-x64-2.4.26.exe)     | 170.7 MB | `2db716c71670dea6b2ee35103efd815203e6ec0b496afd475256d99568dd2991` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/4242cd7cb86877e6fd337290a38fa5031d312155/win32/x64/system-setup/CursorSetup-x64-2.4.26.exe)       | 170.7 MB | `86f753d48a399a2ee568f1db9abb2bea762cd0fc65c7406e406ef93a5403baf7` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/4242cd7cb86877e6fd337290a38fa5031d312155/win32/arm64/user-setup/CursorUserSetup-arm64-2.4.26.exe) | 161.7 MB | `f48f810ed72e5b6e87b3edc485d4a7ee1e387c895c2e13a7b5ee0ae47b40c95f` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/4242cd7cb86877e6fd337290a38fa5031d312155/win32/arm64/system-setup/CursorSetup-arm64-2.4.26.exe)   | 161.7 MB | `1d61469c0af9eb8d36d9358bfa6c519d091d56ea383b2947b4b0852fd7bf7fe8` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/4242cd7cb86877e6fd337290a38fa5031d312155/darwin/universal/Cursor-darwin-universal.zip)            | 377.1 MB | `776c2e645ab7de0cd4ee2c4ca5a2ff8bc0c340c5351db4f76c96964484d5f9d8` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/4242cd7cb86877e6fd337290a38fa5031d312155/darwin/arm64/Cursor-darwin-arm64.zip)                    | 240.4 MB | `a31278b587a859ce5949a912e2d567a5aee7259c9ed333cd94aee537749d2842` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/4242cd7cb86877e6fd337290a38fa5031d312155/darwin/x64/Cursor-darwin-x64.zip)                        | 248.8 MB | `04d078a0190da30e4a2fa5bac0fc7875472266a8b49da3751206cf37d54f9f18` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/4242cd7cb86877e6fd337290a38fa5031d312155/linux/x64/Cursor-2.4.26-x86_64.AppImage.zsync)           | 479.1 KB | `9e88208a6bdca410812c83090a16cfeff890c95188f4695598022b10ace5db4f` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/4242cd7cb86877e6fd337290a38fa5031d312155/linux/arm64/Cursor-2.4.26-aarch64.AppImage.zsync)        | 436.7 KB | `38ad72cfde9f8ae8a78f347af31b1c29236483ffbd159ff356767d541095aa54` |

#### v2.4.25 — 2026-01-31

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/d09ff0330132664471f9c70f7aa51ebc8945a802/win32/x64/user-setup/CursorUserSetup-x64-2.4.25.exe)     | 170.7 MB | `e6baf62ab5c19864f1c76c592e035b8b3ef435e146a78165e39aac1429979573` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/d09ff0330132664471f9c70f7aa51ebc8945a802/win32/x64/system-setup/CursorSetup-x64-2.4.25.exe)       | 170.7 MB | `60c14f0fbba312eddc820308d3f853effcd94b733f9c6688451dbf58745a8fd1` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/d09ff0330132664471f9c70f7aa51ebc8945a802/win32/arm64/user-setup/CursorUserSetup-arm64-2.4.25.exe) | 161.8 MB | `dff32a0d496e087f8ae21d1a5967978762c468ef41f889d2c2369b50dd8b7389` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/d09ff0330132664471f9c70f7aa51ebc8945a802/win32/arm64/system-setup/CursorSetup-arm64-2.4.25.exe)   | 161.8 MB | `838d146cb58f4383e5a298f520e37158de34dbe3abdcd5fdad7baf3c1e7b456d` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/379934e04d2b3290cf7aefa14560f942e4212925/darwin/universal/Cursor-darwin-universal.dmg)            | 368.7 MB | `b0d56d348e93913341e0ff283a8756309d3ec2f0bcf32231a6ed4b939ba5606b` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/379934e04d2b3290cf7aefa14560f942e4212925/darwin/arm64/Cursor-darwin-arm64.dmg)                    | 232.2 MB | `7375a2adffc9548b94f9caf55993d09d6d5c20d01d6dc80215593d250fe7579b` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/379934e04d2b3290cf7aefa14560f942e4212925/darwin/x64/Cursor-darwin-x64.dmg)                        | 240.4 MB | `b9732f08b5fcb6a4091a63ba7e3af44945da35299fd0089eca247c23a5fcc16e` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/d09ff0330132664471f9c70f7aa51ebc8945a802/linux/x64/Cursor-2.4.25-x86_64.AppImage.zsync)           | 479.1 KB | `49778783d97d8f5109866cb2023f8ab4b2035888d4205b88284b9abea41755f7` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/d09ff0330132664471f9c70f7aa51ebc8945a802/linux/arm64/Cursor-2.4.25-aarch64.AppImage.zsync)        | 436.7 KB | `67b43c5d2626ea895cc4d25b3e07c88d9722a42af679db6baef633ea7fee5378` |

#### v2.4.23 — 2026-01-29

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/379934e04d2b3290cf7aefa14560f942e4212925/win32/x64/user-setup/CursorUserSetup-x64-2.4.23.exe)     | 175.9 MB | `3f4742756d61e3ebd4c2ac4d00e505096dce2672804e2749d5a08e0a7123f000` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/379934e04d2b3290cf7aefa14560f942e4212925/win32/x64/system-setup/CursorSetup-x64-2.4.23.exe)       | 175.9 MB | `c9b0b9940aba0db8e881e9286d39f757e7101247e26254ca3cc6b4deebcca493` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/379934e04d2b3290cf7aefa14560f942e4212925/win32/arm64/user-setup/CursorUserSetup-arm64-2.4.23.exe) | 167.0 MB | `a5e86e84b908352a2ecfc25006e030ae80bf4f038acd338cb2de00780b8277d0` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/379934e04d2b3290cf7aefa14560f942e4212925/win32/arm64/system-setup/CursorSetup-arm64-2.4.23.exe)   | 167.0 MB | `6d8821419978695cc439ac12f18aab0d1c46b772371e66e2a8341f7148017a9e` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/379934e04d2b3290cf7aefa14560f942e4212925/darwin/universal/Cursor-darwin-universal.zip)            | 377.0 MB | `c9e9fe86f66b27285fa34688583a3449d4df78545fc7bea70157acb52d0836c5` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/379934e04d2b3290cf7aefa14560f942e4212925/darwin/arm64/Cursor-darwin-arm64.zip)                    | 240.3 MB | `b89db21bdbd72fd126f0b240bd7a199fffd7347d3f7c434089bd92b23541f1c1` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/379934e04d2b3290cf7aefa14560f942e4212925/darwin/x64/Cursor-darwin-x64.zip)                        | 248.7 MB | `24c03f84578521678d27380a0f213b8de0916162954e4f3a2bdc5effd0caba81` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/379934e04d2b3290cf7aefa14560f942e4212925/linux/x64/Cursor-2.4.23-x86_64.AppImage.zsync)           | 478.8 KB | `f519b10099853350dd87ed8d85477899cbb6c065e4b3d562b88d573cadfb9e7f` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/379934e04d2b3290cf7aefa14560f942e4212925/linux/arm64/Cursor-2.4.23-aarch64.AppImage.zsync)        | 436.6 KB | `63a5d306bef932feceeb89c69644d55b1df4150fc17f086224009d2a1bb42d14` |

#### v2.4.22 — 2026-01-27

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/618c607a249dd7fd2ffc662c6531143833bebd44/win32/x64/user-setup/CursorUserSetup-x64-2.4.22.exe)     | 171.6 MB | `0894ad9e1e42d930cfdaca1f47b5329659e7a3d2689e3dba824d59e195d0ce0d` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/618c607a249dd7fd2ffc662c6531143833bebd44/win32/x64/system-setup/CursorSetup-x64-2.4.22.exe)       | 171.6 MB | `67b3188bf8e7fcbf2659c4b73926dba79ace50f2d08f211a493dd85ff055c2a1` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/618c607a249dd7fd2ffc662c6531143833bebd44/win32/arm64/user-setup/CursorUserSetup-arm64-2.4.22.exe) | 162.7 MB | `fa3cecf68d4f47e34a43725f77e65c149f3346b3f017d311d95abd9223c0c659` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/618c607a249dd7fd2ffc662c6531143833bebd44/win32/arm64/system-setup/CursorSetup-arm64-2.4.22.exe)   | 162.7 MB | `63e57abc3fc89c0ed71e5d1a66b1d13a4f05b6e472572f6c06a4443a88249e06` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/dc8361355d709f306d5159635a677a571b277bcc/darwin/universal/Cursor-darwin-universal.dmg)            | 368.6 MB | `f19ddf1066a54b693b8318dd5343a1449d3dec0178c65267062fee1ea648b03d` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/dc8361355d709f306d5159635a677a571b277bcc/darwin/arm64/Cursor-darwin-arm64.dmg)                    | 232.2 MB | `9c2721fc95ced65ce3d226c06bc7b438f9670533ab224fdfbeaf423b8e84bfcc` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/dc8361355d709f306d5159635a677a571b277bcc/darwin/x64/Cursor-darwin-x64.dmg)                        | 240.4 MB | `b9a711a73d071517e668d7a4481e6a2d7a67862411bc0c34dd6fbd41f3e5e996` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/618c607a249dd7fd2ffc662c6531143833bebd44/linux/x64/Cursor-2.4.22-x86_64.AppImage.zsync)           | 478.9 KB | `d4a9b4bcfc7bc581ba2c3b5fc5287879954ce60110ef7bd3ceb45303517118ba` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/618c607a249dd7fd2ffc662c6531143833bebd44/linux/arm64/Cursor-2.4.22-aarch64.AppImage.zsync)        | 436.7 KB | `589fb24f4a7798ea586dfa6747b5b85f42eadade6e2728419300e6e4c8624f40` |

#### v2.4.21 — 2026-01-22

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/dc8361355d709f306d5159635a677a571b277bcc/win32/x64/user-setup/CursorUserSetup-x64-2.4.21.exe)     | 175.9 MB | `1429d09b628ce5af85539e627aef740e1a91b90f54edd0c116d1fbd3ef33cee4` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/dc8361355d709f306d5159635a677a571b277bcc/win32/x64/system-setup/CursorSetup-x64-2.4.21.exe)       | 175.9 MB | `af929d07bf870c2280ebd5771700d402804d5d046d36583b73d36451ec780e0c` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/dc8361355d709f306d5159635a677a571b277bcc/win32/arm64/user-setup/CursorUserSetup-arm64-2.4.21.exe) | 167.0 MB | `1810d8f9abbe1fb43c7595e1166eeace5289613f29b3bf3c710f5bec1c6cc0a0` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/dc8361355d709f306d5159635a677a571b277bcc/win32/arm64/system-setup/CursorSetup-arm64-2.4.21.exe)   | 167.0 MB | `26de0abbb951ab080a0ba853973197834b7c3eaaafb65ba501d9a5d102283755` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/dc8361355d709f306d5159635a677a571b277bcc/darwin/universal/Cursor-darwin-universal.zip)            | 377.0 MB | `c0e5092f67d9303b9e4a25bfacc916a6f3cfb725c3305addb284b7bb83da98a1` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/dc8361355d709f306d5159635a677a571b277bcc/darwin/arm64/Cursor-darwin-arm64.zip)                    | 240.3 MB | `353d629fa2d7556a7f75588d0ad64b805201d2bd0817356feae1f21ed8bd8c5d` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/dc8361355d709f306d5159635a677a571b277bcc/darwin/x64/Cursor-darwin-x64.zip)                        | 248.7 MB | `fe769d79064b27bdf484226775967d0bc8e3c8f0d6e457b1fd2f404f41e80f16` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/dc8361355d709f306d5159635a677a571b277bcc/linux/x64/Cursor-2.4.21-x86_64.AppImage.zsync)           | 478.8 KB | `477aec23de93acdc20d8b74dcf038fc383368f17289457b1d687c3489c858467` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/dc8361355d709f306d5159635a677a571b277bcc/linux/arm64/Cursor-2.4.21-aarch64.AppImage.zsync)        | 436.6 KB | `c9d7da6912597ce1101b8610a4aa6697228383f5a29dba9110d968e2263ad3e9` |

#### v2.4.20 — 2026-01-22

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/20b56586b0785b8843487045393c57c6d89b7103/win32/x64/user-setup/CursorUserSetup-x64-2.4.20.exe)     | 167.8 MB | `123e9a3114754ea4bf04ec493f5ea5896d82eb1e36b83ed74d29aa2281d19bc3` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/20b56586b0785b8843487045393c57c6d89b7103/win32/x64/system-setup/CursorSetup-x64-2.4.20.exe)       | 167.8 MB | `9bbd569524e59ab64e35a97979485fbb51fc8170808019c46ef629c004653f81` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/20b56586b0785b8843487045393c57c6d89b7103/win32/arm64/user-setup/CursorUserSetup-arm64-2.4.20.exe) | 158.8 MB | `32e325636ac13caccd5e2c402f1b12fd1284cfa4124d477d6bf43c38f9dfb164` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/20b56586b0785b8843487045393c57c6d89b7103/win32/arm64/system-setup/CursorSetup-arm64-2.4.20.exe)   | 158.8 MB | `da126a52dd793a989be16c5b98e11a0454652c865a5686166c83ca90c73e764a` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/20b56586b0785b8843487045393c57c6d89b7103/darwin/universal/Cursor-darwin-universal.zip)            | 365.1 MB | `a34c5daffd6b4e42f17037fef246da5c3976a61aaab3657c3a54ac0c5d2fe47c` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/20b56586b0785b8843487045393c57c6d89b7103/darwin/arm64/Cursor-darwin-arm64.zip)                    | 228.4 MB | `39c84619c8ad555485214f479253057c84c5f898125a78a847e02d03e021d348` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/20b56586b0785b8843487045393c57c6d89b7103/darwin/x64/Cursor-darwin-x64.zip)                        | 236.8 MB | `d8bbfb18f368d28963d1c490cd14824391e6b96b210db14f8d43f89642c204de` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/20b56586b0785b8843487045393c57c6d89b7103/linux/x64/Cursor-2.4.20-x86_64.AppImage.zsync)           | 472.4 KB | `d14bf555bd46c8646ab6ce77e1e693d4c3897e614d0dc1ce5a22c72e3ded9830` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/20b56586b0785b8843487045393c57c6d89b7103/linux/arm64/Cursor-2.4.20-aarch64.AppImage.zsync)        | 430.4 KB | `183062f53eca6ac2db15c2b7c810b0abcfcd3f71ec75a4d19d86f41fb67e173a` |

#### v2.4.19 — 2026-01-22

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/33d874341d80e1ffcb3fd3e5f2bb854d2b69a57a/win32/x64/user-setup/CursorUserSetup-x64-2.4.19.exe)     | 167.8 MB | `e3a1c876219117c68d6505d8c824a7142b3faa62ade4ff66564fb138afc09832` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/33d874341d80e1ffcb3fd3e5f2bb854d2b69a57a/win32/x64/system-setup/CursorSetup-x64-2.4.19.exe)       | 167.8 MB | `acad0de402efbfed89ed956d8812efeb6978763e7869ad7ae0b65495b8d451dd` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/33d874341d80e1ffcb3fd3e5f2bb854d2b69a57a/win32/arm64/user-setup/CursorUserSetup-arm64-2.4.19.exe) | 158.8 MB | `9006e34d350f3e6ce83c9d74e669c6f602c54dea16c27cfb623b4990d3bb19dd` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/33d874341d80e1ffcb3fd3e5f2bb854d2b69a57a/win32/arm64/system-setup/CursorSetup-arm64-2.4.19.exe)   | 158.8 MB | `473d9cddcb65aa15c5a689794b9ead67d7a7d62910f9145412974cd1e8a91af9` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/33d874341d80e1ffcb3fd3e5f2bb854d2b69a57a/darwin/universal/Cursor-darwin-universal.zip)            | 365.1 MB | `78908b1ac1cd036731ab1cae514c5f2930409799e9609d7d51408aecdcddcfe7` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/33d874341d80e1ffcb3fd3e5f2bb854d2b69a57a/darwin/arm64/Cursor-darwin-arm64.zip)                    | 228.4 MB | `5a8b0008bd82d0c872a4c94f5f921a057e0f5c758fb535e872c279a1c2ae497f` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/33d874341d80e1ffcb3fd3e5f2bb854d2b69a57a/darwin/x64/Cursor-darwin-x64.zip)                        | 236.8 MB | `daaad62863dfcb33c18ffbd62a66267bc61985113f6d7677fd9461e6a8f91fce` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/33d874341d80e1ffcb3fd3e5f2bb854d2b69a57a/linux/x64/Cursor-2.4.19-x86_64.AppImage.zsync)           | 472.4 KB | `6b834ec606c0fa625af67b5b47cc2d17c2e93d515787d2fc0fbbab3d7502bc69` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/33d874341d80e1ffcb3fd3e5f2bb854d2b69a57a/linux/arm64/Cursor-2.4.19-aarch64.AppImage.zsync)        | 430.4 KB | `b950b8090d3c876dceee490e1f2db8b93fc7c615384879d1a1995278588f38a3` |

#### v2.4.18 — 2026-01-22

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/d6b5b3d9811e239b5de518f7d9d4cbb38b917304/win32/x64/user-setup/CursorUserSetup-x64-2.4.18.exe)     | 167.8 MB | `b05eec0555d4a3a0f9b710a9fa004302434a6369cf2b09d3749edda88453cbee` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/d6b5b3d9811e239b5de518f7d9d4cbb38b917304/win32/x64/system-setup/CursorSetup-x64-2.4.18.exe)       | 167.8 MB | `4660680df36866186d31a083aafc0fab5650e5fda7d29bb5060f3aecf1b5a3b5` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/d6b5b3d9811e239b5de518f7d9d4cbb38b917304/win32/arm64/user-setup/CursorUserSetup-arm64-2.4.18.exe) | 158.8 MB | `d6b126a1661825f6604eb9f75c4bda663f83c50d55926aefb21059bf60a4d0f7` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/d6b5b3d9811e239b5de518f7d9d4cbb38b917304/win32/arm64/system-setup/CursorSetup-arm64-2.4.18.exe)   | 158.8 MB | `9d9f231e215e8e9846ac7d34133b7c9b703344bfe4591474cc681b177d4ab410` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/d6b5b3d9811e239b5de518f7d9d4cbb38b917304/darwin/universal/Cursor-darwin-universal.zip)            | 365.1 MB | `637551ad72c72b376b73168fcc1d3169010324706d6d5e1807f40a69cc16ca6b` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/d6b5b3d9811e239b5de518f7d9d4cbb38b917304/darwin/arm64/Cursor-darwin-arm64.zip)                    | 228.4 MB | `586a79acb6f8eca19e65dd8ca94c4b8ccdd2b962f35c0d8a821b269b76f05a23` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/d6b5b3d9811e239b5de518f7d9d4cbb38b917304/darwin/x64/Cursor-darwin-x64.zip)                        | 236.8 MB | `2d7effc7dce82a7c90ae1d3e76c9b91f825bfffac005f69dbe3c0e14180c96e8` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/d6b5b3d9811e239b5de518f7d9d4cbb38b917304/linux/x64/Cursor-2.4.18-x86_64.AppImage.zsync)           | 472.4 KB | `c07ce8c6e1084b014f3f31ae54c65d3c85a9dfa34e61dc96672a40bdad8b600a` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/d6b5b3d9811e239b5de518f7d9d4cbb38b917304/linux/arm64/Cursor-2.4.18-aarch64.AppImage.zsync)        | 430.4 KB | `fd5bdc3e6ea3c0c3a1434366a3d160885e699257848b8f4daf2bb6ae819cca60` |

#### v2.4.7 — 2026-01-20

| Platform               | Link                                                                                                                                                | Size     | SHA256                                                             |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/ca0f9bf806f235ea014a22712cbcbf5e88ca77e9/win32/x64/user-setup/CursorUserSetup-x64-2.4.7.exe)     | 167.8 MB | `b9a552b331e408bda30355681a1981ba2fea94ec87f884a1377f418d51e17a76` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/ca0f9bf806f235ea014a22712cbcbf5e88ca77e9/win32/x64/system-setup/CursorSetup-x64-2.4.7.exe)       | 167.8 MB | `0bf4d07293dd3885b2cb4939f0d9defe5215ccb745b589e2dcb2b8bfad198446` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/ca0f9bf806f235ea014a22712cbcbf5e88ca77e9/win32/arm64/user-setup/CursorUserSetup-arm64-2.4.7.exe) | 158.8 MB | `eab669d600e9f954bbea58316b7197e9b677e653e22158f9a3dc9c7268d4cd31` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/ca0f9bf806f235ea014a22712cbcbf5e88ca77e9/win32/arm64/system-setup/CursorSetup-arm64-2.4.7.exe)   | 158.8 MB | `766397d2f0ea6ff9376006c629247a1e136683b0d72509ae8368b01e255d52d8` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/ca0f9bf806f235ea014a22712cbcbf5e88ca77e9/darwin/universal/Cursor-darwin-universal.zip)           | 365.1 MB | `99d69d70c75090bf09315568be937872b443284e811610af9b2933fa0fb2f493` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/ca0f9bf806f235ea014a22712cbcbf5e88ca77e9/darwin/arm64/Cursor-darwin-arm64.zip)                   | 228.4 MB | `9ab3a6523db5ff4cbf6a22413445bda9769c8399d4be0dfb4584d667f0c30491` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/ca0f9bf806f235ea014a22712cbcbf5e88ca77e9/darwin/x64/Cursor-darwin-x64.zip)                       | 236.8 MB | `2f056ec0c4e97322e48724bba42e1b129788cd4da330920115f2244cd4106443` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/ca0f9bf806f235ea014a22712cbcbf5e88ca77e9/linux/x64/Cursor-2.4.7-x86_64.AppImage.zsync)           | 472.4 KB | `a6122ed77f92f9078cf9d7b6fb07c201b77706f9a4198036f805475f168cc787` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/ca0f9bf806f235ea014a22712cbcbf5e88ca77e9/linux/arm64/Cursor-2.4.7-aarch64.AppImage.zsync)        | 430.3 KB | `f248f0e4be30c33d15a11e0bc9ad61e6081c6510dfb6293fa325a871fb8ac0cb` |

#### v2.4.5 — 2026-01-20

| Platform               | Link                                                                                                                                                | Size     | SHA256                                                             |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/8c6e03a5d9dc7135b54a71bb9ac4b49e0eddcb86/win32/x64/user-setup/CursorUserSetup-x64-2.4.5.exe)     | 167.8 MB | `05f99a27793d6fb343017ad1fac5157497e2e2de1b3c05c9be3b0760c734ed05` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/8c6e03a5d9dc7135b54a71bb9ac4b49e0eddcb86/win32/x64/system-setup/CursorSetup-x64-2.4.5.exe)       | 167.8 MB | `5dc31ff9414905023bfda81701cf844beffbc649d90e316ddf3fd9370a11528c` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/8c6e03a5d9dc7135b54a71bb9ac4b49e0eddcb86/win32/arm64/user-setup/CursorUserSetup-arm64-2.4.5.exe) | 158.8 MB | `3ee98db25a856d9c2715fabf68480173c0ea934caa976eb278698a11d1d16fbd` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/8c6e03a5d9dc7135b54a71bb9ac4b49e0eddcb86/win32/arm64/system-setup/CursorSetup-arm64-2.4.5.exe)   | 158.8 MB | `387c8d274f92f586e3180794742cc330cc861be6a25afd9565a778708071c2c9` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/8c6e03a5d9dc7135b54a71bb9ac4b49e0eddcb86/darwin/universal/Cursor-darwin-universal.zip)           | 365.1 MB | `fba6e2d4d7a9c0e7f3b9c39af0ad7dbfe5a71bb4d95094fcdf3745049c8084fc` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/8c6e03a5d9dc7135b54a71bb9ac4b49e0eddcb86/darwin/arm64/Cursor-darwin-arm64.zip)                   | 228.4 MB | `e7e40e59a6c476502310106ab5fd08cc6e5d88b13f95bdda3cec4c4dba84968a` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/8c6e03a5d9dc7135b54a71bb9ac4b49e0eddcb86/darwin/x64/Cursor-darwin-x64.zip)                       | 236.8 MB | `e4e947899f09f2002ac24fe0b6c50752e2c49c1e5b654173c30589da0139971e` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/8c6e03a5d9dc7135b54a71bb9ac4b49e0eddcb86/linux/x64/Cursor-2.4.5-x86_64.AppImage.zsync)           | 472.4 KB | `0c06a81302a08afac163c4376a9ec38e8f9b2df35a70f6e141cb77702a9c82b0` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/8c6e03a5d9dc7135b54a71bb9ac4b49e0eddcb86/linux/arm64/Cursor-2.4.5-aarch64.AppImage.zsync)        | 430.3 KB | `c67f851a12d64ac1ac68f9e4974b3e36adadf54e68ba634d220c221b46a2c43f` |

#### v2.4.2 — 2026-01-20

| Platform               | Link                                                                                                                                                | Size     | SHA256                                                             |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/7d37854462030d31d936c7f7ed9015b870551e90/win32/x64/user-setup/CursorUserSetup-x64-2.4.2.exe)     | 167.8 MB | `2755ce8d623aa584b3bda0aceb9ec6c07a8743ebf61bca98b0c42998dfe19ba6` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/7d37854462030d31d936c7f7ed9015b870551e90/win32/x64/system-setup/CursorSetup-x64-2.4.2.exe)       | 167.8 MB | `9dc8db629550f4ccf786c7653f453d2ad1c74f6cf89bc1bb7cdbfa362e9d57a5` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/7d37854462030d31d936c7f7ed9015b870551e90/win32/arm64/user-setup/CursorUserSetup-arm64-2.4.2.exe) | 158.8 MB | `e443cbf660e05efa6ae0e2ce72fae9c32244cf5505ea4051bb59e0b749fe8149` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/7d37854462030d31d936c7f7ed9015b870551e90/win32/arm64/system-setup/CursorSetup-arm64-2.4.2.exe)   | 158.8 MB | `17e05fad055baa83205695978a28b92eb2a07988d0548908177170b314d3bfc1` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/7d37854462030d31d936c7f7ed9015b870551e90/darwin/universal/Cursor-darwin-universal.zip)           | 365.1 MB | `92c46ddedbedbc8031ee7e20e681b9665d61fe483f1c383e82a9052810d2f391` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/7d37854462030d31d936c7f7ed9015b870551e90/darwin/arm64/Cursor-darwin-arm64.zip)                   | 228.4 MB | `00d110b9b9d730f583923c1f5b0efb1d60c6553cbdd6819c924d81fc637b5f68` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/7d37854462030d31d936c7f7ed9015b870551e90/darwin/x64/Cursor-darwin-x64.zip)                       | 236.8 MB | `13434eb66f3c571ca2fadd3458182fda69d75cb7c68ebee6dac55cf539aa3cbe` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/7d37854462030d31d936c7f7ed9015b870551e90/linux/x64/Cursor-2.4.2-x86_64.AppImage.zsync)           | 472.4 KB | `680ac11952b38ff76c016b32f8117682b9210e8883087b522bf1a710926a505f` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/7d37854462030d31d936c7f7ed9015b870551e90/linux/arm64/Cursor-2.4.2-aarch64.AppImage.zsync)        | 430.3 KB | `57df0111445882b63bf383717a38635a180f018313f8eb9df13aec99e931357e` |

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
