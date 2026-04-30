"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 1.6 }}
        className="fixed top-0 inset-x-0 z-40"
      >
        <div
          className={`transition-all duration-500 ${
            scrolled
              ? "bg-[rgba(13,13,13,0.55)] backdrop-blur-xl border-b border-white/5"
              : "bg-transparent"
          }`}
        >
          <div className="mx-auto max-w-7xl px-5 lg:px-8 flex items-center justify-between gap-6 h-16 lg:h-20">
            <Link
              href="/"
              className="flex items-center gap-3 link-underline"
              aria-label={COMPANY.name}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt={`${COMPANY.name} logo`}
                width={420}
                height={140}
                style={{
                  width: scrolled ? "clamp(96px, 10vw, 138px)" : "clamp(140px, 14vw, 196px)",
                  height: "auto",
                  filter:
                    "invert(1) hue-rotate(180deg) drop-shadow(0 4px 18px rgba(0,0,0,0.45))",
                  transition: "width .35s var(--ease-expo)",
                }}
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-7 text-[12.5px] font-medium text-[var(--warm-white)]/80">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`link-underline hover:text-white transition-colors ${
                    isActive(l.href) ? "text-[var(--gold)]" : ""
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-2 group rounded-full border border-[var(--gold)]/70 px-5 py-2 text-[12px] font-mono uppercase tracking-[0.22em] text-[var(--gold)] hover:text-[var(--obsidian)] transition-colors"
                style={{
                  background:
                    "linear-gradient(90deg, var(--gold) 50%, transparent 50%) right / 200% 100% no-repeat",
                  transition: "background-position .45s var(--ease-expo), color .35s var(--ease-expo)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundPosition = "left")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundPosition = "right")}
              >
                Get Quote
              </Link>

              <button
                aria-label="Toggle menu"
                onClick={() => setOpen((v) => !v)}
                className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/15 hover:border-white/40 transition"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <motion.path
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    animate={open ? { d: "M6 6L18 18" } : { d: "M4 7h16" }}
                  />
                  <motion.path
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    animate={open ? { d: "M6 18L18 6" } : { d: "M4 17h16" }}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-30 bg-[var(--obsidian)]/95 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="h-full flex flex-col items-end justify-center pr-8 gap-5 text-right">
              {NAV_LINKS.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.06 * i, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                  }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-4xl text-[var(--warm-white)]/90 hover:text-[var(--gold)] transition-colors"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
