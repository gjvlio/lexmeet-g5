# LexMeet — Dev Guide

Project: **LexMeet**, Rizal Law Office site (Group 5). Hi-fi build of the Figma
design. Stack: **Vite + React + TypeScript + Tailwind CSS**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build
```

## Repo layout (root)

```
lexmeet-g5/
├── docs/                    guides, progress tracking, design refs
├── public/                  static files served as-is (favicon, etc.)
├── src/                     app source — see below
├── index.html
├── package.json
├── tailwind.config.js       design tokens (color, font, shadow, gradients)
├── postcss.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Projected `src/` directory

Target shape once all pages/sections from the Figma doc are built (see
`docs/PROGRESS.md` for live status, owner per section):

```
src/
├── assets/                  exported Figma images
├── components/
│   ├── layout/              Header, Footer
│   ├── ui/                  Button, GlassCard, Photo, Orb, SectionLabel,
│   │                        ScalesIcon, Modal (base)
│   ├── auth/                SignInModal, CreateAccountModal
│   └── article/             ArticleCard, ArticleList, ArticleDetail —
│                             shared by Everyday Law / Law Updates / Law Blogs
├── contexts/                AuthContext, etc.
├── hooks/                   custom hooks
├── pages/
│   ├── Home/
│   │   ├── index.tsx
│   │   └── sections/        Hero, Services, Practice, LawUpdates, EverydayLaw
│   ├── LawyerProfile/
│   │   ├── index.tsx        list view
│   │   ├── LawyerDetail.tsx profile + chat panel
│   │   └── components/      LawyerCard, LawyerChatPanel
│   ├── LawPractice/
│   │   ├── index.tsx
│   │   └── sections/        CategoryGrid, CasesHandled, ProvincesMap,
│   │                        Awards, NotableMembers
│   ├── LawOffice/
│   │   ├── index.tsx
│   │   └── sections/        AboutOffice, Values, OurLawyers, OurStaff,
│   │                        OfficeLocation
│   ├── EverydayLaw/          index.tsx (list), [slug].tsx (detail)
│   ├── LawUpdates/           index.tsx (list), [slug].tsx (detail)
│   ├── LawBlogs/              index.tsx (list), [slug].tsx (detail)
│   └── ContactUs/
│       └── index.tsx
└── utils/                   cn(), content.ts, images.ts
```

## Design system

Palette, type, and effects live in `tailwind.config.js` and `src/index.css`.

### Color scheme

Canonical palette — use the Tailwind class, never a raw hex.

| Token | Hex | Tailwind class |
|---|---|---|
| Carbon Black | `#1D1F10` | `bg-carbon-black` |
| Charcoal Brown | `#2A2C19` | `bg-charcoal-brown` |
| Dark Khaki | `#3C4222` | `bg-dark-khaki` |
| Olive Leaf | `#545A2F` | `bg-olive-leaf` |
| Dusty Olive | `#6F7742` | `bg-dusty-olive` |
| Palm Leaf | `#959A6B` | `bg-palm-leaf` |
| Sage Mist | `#BCC199` | `bg-sage-mist` |
| Linen Olive | `#DCDFC6` | `bg-linen-olive` |
| Parchment | `#F0F1E4` | `bg-parchment` |

Legacy short aliases (`ink`, `deep`, `forest`, `olive`, `sage`, `mist`, `cream`)
still exist in the config, mapped 1:1 to the scale above, since most existing
components already use them. Use the full names above for new code; don't
introduce a third naming scheme.

### Type & effects

- **Fonts:** Spectral (display/headings), IBM Plex Sans (body/UI) — loaded via
  Google Fonts in `index.html`.
- **`.glass` / `.glass-dark`** utility classes = the frosted panels.
- **Gradients** (`bg-hero-fade`, `bg-service-card`, `bg-olive-pill`, …) are
  defined in the Tailwind theme, not written inline.

## Responsive — mobile first (required)

The Figma frames are drawn at 1440px, but **1440 is the last breakpoint we
build, not the first.** Write the phone layout as the unprefixed base, then add
`sm:` / `md:` / `lg:` to *add* complexity as the viewport grows. Tailwind's
prefixes are min-width, so an unprefixed class applies everywhere and a
prefixed one only kicks in at that width and up.

Refs: [Tailwind responsive design](https://tailwindcss.com/docs/responsive-design)
· [MDN: mobile first](https://developer.mozilla.org/en-US/docs/Glossary/Mobile_First)

### Breakpoints

| Prefix | Min width | Stands for |
|---|---|---|
| *(none)* | 0 | phone — the default |
| `sm:` | 640px | large phone / small tablet |
| `md:` | 768px | tablet |
| `lg:` | 1024px | laptop |
| `xl:` | 1280px | wide desktop |
| `desktop:` | **1440px** | the Figma frame — custom, see below |

`desktop:` is ours, added in `tailwind.config.js`. It exists because the comps'
absolute layouts are ~1296px wide and so do **not** fit inside `lg:` (1024px) —
using `lg:` for them clipped the table between 1024 and 1440.

Split the two jobs:

- **`lg:` and below** — fluid steps that work at any width: padding ramps, type
  scales, 1-col → 2-col grids.
- **`desktop:`** — pixel-exact comp geometry: absolute offsets, fixed widths
  from Figma, the uneven footer column template.

Below `desktop:` you are designing, not transcribing — collapse columns, stack
rows, and drop decorative pieces.

### Rules

- **Never write an unprefixed fixed width** wider than a phone. `w-[1440px]`
  is wrong; `w-full max-w-[1440px]` is right.
- **Page padding** uses the shared ramp: `px-4 sm:px-6 lg:px-16`.
- **Absolute pixel offsets are a desktop-only tool.** Lay out with flex/grid
  and `gap` at the base size, then switch to `desktop:absolute
  desktop:left-[567px]` where a comp demands exact placement. Inline
  `style={{ left: … }}` cannot be scoped to a breakpoint — put the value in an
  arbitrary class instead, or it will leak onto phones. (The exception is a
  block that is already `hidden desktop:block`; nothing inside it renders on a
  phone, so inline offsets there are safe.)
- **Type scales down**: `text-3xl lg:text-[48px]`, not one fixed size.
- **Tables become cards.** A row that positions cells by x-coordinate has no
  phone equivalent; stack the same fields vertically instead.
- **Test at 375px** (small phone) before calling anything done. The page body
  must never scroll horizontally.

## Naming conventions

### Files

| Type | Convention | Example |
|---|---|---|
| Component | PascalCase | `Header.tsx`, `ArticleCard.tsx` |
| Page folder | PascalCase | `pages/LawyerProfile/` |
| Page entry | `index.tsx` inside the page folder | `pages/Home/index.tsx` |
| Page sub-section | PascalCase, under `sections/` | `pages/Home/sections/Hero.tsx` |
| Hook | camelCase, `use` prefix | `hooks/useAuth.ts` |
| Context | PascalCase, `Context` suffix | `contexts/AuthContext.tsx` |
| Util | camelCase | `utils/cn.ts`, `utils/content.ts` |
| Type-only file | camelCase, `.types.ts` suffix | `utils/content.types.ts` |

### Code

- **Components**: PascalCase (`function LawyerCard() {}`)
- **Props type**: component name + `Props` (`LawyerCardProps`)
- **Functions/variables**: camelCase
- **Constants** (module-level, fixed values): UPPER_SNAKE_CASE
- **Booleans**: prefix `is` / `has` / `should` (`isOpen`, `hasError`)
- **Event handlers**: prefix `handle` internally, `on` in props (`onClose` prop → `handleClose` internally)
- **CSS/Tailwind**: no custom class names for one-off styling — use Tailwind utilities inline; only name a class when it's a shared, reusable pattern

### Folders

- Group by page/feature, not by file type — a page's `sections/` and local `components/` live next to its `index.tsx`
- Shared, cross-page components go in `src/components/ui/` (primitives), `src/components/layout/` (header/footer), `src/components/auth/` (modals), or `src/components/article/` (article list/detail, shared by Everyday Law / Law Updates / Law Blogs)

### Git

- **Branches**: `feature/<short-description>` (e.g. `feature/lawyer-profile-list`)
- **Commits**: Conventional Commits, lowercase, imperative mood, no period —
  `<type>: <description>`
  - Types: `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `test`
  - e.g. `feat: add lawyer profile list`, `fix: header collapse height on scroll`
- One branch per section/row in the table below — merge to `main` via PR when
  the section is done, don't stack unrelated sections on one branch.

### Branch map (who branches off what)

Kerr's shared-component branches must merge to `main` first — Justin/El's
Modal- and Article-dependent branches are based on top of those, not on `main`
directly.

**Kerr — shared primitives (build + merge first)**

| Section | Branch |
|---|---|
| Modal primitive | `feature/modal-primitive` |
| Article primitives (Card/List/Detail) | `feature/article-primitives` |

**Justin**

| Section | Branch |
|---|---|
| Home: "Got a legal question?" | `feature/home-legal-question-cta` |
| Home: Register Account (modal) | `feature/home-register-modal` |
| Everyday Law: Landing Page + Card List | `feature/everyday-law-landing` |
| Everyday Law: "Read More" (detail) | `feature/everyday-law-detail` |
| Law Practice (category grid, cases handled, location, awards, notable members) | `feature/law-practice` |
| Law Office: Our Law Office, Our Lawyers | `feature/law-office-main` |

**El**

| Section | Branch |
|---|---|
| Home: Sign-in (modal) | `feature/home-signin-modal` |
| Lawyers Profile (landing): list, ratings, schedule | `feature/lawyer-profile-landing` |
| Lawyers Profile (see more): Lawyer Schedule | `feature/lawyer-profile-schedule` |
| Law Updates + Law Updates (see more) | `feature/law-updates` |
| Law Blogs + Law Blogs (see more) | `feature/law-blogs` |
| "Share this page" modal | `feature/share-page-modal` |
| Law Office: Our Staff, Office Location | `feature/law-office-staff-location` |

**Kerr — page work (after primitives merged)**

| Section | Branch |
|---|---|
| Lawyers Profile (see more): CV, Ratings & Feedbacks | `feature/lawyer-profile-cv` |
| Contact Us | `feature/contact-us` |
| About Us (main, values, mission, vision, promise) | `feature/about-us` |

## Adding real photos

Drop exported images into `src/assets/`, then wire them up in
`src/utils/images.ts` (replace `undefined` with an `import`). Until then, every
photo slot renders a palette-tinted gradient placeholder so layout is intact.

## Related docs

- `docs/PROGRESS.md` — per-person checklist of what's built
