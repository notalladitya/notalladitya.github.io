import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
