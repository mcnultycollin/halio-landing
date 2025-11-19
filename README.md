# Halio Landing (Next.js + Markdown)

This is a clean Next.js site that renders three pages from Markdown files in `content/`.

- Routes:
  - `/` -> `content/index.md`
  - `/privacy` -> `content/privacy.md`
  - `/support` -> `content/support.md`

## Getting Started

1) Install dependencies:

```bash
npm install
```

2) Run the dev server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Editing Content

- Edit the markdown files in `content/` to update pages.
  (This starter intentionally has only these three routes.)

## Notes

- This project uses `remark` + `remark-html` to convert Markdown to HTML at build time via `getStaticProps`.
- If you have existing text for the home, privacy, and support pages, paste them into the corresponding markdown files in `content/`.
