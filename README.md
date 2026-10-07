# carloshernandez201 — personal site

Next.js (App Router) + Tailwind, statically exported and deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in ./out
npx serve out      # preview the exported build
```

## Edit content

Everything on the page — bio, experience, projects, skills — lives in
[`lib/content.ts`](lib/content.ts). Set `featured: true` on a project to promote it
to a large card.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and publishes `out/`.

1. Create a repo named `carloshernandez201.github.io` (serves at the root URL) — any
   other name serves at `/<repo-name>/`, and the workflow sets the base path automatically.
2. Repo **Settings → Pages → Source: GitHub Actions**.
3. `git push -u origin main`.
