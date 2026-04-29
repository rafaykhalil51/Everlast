import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach Everlast Plastic for product inquiries, project quotations, samples, and partnership opportunities. We respond within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        index="08"
        label="Get in touch"
        title="Start your project with us."
        subtitle="Tell us about your space — residential, commercial, or large-scale. Our team replies within one business day with samples and quotation."
      />
      <Contact />
    </>
  );
}
