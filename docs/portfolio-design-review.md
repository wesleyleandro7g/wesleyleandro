# Portfolio visual refinement

## Scope and intent

Refine the existing dark portfolio for technical leaders, recruiters, and prospective clients with equal weight. Preserve verified content, project claims, translations, contact channels, static Astro delivery, and the existing self-hosted typefaces.

The home page gives projects and outcomes a stronger hierarchy, with an editorial two-column introduction, a featured Penzack entry, an open project list, a two-column biography, a career ledger, technical capability rows, and a more prominent contact section. Work, case study, and writing pages share the same spacing, type hierarchy, navigation, and surfaces.

## Shared visual decisions

- Graphite background: #111416.
- Primary text: #eef0ef.
- Supporting text: #a4adb3.
- Surface: #1a1e21.
- Accent and keyboard focus: #a2c6ee.
- Dividers: #30363a.
- Featured project: #19232b, with supporting text #b7c7d3.
- Maximum content width: 1184 px.
- Inter remains the existing text and display family. Keeping it is deliberate continuity with the incumbent identity; the mechanical detector's two font-popularity warnings are accepted for that reason.
- Large display type identifies the person and role; headings and project names guide scanning. Monospace remains available for data and existing contact fields.
- A single short hero entrance replaces repeated section animations. Content is visible by default, and reduced-motion preferences are respected.
- The mobile header keeps navigation visible. Controls retain keyboard focus styling, a skip link, native disclosure behavior, and clipboard feedback.

## Verification

- pnpm check: no errors, warnings, or hints.
- pnpm lint: passed.
- pnpm test: all three existing content and translation tests passed.
- pnpm build: static production output built successfully.
- Browser checks cover all 21 localized content routes.
- Home layout checked at 320, 390, 481, 600, 768, 1024, 1280, and 1440 px in all three languages, with no horizontal overflow.
- Home, work, writing, and a case study visually inspected at desktop and mobile sizes.
- Verified contact disclosure by click and keyboard, Escape and focus restoration, outside-click dismissal, all four clipboard values, clipboard-denied feedback, language switching with query and hash preserved, skip navigation, reduced motion, and readable content with JavaScript disabled.
- No browser page errors occurred during these checks.
- One mechanical Impeccable scan completed. Its only findings were the two intentional Inter continuity warnings described above.

Local review captures and browser results are in .impeccable/review/. No external publication is part of this change.
