import { useReveal } from "@/hooks/useReveal";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { SignatureMenu } from "@/components/site/SignatureMenu";
import { ChefSpecial } from "@/components/site/ChefSpecial";
import { About } from "@/components/site/About";
import { FullMenu } from "@/components/site/FullMenu";
import { Reservations } from "@/components/site/Reservations";
import { Gallery } from "@/components/site/Gallery";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { useEffect } from "react";

const Index = () => {
  useReveal();

  useEffect(() => {
    document.title = "Naujieji Rytai Fusion · Wok, Grill & Spice in Vilnius";
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta(
      "description",
      "Premium Asian-European fusion dining in Vilnius. Hand-tossed wok, charcoal grill, signature spice. Reserve your table tonight."
    );
  }, []);

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <SignatureMenu />
      <ChefSpecial />
      <About />
      <FullMenu />
      <Reservations />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
