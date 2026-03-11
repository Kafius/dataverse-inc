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

## Customization Checklist

- [ ] Replace placeholder team names, roles, and bios in `about.astro`
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
