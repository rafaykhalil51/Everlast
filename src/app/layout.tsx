import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: {
    default: "Everlast Plastic — Engineered uPVC Windows & Doors",
    template: "%s · Everlast Plastic",
  },
  description:
    "Everlast Plastic. Premium uPVC windows and doors crafted with European engineering — built for durability, comfort, and timeless architecture.",
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
      </body>
    </html>
  );
}
