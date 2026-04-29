"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedText from "@/components/ui/AnimatedText";
import { fadeUp, stagger } from "@/lib/animations";

const IMAGES = [
  "/frames/frame_05_delay-0.041s.png",
  "/frames/frame_22_delay-0.041s.png",
  "/frames/frame_38_delay-0.041s.png",
  "/frames/frame_55_delay-0.041s.png",
  "/frames/frame_64_delay-0.041s.png",
  "/frames/frame_82_delay-0.041s.png",
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative section-dark overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-24 lg:py-32 space-y-12">
        <div className="space-y-5">
          <SectionLabel index="05" label="Selected work" />
          <AnimatedText
            as="h2"
            text="Our work, in place."
            className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95]"
            wordClassName="mr-3"
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={stagger(0)}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px]"
        >
          {IMAGES.map((img, i) => (
            <motion.div
              key={img}
              variants={fadeUp}
              className={`group relative overflow-hidden rounded-2xl border border-white/8 ${
                i % 4 === 0 ? "row-span-2" : ""
              } ${i % 3 === 1 ? "col-span-2" : ""}`}
              data-cursor="hover"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img}
                alt="Project showcase"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:saturate-50"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.28em]">
                <span className="text-[var(--gold)]">Karachi · 2025</span>
                <span className="text-white/70">View →</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
