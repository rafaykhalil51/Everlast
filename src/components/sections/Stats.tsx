"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Counter from "@/components/ui/CountUp";
import { STATS } from "@/lib/constants";
import { fadeUp, stagger } from "@/lib/animations";

const StatsScene = dynamic(() => import("@/components/3d/StatsScene"), {
  ssr: false,
  loading: () => null,
});

export default function Stats() {
  return (
    <section className="relative overflow-hidden section-mid border-y border-white/5">
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden>
        <StatsScene />
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-15% 0px" }}
        variants={stagger(0)}
        className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8 py-16 grid grid-cols-2 lg:grid-cols-4 gap-y-10"
      >
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            variants={fadeUp}
            className={`relative px-4 lg:px-8 ${
              i !== 0 ? "lg:border-l border-white/8" : ""
            }`}
          >
            <div className="font-display text-5xl md:text-6xl text-[var(--gold)]">
              <Counter end={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.28em] text-[var(--fog)]">
              {s.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
