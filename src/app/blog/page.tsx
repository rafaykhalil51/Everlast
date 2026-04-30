import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import PageCTA from "@/components/ui/PageCTA";
import { COMPANY, POSTS, POST_CATEGORIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog · Insights on uPVC Windows and Doors in Pakistan",
  description:
    "Honest, plain spoken guides on uPVC windows and doors for Pakistani homes and projects. Buying advice, energy savings, sound insulation, design trends, and installation know how.",
  keywords: [
    "uPVC blog",
    "uPVC windows Pakistan",
    "uPVC doors Pakistan",
    "energy efficient windows",
    "noise reduction windows",
    "Everlast Plastic blog",
    "double glazed windows",
    "thermal insulation Pakistan",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    title: "Blog · Insights on uPVC Windows and Doors in Pakistan",
    description:
      "Honest guides on uPVC windows and doors for Pakistani homes. Buying advice, energy savings, sound insulation, design, and installation.",
    url: "/blog",
    siteName: COMPANY.name,
    images: [{ url: COMPANY.ogImage, width: 1200, height: 630, alt: COMPANY.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog · Insights on uPVC Windows and Doors",
    description:
      "Honest guides on uPVC windows and doors for Pakistani homes and projects.",
    images: [COMPANY.ogImage],
  },
};

const postsSorted = [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));

export default function BlogIndexPage() {
  const featured = postsSorted[0];
  const rest = postsSorted.slice(1);

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: postsSorted.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${COMPANY.url}/blog/${p.slug}`,
      name: p.title,
    })),
  };

  return (
    <>
      <PageHero
        index="09"
        label="Journal"
        title="Field notes on uPVC, fenestration, and modern facades."
        subtitle="Practical writing from people who actually fabricate and install windows. No fluff, no generic listicles, no recycled internet content. Just what works on a Pakistani site in 2026."
      />

      <section className="relative section-dark border-t border-white/5">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-12 flex flex-wrap items-center gap-3">
          <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--gold)]">
            Topics
          </div>
          <div className="flex flex-wrap gap-2">
            {POST_CATEGORIES.map((c) => (
              <span
                key={c}
                className="rounded-full border border-white/15 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.22em] text-[var(--warm-white)]/80"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative section-dark">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 pb-20">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid lg:grid-cols-12 gap-8 items-stretch rounded-3xl overflow-hidden border border-white/10 bg-[rgba(255,255,255,0.02)] hover:border-[var(--gold)]/40 transition-colors"
          >
            <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featured.cover}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                loading="eager"
              />
              <span className="absolute top-5 left-5 rounded-full bg-[var(--gold)] text-[var(--obsidian)] px-3 py-1 text-[10px] font-mono uppercase tracking-[0.22em]">
                Featured
              </span>
            </div>
            <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-center gap-5">
              <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.26em] text-[var(--fog)]">
                <span className="text-[var(--gold)]">{featured.category}</span>
                <span className="opacity-50">·</span>
                <span>
                  {new Date(featured.date).toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="opacity-50">·</span>
                <span>{featured.readMinutes} min read</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.05]">
                {featured.title}
              </h2>
              <p className="text-[var(--warm-white)]/75 leading-7">
                {featured.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.24em] text-[var(--gold)] mt-1">
                Read article <span aria-hidden>→</span>
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="relative section-light border-t border-black/5">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-24">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--steel)]">
                Latest articles
              </div>
              <h2 className="font-display text-3xl md:text-5xl mt-2 leading-[1.05]">
                Everything else worth reading.
              </h2>
            </div>
            <div className="text-[13px] font-mono uppercase tracking-[0.22em] text-[var(--obsidian)]/60">
              {rest.length} articles
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex flex-col rounded-2xl overflow-hidden border border-black/8 bg-white hover:border-[var(--gold)]/50 hover:-translate-y-1 transition-all duration-500"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-[var(--obsidian)] text-[var(--warm-white)] px-3 py-1 text-[10px] font-mono uppercase tracking-[0.22em]">
                    {p.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <div className="font-mono text-[10px] uppercase tracking-[0.26em] text-[var(--obsidian)]/55">
                    {new Date(p.date).toLocaleDateString("en-GB", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                    <span className="opacity-50 mx-2">·</span>
                    {p.readMinutes} min
                  </div>
                  <h3 className="font-display text-2xl leading-[1.15] text-[var(--obsidian)] group-hover:text-[var(--steel)] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-[var(--obsidian)]/70 text-sm leading-6 line-clamp-3">
                    {p.excerpt}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--steel)]">
                    Read more <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        label="Plan your project"
        title="From article to actual quote."
        description="If something you read here matches a project you are planning, our team can put a real number to it. No pressure, no hard sell."
        primary={{ href: "/contact", label: "Get a quote" }}
        secondary={{ href: "/products", label: "Browse products" }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
    </>
  );
}
