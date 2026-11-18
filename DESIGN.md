---
name: Wesley Leandro
description: Engineering portfolio in black, glass and white light
colors:
  background: "#050505"
  foreground: "oklch(0.95 0 0)"
  surface: "oklch(0.14 0 0)"
  landing-surface: "#101010"
  accent: "#e8e8e8"
  secondary: "oklch(0.18 0 0)"
  muted-foreground: "#a1a1a1"
  border: "oklch(0.2 0 0)"
  landing-border: "#ffffff17"
  ring: "#d6d6d6"
  glass-edge: "#ffffff1a"
  glass-edge-lit: "#ffffff38"
  white: "#fff"
  hero-secondary: "#b7b7b7"
typography:
  display:
    fontFamily: '"Libre Caslon Display", Georgia, serif'
    fontSize: "clamp(3.75rem, 6.1vw, 5.5rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  headline:
    fontFamily: '"Libre Caslon Display", Georgia, serif'
    fontSize: "clamp(2.25rem, 3.7vw, 3.25rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  title:
    fontFamily: '"Libre Caslon Display", Georgia, serif'
    fontSize: "2rem"
    fontWeight: 400
    letterSpacing: "-0.02em"
  body:
    fontFamily: '"Inter", sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.8
  control:
    fontFamily: '"Inter", sans-serif'
    fontSize: "0.875rem"
    fontWeight: 500
  label:
    fontFamily: '"JetBrains Mono", monospace'
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.3333333333
  project-metadata:
    fontFamily: '"JetBrains Mono", monospace'
    fontSize: "0.625rem"
    fontWeight: 400
rounded:
  md: "6px"
  lg: "10px"
  xl: "14px"
  panel: "16px"
  full: "9999px"
spacing:
  gap-sm: "0.75rem"
  gap-md: "1.5rem"
  gap-lg: "3rem"
  section-desktop: "6.5rem"
  section-tablet: "5rem"
  section-mobile: "4rem"
components:
  button-primary:
    textColor: "{colors.white}"
    typography: "{typography.control}"
    rounded: "{rounded.lg}"
    padding: "0.625rem 1.25rem"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    typography: "{typography.control}"
    rounded: "{rounded.lg}"
    padding: "0.625rem 1.25rem"
  button-text:
    backgroundColor: "transparent"
    textColor: "{colors.muted-foreground}"
    typography: "{typography.control}"
    rounded: "{rounded.lg}"
    padding: "0.625rem 0.75rem"
  navigation:
    height: "76px"
  language-select:
    backgroundColor: "#ffffff04"
    textColor: "{colors.foreground}"
    rounded: "{rounded.lg}"
    padding: "0 0.75rem"
    height: "40px"
  capability-chip:
    backgroundColor: "#ffffff04"
    textColor: "#bcbcbc"
    rounded: "{rounded.md}"
    padding: "0.375rem 0.625rem"
  content-card:
    rounded: "{rounded.xl}"
    padding: "1.5rem"
  glass-project:
    rounded: "{rounded.panel}"
    padding: "1.5rem 1.75rem"
---

# Design System: Wesley Leandro

## Overview

**Creative North Star: "Black, glass and white light"**

Black, glass and white light presents Wesley Leandro's engineering portfolio with deep dark surfaces, editorial headlines and precise technical detail. The user explicitly requested Resend's glass, white glows and typographic character. The implementation expresses that reference through original CSS and real project links, without copied branding or new raster artwork.

The shared foundation is neutral black, self-hosted Inter, monochrome controls and translucent navigation. The localized landing pages add self-hosted Libre Caslon Display as an open alternative to the reference's Domaine, illuminated project panes and spacious editorial sections. This serif hierarchy is scoped to the landing; it is not a claim about secondary-page headings. Recruiters and technical leaders encounter readable professional evidence through restrained contrast and deliberate depth.

**Key Characteristics:**
- Deep black and neutral white, with smoke-glass surfaces.
- Editorial landing headlines paired with clear sans-serif reading text.
- White light identifies project links and contact surfaces.
- Technical metadata uses restrained monospace typography.
- Responsive layouts and visible keyboard focus preserve access to the same content.

## Colors

The palette pairs near-black depth with neutral smoke, soft reading whites and translucent white edges. The frontmatter records the normative colors; the sidecar carries gradients and illumination.

### Primary

- **Optical White** (`foreground`): shared reading text and primary emphasis.
- **Soft Silver** (`accent`): links, selection and restrained emphasis.
- **Pure White** (`white`): primary glass-action labels and active navigation.

### Neutral

- **Deep Black** (`background`): the shared page canvas.
- **Charcoal Surface** (`surface`): shared panels and secondary content.
- **Landing Smoke** (`landing-surface`): the landing's local surface override.
- **Soft Charcoal** (`secondary`): shared muted and secondary fills.
- **Reading Gray** (`muted-foreground`): descriptions, metadata and navigation at rest.
- **Quiet Border** (`border`): shared dividers; **Translucent Divider** (`landing-border`) is its landing override.
- **Focus Silver** (`ring`): keyboard focus outlines.
- **Glass Edge** (`glass-edge`) and **Lit Glass Edge** (`glass-edge-lit`): resting and emphasized pane outlines.
- **Headline Gray** (`hero-secondary`): the second phrase of the landing hero.

**The Neutral Light Rule.** Use white illumination and neutral smoke for the landing identity; keep chromatic utility tokens out of its decorative palette.

## Typography

**Display Font:** Libre Caslon Display, with Georgia and serif fallbacks.
**Body Font:** Inter, with sans-serif fallback.
**Label/Mono Font:** JetBrains Mono, with monospace fallback.

All three families are self-hosted through Fontsource imports. Libre Caslon Display supplies the editorial contrast requested by the reference direction; Inter keeps evidence and controls direct. Mono identifies stacks, dates and technical metadata. The hero's introductory stack sentence itself remains Inter.

### Hierarchy

- **Display:** the frontmatter display role is the wide-screen hero. It uses normal weight and a tight line box. Responsive replacements are documented below.
- **Headline:** the frontmatter headline role applies to landing section headings. The impact section deliberately uses a compact Inter heading instead.
- **Title:** the frontmatter title role belongs to selected-work project titles. Hero project names use Inter at (1.375rem), weight (500), tracking (-.025em).
- **Body:** the body role describes the hero introduction, limited to (63ch) on desktop. Other reading text uses Inter, commonly (.875rem) or (1rem), with contextual line heights from (1.7) to (1.85).
- **Control:** Inter medium supports action labels. Desktop navigation uses (.8125rem); language controls use (.75rem).
- **Label:** compact mono is used for dates and stack lists; hero-pane stacks use the smaller project-metadata role. The small section-label component also uses uppercase and wide tracking.
- **Metric:** impact values use Inter at (2.25rem), line height (1.1), tracking (-.04em), normal weight and tabular numerals; compact layouts use (2rem).

**The Scoped Editorial Rule.** Keep the serif hierarchy within the implemented landing roles; shared body text and controls remain Inter.

## Layout

The header and landing share a maximum container width of (1248px), normally with horizontal padding (1.5rem). The fixed header is (76px) high; landing content offsets it by the same amount. Below (480px), container padding becomes (1.25rem). Anchors use a shared scroll margin of (6rem).

Landing section rhythm uses the three section spacing tokens: desktop, tablet below (1024px), and mobile below (768px). Hero, impact, selected work, insights and contact have deliberate local spacing adjustments. Preserve these relationships instead of forcing every section to equal height.

The desktop hero has columns (1.5fr / 1fr), gap (3rem). Below (1200px), it tightens to (1.35fr / 1fr) with gap (2rem). Below (1024px), copy and project links stack; project links form three columns, then one column below (768px). Desktop project panes have staggered horizontal offsets and slight rotations; tablet and mobile reset them to straight, readable panes.

The hero display changes at the same viewport thresholds: below (1200px), `clamp(3.75rem, 6.2vw, 4.75rem)`; below (1024px), `clamp(4.25rem, 8.5vw, 5.5rem)`; below (768px), `clamp(3.375rem, 8.5vw, 4.75rem)`; below (480px), `clamp(3rem, 12.5vw, 3.75rem)`. Contact headlines use `clamp(2.75rem, 5vw, 4.5rem)`.

Impact evidence forms four columns, becoming two below (768px). Focus rows shift from three columns to two below (768px), then vertical rows below (480px). About pairs a sticky heading with reading text (1fr / 1.7fr), reverting to normal block flow below (768px). Leadership and insights use three-column grids from (768px). Desktop navigation starts at (1024px); smaller screens use a native disclosure menu.

## Elevation & Depth

Depth is a hybrid of tonal layers, translucent gradients, white specular borders and controlled shadows. The shared glass fill runs at (145deg); hero panes use their own (120deg) gradient. Broad CSS radial lights illuminate the project stack and contact panel. They are intentional identity elements requested by the user, not a generic decoration preset. Blur belongs to the header and project panes, with opaque fallbacks where backdrop filtering is unsupported.

### Shadow Vocabulary

- **Glass inset:** `inset 0 1px 0 #ffffff14` catches the upper edge of the brand, glass cards and contact panel.
- **Action bevel:** `inset 0 1px 0 #ffffff26, 0 4px 12px #0005` lifts the primary hero and contact actions.
- **Menu separation:** `0 20px 40px #0008` separates the mobile menu from content.
- **Status light:** `0 0 9px #ffffff55` lights the small availability dot.

**The Useful Glass Rule.** Glass and glow are intentional parts of the user-requested identity: anchor them to project evidence, navigation and contact surfaces.

## Shapes

Controls and brand initials use gently rounded corners via the large radius token; hero project panes and contact panels use the panel radius. Shared content cards use the extra-large radius. Capability chips and compact contact controls use the medium radius. Small status and timeline marks are circular. Thin translucent borders and one-pixel top reflections define panels without heavy outlines. Existing pill silhouettes remain on some secondary contact links and badges; the landing hero actions are rounded rectangles.

## Components

### Buttons

Quiet glass actions with clear labels and subtle state changes. The primary hero and email actions use the frontmatter geometry, a vertical white-alpha gradient, a thin translucent border and the action bevel. Their minimum height is (46px), with a contact override of (44px). Hover increases fill and edge brightness. The secondary hero action is transparent with a quiet edge; hover introduces a faint fill. The text action drops the visible border and uses muted text. Below (480px), hero labels use (.75rem) and smaller horizontal padding. All controls retain a visible keyboard outline (2px) offset by (4px).

### Chips

Capability tags are compact mono labels with the frontmatter fill, radius and padding, a quiet border and a very faint inset upper edge. They are informational labels, without fabricated selected or interactive states.

### Cards / Containers

Shared cards start from a neutral surface, border and extra-large radius. Within the landing they receive the glass gradient and inset highlight. Selected-work cards have desktop padding (2rem), (1.5rem) below (1024px), and (1.75rem) below (768px). A small white spotlight sits near the upper-right edge; hovering the containing link brightens the card border. Contact uses a larger panel with top illumination and centered content, padding (4.5rem), reduced to (2.5rem 1.5rem) below (768px).

### Inputs / Fields

The implemented fields are native selects, not text inputs. Language selection uses the frontmatter control style and preserves the current localized route. The contact-copy select uses a compact mono label, a medium radius, muted surface fill and minimum height (36px); its copy button has visible success feedback and a live status message. Preserve native selection behavior and keyboard outlines.

### Navigation

The fixed shared header uses a translucent black fill, blur (20px), and a faint bottom border. Its initials tile carries the inset highlight, followed by Wesley's full name. Desktop links are muted at rest, bright on hover/current page; the final contact link is a compact glass action. The mobile disclosure opens a smoke panel under the header; Escape, outside click and link activation close it. Mobile summary and language controls have minimum heights (40px).

### Illuminated Project Panes

These are real case-study links. Each pane has the panel radius, a glass fill, blur (16px), inset edge and narrow white reflection. Desktop resting rotations are (-4deg), (2deg) and (-2deg). Hover or keyboard focus advances a pane by (-5px), sharpens its border and raises its stacking order. Compact layouts use (-3px). The transition uses (450ms) and the shared ease-out curve for movement, with (300ms) edge/fill changes. Reduced motion removes pane movement and transitions. The hero introduction uses a single arrival animation (.7s); content is not hidden behind scroll-triggered animation.

## Do's and Don'ts

### Do:

- Do use the shared neutral tokens and landing-specific scope when extending this identity.
- Do reserve Libre Caslon Display for the implemented landing headline and project-title roles.
- Do use glass edges and broad white light to clarify useful interactive surfaces.
- Do keep technical metadata compact, readable and distinct from editorial headings.
- Do preserve keyboard focus, reduced-motion behavior and localized content when adapting components.

### Don't:

- Don't turn the requested glass and white light into colored decorative gradients.
- Don't apply the landing serif selectors indiscriminately to secondary pages.
- Don't copy Resend branding or replace real project evidence with decorative fake software.
- Don't use movement as the only signal that a project pane is interactive.
