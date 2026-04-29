import type { Metadata } from "next";
import { Geist_Mono, Manrope, Syne } from "next/font/google";
import "./globals.css";

const brandBody = Manrope({
  variable: "--font-brand-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const brandDisplay = Syne({
  variable: "--font-brand-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Everlast Plastic - Scroll 3D",
  description: "Everlast Plastic scroll-driven 3D storytelling website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${brandBody.variable} ${brandDisplay.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
