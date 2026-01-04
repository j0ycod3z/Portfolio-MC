# Joshua Joy Crucis - Modern Portfolio

A modern, responsive portfolio website built with React, showcasing my professional experience, projects, certifications, and achievements.

## 🚀 Features

- **Modern UI/UX**: Sleek, dark-themed design with gradient accents
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Fully Responsive**: Optimized for all device sizes
- **Professional Sections**:
  - Hero section with dynamic introduction
  - About section with education and stats
  - Work experience timeline
  - Featured projects showcase
  - Certifications display
  - Achievements and awards
  - Contact information with social links

## 🛠️ Technologies Used

- **React 18** - Modern JavaScript library for building user interfaces
- **Vite** - Next-generation frontend tooling for faster development
- **Framer Motion** - Production-ready animation library
- **React Icons** - Popular icon library
- **CSS3** - Custom styling with modern features

## 📦 Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd portfolio-react
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
portfolio-react/
├── public/              # Static assets
│   └── assets/          # Images, PDFs, icons
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx/css
│   │   ├── Hero.jsx/css
│   │   ├── About.jsx/css
│   │   ├── Experience.jsx/css
│   │   ├── Projects.jsx/css
│   │   ├── Certifications.jsx/css
│   │   ├── Achievements.jsx/css
│   │   ├── Contact.jsx/css
│   │   └── Footer.jsx/css
│   ├── App.jsx          # Main application component
│   ├── App.css          # Global styles
│   ├── index.css        # CSS reset
│   └── main.jsx         # Application entry point
├── package.json
└── README.md
```

## 🎨 Customization

### Colors
Edit the CSS variables in `src/App.css`:
```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #ec4899;
  /* ... */
}
```

### Content
Update content in individual component files:
- Personal info: `Hero.jsx`, `About.jsx`
- Work history: `Experience.jsx`
- Projects: `Projects.jsx`
- Certifications: `Certifications.jsx`
- Achievements: `Achievements.jsx`
- Contact: `Contact.jsx`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: < 768px

## 🌐 Deployment

### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Option 3: GitHub Pages
```bash
npm install -D gh-pages
# Add to package.json scripts:
# "deploy": "npm run build && gh-pages -d dist"
npm run deploy
```

## 📄 Assets Setup

Place your assets in the `public/assets/` directory:
- Profile images
- Project screenshots
- CV/Resume PDF
- Icons

Update asset paths in components as needed.

## 👤 Author

**Joshua Joy Manuzon Crucis**
- Email: joshuajoy27@gmail.com
- Phone: +639919458636
- GitHub: [@j0ycod3z](https://github.com/j0ycod3z)
- LinkedIn: [Joshua Crucis](https://www.linkedin.com/in/joshua-crucis-770bb8256)
- Credly: [View Badges](https://www.credly.com/users/joshua-crucis/badges)

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Icons by React Icons
- Animations by Framer Motion
- Built with React and Vite

---

**Note**: Don't forget to copy your assets (images, CV, etc.) from the old portfolio to the `public/assets/` directory!
