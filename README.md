Minimal Next.js + Markdown site
================================

Structure
- `pages/index.js`: Renders `content/pages/index.md` as Home (`/`).
- `pages/[slug].js`: Renders any `content/pages/<slug>.md` at `/<slug>`.
- `content/pages`: Markdown content storage.
- `lib/markdown.js`: Static rendering helper using gray-matter + remark.

Usage
1) Install deps:
   - `npm install`
2) Dev server:
   - `npm run dev`
   - Visit `/`, `/privacy`, `/support`

Moving existing Privacy content
- Convert your previous Privacy page into Markdown and paste into `content/pages/privacy.md`.

Notes
- Static generation via `getStaticProps`/`getStaticPaths`.
- Only Markdown files in `content/pages` are turned into routes (excluding `index.md`).

