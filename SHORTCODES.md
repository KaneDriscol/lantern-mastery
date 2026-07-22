# Post shortcodes

Shortcodes are little reusable blocks you drop into a post to get a styled element
without writing HTML. They all follow the Lantern design system automatically.

Use them **inside a post's Markdown** (`src/posts/*.md`), below the front matter.
Two shapes exist:

- **Paired** — wrap content between an opening and closing tag:
  `{% name %}…{% endname %}`
- **Single** — one self-contained tag: `{% name "arg" %}`

> **One rule:** inside a *paired* shortcode, keep your lines flush to the left margin
> (don't indent them), or Markdown will treat the text as a code block.

---

## `keyidea` — the one thing to remember

A highlighted takeaway box. Content is Markdown.

```njk
{% keyidea %}
Do not decide in the bind. **Listen** in the bind, and let the blade decide for you.
{% endkeyidea %}
```

## `aside` — a quieter side note

For a caveat, tangent, or gentle warning.

```njk
{% aside %}
This assumes a cooperative partner. Against someone actively fighting the bind,
the timing is different — a note for another day.
{% endaside %}
```

## `drawer` — a collapsible section

Hides extra detail behind a title the reader can click open. Good for caveats,
tangents, and long asides you don't want interrupting the main line of thought.
The title is the argument in quotes; the content inside is Markdown.

```njk
{% drawer "The caveats we didn't get to" %}
There is far more under each of these. A few I want to remember:

- Against a shield line, the angles change completely.
- Numbers can flip in a heartbeat, so "turn it back into a melee" cuts both ways.
{% enddrawer %}
```

It starts closed. Leave off the title to default to "More".

## `drill` — a titled, step-by-step card

The title is the argument in quotes; the steps go inside as a Markdown list.

```njk
{% drill "Reading the bind" %}
1. Come to the bind and stop. Both of you hold light contact.
2. One of you changes something — a small push, a small give.
3. The other answers **only what happened**. No pre-planned action.
{% enddrill %}
```

## `source` — a quote from a historical master

The quoted passage goes inside; the attribution is the argument in quotes.

```njk
{% source "Ridolfo Capòferro, Gran Simulacro (1610)" %}
The tempo is nothing other than a measure of the motion.
{% endsource %}
```

## `figure` — an image with a caption

Put the image file in `src/assets/` first, then reference it as `/assets/<file>`.
Arguments: **src, caption, alt** (alt is optional but good for accessibility).

```njk
{% figure "/assets/seconda.jpg", "The guard of seconda", "Kane in the guard of seconda" %}
```

## `youtube` — a responsive video embed

First argument is the video **id** — the part after `v=` in a YouTube URL
(`https://www.youtube.com/watch?v=`**`dQw4w9WgXcQ`**). Second is an optional caption.

```njk
{% youtube "dQw4w9WgXcQ", "A slow-motion lunge, side view" %}
```

---

## Resource templates — for the foot of a lesson post

Five heavier cards, meant to be pasted at the end of a post so a reader has
something to keep. Every one of them takes a trailing `print` flag — pass
`true` as the last argument and two buttons appear on the card:

- **Print this** — prints just that card, nothing else on the page.
- **Save as PNG** — downloads that card as an image sized for a phone (a
  fixed, narrow width, not however wide the article happens to be) — good
  for keeping a quick-reference copy in your camera roll. The first click
  loads a small third-party script
  ([html2canvas](https://html2canvas.hertzen.com/), from a CDN) to do the
  rendering; it isn't loaded on the page otherwise.

### `drillcard` — a titled drill

Level badge, context line, description, and any markdown you like below —
bold lead-ins (`**The setup.**`) work well as section labels. End with a
`>` blockquote for the italic closing line.

```njk
{% drillcard "The Zwerchau, from the roof", "Foundational", "Longsword · solo or partner", true %}
A first pass at the horizontal cut that answers a blow from above.

**The setup.** Stand in vom Tag with the sword resting at your right shoulder.

**Reps and tempo.** Ten cuts per side, slow enough that you can feel the edge turn.

**Watch for.** Dropping the point too early, leading with the shoulders.

> Cut and cover in the same motion. If you can tell where one ends, slow down.
{% enddrillcard %}
```

Arguments: **title, level ("Foundational"), context, print** (all optional except title).

### `breakdown` — a numbered technique breakdown

Dark card. Content should be a markdown ordered list — each item is drawn as
a numbered circle.

```njk
{% breakdown "Winding at the bind", "Four counts", true %}
1. **Meet the bind.** Catch the incoming blade and stay soft.
2. **Read the pressure.** If they push hard, you go around.
3. **Wind the short edge up.** Your hands lift; your feet stay honest.
4. **Finish or wind again.** Never force the door that is already shut.
{% endbreakdown %}
```

Arguments: **title, context, print** (optional).

### `sourcecard` — a manuscript or treatise reference

Content holds the passage: a `>` blockquote for the original, then a
paragraph for your working translation.

```njk
{% sourcecard "Fior di Battaglia", "Fiore dei Liberi · c. 1410 · trans. Leoni", "What this passage asks of the body, and how it shows up in the drill.", "https://example.com/source", "Where to read the full source", true %}
> Original passage, in the source language.

Your working translation, in your own words.
{% endsourcecard %}
```

Arguments: **title, meta, teaches, link, linkLabel, print** (all optional except title).

### `practicelog` — a printable practice log

Content is a markdown bullet list of this session's focus points, drawn as
checkboxes. Also renders blank Date/Reps/Felt-like fields and a set of blank
note lines to fill in by hand — good candidate for `print = true`.

Anything you write *before* the bullet list — a plain paragraph — is treated
as an intro description and shown under the title, above "This session's
focus". It's optional; leave it off and the card starts straight at the
checklist.

```njk
{% practicelog "Practice log", 4, true %}
Print this, fold it into your kit bag, and fill it in after each session.

- Hands arrive before the body leans
- Cut and cover in one motion
- Read the pressure before deciding
{% endpracticelog %}
```

Arguments: **title, lines (how many blank note lines, default 4), print**.

### `principle` — a callout for the one idea underneath it all

First argument is the short, punchy statement; content is the explanation.

```njk
{% principle "The bind is a conversation, not a contest.", true %}
Most beginners try to win the moment two blades touch. The older idea is
quieter: stay soft, listen for a heartbeat, and let their strength choose
your answer for you.
{% endprinciple %}
```

Arguments: **statement, print** (both optional).

---

## Adding your own

Shortcodes are defined in `eleventy.config.mjs` (see the "Shortcodes" block).
Each one is a small function that returns HTML; the matching styles live under
`/* Post shortcodes */` in `src/css/site.css`. Ask and I can add more
(a "guard" glossary term, a two-image comparison, a tempo diagram, etc.).
