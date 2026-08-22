# Arca Wallet

The website for Arca Wallet — an iOS app that keeps your gift cards, loyalty programs, and passes in one place.

## Tech stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion.

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project structure

- `src/app/` — pages, root layout, and SEO files (`sitemap.ts`, `robots.ts`, `opengraph-image.tsx`)
- `src/components/` — the page sections (Nav, Hero, Pricing, Footer, etc.)
- `src/lib/constants.ts` — shared values (support email, App Store URL, site URL) — update these first when domain/links change

## Deploying

Deployed on [Vercel](https://vercel.com).
