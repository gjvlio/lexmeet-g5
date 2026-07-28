# LexMeet — Rizal Law Office (Group 5)

Hi-fi implementation of the LexMeet UI/UX Figma design. Built with **Vite +
React + TypeScript + Tailwind CSS**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build
```

## Docs

Project structure, projected directory layout, design tokens, naming
conventions, and commit/branch conventions all live in
**[`docs/DEV_GUIDE.md`](docs/DEV_GUIDE.md)** — read that first.

Per-person build checklist: [`docs/PROGRESS.md`](docs/PROGRESS.md).

## Adding real photos

Drop exported images into `src/assets/`, then wire them up in
`src/utils/images.ts` (replace `undefined` with an `import`). Until then, every
photo slot renders a palette-tinted gradient placeholder so layout is intact.

## Next pages

`App.tsx` has routes stubbed for Login, Lawyer Profile, Blogs, and Updates —
build each under `src/pages/<Name>/` reusing the `ui/` components.
