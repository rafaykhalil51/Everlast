import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import PageCTA from "@/components/ui/PageCTA";
import Certifications from "@/components/sections/Certifications";
import { COMPANY, CREDENTIALS, NTU_RESULTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Certifications and Credentials",
  description:
    "Independent laboratory test reports, MES enlistment, SEPA environmental compliance, and SECP incorporation. Documented evidence behind every Everlast Plastic profile.",
  keywords: [
    "Everlast Plastic certifications",
    "MES enlisted uPVC supplier",
    "NTU test report uPVC",
    "SEPA certificate Pakistan",
    "SECP incorporation Everlast",
    "uPVC profile testing",
  ],
  alternates: { canonical: "/certifications" },
  openGraph: {
    type: "article",
    title: "Certifications and Credentials · Everlast Plastic",
    description:
      "Independent test reports, MES enlistment, SEPA compliance, and SECP incorporation. The paperwork behind every Everlast Plastic profile.",
    url: "/certifications",
    siteName: COMPANY.name,
    images: [
      {
        url: "/certifications/mes-certificate.png",
        width: 1200,
        height: 800,
        alt: "MES Enlistment Certificate",
      },
    ],
  },
};

export default function CertificationsPage() {
  const docs = CREDENTIALS;
  const featured = docs.find((d) => d.id === "mes-certificate") ?? docs[0];
  const documentsLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Everlast Plastic Credentials",
    itemListElement: docs.map((d, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: d.title,
      url: `${COMPANY.url}/certifications#${d.id}`,
    })),
  };

  return (
    <>
      <PageHero
        index="07"
        label="Credentials"
        title="The paperwork behind every profile."
        subtitle="Independent laboratory test reports, MES enlistment, environmental compliance, and corporate registration. Every credential on this page is on file and verifiable."
      />

      {/* Featured: MES Enlistment */}
      <section className="relative section-dark border-t border-white/5">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1 space-y-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--gold)] flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-[var(--gold)]" />
              Featured credential
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">
              Enlisted with the Military Engineer Services.
            </h2>
            <p className="text-[var(--warm-white)]/75 leading-7 max-w-xl">
              Everlast Plastic is provisionally enlisted with the Engineer in Chief&rsquo;s
              Branch, GHQ Rawalpindi, in category Bldg, for the supply of uPVC profiles for
              windows and uPVC washroom doors. The enlistment is recognised across all MES
              formations in Pakistan.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 max-w-xl">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--gold)]">
                  Serial No.
                </div>
                <div className="mt-1 font-display text-2xl">600</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--gold)]">
                  Registration No.
                </div>
                <div className="mt-1 font-display text-base break-words">
                  DP&amp;W/B/E-3/197/2025
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--gold)]">
                  Issued
                </div>
                <div className="mt-1 font-display text-2xl">{featured.issued}</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--gold)]">
                  Valid Until
                </div>
                <div className="mt-1 font-display text-2xl">{featured.validUntil}</div>
              </div>
            </div>
            <ul className="text-[var(--warm-white)]/85 space-y-2 mt-2 max-w-xl">
              {featured.items.map((it) => (
                <li key={it} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-[var(--gold)]"
                  />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/certifications/mes-certificate.png"
                alt="MES Enlistment Certificate Serial 600"
                className="w-full h-auto block"
                loading="eager"
              />
              <span className="absolute top-4 left-4 rounded-full bg-[var(--gold)] text-[var(--obsidian)] px-3 py-1 text-[10px] font-mono uppercase tracking-[0.22em]">
                Provisional · Bldg
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* NTU laboratory test results */}
      <section
        id="ntu-test-report"
        className="relative section-light border-t border-black/5 scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-24 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-5">
            <div className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--steel)]">
              Independent laboratory · NTU Karachi
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">
              Tested across 12 properties, every one on file.
            </h2>
            <p className="text-[var(--obsidian)]/75 leading-7 max-w-md">
              National Textile University, Karachi Campus tested Everlast Plastic uPVC
              window and door profile panels for density, impact, thermal, mechanical,
              weld, and oxygen index properties. Results comply with ASTM, EN, and
              D-638-03 standards.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href="/certifications/ntu-test-report.png"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--obsidian)] text-[var(--warm-white)] px-6 py-3 text-[12px] font-mono uppercase tracking-[0.24em] hover:bg-[var(--steel)] transition-colors"
              >
                View certificate <span aria-hidden>↗</span>
              </a>
              <a
                href="/certifications/profiles-testing-report.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-black/15 px-6 py-3 text-[12px] font-mono uppercase tracking-[0.24em] text-[var(--obsidian)] hover:border-black/50 transition-colors"
              >
                View full report PDF <span aria-hidden>↗</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-black/10 bg-white">
              <div className="px-6 py-4 flex items-center justify-between bg-[var(--obsidian)] text-[var(--warm-white)]">
                <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--gold)]">
                  Test results · Report 5436/001
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--fog)]">
                  Dated 22 Sept 2025
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[var(--obsidian)]/5 text-[var(--obsidian)]/65">
                      <th className="text-left font-mono text-[10px] uppercase tracking-[0.22em] px-6 py-3">
                        Property
                      </th>
                      <th className="text-left font-mono text-[10px] uppercase tracking-[0.22em] px-6 py-3">
                        Result
                      </th>
                      <th className="text-left font-mono text-[10px] uppercase tracking-[0.22em] px-6 py-3 hidden sm:table-cell">
                        Standard
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {NTU_RESULTS.map((r, i) => (
                      <tr
                        key={r.property}
                        className={
                          i % 2 === 0
                            ? "bg-white"
                            : "bg-[var(--obsidian)]/[0.02]"
                        }
                      >
                        <td className="px-6 py-3 text-[var(--obsidian)]/85">
                          {r.property}
                        </td>
                        <td className="px-6 py-3 font-grotesk font-semibold text-[var(--obsidian)]">
                          {r.value}
                        </td>
                        <td className="px-6 py-3 text-[var(--obsidian)]/55 hidden sm:table-cell font-mono text-[11px]">
                          {r.standard ?? ""}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-3 border-t border-black/5 text-[11px] font-mono uppercase tracking-[0.22em] text-[var(--obsidian)]/55">
                Tested per: D-638-03 · ASTM 256-05 · ASTM D 1525-00 · ASTM D 792-00 ·
                EN-12608 · ASTM D696-08 · ASTM D2863
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Document gallery */}
      <section className="relative section-dark border-t border-white/5">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-24">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--gold)]">
                Document archive
              </div>
              <h2 className="mt-2 font-display text-3xl md:text-5xl leading-[1.05]">
                Every credential, downloadable.
              </h2>
            </div>
            <div className="text-[12px] font-mono uppercase tracking-[0.22em] text-[var(--fog)]">
              {docs.length} documents on file
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {docs.map((d) => {
              const previewSrc = d.image ?? d.file;
              const openHref = d.image ?? d.file;
              return (
                <article
                  key={d.id}
                  id={d.id}
                  className="scroll-mt-28 group rounded-2xl overflow-hidden border border-white/10 bg-[rgba(255,255,255,0.02)] hover:border-[var(--gold)]/40 transition-colors flex flex-col"
                >
                  <div className="relative aspect-[4/5] bg-white overflow-hidden">
                    {d.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={d.image}
                        alt={d.title}
                        loading="lazy"
                        className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                      />
                    ) : d.file ? (
                      <iframe
                        src={`${d.file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                        title={d.title}
                        loading="lazy"
                        className="w-full h-full pointer-events-none"
                      />
                    ) : null}
                    <span className="absolute top-3 left-3 rounded-full bg-[var(--obsidian)]/85 text-[var(--warm-white)] px-3 py-1 text-[10px] font-mono uppercase tracking-[0.22em]">
                      {d.category}
                    </span>
                    {previewSrc && (
                      <a
                        href={openHref!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 flex items-end justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/40 via-transparent to-transparent"
                        aria-label={`View ${d.title}`}
                      >
                        <span className="rounded-full bg-[var(--gold)] text-[var(--obsidian)] px-3 py-1 text-[10px] font-mono uppercase tracking-[0.22em]">
                          Open ↗
                        </span>
                      </a>
                    )}
                  </div>

                  <div className="p-6 flex-1 flex flex-col gap-3">
                    <h3 className="font-display text-2xl leading-[1.15]">{d.title}</h3>
                    <div className="text-[12px] text-[var(--warm-white)]/65 leading-5">
                      {d.issuer}
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--gold)] break-words">
                      {d.reference}
                    </div>
                    <p className="text-[var(--warm-white)]/75 text-sm leading-6">
                      {d.summary}
                    </p>

                    <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.22em] text-[var(--fog)] mt-1">
                      <span>Issued {d.issued}</span>
                      {d.validUntil ? <span>Valid {d.validUntil}</span> : <span>On file</span>}
                    </div>

                    {openHref && (
                      <a
                        href={openHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-[11px] font-mono uppercase tracking-[0.22em] text-[var(--warm-white)]/85 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors"
                      >
                        View document <span aria-hidden>↗</span>
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Distribution / awareness */}
      <section className="relative section-light border-t border-black/5">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-24 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-5">
            <div className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--steel)]">
              Recognition
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">
              Where Everlast is specified by name.
            </h2>
            <p className="text-[var(--obsidian)]/75 leading-7 max-w-md">
              Our MES enlistment letter has been distributed to every major military
              works directorate across Pakistan. Procurement teams and consultants can
              specify Everlast Plastic by name on RTE and MES building projects.
            </p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
            {[
              "DGW&CE (A) GHQ, Rawalpindi",
              "DW&CE (Navy), Islamabad",
              "DW&CE (PAF), Chaklala",
              "DW&CE (DP) GHQ, Rawalpindi",
              "DW&CE (DCI), Rawalpindi",
              "MES School, MCE Risalpur",
              "Housing Dte, Rawalpindi (Store Sec)",
              "All ACEs / CMES / GEs",
              "HQ SPD",
              "DI&E",
              "DD&C",
              "R&S Dte (Rev Sec)",
              "E&M Sec (E-4) Local",
              "HQ Engr NLC",
            ].map((d) => (
              <div
                key={d}
                className="rounded-xl border border-black/10 bg-white px-4 py-3 text-[13px] text-[var(--obsidian)]/85 font-grotesk"
              >
                {d}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Certifications />

      <PageCTA
        label="Verification"
        title="Need a copy on your letterhead?"
        description="Our team can share signed copies of any certificate, including project specific specifications, third party laboratory data, and BoQ formatted profile schedules."
        primary={{ href: "/contact", label: "Request copies" }}
        secondary={{ href: "/products", label: "Browse products" }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(documentsLd) }}
      />
    </>
  );
}
