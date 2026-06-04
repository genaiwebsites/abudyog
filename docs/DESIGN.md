# Design System

Visual design tokens, theme tokens, and typography guidelines for the premium redesign of AB Udyog and Jeevan Rekha.

## Design System Tokens

### 1. Colors (OKLCH Color Strategy: Committed)
We use a sophisticated, high-contrast palette representing organic purity (deep forest green), premium quality/oil (warm gold), and modern stability (warm stone background). No cheap monotone palettes or SaaS-gray layouts.

| Token | Class / Variable | Color Value (HEX / OKLCH) | Intent / Use Case |
|---|---|---|---|
| **Primary** | `var(--color-primary)` | `#0b2e23` / `oklch(0.20 0.04 160)` | Deep Forest Green: brand anchor, headers, primary footers, B2C consumer sections. |
| **On Primary** | `var(--color-on-primary)`| `#ffffff` / `oklch(1.00 0.00 0)` | White text on primary surfaces. |
| **Secondary** | `var(--color-secondary)` | `#3c3836` / `oklch(0.28 0.01 45)` | Deep Charcoal: subtitles, text body secondary, B2B technical metadata headers. |
| **Accent/Gold** | `var(--color-accent)` | `#9a741c` / `oklch(0.53 0.12 85)` | Premium Oil Gold (WCAG 3:1+ compliant): call-to-actions, highlight badges, PPM indicators. |
| **Background** | `var(--color-background)` | `#faf8f5` / `oklch(0.98 0.004 70)`| Warm Off-White Stone: main editorial page background, clean and premium. |
| **Foreground** | `var(--color-foreground)` | `#1c1816` / `oklch(0.14 0.01 50)` | Rich Organic Black (WCAG 4.5:1+ contrast): body text, main titles. |
| **Border** | `var(--color-border)` | `#e8e4df` / `oklch(0.91 0.004 70)`| Light stone border: table dividers, product card borders. |
| **Ring** | `var(--color-ring)` | `#9a741c` / `oklch(0.53 0.12 85)` | Accent gold outline ring for focus states. |

### 2. Typography

We pair a high-end, classic serif (Playfair Display) for display headers with a sleek, readable sans-serif (Inter) for UI elements, labels, and technical specifications.

- **Display & Headings Font**: `Playfair Display`, serif. Adds editorial elegance, luxury, and history.
- **Body & Interface Font**: `Inter`, sans-serif. Ensures high readability, structured specs, and clean inputs.

#### Type Scale
- **Hero Title**: `text-5xl md:text-7xl font-serif tracking-tight leading-[1.1]`
- **Section Heading**: `text-3xl md:text-5xl font-serif tracking-tight leading-[1.2]`
- **Sub-heading / Card Title**: `text-xl md:text-2xl font-serif font-bold`
- **Body Text**: `text-sm md:text-base font-sans font-light leading-relaxed`
- **Technical Specs / Badges**: `text-xs font-mono font-bold uppercase tracking-wider`

### 3. Spacing Scale (4pt/8dp System)
Maintain a strict spacing rhythm for sections, containers, and elements:
- **Card Padding**: `p-6 md:p-8`
- **Component Gap**: `space-y-4` or `gap-6`
- **Section Padding**: `py-16 md:py-24`
- **Grid Layout**: Grid columns with `gap-8 md:gap-12` for breathing room.

### 4. Spacing Rules & Rhythm
- Vary spacing between content blocks to create visual rhythm.
- Avoid placing identical card grids repeatedly. Use asymmetrical structures (e.g. text block on left, large image on right, alternating).
- Cap body line length at `65-75ch` (`max-w-2xl` or `max-w-3xl`) to prevent line fatigue.

## Reusable Components

### 1. Header (Navbar)
- **Visuals**: Flowing glass header (`backdrop-blur-md`) with forest green border-b.
- **Interactions**: Clean menu selection hover transitions (150ms). Responsive menu overlay with smooth Framer Motion reveal.
- **Contrast**: Bold gold highlight on "Contact Us" or active link.

### 2. Product Showcase Card
- **Visuals**: Thin border (`border-border`), white/off-white background, subtle shadow on hover (no massive blur sheets).
- **Details**: Full technical parameters visible inside an expandable details panel or dynamic tab. No placeholder-only icons.

### 3. Technical Specs Table
- **Visuals**: Alternating light warm gray rows, bold uppercase column headers (`font-mono text-xs`), border dividers.
- **Use Case**: B2B product specifications (Wax, Lecithin, Gums, DORB grades).

### 4. Interactive Call to Action (CTA)
- **Visuals**: Primary button in forest green (`bg-primary text-white`), secondary outline button with border. Smooth lift animation on hover (`hover:-translate-y-0.5 transition-all`).

## Absolute Bans (AI Slop Checklist)
- **NO small uppercase wide-tracked kickers (eyebrows)** above every single header. Keep it clean or use bold numbers.
- **NO monotone gray layouts**. We drench key pages in deep forest green and gold.
- **NO decorative-only scroll animations**. All animations must fade in from a fully visible fallback and adapt for reduced motion.
- **NO emojis as icons**. Only SVG Lucide/Heroicons are permitted.
