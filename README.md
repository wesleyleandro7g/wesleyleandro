# Wesley Leandro

Multilingual portfolio built with Astro, TypeScript, and Tailwind CSS 4. All pages are prerendered; React and a production server are not required.

## Development

Requires Node.js 22.23.4+, 24.16.0+, or 26.3.0+ (supported release lines) and pnpm 11.11.0.

```sh
pnpm install
pnpm dev
```

Astro serves the site at http://localhost:4321. `/` redirects to `/en`.

```sh
pnpm check
pnpm lint
pnpm build
pnpm preview
```

`pnpm start` is an alias for local preview, not a production server.

## Content and routes

- Translations: `src/i18n/messages/{en,es,pt}.json`.
- Profile, contact links, and case study slugs: `src/utils/data.ts`.
- Pages: `/{locale}`, `/{locale}/work`, `/{locale}/writing`, and `/{locale}/work/{slug}`.
- Shared layout and SEO: `src/layouts/site-layout.astro`.
- Global styles: `src/styles/globals.css`; Inter and JetBrains Mono are self-hosted via Fontsource.

The language selector preserves the current path, query string, and fragment. Language detection by cookie or browser is intentionally disabled. Interactive controls use small TypeScript scripts; page navigation uses ordinary links. Content remains readable without JavaScript.

## Static deployment

Run `pnpm build` and publish `dist/` to a static host. Configure the host to serve directory index files and `404.html` for unknown URLs. The root redirect includes an HTML meta refresh for static hosts. `sitemap.xml`, `robots.txt`, fonts, icons, and the Open Graph PNG are included in the output.

Regenerate the committed social PNGs with `node scripts/generate-social-assets.mjs` after changing their design. The pnpm workspace preserves the existing build permissions and pins the verifier’s WASM runtime to a compatible version.

Production URL: `https://wesleyleandro.com`. Update `site` in `astro.config.mjs` and `siteConfig.url` when changing domains. No adapter, environment variables, or database is required.
