# باغچه ذهن (Baghche Zehn)

A small non-profit page: every visit shows the current Jalali date plus one
random, evidence-informed idea from positive psychology and a short practical
exercise. No accounts, no tracking, no ads. Built with Next.js (static
export) so it runs entirely on GitHub Pages — no server needed.

## Structure

- `data/content.js` — the starter set of ideas. Add more entries any time,
  same shape: `{ id, category, title, concept, exercise }`. Categories are
  defined in `CATEGORIES` in the same file.
- `lib/jalali.js` — Gregorian → Jalali date conversion and Persian digit/month
  helpers (uses `jalaali-js`).
- `app/page.js` — home page (today's date + random idea card).
- `app/archive/page.js` — all ideas, grouped into 12 browsable "plots" (not
  tied to real dates, just an organizing device).
- `app/about/page.js` — mission statement + a note that this isn't a
  substitute for professional mental health support.
- `components/SproutIcon.js` — the hand-drawn sprout glyphs, one shape per
  category.

## Local development

```bash
npm install
npm run dev       # http://localhost:3000
```

## Build & preview the static export

```bash
npm run build      # outputs to ./out
npx serve out       # or: cd out && python3 -m http.server 8080
```

## Deploy to GitHub Pages (startstar.ir)

This repo is set up for the custom domain **startstar.ir** — `public/CNAME`
already contains it, so the build serves everything from the root (no
`/repo-name/` subpath).

1. Push this repo to GitHub.
2. In the repo settings → **Pages**, set **Source** to **GitHub Actions**.
   GitHub will detect `public/CNAME` and fill in the custom domain field
   automatically (or set it manually under Pages → Custom domain).
3. At your DNS provider (nic.ir / Cloudflare, same as before):
   - Either an `ALIAS`/`ANAME`/`A` record for the apex (`startstar.ir`)
     pointing at GitHub Pages' IPs (185.199.108.153, .109.153, .110.153,
     .111.153), or a `CNAME` record if you're using a `www` subdomain
     pointing at `<username>.github.io`.
   - Enable "Enforce HTTPS" in Pages settings once DNS propagates.
4. Push to `main` — `.github/workflows/deploy.yml` builds and deploys
   automatically.

If you ever move off the custom domain and want to serve this from
`https://<username>.github.io/<repo-name>/` instead, delete `public/CNAME`
and set `NEXT_BASE_PATH=/<repo-name>` as a build env var in the workflow.

## Adding content

Open `data/content.js` and append a new object to `CONTENT`, e.g.:

```js
{
  id: 37,
  category: "mindfulness",
  title: "...",
  concept: "...",
  exercise: "...",
}
```

`getArchivePlots()` automatically re-groups everything for the archive page
— nothing else needs to change.

## Notes

- All content is original phrasing, not quotes attributed to named authors,
  and avoids clinical/diagnostic claims — the About page includes a note to
  seek professional support for serious or ongoing mental health concerns.
- No analytics or third-party scripts are included by design.
