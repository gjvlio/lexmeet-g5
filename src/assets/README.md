# assets

Drop the exported Figma images here and import them where the components
reference `import.meta.env` placeholders. Suggested filenames (match the
`PHOTOS` map in `src/utils/images.ts`):

- `hero.jpg`            — hero library / desk photo
- `service-assist.png` — lawyer on phone (cut-out)
- `service-docs.png`   — laptop / documents
- `service-consult.png`— video consultation
- `service-works.png`  — team meeting
- `practice-family.jpg`
- `practice-civil.jpg`
- `practice-criminal.jpg`
- `practice-labor.jpg`
- `updates-featured.jpg`

Until you add them, `src/utils/images.ts` falls back to a tinted gradient
placeholder so the layout still renders correctly.
