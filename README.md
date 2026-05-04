# Beyond Epicenters - Horizon Europe MSCA Project Landing Page

A modern, responsive, and professional academic landing page for the "Beyond Epicenters: Assessing Earthquake Vulnerability Through Economic and Social Networks" project.

## Project Overview

This is a Next.js-based landing page showcasing a Horizon Europe Marie Skłodowska-Curie Actions (MSCA) funded research project focusing on:

- Analysis of cascading effects of earthquakes and tsunamis
- Economic and social network interdependencies
- Innovative risk assessment models
- Case studies from Turkey, Morocco, and Portugal

## Features

- ✨ Modern, responsive design built with Next.js 14 and Tailwind CSS
- 🎨 Beautiful hero section with poster image backgrounds
- 📱 100% mobile responsive layout
- ♿ Semantic HTML for accessibility
- 🎯 Smooth scrolling navigation
- 🏆 Professional profile cards for team members
- 🌍 Global partner consortium showcase
- 📊 Key project statistics
- 🔗 Easy-to-customize component structure

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3
- **Typography**: Inter font from Google Fonts
- **Icons**: Lucide React
- **Language**: TypeScript

## Project Structure

```
beyond-epicenters-website/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main landing page
│   ├── globals.css         # Global styles
│   └── favicon.ico
├── components/
│   ├── Hero.tsx            # Hero section with CTA
│   ├── About.tsx           # Project overview section
│   ├── Consortium.tsx      # Partner countries showcase
│   ├── Team.tsx            # Leadership team profiles
│   └── Footer.tsx          # Footer with links
├── public/
│   ├── images/
│   │   ├── poster1.jpg     # Hero background image
│   │   ├── poster2.jpg     # About section image
│   │   ├── poster3.jpg     # (Reserve)
│   │   └── poster4.jpg     # (Reserve)
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── .eslintrc.json
└── .gitignore
```

## Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation Steps

1. **Clone/Navigate to the project directory**
   ```bash
   cd beyond-epicenters-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Add poster images**
   Place your 4 poster images in the `public/images/` directory:
   - `poster1.jpg` - Hero background
   - `poster2.jpg` - About section
   - `poster3.jpg` - (Optional, for future use)
   - `poster4.jpg` - (Optional, for future use)

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:3000`

## Build for Production

```bash
npm run build
npm start
```

## Customization Guide

### Colors
Edit the color palette in `tailwind.config.js`:
- `eu-blue`: Main accent color (#0052CC)
- `eu-dark-blue`: Darker accent (#003D99)
- `slate-navy`: Primary dark color (#1E293B)

### Content Updates

#### Hero Section
Edit `components/Hero.tsx` to update:
- Headline and sub-headline
- Badges/tags
- Background image path

#### About Section
Edit `components/About.tsx` to modify:
- Section content
- Feature highlights
- Section image

#### Team Members
Edit `components/Team.tsx` to add/remove:
- Team member profiles
- Titles and roles
- Bio descriptions

#### Partner Countries
Edit `components/Consortium.tsx` to:
- Add/remove partner countries
- Update descriptions
- Modify partner grid layout

### Fonts
The project uses Inter from Google Fonts. To change fonts:
1. Update `app/layout.tsx` - change Google Fonts link
2. Update `tailwind.config.js` - update fontFamily configuration

## Image Optimization

All images use Next.js Image component for automatic optimization:
- Lazy loading
- Responsive image sizing
- WebP format support
- Automatic srcset generation

## Performance

- Lightweight and optimized (~40KB gzipped)
- Image lazy loading
- CSS-in-JS with Tailwind
- Fast FCP (First Contentful Paint)
- Smooth animations and transitions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
- **Netlify**: Connect your Git repository to Netlify
- **AWS Amplify**: Use AWS Amplify CLI
- **Docker**: Create a Dockerfile for containerization
- **Self-hosted**: Build and run on your own server

## Environment Variables

Create a `.env.local` file if needed (currently no required env vars):
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## API Integration

Currently, this is a static landing page. To add dynamic content:

1. **Database**: Integrate with Supabase, Firebase, or PostgreSQL
2. **CMS**: Connect to Contentful, Strapi, or Sanity
3. **Email**: Add email functionality with SendGrid or Nodemailer

## SEO Optimization

The project includes:
- Semantic HTML structure
- Meta tags and OpenGraph support
- Structured data ready
- Sitemap generation ready

To add more:
```bash
npm install next-sitemap
```

## Analytics

To add analytics:
```bash
npm install next-gtag
# or
npm install react-ga4
```

## Accessibility

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- High contrast colors
- Mobile accessible

## Contributing

To contribute improvements:
1. Create a new branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

This project is part of the Beyond Epicenters research project funded by Horizon Europe.

## Support & Contact

**Project Coordinator**: Prof. Dr. Nazire Nergiz Dinçer
**Organization**: TED University (TEDUsTAM)
**Email**: info@tedustam.org
**Location**: Ankara, Turkey

## Funding

This project has received funding from the European Union's Horizon Europe research and innovation programme under the Marie Skłodowska-Curie grant agreement.

---

**Last Updated**: May 2026
**Version**: 1.0.0
