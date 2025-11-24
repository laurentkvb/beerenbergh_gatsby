import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProjectGrid from "@/components/ProjectGrid";
import MusicSection from "@/components/MusicSection";
import RecentBlogs from "@/components/RecentBlogs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { getRecentPosts } from "@/lib/getPosts";

export default async function Home() {
  const recentPosts = await getRecentPosts(3);

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutSection />
      <ProjectGrid />
      <MusicSection />
      <RecentBlogs posts={recentPosts} />
      <CTA />
      <Footer />
    </main>
  );
}

