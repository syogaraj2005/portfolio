# Yogaraj S — Portfolio (React)

A React + Tailwind rebuild of the portfolio, styled around a code-editor
concept (tabs, file names, JSON-style panels) to match a backend/full-stack
developer's actual working environment.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploy to Netlify

**Option A — connect the Git repo (recommended)**
1. Push this folder to a GitHub repo.
2. In Netlify: **Add new site → Import an existing project → GitHub** → pick the repo.
3. Build command: `npm run build`, Publish directory: `dist` (already set in `netlify.toml`).
4. Deploy. Every future push auto-deploys.

**Option B — drag and drop**
1. Run `npm run build` locally.
2. Drag the generated `dist` folder onto [app.netlify.com/drop](https://app.netlify.com/drop).

## Editing content

All real content — profile info, skills, and project descriptions — lives in
one file: `src/data/content.js`. Edit that file to update anything without
touching component code.

## Contact form

The contact form uses **Netlify Forms** (already wired via `data-netlify="true"`
in both `index.html` and `Contact.jsx`). Submissions appear under
**Site settings → Forms** in your Netlify dashboard once deployed — no backend
needed. Add your CV as a static file under `public/` (e.g. `public/resume.pdf`)
and link to it from `src/data/content.js` if you want a download button.
