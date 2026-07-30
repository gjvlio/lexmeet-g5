# Rizal Law Office — Frontend Progress

Source: Figma "Laurel Green - Group 5" design doc.
Status legend: `[x]` done · `[~]` in progress · `[ ]` not started

## Setup

- [x] Initialize Vite + React + TypeScript
- [x] Configure Tailwind CSS + design tokens
- [x] Create GitHub repository
- [x] Base project structure (`assets/ components/ contexts/ hooks/ pages/ utils/`)

## Shared Components — Kerr (build first, blocks other pages)

- [x] Button
- [x] GlassCard
- [x] Orb
- [x] Photo
- [x] ScalesIcon
- [x] SectionLabel
- [x] Header
- [x] Footer
- [x] Modal (base — backdrop, close-on-esc, close-on-backdrop-click, focus trap)
- [ ] ArticleCard / ArticleList / ArticleDetail (shared by Everyday Law, Law Updates, Law Blogs)

## Justin

| Section | Status |
|---|---|
| Home Page: Our Services | [x] |
| Home Page: Practice Areas | [x] |
| Home Page: "Got a legal question?" | [ ] |
| Home Page: Law Updates (preview) | [x] |
| Home Page: Everyday Law (preview) | [x] |
| Home Page: Register Account (modal) | [ ] |
| Everyday Law: Landing Page | [ ] |
| Everyday Law: Card List | [ ] |
| Everyday Law: "Read More" (detail) | [ ] |
| Law Practice: Category grid, Cases Handled, Location of Practice, Special Awards & Citations, Notable Members | [ ] |
| Law Office: Our Law Office, Our Lawyers | [ ] |

## El

| Section | Status |
|---|---|
| Home Page: Main hero | [x] |
| Home Page: Sign-in (modal) | [ ] |
| Lawyers Profile (landing): List of Lawyers, Ratings & Feedback, Lawyer Schedule | [x] |
| Lawyers Profile (see more): Lawyer Schedule | [ ] |
| Law Updates + Law Updates (see more) | [ ] |
| Law Blogs + Law Blogs (see more) | [ ] |
| "Share this page" modal | [ ] |
| Law Office: Our Staff, Office Location | [ ] |
| Header & Footer | [x] |

## Kerr

| Section | Status |
|---|---|
| Modal primitive (see Shared Components above) | [x] |
| Article primitives (see Shared Components above) | [ ] |
| Lawyers Profile (see more): Curriculum Vitae, Ratings & Feedbacks | [ ] |
| Contact Us | [x] |
| About Us: Main section, Values we live by, Our mission, Our vision, Our promise | [ ] |

## Responsive — required

Mobile-first is now enforced project-wide; see the Responsive section of
[`DEV_GUIDE.md`](DEV_GUIDE.md) before adding any new page. Comp-exact geometry
goes behind the custom `desktop:` (1440px) breakpoint, **not** `lg:`.

- [x] Mobile nav (hamburger + drawer)
- [x] Mobile pass — Header & Footer
- [x] Mobile pass — Home (hero, services, practice, updates, everyday law)
- [x] Mobile pass — Lawyer Profile (rows become stacked cards)
- [x] Mobile pass — page stubs (Law Practice, Law Office, Our Services, Everyday Law)
- [ ] Mobile pass — Contact Us / About Us (owner: Kerr)
- [ ] Mobile pass — Article pages (Everyday Law / Law Updates / Law Blogs)
- [ ] Browser check at 375px on every page

## QA

- [ ] Design overlay check vs Figma (1440px)
- [ ] Cross-browser check
- [ ] Lighthouse pass (perf/a11y)
