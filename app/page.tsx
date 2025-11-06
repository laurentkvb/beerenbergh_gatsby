import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProjectGrid from "@/components/ProjectGrid";
import MusicSection from "@/components/MusicSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutSection />
      <ProjectGrid />
      <MusicSection />
      <Footer />
    </main>
  );
}

