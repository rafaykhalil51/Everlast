"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function HeroProductShowcase() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const sx = useSpring(mx, { stiffness: 90, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 90, damping: 18, mass: 0.6 });

  const tiltY = useTransform(sx, [-0.5, 0.5], [-10, 10]);
  const tiltX = useTransform(sy, [-0.5, 0.5], [8, -8]);
  const translateX = useTransform(sx, [-0.5, 0.5], [-14, 14]);
  const translateY = useTransform(sy, [-0.5, 0.5], [-10, 10]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const el = wrapperRef.current;
    if (!el) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      mx.set(px);
      my.set(py);
    };

    const onLeave = () => {
      mx.set(0);
      my.set(0);
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [mx, my]);

  return (
    <div
      ref={wrapperRef}
      className="absolute inset-0 flex items-center justify-center"
      style={{ perspective: 1600 }}
    >
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side at 50% 50%, rgba(201,168,76,0.18), transparent 65%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
        }}
        style={{
          rotateX: tiltX,
          rotateY: tiltY,
          x: translateX,
          y: translateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-[80%] md:w-[88%] max-w-[520px]"
      >
        <motion.div
          aria-hidden
          className="absolute -inset-10 rounded-[40px] blur-2xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(29,94,168,0.30), transparent 70%)",
            opacity: 0.55,
          }}
        />

        <motion.div
          animate={{ rotateY: 360 }}
          transition={{
            duration: 28,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "visible",
          }}
          className="relative"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-window.png"
            alt="Everlast Plastic uPVC window cross-section"
            width={1024}
            height={1280}
            draggable={false}
            className="relative w-full h-auto select-none"
            style={{
              filter:
                "drop-shadow(0 28px 60px rgba(0,0,0,0.65)) drop-shadow(0 0 28px rgba(29,94,168,0.18))",
              backfaceVisibility: "visible",
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
