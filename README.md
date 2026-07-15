# Dataverse Inc. — Astro Website

A professional multi-page website for Dataverse Inc., built with [Astro](https://astro.build).

## Pages

| Route | File | Description |
|-------|------|-------------|
| `/` | `src/pages/index.astro` | Home page with hero, services overview, and CTA |
| `/about` | `src/pages/about.astro` | Company history, milestones, values, and full team grid |
| `/services` | `src/pages/services.astro` | All 6 services with detailed descriptions and features |
| `/community` | `src/pages/community.astro` | Community initiatives, impact numbers, and involvement |
| `/careers` | `src/pages/careers.astro` | Perks, hiring process, and open job listings |
| `/contact` | `src/pages/contact.astro` | Inquiry form, office locations, hours, and social links |

## Project Structure

```
dataverse-inc/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Nav.astro         # Fixed navigation with mobile support
│   │   └── Footer.astro      # Site-wide footer
│   ├── layouts/
│   │   └── Layout.astro      # Base HTML layout
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── services.astro
│   │   ├── community.astro
│   │   ├── careers.astro
│   │   └── contact.astro
│   └── styles/
│       └── global.css        # Design tokens, typography, shared utilities
├── astro.config.mjs
└── package.json
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Content management (Sanity)

Team members, community events, and job openings live in Sanity (project `ty42rw91`, dataset `production`)
rather than in the component files. Everything else on the site is still hardcoded.

| Content | Studio type | Rendered by |
|---------|-------------|-------------|
| Team members | Team Member | `src/components/AboutTeam.astro` |
| Community events | Community Event | `src/components/CommunityInitiatives.astro` |
| Job openings | Job Opening | `src/components/CareersOpenings.astro` |

Edit at **`/studio`** (`http://localhost:4321/studio` in dev). Schemas are in `src/sanity/schemaTypes/`,
GROQ queries in `src/sanity/lib/queries.ts`.

Photos are uploaded through the Studio and served from Sanity's CDN — adding a person or event needs no
repo change. Use the **Display order** field to control position; lower numbers come first.

> **The site is a static build, so publishing in the Studio does not update the live site on its own —
> it needs a rebuild.** Wire a Sanity webhook to your host's deploy hook to make publish trigger a deploy.

Copy `.env.example` to `.env` and fill in the project ID to run locally. `scripts/migrate-to-sanity.mjs`
was the one-time import of the previously hardcoded content; it is kept for reference and refuses to
re-run against a non-empty dataset.

## Customization Checklist

- [x] ~~Replace placeholder team names, roles, and bios in `about.astro`~~ — now managed in Sanity
- [ ] Update office addresses and phone numbers in `contact.astro`
- [ ] Add real social media URLs in `contact.astro` and `Footer.astro`
- [ ] Replace "Photo Placeholder" divs with `<img>` tags pointing to real photos
- [ ] Update stats on the home page hero in `index.astro`
- [ ] Replace company logo placeholder in `Nav.astro` and `Footer.astro`
- [ ] Update `astro.config.mjs` with your real domain
- [ ] Wire up the contact form to a real backend (e.g., Formspree, Resend, Netlify Forms)

## Design System

Colors are defined as CSS variables in `src/styles/global.css`:

```css
--navy: #0B1F3A
--teal: #00B4A6
--cream: #F5F0E8
--warm-white: #FAFAF7
--slate: #6B7A8F
```

Fonts: **DM Serif Display** (headings) + **DM Sans** (body) via Google Fonts.
