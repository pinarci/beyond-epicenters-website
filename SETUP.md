# Setup Guide - Beyond Epicenters Website

## Quick Start Guide

Follow these steps to get the landing page up and running on your local machine.

### Step 1: Install Node.js Dependencies

```bash
npm install
```

This will install all required packages including Next.js, React, Tailwind CSS, and other dependencies.

### Step 2: Prepare Your Poster Images

You have 4 poster images in your workspace. Move them to the `public/images/` folder with these names:

1. **poster1.jpg** - Used as the hero section background
2. **poster2.jpg** - Used in the About section
3. **poster3.jpg** - (Optional) Reserved for future sections
4. **poster4.jpg** - (Optional) Reserved for future sections

**Recommended image specifications:**
- Format: JPG or WebP
- Hero image: 1920x1080px or larger (16:9 aspect ratio)
- About section image: 800x600px or larger
- All images should be optimized (< 500KB each)

### Step 3: Run Development Server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

The page will auto-refresh as you make changes. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Step 4: Build for Production

When ready to deploy:

```bash
npm run build
npm start
```

## Folder Structure After Setup

```
beyond-epicenters-website/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Consortium.tsx
│   ├── Team.tsx
│   └── Footer.tsx
├── public/
│   └── images/
│       ├── poster1.jpg (Hero background) ⭐
│       ├── poster2.jpg (About section) ⭐
│       ├── poster3.jpg
│       └── poster4.jpg
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── .eslintrc.json
├── .gitignore
├── README.md
└── SETUP.md (this file)
```

## Customization Options

### 1. Change Hero Image

Edit `components/Hero.tsx` and look for this line:
```tsx
src="/images/poster1.jpg"
```
Replace with your preferred image path.

### 2. Change About Section Image

Edit `components/About.tsx` and look for:
```tsx
src="/images/poster2.jpg"
```

### 3. Update Colors

Edit `tailwind.config.js` and modify the color values:
```javascript
colors: {
  'eu-blue': '#0052CC',      // Main blue
  'eu-dark-blue': '#003D99', // Darker blue
  'slate-navy': '#1E293B',   // Dark color
}
```

### 4. Update Content

**Hero Section**: Edit `components/Hero.tsx`
- Change headline, sub-headline, and badge text

**About Section**: Edit `components/About.tsx`
- Update project description
- Modify feature bullet points

**Team Members**: Edit `components/Team.tsx`
- Add/remove team members
- Update names, titles, and bios

**Partners**: Edit `components/Consortium.tsx`
- Add or remove partner countries
- Update descriptions

### 5. Change Fonts

Open `app/layout.tsx` and look for the Google Fonts link. Replace "Inter" with another font family (e.g., "Poppins", "Roboto").

## Deployment Options

### Option 1: Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to connect your project.

### Option 2: Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Go to [Netlify](https://netlify.com) and connect your GitHub repository

3. Set Build Command: `npm run build`
4. Set Publish Directory: `.next`

### Option 3: Docker

1. Build the Docker image:
   ```bash
   docker build -t beyond-epicenters .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 beyond-epicenters
   ```

3. Or use Docker Compose:
   ```bash
   docker-compose up
   ```

### Option 4: Self-Hosted (Ubuntu/Debian)

```bash
# SSH into your server
ssh user@your-server.com

# Clone the repository
git clone <your-repo-url>
cd beyond-epicenters-website

# Install Node.js (if not installed)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install dependencies and build
npm install
npm run build

# Install PM2 for process management
npm install -g pm2

# Start the app
pm2 start npm --name "beyond-epicenters" -- start

# Save PM2 config
pm2 save

# Enable restart on system boot
pm2 startup
```

## Common Issues & Solutions

### Issue: Images Not Loading

**Solution**: Ensure images are in the correct folder:
```
public/images/poster1.jpg
public/images/poster2.jpg
```

And the file names exactly match what's in the component files.

### Issue: Tailwind Classes Not Applying

**Solution**: Ensure `tailwind.config.js` has correct content paths:
```javascript
content: [
  './app/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
]
```

### Issue: Port 3000 Already in Use

**Solution**: Run on a different port:
```bash
npm run dev -- -p 3001
```

### Issue: Module Not Found Errors

**Solution**: Clear cache and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

## Performance Optimization Tips

1. **Image Optimization**: Compress images before adding to public folder
   - Use tools like [TinyPNG](https://tinypng.com/) or [ImageOptim](https://imageoptim.com/)
   
2. **Code Splitting**: The app automatically code-splits using Next.js

3. **Lazy Loading**: Images use lazy loading by default

4. **CSS Minification**: Tailwind CSS automatically minifies

5. **Font Optimization**: Google Fonts are preloaded

## Testing Before Deployment

1. **Desktop Browsers**: Test in Chrome, Firefox, Safari, Edge
2. **Mobile**: Test on iPhone, Android devices or use DevTools
3. **Accessibility**: Use accessibility checkers or [WAVE](https://wave.webaim.org/)
4. **Performance**: Use [PageSpeed Insights](https://pagespeed.web.dev/)

## Environment Variables (Optional)

Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Maintenance & Updates

### Update Dependencies
```bash
npm update
```

### Check for Vulnerabilities
```bash
npm audit
```

### Fix Vulnerabilities
```bash
npm audit fix
```

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Need Help?

- Check the [README.md](README.md) for general information
- Review component files for specific customization
- Check Next.js error messages in the terminal
- Use browser DevTools for frontend debugging

## Next Steps

1. ✅ Add poster images to `public/images/`
2. ✅ Run `npm install`
3. ✅ Run `npm run dev`
4. ✅ Open [http://localhost:3000](http://localhost:3000)
5. ✅ Customize content as needed
6. ✅ Test on mobile devices
7. ✅ Deploy to your hosting platform

---

**Happy coding! 🚀**

Last updated: May 2026
