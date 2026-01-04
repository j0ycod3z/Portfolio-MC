# 🚀 Deploy to Vercel - Step by Step Guide

## Prerequisites ✅
- [x] Node.js installed
- [x] Portfolio built and tested locally
- [ ] GitHub account
- [ ] Vercel account (free)

## Method 1: Deploy via Vercel CLI (Fastest) ⚡

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Navigate to your project
```bash
cd "C:\Users\MC\Desktop\Joshua Crucis\Portfolio-MC\portfolio-react"
```

### Step 3: Login to Vercel
```bash
vercel login
```
- Choose your preferred login method (GitHub, GitLab, Bitbucket, or Email)
- Follow the browser prompts to authenticate

### Step 4: Deploy!
```bash
vercel
```

**Follow the prompts:**
1. **Set up and deploy?** → Yes
2. **Which scope?** → Select your account
3. **Link to existing project?** → No
4. **Project name?** → `joshua-crucis-portfolio` (or your preferred name)
5. **In which directory is your code located?** → `./`
6. **Want to override the settings?** → No

### Step 5: Deploy to Production
```bash
vercel --prod
```

Your site will be live at: `https://your-project-name.vercel.app`

---

## Method 2: Deploy via Vercel Dashboard (Recommended for GitHub) 🌐

### Step 1: Push to GitHub

**Initialize Git (if not already done):**
```bash
cd "C:\Users\MC\Desktop\Joshua Crucis\Portfolio-MC\portfolio-react"
git init
git add .
git commit -m "Initial commit - React portfolio"
```

**Create GitHub Repository:**
1. Go to [github.com/new](https://github.com/new)
2. Name: `portfolio-react`
3. Click "Create repository"

**Push to GitHub:**
```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio-react.git
git branch -M main
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" or "Log In"
3. Choose "Continue with GitHub"
4. Click "Import Project"
5. Select your `portfolio-react` repository

### Step 3: Configure Project

**Framework Preset:** Vite
**Build Command:** `npm run build`
**Output Directory:** `dist`
**Install Command:** `npm install`

Click "Deploy"!

### Step 4: Wait for Deployment

Vercel will:
- Install dependencies
- Build your project
- Deploy to their global CDN
- Generate a URL

**Deployment time:** ~2-3 minutes

---

## Method 3: Deploy via Drag & Drop 📦

### Step 1: Build Locally
```bash
cd "C:\Users\MC\Desktop\Joshua Crucis\Portfolio-MC\portfolio-react"
npm run build
```

### Step 2: Upload to Vercel
1. Go to [vercel.com/new](https://vercel.com/new)
2. Drag and drop the `dist` folder
3. Wait for deployment

---

## 🎯 Quick Start Commands

**Option A: Using Vercel CLI**
```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to project
cd "C:\Users\MC\Desktop\Joshua Crucis\Portfolio-MC\portfolio-react"

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

**Option B: Build and manual upload**
```bash
cd "C:\Users\MC\Desktop\Joshua Crucis\Portfolio-MC\portfolio-react"
npm run build
# Then drag 'dist' folder to vercel.com/new
```

---

## ⚙️ Configuration Files

Your project now includes:

### `vercel.json`
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### `.vercelignore`
```
node_modules
.git
*.log
```

---

## 🌟 After Deployment

### Your Live URLs:
- **Preview:** `https://portfolio-react-xxx.vercel.app`
- **Production:** `https://your-domain.vercel.app`

### Automatic Features:
✅ SSL Certificate (HTTPS)
✅ Global CDN
✅ Automatic deployments on Git push
✅ Preview URLs for each commit
✅ Analytics
✅ Fast loading worldwide

---

## 🎨 Custom Domain (Optional)

### Add Your Own Domain:

1. Go to your project in Vercel Dashboard
2. Click "Settings" → "Domains"
3. Add your domain (e.g., `joshuacrucis.com`)
4. Update DNS records as shown
5. Wait for verification (5-10 minutes)

**Recommended domains:**
- joshuacrucis.com
- joshua-crucis.dev
- jcrucis.com

---

## 🔄 Update Your Portfolio

After initial deployment, any changes are easy:

### If using GitHub:
```bash
git add .
git commit -m "Update portfolio"
git push
```
→ Vercel automatically rebuilds and deploys!

### If using Vercel CLI:
```bash
vercel --prod
```

---

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Assets Not Loading
- Check image paths use `/assets/` not `./assets/`
- Ensure all files are in `public/assets/`

### 404 Errors
- Verify `vercel.json` includes rewrites configuration
- Check SPA routing settings

---

## 📊 Monitor Your Site

### Vercel Dashboard Features:
- **Analytics:** View visitor stats
- **Logs:** Debug deployment issues
- **Speed Insights:** Performance metrics
- **Comments:** Team feedback on previews

---

## ✅ Pre-Deployment Checklist

- [x] All images loading correctly
- [x] No console errors
- [x] Mobile responsive
- [x] All links working
- [x] CV/Resume accessible
- [x] Contact info correct
- [x] Social links verified
- [ ] Build succeeds locally
- [ ] Environment variables set (if any)
- [ ] Custom domain ready (optional)

---

## 🎉 You're Ready!

Choose your preferred method above and deploy in minutes!

**Recommended:** Method 1 (Vercel CLI) for speed
**Best for beginners:** Method 2 (GitHub + Dashboard) for automatic updates

---

## 📞 Need Help?

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Support:** [vercel.com/support](https://vercel.com/support)
- **Community:** [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

---

**Your portfolio is production-ready! Let's deploy it! 🚀**

