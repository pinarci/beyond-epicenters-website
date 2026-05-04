# Component Documentation

## Overview

This project uses modular, reusable React components built with Next.js and Tailwind CSS. Each component is self-contained and can be easily customized.

## Components

### 1. Hero Component (`components/Hero.tsx`)

**Purpose**: Main landing section with call-to-action

**Features**:
- Full-screen hero with background image
- Dark gradient overlay for text readability
- Animated scroll indicator
- Responsive badges/tags
- Smooth scroll button to About section

**Key Props**: None (uses static content)

**Customizable Elements**:
```typescript
// Change headline
"Beyond Epicenters"

// Change sub-headline
"Assessing Earthquake Vulnerability Through Economic and Social Networks"

// Change tagline
"A Holistic and Systemic Approach to Disaster Risk"

// Modify badges
🇪🇺 Funded by Horizon Europe (MSCA)
⏱️ 48-Month Project

// Change button text
"Discover the Project"

// Change background image
src="/images/poster1.jpg"
```

**Styling Classes**:
- Background: `bg-slate-navy` (dark navy background)
- Text: `text-white` with various sizes
- Button: `bg-eu-blue hover:bg-eu-dark-blue`

---

### 2. About Component (`components/About.tsx`)

**Purpose**: Project vision and overview section

**Features**:
- Two-column layout (text + image)
- Feature highlights with checkmarks
- Responsive image with hover effects
- Clean typography hierarchy

**Key Props**: None (uses static content)

**Customizable Elements**:
```typescript
// Main content
"This 48-month project aims to analyze..."

// Feature highlights
"Systemic Analysis"
"Regional Focus"
"Policy Impact"

// Section image
src="/images/poster2.jpg"
```

**Layout**:
- Mobile: Stacked vertically
- Desktop: Two columns with 12 gap units

---

### 3. Consortium Component (`components/Consortium.tsx`)

**Purpose**: Display partner countries and project statistics

**Features**:
- Grid layout for partner cards
- Responsive card design
- Statistics section
- Hover animations

**Data Structure**:
```typescript
interface Partner {
  name: string
  role: string
  country: string
  flag: string
  description: string
}
```

**Customizable Elements**:
- Add/remove partner countries
- Update partner descriptions
- Modify statistics numbers
- Change grid columns

**Partner Countries**:
- 🇹🇷 Turkey (Coordinator)
- 🇩🇪 Germany
- 🇵🇹 Portugal
- 🇳🇴 Norway
- 🇺🇦 Ukraine
- 🇲🇦 Morocco
- 🇦🇿 Azerbaijan

---

### 4. Team Component (`components/Team.tsx`)

**Purpose**: Showcase leadership team members

**Features**:
- Profile cards with modern design
- Title and role badges
- Social media links (placeholder)
- Hover scale animation

**Data Structure**:
```typescript
interface TeamMember {
  id: string
  name: string
  title: string
  role: string
  bio: string
  image: string
}
```

**Current Team**:
1. Prof. Dr. Nazire Nergiz Dinçer
   - Project Coordinator
   - Principal Investigator
   
2. Prof. Dr. Ayça Tekin-Koru
   - Senior Researcher
   - TEDUsTAM Director

**Adding Team Members**:
1. Add new object to `team` array
2. Fill in all properties
3. Add profile image to `public/images/`
4. Update image path in component

---

### 5. Footer Component (`components/Footer.tsx`)

**Purpose**: Site footer with links and information

**Features**:
- Four-column layout on desktop
- Quick links section
- Contact information
- Legal links
- Horizon Europe funding attribution

**Sections**:
1. **About**: Project description
2. **Quick Links**: Navigation links
3. **Resources**: Documentation and tools
4. **Contact**: Organization information

**Customizable Elements**:
- Contact email
- Organization address
- Quick links URLs
- Copyright year (auto-updated)
- Funding information

---

## Component Import in Main Page

```typescript
// app/page.tsx
import Hero from '@/components/Hero'
import About from '@/components/About'
import Consortium from '@/components/Consortium'
import Team from '@/components/Team'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Consortium />
      <Team />
      <Footer />
    </main>
  )
}
```

## Styling System

### Tailwind CSS Classes Used

**Colors**:
- `bg-eu-blue` - Primary EU blue (#0052CC)
- `bg-eu-dark-blue` - Dark EU blue (#003D99)
- `bg-slate-navy` - Dark navy (#1E293B)
- `bg-white` - White
- `bg-gray-50` - Light gray
- `bg-gray-200` - Medium gray

**Typography**:
- `text-slate-navy` - Dark text
- `text-white` - White text
- `text-gray-700` - Medium dark gray
- `text-gray-300` - Light gray
- Font sizes: `text-sm`, `text-lg`, `text-xl`, `text-2xl`, `text-4xl`, etc.

**Spacing**:
- Padding: `p-4`, `p-6`, `p-8`
- Margin: `m-4`, `m-6`, `mb-4`, `gap-4`
- Section padding: `py-20 md:py-32`

**Responsive Design**:
- Mobile first approach
- Breakpoints: `md:` (768px), `lg:` (1024px), `xl:` (1280px)

---

## Adding New Sections

To add a new section to the landing page:

1. **Create new component** in `components/NewSection.tsx`
2. **Add to main page** in `app/page.tsx`
3. **Use consistent styling** with existing components
4. **Follow naming conventions**
5. **Test responsiveness** on mobile and desktop

### Template for New Section:

```typescript
'use client'

import React from 'react'

export default function NewSection() {
  return (
    <section id="new-section" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-navy mb-4">
            Section Title
          </h2>
          <div className="h-1 w-20 bg-eu-blue mx-auto"></div>
        </div>

        {/* Section Content */}
        <div>
          {/* Your content here */}
        </div>
      </div>
    </section>
  )
}
```

---

## Animations & Interactions

### Hover Effects
- Cards scale up slightly: `hover:scale-105`
- Shadow increases: `hover:shadow-lg`
- Color transitions: `transition-colors`

### Scroll Animations
- Smooth scroll to sections
- Bounce animation on scroll indicator

### Responsive Behaviors
- Images hide/show based on screen size
- Grid columns adjust per breakpoint
- Padding and font sizes scale

---

## Accessibility Features

- Semantic HTML (`<section>`, `<article>`, etc.)
- ARIA labels for icons
- Keyboard navigation support
- Sufficient color contrast ratios
- Alt text for all images
- Proper heading hierarchy (h1 → h6)

---

## Performance Considerations

1. **Image Optimization**
   - Next.js Image component with lazy loading
   - Automatic WebP conversion
   - Responsive image sizing

2. **Code Splitting**
   - Components are lazy-loaded by Next.js
   - CSS is only loaded for visible content

3. **Bundle Size**
   - Minimal external dependencies
   - Tailwind CSS purges unused styles
   - No large animations or libraries

---

## Troubleshooting

### Component Not Rendering
- Check import path (should start with `@/components/`)
- Verify component export statement
- Clear `.next` cache and rebuild

### Styles Not Applying
- Ensure Tailwind config includes component directory
- Check class names for typos
- Clear PostCSS cache

### Images Not Loading
- Verify image files in `public/images/`
- Check file names match component paths
- Ensure images are in supported format (JPG, PNG, WebP)

### Build Errors
- Delete `node_modules` and reinstall
- Clear `.next` directory
- Check for TypeScript errors with `npm run build`

---

## Best Practices

1. **Keep components focused** - Each component does one thing well
2. **Use consistent spacing** - Follow Tailwind spacing scale
3. **Reuse color variables** - Use defined colors in tailwind.config.js
4. **Document changes** - Update README when modifying
5. **Test responsiveness** - Check on multiple screen sizes
6. **Optimize images** - Compress before adding to public folder
7. **Use TypeScript** - For type safety and IDE support

---

For more information, see:
- [README.md](README.md) - Project overview
- [SETUP.md](SETUP.md) - Installation instructions
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

