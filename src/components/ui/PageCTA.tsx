"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp } from "@/lib/animations";

type Props = {
  label: string;
  title: string;
  description?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
  variant?: "dark" | "light";
};

export default function PageCTA({
  label,
  title,
  description,
  primary,
  secondary,
  variant = "dark",
}: Props) {
  const isDark = variant === "dark";
  return (
    <section className={`relative ${isDark ? "section-dark" : "section-light"} overflow-hidden border-t border-white/5`}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-15% 0px" }}
        className="mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-12 gap-10 items-center"
      >
        <motion.div variants={fadeUp} className="lg:col-span-7 space-y-4">
          <div className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--gold)]">
            {label}
          </div>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05]">{title}</h2>
          {description && (
            <p className={`max-w-xl leading-7 ${isDark ? "text-[var(--warm-white)]/70" : "text-[var(--obsidian)]/70"}`}>
              {description}
            </p>
          )}
        </motion.div>

        <motion.div variants={fadeUp} className="lg:col-span-5 flex flex-wrap gap-4 lg:justify-end">
          {primary && (
            <Link
              href={primary.href}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)] text-[var(--obsidian)] px-7 py-3 text-[12px] font-mono uppercase tracking-[0.24em] hover:bg-[var(--gold-light)] transition-colors"
            >
              {primary.label}
              <span aria-hidden>→</span>
            </Link>
          )}
          {secondary && (
            <Link
              href={secondary.href}
              className={`inline-flex items-center gap-2 rounded-full border px-7 py-3 text-[12px] font-mono uppercase tracking-[0.24em] transition-colors ${
                isDark
                  ? "border-white/15 text-[var(--warm-white)]/85 hover:border-white/40 hover:text-white"
                  : "border-black/15 text-[var(--obsidian)] hover:border-black/50"
              }`}
            >
              {secondary.label}
              <span aria-hidden>→</span>
            </Link>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
