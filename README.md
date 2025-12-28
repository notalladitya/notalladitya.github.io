# Aditya Sharma - Portfolio Website

A modern, animated portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern Technical-Organic Design** - Navy-to-emerald gradient base with electric cyan and amber accents
- **Smooth Spring Physics Animations** - Bouncy, delightful animations throughout
- **Scroll-Triggered Reveals** - Sections animate in as you scroll
- **Cursor Particle Trail** - Interactive particle effects following your cursor (desktop only)
- **Floating Geometric Shapes** - Animated background decorations
- **Glassmorphism UI** - Modern frosted glass effects
- **Responsive Design** - Mobile-first approach, looks great on all devices
- **Static Export** - Optimized for GitHub Pages deployment
- **Accessible** - Semantic HTML, keyboard navigation, reduced motion support

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Orbitron, Manrope, JetBrains Mono (Google Fonts)
- **Package Manager:** pnpm

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 8+

### Installation

1. Clone the repository:
```bash
git clone https://github.com/dtr-beast/dtr-beast.github.io.git
cd dtr-beast.github.io/portfolio
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
pnpm build
```

This creates a static export in the `./out` directory.

### Preview Production Build

```bash
pnpm start
```

## Project Structure

```
portfolio/
├── .github/workflows/     # GitHub Actions for deployment
├── public/                # Static assets
│   └── profile.jpg        # Profile photo
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── globals.css    # Global styles & Tailwind config
│   │   ├── layout.tsx     # Root layout with fonts & metadata
│   │   └── page.tsx       # Main page composition
│   ├── components/
│   │   ├── decorations/   # Background effects
│   │   │   ├── CursorFollower.tsx
│   │   │   ├── FloatingShapes.tsx
│   │   │   └── GradientMesh.tsx
│   │   ├── layout/        # Navigation & Footer
│   │   ├── sections/      # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Experience.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/            # Reusable UI components
│   ├── data/
│   │   └── content.ts     # Portfolio content & data
│   └── lib/
│       ├── animations.ts  # Framer Motion variants
│       ├── hooks.ts       # Custom React hooks
│       └── utils.ts       # Utility functions
├── next.config.js         # Next.js configuration
├── package.json
└── tsconfig.json
```

## Customization

### Update Content

Edit [src/data/content.ts](src/data/content.ts) to customize:
- Personal information
- About section
- Skills and expertise
- Work experience
- Contact links

### Modify Colors

Update color variables in [src/app/globals.css](src/app/globals.css):
```css
@theme {
  --color-brand-cyan: #06D6A0;
  --color-brand-amber: #FFB703;
  --color-brand-coral: #EF476F;
  /* ... more colors */
}
```

### Change Fonts

Edit [src/app/layout.tsx](src/app/layout.tsx) to use different Google Fonts.

## Deployment

### GitHub Pages (Recommended)

1. Push your code to GitHub
2. Enable GitHub Pages in repository settings
3. Set source to "GitHub Actions"
4. The workflow will automatically deploy on push to `main`

Your site will be available at: `https://dtr-beast.github.io`

### Manual Deployment

```bash
pnpm build
# Deploy the ./out directory to your hosting provider
```

## Performance

- Lighthouse Score: 90+
- Static export for fast loading
- Optimized animations with spring physics
- Lazy loading for below-fold content
- Image optimization

## Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Reduced motion support
- Proper heading hierarchy
- Focus visible states

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Author

**Aditya Sharma**
- Email: aditya.sharma.11072001@gmail.com
- LinkedIn: [aditya-5harma](https://linkedin.com/in/aditya-5harma)
- GitHub: [dtr-beast](https://github.com/dtr-beast)

---

Built with ❤️ and lots of ☕ using Next.js, TypeScript, Tailwind CSS & Framer Motion
