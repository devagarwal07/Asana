# 🏨 Asana Resort - Luxury Resort Website

A premium, 5-star luxury resort website built with Next.js 15, featuring stunning animations, modern design, and an immersive user experience.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-ff69b4?style=flat-square)

## ✨ Features

### 🎨 Premium Design
- Sophisticated luxury resort aesthetic
- Custom color palette with elegant typography
- Responsive design optimized for all devices
- High-quality Unsplash imagery throughout

### 🎬 Stunning Animations
- **Animated Loader** - Premium entry experience with lotus icon and particle effects
- **Scroll-Scrub Animations** - Elements animate based on scroll position
- **Parallax Effects** - Immersive depth on hero sections
- **Staggered Reveals** - Content animates in sequence for visual flow
- **Spring Physics** - Natural, bouncy interactions on hover states

### 📄 Pages

| Page | Description |
|------|-------------|
| **Home** | Hero with booking bar, welcome section, room slider, spa, dining, and special occasions |
| **Rooms** | Filterable room grid with multiple view modes |
| **Spa** | Wellness sanctuary with treatment menu and packages |
| **Restaurant** | Fine dining experience with menu highlights |
| **Gallery** | Masonry photo grid with lightbox viewer |
| **Contact** | Contact form with interactive map and quick actions |

### 🏆 Premium Touches
- Forbes Travel Guide 5-Star badge
- Michelin star recognition
- World Luxury Spa Awards badge
- Condé Nast Traveler testimonial

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Carousel**: [Embla Carousel](https://www.embla-carousel.com/)
- **Fonts**: Google Fonts (Playfair Display, Jost)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/devagarwal07/Asana.git
   cd Asana
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🛠️ Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── rooms/             # Rooms listing & details
│   ├── spa/               # Spa & wellness page
│   ├── restaurant/        # Dining page
│   ├── gallery/           # Photo gallery
│   └── contact/           # Contact page
├── components/
│   ├── sections/          # Page sections (hero, navbar, footer, etc.)
│   └── ui/                # Reusable UI components
│       ├── loader.tsx     # Animated loader
│       ├── loader-wrapper.tsx  # Loader state management
│       └── scroll-animations.tsx  # Animation library
└── lib/
    └── animations.ts      # Animation utilities
```

## 🎯 Key Components

### Scroll Animations Library
Custom scroll-based animations with:
- `ScrollReveal` - Fade, slide, scale, blur effects
- `TextReveal` - Word-by-word text animations
- `ImageReveal` - Curtain reveal for images
- `Parallax` - Speed-controlled parallax movement
- `FadeInView` - Simple fade on viewport entry

### Loader System
- Animated entry loader on first visit
- Session storage to skip on subsequent visits
- Context provider for coordinating animations

## 🌐 Live Demo

Visit the deployed site at: *Coming soon*

## 📄 License

This project is for demonstration purposes.

## 👨‍💻 Author

**Dev Agarwal**
- GitHub: [@devagarwal07](https://github.com/devagarwal07)

---

<p align="center">
  Made with ❤️ for luxury hospitality
</p>
