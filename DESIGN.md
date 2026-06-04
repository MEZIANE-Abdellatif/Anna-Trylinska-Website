---
name: Serene Juris
colors:
  surface: '#f9f9ff'
  surface-dim: '#d0daf0'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d9e3f9'
  on-surface: '#121c2c'
  on-surface-variant: '#414750'
  inverse-surface: '#273141'
  inverse-on-surface: '#ebf1ff'
  outline: '#727782'
  outline-variant: '#c1c7d2'
  surface-tint: '#1960a3'
  primary: '#005394'
  on-primary: '#ffffff'
  primary-container: '#2b6cb0'
  on-primary-container: '#e1ecff'
  inverse-primary: '#a2c9ff'
  secondary: '#295fa1'
  on-secondary: '#ffffff'
  secondary-container: '#85b5fd'
  on-secondary-container: '#004585'
  tertiary: '#475459'
  on-tertiary: '#ffffff'
  tertiary-container: '#5f6c72'
  on-tertiary-container: '#e0edf4'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d3e4ff'
  primary-fixed-dim: '#a2c9ff'
  on-primary-fixed: '#001c38'
  on-primary-fixed-variant: '#004881'
  secondary-fixed: '#d5e3ff'
  secondary-fixed-dim: '#a6c8ff'
  on-secondary-fixed: '#001c3b'
  on-secondary-fixed-variant: '#004787'
  tertiary-fixed: '#d8e4eb'
  tertiary-fixed-dim: '#bcc8cf'
  on-tertiary-fixed: '#111d22'
  on-tertiary-fixed-variant: '#3c494e'
  background: '#f9f9ff'
  on-background: '#121c2c'
  surface-variant: '#d9e3f9'
  background-white: '#FFFFFF'
  deep-navy: '#00447C'
  link-blue: '#13639E'
typography:
  headline-xl:
    fontFamily: sourceSerifFour
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: sourceSerifFour
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: sourceSerifFour
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
  headline-md:
    fontFamily: sourceSerifFour
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: workSans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: workSans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: workSans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  caption:
    fontFamily: workSans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  section-padding-desktop: 80px
  section-padding-mobile: 40px
---

## Brand & Style
The design system is crafted for a modern immigration law practice, balancing legal authority with a warm, welcoming presence. The personality is professional yet deeply human, aiming to reduce the anxiety associated with legal procedures through clarity and elegance.

The visual style is **Corporate / Modern** with a lean toward **Minimalism**. It utilizes generous white space to create a "breathing" interface, ensuring that complex legal information feels digestible. High-quality typography and a restrained color palette communicate sophistication, while soft edges and blue-tinted imagery maintain an approachable, empathetic tone.

## Colors
This design system uses a curated blue spectrum to establish trust. The **Primary Blue** is reserved for structural elements like navigation, headings, and iconography to guide the user's eye. The **Secondary Blue** provides a deeper, more grounded weight for high-interaction areas like buttons and the footer.

**Backgrounds** must remain pure white to maximize legibility and maintain an airy feel. For secondary backgrounds or "solid blue-tinted boxes," use the tertiary light blue or a 10% opacity overlay of the primary color on imagery. **Text** is rendered in a dark charcoal rather than pure black to soften the visual impact while maintaining high accessibility standards.

## Typography
The typographic hierarchy relies on the tension between a classic Serif and a functional Sans-serif. 

**Headlines** utilize **Source Serif 4**, providing a sturdy, authoritative, and literary feel suitable for a lawyer’s expertise. Large headings should use tighter letter spacing and bold weights to command attention.

**Body Text** utilizes **Work Sans**, chosen for its extreme legibility and neutral, modern character. It ensures that long-form legal explanations are easy to read across all devices. **Labels** and small metadata should use the Sans-serif in a semi-bold weight with slight tracking for increased clarity.

## Layout & Spacing
The system employs a **Fixed Grid** for desktop (12 columns) and a **Fluid Grid** for mobile (4 columns). The philosophy is "Generous White Space," meaning section margins and vertical padding should be larger than standard to evoke a sense of calm and order.

- **Desktop:** 1200px max-width container centered on the page. Use an 8px base grid for all component-level spacing.
- **Mobile:** Full-width with 20px side margins.
- **Vertical Spacing:** Use 80px or 120px gaps between major sections to prevent information density fatigue.

## Elevation & Depth
In alignment with the minimalist and clean aesthetic, this design system avoids heavy shadows. Depth is primarily achieved through **Tonal Layers** and **Low-contrast Outlines**.

- **Surfaces:** Use the Tertiary Blue (#EBF8FF) to create subtle "container" sections against the pure white background.
- **Shadows:** Only used on primary cards and floating action buttons. Shadows should be highly diffused: `0px 10px 30px rgba(43, 108, 176, 0.08)`.
- **Outlines:** Use a 1px border in a very light tint of the primary color for form fields and secondary cards to maintain structure without adding visual noise.

## Shapes
To reinforce the "warm and approachable" brand pillars, all interactive and container elements use a **Rounded** (0.5rem) corner radius. 

Avoid sharp 90-degree angles for UI elements. For specific "Call to Action" buttons or chips, a higher roundedness (Pill-shaped) may be used to differentiate them from static content containers. Solid blue-tinted image boxes must follow the standard 0.5rem roundedness to maintain consistency with the rest of the interface.

## Components
- **Buttons:** Primary buttons use the Secondary Blue (#1E5799) with white text. They should feature a subtle hover state where the background darkens slightly.
- **Input Fields:** Use a white background with a 1px border. On focus, the border should transition to the Primary Blue (#2B6CB0) with a soft outer glow.
- **Chips/Tags:** Used for legal categories (e.g., "Work Permit," "Permanent Residency"). These should use the Tertiary Blue background with Primary Blue text.
- **Image Boxes:** Never use standard placeholders. Use solid boxes filled with the Primary Blue at 80% opacity over a grayscale image, or a solid Primary Blue box with a subtle geometric pattern.
- **Cards:** Use a white background, 1px light blue border, and the soft ambient shadow defined in the Elevation section.
- **Footer:** A full-width block of Secondary Blue (#1E5799) with white typography, providing a "grounded" end to the user journey.