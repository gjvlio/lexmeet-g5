# LexMeet — Rizal Law Office (Group 5)

Hi-fi implementation of the LexMeet UI/UX Figma design. Built with **Vite +
React + TypeScript + Tailwind CSS**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build
```

## Project structure

```
src/
├── assets/                 # exported Figma images (see assets/README.md)
├── components/
│   ├── layout/             # Header, Footer
│   └── ui/                 # GlassCard, Button, Photo, Orb, SectionLabel, ScalesIcon
├── contexts/               # React contexts (auth, etc.) — to come
├── hooks/                  # custom hooks — to come
├── pages/
│   └── Home/               # Home page + its sections
│       └── sections/       # Hero, Services, Practice, LawUpdates, EverydayLaw
└── utils/                  # cn(), content.ts (copy), images.ts (asset map)
```

## Design system

The palette, type, and effects live in `tailwind.config.js` and `src/index.css`:

| Token   | Hex       | Use                          |
| ------- | --------- | ---------------------------- |
| ink     | `#1C1F11` | darkest text / hero base     |
| deep    | `#2B2D19` | footer, gradient ends        |
| forest  | `#3D4223` | practice tiles               |
| olive   | `#555B2F` | primary buttons, accents     |
| sage    | `#949A6A` | strokes, rules, orbs         |
| mist    | `#DDDEC6` | muted text on dark, fills    |
| cream   | `#F0F1E4` | page background, light text  |

- **Fonts:** Spectral (display/headings), IBM Plex Sans (body/UI) — loaded via
  Google Fonts in `index.html`.
- **`.glass` / `.glass-dark`** utility classes = the frosted panels.
- **Gradients** (`bg-hero-fade`, `bg-service-card`, `bg-olive-pill`, …) are
  defined in the Tailwind theme.

## Adding real photos

Drop exported images into `src/assets/`, then wire them up in
`src/utils/images.ts` (replace `undefined` with an `import`). Until then, every
photo slot renders a palette-tinted gradient placeholder so layout is intact.

## Next pages

`App.tsx` has routes stubbed for Login, Lawyer Profile, Blogs, and Updates —
build each under `src/pages/<Name>/` reusing the `ui/` components.
