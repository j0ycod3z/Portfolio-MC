# Portfolio Setup Guide

## 🚀 Quick Setup (5 minutes)

### Step 1: Install Dependencies
```bash
cd portfolio-react
npm install
```

### Step 2: Verify Assets
Make sure these files are in `public/assets/`:
- ✅ Profile images (profile.png, profile (1-4).png)
- ✅ CV/Resume PDF (Crucis_CV.pdf)
- ✅ Project images (project-1.png, project-2.png, project-3.png)
- ✅ Icons (github.png, linkedin.png, email.png, etc.)

### Step 3: Run Development Server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📝 Customization Checklist

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`)
   - [ ] Update name and title
   - [ ] Update description
   - [ ] Update social media links
   - [ ] Update email

2. **About Section** (`src/components/About.jsx`)
   - [ ] Update bio and description
   - [ ] Update education details
   - [ ] Update stats (years of experience, etc.)

3. **Experience Section** (`src/components/Experience.jsx`)
   - [ ] Add/update work experiences
   - [ ] Update skills and technologies
   - [ ] Update proficiency levels

4. **Projects Section** (`src/components/Projects.jsx`)
   - [ ] Add your projects
   - [ ] Update project descriptions
   - [ ] Add GitHub links
   - [ ] Add project images

5. **Certifications Section** (`src/components/Certifications.jsx`)
   - [ ] Add/update certifications
   - [ ] Update dates and issuers
   - [ ] Update categories

6. **Achievements Section** (`src/components/Achievements.jsx`)
   - [ ] Add awards and competitions
   - [ ] Update seminars attended
   - [ ] Update years and descriptions

7. **Contact Section** (`src/components/Contact.jsx`)
   - [ ] Update email address
   - [ ] Update phone number
   - [ ] Update location
   - [ ] Update social media links

---

## 🎨 Styling Customization

### Change Color Scheme

Edit `src/App.css` - CSS variables section:

```css
:root {
  --primary-color: #6366f1;      /* Main brand color */
  --secondary-color: #8b5cf6;    /* Secondary accent */
  --accent-color: #ec4899;       /* Highlight color */
  --bg-dark: #0f172a;            /* Dark background */
  --bg-darker: #020617;          /* Darker background */
  --text-light: #f8fafc;         /* Light text */
  --text-gray: #94a3b8;          /* Gray text */
  --card-bg: #1e293b;            /* Card background */
  --border-color: #334155;       /* Border color */
}
```

### Popular Color Schemes

**Blue Tech (Current)**
```css
--primary-color: #6366f1;
--secondary-color: #8b5cf6;
--accent-color: #ec4899;
```

**Green Tech**
```css
--primary-color: #10b981;
--secondary-color: #14b8a6;
--accent-color: #06b6d4;
```

**Purple Luxury**
```css
--primary-color: #8b5cf6;
--secondary-color: #a855f7;
--accent-color: #d946ef;
```

**Orange Energy**
```css
--primary-color: #f59e0b;
--secondary-color: #f97316;
--accent-color: #ef4444;
```

---

## 📸 Adding New Assets

### Profile Images
1. Add to `public/assets/`
2. Update path in `Hero.jsx` or `About.jsx`
3. Recommended size: 500x500px, optimized

### Project Images
1. Add to `public/assets/`
2. Update in `Projects.jsx`
3. Recommended size: 800x600px, optimized

### CV/Resume
1. Add PDF to `public/assets/`
2. Update link in `Hero.jsx`:
   ```jsx
   <a href="./assets/YourCV.pdf" ...>
   ```

---

## 🔧 Advanced Configuration

### Add Google Analytics

1. Get tracking ID from Google Analytics
2. Add to `index.html` in `<head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### Add Favicon

1. Generate favicon at [favicon.io](https://favicon.io)
2. Add files to `public/`
3. Update `index.html`:
```html
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
```

### SEO Optimization

Update `index.html`:
```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Joshua Joy Crucis - Software Engineer & AI Specialist. Portfolio showcasing projects, experience, and certifications." />
  <meta name="keywords" content="Software Engineer, AI Specialist, Full Stack Developer, React, Python, Cloud Architecture" />
  <meta name="author" content="Joshua Joy Crucis" />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Joshua Joy Crucis - Portfolio" />
  <meta property="og:description" content="Software Engineer & AI Specialist Portfolio" />
  <meta property="og:image" content="/assets/profile.png" />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Joshua Joy Crucis - Portfolio" />
  <meta name="twitter:description" content="Software Engineer & AI Specialist Portfolio" />
  
  <title>Joshua Joy Crucis - Portfolio</title>
</head>
```

---

## 🐛 Common Issues

### Issue: Assets not loading
**Solution:** 
- Check file paths use `./assets/` or `/assets/`
- Verify files exist in `public/assets/`
- Clear browser cache

### Issue: Animations not working
**Solution:**
- Check Framer Motion is installed: `npm list framer-motion`
- Reinstall if needed: `npm install framer-motion`

### Issue: Build fails
**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Or on Windows PowerShell:
Remove-Item -Recurse -Force node_modules, package-lock.json
npm install
```

### Issue: Slow performance
**Solution:**
- Optimize images (use WebP, compress)
- Check bundle size: `npm run build`
- Use lazy loading for images

---

## 📦 Build for Production

```bash
# Build
npm run build

# Preview build locally
npm run preview

# Check build size
npm run build -- --mode production
```

The `dist` folder contains your production-ready files.

---

## 🚀 Deploy

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

**Quick Deploy to Vercel:**
```bash
npm install -g vercel
vercel
```

---

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

## 💡 Tips

1. **Test on multiple devices** - Use Chrome DevTools device emulation
2. **Check accessibility** - Run Lighthouse audit
3. **Optimize images** - Use tools like TinyPNG or Squoosh
4. **Keep dependencies updated** - Run `npm outdated` regularly
5. **Use Git** - Commit changes frequently

---

## 🆘 Need Help?

- Check the console for errors (F12 in browser)
- Read error messages carefully
- Search the issue on Stack Overflow
- Check GitHub Issues for Vite/React

---

**Happy coding! 🎉**

