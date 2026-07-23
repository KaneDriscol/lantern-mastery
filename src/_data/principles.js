// Builds the "library of principles" gallery from every {% principle %}
// shortcode used across src/posts/*.md — nothing to maintain by hand. Post it
// once in an article and it shows up here automatically, newest post first.
//
// This reads the raw markdown files directly (rather than hooking the
// shortcode itself) because a shortcode only knows the page it's rendering
// on, not the full set of pages across the whole site — reading the source
// files up front is the simplest way to see all of them at once.

import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";

const postsDir = path.join(process.cwd(), "src", "posts");

// This site's front matter is always flat "key: value" lines, so a small
// hand-rolled parser is enough — no need for a YAML dependency.
function parseFrontMatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };
  const data = {};
  for (const line of match[1].split("\n")) {
    const kv = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (kv) data[kv[1]] = kv[2].trim();
  }
  return { data, content: match[2] };
}

const PRINCIPLE_RE = /{%\s*principle\s+"((?:[^"\\]|\\.)*)"(?:\s*,\s*(true|false))?\s*%}([\s\S]*?){%\s*endprinciple\s*%}/g;

export default function () {
  const files = readdirSync(postsDir).filter((f) => f.endsWith(".md"));
  const principles = [];

  for (const file of files) {
    const slug = file.replace(/\.md$/, "");
    const raw = readFileSync(path.join(postsDir, file), "utf8");
    const { data, content } = parseFrontMatter(raw);

    let m;
    PRINCIPLE_RE.lastIndex = 0;
    while ((m = PRINCIPLE_RE.exec(content))) {
      principles.push({
        statement: m[1].replace(/\\"/g, '"'),
        body: m[3].trim(),
        post: {
          title: data.title || slug,
          url: `/notebook/${slug}/`,
          tag: data.tag || "",
          date: data.date || "",
        },
      });
    }
  }

  principles.sort((a, b) => new Date(b.post.date) - new Date(a.post.date));
  return principles;
}
