import type { Metadata, Viewport } from "next";
import {
  Cormorant_Garamond,
  DM_Sans,
  Inter,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/lib/lenis";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import PageLoader from "@/components/ui/PageLoader";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import { COMPANY } from "@/lib/constants";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const grotesk = DM_Sans({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.url),
  title: {
    default: "Everlast Plastic. Engineered uPVC Windows and Doors in Pakistan",
    template: "%s · Everlast Plastic",
  },
  description:
    "Everlast Plastic manufactures premium uPVC windows and doors in Karachi, Pakistan. European engineering, multi chamber profiles, double glazing, and a 10 year performance warranty.",
  applicationName: COMPANY.name,
  keywords: [
    "uPVC windows Pakistan",
    "uPVC doors Pakistan",
    "double glazed windows",
    "energy efficient windows",
    "noise reduction windows",
    "Everlast Plastic",
    "Karachi window manufacturer",
    "European uPVC profiles",
  ],
  authors: [{ name: COMPANY.legalName, url: COMPANY.url }],
  creator: COMPANY.legalName,
  publisher: COMPANY.legalName,
  category: "Building Materials",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: COMPANY.name,
    title: "Everlast Plastic. Engineered uPVC Windows and Doors",
    description:
      "Premium uPVC windows and doors with European engineering. Crafted in Karachi, trusted across Pakistan.",
    url: COMPANY.url,
    locale: "en_PK",
    images: [{ url: COMPANY.ogImage, width: 1200, height: 630, alt: COMPANY.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Everlast Plastic. Engineered uPVC Windows and Doors",
    description: "Premium uPVC windows and doors with European engineering.",
    images: [COMPANY.ogImage],
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
  icons: { icon: "/favicon.ico" },
};

const organisationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY.legalName,
  alternateName: COMPANY.name,
  url: COMPANY.url,
  logo: `${COMPANY.url}${COMPANY.logo}`,
  foundingDate: String(COMPANY.founded),
  email: COMPANY.email,
  telephone: COMPANY.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.address,
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
  sameAs: [],
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: COMPANY.name,
  url: COMPANY.url,
  inLanguage: "en-PK",
  publisher: { "@type": "Organization", name: COMPANY.legalName },
  potentialAction: {
    "@type": "SearchAction",
    target: `${COMPANY.url}/blog?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${grotesk.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--obsidian)] text-[var(--warm-white)]">
        <PageLoader />
        <CustomCursor />
        <ScrollProgress />
        <LenisProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LenisProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
      </body>
    </html>
  );
}
