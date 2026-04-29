import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Advantages from "@/components/sections/Advantages";
import Certifications from "@/components/sections/Certifications";
import PageCTA from "@/components/ui/PageCTA";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description:
    "Discover why architects, builders, and homeowners trust Everlast Plastic uPVC profiles for performance, security, and long-term durability.",
};

export default function AdvantagesPage() {
  return (
    <>
      <PageHero
        index="02"
        label="Advantages"
        title="Built beyond expectation."
        subtitle="Multi-chamber profiles, steel reinforcement, weather-tight sealing, and acoustic comfort — every detail engineered to perform across decades."
      />
      <Advantages />
      <Certifications />
      <PageCTA
        label="Engineering you can verify"
        title="Talk to our technical team."
        description="Need profile cross-sections, U-values, or installation specs? Get the documentation your project requires."
        primary={{ href: "/contact", label: "Request specs" }}
        secondary={{ href: "/products", label: "Browse products" }}
      />
    </>
  );
}
