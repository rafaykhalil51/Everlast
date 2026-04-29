"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";
import { fadeUp, stagger } from "@/lib/animations";
import { COMPANY, LEGAL_LINKS } from "@/lib/constants";

type Props = {
  index: string;
  title: string;
  effectiveDate?: string;
  intro: string;
  children: ReactNode;
};

export default function LegalPage({
  index,
  title,
  effectiveDate = "29 April 2026",
  intro,
  children,
}: Props) {
  return (
    <article className="section-light">
      <header className="relative overflow-hidden pt-36 lg:pt-48 pb-16">
        <div className="absolute -top-32 right-0 font-display text-[18rem] leading-none text-[var(--obsidian)]/[0.04] select-none pointer-events-none">
          {index}
        </div>
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger(0)}
          className="relative mx-auto max-w-4xl px-5 lg:px-8 space-y-5"
        >
          <motion.div
            variants={fadeUp}
            className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--obsidian)]/55 flex items-center gap-3"
          >
            <span className="text-[var(--steel)]">{index}</span>
            <span className="h-px w-10 bg-current opacity-40" />
            Legal
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl md:text-6xl leading-[1.05]"
          >
            {title}
          </motion.h1>
          <motion.div
            variants={fadeUp}
            className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--obsidian)]/55"
          >
            Effective: {effectiveDate}
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="text-[var(--obsidian)]/75 leading-7 max-w-2xl"
          >
            {intro}
          </motion.p>
        </motion.div>
      </header>

      <div className="mx-auto max-w-4xl px-5 lg:px-8 pb-24 grid lg:grid-cols-12 gap-10">
        <aside className="lg:col-span-3 lg:sticky lg:top-28 self-start hidden lg:block">
          <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--obsidian)]/55 mb-3">
            Other policies
          </div>
          <nav className="flex flex-col gap-2">
            {LEGAL_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-[var(--obsidian)]/75 hover:text-[var(--obsidian)] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </aside>

        <div className="lg:col-span-9 prose prose-neutral max-w-none">
          <div className="space-y-6 text-[var(--obsidian)]/85 leading-7 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-[var(--obsidian)] [&_h3]:font-grotesk [&_h3]:font-semibold [&_h3]:text-lg [&_h3]:mt-6 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_a]:text-[var(--steel)] [&_a]:underline">
            {children}
          </div>

          <div className="mt-16 rounded-2xl border border-black/10 bg-white p-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--steel)]">
              Questions?
            </div>
            <div className="mt-2 text-[var(--obsidian)]/85">
              For any inquiries about this policy, contact{" "}
              <a className="link-underline font-semibold" href={`mailto:${COMPANY.email}`}>
                {COMPANY.email}
              </a>{" "}
              or call{" "}
              <a className="link-underline font-semibold" href={`tel:${COMPANY.phone}`}>
                {COMPANY.phone}
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
