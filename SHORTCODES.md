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

## Adding your own

Shortcodes are defined in `eleventy.config.mjs` (see the "Shortcodes" block).
Each one is a small function that returns HTML; the matching styles live under
`/* Post shortcodes */` in `src/css/site.css`. Ask and I can add more
(a "guard" glossary term, a two-image comparison, a tempo diagram, etc.).
