"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, wordReveal } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";

type Props = {
  index: string;
  label: string;
  title: string;
  subtitle?: string;
  variant?: "dark" | "light";
};

export default function PageHero({
  index,
  label,
  title,
  subtitle,
  variant = "dark",
}: Props) {
  const isDark = variant === "dark";
  return (
    <section
      className={`relative pt-36 lg:pt-48 pb-20 lg:pb-28 overflow-hidden ${
        isDark ? "section-dark" : "section-light"
      }`}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        aria-hidden
        style={{
          backgroundImage: isDark
            ? "radial-gradient(circle at 20% 20%, rgba(201,168,76,0.12), transparent 55%), radial-gradient(circle at 80% 80%, rgba(29,94,168,0.18), transparent 55%)"
            : "radial-gradient(circle at 80% 20%, rgba(29,94,168,0.06), transparent 60%)",
        }}
      />

      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger(1.2)}
        className="relative mx-auto max-w-7xl px-5 lg:px-8 space-y-6"
      >
        <motion.div variants={fadeUp}>
          <SectionLabel index={index} label={label} variant={variant} />
        </motion.div>

        <h1 className="font-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] tracking-tight">
          {title.split(" ").map((word, i) => (
            <span key={`${word}-${i}`} className="inline-block overflow-hidden mr-3">
              <motion.span variants={wordReveal} className="inline-block">
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        {subtitle && (
          <motion.p
            variants={fadeUp}
            className={`max-w-2xl text-base md:text-lg leading-7 ${
              isDark ? "text-[var(--warm-white)]/70" : "text-[var(--obsidian)]/70"
            }`}
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
