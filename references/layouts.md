# App Shell UI — Layout Templates

Pick one template before building.

## 1. 设置型 (Settings)

```
Sidebar nav (sections) | Page title + subtitle
                       | Group title
                       | Panel of list rows (toggle/check)
                       | Optional segmented "config view" under groups
```

Use for: preferences, account, AI backends, privacy, about.

## 2. 控制台型 (Console)

```
Sidebar | Header actions (export / create)
        | Search + segmented filters
        | Optional promo banner
        | Stat row (2–4 cards)
        | Card grid (3-col desktop → 2/1 responsive)
        | Optional two-col: composer | status list
```

Use for: subscriptions, inventory, device grid, fruit market demo.

## 3. 工作台型 (Workbench / Chat)

```
Sidebar sessions/workspaces | Large empty canvas
                            | Centered title ("新会话")
                            | Wide composer card
                            | Secondary chips / mode pills under composer
```

Use for: AI chat home, new task, prompt entry.

## 4. IM / 三栏型

```
Icon rail (52) | List column (~280) | Detail / empty watermark
```

Use for: messaging, mail list+reader, notes tree+editor+outline.

## Page recipes (content order)

### Console home

1. Banner  
2. Stats  
3. Primary grid  
4. Two-column support panels  

### Settings page

1. Header only (no heavy toolbar)  
2. Section → panel list  
3. Repeat sections  
4. Optional bottom segmented config switcher  

### Cart / detail

1. Header with primary checkout  
2. Panel line items (toggles optional)  
3. Two-col: notes composer | fee summary panel  

### Stock / health

1. Header with sync + primary bulk action  
2. Single tall panel of status rows (pill right)

## Responsive notes

| Breakpoint | Behavior |
|------------|----------|
| < 960px | Stats 2-col; cards 2-col; two-col stack; sidebar may shrink to 200 or become drawer |
| Mobile | Prefer drawer nav; keep tokens; do not invent a second visual system |

## Shell CSS sketch

```css
.shell { display: flex; min-height: 0; flex: 1; }
.sidebar {
  width: var(--sidebar-width);
  background: var(--bg-sidebar);
  border-right: 1px solid var(--border);
}
.main { flex: 1; display: flex; flex-direction: column; min-width: 0; }
.content {
  flex: 1;
  overflow: auto;
  padding: 4px var(--content-padding) 28px;
  background: var(--bg-app);
}
.fruit-grid /* or .card-grid */ {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
```

## Equal-height side-by-side columns (required)

When two (or more) content blocks sit **in one row** — e.g. 版主动态 + 快速提问, list panel + composer, notes + fee summary — **outer card bottoms must align**. A short list next to a tall form looks unfinished.

### Rules

1. Use CSS Grid (or flex) with **`align-items: stretch`** (default for grid — do **not** set `align-items: start` on the row).
2. Each column root is a **flex column** with `height: 100%` / `min-height: 0`.
3. The **primary surface** inside each column (`.panel` / `.composer` / `.card`) uses `flex: 1` so it grows to match the taller sibling.
4. If one side is a form: the **textarea / main field grows** (`flex: 1`), not only empty padding under a short control.
5. Prefer a shared **`min-height`** on the row (e.g. 260–320px) when both sides can be sparse.
6. Stack to one column under ~960px; equal-height applies only while side-by-side.
7. Do **not** fake alignment with arbitrary fixed heights that clip content; grow the shorter surface instead.

### Structure

```html
<div class="two-col">
  <section class="two-col__col">
    <div class="section-head">…</div>
    <div class="panel two-col__surface">…</div>
  </section>
  <section class="two-col__col">
    <div class="section-head">…</div>
    <div class="composer two-col__surface">…</div>
  </section>
</div>
```

Both direct children of `.two-col` must participate in stretch (same wrapper pattern).

### CSS recipe (copy)

```css
.two-col {
  display: grid;
  grid-template-columns: 1.2fr 1fr; /* or 1fr 1fr */
  gap: 14px;
  align-items: stretch; /* never start */
  min-height: 280px;    /* optional shared floor */
}

.two-col__col {
  display: flex;
  flex-direction: column;
  min-height: 0;
  height: 100%;
  margin: 0;
}

.two-col__col .section-head {
  flex-shrink: 0;
}

.two-col__surface {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

/* Composer: grow the input, pin actions to bottom */
.two-col__surface.composer .field,
.two-col__surface.composer .composer-input-wrap {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.two-col__surface.composer textarea,
.two-col__surface.composer .composer-input {
  flex: 1 1 auto;
  min-height: 120px;
  resize: none; /* avoid uneven drag handles in equal-height rows */
}

.two-col__surface.composer .composer-bar {
  flex-shrink: 0;
  margin-top: auto;
}

/* List panel: body can scroll if sibling is very tall */
.two-col__surface.panel {
  overflow: auto;
}

@media (max-width: 960px) {
  .two-col {
    grid-template-columns: 1fr;
    min-height: 0;
  }
}
```

### Anti-patterns

| Avoid | Why |
|-------|-----|
| `align-items: start` on `.two-col` | Leaves one short card floating |
| Only matching title baselines, not card bottoms | Still looks ragged |
| Fixed `height: 300px` that clips list/composer | Breaks content |
| Different outer radius/padding between the two cards | Breaks the “pair” even if heights match |
| One column missing the flex surface wrapper | Stretch stops at the section, card stays short |

### Checklist for any two-col block

- [ ] Row uses stretch, not start
- [ ] Both columns are flex columns at 100% height
- [ ] Both main cards use `flex: 1`
- [ ] Shorter side’s empty space is **inside** the card (or expanded field), not gap under the card
- [ ] Card bottoms visually align
- [ ] Narrow breakpoint stacks cleanly

## Swap test

After building, mentally replace all business strings (e.g. fruit → devices).  
If the page still looks like the same product family, the shell is correct.
