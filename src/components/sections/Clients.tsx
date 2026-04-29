"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedText from "@/components/ui/AnimatedText";
import Marquee from "@/components/ui/Marquee";
import { TESTIMONIALS } from "@/lib/constants";

const CLIENT_NAMES = [
  "Aftab Builders",
  "Urban Arch Studio",
  "Nexa Homes",
  "Skyline Developers",
  "Mira Architecture",
  "Vista Group",
  "Harbour Living",
  "Atrium Designs",
];

export default function Clients() {
  const [index, setIndex] = useState(0);
  const t = TESTIMONIALS[index];

  return (
    <section id="clients" className="relative section-light overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-24 space-y-16">
        <div className="space-y-5">
          <SectionLabel index="06" label="Trusted by" variant="light" />
          <AnimatedText
            as="h2"
            text="Architects, developers, and homeowners we are proud to work with."
            className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.05] max-w-4xl"
          />
        </div>

        <div className="space-y-4">
          <Marquee>
            {CLIENT_NAMES.map((c) => (
              <div
                key={`a-${c}`}
                className="font-display text-3xl md:text-5xl text-[var(--obsidian)]/45 hover:text-[var(--obsidian)] transition-colors"
              >
                {c}
              </div>
            ))}
          </Marquee>
          <Marquee reverse>
            {CLIENT_NAMES.slice().reverse().map((c) => (
              <div
                key={`b-${c}`}
                className="font-display text-3xl md:text-5xl text-[var(--obsidian)]/45 hover:text-[var(--obsidian)] transition-colors"
              >
                {c}
              </div>
            ))}
          </Marquee>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <motion.div
            key={t.client}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 rounded-3xl bg-[var(--obsidian)] text-[var(--warm-white)] p-10"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--gold)]">
              Testimonial
            </div>
            <p className="mt-4 font-display text-2xl md:text-3xl leading-[1.25]">
              “{t.quote}”
            </p>
            <div className="mt-8 font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--fog)]">
              — {t.client}
            </div>
          </motion.div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            {TESTIMONIALS.map((tt, i) => (
              <button
                key={tt.client}
                onClick={() => setIndex(i)}
                className={`text-left rounded-2xl border p-4 transition-colors ${
                  i === index
                    ? "bg-[var(--gold)] border-[var(--gold)] text-[var(--obsidian)]"
                    : "border-black/8 hover:border-black/30"
                }`}
              >
                <div className="font-grotesk font-semibold">{tt.client}</div>
                <div className="text-sm opacity-75 line-clamp-1 mt-1">{tt.quote}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
