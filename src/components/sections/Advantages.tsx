"use client";

import { motion } from "framer-motion";
import { ADVANTAGES } from "@/lib/constants";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedText from "@/components/ui/AnimatedText";
import { fadeUp, stagger } from "@/lib/animations";

export default function Advantages() {
  return (
    <section
      id="advantages"
      className="relative section-mid overflow-hidden"
    >
      <div className="absolute -top-20 -left-10 font-display text-[16rem] leading-none text-white/[0.03] select-none pointer-events-none">
        02
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-6">
            <SectionLabel index="02" label="Why choose us" />
            <AnimatedText
              as="h2"
              text="Built beyond expectation. Engineered for every climate."
              className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]"
            />
            <p className="text-[var(--warm-white)]/70 leading-7 max-w-md">
              Multi-chamber profiles, steel reinforcement, weather-tight sealing and acoustic
              comfort — every detail is engineered to perform for years.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={stagger(0)}
            className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
          >
            {ADVANTAGES.map((adv, i) => (
              <motion.div
                key={adv.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className={`glass-card rounded-2xl p-5 transition-colors hover:border-[var(--gold)]/40 ${
                  adv.featured
                    ? "md:col-span-2 row-span-2 bg-[rgba(201,168,76,0.08)] border-[rgba(201,168,76,0.18)]"
                    : ""
                }`}
              >
                <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--fog)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div
                  className={`mt-3 font-display ${
                    adv.featured ? "text-2xl md:text-3xl" : "text-lg"
                  }`}
                >
                  {adv.title}
                </div>
                {"desc" in adv && adv.desc ? (
                  <div className="mt-2 text-[var(--warm-white)]/70 text-sm leading-6">
                    {adv.desc}
                  </div>
                ) : null}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
