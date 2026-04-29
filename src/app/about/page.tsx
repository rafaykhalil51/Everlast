import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Certifications from "@/components/sections/Certifications";
import PageCTA from "@/components/ui/PageCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Everlast Plastic engineers premium uPVC windows and doors with European precision, regional craftsmanship, and a relentless focus on long-term performance.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        index="01"
        label="About"
        title="Engineered for every climate."
        subtitle="A trusted manufacturer of high-quality uPVC profiles and doors — combining European engineering principles with regional craftsmanship to deliver products built to last."
      />
      <About />
      <Stats />
      <Certifications />
      <PageCTA
        label="Plan with us"
        title="Bring our profiles into your project."
        description="From single homes to large developments — our team supports you with sampling, sizing, and installation guidance."
        primary={{ href: "/contact", label: "Get a quote" }}
        secondary={{ href: "/products", label: "See products" }}
      />
    </>
  );
}
