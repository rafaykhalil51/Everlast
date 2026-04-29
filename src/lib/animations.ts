import type { Variants, Transition } from "framer-motion";

export const easeExpo: Transition["ease"] = [0.16, 1, 0.3, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easeExpo },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: easeExpo } },
};

export const stagger = (delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren,
    },
  },
});

export const wordReveal: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.85, ease: easeExpo } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: easeExpo },
  },
};

export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeExpo } },
};

export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeExpo } },
};
