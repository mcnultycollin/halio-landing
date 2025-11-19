import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const pagesDir = path.join(process.cwd(), 'content', 'pages');

export function listSlugs() {
  if (!fs.existsSync(pagesDir)) return [];
  return fs
    .readdirSync(pagesDir)
    .filter((f) => f.endsWith('.md') && f !== 'index.md')
    .map((f) => f.replace(/\.md$/, ''));
}

export async function getPage(slug) {
  const mdPath = path.join(pagesDir, `${slug}.md`);
  if (!fs.existsSync(mdPath)) {
    return { frontmatter: { title: slug }, html: `<h1>${slug}</h1>` };
  }
  const source = fs.readFileSync(mdPath, 'utf8');
  const { data, content } = matter(source);
  const processed = await remark().use(html, { sanitize: false }).process(content);
  return { frontmatter: data || {}, html: processed.toString() };
}

