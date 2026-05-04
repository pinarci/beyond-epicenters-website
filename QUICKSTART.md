# 🚀 Quick Start - Beyond Epicenters Landing Page

Welcome! This is a complete, production-ready Next.js landing page for the Beyond Epicenters Horizon Europe MSCA project.

## ⚡ 60-Second Setup

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# Visit http://localhost:3000
```

**Done!** The landing page is now live in your browser. 

## 📸 Add Your Poster Images

You have 4 poster images in your workspace. Move them to `public/images/`:

1. **poster1.jpg** → Hero section background
2. **poster2.jpg** → About section image  
3. **poster3.jpg** → (optional, for future)
4. **poster4.jpg** → (optional, for future)

Images should be optimized JPG or WebP format.

## 📁 What's Inside

```
beyond-epicenters-website/
├── components/          ← React components (Hero, About, Team, etc.)
├── app/                 ← Next.js pages and layouts
├── public/
│   └── images/         ← Your poster images go here
├── README.md           ← Full documentation
├── SETUP.md            ← Detailed setup guide
├── COMPONENTS.md       ← Component customization guide
└── package.json        ← Dependencies
```

## 🎨 Sections Included

1. **Hero Section** - Eye-catching introduction with CTA button
2. **About Section** - Project vision and key highlights
3. **Consortium Section** - 7 partner countries showcase
4. **Team Section** - Leadership profiles
5. **Footer** - Links, contact, funding info

## ✏️ Quick Customization

### Change Headline Text
Edit `components/Hero.tsx` - line 26:
```tsx
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
  Beyond Epicenters
</h1>
```

### Change Colors
Edit `tailwind.config.js`:
```javascript
'eu-blue': '#0052CC',      // Change this color
'eu-dark-blue': '#003D99', // Or this one
```

### Update Team Members
Edit `components/Team.tsx` - update the `team` array with new members

### Add Partner Countries
Edit `components/Consortium.tsx` - modify the `partners` array

## 🚀 Deployment (Choose One)

### Vercel (Easiest - Recommended)
```bash
npm i -g vercel
vercel
```

### Docker
```bash
docker build -t beyond-epicenters .
docker run -p 3000:3000 beyond-epicenters
```

### Netlify
1. Push to GitHub
2. Connect repo to Netlify
3. Build command: `npm run build`
4. Publish dir: `.next`

### Self-hosted (Linux/Ubuntu)
```bash
npm run build
npm start
```

## 📚 Full Documentation

- **[README.md](README.md)** - Complete overview and features
- **[SETUP.md](SETUP.md)** - Detailed installation & troubleshooting  
- **[COMPONENTS.md](COMPONENTS.md)** - Component reference

## 🛠️ Tech Stack

- **Next.js 14** - Modern React framework
- **Tailwind CSS 3** - Utility-first styling
- **TypeScript** - Type-safe code
- **Lucide React** - Beautiful icons
- **Google Fonts** - Inter typeface

## 🔧 Common Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Check code quality
npm update       # Update dependencies
npm audit        # Check for security issues
```

## 📱 Fully Responsive

✅ Mobile phones
✅ Tablets  
✅ Desktops
✅ Large screens

## ♿ Accessibility

✅ Semantic HTML
✅ ARIA labels
✅ Keyboard navigation
✅ High contrast colors
✅ Screen reader friendly

## 💡 Features

- ✨ Modern, professional design
- 🎯 Smooth scrolling navigation
- 🖼️ Optimized image loading
- 📊 Responsive grid layouts
- 🎨 Beautiful hover effects
- ⚡ Lightning-fast performance
- 🔍 SEO optimized
- 📱 Mobile-first approach

## ❓ Need Help?

**Issue**: Images not showing
- Solution: Ensure images are in `public/images/` with exact names `poster1.jpg`, `poster2.jpg`, etc.

**Issue**: Port 3000 in use
- Solution: Run on different port: `npm run dev -- -p 3001`

**Issue**: Styles not applying
- Solution: Clear cache and rebuild:
  ```bash
  rm -rf .next
  npm run dev
  ```

For more issues, check [SETUP.md](SETUP.md#common-issues--solutions)

## 📧 Contact Information

**Project**: Beyond Epicenters
**Organization**: TED University (TEDUsTAM)
**Location**: Ankara, Turkey
**Email**: info@tedustam.org

## 📋 Project Details

- **Duration**: 48 months
- **Partner Countries**: 7 (Turkey, Germany, Portugal, Norway, Ukraine, Morocco, Azerbaijan)
- **Case Studies**: Turkey, Morocco, Portugal
- **Focus**: Earthquake vulnerability through economic and social networks
- **Funding**: Horizon Europe Marie Skłodowska-Curie Actions (MSCA)

## 🎓 Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [React Docs](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)

## 📝 File Structure Guide

```
Landing page starts here:
app/page.tsx
    ↓
Imports 5 components:
├── components/Hero.tsx
├── components/About.tsx
├── components/Consortium.tsx
├── components/Team.tsx
└── components/Footer.tsx

Styled with:
- tailwind.config.js (colors and fonts)
- app/globals.css (global styles)
- Each component has Tailwind classes

Images go in:
- public/images/poster1.jpg (hero)
- public/images/poster2.jpg (about)
- etc.
```

## ✅ Next Steps

1. ✅ **Install dependencies**: `npm install`
2. ✅ **Add images**: Move poster images to `public/images/`
3. ✅ **Run locally**: `npm run dev`
4. ✅ **Customize**: Edit components as needed
5. ✅ **Test**: Check on mobile and desktop
6. ✅ **Deploy**: Choose your hosting platform

## 🌟 Pro Tips

- Use VS Code for best development experience
- Install "Tailwind CSS IntelliSense" extension
- Keep images under 500KB each
- Test on mobile before deploying
- Use [PageSpeed Insights](https://pagespeed.web.dev/) to check performance

---

**You're all set!** 🎉 Start with `npm install` and enjoy your new landing page.

For detailed guides, see README.md and SETUP.md in the project root.

Last updated: May 2026
