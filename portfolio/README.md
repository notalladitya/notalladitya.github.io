# Aditya Sharma - Portfolio Website

A distinctive, production-grade portfolio website showcasing my work as a Senior Software Engineer. Built with modern web technologies and featuring a bold "Kinetic Typography Lab" aesthetic.

## 🎨 Design Philosophy

This portfolio breaks away from generic AI-generated designs with:
- **Kinetic Typography Lab** - A code-inspired, typography-forward aesthetic
- **Dark theme with electric accents** - Neon cyan, magenta, and yellow highlights
- **Terminal-style components** - Embracing developer culture
- **Smooth spring-physics animations** - Using Framer Motion
- **Distinctive fonts** - Space Grotesk and JetBrains Mono

## 🚀 Tech Stack

- **Next.js 16** (App Router) - Static site generation
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling with custom design tokens
- **Framer Motion** - Smooth, physics-based animations
- **Lucide React** - Icon library
- **pnpm** - Fast, efficient package manager

## 📦 Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm start
```

## 🏗️ Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Design system & custom styles
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main page
├── components/
│   ├── Navigation.tsx        # Sticky nav with scroll progress
│   ├── Hero.tsx              # Animated hero section
│   ├── About.tsx             # About section with tech highlights
│   ├── Experience.tsx        # Timeline of work experience
│   ├── Skills.tsx            # Interactive skills grid
│   ├── Contact.tsx           # Contact form & info
│   └── Footer.tsx            # Footer with social links
├── public/
│   └── profile.jpg           # Profile photo
└── next.config.ts            # Next.js configuration
```

## 🎯 Features

### Design System
- Custom CSS variables for consistent theming
- Neon glow effects and shadows
- Grain texture overlay
- Grid pattern backgrounds
- Terminal-style code blocks

### Components
1. **Navigation** - Sticky header with glassmorphism, scroll progress bar
2. **Hero** - Kinetic typography, animated profile image, floating animations
3. **About** - Code-block style profile, tech stack highlights
4. **Experience** - Timeline with terminal-styled cards
5. **Skills** - Categorized grid with interactive hover effects
6. **Contact** - Functional form with social links
7. **Footer** - Brand, quick links, social connections

### Animations
- Staggered text reveals on scroll
- Spring physics for natural movement
- Hover effects with scale and color transitions
- Floating profile image
- Rotating decorative elements
- Smooth section transitions

## 🌐 Deployment

This project is configured for static export and can be deployed to GitHub Pages:

```bash
# Build static export
pnpm build

# The 'out' directory contains the static files
# Deploy the contents to your hosting service
```

### GitHub Pages Setup
1. Push the `out` directory contents to your `gh-pages` branch
2. Configure GitHub Pages to serve from the `gh-pages` branch
3. Your site will be available at `https://[username].github.io`

## 🎨 Customization

### Colors
Edit CSS variables in `app/globals.css`:
```css
:root {
  --color-neon-cyan: #00ffff;
  --color-neon-magenta: #ff00ff;
  --color-neon-yellow: #ffff00;
  /* ... more colors */
}
```

### Content
Update content in the component files:
- `components/About.tsx` - Personal info and bio
- `components/Experience.tsx` - Work experience
- `components/Skills.tsx` - Technical skills
- `components/Contact.tsx` - Contact information

## 📄 License

© 2025 Aditya Sharma. All rights reserved.

## 🙏 Acknowledgments

Built with:
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

---

**Designed with the "Kinetic Typography Lab" aesthetic** - A bold, code-inspired design that celebrates typography, movement, and technical prowess.
