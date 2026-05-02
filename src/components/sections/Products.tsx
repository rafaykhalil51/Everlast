"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { PRODUCTS } from "@/lib/constants";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedText from "@/components/ui/AnimatedText";
import { fadeUp } from "@/lib/animations";

const TABS = ["All", "Windows", "Doors"] as const;
type Tab = (typeof TABS)[number];

export default function Products() {
  const [tab, setTab] = useState<Tab>("All");
  const filtered = PRODUCTS.filter((p) => tab === "All" || p.category === tab);

  return (
    <section
      id="products"
      className="relative section-dark overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-24 lg:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-5">
            <SectionLabel index="03" label="Solutions" />
            <AnimatedText
              as="h2"
              text="Doors and windows for every project."
              className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] max-w-3xl"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-4 py-2 font-mono text-[11px] uppercase tracking-[0.24em] rounded-full border transition-colors ${
                  tab === t
                    ? "bg-[var(--gold)] text-[var(--obsidian)] border-[var(--gold)]"
                    : "border-white/15 text-[var(--warm-white)]/70 hover:border-white/30 hover:text-white"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5"
        >
          <AnimatePresence>
            {filtered.map((p, i) => {
              const heroSpan = p.hero ? "col-span-2 row-span-2" : "";
              return (
                <motion.a
                  key={p.id}
                  href={`#${p.id}`}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative aspect-square overflow-hidden rounded-2xl border border-white/8 bg-[#0b0b0c] ${heroSpan}`}
                  data-cursor="hover"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                    style={p.enhance ? { filter: "contrast(1.15) saturate(1.12) brightness(1.06)" } : undefined}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

                  {/* hairline frame on hover */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/0 group-hover:ring-[var(--gold)]/40 transition-[box-shadow,ring] duration-500 rounded-2xl pointer-events-none" />

                  <div className={`absolute inset-x-0 bottom-0 ${p.hero ? "p-7" : "p-5"} translate-y-1 group-hover:translate-y-0 transition-transform duration-500`}>
                    <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--gold)]">
                      {p.category}
                    </div>
                    <div className={`mt-1 font-display ${p.hero ? "text-2xl md:text-4xl" : "text-lg md:text-xl"}`}>
                      {p.title}
                    </div>
                    <div className="mt-1 text-[var(--warm-white)]/75 text-sm max-h-0 overflow-hidden group-hover:max-h-24 transition-[max-height] duration-500">
                      {p.desc}
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/0 group-hover:bg-white/10 border border-white/0 group-hover:border-white/30 backdrop-blur-sm transition-all duration-500 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </motion.a>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 grid lg:grid-cols-12 gap-8 items-center rounded-3xl bg-[rgba(255,255,255,0.04)] border border-white/8 p-8 lg:p-10"
        >
          <div className="lg:col-span-7">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--gold)]">
              Featured
            </div>
            <h3 className="mt-2 font-display text-3xl md:text-4xl">
              Europrofil Door System — open new possibilities.
            </h3>
            <p className="mt-4 text-[var(--warm-white)]/70 max-w-xl leading-7">
              Engineered hardware, multi-point locking, soundproof sealing and a polished
              interior finish — designed to elevate every entrance.
            </p>
          </div>
          <div className="lg:col-span-5 relative aspect-square max-lg:aspect-[4/3] rounded-2xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/featured-living-room.jpg"
              alt="Bright living space with expansive uPVC windows"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
