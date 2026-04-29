"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { COMPANY } from "@/lib/constants";

const TAGLINE = COMPANY.tagline;

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = window.sessionStorage.getItem("everlast-loader-seen");
    if (seen) {
      setVisible(false);
      return;
    }

    let canceled = false;

    const typeOut = async () => {
      for (let i = 0; i <= TAGLINE.length; i++) {
        if (canceled) return;
        setTyped(TAGLINE.slice(0, i));
        await new Promise((r) => setTimeout(r, 22));
      }
    };

    typeOut();
    const t = window.setTimeout(() => {
      window.sessionStorage.setItem("everlast-loader-seen", "1");
      setVisible(false);
    }, 2000);
    return () => {
      canceled = true;
      window.clearTimeout(t);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loader-shell"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35 } }}
        >
          <motion.div
            className="absolute top-0 left-0 right-0 bg-[var(--obsidian)] origin-top"
            style={{ height: "50vh" }}
            initial={{ scaleY: 1 }}
            exit={{ scaleY: 0, transition: { duration: 0.85, ease: [0.83, 0, 0.17, 1] } }}
          />
          <motion.div
            className="absolute bottom-0 left-0 right-0 bg-[var(--obsidian)] origin-bottom"
            style={{ height: "50vh" }}
            initial={{ scaleY: 1 }}
            exit={{ scaleY: 0, transition: { duration: 0.85, ease: [0.83, 0, 0.17, 1] } }}
          />

          <motion.div
            className="relative z-10 flex flex-col items-center gap-6 px-6 text-center"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            <motion.img
              src="/logo.png"
              alt={`${COMPANY.name} logo`}
              width={520}
              height={160}
              className="w-[280px] md:w-[420px]"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
              }}
              style={{ filter: "drop-shadow(0 8px 28px rgba(255,255,255,0.08))" }}
            />
            <div
              className="font-mono text-[11px] md:text-xs tracking-[0.4em] uppercase text-[var(--fog)] min-h-[1.5em]"
            >
              {typed}
              <span className="ml-1 inline-block w-[1ch] animate-pulse">|</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
