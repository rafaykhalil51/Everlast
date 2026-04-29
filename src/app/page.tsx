import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Advantages from "@/components/sections/Advantages";
import Products from "@/components/sections/Products";
import Colors from "@/components/sections/Colors";
import Gallery from "@/components/sections/Gallery";
import Clients from "@/components/sections/Clients";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Advantages />
      <Products />
      <Colors />
      <Gallery />
      <Clients />
      <Certifications />
      <Contact />
    </>
  );
}
