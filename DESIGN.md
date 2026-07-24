---
name: Industrial Excellence
colors:
  surface: '#F9F9F6'
  surface-dim: '#f0eee8'
  surface-bright: '#F9F9F6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f4ee'
  surface-container: '#F2EFE9'
  surface-container-high: '#ebe8e0'
  surface-container-highest: '#e3e0d8'
  on-surface: '#151816'
  on-surface-variant: '#4f5450'
  inverse-surface: '#2d312e'
  inverse-on-surface: '#f5f3ed'
  outline: '#737975'
  outline-variant: '#c2c9c4'
  surface-tint: '#51625a'
  primary: '#122A1C'
  on-primary: '#ffffff'
  primary-container: '#1a3424'
  on-primary-container: '#819389'
  inverse-primary: '#b8cbc0'
  secondary: '#D4AF37'
  on-secondary: '#ffffff'
  secondary-container: '#f5e9c6'
  on-secondary-container: '#745c00'
  tertiary: '#200e0e'
  on-tertiary: '#ffffff'
  tertiary-container: '#372222'
  on-tertiary-container: '#a68787'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e7dc'
  primary-fixed-dim: '#b8cbc0'
  on-primary-fixed: '#0f1f18'
  on-primary-fixed-variant: '#3a4a42'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#fedad9'
  tertiary-fixed-dim: '#e1bebe'
  on-tertiary-fixed: '#2a1616'
  on-tertiary-fixed-variant: '#594140'
  background: '#F9F9F6'
  on-background: '#151816'
  surface-variant: '#e3e0d8'
  deep-forest: '#122A1C'
  industrial-gold: '#D4AF37'
  slate-gray: '#4F5450'
  steel-border: '#E2E2DC'
  paper-white: '#F9F9F6'
typography:
  headline-xl:
    fontFamily: Archivo
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Archivo
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Archivo
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Archivo
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: 'Plus Jakarta Sans'
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: 'Plus Jakarta Sans'
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: 'Plus Jakarta Sans'
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
  mono-data:
    fontFamily: 'Space Mono'
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.02em
spacing:
  base: 8px
  grid-margin: 48px
  grid-gutter: 24px
  section-padding: 120px
  max-width: 1440px
---

## Brand & Style

The design system is engineered for the FMCG manufacturing sector, embodying an **Industrial Sophistication** aesthetic. It moves away from consumer-grade softness, instead embracing the authoritative, disciplined nature of B2B commerce and large-scale production.

The style is rooted in **Swiss-Modernism**, characterized by:
- **Structural Integrity:** A rigid adherence to grid systems and alignment.
- **High-Contrast Hierarchy:** Commanding typography and stark value shifts to guide the eye.
- **Precision Engineering:** Sharp edges, thin "technical" strokes, and a complete absence of decorative flourishes or "organic" curves.
- **Premium Utility:** A professional interface that feels like a high-end command center—functional yet prestigious.

Targeting stakeholders in logistics, supply chain, and manufacturing, the UI evokes stability, scale, and uncompromising quality.

## Colors

The palette is a refined "Agro-Industrial Hybrid," balancing the clean precision of B2B manufacturing with the organic warmth of food-grade purity. It anchors the brand in premium agricultural processing without feeling clinical.

- **Primary (Deep Forest Green - #122A1C):** A rich, organic dark green used for headers, heavy-duty backgrounds, and primary actions. It represents the agricultural foundation, growth, and stability.
- **Secondary (Refined Champagne Gold - #D4AF37):** A premium metallic gold accent used sparingly for key conversion points, status indicators, or "premium" labels. It symbolizes the high quality and purity of refined oils.
- **Neutral/Background (Alabaster White - #F9F9F6):** A soft, premium warm white used as the main background. This maintains an airy feel while avoiding clinical sterility, ensuring the food-oriented FMCG products look appealing.
- **Warm Cream (#F2EFE9):** Used for secondary backgrounds, cards, and footer sections to define structure while maintaining warmth.
- **Accents (Warm Gray Border - #E2E2DC):** Used for thin borders and dividers to maintain a technical, modernist layout without introducing cold steel tones.

## Typography

This system utilizes a highly specialized, three-tiered typography system engineered to balance heavy industrial power, premium FMCG presentation, and scientific documentation.

- **Archivo (Headings):** Selected for its raw, heavy-duty grotesque letterforms. In bold and extra-bold weights with tight letter-spacing, it evokes the physical presence of stamped steel plates, machinery engravings, and industrial stencils.
- **Plus Jakarta Sans (Body/UI):** A premium, crisp geometric sans-serif that ensures absolute readability and clean corporate prestige across both B2B documentation and consumer product sections.
- **Space Mono (Technical Data):** A fixed-width monospaced font used for chemical parameters, laboratory grades, and metrics. This directly conveys laboratory-level scientific precision.

**Key Rule:** All auxiliary labels and small tags must use `label-caps` (set in Plus Jakarta Sans) to reinforce the industrial, documented aesthetic. Use the boldest weights of Archivo for maximum contrast in section headings.

## Layout & Spacing

The layout is a **Fixed-Column Grid** system that prioritizes alignment and structural balance.

- **Desktop (12 Columns):** 48px margins with 24px gutters. Content is strictly snapped to the grid. 
- **The "Technical Margin":** Significant whitespace (120px+) is used between major sections to prevent the UI from feeling "crowded," maintaining a premium, gallery-like experience.
- **Modular Blocks:** Use an 8px base unit for all internal component spacing.
- **Reflow:** On Tablet (8 columns) and Mobile (4 columns), the margins reduce to 24px and 16px respectively, but the "sharp" container logic remains consistent.

## Elevation & Depth

In alignment with the Swiss Industrial aesthetic, we reject soft shadows and blurring.

- **Flat Layering:** Depth is conveyed through color blocking (e.g., a Deep Forest section adjacent to an Alabaster White section).
- **Hard Borders:** Instead of shadows, use 1px or 2px solid strokes (`#E2E2DC`) to define containers.
- **High-Contrast Insets:** For form fields or interactive areas, use a slightly darker neutral background (`#F2EFE9`) to suggest "indented" physical space.
- **Zero Shadow Policy:** No drop shadows are permitted on cards or buttons. If an element needs to "pop," use a bold 2px black or primary-colored border.

## Shapes

The shape language is strictly **Sharp (0px)**. 

Every UI element—from buttons to cards to input fields—must feature 90-degree corners. This evokes the precision of industrial cutting, architectural blueprints, and heavy machinery. There are no exceptions for "softening" the UI.

## Components

### Buttons
- **Primary:** Solid Deep Forest background, white text, 0px radius. On hover, background shifts to Industrial Gold.
- **Secondary:** 2px Deep Forest border, transparent background, Deep Forest text.
- **Interaction:** Use a subtle "flash" transition (0.1s) to mimic electrical switches rather than slow, organic fades.

### Cards
- No shadows. Use a 1px `steel-border` for inactive states.
- On hover, the border thickness increases to 2px or changes to Industrial Gold. 
- Content inside cards should be strictly aligned to a sub-grid.

### Input Fields
- Underlined or fully boxed with a 1px gray border.
- Active state uses a 2px Deep Forest bottom border.
- Error states use a sharp red strike, no "soft" red glows.

### Chips & Tags
- Rectangular, sharp corners. 
- Use `label-caps` typography. 
- Backgrounds should be highly desaturated unless indicating a critical status.

### Data Tables
- The heart of the B2B experience. High-density, sharp dividers, and `mono-data` typography for numerical values. 
- Zebra striping should be extremely subtle (`#F9F9F9`).