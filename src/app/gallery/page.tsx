import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Gallery from "@/components/sections/Gallery";
import PageCTA from "@/components/ui/PageCTA";

export const metadata: Metadata = {
  title: "Project Gallery",
  description:
    "A selection of residential and commercial projects featuring Everlast Plastic uPVC windows and doors across Pakistan.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        index="05"
        label="Selected work"
        title="Our work, in place."
        subtitle="Projects across residential, commercial, and architectural studios — featuring our profiles in their finished context."
      />
      <Gallery />
      <PageCTA
        label="Talk to us"
        title="Have a project to plan?"
        primary={{ href: "/contact", label: "Start a project" }}
        secondary={{ href: "/products", label: "Browse products" }}
      />
    </>
  );
}
