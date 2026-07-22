# Lantern Design System

Lantern is a warm-canvas editorial design system for a fencing education / historical European martial arts (HEMA) product — technique libraries, historical source references, practice tracking, and community resources. The system is built from a single brand specification document (no attached codebase, Figma file, or logo asset).

**Source:** `uploads/DESIGN-lantern.md` (brand YAML + prose spec, alpha version). No GitHub repo, Figma file, or slide deck was provided — everything here is derived directly from that spec. There is currently one product surface: a marketing/education website (`ui_kits/website/`).

## Index

- `styles.css` — root stylesheet, imports everything below. Link this one file.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css` (custom properties), `fonts.css` (webfont imports)
- `components/core/` — Button, TextLink, IconButtonCircular, Badge, TextInput
- `components/navigation/` — TopNav, CategoryTabs, Footer
- `components/cards/` — FeatureCard, TechniqueIllustrationCard, SourceReferenceCard, PrincipleCalloutCard, VirtueCard, ComparisonCard, PracticeTrackerCard, ResourceConnectorTile, CookieConsentCard
- `components/marketing/` — HeroBand, CtaBand
- `guidelines/` — foundation specimen cards (color, type, spacing, brand)
- `ui_kits/website/` — interactive click-through recreation of the Lantern marketing site (Home, Traditions, Practice, Resources)
- `assets/` — `lantern-mark.svg` (the real brand glyph)
- `SKILL.md` — portable skill file for use in other agent environments

## Content Fundamentals

**Source:** `uploads/VOICE-lantern.md` — the full voice guide governs every word in a Lantern surface. Full nuance lives there; the essentials:

- **Hard rules:** no em dashes (use commas, colons, periods, or "but"/"because"); no AI-giveaway phrases ("unleash," "game-changing," "dive into," "X doesn't just do Y, it does Z"); no corporate jargon; no unearned superlatives ("best," "first," "revolutionary") especially on historical claims; write for the ear, read it aloud.
- **The core posture:** every line comes from one person — a long-time practitioner and teacher, quietly authoritative, never performing. Don't try to impress; that's the most common failure.
- **Two registers, one person:** long-form (articles, technique write-ups) is the fullest expression — first person, metaphor, room to think out loud. Interface register (buttons, labels, empty states) is the same voice compressed, not replaced — never generic product language.
- **Sentence rhythm:** medium-to-long building sentences (one main pivot) are the default; short punchy sentences are rare and land only after 2-4 longer ones. Avoid stacked short sentences and "and...and...and" run-ons.
- **Distinctive moves:** the immediate softener (walk back a blunt statement to stay relational), telegraphing the move, italics for precision (not decoration), the section-closing plain declarative, including yourself in a correction, ladders and question clusters used sparingly.
- **Imagery:** woodland/growth/tending and compass/path/journey metaphors as seasoning, not the meal — overuse reads as cliché.
- **Buttons:** verb-first and specific — "Start the drill," "Read the source," "Log this session." Avoid "Learn More" and "Get Started."
- **Empty states:** an opportunity for voice, not a dead end ("Nothing logged yet. The first entry is the hardest one.").
- **Casing:** sentence case everywhere except uppercase-tracked caption badges (`FOUNDATIONAL`, `ADVANCED`, `NEW`).
- **Emoji:** never used.
- **Attribution:** credit sources and people generously with titles; never fabricate a historical detail, date, or attribution — flag as placeholder instead.

## Visual Foundations

- **Color:** a deliberate three-surface trinity — warm cream canvas (`--canvas #faf9f5`), bronze (`--primary #a0674a`), and dark charcoal (`--surface-dark #181715`). Pure white and cool gray are explicitly rejected; bronze is reserved for CTAs and full-bleed callout bands only, never used decoratively elsewhere.
- **Type:** slab-serif display in **Cormorant Garamond** (the confirmed display serif — no longer a Tiempos Headline substitution) at weight 400 only, always with negative letter-spacing, paired with Inter sans for everything functional (titles, body, buttons, nav). The serif/sans split is treated as unbreakable — never bold the serif, never use sans for a display headline.
- **Spacing:** an 8-based scale (4/8/12/16/24/32/48px) plus a `--space-section` value of 96px reserved specifically for the vertical gap between major page bands.
- **Backgrounds:** flat color fields only — no gradients, no photographic full-bleed backgrounds, no repeating patterns or textures. The only "texture" is the cream tint itself.
- **Imagery:** technique diagrams are line-art or clean renders on cream cards, never photorealistic; historical manuscript/print sources are reproduced at high fidelity to honor the artifact. Photography is rare (practitioner spotlights only) and crops to perfect 40px circles.
- **Animation:** none specified in the source spec — treat as a gap (see Known Gaps below). Default to no motion beyond simple, fast (\~150ms) color transitions on interactive elements until real timing guidance is available.
- **Hover/press states:** intentionally minimal. The spec explicitly documents only two interaction states — default and active/pressed — and instructs never to add hover styling beyond what's encoded. `button-primary` darkens to `--primary-active` on press; nothing else in the system changes color on hover.
- **Borders:** a single 1px hairline (`--hairline #e6dfd8`) used on cream cards, inputs, and outlined buttons — never a heavier or colored border.
- **Shadows:** none. The system has no elevation/shadow tokens; separation between elements comes from flat color contrast (cream card vs. canvas, dark card vs. cream section) rather than drop shadows.
- **Transparency/blur:** essentially unused, with one exception — the 3px bronze-at-15%-alpha focus ring on `text-input-focused`. No frosted-glass or blur effects anywhere.
- **Corner radii:** a fixed scale from 4px (xs) up to 16px (xl) plus a pill/full value; buttons and inputs use 8px (`--radius-md`), most cards use 12px (`--radius-lg`), the hero illustration card uses 16px (`--radius-xl`).
- **Cards:** no shadow, no gradient. Either a flat surface fill with a 1px hairline border (cream cards: source-reference, comparison, practice-tracker, resource-tile) or a solid-color fill with no border at all (dark cards, bronze callout cards, feature cards on `--surface-card`).
- **Layout rhythm:** the defining pacing mechanism is deliberate surface alternation — cream → cream-card → dark-illustration → cream → bronze-callout → dark-footer. The system explicitly forbids repeating the same surface mode two bands in a row.
- **Fixed elements:** the top nav is the only pinned/sticky element (64px, cream). Nothing else is fixed.

## Iconography

The source spec does not define or reference an icon system, icon font, sprite sheet, or SVG set — this is a gap in the brand document. **Adopted:** [Lucide](https://lucide.dev) (CDN: `unpkg.com/lucide@latest`, MIT-licensed, free to use without attribution) as the system's icon set — its precise, unornamented stroke style matches the brand's understated character. Components with an icon slot (`IconButtonCircular`, `FeatureCard`, `ResourceConnectorTile`, category badges) accept an `icon` prop as a `ReactNode`; pass a Lucide icon element. Emoji are never used as icons — see Content Fundamentals.

## Brand Mark

`assets/lantern-mark.svg` is the real Lantern brand glyph (provided). It's used inline (paths embedded directly, so it can pick up `currentColor`/token fills) in `components/navigation/TopNav.jsx` and `Footer.jsx`, and referenced as a file in `guidelines/brand-mark.card.html`. The mark never inverts to white-on-dark within the wordmark itself, per the spec.

## Known Substitutions & Gaps

- Icon set: Lucide (see Iconography above) — confirm against real product icons if/when available.
- Animation/transition timing, form validation states beyond focus, and practitioner-spotlight-specific components (bio, achievement badges, student roster) are explicitly out of scope per the source spec's own "Known Gaps" section.

## Intentional Additions

- **CategoryTabs** — the spec defines `category-tab` / `category-tab-active` as tokens but not as a composed component; built as a small tab-group wrapper since it's used as a set, not a singleton.
- **Icon prop plumbing** (see Iconography) — added because several cards/buttons need an icon slot even though no icon system was specified.
