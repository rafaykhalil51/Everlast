import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Clients from "@/components/sections/Clients";
import PageCTA from "@/components/ui/PageCTA";

export const metadata: Metadata = {
  title: "Clients & Testimonials",
  description:
    "Architects, developers, and homeowners trust Everlast Plastic for premium uPVC windows and doors. See what our partners say about working with us.",
};

export default function ClientsPage() {
  return (
    <>
      <PageHero
        index="06"
        label="Clients"
        title="Trusted by professionals."
        subtitle="Our partnerships with architects, developers, and homeowners are built on consistency, performance, and reliable after-sales support."
        variant="light"
      />
      <Clients />
      <PageCTA
        label="Become a partner"
        title="Work with Everlast Plastic."
        primary={{ href: "/contact", label: "Partner with us" }}
        secondary={{ href: "/about", label: "About us" }}
      />
    </>
  );
}
