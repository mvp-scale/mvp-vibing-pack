# MVP Scale - Startup & Vibe Coding Themes

10 dark themes for Cursor / VS Code inspired by the startup founder journey.

All themes feature **black terminal backgrounds** (ideal for Claude Code) and strong markdown rendering.

## Themes

| Theme | Vibe | Accent |
|---|---|---|
| **Founder Mode** | Deep focus, building the vision | Electric blue |
| **Ship It** | Move fast, deploy often | Emerald green |
| **Seed Round** | Early stage, fresh and promising | Warm amber |
| **Series A** | Scaling up, confident | Bold violet |
| **Ramen Profitable** | Lean and scrappy | Copper/rust |
| **Pivot** | New direction, fresh perspective | Teal/cyan |
| **Unicorn** | Billion-dollar dreams | Rich magenta |
| **Demo Day** | Spotlight moment, high contrast | Pure white on black |
| **Late Night Deploy** | 2am push to prod | Red warning |
| **Exit Strategy** | The payoff | Luxury gold |

## Install in Cursor

### Option 1: Install from VSIX (recommended)

1. Package the extension:
   ```
   npm install -g @vscode/vsce
   vsce package
   ```
2. In Cursor, open the Command Palette (`Cmd+Shift+P` / `Ctrl+Shift+P`)
3. Run **Extensions: Install from VSIX...**
4. Select the generated `.vsix` file
5. Open Command Palette and run **Preferences: Color Theme** to pick your theme

### Option 2: Symlink into extensions directory

```bash
# macOS
ln -s "$(pwd)" ~/.cursor/extensions/mvp-scale-themes

# Linux
ln -s "$(pwd)" ~/.cursor/extensions/mvp-scale-themes

# Windows (PowerShell as admin)
New-Item -ItemType SymbolicLink -Path "$env:USERPROFILE\.cursor\extensions\mvp-scale-themes" -Target (Get-Location)
```

Then restart Cursor and select a theme via **Preferences: Color Theme**.

## Regenerating

```bash
node generate-themes.js
```

Edits to palettes and token colors are all in `generate-themes.js`.
