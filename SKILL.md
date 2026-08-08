---
name: app-shell-ui
description: >
  Build or restyle frontends using App Shell UI — a clean, restrained macOS-style
  desktop-tool shell (left nav + content, soft surfaces, raised cards, single brand
  accent, settings-list language) with first-class light and dark themes. Use when
  the user asks for app-shell-ui, /app-shell-ui, 桌面工具风 UI, 系统设置感界面, 应用外壳,
  sidebar shell, Clash/设置风格前端, light/dark desktop client UI, 深色主题, 浅色主题,
  theme toggle, or wants pages that share one reusable app chrome across chat /
  settings / console / mail-like layouts. Also use for high-fidelity HTML/React demos
  from tokens and component recipes, or when the user asks to reuse the bundled Top 50
  React UI component library / gallery.
---

# App Shell UI

You are implementing **App Shell UI**: a reusable application chrome + visual language.
Business content changes; the shell does not.

## Positioning (one line)

Not a marketing landing page. Not a dense ops admin.  
**A system-settings / desktop-utility shell**: soft neutral canvas, raised cards, one accent, light borders, **stroke icons first** — in **both light and dark**.  
Content areas stay calm: **do not sprinkle emoji on every card/row**.

## When this skill applies

- New page / demo / prototype in this style
- Restyle an existing screen to match the family
- Extract tokens / sidebar / settings list / empty composer
- Add or fix **light + dark** theme pairs / theme toggle
- User says: app shell、桌面工具风、系统设置感、浅色/深色侧栏、开关列表

If the user wants flashy landing, heavy Material elevation, or multi-primary rainbow dashboards — do **not** force this skill; ask or pick another direction.

## Workflow

1. **Pick a layout template** (required before pixels):
   - **设置型** — narrow left nav + form / toggle list
   - **控制台型** — left nav + card grid / status list
   - **工作台型** — session tree + centered empty state + composer card
   - **IM / 三栏型** — icon rail + list + detail
2. **Set the viewport budget** — define the target desktop viewport (minimum 1280×800) and the one primary task for the route before adding content. See `references/layouts.md` → *Viewport budget / 单页容量*.
3. **Lock dual-theme tokens** — use `references/tokens.md` (**light + dark** are both required by default).
4. **Compose from recipes** — use `references/components.md` (nav item, card, list row, toggle, pill, empty/composer). Recipes are theme-agnostic; only variables change.
5. **Implement** with CSS variables + `data-theme="light"|"dark"`; add a theme toggle; Tailwind/shadcn mapping optional.
6. **Self-check** — run the checklist at the end of this file in **both** themes and at the target viewport before delivery.

Default stack when free to choose:

| Layer | Default |
|-------|---------|
| Markup | Semantic HTML or React |
| Style | CSS variables + light utility/Tailwind |
| Components | shadcn / @coss style (New York + zinc-like neutrals) |
| Icons | Lucide-style 1.5–2px stroke, one family only |
| Theme | **Light + Dark** (toggle + optional OS `prefers-color-scheme`) |

Prefer a **single self-contained HTML** for demos unless the user wants project integration.

## Architecture (always)

```
L0  Window chrome (optional traffic lights / title bar / top tools + theme toggle)
L1  Sidebar or icon rail
L2  Content canvas (soft gray light / soft charcoal dark)
L3  Surfaces (raised cards, panels, lists)
```

Sidebar width: **220–260px** (text nav) or **48–56px** (icon rail).  
Content padding: **20–28px**. Spacing on **4px grid**.

Default page budget: the initial desktop state should complete its primary task in one
viewport after the shell chrome is included. Keep a small bottom breathing room; do not
make the whole page vertically scroll just to reveal routine secondary content. Long
collections may use one bounded inner scroll region when the product genuinely needs it.
中文偏好：每个页面尽量一屏完成，内容达到首屏容量就停止继续堆叠。

## Non-negotiables

1. **Two themes**: ship **light** and **dark** token sets unless the user explicitly wants only one.
2. **One brand primary** for: primary buttons, toggle ON, progress fill, selected border/bg, links. Dark primary may be a slightly brighter twin (e.g. `#007AFF` → `#0A84FF`).
3. **Surface ladder** (both themes): app bg → sidebar bg → raised surface (weak contrast). Light: soft gray + white cards. Dark: soft charcoal + elevated gray cards — **not** pure `#000` page + pure `#fff` cards.
4. **Text ladder**: primary / secondary / tertiary (values differ per theme).
5. **Hierarchy via 1px borders** first; shadow optional and theme-specific.
6. **Radius ladder**: 8 / 12 / 16 / 999 (shared across themes).
7. **Copy pattern**: title + one muted subtitle line.
8. **Motion**: 150–200ms color/background only; no bounce theater.
9. **Theme switch**: `data-theme` on root + visible toggle; persist with `localStorage` when possible.
10. **Icon restraint (content)**: right-hand content defaults to **text + stroke icons + status pills**. Emoji/illustration are optional accents only — never the default for every list row or card. Prefer **zero emoji** in dense lists; at most **one** decorative mark in a banner or empty state.
11. **Equal-height peers**: any **side-by-side** content pair (list + composer, panel + panel, stats siblings that form a pair of cards in one row) must **share the same outer bottom edge**. Use grid/flex `stretch` + column flex + `flex: 1` on surfaces — never `align-items: start` that leaves one short card. See `references/layouts.md` → *Equal-height side-by-side columns*.
12. **Single-viewport content budget**: on desktop, the default route must not require page-level vertical scrolling. Fill the usable canvas with prioritized content, but stop before the first viewport is exceeded. If content does not fit, remove, shorten, paginate, disclose, tab, or split it into another route; never clip controls or shrink text below readability. On mobile, keep the primary action and status in the first viewport; natural scrolling is reserved for genuinely long content.

## Do / Don't

| Do | Don't |
|----|--------|
| Left nav + right content | Full-bleed hero art as the whole app |
| Soft canvas + raised cards in both themes | Neon cyber dark or pure OLED black by default |
| Single accent (paired light/dark) | Rainbow nav icons as multiple primaries |
| Stroke icons (Lucide-style) in nav + content | Mixed filled + stroke icon sets |
| Text-first cards/lists; pill for status | Emoji on every row / card / section header |
| Status as small pills / muted text | Loud full-width alert banners for normal states |
| Theme toggle in chrome | Dark mode via `filter: invert()` |
| Border separation via tokens | Hard-coded `#fff` / `#000` chrome colors |
| Airy spacing | Dense spreadsheet packing |
| ≤1 emoji accent per major region (or none) | Banner + cards + lists all emoji-heavy |
| Side-by-side cards equal height (stretch) | One tall / one short peer (`align-items: start`) |
| One-screen route with prioritized blocks | Unbounded page scroll for routine content |
| Bounded inner scroll for long collections | Hiding or clipping content with fixed heights |

## Page assembly order

1. Shell (window + sidebar + main)
2. Brand block in sidebar
3. Nav groups + active item
4. Page header (H1 + muted subtitle + actions)
5. Theme toggle in titlebar or settings (required for demos)
6. Optional toolbar (search + segmented filter)
7. Content blocks by priority: banner → stats → primary grid/list → secondary two-column. Stop when the viewport budget is full; move lower-priority blocks to tabs, disclosure, pagination, or another route.
8. For every two-column peer row: apply **equal-height** recipe (stretch + flex surfaces) without forcing overflow.
9. Wire interaction: nav switch, selection, toggles, filters, **theme toggle**

## Implementation notes

- Put light tokens on `:root, :root[data-theme="light"]` and dark on `:root[data-theme="dark"]` (see `references/tokens.md`).
- Components only consume variables — no hard-coded brand/surface hex in component rules.
- Selected nav: soft primary wash + primary text, radius 8px (wash mix differs by theme).
- Cards: `--bg-surface` + 1px `--border` + radius 12; selected: primary ring/border. Leading mark = **stroke icon in muted plate** or no mark — not emoji by default.
- Settings / feed rows: **16–18px stroke icon** (optional soft plate) + title + muted desc + right control. Avoid emoji list icons.
- Empty / new session: centered title + large rounded composer; chips + primary CTA. Empty watermark may be **one** faint stroke icon or a single subdued glyph — not a stack of emoji.
- Banner: text-first; optional **one** small accent tile max (often none).
- Dashed add zone for “empty collection + create” (plus sign, not emoji).
- Secondary buttons, segment tracks, toggle OFF tracks must use theme tokens (`--secondary-btn-bg`, `--seg-track`, `--toggle-off`) — light gray rgba does **not** work on dark.
- Keep the page shell fixed (`min-height: 0; overflow: hidden`) by default. If a list, log, table, or message history is inherently long, put scrolling on one bounded child region with a clear height budget; do not make the document body or whole content canvas the default scroll container.
- Validate the first-load state at a desktop viewport of at least 1280×800 (and a narrow mobile viewport). Check that the primary task, controls, and status are visible without page scrolling and that no text or control is clipped.

### Theme API (canonical)

```js
// data-theme = "light" | "dark"
// localStorage key: "app-shell-theme"
// toggle flips attribute; init reads storage then prefers-color-scheme
```

### Minimal CSS token block

Copy the dual-theme block from `references/tokens.md`.

### Minimal HTML skeleton

```html
<html data-theme="light">
…
<div class="window">
  <header class="titlebar">
    …
    <button type="button" data-theme-toggle aria-label="切换深浅色">…</button>
  </header>
  <div class="shell">
    <aside class="sidebar">…</aside>
    <main class="main">…</main>
  </div>
</div>
```

## Prompt seed (when generating designs)

**Light**

> macOS desktop-utility light UI: 240px soft-gray sidebar (stroke icons + label, selected = light primary wash + 8px radius), main canvas soft gray with white rounded cards; single primary #007AFF for buttons, toggles, progress, selection ring; three text grays; radius 8–16px; almost no shadow, 1px light borders; settings/list rows with small stroke icons (not emoji) + title/desc + right toggle or status pill; content area text-first, minimal or no emoji; empty state = centered title + large rounded composer.

**Dark**

> Same shell in dark mode: soft charcoal canvas #1C1C1E, sidebar #161617, raised cards #2C2C2E, borders white 8% alpha, text #F5F5F7 / #A1A1A6 / #6C6C70, primary #0A84FF, selected nav = primary 22% mix into card surface; no pure black page; no invert filter; include theme toggle.

Swap business nouns only; keep shell + dual-theme rules.

## Reference files

- `references/tokens.md` — **light + dark** colors, type, radius, spacing, toggle script
- `references/components.md` — component recipes
- `references/layouts.md` — four layout templates + page recipes
- `references/top50-components.md` — searchable index and selection guide for the 50 bundled React UI references

## Top 50 React component library

Use the bundled Top 50 library when a request asks for one of the curated UI patterns, a
working interaction reference, or a complete component gallery. Keep the library behind
progressive disclosure: read the index first, then open only the component files needed for
the current page.

Provenance: the bundled files are exported from the maintainer's local source workspace
`/Users/yg2224/Desktop/project/UI-合集/top50`. That workspace audits 200 renderable
candidates (100 GPT studies and 100 MiniMax dedicated renderers) and keeps the highest-ranked
50 after the FCBS weighted review. Treat `assets/top50-react/` as the curated reusable result;
do not describe it as the full raw candidate set.

1. Read `references/top50-components.md` and select the smallest useful set of components.
2. Copy the matching files from `assets/top50-react/components/items/` into the consumer's
   React / Next.js project. Preserve the bundled relative layout: keep the files under
   `components/items/`, place `shared.tsx` at `components/shared.tsx`, and place `cn.ts` at
   the sibling project-root `lib/cn.ts`; adding an extra wrapper directory breaks the
   relative imports. Copy `components/shared.tsx` as well; copy `lib/cn.ts` when the shared
   primitive is used.
3. Include `assets/top50-react/globals.css` only for its custom demo tokens and animations;
   map those values to the App Shell dual-theme tokens instead of importing a second chrome.
4. Preserve the component's interaction and accessibility behavior, then replace its
   business copy and sample data with the user's domain data.
5. Use `assets/top50-react/components/top50-gallery.tsx` together with
   `assets/top50-react/data/top50.ts` when the user asks for the full 50-item learning
   gallery. The asset package uses relative imports, so it can be copied without a `@/`
   path alias.
6. In a full gallery, show one selected component preview at a time inside the viewport;
   use the sidebar, tabs, or pagination for the remaining items instead of stacking 50
   full previews into a page that requires long scrolling.

The components are interaction references, not a competing page shell. Keep the outer
window, sidebar, surfaces, theme toggle, and token ladder from this skill. Re-skin any
component that uses the gallery's dark preview palette before shipping it inside an App
Shell page.

To refresh the bundled source from the standalone gallery, run:

```bash
python scripts/sync_top50_assets.py --source /path/to/top50
```

The script copies exactly 50 component files, rewrites their imports to local relative
paths, refreshes `assets/top50-react/top50.json`, and regenerates the reference index.

Read them when implementing; do not invent a competing palette unless the user specifies a brand color (then replace **only** `--primary` light/dark pair and derived selected/wash colors).

## Delivery checklist

Before finishing, verify **once in light and once in dark**:

- [ ] Both `data-theme="light"` and `data-theme="dark"` token sets exist
- [ ] Visible theme toggle works and (if web) preference can persist
- [ ] Exactly one primary accent in interactive UI (per theme pair OK)
- [ ] Canvas is soft gray / soft charcoal (not pure white page / pure black page)
- [ ] Cards use raised `--bg-surface` + light border + 8–16 radius
- [ ] No black text stuck on dark surfaces; no white boxes that ignore dark tokens
- [ ] Sidebar selected state is soft wash, not loud
- [ ] Title + muted subtitle on main pages
- [ ] Primary / secondary / ghost buttons all readable in both themes
- [ ] Toggle ON = primary, OFF = visible gray track in both themes
- [ ] Spacing roughly multiples of 4
- [ ] No heavy shadows, rainbow icons, landing hero chrome, or `filter: invert`
- [ ] Content area is not emoji-dense (lists/cards use stroke icons or text only)
- [ ] Side-by-side peer panels/cards align on the same bottom edge (no short+tall pair)
- [ ] Default desktop route fits one viewport: no page-level vertical scroll, clipped text, or hidden controls
- [ ] Any scroll is limited to one intentional, bounded inner collection; mobile keeps the primary action above the fold
- [ ] Same shell would still work if business content is swapped

## Optional local example

If present on this machine, study structure (not business copy):

`~/Desktop/project/UI/fruit-ui/index.html`

Teaching longform (human docs, not required for agents):

`~/Desktop/桌面工具风UI教学.md`
