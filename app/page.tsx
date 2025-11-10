import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProjectGrid from "@/components/ProjectGrid";
import MusicSection from "@/components/MusicSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutSection />
      <ProjectGrid />
      <MusicSection />
      <CTA />
      <Footer />
    </main>
  );
}

