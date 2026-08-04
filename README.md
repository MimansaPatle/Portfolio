# Mimansa Patle — Portfolio

Personal developer portfolio for **Mimansa Patle**, a B.Tech CSE undergraduate and full-stack developer. Built as a single-page site covering her background, skills, projects, work experience, education, and certifications.

**Live site:** [mimansapatle.vercel.app](https://mimansapatle.vercel.app/)

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| UI library | [React 19](https://react.dev/) |
| Language | TypeScript |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first config via `@theme`, no `tailwind.config.js`) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Fonts | Space Grotesk (body/UI) + Anton (display headings), loaded via `next/font/google` |
| Hosting | [Vercel](https://vercel.com/) |

No backend, database, or CMS — it's a static site. All content lives in one typed data file (see below).

## Getting Started

```bash
npm install
npm run dev       # start the dev server at http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start       # serve the production build locally
npm run lint          # run ESLint
```

## Project Structure

```
app/
  layout.tsx       # root layout — fonts, <html>/<body>, page metadata
  page.tsx         # assembles all sections into the single page
  data.ts          # single source of truth for all content (see below)
  globals.css      # Tailwind theme tokens, design-system utility/component classes

components/
  Navbar.tsx           # floating pill nav, scroll-spy active link, mobile drawer
  Hero.tsx             # name/intro, illustrated avatar, animated stats band
  About.tsx            # bio, quick-info rows, stat cards, soft skills/languages
  Skills.tsx           # categorized tech/skill tags
  Projects.tsx         # project cards with 3D tilt-on-hover
  ProjectModal.tsx      # detail modal opened from a project card
  Experience.tsx        # education highlight + work experience cards
  Certifications.tsx    # certification cards that flip on hover
  Contact.tsx           # contact info + "phone contact card" visual
  Footer.tsx
  Loader.tsx             # splash screen shown on first load
  Typewriter.tsx           # cycling role text in the Hero
  FadeIn.tsx                # scroll-reveal wrapper (Framer Motion)
  CountUp.tsx               # animated number count-up, triggered on scroll into view
  Magnetic.tsx               # magnetic hover-follow wrapper for buttons
  ScrollProgress.tsx          # thin progress bar pinned to the top edge
  ScrollToTop.tsx              # floating "back to top" button

public/
  Mimansa_Patle_Resume.pdf     # linked from the Resume buttons
  mimansa-avatar.svg            # illustrated portrait (see Credits)
```

## Editing Content

Everything text-based on the site — name, bio, skills, work experience, education, certifications, and projects — is defined in **`app/data.ts`** as typed exported objects/arrays. Update that file and the relevant sections re-render automatically; no component code needs to change for routine content updates (new job, new project, new certification, etc.).

To add a new project, add an entry to the `projects` array with a `color` (used for the card accent) and either a `github` link or `inProgress: true` to show a "Demo coming soon" state instead.

## Design System

- **Theme**: dark, flat colors only — no gradients. Palette (defined in `app/globals.css` under `@theme`):
  - `--color-base` / `--color-alt` / `--color-deep` — near-black backgrounds
  - `--color-brand` (terracotta) and `--color-gold` — the two accent colors, used alternately across sections
  - `--color-cream` — light accent used for primary buttons/badges that need contrast against the dark background
- **Typography**: Anton for large display headings/watermarks, Space Grotesk for everything else.
- Reusable primitives (`.section`, `.container-xl`, `.btn-primary`, `.btn-secondary`, `.badge`, `.card`, `.eyebrow`, `.watermark`, `.outline-text`, etc.) are defined once in `globals.css` and composed with Tailwind utility classes in components, rather than repeating raw styles per component.

## Notable Interaction Details

- Scroll-triggered number count-up on stat blocks (Hero, About)
- 3D tilt-on-hover project cards, flip-on-hover certification cards
- Magnetic hover effect on primary buttons
- Parallax on the large background "watermark" text in Hero (hidden on mobile to avoid overlapping content)
- Sliding active-link indicator in the navbar (`layoutId`-based)
- Subtle film-grain texture overlay and a top-edge scroll-progress bar

## Credits

- Illustrated avatar generated with [DiceBear](https://www.dicebear.com/) (`lorelei` style, [CC0 licensed](https://www.dicebear.com/licenses/)), rendered locally and stored as a static asset — no runtime calls to a third-party API.

## Deployment

Deployed on Vercel, connected to the `main` branch of this repository (`vercel.json` pins the framework preset to Next.js). Pushing to `main` triggers a new production deployment.
