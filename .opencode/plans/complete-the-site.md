# Plan: Integrations logo colours + P0 sub-pages (complete the site)

Approved scope: **Part 1 + P0 now**. "Soon" tiles stay muted (grayscale + opacity).

## Part 1 — Fix integrations logo colours
Logos are coloured SVGs but `IntegrationsSection.tsx:20` forces `grayscale` on all (colour only on hover).
- `src/components/sections/IntegrationsSection.tsx` — available logos: drop `grayscale`, show full colour, add `transition-transform hover:scale-105`; "Soon" tiles: keep `grayscale` (tile already has `opacity-60`).
- `public/images/tools/website-sync.svg` — `stroke="currentColor"` resolves to black in `<img>` context (invisible on dark); replace with explicit white.
- `grok.svg` is fine (brand is monochrome, `fill="white"`).

## Part 2 — P0 broken links
### /jobs/backend-engineer + /jobs/ml-engineer
- Move `jobPostings` from `JobsSection.tsx` into `src/data/jobs.ts` (shared by index + detail).
- Extend type with detail fields (responsibilities, requirements, stack, apply link).
- Fetch real copy from live `unabyss.com/jobs/backend-engineer` + `/jobs/ml-engineer`.
- Build `src/app/jobs/[slug]/page.tsx` (SSG via `generateStaticParams` + `generateMetadata` + `notFound`).
- New `src/components/sections/JobDetailSection.tsx` matching v2 visual language.

### /regulamin (PL terms)
- Fetch live `unabyss.com/regulamin`, port to `src/app/regulamin/page.tsx` + `src/components/sections/RegulaminSection.tsx` + `src/data/regulamin.ts`.

### /terms/promotion/{launch4,launch3,launch2,product-hunt}
- Fetch live pages, build 4 static routes via `src/app/terms/promotion/[slug]/page.tsx` (SSG) or 4 individual pages; data in `src/data/promotionTerms.ts`.

### /restricted-jurisdictions
- Build `src/app/restricted-jurisdictions/page.tsx` (list of EU/UN/UK/US sanctioned jurisdictions), linked from terms prose (3.9).

## Verification
- `npx tsc --noEmit`, `npm run lint`, `npm run build`.
- Prod server on port 3016: content-check `/jobs/backend-engineer`, `/jobs/ml-engineer`, `/regulamin`, `/terms/promotion/launch4`, `/restricted-jurisdictions`, `/integrations` (verify colour via served HTML/asset).
