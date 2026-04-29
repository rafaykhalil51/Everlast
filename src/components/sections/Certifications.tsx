"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedText from "@/components/ui/AnimatedText";
import { CERTIFICATIONS } from "@/lib/constants";
import { fadeUp, stagger } from "@/lib/animations";

export default function Certifications() {
  return (
    <section id="certifications" className="relative section-mid overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(201,168,76,0.10), transparent 55%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-24 lg:py-32 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-6">
          <SectionLabel index="07" label="Standards" />
          <AnimatedText
            as="h2"
            text="Certifications &amp; accreditations."
            className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]"
          />
          <p className="text-[var(--warm-white)]/70 leading-7 max-w-md">
            Our profiles, hardware, and quality controls are aligned with international
            standards for safety, performance, and durability.
          </p>

          <div className="rounded-2xl border border-[var(--gold)]/40 bg-[rgba(201,168,76,0.06)] p-6 max-w-md">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--gold)]">
              Warranty
            </div>
            <div className="mt-2 font-display text-3xl">10 Year Performance Warranty</div>
            <div className="mt-2 text-[var(--warm-white)]/75 text-sm leading-6">
              On profile integrity, color stability, and hardware function under regular use.
            </div>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={stagger(0)}
          className="lg:col-span-7 grid sm:grid-cols-2 gap-5"
        >
          {CERTIFICATIONS.map((c) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              whileHover={{ rotateX: 4, rotateY: -2, y: -4 }}
              style={{ transformPerspective: 800 }}
              className="glass-card rounded-2xl p-6 hover:border-[var(--gold)]/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--fog)]">
                  Verified
                </div>
                <div className="w-10 h-10 rounded-full border border-[var(--gold)] flex items-center justify-center text-[var(--gold)] font-mono text-[10px]">
                  ✓
                </div>
              </div>
              <div className="mt-4 font-display text-xl md:text-2xl">{c.title}</div>
              <div className="mt-2 text-[var(--warm-white)]/70 text-sm leading-6">{c.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
