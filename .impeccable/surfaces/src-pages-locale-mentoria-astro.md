---
version: 1
slug: src-pages-locale-mentoria-astro
primary_target: src/pages/[locale]/mentoria.astro
related_targets: []
---
# Mentorship

Mode: Persuade. Audience: business owners carrying too much operational work. Action: arrange a free fit conversation over WhatsApp. Portuguese, English and Spanish; price stays BRL 697. Four individual one-hour meetings over 30 days. Multiple priorities can be addressed; completion follows implementation progress in the client's business. Paid tools are separate.

## Direction contract

THESIS: Technology becomes approachable through guided work on the owner's actual business priorities; an editorial invitation paired with a clear offer.

OWN-WORLD: Inherit DESIGN.md's deep black, neutral smoke glass, white light, Libre Caslon Display and Inter. Glass belongs to the offer and closing invitation; open rows carry the story.

STORY: Recognize the operational burden, understand the personalized approach, inspect the free conversation and four-week journey, meet Wesley, understand the fee, then arrange a conversation.

FIRST VIEWPORT: Left-aligned serif positioning in two tones with an immediately available WhatsApp action. Right-aligned illuminated glass offer with duration, format, sessions, hours and total price. On phones the offer follows copy and actions. The offer's edge brightens on hover; native disclosure rows reveal practical answers with keyboard access.

FORM: User-selected positioning-and-offer composition, code-first, approved in the conversation before implementation. No new visual world or generated imagery.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Implementation and verification

The shipped page inherits the existing black/glass/white palette, font families, controls, focus ring and reduced-motion policy. Its longer positioning headline uses a scoped 2.375–4rem display range, with 7/5/4rem section spacing. These are surface-specific roles, not replacements for the home-page typography recorded in DESIGN.md.

Adding the localized mentorship navigation link moves the shared desktop-navigation breakpoint from 1024px to 1200px to keep the header comfortable; smaller widths retain the native disclosure menu. This intentional integration delta supersedes the earlier navigation breakpoint described in DESIGN.md; the incumbent design-system files are preserved.

Evidence: `.impeccable/review/mentorship/` contains production captures for Portuguese, English and Spanish at 1440px desktop and 390px mobile. `capture-geometry.json` confirms loaded fonts and footer bounds at the document end. `qa-results.json` records 15 overflow checks (320, 390, 768, 1024 and 1440px), keyboard FAQ and menu interaction, locale switching, short redirect and home navigation. Astro check, ESLint and all six build-output tests pass. No new shipping raster assets were added. The mechanical detector ran once and raised advisory typography-ramp findings; these are assessed against the scoped typography and existing home CSS rather than changing the incumbent system.
