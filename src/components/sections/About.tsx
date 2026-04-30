"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedText from "@/components/ui/AnimatedText";
import { fadeUp, slideFromLeft, slideFromRight } from "@/lib/animations";
import { COMPANY } from "@/lib/constants";

export default function About() {
  return (
    <section
      id="about"
      className="relative section-light overflow-hidden"
    >
      <div className="absolute -top-32 right-0 font-display text-[18rem] leading-none text-[var(--obsidian)]/[0.04] select-none pointer-events-none">
        01
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-28 grid lg:grid-cols-12 gap-12 items-start">
        <motion.div
          className="lg:col-span-6 relative"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15% 0px" }}
          variants={slideFromLeft}
        >
          <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden border border-black/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/frames/frame_30_delay-0.041s.png"
              alt="Everlast Plastic uPVC craftsmanship"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <span className="absolute top-4 left-4 w-8 h-px bg-[var(--gold)]" />
            <span className="absolute top-4 left-4 w-px h-8 bg-[var(--gold)]" />
            <span className="absolute bottom-4 right-4 w-8 h-px bg-[var(--gold)]" />
            <span className="absolute bottom-4 right-4 w-px h-8 bg-[var(--gold)]" />
          </div>

          <motion.div
            variants={fadeUp}
            className="absolute -bottom-8 -right-4 lg:right-8 w-56 rounded-2xl bg-[var(--obsidian)] text-[var(--warm-white)] p-5 shadow-2xl"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--gold)]">
              500+
            </div>
            <div className="mt-2 font-display text-xl leading-tight">
              Projects completed across Pakistan.
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:col-span-6 space-y-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={slideFromRight}
        >
          <SectionLabel index="01" label="About us" variant="light" />
          <AnimatedText
            as="h2"
            text="Engineering refined uPVC windows and doors for modern architecture."
            className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]"
          />
          <p className="text-[var(--obsidian)]/70 leading-7 max-w-xl">
            {COMPANY.name} is a trusted manufacturer of high quality building materials,
            specialising in uPVC profiles and door systems. Our solutions combine European
            engineering principles with regional craftsmanship, designed for durability,
            energy efficiency, and timeless aesthetics.
          </p>

          <div className="border-l-2 border-[var(--gold)] pl-5 italic text-[var(--obsidian)]/80 max-w-xl">
            &ldquo;Quality is not an option for us. It is the standard for every profile we deliver.&rdquo;
          </div>

          <a
            href="/products"
            className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.24em] text-[var(--steel)] hover:text-[var(--obsidian)] transition-colors"
          >
            Explore our products
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
