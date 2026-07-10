# App Shell UI — Design Tokens

Use CSS variables. Components consume tokens only.  
**Two themes are first-class: `light` and `dark`.** Same component recipes; only token values change.

## Theme mechanism (required)

```html
<html data-theme="light">  <!-- or "dark" -->
```

```css
:root,
:root[data-theme="light"] { /* light tokens */ }

:root[data-theme="dark"] { /* dark tokens */ }

/* Optional: follow OS when no explicit preference */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme]) { /* same as dark tokens */ }
}
@media (prefers-color-scheme: light) {
  :root:not([data-theme]) { /* same as light tokens */ }
}
```

Rules:

1. Ship **both** palettes in every new app-shell page/demo unless the user explicitly forbids one.
2. Provide a visible **theme toggle** (sun/moon icon button in titlebar or settings).
3. Prefer persisting choice: `localStorage.app-shell-theme = "light" | "dark"`.
4. Never hard-code `#fff` / `#000` in components for chrome surfaces — always `var(--bg-*)` / `var(--text-*)`.
5. Icon plates use muted fills + **stroke icons**. Do not default to emoji tiles. If a rare emoji is requested, keep pastel plate contrast readable on dark.

---

## Surface ladder

Contrast stays **weak** in both themes: app → sidebar → surface (raised).

| Token | Light | Dark | Role |
|-------|-------|------|------|
| `--bg-app` | `#F4F5F7` | `#1C1C1E` | Main canvas |
| `--bg-sidebar` | `#EEF0F3` | `#161617` | Sidebar (slightly off from app) |
| `--bg-surface` | `#FFFFFF` | `#2C2C2E` | Cards, inputs, popovers (raised) |
| `--bg-muted` | `#F7F8FA` | `#3A3A3C` | Nested blocks / row resting alt |
| `--bg-hover` | `rgba(0,0,0,0.04)` | `rgba(255,255,255,0.06)` | Hover wash |
| `--bg-selected` | `color-mix(in srgb, var(--primary) 12%, white)` | `color-mix(in srgb, var(--primary) 22%, #2C2C2E)` | Nav selected |

Dark notes:

- Do **not** use pure `#000` full page — reads harsh, not “system utility”.
- Surface must be **lighter than** app canvas so cards still “float”.
- Sidebar can be slightly darker than app (macOS-like) or match; keep a visible seam via `--border`.

---

## Text ladder

| Token | Light | Dark | Role |
|-------|-------|------|------|
| `--text-primary` | `#1C1C1E` | `#F5F5F7` | Titles, key numbers |
| `--text-secondary` | `#636366` | `#A1A1A6` | Body, secondary controls |
| `--text-tertiary` | `#8E8E93` | `#6C6C70` | Meta, placeholders, hints |
| `--text-success` | `#34C759` | `#30D158` | OK / ready |
| `--text-warning` | `#FF9F0A` | `#FFD60A` | Caution |
| `--text-danger` | `#FF3B30` | `#FF453A` | Errors, badge counts |

Aim for readable body contrast; tertiary can stay softer.

---

## Brand

| Token | Light | Dark | Rule |
|-------|-------|------|------|
| `--primary` | `#007AFF` | `#0A84FF` | Single accent; dark slightly brighter |
| `--primary-foreground` | `#FFFFFF` | `#FFFFFF` | On solid primary |

Allowed brand swaps: one product color only (e.g. `#2F6BFF` light / slightly lifted dark).  
Never multiple primaries for buttons + toggles + selection.

---

## Border / radius / shadow

| Token | Light | Dark |
|-------|-------|------|
| `--border` | `rgba(0,0,0,0.08)` | `rgba(255,255,255,0.08)` |
| `--border-strong` | `rgba(0,0,0,0.12)` | `rgba(255,255,255,0.14)` |
| `--shadow-card` | `0 1px 3px rgba(0,0,0,0.06)` | `0 1px 3px rgba(0,0,0,0.45)` |

Radius (shared):

```css
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-full: 999px;
```

Prefer border hierarchy over shadow in both themes.

---

## Typography & layout (theme-independent)

```css
--font-ui: -apple-system, BlinkMacSystemFont, "SF Pro Text",
  "PingFang SC", "Hiragino Sans GB", "Segoe UI", system-ui, sans-serif;
--sidebar-width: 240px;
--content-padding: 24px;
```

| Role | Size | Weight |
|------|------|--------|
| Page title | 18–22px | 600 |
| Section title | 15–16px | 600 |
| Body / list | 13–14px | 400–500 |
| Meta | 11–12px | 400 |

| Metric | Value |
|--------|-------|
| Nav item height | 36–40px |
| Button height | 32px |
| Control / card gap | 8–12 / 12–16 |
| Section gap | 20–32px |
| Grid | multiples of 4 |

---

## Copy-paste dual theme CSS

```css
:root,
:root[data-theme="light"] {
  --bg-app: #F4F5F7;
  --bg-sidebar: #EEF0F3;
  --bg-surface: #FFFFFF;
  --bg-muted: #F7F8FA;
  --bg-hover: rgba(0, 0, 0, 0.04);
  --bg-selected: color-mix(in srgb, var(--primary) 12%, white);

  --text-primary: #1C1C1E;
  --text-secondary: #636366;
  --text-tertiary: #8E8E93;
  --text-success: #34C759;
  --text-warning: #FF9F0A;
  --text-danger: #FF3B30;

  --primary: #007AFF;
  --primary-foreground: #FFFFFF;

  --border: rgba(0, 0, 0, 0.08);
  --border-strong: rgba(0, 0, 0, 0.12);
  --shadow-card: 0 1px 3px rgba(0, 0, 0, 0.06);

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-full: 999px;

  --font-ui: -apple-system, BlinkMacSystemFont, "SF Pro Text",
    "PingFang SC", "Segoe UI", system-ui, sans-serif;
  --sidebar-width: 240px;
  --content-padding: 24px;

  --titlebar-bg: linear-gradient(to bottom, #fafbfc, #f3f4f6);
  --window-outer-bg: #d8dde6;
  --seg-track: rgba(0, 0, 0, 0.05);
  --secondary-btn-bg: rgba(0, 0, 0, 0.06);
  --toggle-off: rgba(0, 0, 0, 0.12);
  --banner-bg: linear-gradient(135deg, #e8f4ff 0%, #f0f7ff 50%, #eefbf3 100%);
  --banner-border: color-mix(in srgb, var(--primary) 12%, white);
}

:root[data-theme="dark"] {
  --bg-app: #1C1C1E;
  --bg-sidebar: #161617;
  --bg-surface: #2C2C2E;
  --bg-muted: #3A3A3C;
  --bg-hover: rgba(255, 255, 255, 0.06);
  --bg-selected: color-mix(in srgb, var(--primary) 22%, #2C2C2E);

  --text-primary: #F5F5F7;
  --text-secondary: #A1A1A6;
  --text-tertiary: #6C6C70;
  --text-success: #30D158;
  --text-warning: #FFD60A;
  --text-danger: #FF453A;

  --primary: #0A84FF;
  --primary-foreground: #FFFFFF;

  --border: rgba(255, 255, 255, 0.08);
  --border-strong: rgba(255, 255, 255, 0.14);
  --shadow-card: 0 1px 3px rgba(0, 0, 0, 0.45);

  --titlebar-bg: linear-gradient(to bottom, #2c2c2e, #1c1c1e);
  --window-outer-bg: #0b0b0c;
  --seg-track: rgba(255, 255, 255, 0.08);
  --secondary-btn-bg: rgba(255, 255, 255, 0.10);
  --toggle-off: rgba(255, 255, 255, 0.18);
  --banner-bg: linear-gradient(135deg, #1a2a3d 0%, #1c2834 50%, #1a2e28 100%);
  --banner-border: color-mix(in srgb, var(--primary) 28%, #2C2C2E);
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme]) {
    --bg-app: #1C1C1E;
    --bg-sidebar: #161617;
    --bg-surface: #2C2C2E;
    --bg-muted: #3A3A3C;
    --bg-hover: rgba(255, 255, 255, 0.06);
    --bg-selected: color-mix(in srgb, var(--primary) 22%, #2C2C2E);
    --text-primary: #F5F5F7;
    --text-secondary: #A1A1A6;
    --text-tertiary: #6C6C70;
    --text-success: #30D158;
    --text-warning: #FFD60A;
    --text-danger: #FF453A;
    --primary: #0A84FF;
    --primary-foreground: #FFFFFF;
    --border: rgba(255, 255, 255, 0.08);
    --border-strong: rgba(255, 255, 255, 0.14);
    --shadow-card: 0 1px 3px rgba(0, 0, 0, 0.45);
    --titlebar-bg: linear-gradient(to bottom, #2c2c2e, #1c1c1e);
    --window-outer-bg: #0b0b0c;
    --seg-track: rgba(255, 255, 255, 0.08);
    --secondary-btn-bg: rgba(255, 255, 255, 0.10);
    --toggle-off: rgba(255, 255, 255, 0.18);
    --banner-bg: linear-gradient(135deg, #1a2a3d 0%, #1c2834 50%, #1a2e28 100%);
    --banner-border: color-mix(in srgb, var(--primary) 28%, #2C2C2E);
  }
}
```

### Minimal theme toggle script

```js
const root = document.documentElement;
const KEY = "app-shell-theme";

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem(KEY, theme);
}

function initTheme() {
  const saved = localStorage.getItem(KEY);
  if (saved === "light" || saved === "dark") applyTheme(saved);
  else applyTheme(matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}

function toggleTheme() {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
}

initTheme();
```

---

## Dark theme visual rules (agent must follow)

| Topic | Rule |
|-------|------|
| Canvas | Soft charcoal, not OLED pure black by default |
| Cards | Raised gray surface, still 1px border |
| Selected nav | Primary wash on dark surface (~20–25% mix), primary text |
| Secondary button | Light white wash, not light-theme gray paste |
| Segment track | White alpha track |
| Toggle OFF | Brighter gray track so thumb remains visible |
| Banner | Low-sat dark blue/green gradient via `--banner-bg` |
| Shadows | Optional; borders still primary separator |
| Window page bg | `--window-outer-bg` behind the app window chrome |
| Icon plates | Stroke icon on muted plate; avoid emoji; pastel plate only for category color coding |

## Anti-patterns

- Inverting by `filter: invert()` on the whole app
- Only recoloring background but leaving black text on dark cards
- Dark theme with pure white full-bleed cards (too harsh) — use `--bg-surface` gray-white
- Different layout or radius between themes
- Forgetting toggle + `data-theme` in demos
