# Website Mode - Frontend Design Guide

Read this file only for Website Mode. It governs public-facing web surfaces. App Mode keeps
using `tokens.md`, `layouts.md`, and `components.md` for its desktop utility shell.

## Contents

- [1. Read the brief before styling](#1-read-the-brief-before-styling)
- [2. Choose the surface and page shape](#2-choose-the-surface-and-page-shape)
- [3. Commit to a visual direction](#3-commit-to-a-visual-direction)
- [4. Compose content and media honestly](#4-compose-content-and-media-honestly)
- [5. Build the journey, not a card stack](#5-build-the-journey-not-a-card-stack)
- [6. Responsive layout mechanics](#6-responsive-layout-mechanics)
- [7. Interaction, accessibility, and performance](#7-interaction-accessibility-and-performance)
- [8. Rendered review gates](#8-rendered-review-gates)

## 1. Read the brief before styling

Start with a one-line design read:

> Reading this as: `<surface>` for `<audience>`, whose primary job is `<job>`, with a
> `<specific tone>` direction.

Use the brief, current route, assets, product vocabulary, audience, and risk constraints as
evidence. A public-sector service, regulated product, commerce checkout, fashion launch, and
developer-tool marketing page should not receive the same visual treatment.

Ask one short question only when the answer would change the surface, information architecture,
or visual world. Otherwise state the inference and proceed. Treat a supplied brand, design
system, screenshot, or content model as an incumbent constraint, not optional inspiration.

## 2. Choose the surface and page shape

Choose one surface mode and one macrostructure before composing components.

| Surface mode | Visitor success | Suitable macrostructures |
|--------------|-----------------|--------------------------|
| **Persuade** | Understand value and make a decision | Product reveal, evidence-led story, demo/workbench, launch/campaign |
| **Read** | Find, understand, and retain information | Reading guide, long-form editorial, docs/reference, changelog |
| **Experience** | Encounter work, place, or personality | Work index, gallery, portfolio case study, event/programme |
| **Catalog** | Browse, compare, and choose an item | Collection, category index, product detail, comparison guide |

Pick a page shape that earns its structure:

| Macrostructure | Best fit | Core rhythm |
|----------------|----------|-------------|
| **Product reveal** | SaaS, tools, launches | Claim -> real product evidence -> capability -> decision support |
| **Evidence-led story** | Trust-heavy, technical, service work | Problem/context -> proof -> method -> next action |
| **Editorial narrative** | Publications, ideas, cultural brands | Title/deck -> reading flow -> image/quote interruptions -> related paths |
| **Work index** | Studios, creators, multi-project portfolios | Work first -> filters/index -> selected detail -> contact |
| **Catalogue** | Commerce, libraries, collections | Context -> browse/filter -> item cards -> comparison or detail path |
| **Reading guide** | Docs, help, knowledge bases | Orientation -> navigation -> scannable content -> recovery/next step |
| **Campaign poster** | Events, causes, limited launches | Single proposition -> programme/proof -> participation -> closing action |

Do not use a generic centered hero, three identical feature cards, and a repeated CTA as the
fallback for every mode. A page can include those elements when the information calls for them,
but its structure must remain recognizably tied to the content.

For a website, document scroll is usually intentional. Do not borrow App Mode's fixed canvas or
one-screen content budget. Instead, make the first viewport complete: the brand/product signal,
proposition, primary action, and visual focal point fit at 1280x800, with a visible hint that the
page continues below.

## 3. Commit to a visual direction

Before code, lock these decisions in a short implementation note:

1. **Tone and audience** - for example, sober technical, warm editorial, bright playful, or
   restrained premium. Do not use "clean and modern" as a substitute for a point of view.
2. **Type roles** - display, body, optional metadata/code. Use at most two families plus an
   optional mono face. Keep headings roman unless the brand explicitly calls for italics.
3. **Color and material** - define page, surface, ink, muted ink, border, accent, accent ink,
   focus, and state tokens. Use one primary accent unless the brand gives a reason for more.
4. **Layout grammar** - choose alignment, column logic, section spacing, divider language,
   radius scale, and how images enter the grid. Use the same grammar throughout the page.
5. **Media treatment** - product UI, photography, illustration, editorial image, diagram, or
   typography-led composition. Select this before inventing decorative CSS.
6. **One differentiator** - a purposeful typographic gesture, evidence treatment, interaction,
   composition, or material detail that makes this page recognizable without harming utility.

Use three dials to keep choices coherent rather than accidental:

| Dial | 1-3 | 4-7 | 8-10 |
|------|-----|-----|------|
| **Variance** | Symmetric, quiet, trust-first | Balanced, familiar | Asymmetric, expressive, experimental |
| **Motion** | Mostly static | Purposeful transitions | Narrative/immersive motion with a reduced-motion alternative |
| **Density** | Airy, image-led | Balanced product content | Reference/data-heavy, still scannable |

The brief determines the dial values. High variance is not permission to reduce contrast,
semantic structure, or touch usability. Low variance is not permission to emit a generic page.

Lock values as semantic CSS variables. Components should consume the variables rather than add
one-off hex values, shadows, or font declarations halfway through implementation. If Website Mode
supports light and dark themes, define both token sets at the page root and test both; otherwise
ship one intentional theme rather than a half-finished switch.

## 4. Compose content and media honestly

### Copy and evidence

- Make each heading, label, metric, testimonial, logo, and case study traceable to supplied
  content or clearly label it as sample/placeholder. Do not invent precise conversion claims,
  customer counts, uptime figures, endorsements, names, or technical telemetry to fill space.
- Use standard action language for standard controls. Prefer concrete verbs and user outcomes
  over marketing filler, faux technical labels, or decorative microcopy.
- Keep a single copy register per page. Do not mix faux terminal jargon, poetic manifesto prose,
  and generic SaaS language unless the brand deliberately owns all three.
- Give each section one job. A default section is a focused heading, a concise supporting line,
  and one proof/visual/action. Move long detail to a suitable component or route.
- Avoid an eyebrow over every section. A label is useful only when it gives orientation that the
  heading and page position do not already provide.
- Use a single primary CTA intent. Reuse the same clear label when the same action repeats; do
  not stack synonyms such as "Contact us", "Start a project", and "Let's talk" on one page.

### Visual assets

For visual-led public pages, use assets in this order:

1. Existing brand/product assets and real screenshots.
2. A generated bitmap visual tailored to the section, if image generation is available and the
   user has not supplied an asset.
3. Licensed or user-approved photography/illustration.
4. A clearly labeled media placeholder that names the required subject and aspect ratio.

Do not replace missing media with hand-built browser bars, fake phone frames, generic dashboard
rectangles, unrelated stock-like imagery, or CSS ornaments that pretend to be product evidence.
Use a real rendered component preview only when it is genuinely the product and behaves like it.
Always provide descriptive `alt` text for meaningful images; mark purely decorative images as
decorative so assistive technology does not announce noise.

## 5. Build the journey, not a card stack

Use semantic HTML first: one `h1`, ordered headings, `header`, `nav`, `main`, `section`,
`article`, `aside`, and `footer` where they convey structure. Navigation uses links; commands use
buttons; a `div` with an `onClick` handler is not a navigation substitute.

### Persuade

Place the brand/product signal in the first viewport. Use a concise proposition, one primary
action, optional secondary path, and real visual evidence. Put logos, detailed comparison,
testimonials, pricing, FAQs, or technical proof in sections that follow when they are factual and
useful. Vary section compositions by their job; do not create a parade of equal cards or repeated
left-text/right-image zigzags.

### Read

Optimize for orientation and comprehension. Keep a readable text measure, an obvious table of
contents when the document is long, meaningful anchors, scannable section boundaries, code or
figure captions where useful, and links to the next relevant task. Typography and whitespace are
the primary visual system; decoration is secondary.

### Experience

Show the work, place, performer, or artifact immediately. A portfolio's first viewport should
lead with actual projects rather than a generic hero panel. Use filters, index navigation,
captions, or case-study progression only when they help visitors choose what to inspect.

### Catalog

Make browse, compare, and detail paths predictable. Use real image ratios, stable card geometry,
clear filters, price/availability only when known, and an explicit route to item detail. Do not
hide a product's critical choice behind decorative interaction or make a grid so dense that item
comparison becomes unreliable.

## 6. Responsive layout mechanics

Start narrow and validate at 320px, 375px, 414px, 768px, 1280px, and at least one wide desktop width.
Use a container with sensible max width, fluid gutters, and stable grid tracks. Build each
multi-column section with its mobile fallback in the same component.

- Prefer Grid for intentional multi-column composition. For tracks containing images, use
  `minmax(0, 1fr)` rather than bare `1fr`; set `min-width: 0` on flex/grid children that may
  truncate or wrap.
- Use `overflow-wrap: anywhere` for long headings/identifiers and reserve adequate line height
  for every expected wrap. Do not clip text, controls, or captions to preserve a visual mockup.
- Keep buttons, primary nav links, tabs, breadcrumbs, and CTA labels to one line. Shorten copy,
  reflow the layout, or collapse navigation into an accessible menu instead of allowing wrapped
  clickable text.
- Do not use `h-screen` for normal mobile heroes. Use content-led height or `min-height: 100dvh`
  only for a deliberately full-height scene.
- Use responsive images with explicit width/height or `aspect-ratio` so media reserve space and
  do not cause layout shift. Preload genuinely above-fold media; lazy-load media below the fold.
- Test user-generated extremes: empty content, very long headline, long button text, missing
  image, error copy, and localized dates/numbers. Use `Intl` formatting for real locale data.

## 7. Interaction, accessibility, and performance

### Interaction states

For each interactive component, implement the states relevant to its role: default, hover,
`:focus-visible`, active, disabled, loading, error, and success. Do not create a static happy-path
mockup.

- Keep focus visible; never remove an outline without replacing it with an equally visible focus
  indicator.
- Use labels above form fields, helper/error text below, meaningful `name`, `autocomplete`,
  `type`, and `inputmode` values. Never use a placeholder as the only label or block paste.
- Keep loading button labels recognizable, announce transient state with appropriate live-region
  patterns, and put field errors close to the field. Destructive actions confirm or provide Undo.
- Use targets of at least 24px for pointer interfaces and approximately 44px for touch. Do not
  rely on hover for an action required on touch devices.

### Motion

Motion needs a purpose: feedback, spatial continuity, state explanation, or a rare narrative
moment. High-frequency actions should feel instant. Use targeted transitions for `transform`,
`opacity`, and color; never `transition: all` or routine animation of layout properties.

- Favor an ease-out entrance, a shorter exit, and a transform origin that matches the trigger.
- Keep frequent interface motion under roughly 300ms. Use springs only for interruptible gesture
  behavior or a deliberately playful moment, not ordinary form/navigation work.
- Provide a `prefers-reduced-motion` path that preserves the state change without unnecessary
  movement. Do not hide essential information behind autoplay or scroll-jacking.

### Accessibility and performance floor

- Meet readable contrast: at least WCAG AA 4.5:1 for normal text and 3:1 for large text,
  controls, icons, and focus indicators. Check text against its actual section/card background.
- Use descriptive page titles, a skip link for dense navigation, logical heading order, native
  controls before ARIA, and accessible names for icon-only buttons.
- Avoid cumulative layout shift, oversized initial images, unnecessary client rendering, layout
  reads/writes in loops, and broad `will-change` usage. Virtualize genuinely large collections.
- Respect browser zoom, safe areas, keyboard navigation, Back/Forward behavior, and URL state for
  navigation that users may need to share or revisit.

## 8. Rendered review gates

Inspect actual rendered output before delivery. Use screenshots or a browser at desktop and
mobile sizes; do not rely on source code inspection alone.

### Structure and taste

- Does the page's macrostructure match the visitor's job, rather than a generic SaaS template?
- Is the visual direction obvious in type, space, media, and color without unexplained ornament?
- Does each repeated layout serve a distinct job, or did the page become a card stack/zigzag?
- Are cards used only for bounded repeated items, controls, or genuine framed tools?

### Truth and content

- Are every claim, logo, testimonial, metric, and screenshot factual or clearly marked?
- Is every visible string useful, grammatical, and consistent with the page's voice?
- Is the primary CTA unambiguous, consistent, and visible without scrolling the hero?

### Mobile and interaction

- At 320px, 375px, 414px, and 768px, is there no horizontal scroll, overlap, clipped content, or
  two-line clickable label?
- Does navigation collapse accessibly, and do keyboard, focus, touch, loading, empty, and error
  states remain usable?
- Does reduced motion preserve intent, and does each animation use a justified property/duration?

### Technical quality

- Do semantic tokens drive colors and fonts, including dark mode when it exists?
- Do images reserve geometry, meaningful media load efficiently, and layout stay stable?
- Does contrast pass on every surface, including muted text, buttons, forms, and focus rings?

Fix blocking usability, accessibility, truthfulness, or responsive defects before visual polish.
