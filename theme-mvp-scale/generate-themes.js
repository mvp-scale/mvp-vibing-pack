#!/usr/bin/env node
// Theme generator for MVP Scale - Startup/Vibe Coding themes
// All dark themes with black terminals and good markdown support

const fs = require('fs');
const path = require('path');

const themes = [
  {
    id: "founder-mode",
    label: "MVP Scale: Founder Mode",
    name: "Founder Mode",
    // Deep focus, building the vision - dark navy with electric blue
    bg0: "#08090E", bg1: "#0C0E16", bg2: "#12151F", bg3: "#1A1D2B",
    border: "#1E2233", borderHover: "#2A2F44",
    accent: "#3B82F6", accentHover: "#60A5FA", accentMuted: "#2563EB",
    fg: "#E2E8F0", fgMuted: "#94A3B8", fgDim: "#64748B", fgFaint: "#475569",
    green: "#34D399", greenDim: "#059669",
    red: "#F87171", redDim: "#DC2626",
    yellow: "#FBBF24", yellowDim: "#D97706",
    cyan: "#22D3EE", cyanDim: "#0891B2",
    purple: "#A78BFA", purpleDim: "#7C3AED",
    pink: "#F472B6", pinkDim: "#DB2777",
    orange: "#FB923C", orangeDim: "#EA580C",
    // Syntax palette
    syn: { keyword: "#60A5FA", string: "#34D399", func: "#FBBF24", type: "#A78BFA", variable: "#E2E8F0", number: "#FB923C", comment: "#475569", tag: "#60A5FA", attribute: "#A78BFA", property: "#22D3EE", constant: "#F472B6", operator: "#94A3B8" }
  },
  {
    id: "ship-it",
    label: "MVP Scale: Ship It",
    name: "Ship It",
    // Move fast, deploy often - dark with green deploy vibes
    bg0: "#080B0A", bg1: "#0C100E", bg2: "#121816", bg3: "#1A2420",
    border: "#1E2E28", borderHover: "#2A3E35",
    accent: "#10B981", accentHover: "#34D399", accentMuted: "#059669",
    fg: "#E2E8F0", fgMuted: "#94A3B8", fgDim: "#64748B", fgFaint: "#475569",
    green: "#34D399", greenDim: "#059669",
    red: "#F87171", redDim: "#DC2626",
    yellow: "#FBBF24", yellowDim: "#D97706",
    cyan: "#22D3EE", cyanDim: "#0891B2",
    purple: "#A78BFA", purpleDim: "#7C3AED",
    pink: "#F472B6", pinkDim: "#DB2777",
    orange: "#FB923C", orangeDim: "#EA580C",
    syn: { keyword: "#34D399", string: "#A78BFA", func: "#FBBF24", type: "#22D3EE", variable: "#E2E8F0", number: "#FB923C", comment: "#475569", tag: "#34D399", attribute: "#22D3EE", property: "#60A5FA", constant: "#F472B6", operator: "#94A3B8" }
  },
  {
    id: "seed-round",
    label: "MVP Scale: Seed Round",
    name: "Seed Round",
    // Early stage, fresh and promising - dark with warm amber
    bg0: "#0A0906", bg1: "#100E0A", bg2: "#181510", bg3: "#221E18",
    border: "#2E2820", borderHover: "#3E362A",
    accent: "#F59E0B", accentHover: "#FBBF24", accentMuted: "#D97706",
    fg: "#E8E4DE", fgMuted: "#A8A090", fgDim: "#78725E", fgFaint: "#5A5548",
    green: "#84CC16", greenDim: "#65A30D",
    red: "#F87171", redDim: "#DC2626",
    yellow: "#FBBF24", yellowDim: "#D97706",
    cyan: "#22D3EE", cyanDim: "#0891B2",
    purple: "#C084FC", purpleDim: "#9333EA",
    pink: "#F472B6", pinkDim: "#DB2777",
    orange: "#FB923C", orangeDim: "#EA580C",
    syn: { keyword: "#FBBF24", string: "#84CC16", func: "#FB923C", type: "#C084FC", variable: "#E8E4DE", number: "#F472B6", comment: "#5A5548", tag: "#FBBF24", attribute: "#C084FC", property: "#22D3EE", constant: "#FB923C", operator: "#A8A090" }
  },
  {
    id: "series-a",
    label: "MVP Scale: Series A",
    name: "Series A",
    // Scaling up, confident - dark with bold violet
    bg0: "#0A080E", bg1: "#0E0C14", bg2: "#16131E", bg3: "#1E1A2A",
    border: "#261F38", borderHover: "#362D4A",
    accent: "#8B5CF6", accentHover: "#A78BFA", accentMuted: "#7C3AED",
    fg: "#E8E4F0", fgMuted: "#A8A0B8", fgDim: "#6E6880", fgFaint: "#504A62",
    green: "#34D399", greenDim: "#059669",
    red: "#FB7185", redDim: "#E11D48",
    yellow: "#FBBF24", yellowDim: "#D97706",
    cyan: "#67E8F9", cyanDim: "#06B6D4",
    purple: "#C084FC", purpleDim: "#9333EA",
    pink: "#F472B6", pinkDim: "#DB2777",
    orange: "#FB923C", orangeDim: "#EA580C",
    syn: { keyword: "#A78BFA", string: "#34D399", func: "#FBBF24", type: "#67E8F9", variable: "#E8E4F0", number: "#FB923C", comment: "#504A62", tag: "#A78BFA", attribute: "#67E8F9", property: "#F472B6", constant: "#C084FC", operator: "#A8A0B8" }
  },
  {
    id: "ramen-profitable",
    label: "MVP Scale: Ramen Profitable",
    name: "Ramen Profitable",
    // Lean and scrappy - warm dark with copper/rust tones
    bg0: "#0B0908", bg1: "#110E0C", bg2: "#1A1614", bg3: "#24201C",
    border: "#302A24", borderHover: "#403830",
    accent: "#E17055", accentHover: "#F08C70", accentMuted: "#C0513A",
    fg: "#E8E0D8", fgMuted: "#B0A898", fgDim: "#7A7268", fgFaint: "#5C5448",
    green: "#66BB6A", greenDim: "#43A047",
    red: "#EF5350", redDim: "#D32F2F",
    yellow: "#FFCA28", yellowDim: "#F9A825",
    cyan: "#4DD0E1", cyanDim: "#00ACC1",
    purple: "#AB47BC", purpleDim: "#8E24AA",
    pink: "#EC407A", pinkDim: "#D81B60",
    orange: "#FFA726", orangeDim: "#FB8C00",
    syn: { keyword: "#E17055", string: "#66BB6A", func: "#FFCA28", type: "#4DD0E1", variable: "#E8E0D8", number: "#AB47BC", comment: "#5C5448", tag: "#E17055", attribute: "#4DD0E1", property: "#FFA726", constant: "#EC407A", operator: "#B0A898" }
  },
  {
    id: "pivot",
    label: "MVP Scale: Pivot",
    name: "Pivot",
    // New direction, fresh perspective - dark with teal/cyan
    bg0: "#060A0B", bg1: "#0A1012", bg2: "#10181A", bg3: "#182224",
    border: "#1E2E32", borderHover: "#2A3E44",
    accent: "#06B6D4", accentHover: "#22D3EE", accentMuted: "#0891B2",
    fg: "#E2EEF0", fgMuted: "#90B0B8", fgDim: "#607880", fgFaint: "#486068",
    green: "#4ADE80", greenDim: "#16A34A",
    red: "#FB7185", redDim: "#E11D48",
    yellow: "#FDE047", yellowDim: "#EAB308",
    cyan: "#22D3EE", cyanDim: "#0891B2",
    purple: "#C084FC", purpleDim: "#9333EA",
    pink: "#F472B6", pinkDim: "#DB2777",
    orange: "#FB923C", orangeDim: "#EA580C",
    syn: { keyword: "#22D3EE", string: "#4ADE80", func: "#FDE047", type: "#C084FC", variable: "#E2EEF0", number: "#FB923C", comment: "#486068", tag: "#22D3EE", attribute: "#C084FC", property: "#F472B6", constant: "#FDE047", operator: "#90B0B8" }
  },
  {
    id: "unicorn",
    label: "MVP Scale: Unicorn",
    name: "Unicorn",
    // Billion-dollar dreams - dark with rich magenta/pink
    bg0: "#0B070C", bg1: "#110C14", bg2: "#1A141E", bg3: "#241C2A",
    border: "#30223A", borderHover: "#42304E",
    accent: "#D946EF", accentHover: "#E879F9", accentMuted: "#C026D3",
    fg: "#F0E4F4", fgMuted: "#B8A0C0", fgDim: "#806888", fgFaint: "#604E68",
    green: "#34D399", greenDim: "#059669",
    red: "#FB7185", redDim: "#E11D48",
    yellow: "#FBBF24", yellowDim: "#D97706",
    cyan: "#67E8F9", cyanDim: "#06B6D4",
    purple: "#C084FC", purpleDim: "#9333EA",
    pink: "#F472B6", pinkDim: "#DB2777",
    orange: "#FB923C", orangeDim: "#EA580C",
    syn: { keyword: "#E879F9", string: "#34D399", func: "#FBBF24", type: "#67E8F9", variable: "#F0E4F4", number: "#FB923C", comment: "#604E68", tag: "#E879F9", attribute: "#67E8F9", property: "#C084FC", constant: "#F472B6", operator: "#B8A0C0" }
  },
  {
    id: "demo-day",
    label: "MVP Scale: Demo Day",
    name: "Demo Day",
    // Spotlight moment, bold and high contrast - pure black with bright accents
    bg0: "#000000", bg1: "#0A0A0A", bg2: "#141414", bg3: "#1E1E1E",
    border: "#2A2A2A", borderHover: "#3A3A3A",
    accent: "#FFFFFF", accentHover: "#E0E0E0", accentMuted: "#B0B0B0",
    fg: "#F5F5F5", fgMuted: "#A0A0A0", fgDim: "#707070", fgFaint: "#505050",
    green: "#4ADE80", greenDim: "#16A34A",
    red: "#F87171", redDim: "#DC2626",
    yellow: "#FBBF24", yellowDim: "#D97706",
    cyan: "#22D3EE", cyanDim: "#0891B2",
    purple: "#A78BFA", purpleDim: "#7C3AED",
    pink: "#F472B6", pinkDim: "#DB2777",
    orange: "#FB923C", orangeDim: "#EA580C",
    syn: { keyword: "#F5F5F5", string: "#4ADE80", func: "#FBBF24", type: "#22D3EE", variable: "#F5F5F5", number: "#FB923C", comment: "#505050", tag: "#F5F5F5", attribute: "#A78BFA", property: "#22D3EE", constant: "#F472B6", operator: "#A0A0A0" }
  },
  {
    id: "late-night-deploy",
    label: "MVP Scale: Late Night Deploy",
    name: "Late Night Deploy",
    // 2am push to prod - deep midnight blue with red warning vibes
    bg0: "#06060C", bg1: "#0A0A14", bg2: "#10101E", bg3: "#18182A",
    border: "#202038", borderHover: "#2E2E4A",
    accent: "#EF4444", accentHover: "#F87171", accentMuted: "#DC2626",
    fg: "#E0E0F0", fgMuted: "#9090B0", fgDim: "#606080", fgFaint: "#484864",
    green: "#4ADE80", greenDim: "#16A34A",
    red: "#F87171", redDim: "#DC2626",
    yellow: "#FDE047", yellowDim: "#EAB308",
    cyan: "#67E8F9", cyanDim: "#06B6D4",
    purple: "#A78BFA", purpleDim: "#7C3AED",
    pink: "#F472B6", pinkDim: "#DB2777",
    orange: "#FB923C", orangeDim: "#EA580C",
    syn: { keyword: "#F87171", string: "#4ADE80", func: "#FDE047", type: "#67E8F9", variable: "#E0E0F0", number: "#FB923C", comment: "#484864", tag: "#F87171", attribute: "#A78BFA", property: "#67E8F9", constant: "#F472B6", operator: "#9090B0" }
  },
  {
    id: "exit-strategy",
    label: "MVP Scale: Exit Strategy",
    name: "Exit Strategy",
    // The payoff, luxury gold on black
    bg0: "#08080A", bg1: "#0E0E10", bg2: "#161618", bg3: "#202024",
    border: "#2A2A30", borderHover: "#3A3A42",
    accent: "#EAB308", accentHover: "#FACC15", accentMuted: "#CA8A04",
    fg: "#F0EEE6", fgMuted: "#B0AA98", fgDim: "#787268", fgFaint: "#585248",
    green: "#4ADE80", greenDim: "#16A34A",
    red: "#F87171", redDim: "#DC2626",
    yellow: "#FACC15", yellowDim: "#EAB308",
    cyan: "#67E8F9", cyanDim: "#06B6D4",
    purple: "#C084FC", purpleDim: "#9333EA",
    pink: "#F472B6", pinkDim: "#DB2777",
    orange: "#FB923C", orangeDim: "#EA580C",
    syn: { keyword: "#FACC15", string: "#4ADE80", func: "#FB923C", type: "#67E8F9", variable: "#F0EEE6", number: "#C084FC", comment: "#585248", tag: "#FACC15", attribute: "#67E8F9", property: "#C084FC", constant: "#F472B6", operator: "#B0AA98" }
  }
];

function hex(color, alpha) {
  if (!alpha) return color;
  const a = Math.round(alpha * 255).toString(16).padStart(2, '0');
  return color + a;
}

function generateTheme(t) {
  return {
    name: `MVP Scale: ${t.name}`,
    colors: {
      // Core
      "focusBorder": hex(t.accent, 0.4),
      "foreground": t.fg,
      "errorForeground": t.red,
      "selection.background": hex(t.accent, 0.2),
      "widget.shadow": hex("#000000", 0.5),
      "descriptionForeground": t.fgMuted,
      "icon.foreground": t.fgMuted,
      "sash.hoverBorder": t.accent,

      // Activity Bar
      "activityBar.background": t.bg0,
      "activityBar.foreground": t.fg,
      "activityBar.inactiveForeground": t.fgDim,
      "activityBar.border": t.border,
      "activityBar.activeBorder": t.accent,
      "activityBarBadge.background": t.accent,
      "activityBarBadge.foreground": t.bg0,

      // Sidebar
      "sideBar.background": t.bg1,
      "sideBar.foreground": t.fgMuted,
      "sideBar.border": t.border,
      "sideBar.dropBackground": hex(t.accent, 0.1),
      "sideBarTitle.foreground": t.fgMuted,
      "sideBarSectionHeader.background": t.bg1,
      "sideBarSectionHeader.foreground": t.fgDim,
      "sideBarSectionHeader.border": t.border,

      // Title Bar
      "titleBar.activeBackground": t.bg0,
      "titleBar.activeForeground": t.fgMuted,
      "titleBar.inactiveBackground": t.bg0,
      "titleBar.inactiveForeground": t.fgDim,
      "titleBar.border": t.border,

      // Editor
      "editor.background": t.bg2,
      "editor.foreground": t.fg,
      "editor.lineHighlightBackground": hex(t.fg, 0.04),
      "editor.lineHighlightBorder": hex(t.fg, 0.04),
      "editor.selectionBackground": hex(t.accent, 0.25),
      "editor.selectionHighlightBackground": hex(t.accent, 0.12),
      "editor.inactiveSelectionBackground": hex(t.fg, 0.08),
      "editor.findMatchBackground": hex(t.accent, 0.35),
      "editor.findMatchHighlightBackground": hex(t.accent, 0.2),
      "editor.findRangeHighlightBackground": hex(t.fg, 0.06),
      "editor.hoverHighlightBackground": hex(t.fg, 0.08),
      "editor.wordHighlightBackground": hex(t.fg, 0.1),
      "editor.wordHighlightStrongBackground": hex(t.fg, 0.14),
      "editor.rangeHighlightBackground": hex(t.fg, 0.06),
      "editor.snippetTabstopHighlightBackground": hex(t.fg, 0.08),
      "editorCursor.foreground": t.accent,
      "editorWhitespace.foreground": hex(t.fg, 0.1),
      "editorIndentGuide.background1": hex(t.fg, 0.06),
      "editorIndentGuide.activeBackground1": hex(t.fg, 0.14),
      "editorLineNumber.foreground": t.fgFaint,
      "editorLineNumber.activeForeground": t.fgMuted,
      "editorRuler.foreground": hex(t.fg, 0.08),
      "editorCodeLens.foreground": t.fgFaint,
      "editorBracketMatch.background": hex(t.accent, 0.15),
      "editorBracketMatch.border": hex(t.accent, 0.4),
      "editorLink.activeForeground": t.accent,

      // Bracket pair colorization
      "editorBracketHighlight.foreground1": t.syn.keyword,
      "editorBracketHighlight.foreground2": t.syn.func,
      "editorBracketHighlight.foreground3": t.syn.type,
      "editorBracketHighlight.foreground4": t.syn.string,
      "editorBracketHighlight.foreground5": t.syn.constant,
      "editorBracketHighlight.foreground6": t.syn.number,

      // Editor errors/warnings
      "editorError.foreground": t.red,
      "editorError.border": hex(t.red, 0),
      "editorWarning.foreground": t.yellow,
      "editorWarning.border": hex(t.yellow, 0),
      "editorInfo.foreground": t.cyan,

      // Editor gutter
      "editorGutter.background": t.bg2,
      "editorGutter.addedBackground": t.green,
      "editorGutter.modifiedBackground": t.yellow,
      "editorGutter.deletedBackground": t.red,

      // Editor overview ruler
      "editorOverviewRuler.border": hex("#000000", 0),
      "editorOverviewRuler.addedForeground": hex(t.green, 0.6),
      "editorOverviewRuler.modifiedForeground": hex(t.yellow, 0.6),
      "editorOverviewRuler.deletedForeground": hex(t.red, 0.6),
      "editorOverviewRuler.errorForeground": t.red,
      "editorOverviewRuler.warningForeground": t.yellow,
      "editorOverviewRuler.findMatchForeground": hex(t.accent, 0.4),

      // Editor widgets
      "editorWidget.background": t.bg1,
      "editorWidget.border": t.border,
      "editorWidget.resizeBorder": t.borderHover,
      "editorSuggestWidget.background": t.bg1,
      "editorSuggestWidget.border": t.border,
      "editorSuggestWidget.foreground": t.fg,
      "editorSuggestWidget.highlightForeground": t.accent,
      "editorSuggestWidget.selectedBackground": hex(t.fg, 0.08),
      "editorHoverWidget.background": t.bg1,
      "editorHoverWidget.border": t.border,
      "editorHoverWidget.foreground": t.fg,

      // Editor groups
      "editorGroup.border": t.border,
      "editorGroup.dropBackground": hex(t.accent, 0.08),
      "editorGroup.emptyBackground": t.bg0,
      "editorGroupHeader.noTabsBackground": t.bg1,
      "editorGroupHeader.tabsBackground": t.bg1,
      "editorGroupHeader.tabsBorder": t.border,

      // Inlay hints
      "editorInlayHint.background": hex("#000000", 0),
      "editorInlayHint.foreground": t.fgFaint,
      "editorInlayHint.parameterBackground": hex("#000000", 0),
      "editorInlayHint.parameterForeground": t.fgFaint,
      "editorInlayHint.typeBackground": hex("#000000", 0),
      "editorInlayHint.typeForeground": t.fgFaint,

      // Tabs
      "tab.activeBackground": t.bg2,
      "tab.activeForeground": t.fg,
      "tab.activeBorder": t.bg2,
      "tab.activeBorderTop": t.accent,
      "tab.inactiveBackground": t.bg1,
      "tab.inactiveForeground": t.fgDim,
      "tab.border": t.border,
      "tab.hoverBackground": hex(t.fg, 0.04),
      "tab.unfocusedActiveForeground": t.fgMuted,
      "tab.unfocusedInactiveForeground": t.fgDim,

      // Status bar
      "statusBar.background": t.bg0,
      "statusBar.foreground": t.fgDim,
      "statusBar.border": t.border,
      "statusBar.debuggingBackground": hex(t.orange, 0.15),
      "statusBar.debuggingForeground": t.orange,
      "statusBar.noFolderBackground": t.bg0,
      "statusBar.noFolderForeground": t.fgDim,
      "statusBarItem.activeBackground": hex(t.fg, 0.1),
      "statusBarItem.hoverBackground": hex(t.fg, 0.06),
      "statusBarItem.prominentBackground": hex(t.fg, 0.06),
      "statusBarItem.prominentHoverBackground": hex(t.fg, 0.1),
      "statusBarItem.remoteBackground": t.bg0,
      "statusBarItem.remoteForeground": t.fgMuted,

      // Buttons
      "button.background": t.accent,
      "button.foreground": t.bg0,
      "button.hoverBackground": t.accentHover,
      "button.secondaryBackground": hex(t.fg, 0.1),
      "button.secondaryForeground": t.fg,
      "button.secondaryHoverBackground": hex(t.fg, 0.15),

      // Inputs
      "input.background": hex(t.fg, 0.04),
      "input.border": t.border,
      "input.foreground": t.fg,
      "input.placeholderForeground": t.fgDim,
      "inputOption.activeBackground": hex(t.accent, 0.2),
      "inputOption.activeBorder": hex(t.accent, 0),
      "inputOption.activeForeground": t.accent,
      "inputValidation.errorBackground": t.bg1,
      "inputValidation.errorBorder": t.red,
      "inputValidation.errorForeground": t.red,
      "inputValidation.infoBackground": t.bg1,
      "inputValidation.infoBorder": t.cyan,
      "inputValidation.infoForeground": t.cyan,
      "inputValidation.warningBackground": t.bg1,
      "inputValidation.warningBorder": t.yellow,
      "inputValidation.warningForeground": t.yellow,

      // Dropdown
      "dropdown.background": t.bg2,
      "dropdown.border": t.border,
      "dropdown.foreground": t.fg,

      // Badge
      "badge.background": t.accent,
      "badge.foreground": t.bg0,

      // Scroll bar
      "scrollbar.shadow": hex("#000000", 0),
      "scrollbarSlider.background": hex(t.fg, 0.06),
      "scrollbarSlider.hoverBackground": hex(t.fg, 0.1),
      "scrollbarSlider.activeBackground": hex(t.fg, 0.14),

      // Progress bar
      "progressBar.background": t.accent,

      // Lists
      "list.activeSelectionBackground": hex(t.accent, 0.15),
      "list.activeSelectionForeground": t.fg,
      "list.inactiveSelectionBackground": hex(t.fg, 0.06),
      "list.inactiveSelectionForeground": t.fg,
      "list.focusBackground": hex(t.accent, 0.12),
      "list.focusForeground": t.fg,
      "list.hoverBackground": hex(t.fg, 0.04),
      "list.hoverForeground": t.fg,
      "list.highlightForeground": t.accent,
      "list.dropBackground": hex(t.accent, 0.1),
      "list.errorForeground": t.red,
      "list.warningForeground": t.yellow,
      "list.deemphasizedForeground": t.fgDim,

      // Tree
      "tree.indentGuidesStroke": hex(t.fg, 0.1),
      "tree.inactiveIndentGuidesStroke": hex(t.fg, 0.05),

      // Menu
      "menu.background": t.bg1,
      "menu.foreground": t.fg,
      "menu.separatorBackground": t.border,
      "menu.border": t.border,
      "menubar.selectionBackground": hex(t.fg, 0.06),

      // Notifications
      "notifications.background": t.bg1,
      "notifications.foreground": t.fg,
      "notificationLink.foreground": t.accent,

      // Panel (terminal panel area)
      "panel.background": t.bg0,
      "panel.border": t.border,
      "panelTitle.activeBorder": t.accent,
      "panelTitle.activeForeground": t.fg,
      "panelTitle.inactiveForeground": t.fgDim,

      // TERMINAL - BLACK backgrounds, critical for Claude Code
      "terminal.background": "#000000",
      "terminal.foreground": t.fg,
      "terminal.selectionBackground": hex(t.fg, 0.12),
      "terminalCursor.background": "#000000",
      "terminalCursor.foreground": t.accent,
      "terminal.ansiBlack": "#1A1A1A",
      "terminal.ansiRed": t.red,
      "terminal.ansiGreen": t.green,
      "terminal.ansiYellow": t.yellow,
      "terminal.ansiBlue": t.syn.keyword,
      "terminal.ansiMagenta": t.purple,
      "terminal.ansiCyan": t.cyan,
      "terminal.ansiWhite": "#E0E0E0",
      "terminal.ansiBrightBlack": t.fgDim,
      "terminal.ansiBrightRed": t.red,
      "terminal.ansiBrightGreen": t.green,
      "terminal.ansiBrightYellow": t.yellow,
      "terminal.ansiBrightBlue": t.syn.keyword,
      "terminal.ansiBrightMagenta": t.purple,
      "terminal.ansiBrightCyan": t.cyan,
      "terminal.ansiBrightWhite": "#F5F5F5",

      // Peek view
      "peekView.border": t.border,
      "peekViewEditor.background": t.bg1,
      "peekViewEditor.matchHighlightBackground": hex(t.accent, 0.2),
      "peekViewEditorGutter.background": t.bg1,
      "peekViewResult.background": t.bg0,
      "peekViewResult.fileForeground": t.fg,
      "peekViewResult.lineForeground": t.fgMuted,
      "peekViewResult.matchHighlightBackground": hex(t.accent, 0.2),
      "peekViewResult.selectionBackground": hex(t.fg, 0.08),
      "peekViewResult.selectionForeground": t.fg,
      "peekViewTitle.background": t.bg1,
      "peekViewTitleDescription.foreground": t.fgMuted,
      "peekViewTitleLabel.foreground": t.fg,

      // Diff editor
      "diffEditor.insertedTextBackground": hex(t.green, 0.12),
      "diffEditor.insertedLineBackground": hex(t.green, 0.08),
      "diffEditor.removedTextBackground": hex(t.red, 0.12),
      "diffEditor.removedLineBackground": hex(t.red, 0.08),
      "diffEditor.diagonalFill": hex(t.fg, 0.05),

      // Git decorations
      "gitDecoration.addedResourceForeground": t.green,
      "gitDecoration.modifiedResourceForeground": t.yellow,
      "gitDecoration.deletedResourceForeground": t.red,
      "gitDecoration.untrackedResourceForeground": t.cyan,
      "gitDecoration.ignoredResourceForeground": t.fgFaint,
      "gitDecoration.conflictingResourceForeground": t.orange,

      // Merge
      "merge.currentHeaderBackground": hex(t.cyan, 0.3),
      "merge.currentContentBackground": hex(t.cyan, 0.15),
      "merge.incomingHeaderBackground": hex(t.green, 0.3),
      "merge.incomingContentBackground": hex(t.green, 0.15),
      "merge.border": hex("#000000", 0),

      // Breadcrumb
      "breadcrumb.background": t.bg2,
      "breadcrumb.foreground": t.fgDim,
      "breadcrumb.activeSelectionForeground": t.fg,
      "breadcrumbPicker.background": t.bg1,

      // Charts
      "charts.green": t.green,
      "charts.red": t.red,
      "charts.yellow": t.yellow,

      // Debug
      "debugToolBar.background": t.bg1,
      "debugExceptionWidget.background": t.bg1,
      "debugExceptionWidget.border": t.border,

      // Text links
      "textLink.foreground": t.accent,
      "textLink.activeForeground": t.accentHover,
      "textPreformat.foreground": t.syn.string,

      // Minimap
      "minimap.background": t.bg2,
      "minimap.findMatchHighlight": hex(t.accent, 0.3),
      "minimap.selectionHighlight": hex(t.fg, 0.08),
      "minimap.errorHighlight": t.red,
      "minimap.warningHighlight": t.yellow,
      "minimapGutter.addedBackground": t.green,
      "minimapGutter.modifiedBackground": t.yellow,
      "minimapGutter.deletedBackground": t.red,

      // Picker
      "pickerGroup.border": hex(t.fg, 0.08),
      "pickerGroup.foreground": t.accent,

      // Walk through
      "walkThrough.embeddedEditorBackground": t.bg0,

      // Command center
      "commandCenter.background": hex(t.fg, 0.04),
      "commandCenter.border": t.border,
      "commandCenter.foreground": t.fgMuted,
      "commandCenter.activeBackground": hex(t.fg, 0.08),
      "commandCenter.activeForeground": t.fg,

      // Extension button
      "extensionButton.prominentBackground": t.accent,
      "extensionButton.prominentForeground": t.bg0,
      "extensionButton.prominentHoverBackground": t.accentHover,
    },
    semanticHighlighting: true,
    semanticTokenColors: {
      "enumMember": { "foreground": t.syn.constant },
      "variable.constant": { "foreground": t.syn.constant },
      "variable.defaultLibrary": { "foreground": t.fg },
      "method.declaration": { "foreground": t.syn.func, "fontStyle": "bold" },
      "function.declaration": { "foreground": t.syn.func, "fontStyle": "bold" },
      "function.builtin": t.syn.type,
      "class.builtin": t.syn.type,
      "class.declaration:python": t.syn.type,
      "support.variable.property": t.syn.property,
      "selfParameter": t.syn.constant,
      "macro": t.syn.string,
      "namespace:cpp": t.syn.type,
      "type:cpp": t.syn.type,
      "function": t.syn.func,
      "property:cpp": t.syn.property,
      "variable:javascript": t.fg,
      "type:c": t.syn.type,
    },
    tokenColors: [
      // === COMMENTS ===
      {
        name: "Comments",
        scope: "comment, punctuation.definition.comment, comment.line.double-slash, comment.block.documentation",
        settings: { foreground: t.syn.comment, fontStyle: "italic" }
      },
      // === STRINGS ===
      {
        name: "Strings",
        scope: ["string", "punctuation.definition.string.begin", "punctuation.definition.string.end"],
        settings: { foreground: t.syn.string }
      },
      {
        name: "Template Literal Punctuation",
        scope: ["keyword.other.template.begin", "keyword.other.template.end", "keyword.other.substitution.begin", "keyword.other.substitution.end"],
        settings: { foreground: t.syn.string }
      },
      {
        name: "String interpolation",
        scope: ["punctuation.definition.template-expression.begin", "punctuation.definition.template-expression.end", "punctuation.section.embedded"],
        settings: { foreground: t.syn.keyword }
      },
      {
        name: "Reset template expression",
        scope: "meta.template.expression",
        settings: { foreground: t.fg }
      },
      {
        name: "Regular Expressions",
        scope: "string.regexp",
        settings: { foreground: t.syn.constant }
      },
      // === KEYWORDS ===
      {
        name: "Keywords",
        scope: "keyword",
        settings: { foreground: t.syn.keyword }
      },
      {
        name: "Storage (let, const, var, function, class, etc)",
        scope: ["storage", "token.storage"],
        settings: { foreground: t.syn.keyword }
      },
      {
        name: "Keyword Control",
        scope: ["keyword.control"],
        settings: { foreground: t.syn.keyword }
      },
      {
        name: "Special Operators (instanceof, typeof, new, etc)",
        scope: ["keyword.operator.expression.instanceof", "keyword.operator.new", "keyword.operator.ternary", "keyword.operator.optional", "keyword.operator.expression.keyof", "keyword.operator.expression.delete", "keyword.operator.expression.in", "keyword.operator.expression.of", "keyword.operator.expression.typeof", "keyword.operator.expression.void"],
        settings: { foreground: t.syn.keyword }
      },
      {
        name: "Import/Module operator",
        scope: ["keyword.operator.expression.import", "keyword.operator.module"],
        settings: { foreground: t.syn.keyword }
      },
      // === OPERATORS ===
      {
        name: "Operators",
        scope: "keyword.operator",
        settings: { foreground: t.syn.operator }
      },
      {
        name: "Assignment",
        scope: "keyword.operator.assignment",
        settings: { foreground: t.syn.operator }
      },
      {
        name: "Arithmetic/Comparison",
        scope: ["keyword.operator.arithmetic", "keyword.operator.comparison", "keyword.operator.relational", "keyword.operator.increment", "keyword.operator.decrement", "keyword.operator.logical", "keyword.operator.bitwise"],
        settings: { foreground: t.syn.operator }
      },
      // === FUNCTIONS ===
      {
        name: "Functions",
        scope: ["entity.name.function", "meta.require", "support.function", "variable.function"],
        settings: { foreground: t.syn.func }
      },
      {
        name: "Function parameters",
        scope: "variable.parameter.function",
        settings: { foreground: t.fg, fontStyle: "italic" }
      },
      {
        name: "Python Function Parameters",
        scope: ["variable.parameter.function.python", "variable.parameter.function.language.python"],
        settings: { foreground: t.syn.number }
      },
      // === TYPES / CLASSES ===
      {
        name: "Types",
        scope: "entity.name.type",
        settings: { foreground: t.syn.type }
      },
      {
        name: "Classes",
        scope: ["support.class", "entity.name.type.class"],
        settings: { foreground: t.syn.type }
      },
      {
        name: "Class Name",
        scope: ["entity.name.class", "variable.other.class.js", "variable.other.class.ts"],
        settings: { foreground: t.syn.type }
      },
      {
        name: "TypeScript Primitive Types",
        scope: ["support.type.primitive.ts", "support.type.builtin.ts", "support.type.primitive.tsx", "support.type.builtin.tsx"],
        settings: { foreground: t.syn.keyword }
      },
      {
        name: "Inherited Class",
        scope: "entity.other.inherited-class",
        settings: { foreground: t.syn.type }
      },
      // === VARIABLES ===
      {
        name: "Variables",
        scope: ["variable", "variable.c"],
        settings: { foreground: t.fg }
      },
      {
        name: "Variable readwrite",
        scope: "variable.other.readwrite",
        settings: { foreground: t.fg }
      },
      {
        name: "Constant Variable",
        scope: "variable.other.constant",
        settings: { foreground: t.syn.constant }
      },
      {
        name: "Language Variables (this, self, super)",
        scope: "variable.language",
        settings: { foreground: t.syn.keyword, fontStyle: "italic" }
      },
      {
        name: "Properties",
        scope: ["support.variable.property", "variable.other.property", "variable.other.property.ts", "meta.definition.property.ts"],
        settings: { foreground: t.syn.property }
      },
      {
        name: "Object Literal Key",
        scope: "meta.object-literal.key",
        settings: { foreground: t.syn.property }
      },
      // === NUMBERS ===
      {
        name: "Numbers",
        scope: "constant.numeric",
        settings: { foreground: t.syn.number }
      },
      // === CONSTANTS ===
      {
        name: "Constants",
        scope: "punctuation.definition.constant",
        settings: { foreground: t.syn.constant }
      },
      {
        name: "Escape Characters",
        scope: "constant.character.escape",
        settings: { foreground: t.syn.keyword }
      },
      // === PUNCTUATION ===
      {
        name: "Punctuation",
        scope: ["punctuation.separator.delimiter", "punctuation.separator.key-value", "meta.brace.square"],
        settings: { foreground: t.fg }
      },
      // === HTML / JSX / TAGS ===
      {
        name: "HTML Tags",
        scope: "entity.name.tag.html",
        settings: { foreground: t.syn.tag }
      },
      {
        name: "Tag Punctuation",
        scope: "punctuation.definition.tag",
        settings: { foreground: hex(t.syn.tag, 0.7) || t.fgDim }
      },
      {
        name: "Meta Tag",
        scope: "meta.tag",
        settings: { foreground: t.fg }
      },
      {
        name: "Attributes",
        scope: "entity.other.attribute-name",
        settings: { foreground: t.syn.attribute, fontStyle: "italic" }
      },
      // === CSS ===
      {
        name: "CSS Property Name",
        scope: "meta.property-name.css",
        settings: { foreground: t.syn.property }
      },
      {
        name: "CSS Property Value",
        scope: "meta.property-value.css",
        settings: { foreground: t.syn.string }
      },
      {
        name: "CSS Selector Class",
        scope: "entity.other.attribute-name.class.css",
        settings: { foreground: t.syn.func }
      },
      {
        name: "CSS Color",
        scope: ["support.constant.color.w3c-standard-color-name.css", "support.constant.color.w3c-standard-color-name.scss"],
        settings: { foreground: t.syn.number }
      },
      {
        name: "CSS Units",
        scope: "keyword.other.unit",
        settings: { foreground: t.syn.number }
      },
      // === JSON ===
      {
        name: "JSON Property Name",
        scope: "support.type.property-name.json",
        settings: { foreground: t.syn.property }
      },
      {
        name: "JSON String Values",
        scope: ["source.json meta.structure.dictionary.json > value.json > string.quoted.json", "source.json meta.structure.array.json > value.json > string.quoted.json"],
        settings: { foreground: t.syn.string }
      },
      {
        name: "JSON Constants",
        scope: "support.constant.json",
        settings: { foreground: t.syn.number }
      },
      // === MARKDOWN - extra attention for good rendering ===
      {
        name: "Markdown Headings",
        scope: "entity.name.section.markdown",
        settings: { foreground: t.accent, fontStyle: "bold" }
      },
      {
        name: "Markdown Heading Punctuation",
        scope: ["punctuation.definition.heading.markdown", "markup.heading"],
        settings: { foreground: t.accent, fontStyle: "bold" }
      },
      {
        name: "Markdown Setext Headings",
        scope: "markup.heading.setext",
        settings: { foreground: t.accent, fontStyle: "bold" }
      },
      {
        name: "Markdown Bold",
        scope: ["markup.bold", "todo.bold", "punctuation.definition.bold.markdown"],
        settings: { foreground: t.syn.func, fontStyle: "bold" }
      },
      {
        name: "Markdown Italic",
        scope: ["markup.italic", "punctuation.definition.italic", "todo.emphasis", "markup.italic.markdown"],
        settings: { foreground: t.syn.keyword, fontStyle: "italic" }
      },
      {
        name: "Markdown Inline Code",
        scope: ["markup.inline.raw.markdown", "markup.inline.raw.string.markdown"],
        settings: { foreground: t.syn.string }
      },
      {
        name: "Markdown Fenced Code",
        scope: ["markup.fenced_code.block.markdown", "punctuation.definition.markdown"],
        settings: { foreground: t.syn.string }
      },
      {
        name: "Markdown Links",
        scope: ["markup.underline.link.markdown", "markup.underline.link.image.markdown"],
        settings: { foreground: t.accent }
      },
      {
        name: "Markdown Link Title/Description",
        scope: ["string.other.link.title.markdown", "string.other.link.description.markdown"],
        settings: { foreground: t.syn.type }
      },
      {
        name: "Markdown List Punctuation",
        scope: ["punctuation.definition.list.begin.markdown", "punctuation.definition.list.markdown", "beginning.punctuation.definition.list.markdown"],
        settings: { foreground: t.syn.func }
      },
      {
        name: "Markdown Quote",
        scope: "markup.quote.markdown",
        settings: { foreground: t.fgDim, fontStyle: "italic" }
      },
      {
        name: "Markdown Separator/HR",
        scope: "meta.separator.markdown",
        settings: { foreground: t.fgFaint }
      },
      // === DIFF ===
      {
        name: "Diff Inserted",
        scope: "markup.inserted.diff",
        settings: { foreground: t.green }
      },
      {
        name: "Diff Deleted",
        scope: "markup.deleted.diff",
        settings: { foreground: t.red }
      },
      {
        name: "Diff Changed",
        scope: "markup.changed.diff",
        settings: { foreground: t.yellow }
      },
      {
        name: "Diff Header",
        scope: ["meta.diff.header.from-file", "meta.diff.header.to-file", "punctuation.definition.from-file.diff", "punctuation.definition.to-file.diff"],
        settings: { foreground: t.syn.type }
      },
      // === PYTHON ===
      {
        name: "Python Self",
        scope: "variable.parameter.function.language.special.self.python",
        settings: { foreground: t.syn.keyword, fontStyle: "italic" }
      },
      {
        name: "Python Types",
        scope: "support.type.python",
        settings: { foreground: t.syn.type }
      },
      {
        name: "Python Decorator",
        scope: ["meta.function.decorator.python", "punctuation.definition.decorator.python", "entity.name.function.decorator.python"],
        settings: { foreground: t.syn.attribute }
      },
      {
        name: "Python Function Call",
        scope: "meta.function-call.generic.python",
        settings: { foreground: t.syn.func }
      },
      {
        name: "Python Keyword Control",
        scope: ["keyword.control.import.python", "keyword.control.flow.python"],
        settings: { fontStyle: "italic" }
      },
      // === GO ===
      {
        name: "Go Package",
        scope: "entity.name.package.go",
        settings: { foreground: t.syn.type }
      },
      {
        name: "Go Assignment",
        scope: "keyword.operator.assignment.go",
        settings: { foreground: t.syn.keyword }
      },
      // === RUST ===
      {
        name: "Rust Sigil",
        scope: "keyword.operator.sigil.rust",
        settings: { foreground: t.syn.keyword }
      },
      {
        name: "Rust Std Function",
        scope: "support.function.std.rust",
        settings: { foreground: t.syn.func }
      },
      {
        name: "Rust Lifetime",
        scope: "entity.name.lifetime.rust",
        settings: { foreground: t.syn.number }
      },
      {
        name: "Rust Core Constants",
        scope: "support.constant.core.rust",
        settings: { foreground: t.syn.constant }
      },
      // === C / C++ ===
      {
        name: "C/C++ Operators",
        scope: ["keyword.operator.assignment.c", "keyword.operator.comparison.c", "keyword.operator.c", "keyword.operator.assignment.cpp", "keyword.operator.comparison.cpp", "keyword.operator.cpp"],
        settings: { foreground: t.syn.keyword }
      },
      {
        name: "C/C++ sizeof",
        scope: ["keyword.operator.sizeof.c", "keyword.operator.sizeof.cpp"],
        settings: { foreground: t.syn.keyword }
      },
      {
        name: "Control Directive (#include, #define)",
        scope: "keyword.control.directive",
        settings: { foreground: t.syn.attribute }
      },
      // === JAVA ===
      {
        name: "Java Types/Modifiers",
        scope: ["storage.modifier.import.java", "storage.type.java", "storage.type.generic.java"],
        settings: { foreground: t.syn.type }
      },
      {
        name: "Java Method",
        scope: "meta.method.java",
        settings: { foreground: t.syn.func }
      },
      // === PHP ===
      {
        name: "PHP Function Call",
        scope: ["meta.function-call.php", "meta.function-call.object.php", "meta.function-call.static.php"],
        settings: { foreground: t.syn.func }
      },
      {
        name: "PHP Types",
        scope: ["storage.type.php", "keyword.other.type.php"],
        settings: { foreground: t.syn.type }
      },
      // === YAML ===
      {
        name: "YAML List Punctuation",
        scope: "punctuation.definition.block.sequence.item.yaml",
        settings: { foreground: t.fg }
      },
      // === DIAGNOSTICS ===
      {
        name: "Diagnostics Info",
        scope: "token.info-token",
        settings: { foreground: t.cyan }
      },
      {
        name: "Diagnostics Warning",
        scope: "token.warn-token",
        settings: { foreground: t.yellow }
      },
      {
        name: "Diagnostics Error",
        scope: "token.error-token",
        settings: { foreground: t.red }
      },
      {
        name: "Diagnostics Debug",
        scope: "token.debug-token",
        settings: { foreground: t.green }
      },
      // === VUE ===
      {
        name: "Vue Tags",
        scope: ["entity.name.tag.template", "entity.name.tag.script", "entity.name.tag.style"],
        settings: { foreground: t.syn.keyword }
      },
      // === MISC ===
      {
        name: "Invalid",
        scope: "invalid.illegal, invalid.broken, invalid.deprecated",
        settings: { foreground: t.red }
      },
      {
        name: "Embedded (PHP, etc)",
        scope: ["punctuation.section.embedded.begin", "punctuation.section.embedded.end"],
        settings: { foreground: t.syn.keyword }
      },
    ]
  };
}

// Generate all themes
const outDir = path.join(__dirname, 'themes');

for (const t of themes) {
  const theme = generateTheme(t);
  const filename = `mvp-scale-${t.id}-color-theme.json`;
  const filepath = path.join(outDir, filename);
  fs.writeFileSync(filepath, JSON.stringify(theme, null, 2));
  console.log(`Generated: ${filename}`);
}

// Generate package.json
const pkg = {
  name: "mvp-scale-themes",
  displayName: "MVP Scale - Startup & Vibe Coding Themes",
  description: "10 dark themes that follow the startup founder journey — from Seed Round to Exit Strategy. Pitch-black terminals, theme-aware Mermaid diagrams, and vibes that scale.",
  version: "1.1.0",
  publisher: "mvp-scale",
  engines: { vscode: "^1.70.0" },
  categories: ["Themes"],
  keywords: ["dark theme", "startup", "vibe coding", "founder", "mvp", "deploy", "mermaid", "markdown", "cursor"],
  contributes: {
    themes: themes.map(t => ({
      label: t.label,
      uiTheme: "vs-dark",
      path: `./themes/mvp-scale-${t.id}-color-theme.json`
    }))
  }
};

fs.writeFileSync(path.join(__dirname, 'package.json'), JSON.stringify(pkg, null, 2));
console.log('\nGenerated package.json');
console.log(`\nTotal themes: ${themes.length}`);
