import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Products from "@/components/sections/Products";
import Clients from "@/components/sections/Clients";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Products />
      <Clients />
      <Certifications />
      <Contact />
    </>
  );
}
