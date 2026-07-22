// Lantern Mastery — Eleventy configuration.
//
// You almost never need to touch this file. It tells Eleventy:
//   - where your source files live (src/)
//   - where the finished site is written (_site/)
//   - which folders to copy through untouched (CSS, assets, the design system)
//   - how to format the dates you put at the top of each post
//   - the "shortcodes" you can drop into a post (see the block near the bottom)

import markdownIt from "markdown-it";

// A small Markdown renderer used inside the paired shortcodes, so you can write
// normal Markdown *inside* a {% drill %}…{% enddrill %} block and have it work.
const md = markdownIt({ html: true, linkify: true, typographer: true });
const inline = (s) => md.renderInline((s || "").trim());
const block = (s) => md.render((s || "").trim());

export default function (eleventyConfig) {
  // Copy static files straight into the built site, unchanged.
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
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
