import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Certifications from "@/components/sections/Certifications";
import PageCTA from "@/components/ui/PageCTA";

export const metadata: Metadata = {
  title: "Certifications & Accreditations",
  description:
    "Everlast Plastic uPVC profiles meet international standards for safety, performance, and durability — backed by a 10-year performance warranty.",
};

export default function CertificationsPage() {
  return (
    <>
      <PageHero
        index="07"
        label="Standards"
        title="Verified quality, end to end."
        subtitle="Our processes, hardware, and materials are aligned with internationally recognised standards — and backed by a written 10-year performance warranty."
      />
      <Certifications />
      <PageCTA
        label="Documentation"
        title="Need our compliance documents?"
        description="Request technical datasheets, U-values, or warranty certificates for your project."
        primary={{ href: "/contact", label: "Request docs" }}
        secondary={{ href: "/legal/warranty", label: "Read warranty" }}
      />
    </>
  );
}
