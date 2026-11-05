# Nurbibi Beauty Studio

Responsive concept website for a beauty studio in Kaskelen, Kazakhstan. Built with Next.js App Router, TypeScript, React and plain CSS. No backend, database, accounts, analytics or booking engine.

## Run locally

Requires Node.js 20.9 or newer.

```sh
npm ci
npm run dev
```

Production verification:

```sh
npm run build
npm run typecheck
npm start
node scripts/qa.mjs
```

The QA script uses an installed Google Chrome, checks nine viewport widths, images, navigation, service disclosure, all lightboxes, keyboard dismissal, WhatsApp message, reduced motion and 404. Set `BASE_URL` to test another deployment. Reports and screenshots are written to `docs/qa/`.

## Structure

- `app/`: route, metadata, favicon, Open Graph image, styles and 404.
- `components/`: header, responsive photos and scroll reveal.
- `sections/`: service list, gallery and booking handoff.
- `data/studio.ts`: verified business information, services and external links.
- `public/images/`: five optimized photographs in two WebP sizes.
- `docs/RESEARCH.md`: source notes and asset provenance.

## Scope

Visitors explore the studio and services, view selected work, choose a service and continue to the studio's existing WhatsApp. An appointment is only confirmed by the administrator in conversation. No message is sent automatically.

Full service pages, current price list, individual staff pages, scheduling, payments, reviews, CMS, maps and business automation are intentionally outside this concept. Search indexing is disabled with `noindex, nofollow` while basic sharing metadata is provided. The footer subtly identifies the project as a concept.

## Publication

Designed for Vercel's free Hobby hosting with the connected GitHub repository and production branch `main`. No environment variables are required. No credentials or Instagram authentication data are included.

## Media

Studio images were selected from its publicly visible Instagram publications through the user's authorized browser session. The images represent actual published work; they are not generated. They are included for this requested presentation concept. No blanket reuse license is granted by this repository.
