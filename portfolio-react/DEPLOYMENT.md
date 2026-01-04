# Deployment Guide

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```

## Deployment Options

### 1. Vercel (Recommended - Easiest)

**Why Vercel?**
- Zero configuration required
- Automatic deployments from Git
- Fast global CDN
- Free for personal projects

**Steps:**
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login and deploy:
   ```bash
   vercel login
   vercel
   ```

3. Follow the prompts:
   - Setup and deploy? Yes
   - Which scope? (Select your account)
   - Link to existing project? No
   - Project name? (Press enter for default)
   - In which directory is your code located? ./
   - Auto-detected Project Settings? Yes

4. Your site is now live! Vercel will give you a URL.

**Continuous Deployment:**
Connect your GitHub repo to Vercel for automatic deployments on every push.

---

### 2. Netlify

**Steps:**

**Option A: Drag & Drop**
1. Build your project:
   ```bash
   npm run build
   ```
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag and drop the `dist` folder

**Option B: CLI**
1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Build and deploy:
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

**Option C: Connect Git Repository**
1. Push code to GitHub/GitLab/Bitbucket
2. Go to [Netlify](https://app.netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

---

### 3. GitHub Pages

**Steps:**

1. Install gh-pages:
   ```bash
   npm install -D gh-pages
   ```

2. Update `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Update `vite.config.js`:
   ```js
   export default defineConfig({
     base: '/portfolio/', // your repo name
     plugins: [react()],
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

5. Enable GitHub Pages in repository settings:
   - Go to Settings > Pages
   - Source: Deploy from a branch
   - Branch: gh-pages, root

---

### 4. Firebase Hosting

**Steps:**

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login:
   ```bash
   firebase login
   ```

3. Initialize:
   ```bash
   firebase init hosting
   ```
   - Select existing project or create new one
   - Public directory: `dist`
   - Single-page app: Yes
   - Automatic builds: No

4. Build and deploy:
   ```bash
   npm run build
   firebase deploy
   ```

---

### 5. AWS Amplify

**Steps:**

1. Install Amplify CLI:
   ```bash
   npm install -g @aws-amplify/cli
   ```

2. Initialize:
   ```bash
   amplify init
   ```

3. Add hosting:
   ```bash
   amplify add hosting
   ```
   - Select: Hosting with Amplify Console
   - Type: Manual deployment

4. Publish:
   ```bash
   npm run build
   amplify publish
   ```

---

## Environment Variables

If you need environment variables:

1. Create `.env` file:
   ```env
   VITE_API_KEY=your_api_key
   VITE_API_URL=your_api_url
   ```

2. Access in code:
   ```js
   const apiKey = import.meta.env.VITE_API_KEY;
   ```

3. For deployment platforms:
   - **Vercel**: Add in dashboard under Settings > Environment Variables
   - **Netlify**: Add in dashboard under Site settings > Environment variables
   - **Others**: Check platform documentation

---

## Custom Domain

### Vercel
1. Go to Project Settings > Domains
2. Add your domain
3. Update DNS records as shown

### Netlify
1. Go to Domain settings > Custom domains
2. Add domain
3. Update DNS records

### GitHub Pages
1. Add `CNAME` file to `public` folder with your domain
2. Update DNS:
   - Add A records pointing to GitHub IPs
   - Or CNAME record to `username.github.io`

---

## Performance Optimization

Before deployment:

1. **Optimize images:**
   - Compress images using tools like TinyPNG
   - Use WebP format where possible
   - Lazy load images

2. **Code splitting:**
   Already handled by Vite automatically

3. **Bundle analysis:**
   ```bash
   npm run build -- --mode analyze
   ```

4. **Lighthouse audit:**
   - Run in Chrome DevTools
   - Fix any issues

---

## Troubleshooting

### Build fails
- Clear cache: `rm -rf node_modules package-lock.json && npm install`
- Check Node version: `node -v` (should be 18+)

### Assets not loading
- Check asset paths use `./` or `/assets/`
- Ensure assets are in `public` folder

### Routing issues (404 on refresh)
- Add `_redirects` file to `public`:
  ```
  /*    /index.html   200
  ```

---

## Monitoring

After deployment, set up:
- **Analytics**: Google Analytics, Plausible, or Fathom
- **Performance**: Vercel Analytics or similar
- **Uptime**: UptimeRobot or Pingdom

---

## Recommended: Vercel + GitHub

**Best workflow:**
1. Push code to GitHub
2. Connect GitHub repo to Vercel
3. Automatic deployments on every push
4. Preview deployments for pull requests
5. Production deployment on main branch

This setup gives you:
- ✅ Automatic deployments
- ✅ Preview URLs for testing
- ✅ Rollback capability
- ✅ Analytics
- ✅ Edge network (fast worldwide)
- ✅ Free SSL certificate

---

Need help? Check the documentation:
- [Vite Deployment](https://vitejs.dev/guide/static-deploy.html)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)

