---
name: NeonSwitch Canary
colors:
  surface: '#131318'
  surface-dim: '#131318'
  surface-bright: '#39383e'
  surface-container-lowest: '#0e0e13'
  surface-container-low: '#1b1b20'
  surface-container: '#1f1f25'
  surface-container-high: '#2a292f'
  surface-container-highest: '#35343a'
  on-surface: '#e4e1e9'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e4e1e9'
  inverse-on-surface: '#303036'
  outline: '#849495'
  outline-variant: '#3a494b'
  surface-tint: '#00dce6'
  primary: '#e3fdff'
  on-primary: '#00373a'
  primary-container: '#00f3ff'
  on-primary-container: '#006b71'
  inverse-primary: '#00696f'
  secondary: '#ffabf3'
  on-secondary: '#5b005b'
  secondary-container: '#fe00fe'
  on-secondary-container: '#500050'
  tertiary: '#fff8eb'
  on-tertiary: '#3b2f00'
  tertiary-container: '#ffd94b'
  on-tertiary-container: '#735e00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6ff6ff'
  primary-fixed-dim: '#00dce6'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f53'
  secondary-fixed: '#ffd7f5'
  secondary-fixed-dim: '#ffabf3'
  on-secondary-fixed: '#380038'
  on-secondary-fixed-variant: '#810081'
  tertiary-fixed: '#ffe17a'
  tertiary-fixed-dim: '#ecc300'
  on-tertiary-fixed: '#231b00'
  on-tertiary-fixed-variant: '#554500'
  background: '#131318'
  on-background: '#e4e1e9'
  surface-variant: '#35343a'
typography:
  display-lg:
    fontFamily: JetBrains Mono
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: JetBrains Mono
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  headline-md:
    fontFamily: JetBrains Mono
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.1em
  mono-data:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 48px
  grid-columns: '12'
---

## Brand & Style
This design system embodies a retro-futuristic, high-fidelity cyberpunk aesthetic. It is engineered for power users, developers, and gamers who inhabit digital spaces that feel like high-performance cockpits. The brand personality is aggressive, precise, and electric.

The style is a hybrid of **High-Contrast Dark Mode** and **Glassmorphism**, specifically optimized for OLED displays. It utilizes "Light Packets" (accented interactive elements) and "Active Rails" (glowing structural guides) to lead the eye. The UI should evoke the feeling of a Head-Up Display (HUD) projected onto a sleek, dark surface, where every interaction triggers a calculated pulse of energy.

## Colors
The palette is rooted in a "Void" black to maximize the brilliance of the neon accents. 

- **Void Backgrounds:** Use `#050508` for base layers to ensure infinite contrast.
- **Active Rails:** Use Primary Cyan for structural elements that indicate active data flows.
- **Light Packets:** Use Secondary Magenta and Tertiary Yellow for high-priority alerts, CTAs, and state changes.
- **Dead Rails:** Use `#2D2D3A` for disabled or inactive structural components, ensuring they recede into the background without disappearing.
- **Glow Intensity:** Interactive states must utilize CSS `drop-shadow` or `box-shadow` using the accent color with a blur radius of 8px-12px at 0.6 opacity to simulate light emission.

## Typography
The typography system balances the technical precision of **JetBrains Mono** for HUD elements and data with the high legibility of **Inter** for long-form content.

- **HUD Labels:** Use `label-caps` for all navigational items and small identifiers.
- **Data Display:** Use `mono-data` for numbers, timestamps, and system logs.
- **Headlines:** Must be uppercase when using JetBrains Mono to reinforce the "Terminal" aesthetic.
- **Mobile Scaling:** For mobile, reduce `display-lg` to 32px and `headline-lg` to 24px. Maintain letter spacing to ensure readability against dark backgrounds.

## Layout & Spacing
This design system utilizes a **Rigid Grid** philosophy. Elements must align to a 4px baseline grid to maintain the "engineered" feel.

- **Desktop:** 12-column grid with 16px gutters. UI panels should occupy specific column spans (e.g., Sidebars span 3, Main Content spans 9).
- **Active Rails:** Use 1px or 2px borders on the left or top of containers to simulate "wiring" between grid modules.
- **Safe Zones:** High-contrast designs require breathing room. Ensure a minimum of 24px padding within all major UI panels to prevent visual crowding.

## Elevation & Depth
Depth is created through **Luminance and Opacity** rather than traditional shadows.

- **Tier 1 (Base):** Void Background (`#050508`).
- **Tier 2 (Panels):** Surface Deep (`#0A0A0F`) with a 1px `Dead Rail` border.
- **Tier 3 (Floating):** Surface Rail (`#16161D`) with a 1px Primary Cyan border and a subtle 10px backdrop blur.
- **Active States:** Use a neon glow (`box-shadow: 0 0 15px rgba(0, 243, 255, 0.4)`) to indicate the highest level of elevation or focus.

## Shapes
Despite the sharp typography, UI panels use **Rounded** (0.5rem) corners to provide a "hardware-molded" feel, contrasting with the razor-thin 1px borders.

- **Panels:** 0.5rem (8px) radius.
- **Buttons/Inputs:** 0.5rem (8px) radius.
- **Status Indicators:** 0px (Sharp) or 100% (Circular) depending on the context of the data.

## Components

### Buttons
- **Primary:** Solid Cyan background with Black text. On hover, add a 12px Cyan outer glow.
- **Secondary:** Transparent background, 1px Magenta border, Magenta text. Hover state fills the background with 10% Magenta opacity.
- **Ghost:** No border, White text. Hover state adds a "Dead Rail" background.

### Input Fields
- Dark backgrounds (`#0A0A0F`) with a 1px bottom border (Rail). The border turns Primary Cyan when focused, accompanied by a subtle glow. Use Monospace font for input text.

### Chips & Tags
- Rectangular with 4px corners. Use "Active Rail" colors for categories. Include a 4px solid square icon on the left to indicate status.

### Cards & Panels
- Use a semi-transparent surface (`rgba(10, 10, 15, 0.8)`) with backdrop-blur (12px). Top-left corners can optionally feature a "ID Tag" using `label-caps` typography nested in a small offset box.

### Active Rails (Visual Decor)
- Vertical or horizontal lines (1px) that connect components. Use Cyan for "Flowing Data" and Grey for "Disconnected/Static."