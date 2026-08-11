# Unabyss — Landing Page

Marketing site for Unabyss, a shared context layer that connects the AI tools you already use.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Motion (Framer Motion)
- lucide-react

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command          | Description            |
| ---------------- | ---------------------- |
| `npm run dev`    | Start the dev server   |
| `npm run build`  | Production build       |
| `npm run start`  | Serve the build        |
| `npm run lint`   | Run ESLint             |

## Structure

```
src/
  app/          # route and layout
  assets/       # images
  components/
    layout/     # header, footer, shell
    pricing/    # pricing card
    sections/   # page sections
    visuals/    # decorative components
  data/         # content arrays
  lib/          # helpers and animation variants
```
