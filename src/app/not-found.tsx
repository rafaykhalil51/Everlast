import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center section-dark overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 30%, rgba(201,168,76,0.18), transparent 55%), radial-gradient(circle at 70% 70%, rgba(29,94,168,0.20), transparent 55%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl text-center px-5 lg:px-8 py-32 space-y-6">
        <div className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--gold)]">
          Error · 404
        </div>
        <h1 className="font-display text-6xl md:text-8xl leading-[0.95]">
          Page not found.
        </h1>
        <p className="text-[var(--warm-white)]/70 max-w-xl mx-auto leading-7">
          The page you&rsquo;re looking for has moved, no longer exists, or never existed. From
          here, you can return home or explore our collections.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)] text-[var(--obsidian)] px-7 py-3 text-[12px] font-mono uppercase tracking-[0.24em] hover:bg-[var(--gold-light)] transition-colors"
          >
            Go home <span aria-hidden>→</span>
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3 text-[12px] font-mono uppercase tracking-[0.24em] text-[var(--warm-white)]/85 hover:border-white/40 hover:text-white transition-colors"
          >
            Browse products <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
