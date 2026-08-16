---
name: app-shell-ui
description: >
  Build or restyle frontends with two deliberately separate modes: App Mode for a clean,
  restrained macOS-style desktop-tool shell (left nav + content, soft surfaces, raised
  cards, single brand accent, settings-list language, light and dark themes), and Website
  Mode for public web frontends such as marketing sites, landing pages, portfolios,
  editorial/read surfaces, catalogues, and documentation. Use when the user asks for
  app-shell-ui, /app-shell-ui, 桌面工具风 UI, 系统设置感界面, 应用外壳, sidebar shell,
  Clash/设置风格前端, 网站前端, 落地页, 官网, landing page, marketing site, portfolio,
  editorial website, catalog, documentation site, or needs a deliberate visual direction,
  responsive layout, interaction, accessibility, and implementation-quality review.
---

# App Shell UI

You are implementing **App Shell UI**: a reusable frontend design skill with two modes.
Choose the surface before choosing pixels. Do not turn every request into a desktop shell,
and do not turn every app into a generic marketing page.

## Choose the surface first

| Mode | Use for | Default structure | Do not use for |
|-------|---------|-------------------|----------------|
| **App Mode** | Logged-in tools, settings, consoles, chat, mail, workbenches, operational flows | Persistent left navigation + task canvas | Public marketing, reading, commerce, or portfolio surfaces |
| **Website Mode** | Marketing sites, product launches, portfolios, editorial pages, catalogues, docs, public content | A page-specific macrostructure selected from the user journey | A generic hero + three cards + CTA template, or a fake app shell |

If the request has both surfaces, design them separately: Website Mode for acquisition or
public information, App Mode for the signed-in product. Share brand tokens where appropriate,
but do not force the same layout or density across both.

## Pre-flight (both modes)

Before making visual decisions in an existing project, inspect the route and its nearest
visual source of truth: current tokens, typography, theme mechanism, assets, framework,
component primitives, and installed icon/motion libraries. Preserve an established system
unless the user asks for a redesign. Check `package.json` before adding a dependency; do not
assume a library exists or mix two unrelated design systems in one surface.

If the brief is genuinely ambiguous between two materially different outcomes, ask exactly
one short question. Otherwise state the inference in one sentence and continue. Do not turn a
small implementation request into a requirements interview.

## App Mode Workflow

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

## App Mode Architecture

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

## App Mode Non-negotiables

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

## App Mode Do / Don't

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

## App Mode Page Assembly Order

1. Shell (window + sidebar + main)
2. Brand block in sidebar
3. Nav groups + active item
4. Page header (H1 + muted subtitle + actions)
5. Theme toggle in titlebar or settings (required for demos)
6. Optional toolbar (search + segmented filter)
7. Content blocks by priority: banner → stats → primary grid/list → secondary two-column. Stop when the viewport budget is full; move lower-priority blocks to tabs, disclosure, pagination, or another route.
8. For every two-column peer row: apply **equal-height** recipe (stretch + flex surfaces) without forcing overflow.
9. Wire interaction: nav switch, selection, toggles, filters, **theme toggle**

## App Mode Implementation Notes

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

## App Mode Prompt Seed

**Light**

> macOS desktop-utility light UI: 240px soft-gray sidebar (stroke icons + label, selected = light primary wash + 8px radius), main canvas soft gray with white rounded cards; single primary #007AFF for buttons, toggles, progress, selection ring; three text grays; radius 8–16px; almost no shadow, 1px light borders; settings/list rows with small stroke icons (not emoji) + title/desc + right toggle or status pill; content area text-first, minimal or no emoji; empty state = centered title + large rounded composer.

**Dark**

> Same shell in dark mode: soft charcoal canvas #1C1C1E, sidebar #161617, raised cards #2C2C2E, borders white 8% alpha, text #F5F5F7 / #A1A1A6 / #6C6C70, primary #0A84FF, selected nav = primary 22% mix into card surface; no pure black page; no invert filter; include theme toggle.

Swap business nouns only; keep shell + dual-theme rules.

## Website Mode Workflow

Website Mode is for public-facing web work. It may use normal document scrolling and should
not inherit App Mode's fixed canvas, sidebar, artificial window chrome, or one-viewport
content limit. Read `references/web-frontend.md` before implementing Website Mode.

1. **Make a design read** — state the page kind, audience, primary job, and a concrete tone.
   "Clean and modern" is not a direction. Infer from the brief and existing brand; ask one
   short question only when two directions would produce materially different work.
2. **Pick the surface mode** — **Persuade** for a conversion page or launch, **Read** for docs
   or editorial content, **Experience** for portfolio/gallery/event work, or **Catalog** for
   browsing and buying. The signed-in product stays in App Mode.
3. **Pick a macrostructure before components** — choose a page shape that fits the job, such
   as product reveal, evidence-led story, editorial narrative, work index, catalogue, reading
   guide, or campaign poster. Do not default to centered hero -> three equal cards -> CTA.
4. **Commit to a visual system** — lock a palette, type roles, spacing/radius rules, image
   treatment, and one visible differentiator. Reuse existing brand tokens; otherwise define
   semantic CSS variables and consume them rather than improvising colors or fonts per section.
5. **Plan truth and media** — use supplied facts, real screenshots/product states, licensed
   assets, or generated bitmap visuals appropriate to the brief. Do not invent customers,
   metrics, testimonials, logos, fake dashboards, browser chrome, or placeholder data that
   reads as real. Unknown claims stay visibly marked as placeholders or are omitted.
6. **Build the information journey** — use semantic landmarks and a hierarchy that makes the
   next action obvious. Let sections vary in composition when their jobs differ; cards are for
   repeated, bounded items rather than a default page-section wrapper.
7. **Implement complete behavior** — use native controls and links, visible focus, loading,
   empty, error, disabled, and success states when relevant. Motion must explain feedback or
   spatial change, use `transform`/`opacity`, respect `prefers-reduced-motion`, and stay out of
   high-frequency flows unless it is effectively instant.
8. **Inspect rendered output** — validate desktop and mobile screenshots, real content extremes,
   contrast, keyboard navigation, loading image dimensions, overflow, and the first viewport.
   The hero's proposition, primary action, and visual focal point must fit at 1280x800; page
   scrolling below it is normal for a website.

### Website Mode non-negotiables

1. Do not wrap a public website in App Mode chrome unless the user explicitly asks for a
   product preview or signed-in application route.
2. Give every public page a specific visual point of view. Make one memorable move that serves
   the brand or story; do not add unexplained decorative shapes, gradients, labels, or motion.
3. Use a maximum of two type families plus an optional code/metadata face. Use type, spacing,
   and composition for hierarchy before increasing font size or adding extra colors.
4. Keep one coherent theme across the page. Website dark mode is a brand/product decision, not
   an automatic App Mode requirement; if supported, provide paired semantic tokens and test it.
5. Prefer real visual evidence: real product UI, product photography, editorial images, or
   generated bitmap assets. Do not hand-draw fake browser bars, device frames, or screenshots
   from generic `div` rectangles.
6. Never fabricate social proof or precise business claims. Keep CTA wording short, specific,
   and single-line at every tested breakpoint; do not repeat the same CTA intent with synonyms.
7. Use CSS Grid for multi-column composition, `minmax(0, 1fr)` for image-bearing tracks, and
   `min-width: 0`/`overflow-wrap: anywhere` where long content can otherwise overflow. Do not
   use `h-screen` for a mobile hero; prefer `min-height: 100dvh` only when a full-height scene is
   genuinely required.
8. Test 320px, 375px, 414px, 768px, and a desktop viewport. There must be no horizontal scroll, hidden
   controls, wrapped CTA/nav labels, inaccessible hover-only actions, or visual overlap.

## Website Mode Prompt Seed

> Public website frontend, not an App Shell: first identify the visitor's job and choose a
> page-specific macrostructure; lock a brand-led token system, distinct typography, and an
> image treatment; make the hero show the real product/place/work with the primary CTA visible;
> vary section compositions by purpose; use semantic HTML, responsive Grid, keyboard focus,
> purposeful reduced-motion-safe interaction, and real/supplied/generated bitmap visuals. Avoid
> generic centered hero, three equal feature cards, fake metrics, fake screenshots, and
> unexplained decorative gradients.

## Reference files

- `references/tokens.md` — **light + dark** colors, type, radius, spacing, toggle script
- `references/components.md` — component recipes
- `references/layouts.md` — four layout templates + page recipes
- `references/web-frontend.md` — Website Mode macrostructures, visual direction, content/media, responsive implementation, and review gates
- `references/top50-components.md` — searchable index and selection guide for the 50 bundled React UI references

## App Mode: Top 50 React component library

Use the bundled Top 50 library when a request asks for one of the curated UI patterns, a
working interaction reference, or a complete component gallery. Keep the library behind
progressive disclosure: read the index first, then open only the component files needed for
the current page.

Provenance: the bundled files are exported from the maintainer's local source workspace
`/Users/yg2224/Desktop/project/UI-合集/top50`. The generation record lists 300 raw candidates:
100 from GPT-5.6, 100 from MiniMax M3, and 100 from GLM 5.2. The current workspace retains and
audits only 200 (GPT-5.6 and MiniMax M3); the GLM 5.2 batch is recorded as deleted or missing and
was not included in the current FCBS scoring or Top 50. The bundled files are the highest-ranked
50 from the retained candidates. Treat `assets/top50-react/` as the curated reusable result; do
not describe it as the full raw candidate set.

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
Shell page. Do not use the gallery as Website Mode's default visual language; use it only when
a selected component adds real interaction and can be reskinned into the website's system.

To refresh the bundled source from the standalone gallery, run:

```bash
python scripts/sync_top50_assets.py --source /path/to/top50
```

The script copies exactly 50 component files, rewrites their imports to local relative
paths, refreshes `assets/top50-react/top50.json`, and regenerates the reference index.

Read them when implementing; do not invent a competing palette unless the user specifies a brand color (then replace **only** `--primary` light/dark pair and derived selected/wash colors).

## App Mode Delivery Checklist

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

## Website Mode Delivery Checklist

- [ ] The selected surface mode and macrostructure match the visitor's job
- [ ] The visible direction is specific: palette, type roles, image treatment, and one purposeful differentiator are coherent
- [ ] The page is not a generic centered hero + three equal cards + repeated CTA sequence
- [ ] Copy uses supplied facts; unknown metrics, testimonials, logos, and screenshots are omitted or clearly marked as placeholders
- [ ] Hero title, primary CTA, and visual focal point are visible at 1280x800; the next section is hinted without clipping content
- [ ] Public routes use normal page scrolling and do not inherit App Mode's `overflow: hidden` canvas
- [ ] Media is real, supplied, or generated for the page; no fake browser/device chrome or generic `div` screenshot
- [ ] Headings, landmarks, links, forms, image alt text, focus states, and status messages use semantic and accessible patterns
- [ ] Interactive controls have appropriate hover, `:focus-visible`, active, disabled, loading, error, and success behavior where relevant
- [ ] Contrast, touch targets, long content, empty/error states, and CTA readability pass at 320px, 375px, 414px, 768px, and desktop
- [ ] No horizontal overflow, two-line nav/CTA labels, accidental overlap, layout-property animation, or motion without a reduced-motion path
- [ ] Above-fold images reserve their dimensions, below-fold media is lazy-loaded where appropriate, and the implementation avoids avoidable layout shift

## Optional App Mode Example

If present on this machine, study structure (not business copy):

`~/Desktop/project/UI/fruit-ui/index.html`

Teaching longform (human docs, not required for agents):

`~/Desktop/桌面工具风UI教学.md`
