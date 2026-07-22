// Scaffold a new blog post: `npm run new "The title of my note"`
// Creates src/posts/<slug>.md with today's date and empty front matter,
// ready for you to write in. Then run `npm run serve` to preview.

import { writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const postsDir = join(__dirname, "..", "src", "posts");

const title = process.argv.slice(2).join(" ").trim();
if (!title) {
  console.error('Give me a title, e.g.  npm run new "Measure is a conversation"');
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "");

const today = new Date().toISOString().slice(0, 10);
const file = join(postsDir, `${slug}.md`);

if (!existsSync(postsDir)) mkdirSync(postsDir, { recursive: true });
if (existsSync(file)) {
  console.error(`A post already exists at src/posts/${slug}.md — pick another title.`);
  process.exit(1);
}

const template = `---
title: ${title}
tag: Rapier
date: ${today}
readingTime: 5 min
excerpt: One or two sentences that show up on the homepage and the notebook list. Write this last.
---

Start writing here. Use Markdown:

## A heading

A paragraph. Make a word **bold** for emphasis.

> A pull-quote for the line you want people to remember.

- a list item
- another one

When you're happy, run \`npm run serve\` to preview, then publish.
`;

writeFileSync(file, template);
console.log(`\n✓ Created src/posts/${slug}.md`);
console.log(`  Open it, write your note, then run:  npm run serve\n`);
