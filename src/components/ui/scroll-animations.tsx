"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    direction?: "up" | "down" | "left" | "right";
    distance?: number;
    rotate?: number;
    scale?: boolean;
    blur?: boolean;
    delay?: number;
}

/**
 * ScrollReveal - Premium scroll-scrub animation
 * Smooth fade/slide in on scroll down, reverse on scroll up
 */
export function ScrollReveal({
    children,
    className = "",
    direction = "up",
    distance = 80,
    rotate = 0,
    scale = true,
    blur = false,
    delay = 0,
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 95%", "start 30%"],
    });

    // Smooth spring physics for premium feel
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const getTranslate = () => {
        switch (direction) {
            case "up": return [distance, 0];
            case "down": return [-distance, 0];
            case "left": return [distance, 0];
            case "right": return [-distance, 0];
            default: return [distance, 0];
        }
    };

    const [from, to] = getTranslate();
    const isHorizontal = direction === "left" || direction === "right";

    const opacity = useTransform(smoothProgress, [0, 1], [0, 1]);
    const translateY = useTransform(smoothProgress, [0, 1], isHorizontal ? [0, 0] : [from, to]);
    const translateX = useTransform(smoothProgress, [0, 1], isHorizontal ? [from, to] : [0, 0]);
    const scaleValue = useTransform(smoothProgress, [0, 1], scale ? [0.85, 1] : [1, 1]);
    const rotateValue = useTransform(smoothProgress, [0, 1], [rotate, 0]);
    const filterBlur = useTransform(smoothProgress, [0, 0.5, 1], blur ? ["blur(10px)", "blur(5px)", "blur(0px)"] : ["blur(0px)", "blur(0px)", "blur(0px)"]);

    return (
        <motion.div
            ref={ref}
            style={{
                opacity,
                x: translateX,
                y: translateY,
                scale: scaleValue,
                rotate: rotateValue,
                filter: filterBlur,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

interface ParallaxProps {
    children: ReactNode;
    className?: string;
    speed?: number;
    rotate?: boolean;
}

/**
 * Parallax - Luxury parallax with optional rotation
 */
export function Parallax({
    children,
    className = "",
    speed = 0.5,
    rotate = false,
}: ParallaxProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    const y = useTransform(smoothProgress, [0, 1], [150 * speed, -150 * speed]);
    const rotateY = useTransform(smoothProgress, [0, 1], rotate ? [5, -5] : [0, 0]);

    return (
        <motion.div
            ref={ref}
            style={{ y, rotateY }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

interface ScaleOnScrollProps {
    children: ReactNode;
    className?: string;
    scaleFrom?: number;
    scaleTo?: number;
}

/**
 * ScaleOnScroll - Dramatic scale with opacity
 */
export function ScaleOnScroll({
    children,
    className = "",
    scaleFrom = 0.7,
    scaleTo = 1,
}: ScaleOnScrollProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    const scale = useTransform(smoothProgress, [0, 1], [scaleFrom, scaleTo]);
    const opacity = useTransform(smoothProgress, [0, 0.3, 1], [0, 0.5, 1]);

    return (
        <motion.div
            ref={ref}
            style={{ scale, opacity }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

interface FadeInViewProps {
    children: ReactNode;
    className?: string;
    direction?: "up" | "down" | "left" | "right";
    distance?: number;
}

/**
 * FadeInView - Smooth fade with directional slide
 */
export function FadeInView({
    children,
    className = "",
    direction = "up",
    distance = 60,
}: FadeInViewProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 90%", "start 40%"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    const getTranslate = () => {
        switch (direction) {
            case "up": return [distance, 0];
            case "down": return [-distance, 0];
            case "left": return [distance, 0];
            case "right": return [-distance, 0];
            default: return [distance, 0];
        }
    };

    const [from, to] = getTranslate();
    const isHorizontal = direction === "left" || direction === "right";

    const opacity = useTransform(smoothProgress, [0, 1], [0, 1]);
    const y = useTransform(smoothProgress, [0, 1], isHorizontal ? [0, 0] : [from, to]);
    const x = useTransform(smoothProgress, [0, 1], isHorizontal ? [from, to] : [0, 0]);

    return (
        <motion.div
            ref={ref}
            style={{ opacity, y, x }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

interface TextRevealProps {
    children: ReactNode;
    className?: string;
}

/**
 * TextReveal - Character by character reveal effect
 */
export function TextReveal({ children, className = "" }: TextRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 85%", "start 35%"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    const opacity = useTransform(smoothProgress, [0, 1], [0, 1]);
    const y = useTransform(smoothProgress, [0, 1], [40, 0]);
    const clipPath = useTransform(
        smoothProgress,
        [0, 1],
        ["inset(100% 0 0 0)", "inset(0% 0 0 0)"]
    );

    return (
        <motion.div
            ref={ref}
            style={{ opacity, y, clipPath }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

interface ImageRevealProps {
    children: ReactNode;
    className?: string;
}

/**
 * ImageReveal - Premium image reveal with scale and clip
 */
export function ImageReveal({ children, className = "" }: ImageRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 90%", "start 20%"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 25,
    });

    const scale = useTransform(smoothProgress, [0, 1], [1.3, 1]);
    const opacity = useTransform(smoothProgress, [0, 0.3, 1], [0, 0.8, 1]);
    const clipPath = useTransform(
        smoothProgress,
        [0, 1],
        ["inset(20% 20% 20% 20%)", "inset(0% 0% 0% 0%)"]
    );

    return (
        <motion.div
            ref={ref}
            style={{ scale, opacity, clipPath, overflow: "hidden" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
