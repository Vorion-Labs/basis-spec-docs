# basis-spec-docs

BASIS — Baseline Authority for Safe & Interoperable Systems. The open standard for AI agent governance.

This repo is the Docusaurus site for the BASIS specification, served at https://basis.vorion.org. It is hosted on Cloudflare Workers (static assets) as the worker `basis-spec-docs`, also reachable at https://basis-spec-docs.racason.workers.dev.

## Provenance

Extracted from the `Vorion-Labs/vorion` monorepo on 2026-04-22.

- **Source path**: `docs/basis-docs/`
- **Source commit**: `3d7ed92d6dba5705bcdd3f951dbd8929eb2f9a3a`
- **Method**: clean-snapshot extraction (no history carved). The original commit history remains accessible in the monorepo at `Vorion-Labs/vorion`.

This repo is now the canonical home for the BASIS spec site.

## What's inside

- 21 markdown files in `docs/` covering the six BASIS layers (CAR, INTENT, ENFORCE, TRUST, PROOF, CHAIN), the spec sections (capabilities, risk classification, trust scoring, policies, audit logging, regulatory compliance), implementation guides, compliance hub, and product overviews.
- 1 blog post (`blog/`)
- Custom homepage components (`src/components/`)
- Static assets (`static/img/`)
- Cloudflare Workers config (`wrangler.jsonc`) and redirects (`static/_redirects`)

An `/implementations` section absorbing `voriongit/basis-directory` is planned in a follow-up — see the merger strategy in `voriongit-ops/_design/`.

## Stack

- Docusaurus 3.9.2
- React 19
- `@easyops-cn/docusaurus-search-local` for offline search
- Node 20+

## Dev

```bash
npm install --legacy-peer-deps
npm start
```

## Build

```bash
npm run build
```

Output is written to `build/`.

## Deploy (Cloudflare Workers)

The built site in `build/` is served by Cloudflare Workers static assets (no Worker script). `static/_redirects` is copied into `build/` and Workers applies it; unknown paths get Docusaurus's `404.html`.

```bash
npm run preview:cf   # build, then serve locally with wrangler dev
npm run deploy:cf    # build, then deploy (run `npx wrangler login` first)
```

Or from GitHub: add the `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` repository secrets and run the **Deploy to Cloudflare** workflow by hand. Deploys are manual only; there is no deploy on push.

Once deployed, the worker serves the site at https://basis-spec-docs.racason.workers.dev. To serve it at basis.vorion.org, add that hostname as a Custom Domain on the `basis-spec-docs` worker in the Cloudflare dashboard.

## CI

See `.github/workflows/ci.yml` — runs build verification on push and PR to `main`.

## License

Apache-2.0 — see [LICENSE](./LICENSE).

---

_Part of the [Vorion-Labs](https://github.com/Vorion-Labs) polyrepo ecosystem. See [Vorion-Labs/vorion-core](https://github.com/Vorion-Labs/vorion-core) for shared packages._
