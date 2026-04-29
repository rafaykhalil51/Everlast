"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type FramesApiResponse = {
  count: number;
  files: string[];
};

export default function EverlastScrollExperience() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const targetIndexRef = useRef<number>(0);
  const animatedIndexRef = useRef<number>(0);
  const displayedIndexRef = useRef<number>(0);
  const loadedFrameSetRef = useRef<Set<number>>(new Set());
  const hasSampledAccentRef = useRef(false);
  const [frameFiles, setFrameFiles] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const accentHex = "#43b649";
  const brandBlue = "#1d5ea8";
  const brandMaroon = "#5e1728";
  const [logoOk, setLogoOk] = useState(true);
  const [isHeaderCompact, setIsHeaderCompact] = useState(false);
  const logoCandidates = useMemo(
    () => ["/logo.png", "/Logo.png", "/logo.jpg", "/logo.jpeg", "/logo.webp"],
    []
  );
  const [logoSrcIndex, setLogoSrcIndex] = useState(0);

  const scrollVh = useMemo(() => {
    if (!frameFiles.length) return 600;
    // 96 frames -> about 600vh, but clamp for safety.
    const vh = frameFiles.length * 6.25;
    return Math.max(550, Math.min(1100, vh));
  }, [frameFiles.length]);

  const currentFrameUrl = useMemo(() => {
    if (!frameFiles.length) return null;
    const idx = Math.max(0, Math.min(frameFiles.length - 1, currentIndex));
    return `/frames/${frameFiles[idx]}`;
  }, [frameFiles, currentIndex]);

  // Fetch frame list (so the scroll background works as soon as you paste frames).
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/frames");
        const data = (await res.json()) as FramesApiResponse;
        if (cancelled) return;
        setFrameFiles(data.files ?? []);
      } catch {
        // If API fails, keep the fallback gradient background.
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // Preload frames and mark valid images to prevent broken-frame flashes.
  useEffect(() => {
    if (!frameFiles.length) return;

    let cancelled = false;
    const ok = new Set<number>();

    frameFiles.forEach((file, idx) => {
      const img = new Image();
      img.decoding = "async";
      img.onload = () => {
        if (cancelled) return;
        ok.add(idx);
        loadedFrameSetRef.current = new Set(ok);
      };
      img.onerror = () => {
        // Skip any corrupt/missing frame file.
      };
      img.src = `/frames/${file}`;
    });

    return () => {
      cancelled = true;
    };
  }, [frameFiles]);

  const findNearestLoadedIndex = useCallback((target: number) => {
    const loadedFrameSet = loadedFrameSetRef.current;
    if (!loadedFrameSet.size) return target;
    if (loadedFrameSet.has(target)) return target;

    const max = frameFiles.length - 1;
    for (let dist = 1; dist <= 6; dist++) {
      const left = target - dist;
      const right = target + dist;
      if (left >= 0 && loadedFrameSet.has(left)) return left;
      if (right <= max && loadedFrameSet.has(right)) return right;
    }
    return displayedIndexRef.current;
  }, [frameFiles.length]);

  // Apply a stable palette derived from the uploaded logo.
  useEffect(() => {
    if (hasSampledAccentRef.current) return;
    hasSampledAccentRef.current = true;
    document.documentElement.style.setProperty("--accent", accentHex);
    document.documentElement.style.setProperty("--brand-blue", brandBlue);
    document.documentElement.style.setProperty("--brand-maroon", brandMaroon);
  }, [accentHex, brandBlue, brandMaroon]);

  // Map scroll -> background frame + update 3D camera progress.
  useEffect(() => {
    if (!containerRef.current) return;
    if (!frameFiles.length) return;
    if (frameFiles.length < 2) return;

    gsap.registerPlugin(ScrollTrigger);

    const maxIndex = frameFiles.length - 1;
    const triggerEl = containerRef.current;
    targetIndexRef.current = 0;
    animatedIndexRef.current = 0;

    let rafId = 0;
    const animateFrameIndex = () => {
      const target = targetIndexRef.current;
      const animated = animatedIndexRef.current;
      const nextAnimated = animated + (target - animated) * 0.26;
      animatedIndexRef.current = nextAnimated;

      const rounded = Math.round(nextAnimated);
      const safeIdx = findNearestLoadedIndex(rounded);
      if (safeIdx !== displayedIndexRef.current) {
        displayedIndexRef.current = safeIdx;
        setCurrentIndex(safeIdx);
      }

      rafId = window.requestAnimationFrame(animateFrameIndex);
    };
    rafId = window.requestAnimationFrame(animateFrameIndex);

    const st = ScrollTrigger.create({
      trigger: triggerEl,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.18,
      onUpdate: (self) => {
        const p = self.progress ?? 0;

        // Update target and let RAF smooth the visual sequence.
        const targetIdx = Math.max(0, Math.min(maxIndex, Math.round(p * maxIndex)));
        targetIndexRef.current = targetIdx;
      },
    });

    return () => {
      st.kill();
      window.cancelAnimationFrame(rafId);
    };
  }, [frameFiles, findNearestLoadedIndex]);

  // Reveal content sections when they come into view.
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-story]"));
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("story-show");
          }
        }
      },
      { threshold: 0.2 }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Collapse header chrome on scroll so only logo + CTA remain.
  useEffect(() => {
    const onScroll = () => {
      setIsHeaderCompact(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Fixed frame background */}
      <div className="fixed inset-0 z-0">
        {currentFrameUrl ? (
          <img
            src={currentFrameUrl}
            alt=""
            className="bg-frame"
            draggable={false}
            loading="eager"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background: "#f7fff9",
            }}
          />
        )}
      </div>

      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 z-20"
        style={{
          background: isHeaderCompact
            ? "rgba(246,252,255,0.18)"
            : "linear-gradient(to bottom, rgba(246,252,255,0.96), rgba(246,252,255,0.45), rgba(246,252,255,0))",
          backdropFilter: isHeaderCompact ? "blur(2px)" : "blur(6px)",
          WebkitBackdropFilter: isHeaderCompact ? "blur(2px)" : "blur(6px)",
          transition: "background 220ms ease, backdrop-filter 220ms ease",
        }}
      >
        <div
          className="mx-auto max-w-6xl px-4 flex items-center justify-between"
          style={{ paddingTop: isHeaderCompact ? 3 : 10, paddingBottom: isHeaderCompact ? 3 : 10 }}
        >
          <div className="flex items-center gap-2">
            {logoOk ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={logoCandidates[logoSrcIndex]}
                alt="Everlast Plastic logo"
                width={360}
                height={110}
                onError={() => {
                  const nextIndex = logoSrcIndex + 1;
                  if (nextIndex < logoCandidates.length) {
                    setLogoSrcIndex(nextIndex);
                  } else {
                    setLogoOk(false);
                  }
                }}
                style={{
                  width: isHeaderCompact ? "clamp(82px, 10vw, 126px)" : "clamp(152px, 18vw, 260px)",
                  height: "auto",
                  objectFit: "contain",
                  opacity: isHeaderCompact ? 0.9 : 1,
                  transition: "width 220ms ease, opacity 220ms ease",
                }}
              />
            ) : (
              <div
                className="font-bold"
                style={{ color: brandBlue, fontSize: 22, letterSpacing: 1 }}
              >
                EVERLAST
              </div>
            )}
          </div>

          <button
            className="rounded-full text-sm font-semibold text-white transition"
            style={{
              backgroundColor: accentHex,
              boxShadow: "0 14px 44px rgba(29,94,168,0.28)",
              padding: isHeaderCompact ? "4px 11px" : "10px 21px",
              fontSize: isHeaderCompact ? 11 : 15,
              lineHeight: 1.2,
              opacity: isHeaderCompact ? 0.9 : 1,
            }}
            onClick={() => {
              const el = document.getElementById("contact");
              el?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            GET A QUOTE
          </button>
        </div>
      </header>

      {/* Scroll story */}
      <div
        ref={containerRef}
        className="relative z-10"
        style={{ height: `${scrollVh}vh` }}
      >
        <main className="relative pt-20 pb-24">
          <section
            id="top"
            data-story
            className="story-section min-h-[76vh] px-4 flex items-center"
          >
            <div className="mx-auto max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-white/90 text-sm tracking-wide mb-4">
                  We&apos;are Open: Mon – Sat 8:00 – 18:00
                </p>
                <h1 className="text-white font-extrabold leading-[1.08] text-3xl md:text-4xl">
                  EVERLAST Plastic PVC Windows &amp; Door Specialists
                </h1>
                <p className="text-white/90 mt-5 text-base leading-7 max-w-xl">
                  Premium Building Material Solutions for Modern Construction. Delivering
                  high-quality uPVC profiles, piping systems, and innovative plastic solutions
                  designed for durability, safety, and long-term performance.
                </p>
                <div className="mt-7 flex gap-4">
                  <button
                    className="rounded-full px-6 py-3 text-sm font-semibold text-white"
                    style={{ backgroundColor: accentHex }}
                    onClick={() => {
                      const el = document.getElementById("products");
                      el?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                  >
                    Explore Products
                  </button>
                  <a
                    href="#about"
                    className="rounded-full px-6 py-3 text-sm font-semibold text-white border border-white/70 hover:border-white hover:text-white transition"
                  >
                    About Us
                  </a>
                </div>
              </div>

              <div className="hidden md:block">
                <div
                  className="rounded-3xl border border-sky-100 bg-white/85 p-6"
                  style={{
                    boxShadow: "0 22px 80px rgba(0,0,0,0.35)",
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-slate-600 text-xs">Main Location</div>
                      <div className="text-slate-900 font-semibold mt-1">
                        Plot # W1/27 &amp; 28, Near FFBL, Eastern Industrial Zone, Karachi
                      </div>
                    </div>
                    <div
                      className="rounded-full"
                      style={{
                        width: 10,
                        height: 10,
                        backgroundColor: accentHex,
                        marginTop: 4,
                      }}
                    />
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-4">
                    <div className="text-slate-600 text-xs">Call us</div>
                    <div className="text-slate-900 font-semibold">+92 343 0032738</div>
                    <div className="text-slate-600 text-xs">Mail</div>
                    <div className="text-slate-900 font-semibold">info@everlastplastic.com</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="products"
            data-story
            className="story-section min-h-screen px-4 flex items-center"
          >
            <div className="mx-auto max-w-6xl w-full">
              <h2 className="text-white font-extrabold text-3xl md:text-4xl">
                Premium Building Material Solutions
              </h2>
              <p className="text-white/90 mt-3 max-w-2xl leading-7">
                Engineered for durability, insulation, modern aesthetics, and long-term performance.
              </p>

              <div className="mt-10 grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "uPVC Profiles",
                    desc: "High-Quality Window & Door Systems. Engineered for durability, insulation, and modern aesthetics.",
                  },
                  {
                    title: "Advanced Piping Solutions",
                    desc: "Reliable Pipes for Every Application. From PPRC to HDPE and CPVC designed for pressure and long usage.",
                  },
                  {
                    title: "Modern Wall Panels",
                    desc: "Stylish & Durable Interior Solutions. Maintenance-free, moisture-resistant, and built to last.",
                  },
                ].map((c) => (
                  <div
                    key={c.title}
                    className="rounded-3xl border border-sky-100 bg-white/90 p-6"
                    style={{ boxShadow: "0 18px 60px rgba(0,0,0,0.28)" }}
                  >
                    <div
                      className="text-slate-900 font-bold text-lg"
                      style={{ textShadow: "0 10px 40px rgba(0,0,0,0.45)" }}
                    >
                      {c.title}
                    </div>
                    <div className="text-slate-700 mt-3 leading-7">{c.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section
            id="about"
            data-story
            className="story-section min-h-screen px-4 flex items-center"
          >
            <div className="mx-auto max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-white font-extrabold text-3xl md:text-4xl">
                  About Our Company
                </h2>
                <p className="text-white/90 mt-3 leading-7">
                  Building Durable &amp; Reliable Plastic Solutions for the Future.
                </p>
                <p className="text-white/85 mt-4 leading-7">
                  Everlast Plastic Pvt. Ltd. is a trusted manufacturer of high-quality building
                  materials, specializing in uPVC profiles, piping systems, and modern plastic solutions
                  designed for long-term performance.
                </p>
                <div className="mt-6 space-y-3">
                  {[
                    "High-Quality Manufacturing Standards",
                    "Advanced Technology & Testing",
                    "Durable & Long-Lasting Products",
                    "Trusted Across Multiple Industries",
                  ].map((t) => (
                    <div key={t} className="flex items-center gap-3">
                      <div
                        className="rounded-full"
                        style={{ width: 10, height: 10, backgroundColor: accentHex }}
                      />
                      <div className="text-white font-semibold">{t}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-sky-100 bg-white/90 p-7">
                <div className="text-slate-900 font-extrabold text-4xl leading-none">
                  3,010+
                </div>
                <div className="text-slate-600 mt-3">Satisfied Clients</div>
                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4">
                    <div className="text-slate-600 text-xs">Portfolio</div>
                    <div className="text-slate-900 font-bold mt-1">Premium Solutions</div>
                  </div>
                  <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4">
                    <div className="text-slate-600 text-xs">Quality</div>
                    <div className="text-slate-900 font-bold mt-1">Reliable by Design</div>
                  </div>
                </div>
                <div className="mt-7 text-slate-700 leading-7">
                  From production to delivery, we maintain strict quality standards at every stage.
                  Our manufacturing process and testing ensure every product meets the highest levels of durability and safety.
                </div>
              </div>
            </div>
          </section>

          <section
            id="services"
            data-story
            className="story-section min-h-screen px-4 flex items-center"
          >
            <div className="mx-auto max-w-6xl w-full">
              <h2 className="text-white font-extrabold text-3xl md:text-4xl">
                Our Awesome Services
              </h2>
              <p className="text-white/90 mt-3 leading-7">
                Building a more competitive business sector with premium building solutions.
              </p>

              <div className="mt-10 grid md:grid-cols-2 gap-6">
                {[
                  "SOLID WALL PANELS",
                  "UPVC Profiles",
                  "UPVC Ace Doors",
                  "PPRC Pipes",
                  "HDPE Pipes",
                  "UPVC Pipes",
                  "CPVC pipes",
                  "Garden Thread Pipes",
                ].map((s) => (
                  <div
                    key={s}
                    className="rounded-3xl border border-sky-100 bg-white/90 p-6"
                  >
                    <div className="text-slate-900 font-extrabold tracking-wide">{s}</div>
                    <div className="text-slate-700 mt-2 leading-7">
                      Built for durability, safety, and long-term performance.
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section
            id="contact"
            data-story
            className="story-section min-h-screen px-4 flex items-center"
          >
            <div className="mx-auto max-w-6xl w-full grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-white font-extrabold text-3xl md:text-4xl">
                  Contact Us
                </h2>
                <p className="text-white/90 mt-3 leading-7">
                  Get in touch for a quote, product recommendations, or project support.
                </p>
                <div className="mt-7 space-y-3 text-white">
                  <div className="flex gap-3">
                    <div style={{ color: "#ffffff", fontWeight: 800 }}>Phone:</div>
                    <div className="text-white">+92 343 0032738</div>
                  </div>
                  <div className="flex gap-3">
                    <div style={{ color: "#ffffff", fontWeight: 800 }}>Mail:</div>
                    <div className="text-white">info@everlastplastic.com</div>
                  </div>
                  <div className="flex gap-3">
                    <div style={{ color: "#ffffff", fontWeight: 800 }}>Location:</div>
                    <div className="text-white">
                      Plot # W1/27 &amp; 28, Near FFBL, Eastern Industrial Zone, Karachi
                    </div>
                  </div>
                </div>
              </div>

              <form
                className="rounded-3xl border border-sky-100 bg-white/95 p-6 w-full"
                onSubmit={(e) => e.preventDefault()}
              >
                <label className="block text-slate-700 text-sm font-semibold mb-2">
                  Name
                </label>
                <input
                  className="w-full rounded-2xl bg-white border border-sky-200 px-4 py-3 text-slate-900 outline-none focus:border-sky-500"
                  placeholder="Your name"
                />

                <div className="mt-4">
                  <label className="block text-slate-700 text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    className="w-full rounded-2xl bg-white border border-sky-200 px-4 py-3 text-slate-900 outline-none focus:border-sky-500"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="mt-4">
                  <label className="block text-slate-700 text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    className="w-full min-h-[120px] rounded-2xl bg-white border border-sky-200 px-4 py-3 text-slate-900 outline-none focus:border-sky-500"
                    placeholder="Tell us what you need..."
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full rounded-2xl px-6 py-3 text-sm font-semibold text-white transition"
                  style={{ backgroundColor: accentHex }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

