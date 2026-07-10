# App Shell UI — Component Recipes

All colors/radii from `tokens.md`.  
Recipes are **theme-agnostic**: use variables only so light/dark both work.

## Theme toggle control

- Place in titlebar actions or settings list row
- Icon button 28×28; sun when dark (click → light), moon when light (click → dark)
- `aria-label="切换深浅色"`; does not change layout
- Must call the canonical theme API (`data-theme` + optional `localStorage`)

## Sidebar brand

- 32×32 rounded square logo tile (optional soft gradient)
- Title 14px semibold + 11px tertiary subtitle
- Padding under brand ~16px

## Nav item

```
[16px stroke icon]  Label                 [optional badge]
height 36–40, radius 8, gap 10
default: transparent + text-secondary
hover: --bg-hover + text-primary
active: --bg-selected + primary text, weight 500
```

Group label: 11px tertiary, padding 0 10 6.

## Page header

```
Left: H1 (20px/600) + muted subtitle (13px)
Right: ghost/secondary + primary button row, gap 8
```

## Buttons

| Variant | Style |
|---------|--------|
| Primary | solid `--primary`, `--primary-foreground` text, h32, radius 8 |
| Secondary | `var(--secondary-btn-bg)` fill + primary text color |
| Ghost | `--bg-surface` + 1px `--border`, secondary text |
| Icon | 28×28, hover `--bg-hover` |

## Search field

- h34, surface bg, 1px border, radius 8
- Left magnifier stroke icon
- Placeholder tertiary

## Segmented control

- Track: `var(--seg-track)`, padding 2, radius 8
- Segment h28, radius 6
- Active: solid primary + primary-foreground text
- Inactive hover: `--bg-hover`

## Stat card

- Surface + border + radius md + light shadow
- Label 12 tertiary
- Value 22 semibold; delta 12 success/danger

## Content card (grid item)

```
Top: optional 40–44 stroke-icon plate (radius 10–12) | title + meta | pill
Bottom: secondary meta (author, counts, time) — text only
Default border; hover border tints primary; selected = primary ring
```

**Default leading mark:** muted plate + **stroke icon** (one color: currentColor / secondary).  
Soft pastel plates only when the product truly needs category color coding — still **no emoji**.  
Many cards can drop the leading mark entirely (title + pill is enough).

## Panel + list row

```
Panel: surface, border, radius md, overflow hidden
Row: pad 12 16, 1px bottom border, hover muted
Left (optional): 32–36 plate + 16–18 stroke icon  OR  omit left mark
Body: title 13.5 medium + desc 12 tertiary ellipsis
Right: price / pill / toggle / check  — never emoji on the right
```

Dense feeds (forum, mail, logs): **prefer no left glyph**; use title hierarchy + pill only.

### Panel next to another card (peer row)

When a panel sits beside a composer or second panel, both outer surfaces must be **equal height** (shared bottom edge). Do not leave a short list card under a tall form. Implementation: `references/layouts.md` → *Equal-height side-by-side columns*.

## Toggle

- 42×24 track, full radius
- OFF: `var(--toggle-off)`; ON: `--primary`
- Thumb: white (both themes), 20px, 180ms slide

## Check circle

- 22 circle, 2px gray border
- ON: primary fill + white check stroke

## Pill / badge

- h20–22, pad 0 8, full radius, 11 medium
- ok / warn / hot (primary) soft tinted backgrounds
- Danger badge for counts: solid danger, white text, full circle min 18

## Banner

- Use `var(--banner-bg)` + `var(--banner-border)`; keep saturation low in both themes
- Title 16 + body 12.5 secondary — **text is the hero**
- Right side: omit by default; if needed, **one** frosted plate with a stroke icon (not a row of emoji)

## Composer / empty input card

- radius lg, surface, border, pad ~18
- Title + tertiary help
- Large muted input area (min-height ~72)
- Bar: chips left + primary CTA right
- **Beside a list/panel:** composer is a flex column; textarea/`flex:1` grows so the **card bottom matches the peer**; action bar `margin-top: auto`; prefer `resize: none` in equal-height rows

## Chip

- h28, radius 7, border, surface
- Active: primary wash border + primary text

## Dashed add zone

- 1.5px dashed border, radius lg, centered
- Circular + (40) on muted disc
- Hover: primary border/text

## Title bar (desktop demo)

- Traffic lights 12px: `#ff5f57` / `#febc2e` / `#28c840` (same both themes)
- Bar background: `var(--titlebar-bg)`
- Centered 13px secondary title
- Right icon buttons 28, including **theme toggle**
- Page outside window: `var(--window-outer-bg)`

## Icons & emoji policy

### Prefer

- **One** stroke family (Lucide or equivalent), stroke ~1.8–2
- Nav / toolbar: 16px stroke
- Content inline actions: 14–16px stroke
- Status: **pill / text / toggle** — not emoji

### Reduce / avoid in content (right pane)

| Area | Default | Avoid |
|------|---------|--------|
| Sidebar nav | Stroke icons | Emoji labels |
| Card grid | Stroke plate or **no** mark | Emoji on every card |
| Feed / settings list | Stroke plate or **text-only** | 😀 on every row |
| Banner | Text only or 1 stroke accent | 3+ emoji tiles |
| Empty state | 1 faint watermark max | Emoji collage |
| Section headers | Text only | Emoji prefixes (📌🔥✨) |
| Brand logo tile | Simple mark / monogram / 1 glyph | Changing emoji per page |

### Hard limits (agent must follow when generating UI)

1. **No emoji in list rows** unless the user explicitly asks for a playful / kids product.
2. **At most one emoji** in the entire main content of a page (banner *or* empty state *or* brand) — usually **zero**.
3. Category tiles (boards, filters): use **short text + optional stroke icon**, not emoji grids.
4. Do not “spice up” demo copy with emoji in titles (`⚔️ 本周焦点` → plain title).
5. Game / product avatars: prefer **initial monogram plate** or real image URL; emoji only if user requests.

### Why

App Shell UI reads as a **desktop utility**. Dense emoji makes content feel like a chat sticker pack and fights the calm shell.
