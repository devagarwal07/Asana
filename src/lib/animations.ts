import { Variants } from 'framer-motion';

/**
 * Premium Animation Library for Resort Website
 * Consistent, elegant animations throughout the site
 */

// Easing curves
export const easings = {
    smooth: [0.4, 0, 0.2, 1],
    smoothOut: [0, 0, 0.2, 1],
    smoothIn: [0.4, 0, 1, 1],
    bounce: [0.68, -0.55, 0.265, 1.55],
    elastic: [0.175, 0.885, 0.32, 1.275],
};

// Fade animations
export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6, ease: easings.smooth },
    },
};

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: easings.smooth },
    },
};

export const fadeDown: Variants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: easings.smooth },
    },
};

export const fadeLeft: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: easings.smooth },
    },
};

export const fadeRight: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: easings.smooth },
    },
};

// Scale animations
export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: easings.smooth },
    },
};

export const scaleUp: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.7, ease: easings.elastic },
    },
};

// Stagger container
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

export const staggerContainerSlow: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
};

// Stagger children
export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: easings.smooth },
    },
};

// Hero animations
export const heroTitle: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: easings.smooth, delay: 0.3 },
    },
};

export const heroSubtitle: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: easings.smooth, delay: 0.6 },
    },
};

export const heroBackground: Variants = {
    hidden: { scale: 1.15, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 1.5, ease: easings.smooth },
    },
};

// Card animations
export const cardHover = {
    rest: { scale: 1, y: 0 },
    hover: {
        scale: 1.02,
        y: -8,
        transition: { duration: 0.4, ease: easings.smooth },
    },
};

export const imageHover = {
    rest: { scale: 1 },
    hover: {
        scale: 1.08,
        transition: { duration: 0.6, ease: easings.smooth },
    },
};

// Page transitions
export const pageTransition: Variants = {
    initial: { opacity: 0, y: 20 },
    enter: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: easings.smooth },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: { duration: 0.4, ease: easings.smoothIn },
    },
};

// Reveal animations (for scroll-triggered elements)
export const revealUp: Variants = {
    hidden: {
        opacity: 0,
        y: 80,
        clipPath: 'inset(20% 0% 0% 0%)',
    },
    visible: {
        opacity: 1,
        y: 0,
        clipPath: 'inset(0% 0% 0% 0%)',
        transition: { duration: 0.9, ease: easings.smooth },
    },
};

export const revealLeft: Variants = {
    hidden: {
        opacity: 0,
        x: 100,
        clipPath: 'inset(0% 0% 0% 20%)',
    },
    visible: {
        opacity: 1,
        x: 0,
        clipPath: 'inset(0% 0% 0% 0%)',
        transition: { duration: 0.9, ease: easings.smooth },
    },
};

export const revealRight: Variants = {
    hidden: {
        opacity: 0,
        x: -100,
        clipPath: 'inset(0% 20% 0% 0%)',
    },
    visible: {
        opacity: 1,
        x: 0,
        clipPath: 'inset(0% 0% 0% 0%)',
        transition: { duration: 0.9, ease: easings.smooth },
    },
};

// Image reveal (for gallery/portfolio images)
export const imageReveal: Variants = {
    hidden: {
        opacity: 0,
        scale: 1.2,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 1, ease: easings.smooth },
    },
};

// Parallax helper
export const parallaxY = (offset: number): Variants => ({
    hidden: { y: offset },
    visible: {
        y: 0,
        transition: { duration: 1.2, ease: easings.smooth },
    },
});

// Count up animation helper (for statistics)
export const counterAnimation = {
    duration: 2,
    ease: easings.smoothOut,
};

// Navbar scroll animation
export const navbarScroll: Variants = {
    transparent: {
        background: 'rgba(255, 255, 255, 0)',
        boxShadow: 'none',
    },
    solid: {
        background: 'rgba(255, 255, 255, 0.95)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.08)',
        backdropFilter: 'blur(20px)',
    },
};

// Floating animation for decorative elements
export const floatingElement: Variants = {
    initial: { y: 0, rotate: 0 },
    animate: {
        y: [-10, 10, -10],
        rotate: [-2, 2, -2],
        transition: {
            duration: 6,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
        },
    },
};

// Button hover animations
export const buttonShine = {
    rest: { x: '-100%' },
    hover: {
        x: '100%',
        transition: { duration: 0.5, ease: easings.smooth },
    },
};

// Text reveal character by character
export const textRevealContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.03,
            delayChildren: 0.2,
        },
    },
};

export const textRevealChar: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: easings.smooth },
    },
};

// Viewport settings for optimal scroll trigger
export const viewportSettings = {
    once: true,
    margin: '-100px 0px',
    amount: 0.2,
};

export const viewportSettingsEarly = {
    once: true,
    margin: '-50px 0px',
    amount: 0.1,
};
