# MVP Scale - Startup & Vibe Coding Themes

**From garage to IPO, one theme at a time.**

10 dark themes for VS Code and Cursor that follow the startup founder journey. Each theme captures a different stage of building something from nothing — pick the vibe that matches where you're at today.

All themes feature **pitch-black terminal backgrounds** (perfect for Claude Code and AI-assisted workflows) and carefully tuned markdown rendering so your docs look as sharp as your pitch deck.

## The Lineup

| Theme | When to Use It | Accent |
|---|---|---|
| **Seed Round** | You just had the idea. Fresh notebook energy. | Warm amber |
| **Founder Mode** | Heads down. No meetings. Building the thing. | Electric blue |
| **Ramen Profitable** | Lean and scrappy — every line of code counts. | Copper/rust |
| **Ship It** | Stop tweaking. Push to prod. Now. | Emerald green |
| **Pivot** | v1 didn't work. v2 is going to be different. | Teal/cyan |
| **Demo Day** | All eyes on you. High contrast. No mistakes. | Pure white on black |
| **Series A** | The VCs said yes. Time to scale. | Bold violet |
| **Late Night Deploy** | It's 2am. CI is green. You're sending it. | Red warning |
| **Unicorn** | Billion-dollar energy. Code like you mean it. | Rich magenta |
| **Exit Strategy** | You made it. Time to cash out in style. | Luxury gold |

## Install

### From VSIX (recommended)

1. In VS Code or Cursor, open the Command Palette (`Cmd+Shift+P` / `Ctrl+Shift+P`)
2. Run **Extensions: Install from VSIX...**
3. Select the `.vsix` file
4. Open Command Palette again and run **Preferences: Color Theme**
5. Pick your stage of the journey

### Symlink (for development)

```bash
# macOS / Linux
ln -s "$(pwd)" ~/.cursor/extensions/mvp-scale-themes

# Windows (PowerShell as admin)
New-Item -ItemType SymbolicLink -Path "$env:USERPROFILE\.cursor\extensions\mvp-scale-themes" -Target (Get-Location)
```

Restart your editor, then select a theme via **Preferences: Color Theme**.

## Mermaid Diagram Support

**One extra step for beautiful diagrams.**

If you use [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced), these themes can automatically style your Mermaid diagrams — flowcharts, sequence diagrams, Gantt charts, ER diagrams, and more — to match your active theme's palette.

Copy the included style file to your MPE config directory:

### Where's the file?

After installing the VSIX, the `mpe-mermaid-style.less` file lives inside the installed extension. The location depends on your setup:

| Setup | Extension install path |
|---|---|
| VS Code (local) | `~/.vscode/extensions/mvp-scale.mvp-scale-themes-1.1.0/config/` |
| Cursor (local) | `~/.cursor/extensions/mvp-scale.mvp-scale-themes-1.1.0/config/` |
| Remote SSH (Cursor) | `~/.cursor-server/extensions/mvp-scale.mvp-scale-themes-1.1.0/config/` |
| Remote SSH (VS Code) | `~/.vscode-server/extensions/mvp-scale.mvp-scale-themes-1.1.0/config/` |

### Copy to MPE config

Find the `mpe-mermaid-style.less` from the table above, then copy it:

```bash
# Find where it was installed
find ~ -path "*/mvp-scale.mvp-scale-themes-*/config/mpe-mermaid-style.less" 2>/dev/null
```

Then copy it to your MPE config:

```bash
# Linux / macOS (local or remote)
cp <path-from-above>/mpe-mermaid-style.less ~/.local/state/crossnote/style.less

# Windows (local, PowerShell)
Copy-Item <path-from-above>\mpe-mermaid-style.less "$env:APPDATA\crossnote\style.less"
```

> **Already have a custom style.less?** Back it up first:
> `cp ~/.local/state/crossnote/style.less ~/.local/state/crossnote/style.less.bak`

### Per-project alternative

Instead of replacing the global file, copy it into any project:

```bash
mkdir -p .crossnote
cp <path-from-above>/mpe-mermaid-style.less .crossnote/style.less
```

This only affects MPE previews for files in that project.

### How it works

The style file maps Mermaid CSS selectors to `--vscode-*` CSS variables that your active theme already defines. No hardcoded colors — the theme IS the palette. Switch between **Seed Round** and **Late Night Deploy** and watch your Mermaid diagrams shift from warm amber to warning red.

Includes fallback colors from popular palettes so diagrams look great even with non-MVP-Scale themes.

## Building from Source

```bash
# Regenerate theme JSONs from palettes
node generate-themes.js

# Package the VSIX
npx @vscode/vsce package
```

Palettes and token colors live in `generate-themes.js`.

---

*Built for founders, by founders. Now stop reading READMEs and go ship something.*
