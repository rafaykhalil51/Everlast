"use client";

import Link from "next/link";
import { COMPANY, LEGAL_LINKS, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative bg-[#080808] text-[var(--warm-white)] overflow-hidden border-t border-white/5">
      <div className="overflow-hidden">
        <div className="everlast-strip-big whitespace-nowrap py-6">
          <span className="inline-block px-12 uppercase">
            Quality European · Quality European · Quality European · Quality European ·
          </span>
          <span className="inline-block px-12 uppercase">
            Quality European · Quality European · Quality European · Quality European ·
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4 space-y-5">
          <Link href="/" aria-label={COMPANY.name} className="inline-block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt={`${COMPANY.name} logo`}
              className="w-[220px] h-auto"
              style={{ filter: "invert(1) hue-rotate(180deg)" }}
            />
          </Link>
          <p className="text-[var(--warm-white)]/65 max-w-md leading-7">
            {COMPANY.tagline} {COMPANY.legalName} is Pakistan&rsquo;s premium uPVC windows and doors brand —
            engineered for quality, performance and timeless design.
          </p>
        </div>

        <div className="md:col-span-3 space-y-3">
          <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--gold)]">
            Navigate
          </div>
          <div className="grid grid-cols-2 gap-y-2">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="link-underline text-[var(--warm-white)]/85"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="md:col-span-3 space-y-3">
          <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--gold)]">
            Legal
          </div>
          <div className="grid gap-y-2">
            {LEGAL_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="link-underline text-[var(--warm-white)]/85"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 space-y-3">
          <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--gold)]">
            Contact
          </div>
          <div className="text-[var(--warm-white)]/85 leading-7 text-sm">
            {COMPANY.address}
          </div>
          <a className="block link-underline text-sm" href={`tel:${COMPANY.phone}`}>
            {COMPANY.phone}
          </a>
          <a className="block link-underline text-sm" href={`mailto:${COMPANY.email}`}>
            {COMPANY.email}
          </a>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[12px] text-[var(--fog)]">
          <div>
            © {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.
          </div>
          <Link href="#" className="link-underline font-mono uppercase tracking-[0.24em]">
            ↑ Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
}
