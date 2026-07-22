---
version: alpha
name: Lantern-design-system
description: A warm-canvas editorial interface for fencing education and historical martial arts resources. The system anchors on a tinted cream canvas with serif display headlines, warm bronze CTAs, and dark charcoal product surfaces (technique illustrations, historical source cards). Brand voltage comes from the cream/bronze pairing — deliberately warm and humanist where most digital-first pedagogy uses cold blue + slate. Type voice runs a slab-serif display (Tiempos Headline / Cormorant Garamond) for h1/h2 and a humanist sans for body. The signature Lantern mark (a historical fencing torch glyph) anchors the wordmark.

colors:
  primary: "#a0674a"
  primary-active: "#7d5038"
  primary-disabled: "#e6dfd8"
  ink: "#141413"
  body: "#3d3d3a"
  body-strong: "#252523"
  muted: "#6c6a64"
  muted-soft: "#8e8b82"
  hairline: "#e6dfd8"
  hairline-soft: "#ebe6df"
  canvas: "#faf9f5"
  surface-soft: "#f5f0e8"
  surface-card: "#efe9de"
  surface-cream-strong: "#e8e0d2"
  surface-dark: "#181715"
  surface-dark-elevated: "#252320"
  surface-dark-soft: "#1f1e1b"
  on-primary: "#ffffff"
  on-dark: "#faf9f5"
  on-dark-soft: "#a09d96"
  accent-steel: "#6b8e96"
  accent-gold: "#d4a574"
  success: "#5db872"
  warning: "#d4a017"
  error: "#c64545"

typography:
  display-xl:
    fontFamily: "Tiempos Headline, Cormorant Garamond, serif"
    fontSize: 64px
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -1.5px
  display-lg:
    fontFamily: "Tiempos Headline, Cormorant Garamond, serif"
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -1px
  display-md:
    fontFamily: "Tiempos Headline, Cormorant Garamond, serif"
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: -0.5px
  display-sm:
    fontFamily: "Tiempos Headline, Cormorant Garamond, serif"
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.3px
  title-lg:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0
  title-md:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  title-sm:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  caption:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  caption-uppercase:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 1.5px
  code:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  button:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0
  nav-link:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 96px

components:
  button-primary:
    background: "{colors.primary}"
    text: "{colors.on-primary}"
    padding: "12px 20px"
    height: "40px"
    rounded: "{rounded.md}"
    type: "{typography.button}"
    border: "none"
  button-primary-active:
    background: "{colors.primary-active}"
    text: "{colors.on-primary}"
    padding: "12px 20px"
    height: "40px"
    rounded: "{rounded.md}"
    type: "{typography.button}"
    border: "none"
  button-secondary:
    background: "{colors.canvas}"
    text: "{colors.ink}"
    padding: "12px 20px"
    height: "40px"
    rounded: "{rounded.md}"
    type: "{typography.button}"
    border: "1px solid {colors.hairline}"
  button-secondary-on-dark:
    background: "{colors.surface-dark-elevated}"
    text: "{colors.on-dark}"
    padding: "12px 20px"
    height: "40px"
    rounded: "{rounded.md}"
    type: "{typography.button}"
    border: "none"
  button-text-link:
    background: "transparent"
    text: "{colors.primary}"
    padding: "4px 0"
    type: "{typography.button}"
    border: "none"
    textDecoration: "none"
  button-icon-circular:
    background: "{colors.canvas}"
    border: "1px solid {colors.hairline}"
    width: "36px"
    height: "36px"
    rounded: "{rounded.full}"
    icon-color: "{colors.ink}"
  text-link:
    color: "{colors.primary}"
    textDecoration: "underline"
    textDecorationThickness: "1px"
    textUnderlineOffset: "3px"
  hero-band:
    background: "{colors.canvas}"
    padding: "{spacing.section}"
    layout: "6-6 grid at desktop; single column at mobile"
    columns: "left: content (h1 + sub-headline + button row); right: illustration-card"
  hero-illustration-card:
    background: "{colors.canvas} or {colors.surface-dark}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
    content: "technique diagram, historical source image, or practice illustration"
  feature-card:
    background: "{colors.surface-card}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    layout: "small icon at top; {typography.title-md} headline; {typography.body-md} description"
    used-in: "3-up feature grids"
  technique-illustration-card:
    background: "{colors.surface-dark}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    text: "{colors.on-dark}"
    content: "step-by-step technique sequence, historical manuscript image, or position diagram"
  source-reference-card:
    background: "{colors.canvas}"
    border: "1px solid {colors.hairline}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    layout: "{typography.title-sm} source name; {typography.caption} author + date; {typography.body-sm} excerpt or attribution"
  principle-callout-card:
    background: "{colors.primary}"
    text: "{colors.on-primary}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    layout: "{typography.title-md} principle; {typography.body-md} explanation; optional {component.button-secondary-on-dark} for drill link"
  virtue-card:
    background: "{colors.surface-soft}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    layout: "{typography.title-sm} virtue name; {typography.body-sm} description; {component.text-link} to historical context"
  comparison-card:
    background: "{colors.canvas}"
    border: "1px solid {colors.hairline}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    layout: "technique name; capability summary; {component.text-link} to detailed guide"
  practice-tracker-card:
    background: "{colors.canvas}"
    border: "1px solid {colors.hairline}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    layout: "drill name; progress indicator; date logged; optional notes"
  resource-connector-tile:
    background: "{colors.canvas}"
    border: "1px solid {colors.hairline}"
    rounded: "{rounded.lg}"
    padding: "20px"
    layout: "icon/category-badge at top; {typography.title-sm} resource name; short description"
  text-input:
    background: "{colors.canvas}"
    text: "{colors.ink}"
    type: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "10px 14px"
    height: "40px"
    border: "1px solid {colors.hairline}"
  text-input-focused:
    background: "{colors.canvas}"
    text: "{colors.ink}"
    border: "1px solid {colors.primary}"
    outline: "3px solid rgba(160, 103, 74, 0.15)"
    rounded: "{rounded.md}"
  cookie-consent-card:
    background: "{colors.surface-dark}"
    text: "{colors.on-dark}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
    position: "floating, bottom-right"
    used-in: "privacy/cookie notifications"
  badge-pill:
    background: "{colors.surface-card}"
    text: "{colors.ink}"
    type: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
    use-case: "category tags, skill levels, technique families"
  badge-bronze:
    background: "{colors.primary}"
    text: "{colors.on-primary}"
    type: "{typography.caption-uppercase}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
    use-case: "NEW, FEATURED, FOUNDATIONAL techniques"
  category-tab:
    background: "transparent"
    text: "{colors.muted}"
    padding: "8px 14px"
    rounded: "{rounded.md}"
    type: "{typography.nav-link}"
  category-tab-active:
    background: "{colors.surface-card}"
    text: "{colors.ink}"
    padding: "8px 14px"
    rounded: "{rounded.md}"
    type: "{typography.nav-link}"
  cta-band-bronze:
    background: "{colors.primary}"
    text: "{colors.on-primary}"
    rounded: "{rounded.lg}"
    padding: "64px"
    width: "full-bleed"
    layout: "{typography.display-sm} h2; sub-line; {component.button-secondary-on-dark} CTA"
    use-case: "call-to-action before footer (e.g., 'Start Your Practice')"
  cta-band-dark:
    background: "{colors.surface-dark}"
    text: "{colors.on-dark}"
    rounded: "{rounded.lg}"
    padding: "64px"
    width: "full-bleed"
    use-case: "developer/resource pages; pairs with technique-illustration-card"
  footer:
    background: "{colors.surface-dark}"
    text: "{colors.on-dark-soft}"
    padding: "64px vertical"
    layout: "4-column link list (Resources / Traditions / Community / Legal); Lantern mark + wordmark at top in {colors.on-dark}"
    columns-mobile: "1-column"
    never-inverts: true

## Imagery & Photography

Technique diagrams are line-art or clean 3D renderings on cream cards, never photorealistic. Historical source references (manuscripts, historic prints) appear at high fidelity to honor the artifacts.

When photography is used (rare — mostly for practitioner spotlights), avatars crop to perfect circles at 40px diameter.

## Components

### Top Navigation

**`top-nav`** — Cream nav bar pinned to the top of every page. 64px tall, `{colors.canvas}` background. Carries the Lantern torch glyph + "Lantern" wordmark at left, primary horizontal menu (Traditions, Techniques, Practice, Resources, Community, About) center-left, right-side cluster with "Sign in" text-link, "Learn Now" `{component.button-primary}` (bronze). Menu items in `{typography.nav-link}` (Inter 14px / 500).

### Buttons

**`button-primary`** — The signature bronze CTA. Background `{colors.primary}` (#a0674a), text `{colors.on-primary}` (white), type `{typography.button}` (Inter 14px / 500), padding 12px × 20px, height 40px, rounded `{rounded.md}` (8px). Active state `button-primary-active` darkens to `{colors.primary-active}` (#7d5038).

**`button-secondary`** — Cream button with hairline outline. Background `{colors.canvas}`, text `{colors.ink}`, 1px hairline border, same padding + height + radius as primary.

**`button-secondary-on-dark`** — Used over `{colors.surface-dark}` cards. Background `{colors.surface-dark-elevated}` (#252320), text `{colors.on-dark}`. Stays dark — the system never inverts to a light secondary on dark surfaces.

**`button-text-link`** — Inline text button, no background. Used for "Sign in" in the top nav and inline CTA links.

**`button-icon-circular`** — 36px circular icon button. Background `{colors.canvas}`, hairline border, ink-color icon. Used for carousel arrows, share, "view more".

**`text-link`** — Inline body links in `{colors.primary}` (the bronze). Underlined on press; the bronze inline link is one of the system's most distinctive small details.

### Cards & Containers

**`hero-band`** — Cream-canvas hero with a 6-6 grid: h1 + sub-headline + button row on the left, hero illustration card or technique mockup card on the right. Vertical padding `{spacing.section}` (96px).

**`hero-illustration-card`** — A larger card holding the hero's right-side artifact — sometimes a bronze-stroke line diagram on cream background, sometimes a dark technique sequence or historical source. Background `{colors.canvas}` or `{colors.surface-dark}` depending on context, rounded `{rounded.xl}` (16px).

**`feature-card`** — Used in 3-up feature grids. Background `{colors.surface-card}` (#efe9de — slightly darker cream), rounded `{rounded.lg}` (12px), internal padding `{spacing.xl}` (32px). Carries a small icon at top, an `{typography.title-md}` headline, and a body description in `{typography.body-md}`.

**`technique-illustration-card`** — Dark charcoal card showing step-by-step technique sequence or historical manuscript image. Background `{colors.surface-dark}`, rounded `{rounded.lg}`, internal padding `{spacing.xl}` (32px). Carries text labels in `{colors.on-dark}` and diagram/image fragments below.

**`source-reference-card`** — A specialized card for historical sources (texts, manuscripts, masters). Background `{colors.canvas}` with hairline border, rounded `{rounded.lg}`, internal padding `{spacing.xl}` (32px). Carries source name, author/date attribution, and an excerpt or citation in `{typography.body-md}`. The signature visual element for contextualizing techniques in historical tradition.

**`principle-callout-card`** — Full-bleed bronze card carrying a core fencing principle or virtue. Background `{colors.primary}` (#a0674a), text `{colors.on-primary}` (white), rounded `{rounded.lg}`, padding `{spacing.xl}` (32px). The bronze surface IS the emphasis; the callout inside pairs with a dark button or text-link for deeper reading.

**`comparison-card`** — Used in technique comparison grids. Background `{colors.canvas}` with hairline border, rounded `{rounded.lg}`, internal padding `{spacing.xl}` (32px). Carries the technique name, a short capability blurb, and a `{component.text-link}` to learn more.

**`practice-tracker-card`** — Standard practice log entry. Background `{colors.canvas}` with hairline border, rounded `{rounded.lg}`, padding `{spacing.xl}` (32px). Carries the drill name in `{typography.title-md}`, date in `{typography.caption}`, progress indicator, and optional notes in `{typography.body-sm}`.

**`virtue-card`** — The featured virtue (e.g., "Prudence", "Courage"). Background flips to `{colors.surface-dark}`, text inverts to `{colors.on-dark}`. The dark surface IS the featured-virtue signal.

**`resource-connector-tile`** — Used on the resources page's integration grid. Background `{colors.canvas}` with hairline border, rounded `{rounded.lg}`, padding 20px. Each tile carries an icon/category badge at top, a `{typography.title-sm}` resource name, and a short description.

### Inputs & Forms

**`text-input`** — Standard text input. Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-md}`, rounded `{rounded.md}` (8px), padding 10px × 14px, height 40px. 1px hairline border in `{colors.hairline}`.

**`text-input-focused`** — Focus state. Border thickens or shifts to `{colors.primary}` (bronze) for emphasis. Carries a 3px bronze-at-15%-alpha outer ring.

**`cookie-consent-card`** — Bottom-right floating dark cookie banner. Background `{colors.surface-dark}`, text `{colors.on-dark}`, rounded `{rounded.lg}`, padding `{spacing.lg}` (24px). One of the few places dark surface appears at small scale on cream pages.

### Tags / Badges

**`badge-pill`** — Small pill label used for category tags. Background `{colors.surface-card}`, text `{colors.ink}`, type `{typography.caption}` (13px / 500), rounded `{rounded.pill}`, padding 4px × 12px.

**`badge-bronze`** — Bronze-fill badge for "FOUNDATIONAL", "ADVANCED", featured highlights. Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.caption-uppercase}` (12px / 500 / 1.5px tracking), rounded `{rounded.pill}`, padding 4px × 12px.

### Tab / Filter

**`category-tab`** + **`category-tab-active`** — Used in sub-nav rows on tradition / technique pages. Inactive: transparent background, `{colors.muted}` text. Active: `{colors.surface-card}` background, `{colors.ink}` text. Padding 8px × 14px, rounded `{rounded.md}`.

### CTA / Footer

**`cta-band-bronze`** — A pre-footer "Start Your Practice" CTA card. Full-width bronze fill, white type, rounded `{rounded.lg}`, padding 64px. Carries an h2 in `{typography.display-sm}` (still serif!), a sub-line, and a cream-button CTA.

**`cta-band-dark`** — Alternative pre-footer band on resource-focused pages. Background `{colors.surface-dark}`, text `{colors.on-dark}`, rounded `{rounded.lg}`, padding 64px. Often pairs with a technique-illustration card.

**`footer`** — Dark charcoal footer that closes every page. Background `{colors.surface-dark}` (#181715), text `{colors.on-dark-soft}`. 4-column link list at desktop covering Traditions / Resources / Community / Legal. Vertical padding 64px. The Lantern torch mark + "Lantern" wordmark sits at the top in `{colors.on-dark}`. The footer never inverts.

## Do's and Don'ts

### Do
- Anchor every page on the cream canvas. Pure white reads as "generic"; the warm tint signals craftsmanship and historical grounding.
- Use Tiempos Headline serif for every display headline. Pair with Inter sans body. Negative letter-spacing on display sizes is non-negotiable.
- Reserve `{colors.primary}` (bronze) for primary CTAs and full-bleed `{component.cta-band-bronze}` moments. Don't paint accent moments bronze elsewhere.
- Use `{component.technique-illustration-card}` and `{component.source-reference-card}` to show actual diagrams and historical sources. Don't illustrate when you can reference the authentic artifact.
- Pair `{component.feature-card}` (cream) with `{component.technique-illustration-card}` (charcoal) in alternating bands. The cream-to-dark rhythm is the design's pacing mechanism.
- Use the Lantern torch glyph as the brand mark prefix. Never invert the mark to white-on-dark within the wordmark itself.
- Apply `{spacing.section}` (96px) between major bands.

### Don't
- Don't use cool grays or pure white for canvas. Cream is the brand.
- Don't bold serif display weight. Serif at 400 reads as authoritative; 700 reads as bombastic.
- Don't use cool blue or saturated cyan as a brand accent. The bronze is the brand voltage.
- Don't put bronze everywhere. The bronze is scarce on individual elements and generous only on full-bleed bronze callout cards.
- Don't use sans-serif for display headlines. The serif character is the brand voice.
- Don't repeat the same surface mode in two consecutive bands. The pacing alternates: cream → cream-card → dark-illustration → cream → bronze-callout → dark-footer.
- Don't add hover state styling beyond what the system already encodes — primary darkens on press; nothing else changes.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero h1 64→32px; hero-illustration-card stacks below content; feature grids 1-up; resource tiles 2-up; practice logs 1-up; footer 4 cols → 1 |
| Tablet | 768–1024px | Top nav stays horizontal but tightens; feature cards 2-up; resource tiles 3-up; practice logs 2-up |
| Desktop | 1024–1440px | Full top-nav with all menu items; 3-up feature cards; 4-up or 6-up resource tiles; 3-up practice logs |
| Wide | > 1440px | Same as desktop with more outer breathing room; max content width caps at 1200px |

### Touch Targets
- `{component.button-primary}` at minimum 40 × 40px.
- `{component.button-icon-circular}` at exactly 36 × 36 — slightly under WCAG 44 but visually centered.
- `{component.text-input}` height is 40px.
- Resource tile entire card area is tappable; effective tap area >> 44px.

### Collapsing Strategy
- Top nav collapses to hamburger at < 768px; menu opens as a full-screen cream sheet.
- Hero band's 6-6 grid collapses to single-column on mobile — h1 + sub-head + buttons first, then the illustration / mockup card below.
- Feature grids reduce columns rather than scaling cards down.
- Practice logs collapse 3 → 2 → 1; featured-virtue dark surface stays visually distinct at every breakpoint.
- Technique illustration cards retain diagram legibility at every breakpoint by allowing horizontal scroll within the card rather than wrapping content.

### Image Behavior
- Technique diagrams inside dark cards stay at fixed legibility; horizontal scroll on mobile rather than wrapping.
- Hero illustrations scale proportionally; line-art strokes thin slightly on mobile.
- Avatar photos in practitioner spotlights crop to circles at every breakpoint.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key (`{component.feature-card}`, `{component.technique-illustration-card}`).
2. Variants of an existing component (`-active`, `-dark`, `-featured`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline hex.
4. Never document hover. Default and Active/Pressed states only.
5. Display headlines stay serif 400 with negative tracking. Body stays sans 400. The split is unbreakable.
6. Cream + bronze + dark charcoal is the trinity. Don't introduce a fourth surface tone (no purple cards, no teal sections).
7. When in doubt about emphasis: bigger serif before bolder weight.

## Known Gaps

- Tiempos Headline is a licensed typeface and not universally available as a web font. Fallbacks (Cormorant Garamond / EB Garamond) are documented in the typography section.
- The Lantern torch mark is a brand glyph rendered as inline SVG; it's not formalized as a system token here. Treat it as a logo asset.
- Animation and transition timings (technique sequence reveals, historical timeline animations) are not in scope.
- Form validation states beyond `{component.text-input-focused}` are not extracted — error / success states would need a sign-up or practice-log flow to confirm.
- Practitioner spotlights share some tokens with the main interface but add profile-specific components (bio, achievement badges, student roster) that are out of scope for this marketing-surface document.
- Interactive technique drills and motion capture animations on certain pages display real-time practitioner movement — the static reference doesn't fully capture the animation chrome.
