# Portfolio visual refinement

## Scope

Restore the original visual identity from https://wesleyleandro.com/en and the local implementation preceding the editorial redesign (b39a4cd), preserving the current localized content, project details, metrics, role and period information, technical stacks, contact channels, and footer signature.

## Visual decisions

- Original near-black background, neutral surfaces, blue accent, Inter and JetBrains Mono.
- Original subtle 48px background grid, rounded controls, restrained cards, single-column hero, and career timeline.
- Original content width and spacing across home, work, case study, and writing pages.
- Preserve visible mobile navigation, skip navigation, localized navigation labels, keyboard focus, contact disclosure and clipboard behavior.
- Content remains visible without JavaScript. Only the hero has a short entrance, disabled for reduced motion.
- Section headings retain the current wording without adding decorative labels.

The mechanical detector's sole advisory is the background grid. It is intentionally retained because the user explicitly requested the original visual identity, and the published reference uses that grid.

## Verification

- `pnpm check`: no errors, warnings, or hints.
- `pnpm lint`, `pnpm test` (three existing content tests), and `pnpm build`: passed.
- Browser checks: home in English, Portuguese, and Spanish at 320, 390, 768, and 1440px; work, writing, and Penzack case study at 390 and 1440px. No horizontal overflow or JavaScript page errors.
- Desktop and mobile home captures visually inspected.
- Translation dictionaries and project data remain unchanged.

Changes are local; no publication was performed.
