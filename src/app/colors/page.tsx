import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Colors from "@/components/sections/Colors";
import PageCTA from "@/components/ui/PageCTA";

export const metadata: Metadata = {
  title: "Colors & Finishes",
  description:
    "Premium laminated wooden textures and signature solid colors — fade-resistant uPVC finishes that elevate any architectural style.",
};

export default function ColorsPage() {
  return (
    <>
      <PageHero
        index="04"
        label="Finishes"
        title="Premium textures, signature tones."
        subtitle="Choose between rich laminated wood textures and modern solid colors — each finish is fade-resistant and engineered for long-term beauty."
        variant="light"
      />
      <Colors />
      <PageCTA
        label="Visualise"
        title="See finishes on real projects."
        primary={{ href: "/gallery", label: "View gallery" }}
        secondary={{ href: "/contact", label: "Request samples" }}
      />
    </>
  );
}
