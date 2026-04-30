"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedText from "@/components/ui/AnimatedText";
import { CREDENTIALS } from "@/lib/constants";
import { fadeUp, stagger } from "@/lib/animations";

const accentMap: Record<string, { ring: string; chip: string; text: string }> = {
  gold: {
    ring: "border-[var(--gold)]/40 hover:border-[var(--gold)]/70",
    chip: "bg-[var(--gold)]/15 text-[var(--gold)]",
    text: "text-[var(--gold)]",
  },
  steel: {
    ring: "border-white/15 hover:border-white/40",
    chip: "bg-white/5 text-[var(--warm-white)]",
    text: "text-[var(--warm-white)]/85",
  },
  emerald: {
    ring: "border-emerald-400/30 hover:border-emerald-300/60",
    chip: "bg-emerald-400/10 text-emerald-300",
    text: "text-emerald-300",
  },
};

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
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-24 lg:py-32 space-y-14">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <SectionLabel index="07" label="Credentials" />
            <AnimatedText
              as="h2"
              text="Documented, verifiable, and on file."
              className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]"
            />
            <p className="text-[var(--warm-white)]/70 leading-7 max-w-md">
              Independent test reports, government enlistment, environmental compliance,
              and corporate registration. Every claim on this site has paperwork behind it.
            </p>

            <div className="rounded-2xl border border-[var(--gold)]/40 bg-[rgba(201,168,76,0.06)] p-6 max-w-md">
              <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--gold)]">
                Warranty
              </div>
              <div className="mt-2 font-display text-3xl">10 Year Performance Warranty</div>
              <div className="mt-2 text-[var(--warm-white)]/75 text-sm leading-6">
                On profile integrity, colour stability, and hardware function under regular
                use.
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
            {CREDENTIALS.map((c) => {
              const accent = accentMap[c.accent] ?? accentMap.steel;
              return (
                <motion.div
                  key={c.id}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className={`relative glass-card rounded-2xl p-6 border ${accent.ring} transition-colors`}
                >
                  <div className="flex items-center justify-between">
                    <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--fog)]">
                      {c.category}
                    </div>
                    <div
                      className={`w-10 h-10 rounded-full border flex items-center justify-center font-mono text-[10px] ${accent.text}`}
                      style={{ borderColor: "currentColor" }}
                    >
                      ✓
                    </div>
                  </div>
                  <div className="mt-4 font-display text-xl md:text-2xl leading-[1.15]">
                    {c.title}
                  </div>
                  <div className="mt-1 text-[12px] text-[var(--warm-white)]/65">
                    {c.issuer}
                  </div>
                  <div
                    className={`mt-3 inline-flex items-center rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-[0.22em] ${accent.chip}`}
                  >
                    {c.reference}
                  </div>
                  <p className="mt-3 text-[var(--warm-white)]/75 text-sm leading-6">
                    {c.summary}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.22em] text-[var(--fog)]">
                    <span>Issued {c.issued}</span>
                    {c.validUntil && <span>Valid {c.validUntil}</span>}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
