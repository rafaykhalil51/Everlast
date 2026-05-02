"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { COMPANY } from "@/lib/constants";
import { stagger, wordReveal } from "@/lib/animations";

const HeroScene = dynamic(() => import("@/components/3d/HeroScene"), {
  ssr: false,
  loading: () => null,
});

const HeroProductScene = dynamic(
  () => import("@/components/3d/HeroProductScene"),
  { ssr: false, loading: () => null },
);

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden section-dark"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(201,168,76,0.10), transparent 55%), radial-gradient(circle at 80% 70%, rgba(29,94,168,0.18), transparent 55%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(circle at 50% 50%, black 60%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 50%, black 60%, transparent 90%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-5 lg:px-8 pt-28 pb-24 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger(1.4)}
            className="space-y-6"
          >
            <motion.div
              variants={wordReveal}
              className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--gold)]"
            >
              <span className="inline-block w-8 h-px bg-[var(--gold)]" />
              Advanced uPVC Solutions
            </motion.div>

            <h1 className="font-display text-[clamp(3rem,9vw,8rem)] leading-[0.92] tracking-tight">
              <span className="block overflow-hidden">
                <motion.span variants={wordReveal} className="inline-block">
                  Bringing{" "}
                  <span
                    className="inline-block"
                    style={{
                      WebkitTextStroke: "1px var(--gold)",
                      color: "transparent",
                    }}
                  >
                    elegance
                  </span>
                </motion.span>
              </span>

              <span className="block overflow-hidden">
                <motion.span variants={wordReveal} className="inline-block">
                  into your home
                </motion.span>
              </span>
            </h1>

            <motion.p
              variants={wordReveal}
              className="max-w-xl text-[var(--warm-white)]/70 text-base md:text-lg leading-7"
            >
              {COMPANY.name} — premium uPVC windows and doors engineered with
              cutting-edge Chinese technology. Crafted for durability, energy efficiency, and architectural elegance.
            </motion.p>

            <motion.div variants={wordReveal} className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)] text-[var(--obsidian)] px-7 py-3 text-[12px] font-mono uppercase tracking-[0.24em] hover:bg-[var(--gold-light)] transition-colors"
              >
                Explore Products
                <span aria-hidden>→</span>
              </a>
              <a
                href="/gallery"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3 text-[12px] font-mono uppercase tracking-[0.24em] text-[var(--warm-white)]/85 hover:border-white/40 hover:text-white transition-colors"
              >
                Gallery
                <span aria-hidden>→</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 2.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] } }}
            className="mt-16 flex items-center gap-4 text-[var(--fog)] font-mono text-[10px] uppercase tracking-[0.3em]"
          >
            <span className="inline-block w-6 h-px bg-[var(--fog)]" />
            <span>Scroll</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block"
              aria-hidden
            >
              ↓
            </motion.span>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative h-[78vh] md:h-[82vh]" data-cursor="drag">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                "radial-gradient(closest-side, rgba(201,168,76,0.18), transparent 70%)",
            }}
            aria-hidden
          />
          <div className="absolute inset-0 z-10">
            <HeroProductScene />
          </div>
          <div className="absolute inset-0 z-20 pointer-events-none">
            <HeroScene />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, transition: { delay: 2.2, duration: 0.8 } }}
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--fog)]"
          >
            Since {COMPANY.founded} · Karachi, Pakistan
          </motion.div>
        </div>
      </div>
    </section>
  );
}
