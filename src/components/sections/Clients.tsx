"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedText from "@/components/ui/AnimatedText";
import Marquee from "@/components/ui/Marquee";
import { CLIENTS } from "@/lib/constants";
import { fadeUp, stagger } from "@/lib/animations";

export default function Clients() {
  return (
    <section id="clients" className="relative section-light overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-24 space-y-16">
        <div className="space-y-5">
          <SectionLabel index="06" label="Trusted by" variant="light" />
          <AnimatedText
            as="h2"
            text="Institutions, developers, and projects that depend on Everlast."
            className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.05] max-w-4xl"
          />
          <p className="text-[var(--obsidian)]/70 leading-7 max-w-2xl">
            From defence cantonments and teaching hospitals to gated communities and
            industrial campuses, our profiles are specified where performance, durability,
            and accountability are non negotiable.
          </p>
        </div>

        <div className="space-y-4">
          <Marquee>
            {CLIENTS.map((c) => (
              <div
                key={`a-${c.name}`}
                className="font-display text-3xl md:text-5xl text-[var(--obsidian)]/45 hover:text-[var(--obsidian)] transition-colors"
              >
                {c.name}
              </div>
            ))}
          </Marquee>
          <Marquee reverse>
            {CLIENTS.slice().reverse().map((c) => (
              <div
                key={`b-${c.name}`}
                className="font-display text-3xl md:text-5xl text-[var(--obsidian)]/45 hover:text-[var(--obsidian)] transition-colors"
              >
                {c.name}
              </div>
            ))}
          </Marquee>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={stagger(0)}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {CLIENTS.map((c) => (
            <motion.div
              key={c.name}
              variants={fadeUp}
              className="group rounded-2xl border border-black/8 bg-white p-6 hover:border-[var(--gold)]/50 hover:-translate-y-1 transition-all duration-500"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--steel)]">
                  {c.sector}
                </span>
                <span
                  aria-hidden
                  className="font-mono text-xs text-[var(--obsidian)]/40 group-hover:text-[var(--gold)] transition-colors"
                >
                  ↗
                </span>
              </div>
              <h3 className="mt-4 font-display text-2xl leading-[1.15] text-[var(--obsidian)]">
                {c.name}
              </h3>
              <div className="mt-1 text-[13px] text-[var(--obsidian)]/55">
                {c.full}
              </div>
              <p className="mt-4 text-[var(--obsidian)]/75 text-sm leading-6">
                {c.project}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="rounded-3xl border border-black/8 bg-[var(--obsidian)] text-[var(--warm-white)] p-8 lg:p-10 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--gold)]">
              Specifications on request
            </div>
            <h3 className="font-display text-2xl md:text-3xl leading-[1.15]">
              Project references, profile cross sections, and tested values are available
              for engineers and procurement teams.
            </h3>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)] text-[var(--obsidian)] px-6 py-3 text-[12px] font-mono uppercase tracking-[0.24em] hover:bg-[var(--gold-light)] transition-colors"
            >
              Request a dossier <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
