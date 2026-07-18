# Emmanuel Toba — Portfolio

A premium, animated developer portfolio built with React 19, TypeScript, and Tailwind CSS. Projects are pulled from real repositories on [github.com/Manuel-Lab-Code](https://github.com/Manuel-Lab-Code).

## Tech Stack

- **React 19** + **Vite** + **TypeScript**
- **Tailwind CSS v4** — custom luxury dark/light theme (deep midnight, electric cyan, royal gold, coral, lavender)
- **Framer Motion** + **GSAP** — scroll reveals, magnetic buttons, orbiting skill icons, page transitions
- **Lenis** — smooth scrolling
- **React Router** — routing + 404 page
- **React Hook Form** + **EmailJS** — validated contact form with a `mailto:` fallback
- **Radix UI primitives** (`Dialog`) + **class-variance-authority** + **tailwind-merge** — accessible, composable UI components
- **React Icons** + **Lucide** — iconography
- Live **GitHub REST API** stats (repos, stars, languages, recent activity) fetched client-side, with a cached fallback if the API is unreachable

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Environment Variables

Copy `.env.example` to `.env` and fill in your [EmailJS](https://www.emailjs.com) credentials to enable the contact form to send email directly. Without them, the form falls back to opening a pre-filled `mailto:` link.

```bash
cp .env.example .env
```

## Project Structure

```
src/
  components/   # ui primitives, layout chrome, shared widgets
  sections/     # one file per homepage section (Hero, About, Projects, ...)
  hooks/        # scroll, cursor, theme, GitHub stats hooks
  context/      # Theme, Cursor, Lenis smooth-scroll providers
  data/         # projects, skills, experience, services, testimonials, socials
  services/     # GitHub API + EmailJS integration
  layouts/      # RootLayout (nav, footer, cursor, command palette)
  pages/        # Home, NotFound
  utils/        # small shared helpers (cn)
```

## Notes

- **Testimonials** (`src/data/testimonials.ts`) ship as clearly-labeled placeholders — swap in real client quotes before going live.
- **Resume** button links to `/public/resume.pdf` — add your resume file there.
- Update `src/data/socials.ts` and the JSON-LD block in `index.html` with your real canonical domain before deploying.
