# Unit.Cloud Brand Style Guide

## Brand Identity Overview

Unit.Cloud is a modern IT service company specializing in comprehensive technology solutions. Our brand embodies professionalism, reliability, and innovation through a carefully crafted visual identity that balances technical expertise with approachable service.

## Color Palette

### Primary Colors

| Color | Hex Code | Usage | Description |
|-------|----------|-------|-------------|
| **Slate Gray** | `#687F96` | Primary text, borders, subtle backgrounds | Professional, trustworthy, sophisticated |
| **Uranian Blue** | `#A5D8FF` | Accent elements, highlights, CTAs | Modern, approachable, tech-forward |
| **Yellow Green** | `#C0D162` | Success states, positive indicators | Fresh, growth-oriented, energetic |
| **English Violet** | `#3F3047` | Headings, primary text, dark elements | Elegant, authoritative, premium |
| **Engineering Orange** | `#BA2D0B` | Alerts, warnings, accent highlights | Bold, attention-grabbing, confident |

### Color Usage Guidelines

- **Slate Gray**: Use for body text, subtle borders, and secondary elements
- **Uranian Blue**: Primary accent color for buttons, links, and interactive elements
- **Yellow Green**: Success messages, positive feedback, and growth indicators
- **English Violet**: All headings (H1-H6) and primary text elements
- **Engineering Orange**: Error states, warnings, and high-priority alerts

### Gradient Combinations

- **Brand Gradient**: Uranian Blue → Slate Gray (135deg)
- **Accent Gradient**: Yellow Green → Engineering Orange (135deg)
- **Dark Gradient**: English Violet → Slate Gray (135deg)

## Typography System

### Font Families

#### Primary Fonts
- **Jura** (Heading Font)
  - Modern, geometric sans-serif
  - Weights: 300, 400, 500, 600, 700
  - Usage: All headings (H1-H6), buttons, navigation
  - Characteristics: Clean, professional, tech-forward

- **Slabo 13px** (Body Font)
  - Readable serif
  - Weight: 400
  - Usage: Body text, paragraphs, descriptions
  - Characteristics: Highly readable, traditional, trustworthy

- **Andika** (Alternative Font)
  - Clean, humanist sans-serif
  - Weights: 400, 700
  - Usage: UI elements, labels, secondary text
  - Characteristics: Friendly, approachable, versatile

### Typography Hierarchy

#### Headings
```css
h1 {
  font-family: Jura;
  font-size: 3.5rem;
  font-weight: 700;
  color: #3F3047;
  line-height: 1.2;
  letter-spacing: -0.025em;
}

h2 {
  font-family: Jura;
  font-size: 2.5rem;
  font-weight: 600;
  color: #3F3047;
  line-height: 1.2;
  letter-spacing: -0.025em;
}

h3 {
  font-family: Jura;
  font-size: 1.875rem;
  font-weight: 600;
  color: #3F3047;
  line-height: 1.2;
  letter-spacing: -0.025em;
}
```

#### Body Text
```css
.body-text {
  font-family: Slabo 13px;
  font-size: 13px;
  line-height: 1.6;
  color: #687F96;
}
```

#### UI Elements
```css
.ui-text {
  font-family: Andika;
  font-weight: 400;
  color: #3F3047;
}
```

## Usage Examples

### Headers
- **Main Headlines**: Jura, 700 weight, English Violet
- **Section Headers**: Jura, 600 weight, English Violet
- **Subheadings**: Jura, 500 weight, Slate Gray

### Body Text
- **Paragraphs**: Slabo 13px, 13px size, Slate Gray
- **Descriptions**: Slabo 13px, 13px size, Slate Gray
- **Captions**: Andika, 400 weight, Slate Gray

### UI Elements
- **Buttons**: Jura, 600 weight
- **Navigation**: Jura, 500 weight
- **Form Labels**: Andika, 400 weight
- **Status Messages**: Andika, 400 weight

## Spacing and Layout Principles

### Spacing Scale
- **Micro**: 4px (0.25rem)
- **Small**: 8px (0.5rem)
- **Medium**: 16px (1rem)
- **Large**: 24px (1.5rem)
- **XLarge**: 32px (2rem)
- **XXLarge**: 48px (3rem)

### Layout Guidelines
- **Container Max Width**: 1280px (80rem)
- **Grid Gutter**: 24px (1.5rem)
- **Section Padding**: 80px (5rem) vertical
- **Card Padding**: 24px (1.5rem)
- **Button Padding**: 12px 32px (0.75rem 2rem)

## Component Styles

### Buttons

#### Primary Button
```css
.btn-primary {
  background: linear-gradient(135deg, #A5D8FF 0%, #687F96 100%);
  color: white;
  font-family: Jura;
  font-weight: 600;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  border: none;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(165, 216, 255, 0.3);
}
```

#### Secondary Button
```css
.btn-secondary {
  background: transparent;
  color: #3F3047;
  font-family: Jura;
  font-weight: 600;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  border: 2px solid #3F3047;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: #3F3047;
  color: white;
  transform: translateY(-2px);
}
```

### Cards
```css
.card-brand {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(104, 127, 150, 0.1);
  transition: all 0.3s ease;
}

.card-brand:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  transform: translateY(-4px);
}
```

## Implementation Notes

### CSS Custom Properties
All brand colors and fonts are available as CSS custom properties:
```css
:root {
  --slate-gray: #687F96;
  --uranian-blue: #A5D8FF;
  --yellow-green: #C0D162;
  --english-violet: #3F3047;
  --engineering-orange: #BA2D0B;
  
  --font-heading: var(--font-jura);
  --font-body: var(--font-slabo);
  --font-alternative: var(--font-andika);
}
```

### Tailwind CSS Classes
Custom utility classes are available:
- `.text-slate-gray`, `.text-uranian-blue`, etc.
- `.bg-slate-gray`, `.bg-uranian-blue`, etc.
- `.border-slate-gray`, `.border-uranian-blue`, etc.
- `.gradient-brand`, `.gradient-accent`, `.gradient-dark`
- `.font-heading`, `.font-body`, `.font-alternative`

## Brand Consistency Checklist

- [ ] All headings use Jura font
- [ ] Body text uses Slabo 13px font
- [ ] UI elements use Andika font
- [ ] Primary accent color is Uranian Blue
- [ ] Headings are in English Violet
- [ ] Body text is in Slate Gray
- [ ] Buttons follow primary/secondary patterns
- [ ] Cards use consistent border radius and shadows
- [ ] Spacing follows the defined scale
- [ ] Gradients are used appropriately

## Accessibility Considerations

- **Color Contrast**: All text meets WCAG AA standards
- **Font Sizes**: Minimum 13px for body text
- **Line Height**: 1.6 for optimal readability
- **Focus States**: Clear visual indicators for interactive elements
- **Color Independence**: Information is not conveyed by color alone

---

*This style guide should be referenced for all design decisions and implementations to ensure brand consistency across all touchpoints.*

