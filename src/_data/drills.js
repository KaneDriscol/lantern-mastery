// Builds the "library of drills" gallery from every {% drill %} shortcode
// used across src/posts/*.md — same approach as principles.js: read the raw
// markdown files, regex out the shortcode blocks, no per-post bookkeeping.

import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";

const postsDir = path.join(process.cwd(), "src", "posts");

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

const DRILL_RE = /{%\s*drill\s+"((?:[^"\\]|\\.)*)"\s*%}([\s\S]*?){%\s*enddrill\s*%}/g;

export default function () {
  const files = readdirSync(postsDir).filter((f) => f.endsWith(".md"));
  const drills = [];

  for (const file of files) {
    const slug = file.replace(/\.md$/, "");
    const raw = readFileSync(path.join(postsDir, file), "utf8");
    const { data, content } = parseFrontMatter(raw);

    let m;
    DRILL_RE.lastIndex = 0;
    while ((m = DRILL_RE.exec(content))) {
      drills.push({
        title: m[1].replace(/\\"/g, '"'),
        steps: m[2].trim(),
        post: {
          title: data.title || slug,
          url: `/notebook/${slug}/`,
          tag: data.tag || "",
          date: data.date || "",
        },
      });
    }
  }

  drills.sort((a, b) => new Date(b.post.date) - new Date(a.post.date));
  return drills;
}
