"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedText from "@/components/ui/AnimatedText";
import { COLORS } from "@/lib/constants";
import { fadeUp, stagger } from "@/lib/animations";

export default function Colors() {
  const groups = Array.from(new Set(COLORS.map((c) => c.group)));

  return (
    <section id="colors" className="relative section-light overflow-hidden">
      <div className="absolute -top-32 right-0 font-display text-[18rem] leading-none text-[var(--obsidian)]/[0.05] select-none pointer-events-none">
        04
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-24 lg:py-32 space-y-16">
        <div className="space-y-5">
          <SectionLabel index="04" label="Finishes" variant="light" />
          <AnimatedText
            as="h2"
            text="Premium textures and signature solid tones."
            className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] max-w-4xl"
          />
        </div>

        {groups.map((g) => (
          <div key={g} className="space-y-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--obsidian)]/55">
              {g}
            </div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-10% 0px" }}
              variants={stagger(0)}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {COLORS.filter((c) => c.group === g).map((c) => (
                <motion.div
                  key={c.name}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="group rounded-2xl bg-white border border-black/5 p-4 shadow-sm hover:shadow-xl transition-shadow"
                  data-cursor="hover"
                >
                  <div
                    className="aspect-[4/3] rounded-xl border border-black/5 group-hover:scale-[1.02] transition-transform"
                    style={{ backgroundColor: c.hex }}
                  />
                  <div className="mt-3 flex items-center justify-between">
                    <div className="font-grotesk text-sm font-semibold">{c.name}</div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--obsidian)]/50">
                      uPVC
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
