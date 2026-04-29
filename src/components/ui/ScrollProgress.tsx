"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.4,
  });

  return (
    <motion.div
      className="scroll-progress-bar"
      style={{ scaleX, width: "100%" }}
      aria-hidden
    />
  );
}
