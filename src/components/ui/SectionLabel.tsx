"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

type Props = {
  index: string;
  label: string;
  variant?: "light" | "dark";
};

export default function SectionLabel({ index, label, variant = "dark" }: Props) {
  const muted = variant === "dark" ? "text-[var(--fog)]" : "text-[var(--obsidian)]/60";
  const accent = variant === "dark" ? "text-[var(--gold)]" : "text-[var(--steel)]";
  return (
    <motion.div
      className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em]"
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
    >
      <span className={`${accent}`}>{index}</span>
      <span className="h-px w-10 bg-current opacity-40" />
      <span className={muted}>{label}</span>
    </motion.div>
  );
}
