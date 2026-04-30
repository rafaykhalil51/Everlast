import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageCTA from "@/components/ui/PageCTA";
import { COMPANY, POSTS } from "@/lib/constants";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Article not found" };

  const url = `${COMPANY.url}/blog/${post.slug}`;
  const title = post.title;
  const description = post.description;

  return {
    title,
    description,
    keywords: post.keywords,
    authors: [{ name: post.author.name }],
    category: post.category,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title,
      description,
      url,
      siteName: COMPANY.name,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [post.author.name],
      tags: post.tags,
      images: [
        { url: post.cover, width: 1200, height: 630, alt: post.title },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [post.cover],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const url = `${COMPANY.url}/blog/${post.slug}`;
  const formattedDate = new Date(post.date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: post.title,
    description: post.description,
    image: [`${COMPANY.url}${post.cover}`],
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    author: [
      {
        "@type": "Organization",
        name: COMPANY.name,
        url: COMPANY.url,
      },
    ],
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
      logo: {
        "@type": "ImageObject",
        url: `${COMPANY.url}${COMPANY.logo}`,
      },
    },
    keywords: post.keywords.join(", "),
    articleSection: post.category,
    inLanguage: "en-PK",
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: COMPANY.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${COMPANY.url}/blog`,
      },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  const related = POSTS.filter(
    (p) => p.slug !== post.slug && p.category === post.category,
  )
    .slice(0, 2)
    .concat(
      POSTS.filter(
        (p) =>
          p.slug !== post.slug &&
          p.category !== post.category,
      ).slice(0, 1),
    )
    .slice(0, 3);

  return (
    <>
      <article className="section-light">
        <header className="relative overflow-hidden pt-36 lg:pt-44 pb-12 border-b border-black/5">
          <div className="absolute -top-32 right-0 font-display text-[18rem] leading-none text-[var(--obsidian)]/[0.04] select-none pointer-events-none">
            09
          </div>
          <div className="relative mx-auto max-w-4xl px-5 lg:px-8 space-y-6">
            <nav
              aria-label="Breadcrumb"
              className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--obsidian)]/55 flex items-center gap-3"
            >
              <Link href="/" className="link-underline">
                Home
              </Link>
              <span className="opacity-40">/</span>
              <Link href="/blog" className="link-underline">
                Blog
              </Link>
              <span className="opacity-40">/</span>
              <span className="text-[var(--steel)]">{post.category}</span>
            </nav>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              {post.title}
            </h1>

            <p className="text-[var(--obsidian)]/75 leading-7 max-w-2xl text-lg">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--obsidian)]/55">
              <span>By {post.author.name}</span>
              <span className="opacity-40">·</span>
              <time dateTime={post.date}>{formattedDate}</time>
              <span className="opacity-40">·</span>
              <span>{post.readMinutes} min read</span>
              <span className="opacity-40">·</span>
              <span className="text-[var(--steel)]">{post.category}</span>
            </div>
          </div>
        </header>

        <div className="relative mx-auto max-w-6xl px-5 lg:px-8 py-12">
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-black/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.cover}
              alt={post.title}
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-5 lg:px-8 pb-20 grid lg:grid-cols-12 gap-10">
          <aside className="lg:col-span-3 lg:sticky lg:top-28 self-start hidden lg:block">
            <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--obsidian)]/55 mb-3">
              On this page
            </div>
            <nav className="flex flex-col gap-2 text-sm">
              {post.toc.map((t) => (
                <a
                  key={t.id}
                  href={`#${t.id}`}
                  className="text-[var(--obsidian)]/75 hover:text-[var(--steel)] transition-colors leading-6"
                >
                  {t.label}
                </a>
              ))}
              <a
                href="#faqs"
                className="text-[var(--obsidian)]/75 hover:text-[var(--steel)] transition-colors leading-6"
              >
                Frequently asked questions
              </a>
            </nav>

            <div className="mt-8 rounded-2xl border border-black/10 bg-white p-5 text-sm">
              <div className="font-mono text-[10px] uppercase tracking-[0.26em] text-[var(--steel)]">
                Tags
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-[var(--obsidian)]/5 px-3 py-1 text-[11px] text-[var(--obsidian)]/75"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          <div className="lg:col-span-9">
            <div className="space-y-12 text-[var(--obsidian)]/85 text-[17px] leading-[1.8]">
              {post.body.map((s) => (
                <section key={s.id} id={s.id} className="scroll-mt-28">
                  <h2 className="font-display text-3xl md:text-4xl text-[var(--obsidian)] mb-5 leading-[1.1]">
                    {s.heading}
                  </h2>
                  <div className="space-y-5">
                    {s.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                  {s.bullets && (
                    <ul className="mt-5 space-y-2 list-disc pl-6 marker:text-[var(--gold)]">
                      {s.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              <section id="faqs" className="scroll-mt-28 pt-4">
                <h2 className="font-display text-3xl md:text-4xl text-[var(--obsidian)] mb-6 leading-[1.1]">
                  Frequently asked questions
                </h2>
                <div className="space-y-3">
                  {post.faqs.map((f) => (
                    <details
                      key={f.q}
                      className="group rounded-2xl border border-black/10 bg-white p-5 open:border-[var(--gold)]/50 transition-colors"
                    >
                      <summary className="cursor-pointer list-none flex items-start justify-between gap-6 font-grotesk font-semibold text-[var(--obsidian)]">
                        <span>{f.q}</span>
                        <span
                          aria-hidden
                          className="font-mono text-xl text-[var(--steel)] transition-transform group-open:rotate-45"
                        >
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-[var(--obsidian)]/75 leading-7">
                        {f.a}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              <section className="rounded-3xl border border-black/10 bg-[var(--obsidian)] text-[var(--warm-white)] p-8 lg:p-10 mt-6">
                <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--gold)]">
                  Talk to our team
                </div>
                <h3 className="mt-3 font-display text-3xl md:text-4xl leading-[1.1]">
                  Bring this article to your project.
                </h3>
                <p className="mt-3 text-[var(--warm-white)]/75 leading-7 max-w-xl">
                  Share your floor plan, room dimensions, or current windows. Our team will
                  reply with a tailored specification and an honest quote, usually within one
                  working day.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)] text-[var(--obsidian)] px-6 py-3 text-[12px] font-mono uppercase tracking-[0.24em] hover:bg-[var(--gold-light)] transition-colors"
                  >
                    Get a quote <span aria-hidden>→</span>
                  </Link>
                  <a
                    href={`https://wa.me/${COMPANY.phone.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-[12px] font-mono uppercase tracking-[0.24em] text-[var(--warm-white)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors"
                  >
                    WhatsApp us <span aria-hidden>→</span>
                  </a>
                </div>
              </section>
            </div>

            {related.length > 0 && (
              <div className="mt-16 pt-10 border-t border-black/10">
                <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--steel)] mb-4">
                  Keep reading
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/blog/${r.slug}`}
                      className="group rounded-2xl overflow-hidden border border-black/8 bg-white hover:border-[var(--gold)]/50 hover:-translate-y-1 transition-all duration-500"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={r.cover}
                          alt={r.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-5 space-y-2">
                        <div className="font-mono text-[10px] uppercase tracking-[0.26em] text-[var(--steel)]">
                          {r.category}
                        </div>
                        <div className="font-display text-xl leading-[1.2] text-[var(--obsidian)]">
                          {r.title}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-12 flex items-center justify-between text-sm">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.24em] text-[var(--steel)] hover:text-[var(--obsidian)] transition-colors"
              >
                <span aria-hidden>←</span> All articles
              </Link>
              <a
                href="#"
                className="font-mono text-[12px] uppercase tracking-[0.24em] text-[var(--obsidian)]/55 hover:text-[var(--obsidian)] transition-colors"
              >
                ↑ Back to top
              </a>
            </div>
          </div>
        </div>
      </article>

      <PageCTA
        label="Ready to specify"
        title="Send us your floor plan."
        description="Whether it is a single room renovation or a full elevation, we can specify the right profile, glass, and hardware in a single reply."
        primary={{ href: "/contact", label: "Start a project" }}
        secondary={{ href: "/blog", label: "More articles" }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </>
  );
}
