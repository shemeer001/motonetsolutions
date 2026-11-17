# MotoNet Solutions — Website

Professional marketing website for **MotoNet Solutions**, a motor-vehicle services office in
Kuttippuram, Kerala, India. It offers vehicle insurance, road tax, license renewal, vehicle
tests/inspection and other RTO-related services, with a contact form that stores enquiries in a
PostgreSQL database.

> **Tagline:** “The Complete Online Solutions for your vehicle”

---

## Tech stack

| Area | Technology |
|------|------------|
| Framework | Next.js 14 (App Router) + React 18 |
| Language | TypeScript |
| Styling | Tailwind CSS, Radix UI primitives, `tailwindcss-animate` |
| Animation | Framer Motion |
| Icons | lucide-react |
| Database / ORM | PostgreSQL via Prisma |
| Forms | React Hook Form + Zod |

---

## Project structure

```
.
├─ app/                 # Next.js App Router pages, layouts, API routes
│  ├─ api/contact/      # POST endpoint that saves contact submissions
│  ├─ components/       # Page section components (hero, services, contact, …)
│  ├─ layout.tsx        # Root layout + SEO metadata
│  ├─ page.tsx          # Home page (single-page site)
│  ├─ robots.ts         # Dynamic robots.txt
│  └─ sitemap.ts        # Dynamic sitemap.xml
├─ components/          # Shared UI library (shadcn-style) + layouts
├─ lib/                 # Prisma client, helpers, types
├─ prisma/
│  └─ schema.prisma     # Database schema (ContactSubmission model)
├─ public/              # Static assets (logo, favicon, images)
├─ scripts/             # Seed helper
├─ .env.example         # Copy to .env and fill in
└─ package.json
```

---

## Prerequisites

- **Node.js 18+** (developed/tested on Node 20–22)
- **Yarn** (recommended) or npm
- A **PostgreSQL** database (local Docker, Neon, Supabase, Railway, RDS, etc.)

---

## Local setup

```bash
# 1. Install dependencies
yarn install

# 2. Configure environment
cp .env.example .env
#   then edit .env and set DATABASE_URL to your PostgreSQL connection string

# 3. Create the database tables from the Prisma schema
yarn prisma generate
yarn prisma db push        # creates the ContactSubmission table

# 4. Run the dev server
yarn dev
#   open http://localhost:3000
```

### Useful scripts

| Command | What it does |
|---------|--------------|
| `yarn dev` | Start the dev server |
| `yarn build` | Production build |
| `yarn start` | Run the production build |
| `yarn lint` | Lint the project |
| `yarn prisma studio` | Browse the database in a GUI |

---

## Required services / environment variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `DATABASE_URL` | **Yes** | PostgreSQL connection string used by Prisma. Without it, the contact form API will fail. |
| `NEXTAUTH_URL` | Recommended | Base URL of the site, used for SEO / absolute links / sitemap. Set to your local or production URL. |

There are **no third-party API keys** required to run the site. The contact form writes directly
to PostgreSQL.

---

## Deployment (anywhere)

This is a standard Next.js 14 app and can be deployed to any Node host (Vercel, Netlify, Render,
Railway, Fly.io, a VPS, etc.):

1. Provision a PostgreSQL database and set `DATABASE_URL` (and `NEXTAUTH_URL`) in the host's
   environment variables.
2. Run `yarn prisma db push` once against the production database to create the tables.
3. Build and start: `yarn build && yarn start` (or let the platform run these automatically).

---

## Platform dependencies & notes

The app was originally built and hosted on the **Abacus.AI** platform. A few things to be aware of
when running it elsewhere:

- **Images on Abacus CDN** — Several marketing images (hero, vehicle showcase, service cards) are
  referenced from `https://cdn.abacus.ai/images/...`. They are public URLs and will keep loading
  from any host, but if you want to be fully self-contained you may download them into `public/`
  and update the references in `app/components/*`. The logo, favicon and insurance-partner logos
  are already bundled in `public/`.
- **`next.config.js`** sets `images.unoptimized = true` and an `outputFileTracingRoot`. These are
  harmless for a normal `next build` / `next start`; adjust `outputFileTracingRoot` only if you
  use standalone output on a different folder layout.
- **External analytics/chat script** — the root layout may include an Abacus helper script tag;
  it is optional and can be removed without affecting the site.
- **Seeding** — `scripts/safe-seed.ts` is a guard wrapper that expects an optional
  `scripts/seed.ts` (not included, since there is no seed data). The site does not require seeding.

---

## License

Proprietary — © MotoNet Solutions. All rights reserved.
