// Lantern Mastery — Eleventy configuration.
//
// You almost never need to touch this file. It tells Eleventy:
//   - where your source files live (src/)
//   - where the finished site is written (_site/)
//   - which folders to copy through untouched (CSS, assets, the design system)
//   - how to format the dates you put at the top of each post
//   - the "shortcodes" you can drop into a post (see the block near the bottom)

import markdownIt from "markdown-it";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import path from "node:path";

// A small Markdown renderer used inside the paired shortcodes, so you can write
// normal Markdown *inside* a {% drill %}…{% enddrill %} block and have it work.
const md = markdownIt({ html: true, linkify: true, typographer: true });
const inline = (s) => md.renderInline((s || "").trim());
const block = (s) => md.render((s || "").trim());

export default function (eleventyConfig) {
  // Appends a short content hash to a static asset URL (e.g. "/js/print.js"
  // -> "/js/print.js?v=a1b2c3d4"), so editing print.js or site.css forces
  // browsers to fetch the new version instead of silently serving a stale
  // cached copy — which is exactly what made a already-fixed bug look like
  // it was still happening after a normal reload.
  eleventyConfig.addFilter("cacheBust", (url) => {
    try {
      const filePath = path.join("src", url.split("?")[0]);
      const hash = createHash("md5").update(readFileSync(filePath)).digest("hex").slice(0, 8);
      return `${url}?v=${hash}`;
    } catch {
      return url;
    }
  });

  // Copy static files straight into the built site, unchanged.
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // Copy the design system's CSS (the single source of truth for colors,
  // type, and spacing) into /design-system/ so site.css can @import it.
  eleventyConfig.addPassthroughCopy({
    "Design System/styles.css": "design-system/styles.css",
    "Design System/tokens": "design-system/tokens",
  });

  // A friendly date filter, e.g. {{ page.date | readableDate }} -> "July 14, 2026"
  eleventyConfig.addFilter("readableDate", (value) => {
    const d = value instanceof Date ? value : new Date(value);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });
  });

  // A machine-readable date for <time datetime="..."> and sorting.
  eleventyConfig.addFilter("isoDate", (value) => {
    const d = value instanceof Date ? value : new Date(value);
    return d.toISOString().slice(0, 10);
  });

  // Turn a category name into a URL-safe slug, e.g. "The Duel" -> "the-duel".
  eleventyConfig.addFilter("catSlug", (value) =>
    String(value)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
  );

  // Renders a chunk of Markdown to HTML — used by the library gallery pages
  // (drills, practice logs) to render the content pulled out of a post's
  // shortcode. Same renderer the shortcodes themselves use.
  eleventyConfig.addFilter("md", (value) => block(value));

  // ---------------------------------------------------------------------------
  // Shortcodes — reusable styled blocks you can drop into any post.
  // See SHORTCODES.md for copy-paste examples of every one of these.
  // ---------------------------------------------------------------------------

  // {% keyidea %}The one thing to remember.{% endkeyidea %}
  // A highlighted takeaway box.
  eleventyConfig.addPairedShortcode("keyidea", (content) => {
    return `<div class="sc-keyidea">${block(content)}</div>`;
  });

  // {% aside %}A caveat or side note.{% endaside %}
  // A quieter callout for a tangent or warning.
  eleventyConfig.addPairedShortcode("aside", (content) => {
    return `<aside class="sc-aside">${block(content)}</aside>`;
  });

  // {% drawer "The caveats we didn't get to" %}
  // Extra detail, hidden until the reader clicks the title open.
  // {% enddrawer %}
  // A collapsible section — good for tangents, caveats, and long asides that
  // would otherwise interrupt the main line of thought.
  eleventyConfig.addPairedShortcode("drawer", (content, title = "More") => {
    return `<details class="sc-drawer">
  <summary class="sc-drawer-summary">${inline(title)}</summary>
  <div class="sc-drawer-body">${block(content)}</div>
</details>`;
  });

  // {% drill "Gain the blade" %}
  // 1. step one
  // 2. step two
  // {% enddrill %}
  // A titled drill card.
  eleventyConfig.addPairedShortcode("drill", (content, title = "Drill") => {
    return `<div class="sc-drill">
  <div class="sc-drill-label">Drill</div>
  <div class="sc-drill-title">${inline(title)}</div>
  <div class="sc-drill-body">${block(content)}</div>
</div>`;
  });

  // {% source "Fiore dei Liberi, Fior di Battaglia" %}
  // The quoted passage from a historical master.
  // {% endsource %}
  // A pull-quote attributed to a historical source.
  eleventyConfig.addPairedShortcode("source", (content, attribution = "") => {
    const cite = attribution
      ? `<cite class="sc-source-cite">${inline(attribution)}</cite>`
      : "";
    return `<blockquote class="sc-source">${block(content)}${cite}</blockquote>`;
  });

  // {% figure "/assets/lunge.jpg", "A lunge in seconda", "Kane lunging" %}
  // An image with a caption. Arguments: src, caption, alt (alt optional).
  eleventyConfig.addShortcode("figure", (src, caption = "", alt = "") => {
    const cap = caption ? `<figcaption>${inline(caption)}</figcaption>` : "";
    const resolvedSrc = eleventyConfig.getFilter("url")(src);
    return `<figure class="sc-figure"><img src="${resolvedSrc}" alt="${alt || caption}" loading="lazy">${cap}</figure>`;
  });

  // {% youtube "dQw4w9WgXcQ", "Optional caption" %}
  // A responsive YouTube embed. First argument is the video id (the part after
  // "v=" in the URL), second is an optional caption.
  eleventyConfig.addShortcode("youtube", (id, caption = "") => {
    const cap = caption ? `<figcaption>${inline(caption)}</figcaption>` : "";
    return `<figure class="sc-video"><div class="sc-video-frame"><iframe src="https://www.youtube-nocookie.com/embed/${id}" title="${caption || "Video"}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>${cap}</figure>`;
  });

  // ---------------------------------------------------------------------------
  // Resource templates — the five "foot of a lesson post" cards from the
  // Resource templates design. Each takes a trailing `print` flag (true/false);
  // when true, "Print this" and "Save as PNG" buttons render on that one card.
  // ---------------------------------------------------------------------------

  let scAutoId = 0;
  const nextId = (prefix) => `${prefix}-${++scAutoId}`;
  const scSlug = (s) =>
    String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "resource";
  // Prepends a marker (e.g. a numbered circle or a checkbox) as a real
  // element inside each <li>, instead of drawing it with ::before — the
  // "Save as PNG" export (html2canvas) doesn't reliably render generated
  // pseudo-element content, so this has to be actual DOM to show up there.
  // Also wraps the rest of the item's content in its own element. Without
  // that, a flex <li> containing a leading <strong> followed by plain text
  // (e.g. "**Meet the bind.** Catch the blade...") relies on the browser
  // auto-boxing that loose text into one "anonymous" flex item — which
  // renders fine on the page, but html2canvas doesn't handle that anonymous
  // box correctly and splits the strong text and the rest into two
  // misaligned columns in the exported PNG.
  const markListItems = (html, marker, textClass) => {
    let n = 0;
    return html.replace(/<li>([\s\S]*?)<\/li>/g, (_match, inner) => {
      const markerHtml = typeof marker === "function" ? marker(++n) : marker;
      const text = textClass ? `<div class="${textClass}">${inner}</div>` : inner;
      return `<li>${markerHtml}${text}</li>`;
    });
  };
  const printBtn = (id, print, name = "resource") =>
    print
      ? `<div class="sc-actions">
    <button type="button" class="sc-print-btn" onclick="scPrint('${id}')">Print this</button>
    <button type="button" class="sc-print-btn" onclick="scSavePng('${id}', '${scSlug(name)}')">Save as PNG</button>
  </div>`
      : "";

  // {% drillcard "The Zwerchau, from the roof", "Foundational", "Longsword · solo or partner", true %}
  // A first pass at the horizontal cut...
  //
  // **The setup.** Stand in vom Tag...
  //
  // **Reps and tempo.** Ten cuts per side...
  //
  // **Watch for.** Dropping the point too early...
  //
  // > Cut and cover in the same motion. If you can tell where one ends, slow down.
  // {% enddrillcard %}
  // A titled drill card: level badge, context line, description, and any
  // number of markdown sections, ending in an optional closing blockquote.
  eleventyConfig.addPairedShortcode(
    "drillcard",
    (content, title = "Drill", level = "Foundational", context = "", print = false) => {
      const id = nextId("sc-drillcard");
      return `<div class="sc-drillcard" id="${id}">
  <div class="sc-drillcard-head">
    <span class="sc-drillcard-badge">${inline(level)}</span>
    ${context ? `<span class="sc-drillcard-context">${inline(context)}</span>` : ""}
  </div>
  <h3 class="sc-drillcard-title">${inline(title)}</h3>
  <div class="sc-drillcard-body">${block(content)}</div>
  ${printBtn(id, print, title)}
</div>`;
    }
  );

  // {% breakdown "Winding at the bind", "Four counts", true %}
  // 1. **Meet the bind.** Catch the incoming blade from your Oberhau...
  // 2. **Read the pressure.** If they push hard, you go around...
  // {% endbreakdown %}
  // A dark, numbered step-by-step technique breakdown. Content should be a
  // markdown ordered list; each item is drawn as a numbered circle.
  eleventyConfig.addPairedShortcode(
    "breakdown",
    (content, title = "Breakdown", context = "", print = false) => {
      const id = nextId("sc-breakdown");
      const body = markListItems(
        block(content),
        (n) => `<span class="sc-breakdown-num">${n}</span>`,
        "sc-breakdown-text"
      );
      return `<div class="sc-breakdown" id="${id}">
  <div class="sc-breakdown-head">
    <span class="sc-breakdown-badge">Step by step</span>
    ${context ? `<span class="sc-breakdown-context">${inline(context)}</span>` : ""}
  </div>
  <h3 class="sc-breakdown-title">${inline(title)}</h3>
  <div class="sc-breakdown-body">${body}</div>
  ${printBtn(id, print, title)}
</div>`;
    }
  );

  // {% sourcecard "Fior di Battaglia", "Fiore dei Liberi · c. 1410 · trans. Leoni", "What this passage asks of the body, and how it shows up in the drill.", "https://example.com", "Where to read the full source", true %}
  // > Original passage, in the source language.
  //
  // Your working translation, in your own words.
  // {% endsourcecard %}
  // A source-reference card: manuscript name, author/date/translator, the
  // passage (content, quote + translation), what it teaches, and a link.
  eleventyConfig.addPairedShortcode(
    "sourcecard",
    (
      content,
      title = "Source",
      meta = "",
      teaches = "",
      link = "",
      linkLabel = "Where to read the full source",
      print = false
    ) => {
      const id = nextId("sc-sourcecard");
      return `<div class="sc-sourcecard" id="${id}">
  <span class="sc-sourcecard-badge">Resource</span>
  <h3 class="sc-sourcecard-title">${inline(title)}</h3>
  ${meta ? `<div class="sc-sourcecard-meta">${inline(meta)}</div>` : ""}
  <div class="sc-sourcecard-passage">${block(content)}</div>
  ${teaches ? `<div class="sc-sourcecard-teaches-label">What it teaches</div><p class="sc-sourcecard-teaches">${inline(teaches)}</p>` : ""}
  ${link ? `<a class="sc-sourcecard-link" href="${link}">${inline(linkLabel)}</a>` : ""}
  ${printBtn(id, print, title)}
</div>`;
    }
  );

  // {% practicelog "Practice log", 4, true %}
  // Print this, fold it into your kit bag, and fill it in after each session.
  //
  // - Hands arrive before the body leans
  // - Cut and cover in one motion
  // - Read the pressure before deciding
  // {% endpracticelog %}
  // A printable practice log. Any content before the bullet list is treated
  // as an intro description under the title; the bullet list itself becomes
  // the "This session's focus" checklist. Also draws blank date/reps/
  // felt-like fields and a set of blank note lines. Second argument is how
  // many note lines to draw (default 4).
  eleventyConfig.addPairedShortcode(
    "practicelog",
    (content, title = "Practice log", lines = 4, print = false) => {
      const id = nextId("sc-practicelog");
      const noteLines = Array.from({ length: Number(lines) || 4 })
        .map(() => `<div class="sc-practicelog-line"></div>`)
        .join("");
      const rendered = block(content);
      const listIndex = rendered.indexOf("<ul");
      const intro = listIndex > 0 ? rendered.slice(0, listIndex) : "";
      const checklist = markListItems(
        listIndex >= 0 ? rendered.slice(listIndex) : rendered,
        `<span class="sc-practicelog-check"></span>`,
        "sc-practicelog-check-text"
      );
      return `<div class="sc-practicelog" id="${id}">
  <span class="sc-practicelog-badge">Practice</span>
  <h3 class="sc-practicelog-title">${inline(title)}</h3>
  ${intro ? `<div class="sc-practicelog-intro">${intro}</div>` : ""}
  <div class="sc-practicelog-label">This session's focus</div>
  <div class="sc-practicelog-checks">${checklist}</div>
  <div class="sc-practicelog-fields">
    <div class="sc-practicelog-field"><div class="sc-practicelog-field-label">Date</div><div class="sc-practicelog-field-rule"></div></div>
    <div class="sc-practicelog-field"><div class="sc-practicelog-field-label">Reps</div><div class="sc-practicelog-field-rule"></div></div>
    <div class="sc-practicelog-field"><div class="sc-practicelog-field-label">Felt like</div><div class="sc-practicelog-field-rule"></div></div>
  </div>
  <div class="sc-practicelog-label">Notes to self</div>
  <div class="sc-practicelog-notes">${noteLines}</div>
  ${printBtn(id, print, title)}
</div>`;
    }
  );

  // {% principle "The bind is a conversation, not a contest.", true %}
  // Most beginners try to win the moment two blades touch. The older idea is
  // quieter: stay soft, listen for a heartbeat, and let their strength choose
  // your answer for you.
  // {% endprinciple %}
  // A principle callout on the primary color: a short punchy statement
  // (first argument) followed by markdown explanation (content).
  eleventyConfig.addPairedShortcode(
    "principle",
    (content, statement = "", print = false) => {
      const id = nextId("sc-principle");
      return `<div class="sc-principle" id="${id}">
  <span class="sc-principle-label">Principle</span>
  <p class="sc-principle-statement">${inline(statement)}</p>
  <div class="sc-principle-body">${block(content)}</div>
  ${printBtn(id, print, statement)}
</div>`;
    }
  );

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    // Let .md and .njk files use Nunjucks templating.
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    // GitHub Pages serves this as a project site at /lantern-mastery/, so
    // every root-relative link (run through the `url` filter) needs that
    // prefix there. Passed via --pathprefix in CI so local `npm run serve`
    // still runs at "/" like normal.
  };
}
