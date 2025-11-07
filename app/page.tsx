import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProjectGrid from "@/components/ProjectGrid";
import MusicSection from "@/components/MusicSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Home() {
  return (
    <main className="min-h-screen">
      <LanguageSwitcher />
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

