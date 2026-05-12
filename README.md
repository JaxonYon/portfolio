# Jaxon Yon — Portfolio

Personal portfolio site built with Vite, React, React Router, Tailwind CSS v4, and shadcn/ui components.

## Local development

```bash
npm install
npm run dev          # start dev server at http://localhost:5173
npm run build        # production build to dist/
npm run preview      # preview the production build
```

Requires Node 20+.

## Project images

Project screenshots live in `public/images/`. Drop the PNG files listed in `public/images/README.md` into that folder. Missing images fall back to a placeholder icon, so the build still succeeds.

## Deploying

### Option A — Netlify (recommended, free)

1. Push this repo to GitHub.
2. On [app.netlify.com](https://app.netlify.com), choose **Add new site → Import an existing project** and pick the repo.
3. Netlify reads `netlify.toml` automatically: build command `npm run build`, publish dir `dist`.
4. Click **Deploy**. You'll get a `*.netlify.app` URL immediately.
5. **Custom domain:** Site settings → Domain management → Add a domain. Follow the DNS instructions (either point your registrar's nameservers at Netlify, or add the CNAME / A records they show you). HTTPS is automatic via Let's Encrypt.

### Option B — Cloudflare Pages (also free)

1. Push to GitHub.
2. On [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages → Create → Pages → Connect to Git**.
3. Framework preset: **Vite**. Build command: `npm run build`. Output dir: `dist`.
4. Deploy. SPA fallback works because of the `public/_redirects` file.
5. **Custom domain:** Pages project → Custom domains → Set up. If the domain is already in Cloudflare, it's one click; otherwise add the CNAME they show you. HTTPS is automatic.

### Pushing to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo>.git
git push -u origin main
```

## Tech stack

- Vite 6 + React 18 + TypeScript
- React Router 7
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- Radix UI primitives + shadcn/ui patterns
- Motion (framer-motion successor) for animations
- Lucide icons
