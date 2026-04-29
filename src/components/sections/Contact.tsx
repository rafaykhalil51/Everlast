"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedText from "@/components/ui/AnimatedText";
import { COMPANY } from "@/lib/constants";
import { fadeUp, slideFromLeft, slideFromRight } from "@/lib/animations";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative section-dark overflow-hidden">
      <div className="absolute -top-32 right-10 font-display text-[18rem] leading-none text-white/[0.05] select-none pointer-events-none">
        08
      </div>
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-24 lg:py-32 grid lg:grid-cols-12 gap-12">
        <motion.div
          className="lg:col-span-7"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={slideFromLeft}
        >
          <SectionLabel index="08" label="Get in touch" />
          <AnimatedText
            as="h2"
            text="Start your project with us."
            className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]"
          />
          <p className="mt-4 text-[var(--warm-white)]/70 max-w-lg leading-7">
            Tell us about your space — residential, commercial, or large-scale. Our team
            replies within one business day.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="mt-10 max-w-xl space-y-8"
          >
            {[
              { label: "Name", type: "text", id: "name" },
              { label: "Email", type: "email", id: "email" },
              { label: "Phone", type: "tel", id: "phone" },
            ].map((f) => (
              <div key={f.id} className="relative pt-5">
                <input
                  id={f.id}
                  type={f.type}
                  required
                  className="peer w-full bg-transparent border-b border-white/15 py-2 text-[var(--warm-white)] focus:outline-none focus:border-[var(--gold)] transition-colors"
                  placeholder=" "
                />
                <label
                  htmlFor={f.id}
                  className="absolute left-0 top-5 font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--fog)] transition-all peer-focus:-top-1 peer-focus:text-[10px] peer-focus:text-[var(--gold)] peer-[:not(:placeholder-shown)]:-top-1 peer-[:not(:placeholder-shown)]:text-[10px]"
                >
                  {f.label}
                </label>
              </div>
            ))}

            <div className="relative pt-5">
              <textarea
                id="message"
                rows={3}
                required
                className="peer w-full bg-transparent border-b border-white/15 py-2 text-[var(--warm-white)] focus:outline-none focus:border-[var(--gold)] transition-colors resize-none"
                placeholder=" "
              />
              <label
                htmlFor="message"
                className="absolute left-0 top-5 font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--fog)] transition-all peer-focus:-top-1 peer-focus:text-[10px] peer-focus:text-[var(--gold)] peer-[:not(:placeholder-shown)]:-top-1 peer-[:not(:placeholder-shown)]:text-[10px]"
              >
                Project details
              </label>
            </div>

            <button
              type="submit"
              disabled={submitted}
              className="relative inline-flex items-center justify-center gap-2 rounded-full border border-[var(--gold)] px-7 py-3 font-mono text-[12px] uppercase tracking-[0.24em] text-[var(--gold)] hover:text-[var(--obsidian)] transition-colors overflow-hidden"
              style={{
                background:
                  "linear-gradient(90deg, var(--gold) 50%, transparent 50%) right / 200% 100% no-repeat",
                transition: "background-position .55s var(--ease-expo), color .35s var(--ease-expo)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundPosition = "left")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundPosition = "right")}
            >
              {submitted ? "✓ Sent" : "Send Message"}
              {!submitted && <span aria-hidden>→</span>}
            </button>
          </form>
        </motion.div>

        <motion.div
          className="lg:col-span-5 space-y-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={slideFromRight}
        >
          <motion.div variants={fadeUp} className="space-y-2">
            <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--gold)]">
              Phone
            </div>
            <a href={`tel:${COMPANY.phone}`} className="font-display text-2xl link-underline">
              {COMPANY.phone}
            </a>
          </motion.div>
          <motion.div variants={fadeUp} className="space-y-2">
            <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--gold)]">
              Email
            </div>
            <a href={`mailto:${COMPANY.email}`} className="font-display text-2xl link-underline">
              {COMPANY.email}
            </a>
          </motion.div>
          <motion.div variants={fadeUp} className="space-y-2">
            <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--gold)]">
              Office
            </div>
            <div className="text-[var(--warm-white)]/85 leading-7 max-w-xs">
              {COMPANY.address}
            </div>
          </motion.div>

          <motion.a
            variants={fadeUp}
            href="#"
            className="block rounded-2xl border border-[#22c55e]/30 bg-[#22c55e]/5 p-5 hover:bg-[#22c55e]/10 transition-colors"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#22c55e]">
              WhatsApp
            </div>
            <div className="mt-1 font-display text-xl">Chat with us now →</div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
