# DECOMPE X SKILL CLASS 5.0

Official website and registration landing page for DECOMPE X SKILL CLASS 5.0, built as a modern, high-conversion event microsite with a strong visual identity, responsive interface, and production-ready frontend setup.

This project was designed as a polished digital presence for an innovation competition and skill-class event, with emphasis on clarity, CTA performance, event storytelling, and SEO readiness.

## 1. Project Overview

DECOMPE X SKILL CLASS 5.0 is an annual competition and learning platform built around the theme of innovation, digital creativity, and future-ready skills. The website combines event information, registration flows, merchandise sales, FAQ sections, and marketing content into a single streamlined experience.

The app includes the following core user journeys:

- landing page with event positioning and value proposition
- detailed event information section
- registration section with early bird package comparison
- official merch showcase and purchase CTA
- FAQ and support information
- direct WhatsApp communication access
- SEO metadata and structured data for search visibility

## 2. Product Goals

This project is intended to serve as a complete event website that can:

- present the DECOMPE 5.0 brand clearly and powerfully
- convert visitors into registrants
- communicate event timing, prizes, and value clearly
- deliver a strong mobile-first experience
- support search engine discovery and social sharing
- be deployed independently as a static marketing site

## 3. Technology Stack

The project uses a lightweight modern frontend stack optimized for speed and maintainability:

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React
- HTML5 + CSS3
- Node.js + npm

## 4. Architecture and Structure

The application is organized around a small but scalable component structure, with central data included from a single source of truth.

```bash
.
├── index.html
├── metadata.json
├── package.json
├── README.md
├── tsconfig.json
├── vite.config.ts
├── public/
│   ├── 404.html
│   ├── favicon.svg
│   ├── og-image.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── site.webmanifest
├── src/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── types.ts
│   ├── assets/
│   │   ├── logo/
│   │   ├── mentors/
│   │   └── merch/
│   ├── components/
│   │   ├── FloatingWhatsAppHelp.tsx
│   │   ├── Footer.tsx
│   │   ├── GuidebookModal.tsx
│   │   ├── HallOfFameModal.tsx
│   │   ├── MainLogo.tsx
│   │   ├── MediaKitModal.tsx
│   │   ├── Navbar.tsx
│   │   ├── RegistrationModal.tsx
│   │   └── UrgencyTopBar.tsx
│   ├── data/
│   │   └── eventData.ts
│   └── views/
│       ├── EventInfoView.tsx
│       ├── FaqView.tsx
│       ├── HomeView.tsx
│       ├── MerchView.tsx
│       ├── NotFoundView.tsx
│       └── RegistrationView.tsx
└── dist/
```

### Main Areas

- `src/App.tsx` — app shell, hash-based navigation, metadata updates, and 404 fallback
- `src/data/eventData.ts` — central event content, pricing, timeline, merch, FAQs, and copies
- `src/views/` — page-level view components
- `src/components/` — reusable UI elements and modals
- `public/` — SEO, social, web manifest, and static fallback assets

## 5. Content and Data Strategy

The project keeps event data centralized in a single file to make updates easier and less error-prone.

Key data sources include:

- event summary and positioning
- timeline of activities
- category and pricing details
- rewards and prize pools
- mentors and highlights
- merchandise catalog
- FAQ answers and support links

This makes the site easier to maintain as the event evolves from concept to launch to post-event recap.

## 6. Available Scripts

From the project root, use the following commands:

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Production build

```bash
npm run build
```

### Preview production build locally

```bash
npm run preview
```

## 7. Local Development

Once the dev server is running, Vite will usually provide a local preview URL such as:

```bash
http://localhost:5173/
```

For local work, the app is built as a client-side single-page experience and routes are handled via hash navigation for clean marketing-site behavior.

## 8. Routing Model

The current app uses hash-based routes to keep the site simple and compatible with static hosting.

Available routes include:

- `#home`
- `#event-info`
- `#register`
- `#merch`
- `#faq`

This approach is effective for a static event landing page and avoids the need for server-side rewrite configuration on simple host providers.

## 9. SEO and Search Optimization

The project includes a full SEO setup intended for real-world marketing usage.

### Included SEO assets

- `index.html` with metadata and structured content
- canonical URL configuration
- Open Graph tags for sharing
- Twitter card metadata
- JSON-LD schema for the event and organization
- `public/robots.txt`
- `public/sitemap.xml`
- `public/site.webmanifest`
- `public/og-image.svg`
- `public/favicon.svg`
- `public/404.html`

### Important note

If the production domain is different from the current default value, update these files before deployment:

- `index.html`
- `public/robots.txt`
- `public/sitemap.xml`

Example base URL:

```text
https://decompe.id/
```

## 10. Design System Notes

The application follows a bold, high-contrast visual style based on a neo-brutalist aesthetic.

Visual characteristics include:

- strong black borders
- offset shadows
- flat layout without glassmorphism
- bright accent colors for CTAs and sections
- responsive card layouts and modular spacing
- high legibility and strong brand presence

The design intentionally avoids soft transparency and blurred effects to keep the style confident and industrial.

## 11. Deployment

This project is suitable for deployment on static hosting providers such as:

- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages
- any static hosting platform that supports SPA output

### Production build output

The build result is generated in the `dist/` directory.

```bash
npm run build
```

Host the contents of `dist/` as the production site.

## 12. Troubleshooting and Maintenance

### Common maintenance tasks

- update prices or categories in `src/data/eventData.ts`
- change event timeline and schedule entries in the same file
- replace social and WhatsApp links in the relevant components
- refresh SEO metadata in `index.html`
- update sitemap and robots if the domain changes

### Typical update flow

1. Edit content in `src/data/eventData.ts`
2. Review the relevant page in the browser
3. Run the production build for validation
4. Deploy the rebuilt output

## 13. Contact and Ownership

Project contact and marketing information is expected to be updated in the UI and metadata where relevant.

Representative contact details used in the project include:

- WhatsApp: 0869-6767-420
- Instagram: @decompeofficial
- TikTok: @decompe.5.0
- YouTube: DECOMPE

## 14. License and Usage

This project is tailored for DECOMPE X SKILL CLASS 5.0 and is intended for the event’s digital presence, marketing, and registration needs.

It can be adapted for similar event or competition campaigns, but the branding, naming, and content should be reviewed before reuse in a different context.

## 15. Summary

DECOMPE X SKILL CLASS 5.0 is a complete event marketing website and registration landing page built with modern frontend tooling and production-focused structure. It balances polished marketing design, event information delivery, direct conversion CTAs, and technical SEO readiness in a single complete project.

This codebase is ready for local development, iteration, and deployment as a performant event microsite.
