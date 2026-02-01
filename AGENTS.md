## Project Summary
A high-visual-accuracy clone of the Asana Resort website (asanaresort.webflow.io). The project aims to replicate the "Luxe Organic Minimalism" aesthetic of a wellness resort in Vietnam, featuring immersive hero sections, lifestyle galleries, accommodation showcases, and specialized spa/dining sections.

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Typography:** Tenor Sans (Display), Jost (Body)
- **Components:** React Server Components (where possible), Client Components for interactivity (Navbar, Sliders).

## Architecture
- `src/app/`: Page routes and global styles.
- `src/components/sections/`: Modularized sections of the landing page.
- `public/`: Static assets (if any).

## User Preferences
- **Theme:** Light (Beige/Off-white background #F1EFE9).
- **Design:** Modern, clean, high-end resort aesthetic.
- **Code Style:** Functional components, named exports where possible (cloned sections use default for easier integration).

## Project Guidelines
- Follow the design document provided during cloning.
- Use CSS variables in `globals.css` for consistent styling.
- Ensure responsive design across mobile and desktop.
- Maintain accessibility for interactive elements.

## Common Patterns
- **Section Structure:** Most sections follow a `container mx-auto px-8 max-w-[1280px]` layout.
- **Typography Classes:** Use `.hero-title`, `.label-caps`, and `.font-display` / `.font-body` for consistency.
- **Color Usage:** Deep Green (#2A4434) for dark backgrounds/overlays, Terracotta (#C06B3E) for accents and buttons.
