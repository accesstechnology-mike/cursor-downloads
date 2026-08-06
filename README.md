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
  <strong>Latest Version:</strong> v3.15.6 <span style="font-size:1.2rem; font-weight:normal;">(Released: 2026-08-06)</span>
</h2>

# Downloads (latest)

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/a1f686545fd0ce8917bbd2449f733551a9bce420/win32/x64/user-setup/CursorUserSetup-x64-3.15.6.exe)     | 189.2 MB | `19e9c4269c5d3fd14ae8fe695fc5369caaecc61c883f7f257efc6ae6253c121e` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/a1f686545fd0ce8917bbd2449f733551a9bce420/win32/x64/system-setup/CursorSetup-x64-3.15.6.exe)       | 189.2 MB | `cc1ad9c093bdcaa89322641141783fb6c7df1b70ca421148cc3e0a83282a2336` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/a1f686545fd0ce8917bbd2449f733551a9bce420/win32/arm64/user-setup/CursorUserSetup-arm64-3.15.6.exe) | 179.6 MB | `d53acc14b84703077eecabc3f79281f8691cda038cda728044fa4d8ed7d408ea` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/a1f686545fd0ce8917bbd2449f733551a9bce420/win32/arm64/system-setup/CursorSetup-arm64-3.15.6.exe)   | 179.6 MB | `c072cf5ccaaedd7b64652c87e4b43aafa12186f7d94bd4a96fd83328245c8a49` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/a1f686545fd0ce8917bbd2449f733551a9bce420/darwin/universal/Cursor-darwin-universal.dmg)            | 409.5 MB | `febc2fa2b95f1a5f139397ec5dee19e3e9101651116aa54bb870a88229320976` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/a1f686545fd0ce8917bbd2449f733551a9bce420/darwin/arm64/Cursor-darwin-arm64.dmg)                    | 260.8 MB | `deaef4ff90e235c7f4c0aa3b7c4bd89e471c827a954586da2aace0ef44bb40a8` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/a1f686545fd0ce8917bbd2449f733551a9bce420/darwin/x64/Cursor-darwin-x64.dmg)                        | 271.0 MB | `134f890632e55022bbbbeef8160ed388ee4d708771fdb9a9ec33fec872fa60d2` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/a1f686545fd0ce8917bbd2449f733551a9bce420/linux/x64/Cursor-3.15.6-x86_64.AppImage.zsync)           | 536.1 KB | `ca92c13702fad14209a686a3f01003cabe76069e7acc4fd124f7d6bc01711d0a` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/a1f686545fd0ce8917bbd2449f733551a9bce420/linux/arm64/Cursor-3.15.6-aarch64.AppImage.zsync)        | 486.6 KB | `366239a058152f964825d5db4ef80c7f6a2b3f9fd69488ad69b262438951512e` |

## Security & integrity

- All download links resolve directly to Cursor's official distribution servers (`downloads.cursor.com` / official endpoints).
- For additional peace of mind, verify the SHA‑256 checksums locally after download.
- Always prefer downloading from official sources.

<details open>
<summary style="font-size:1.35em; padding:0.5em 0;"><strong>All versions</strong></summary>

<div style="font-size:1.13em; line-height:1.7;">

#### v3.15.6 — 2026-08-06

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/a1f686545fd0ce8917bbd2449f733551a9bce420/win32/x64/user-setup/CursorUserSetup-x64-3.15.6.exe)     | 189.2 MB | `19e9c4269c5d3fd14ae8fe695fc5369caaecc61c883f7f257efc6ae6253c121e` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/a1f686545fd0ce8917bbd2449f733551a9bce420/win32/x64/system-setup/CursorSetup-x64-3.15.6.exe)       | 189.2 MB | `cc1ad9c093bdcaa89322641141783fb6c7df1b70ca421148cc3e0a83282a2336` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/a1f686545fd0ce8917bbd2449f733551a9bce420/win32/arm64/user-setup/CursorUserSetup-arm64-3.15.6.exe) | 179.6 MB | `d53acc14b84703077eecabc3f79281f8691cda038cda728044fa4d8ed7d408ea` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/a1f686545fd0ce8917bbd2449f733551a9bce420/win32/arm64/system-setup/CursorSetup-arm64-3.15.6.exe)   | 179.6 MB | `c072cf5ccaaedd7b64652c87e4b43aafa12186f7d94bd4a96fd83328245c8a49` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/a1f686545fd0ce8917bbd2449f733551a9bce420/darwin/universal/Cursor-darwin-universal.dmg)            | 409.5 MB | `febc2fa2b95f1a5f139397ec5dee19e3e9101651116aa54bb870a88229320976` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/a1f686545fd0ce8917bbd2449f733551a9bce420/darwin/arm64/Cursor-darwin-arm64.dmg)                    | 260.8 MB | `deaef4ff90e235c7f4c0aa3b7c4bd89e471c827a954586da2aace0ef44bb40a8` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/a1f686545fd0ce8917bbd2449f733551a9bce420/darwin/x64/Cursor-darwin-x64.dmg)                        | 271.0 MB | `134f890632e55022bbbbeef8160ed388ee4d708771fdb9a9ec33fec872fa60d2` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/a1f686545fd0ce8917bbd2449f733551a9bce420/linux/x64/Cursor-3.15.6-x86_64.AppImage.zsync)           | 536.1 KB | `ca92c13702fad14209a686a3f01003cabe76069e7acc4fd124f7d6bc01711d0a` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/a1f686545fd0ce8917bbd2449f733551a9bce420/linux/arm64/Cursor-3.15.6-aarch64.AppImage.zsync)        | 486.6 KB | `366239a058152f964825d5db4ef80c7f6a2b3f9fd69488ad69b262438951512e` |

#### v3.14.27 — 2026-08-04

| Platform               | Link                                                                                                                                                  | Size     | SHA256                                                             |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/047548b00c1a079373d74d00183f32510a4a41e1/win32/x64/user-setup/CursorUserSetup-x64-3.14.27.exe)     | 189.1 MB | `2e83123e31a99e16cb529caca2de148a9134f0d612a466ddb7d967665fcce85b` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/047548b00c1a079373d74d00183f32510a4a41e1/win32/x64/system-setup/CursorSetup-x64-3.14.27.exe)       | 189.1 MB | `2bfbecc08bdc2f170b58c82e8c0ed9ae3480e396a94c9ced8a723d4c2098460a` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/047548b00c1a079373d74d00183f32510a4a41e1/win32/arm64/user-setup/CursorUserSetup-arm64-3.14.27.exe) | 179.5 MB | `bf2f0ea591eeeb889ef0624b9da3ed3af141feb32e2b1f4ecb7a93924a9a2970` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/047548b00c1a079373d74d00183f32510a4a41e1/win32/arm64/system-setup/CursorSetup-arm64-3.14.27.exe)   | 179.5 MB | `da0d9a71d03ff993dd1ffca470b00caea5b09c9b903f96703c29bc5067dcb1db` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/047548b00c1a079373d74d00183f32510a4a41e1/darwin/universal/Cursor-darwin-universal.dmg)             | 408.7 MB | `c2189cbbf8adb29ee1e9bfd7659a7806d686d5c0ca4c95fbeda441885d07ba71` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/047548b00c1a079373d74d00183f32510a4a41e1/darwin/arm64/Cursor-darwin-arm64.dmg)                     | 260.5 MB | `fe33c5d6a6980ce648ec3a0fd7db216fa090e5830f1ff883f69849320b43e982` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/047548b00c1a079373d74d00183f32510a4a41e1/darwin/x64/Cursor-darwin-x64.dmg)                         | 270.6 MB | `bc26dcfc5722df29de5b8004add3256b17edc15f408a799fd9a0f2d73024f702` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/047548b00c1a079373d74d00183f32510a4a41e1/linux/x64/Cursor-3.14.27-x86_64.AppImage.zsync)           | 536.7 KB | `8c2c6837966a7658bd15d2a3b44b115073b3128b1f894584388d99aa9b4b1a41` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/047548b00c1a079373d74d00183f32510a4a41e1/linux/arm64/Cursor-3.14.27-aarch64.AppImage.zsync)        | 487.1 KB | `2d9211528b0c90cd12a3a2acd05be83327f354ef5a4984933c7955cf7a460a35` |

#### v3.14.7 — 2026-07-31

| Platform               | Link                                                                                                                                                 | Size     | SHA256                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/a758f2241ca99fecf380180b6cbdbbce0f1f42cf/win32/x64/user-setup/CursorUserSetup-x64-3.14.7.exe)     | 189.1 MB | `93b3ad1b9971c8ff9be18fc9c46d592749e47ea6d2e3711efe6d5a9d4091877f` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/a758f2241ca99fecf380180b6cbdbbce0f1f42cf/win32/x64/system-setup/CursorSetup-x64-3.14.7.exe)       | 189.1 MB | `9db251bc79311a31c543cd2e3122f85621fff9755ef690e4b2fa47b3106410f5` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/a758f2241ca99fecf380180b6cbdbbce0f1f42cf/win32/arm64/user-setup/CursorUserSetup-arm64-3.14.7.exe) | 179.5 MB | `2a7353ecd63b6294ee197e98ab962a1aabe9d2151f446385f4db71050093c21f` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/a758f2241ca99fecf380180b6cbdbbce0f1f42cf/win32/arm64/system-setup/CursorSetup-arm64-3.14.7.exe)   | 179.5 MB | `d05133ad6a4f0400040711d00fc85960849c0eb337d05cb70a042c859752955d` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/a758f2241ca99fecf380180b6cbdbbce0f1f42cf/darwin/universal/Cursor-darwin-universal.dmg)            | 408.6 MB | `2707b07893a3a7442619589892bd2119cef47f4bb304e95e8e6c8a360c6309be` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/a758f2241ca99fecf380180b6cbdbbce0f1f42cf/darwin/arm64/Cursor-darwin-arm64.dmg)                    | 260.4 MB | `9a7f249b9271b3087670a521efcb5cbf7faaa6f80f1457df45f7b46238225a0a` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/a758f2241ca99fecf380180b6cbdbbce0f1f42cf/darwin/x64/Cursor-darwin-x64.dmg)                        | 270.5 MB | `70fbfbe3a3a5de38d48501d75872af626c05507201f020c20c18ca4dd9e51f6a` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/a758f2241ca99fecf380180b6cbdbbce0f1f42cf/linux/x64/Cursor-3.14.7-x86_64.AppImage)                 | 306.5 MB | `e25cea6dde2b48d3a81d510ba0fc640596384468e6441f52e6a60dd05b41cfc3` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/a758f2241ca99fecf380180b6cbdbbce0f1f42cf/linux/arm64/Cursor-3.14.7-aarch64.AppImage)              | 278.1 MB | `fe2c62ab03161e1479ea66e41633e40c9e4dade322a8e5b6192365eccfa6ded9` |

#### v3.13.25 — 2026-07-28

| Platform               | Link                                                                                                                                                  | Size     | SHA256                                                             |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/31e8d61c448c7472e371505838a0fe34083dad55/win32/x64/user-setup/CursorUserSetup-x64-3.13.25.exe)     | 190.4 MB | `2071af190d0b01325a791f19e2936387ccc8232e1c4960bf790bb71bf8444a96` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/31e8d61c448c7472e371505838a0fe34083dad55/win32/x64/system-setup/CursorSetup-x64-3.13.25.exe)       | 190.4 MB | `643acd8962282726a6e379d10d04e6d7def06fe7a2b1efdbdec526b10ff4b11d` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/31e8d61c448c7472e371505838a0fe34083dad55/win32/arm64/user-setup/CursorUserSetup-arm64-3.13.25.exe) | 180.8 MB | `c1d97a52b20799631cb8e16fc36535ca27966ff9c72dee95f6f71e77637f23f2` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/31e8d61c448c7472e371505838a0fe34083dad55/win32/arm64/system-setup/CursorSetup-arm64-3.13.25.exe)   | 180.8 MB | `13a5ac099247b09ca295afcba21defb1bbfc7e9a40f5a6c7f4ef54e6ec8bcabd` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/31e8d61c448c7472e371505838a0fe34083dad55/darwin/universal/Cursor-darwin-universal.zip)             | 420.1 MB | `6ccb97f1f0a359bca70b0b84fca0d700fd4f16d80b89cbba8d520a26076813a2` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/31e8d61c448c7472e371505838a0fe34083dad55/darwin/arm64/Cursor-darwin-arm64.zip)                     | 271.7 MB | `33246714f675efedec0985b13cbc0104873ebfb6501821d5177fbe2fd3f74db8` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/31e8d61c448c7472e371505838a0fe34083dad55/darwin/x64/Cursor-darwin-x64.zip)                         | 281.9 MB | `d1d63947df02e45f1b5cf26b9ba44d0bc016fb9ff4402db51c441f6378c75464` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/31e8d61c448c7472e371505838a0fe34083dad55/linux/x64/Cursor-3.13.25-x86_64.AppImage.zsync)           | 539.7 KB | `96e808bc22181ccdc893948ae8f21c2e6b576f7b149543bff9a80ecec1a92487` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/31e8d61c448c7472e371505838a0fe34083dad55/linux/arm64/Cursor-3.13.25-aarch64.AppImage.zsync)        | 490.0 KB | `7bf535a0752851504dea7621889f079113623faad930c70c333bb66cda032a97` |

#### v3.13.21 — 2026-07-27

| Platform               | Link                                                                                                                                                  | Size     | SHA256                                                             |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| Windows x64 (User)     | [Download](https://downloads.cursor.com/production/55434bd8062ece6fee083b82beed2aee42d253f3/win32/x64/user-setup/CursorUserSetup-x64-3.13.21.exe)     | 190.3 MB | `cd077effc7f7ddcb45ce0c14a5cd481e84790dfaf1369950d261db456cc55189` |
| Windows x64 (System)   | [Download](https://downloads.cursor.com/production/55434bd8062ece6fee083b82beed2aee42d253f3/win32/x64/system-setup/CursorSetup-x64-3.13.21.exe)       | 190.3 MB | `65516ea8bf833e899847fc84c7d95a212f182df651956604eeecfe230bee8f2f` |
| Windows ARM64 (User)   | [Download](https://downloads.cursor.com/production/55434bd8062ece6fee083b82beed2aee42d253f3/win32/arm64/user-setup/CursorUserSetup-arm64-3.13.21.exe) | 180.7 MB | `2d5ac85d91f3e1ad733991e70bfeebc798f0ff2d1eeb4be2fff766164848d18e` |
| Windows ARM64 (System) | [Download](https://downloads.cursor.com/production/55434bd8062ece6fee083b82beed2aee42d253f3/win32/arm64/system-setup/CursorSetup-arm64-3.13.21.exe)   | 180.7 MB | `157380553e7c859b8cac2b4eed2a0812b832c7f798f9545dced1444ac29e1eba` |
| macOS (Universal)      | [Download](https://downloads.cursor.com/production/55434bd8062ece6fee083b82beed2aee42d253f3/darwin/universal/Cursor-darwin-universal.dmg)             | 410.3 MB | `e96931b67ecb47cafaa5f6875cefad2d0ee9b85ed35e85486853eec639060363` |
| macOS (Apple Silicon)  | [Download](https://downloads.cursor.com/production/55434bd8062ece6fee083b82beed2aee42d253f3/darwin/arm64/Cursor-darwin-arm64.dmg)                     | 262.1 MB | `6401f7d9260dd9a4411cd42fd356a89c0c28373cde4abe0fed11f844f5ac0077` |
| macOS (Intel)          | [Download](https://downloads.cursor.com/production/55434bd8062ece6fee083b82beed2aee42d253f3/darwin/x64/Cursor-darwin-x64.dmg)                         | 272.3 MB | `331abae8f61cd4ffe2fbf3dbadf04b2a00a7f9fa45ecb8654acb4f06c7509ffa` |
| Linux x64 (AppImage)   | [Download](https://downloads.cursor.com/production/55434bd8062ece6fee083b82beed2aee42d253f3/linux/x64/Cursor-3.13.21-x86_64.AppImage)                 | 309.4 MB | `0599e1db17c4c9cd425bcec1a434799f8f45c2720190ae8874b1337e7423a0c5` |
| Linux ARM64 (AppImage) | [Download](https://downloads.cursor.com/production/55434bd8062ece6fee083b82beed2aee42d253f3/linux/arm64/Cursor-3.13.21-aarch64.AppImage)              | 279.8 MB | `093d11e9e113c4219bbe8b50d36a107903dd831fda118c199f7296007f96b911` |

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
