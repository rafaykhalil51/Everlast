import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Products from "@/components/sections/Products";
import Colors from "@/components/sections/Colors";
import PageCTA from "@/components/ui/PageCTA";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Sliding and openable doors and windows, fixed lites, and signature designer entrances — engineered uPVC solutions for every project.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        index="03"
        label="Solutions"
        title="Doors and windows for every project."
        subtitle="A complete catalogue of profiles, hardware, and finish options — designed for residential, commercial, and large-scale developments."
      />
      <Products />
      <Colors />
      <PageCTA
        label="Sample request"
        title="Ask for samples and a project quote."
        primary={{ href: "/contact", label: "Get a quote" }}
        secondary={{ href: "/colors", label: "View finishes" }}
      />
    </>
  );
}
