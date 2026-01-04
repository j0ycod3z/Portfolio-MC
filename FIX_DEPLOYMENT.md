# 🔧 Fix Vercel Deployment - Quick Guide

## Problem
Vercel is showing the OLD HTML portfolio instead of the NEW React portfolio.

## Why?
You pushed the entire `Portfolio-MC` folder which contains:
- 📁 Root: Old HTML files (index.html, style.css)
- 📁 portfolio-react: New React app ✅

Vercel saw the old index.html first and deployed that.

---

## ✅ Solution 1: Push React Portfolio as Separate Repo (Recommended)

### Step 1: Create New GitHub Repository

1. Go to: https://github.com/new
2. Repository name: `portfolio-website` or `joshua-crucis-portfolio`
3. Description: "Modern React Portfolio"
4. Click "Create repository"

### Step 2: Push React Portfolio

I've already initialized Git for you! Now run:

```bash
cd "C:\Users\MC\Desktop\Joshua Crucis\Portfolio-MC\portfolio-react"

# Add your new GitHub repo (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel

**Option A: Via Dashboard**
1. Go to: https://vercel.com/dashboard
2. Click "Add New Project"
3. Import your NEW repository: `portfolio-website`
4. Settings (auto-detected):
   - Framework: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. Click "Deploy"

**Option B: Via CLI**
```bash
cd "C:\Users\MC\Desktop\Joshua Crucis\Portfolio-MC\portfolio-react"
vercel --prod
```

---

## ✅ Solution 2: Configure Existing Deployment

If you want to keep using your current GitHub repo:

### Step 1: Update Vercel Settings

1. Go to your Vercel project dashboard
2. Click "Settings"
3. Scroll to "Build & Development Settings"
4. Change **Root Directory** to: `portfolio-react`
5. Verify settings:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click "Save"

### Step 2: Redeploy

1. Go to "Deployments" tab
2. Click "..." on latest deployment
3. Click "Redeploy"

---

## 🚀 Quick Fix Commands

Choose your preferred solution:

### **Solution 1: New Repo (Cleanest)**
```bash
# In PowerShell
cd "C:\Users\MC\Desktop\Joshua Crucis\Portfolio-MC\portfolio-react"

# Create new repo on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
git branch -M main
git push -u origin main

# Deploy
vercel --prod
```

### **Solution 2: Use Subdirectory**
1. Vercel Dashboard → Your Project → Settings
2. Root Directory: `portfolio-react`
3. Save & Redeploy

---

## ✅ Verification Checklist

After redeploying, your site should have:

- ✅ Modern white/earth-toned design
- ✅ React components loading
- ✅ Profile picture visible
- ✅ Smooth animations
- ✅ "Graduated: 2024" in About section
- ✅ Social icons working
- ✅ All sections present

---

## 🎯 Recommended Folder Structure

**Current (Confusing):**
```
Portfolio-MC/
├── index.html          ← OLD (Vercel sees this first)
├── style.css           ← OLD
└── portfolio-react/    ← NEW (This is what you want!)
    ├── src/
    ├── public/
    └── ...
```

**Better (Clean):**
```
portfolio-website/      ← NEW REPO
├── src/
├── public/
├── package.json
└── vite.config.js
```

---

## 🐛 Still Not Working?

### Check Build Logs
1. Vercel Dashboard → Your Project → Deployments
2. Click on latest deployment
3. Check "Building" logs for errors

### Common Issues:

**Issue: Build fails**
```bash
# Solution: Clear and rebuild locally
cd "C:\Users\MC\Desktop\Joshua Crucis\Portfolio-MC\portfolio-react"
rm -rf node_modules dist
npm install
npm run build
git add .
git commit -m "Fix build"
git push
```

**Issue: Assets not loading**
- Check that `public/assets/` folder is committed
- Verify image paths use `/assets/` not `./assets/`

**Issue: Wrong version still showing**
- Hard refresh: Ctrl+Shift+R (or Cmd+Shift+R)
- Clear Vercel cache in dashboard
- Redeploy from dashboard

---

## 📞 Need More Help?

### Verify What's Deployed:
1. Check your GitHub repo - is it the React code or HTML?
2. Check Vercel build logs - what directory is it building?
3. View source on live site - is it React or plain HTML?

### Quick Test:
- **React version:** View source has `<div id="root"></div>`
- **Old HTML:** View source has full HTML structure

---

## ✨ After Successful Deployment

Your portfolio will be live at:
- Production: `https://your-project.vercel.app`
- Custom domain: Add in Vercel settings

### Future Updates:
```bash
# Make changes, then:
git add .
git commit -m "Update portfolio"
git push

# Vercel auto-deploys! 🎉
```

---

**Let's get your React portfolio live! Follow Solution 1 for the cleanest setup.** 🚀

