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
  const navItems = [
    ["Home", "#top"],
    ["About Us", "#about"],
    ["Products", "#products"],
    ["Door Types", "#door-types"],
    ["Colors", "#colors"],
    ["Certifications", "#certifications"],
    ["Testimonials", "#testimonials"],
    ["Contact Us", "#contact"],
  ] as const;
  const productCards = [
    {
      title: "Sliding Door",
      desc: "Smooth-glide profiles with weatherproof sealing for modern openings.",
      image: "/frames/frame_10_delay-0.041s.png",
    },
    {
      title: "Sliding Window",
      desc: "Space-saving window systems built for insulation and daily durability.",
      image: "/frames/frame_24_delay-0.041s.png",
    },
    {
      title: "Openable Door",
      desc: "Secure door frames with strong hinges, locking options, and acoustic comfort.",
      image: "/frames/frame_40_delay-0.041s.png",
    },
    {
      title: "Openable Window",
      desc: "Ventilation-focused window design with tight closure and low maintenance.",
      image: "/frames/frame_57_delay-0.041s.png",
    },
    {
      title: "Laminated Wooden Texture Colors",
      desc: "Premium wooden-finish laminates for elevated architectural style.",
      image: "/frames/frame_73_delay-0.041s.png",
    },
    {
      title: "Solid Colors",
      desc: "Minimal, fade-resistant finishes tailored for contemporary projects.",
      image: "/frames/frame_89_delay-0.041s.png",
    },
  ] as const;

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
          style={{ paddingTop: isHeaderCompact ? 5 : 12, paddingBottom: isHeaderCompact ? 5 : 12 }}
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
                  width: isHeaderCompact ? "clamp(92px, 11vw, 138px)" : "clamp(166px, 19vw, 282px)",
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

          <nav className="hidden lg:flex items-center gap-4 xl:gap-5">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="font-semibold text-slate-700 hover:text-slate-900 transition-colors"
                style={{ fontSize: isHeaderCompact ? 12 : 13 }}
              >
                {label}
              </a>
            ))}
          </nav>

          <button
            className="rounded-full text-sm font-semibold text-white transition"
            style={{
              backgroundColor: accentHex,
              boxShadow: "0 14px 44px rgba(29,94,168,0.28)",
              padding: isHeaderCompact ? "5px 13px" : "11px 23px",
              fontSize: isHeaderCompact ? 12 : 15,
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
                {productCards.map((c) => (
                  <div
                    key={c.title}
                    className="rounded-3xl border border-sky-100 bg-white/90 p-6"
                    style={{ boxShadow: "0 18px 60px rgba(0,0,0,0.28)" }}
                  >
                    <img
                      src={c.image}
                      alt={c.title}
                      className="h-36 w-full rounded-2xl object-cover"
                      loading="lazy"
                    />
                    <div
                      className="text-slate-900 font-bold text-lg mt-4"
                    >
                      {c.title}
                    </div>
                    <div className="text-slate-700 mt-3 leading-7">{c.desc}</div>
                    <button
                      className="mt-4 rounded-full px-4 py-2 text-xs font-bold text-white"
                      style={{ backgroundColor: brandBlue }}
                    >
                      Read More
                    </button>
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
                Why Choose Our uPVC Solutions
              </h2>
              <p className="text-white/90 mt-3 leading-7">
                Engineered for durability, efficiency, and long-term performance across climates.
              </p>

              <div className="mt-10 grid md:grid-cols-2 gap-6">
                {[
                  "Pollution Resistant",
                  "Strength & Durability",
                  "Noise-proof",
                  "Corrosion-proof",
                  "Energy Saving",
                  "Highly Secure",
                  "Recyclable",
                  "Weatherproof",
                  "Lead Free",
                  "Easy to Install",
                  "Termite Resistant",
                  "Fireproof",
                ].map((s) => (
                  <div
                    key={s}
                    className="rounded-3xl border border-sky-100 bg-white/90 p-5"
                  >
                    <div className="text-slate-900 font-extrabold tracking-wide">{s}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section
            id="colors"
            data-story
            className="story-section min-h-screen px-4 flex items-center"
          >
            <div className="mx-auto max-w-6xl w-full">
              <h2 className="text-white font-extrabold text-3xl md:text-4xl">
                Signature Color Collection
              </h2>
              <p className="text-white/90 mt-3 leading-7 max-w-3xl">
                Premium laminated textures and solid tones to match modern and classic spaces.
              </p>
              <div className="mt-10 grid md:grid-cols-3 gap-6">
                {[
                  ["Nussbaum", "#5b3c29"],
                  ["Jet Black", "#18181b"],
                  ["Golden Oak", "#9a6a38"],
                  ["Anthracite Grey", "#4a4f58"],
                  ["Premium White", "#f4f4f5"],
                  ["Premium Black", "#09090b"],
                ].map(([name, swatch]) => (
                  <div key={name} className="rounded-3xl border border-sky-100 bg-white/92 p-5">
                    <div
                      className="h-28 rounded-2xl border border-black/10"
                      style={{ backgroundColor: swatch }}
                    />
                    <div className="mt-3 text-slate-900 font-bold">{name}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section
            id="door-types"
            data-story
            className="story-section min-h-screen px-4 flex items-center"
          >
            <div className="mx-auto max-w-6xl w-full">
              <h2 className="text-white font-extrabold text-3xl md:text-4xl">
                Types of Doors
              </h2>
              <p className="text-white/90 mt-3 leading-7 max-w-3xl">
                Select from big entrance doors, compact space-saving doors, and stylish designer
                doors for modern projects.
              </p>
              <div className="mt-10 grid md:grid-cols-5 gap-6">
                <div className="md:col-span-3 rounded-3xl border border-sky-100 bg-white/94 p-6">
                  <img
                    src="/frames/frame_31_delay-0.041s.png"
                    alt="Big Door Type"
                    className="h-64 md:h-72 w-full rounded-2xl object-cover"
                    loading="lazy"
                  />
                  <div className="mt-4 text-slate-900 text-2xl font-extrabold">Big Door Type</div>
                  <div className="text-slate-700 font-semibold mt-1">Grand Entrance Door</div>
                  <div className="text-slate-700 mt-3 leading-7">
                    Wide-profile designer doors for premium main entrances with stronger visual
                    impact and enhanced weather sealing.
                  </div>
                </div>

                <div className="md:col-span-2 grid gap-6">
                  {[
                    {
                      title: "Small Door Type",
                      subtitle: "Compact Utility Door",
                      desc: "Space-efficient doors for interior zones, kitchens, and service areas.",
                      image: "/frames/frame_52_delay-0.041s.png",
                    },
                    {
                      title: "Stylish Door Type",
                      subtitle: "Designer Modern Door",
                      desc: "Contemporary patterns and finishes for a clean and elegant look.",
                      image: "/frames/frame_78_delay-0.041s.png",
                    },
                  ].map((door) => (
                    <div
                      key={door.title}
                      className="rounded-3xl border border-sky-100 bg-white/92 p-5"
                    >
                      <img
                        src={door.image}
                        alt={door.title}
                        className="h-36 w-full rounded-2xl object-cover"
                        loading="lazy"
                      />
                      <div className="mt-3 text-slate-900 text-lg font-extrabold">{door.title}</div>
                      <div className="text-slate-700 font-semibold mt-1">{door.subtitle}</div>
                      <div className="text-slate-700 mt-2 leading-7">{door.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section
            id="certifications"
            data-story
            className="story-section min-h-screen px-4 flex items-center"
          >
            <div className="mx-auto max-w-6xl w-full">
              <h2 className="text-white font-extrabold text-3xl md:text-4xl">
                Certifications &amp; Accreditations
              </h2>
              <p className="text-white/90 mt-3 leading-7 max-w-3xl">
                Our production and QA workflows follow recognized standards for reliability,
                safety, and consistent batch quality.
              </p>
              <div className="mt-10 grid md:grid-cols-2 gap-6">
                {[
                  ["ISO Quality Management", "Documented process control from raw input to finished profiles."],
                  ["Lead-Free Compliance", "Safer profile chemistry aligned with international safety requirements."],
                  ["Weather Performance Testing", "Validated resistance against heat, moisture, and UV exposure."],
                  ["Security & Durability Benchmarks", "Hardware, frame strength, and lifecycle testing for long service."],
                ].map(([title, desc]) => (
                  <div key={title} className="rounded-3xl border border-sky-100 bg-white/92 p-6">
                    <div className="text-slate-900 font-extrabold">{title}</div>
                    <div className="text-slate-700 mt-2 leading-7">{desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section
            id="testimonials"
            data-story
            className="story-section min-h-screen px-4 flex items-center"
          >
            <div className="mx-auto max-w-6xl w-full">
              <h2 className="text-white font-extrabold text-3xl md:text-4xl">
                What Clients Say
              </h2>
              <p className="text-white/90 mt-3 leading-7 max-w-3xl">
                Feedback from contractors, architects, and homeowners we have worked with.
              </p>
              <div className="mt-10 grid md:grid-cols-3 gap-6">
                {[
                  ["Aftab Builders", "Excellent profile finish and timely delivery on our residential project."],
                  ["Urban Arch Studio", "The texture options and quality consistency are genuinely impressive."],
                  ["Nexa Homes", "Strong after-sales support and durable product performance over time."],
                ].map(([client, quote]) => (
                  <div key={client} className="rounded-3xl border border-sky-100 bg-white/92 p-6">
                    <div className="text-slate-900 font-extrabold">{client}</div>
                    <div className="mt-3 text-slate-700 leading-7">&ldquo;{quote}&rdquo;</div>
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

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[5] overflow-hidden">
        <div className="everlast-strip-big whitespace-nowrap">
          <span className="inline-block px-16 uppercase">
            Everlast Plastic · Everlast Plastic · Everlast Plastic · Everlast Plastic ·
            Everlast Plastic · Everlast Plastic · Everlast Plastic · Everlast Plastic ·
          </span>
          <span className="inline-block px-16 uppercase">
            Everlast Plastic · Everlast Plastic · Everlast Plastic · Everlast Plastic ·
            Everlast Plastic · Everlast Plastic · Everlast Plastic · Everlast Plastic ·
          </span>
        </div>
      </div>
    </div>
  );
}

