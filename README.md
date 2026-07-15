# CiphezNexus Consulting

Marketing site for CiphezNexus Consulting — built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Highlights

- Dark editorial design system (navy `#080A11`, gold `#F5C451`, teal `#2DD4BF`), Archivo + IBM Plex Mono.
- Interactive **3D neural-sphere** canvas in the hero (`components/NeuralCanvas.tsx`).
- Scroll-triggered fade/slide reveals (`components/Reveal.tsx`).
- Reusable components: `Nav`, `Hero`, `ServiceCard`, `ProcessStep`, `WorkCard`, `Testimonial`, `ContactForm`, `Footer`.
- Self-contained SVG product visuals (no external image dependencies).
- Contact form posting to a serverless route (`app/api/contact/route.ts`).
- SEO metadata + Open Graph / Twitter tags, responsive & mobile-first.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Deploy (Vercel)

Push to a Git repo and import at [vercel.com/new](https://vercel.com/new) — zero config. The contact endpoint logs leads by default; wire up your email/CRM provider in `app/api/contact/route.ts`.
