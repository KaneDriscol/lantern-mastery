# Lantern Mastery

Kane's fencing (HEMA) working notebook — a static site you write in **Markdown** and
build with [Eleventy](https://www.11ty.dev/). Everything follows the **Lantern** design
system (warm cream canvas, bronze CTAs, Cormorant serif headlines).

You write a `.md` file, run one command, and get a fully styled page.

---

## The one thing to remember

```bash
npm run serve
```

That builds the site and opens a live preview at **http://localhost:8080** that
refreshes every time you save. Leave it running while you write. Press `Ctrl+C` to stop.

To build once without the preview server (this is what "publishing" produces):

```bash
npm run build      # writes the finished site into _site/
```

---

## How to write a new post

1. **Scaffold it** (creates the file with today's date and a template):

   ```bash
   npm run new "Measure is a conversation, not a number"
   ```

   That makes `src/posts/measure-is-a-conversation-not-a-number.md`.
   (You can also just copy an existing post in `src/posts/` by hand — either works.)

2. **Write it.** Open the new file. The top part between the `---` lines is the
   "front matter" — the post's settings. Fill it in:

   ```yaml
   ---
   title: Measure is a conversation, not a number
   tag: Dueling           # the category — one of: Dueling, Melee, Theory
   date: 2026-07-21       # controls ordering; newest shows first
   readingTime: 6 min     # optional
   excerpt: One or two sentences shown on the homepage and notebook list.
   ---
   ```

   Everything below the second `---` is the post body, in plain Markdown:
   `## Heading`, `**bold**`, `> a pull-quote`, `- list items`, `[links](https://…)`.
   You can also drop in **shortcodes** (drill cards, key-idea boxes, source quotes,
   images, video) — see [SHORTCODES.md](SHORTCODES.md).

3. **Preview** with `npm run serve` (if it isn't already running) and check it at
   http://localhost:8080.

That's it. The homepage list and each category archive update themselves from your posts
— you never edit them by hand.

### Categories

The navigation and footer show your three categories: **Dueling, Melee, Theory**. Each
links to an archive of the notes filed under it. Set a post's category with its `tag:`
field. To rename, reorder, or add a category, edit the `categories` list in
`src/_data/site.json` — the menu, footer, and archive pages all follow it.

---

## Publishing

Right now this is **local only**: `npm run build` produces a finished, self-contained
site in the `_site/` folder. That folder is the whole website — you could drag it onto
any web host as-is.

When you're ready to put it online, the natural next step is GitHub Pages, Netlify, or
Cloudflare Pages (all free). Just ask and we'll wire it up so a single push publishes.

---

## Where everything lives

| Path | What it is |
|------|-----------|
| `src/posts/*.md` | **Your posts.** One Markdown file per note. This is where you spend your time. |
| `src/index.njk` | The homepage — a short intro, then every note. The intro words are editable here; the list is automatic. |
| `src/tag.njk` | Generates one archive page per category (e.g. `/tag/rapier/`). Fully automatic. |
| `src/_data/site.json` | Site title, tagline, the category list, and the footer quote. |
| `src/_includes/` | The shared page shell (`base.njk`), the post layout (`post.njk`), the lantern logo. |
| `SHORTCODES.md` | How to use the styled post blocks (drill, key idea, source quote, figure, video). |
| `eleventy.config.mjs` | Build config + where the shortcodes are defined. |
| `src/css/site.css` | The site's stylesheet. It pulls all colors/type/spacing from the design system. |
| `Design System/` | The brand source of truth (tokens, voice guide). **Read-only reference.** |
| `_site/` | The built website. Regenerated on every build — never edit by hand. |

### Voice

Every word should follow `Design System/uploads/VOICE-lantern.md`. The
`fencing-blog-draft` skill already knows this voice — use it to turn practice notes
into a draft, then save the result as a `.md` in `src/posts/`.

### Colors, type, spacing

These are defined once in `Design System/tokens/*.css` and imported by `src/css/site.css`.
To change a brand color everywhere, edit the token — never hard-code colors in `site.css`.

---

## First-time setup (already done on this machine)

For reference, if you ever set this up on a new computer:

```bash
npm install        # installs Eleventy (needs Node.js — installed via nvm here)
npm run build
```

> **Note:** the old hand-built `site/` folder is the original pre-Eleventy version and
> is no longer used to generate anything. It's safe to delete once you're comfortable
> with the new setup — say the word and I'll remove it.
