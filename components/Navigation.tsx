"use client";

import { useState, useEffect } from "react";
import { Home, User, Briefcase, Music, BookOpen, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  const pathname = usePathname();

  const sections = [
    { id: "home", label: t.nav.home, icon: Home },
    { id: "about", label: t.nav.about, icon: User },
    { id: "projects", label: t.nav.projects, icon: Briefcase },
    { id: "music", label: t.nav.music, icon: Music },
    { id: "blogs", label: t.nav.blog, icon: BookOpen },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Check home section (top of page)
      if (window.scrollY < 300) {
        setActiveSection("home");
        return;
      }

      // Check sections in reverse order (bottom to top) for better accuracy
      const reverseSections = [...sections].reverse();
      
      for (const section of reverseSections) {
        const element = document.getElementById(section.id === "home" ? "hero" : section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          const viewportMiddle = window.scrollY + window.innerHeight / 2;

          // If viewport middle is within this section
          if (viewportMiddle >= elementTop && viewportMiddle < elementBottom) {
            setActiveSection(section.id);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId === "home" ? "hero" : sectionId);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: sectionId === "home" ? 0 : y, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation - Left Side */}
      <nav className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 z-50">
        <div className="flex flex-col gap-6 bg-white/80 backdrop-blur-md rounded-full px-4 py-6 shadow-lg border border-gray-200">
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            
            return (
              <button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                className="group relative flex items-center justify-center"
                aria-label={section.label}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-black via-red-600 to-orange-500 text-white scale-110"
                      : "text-gray-600 hover:bg-gray-100 hover:scale-105"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                {/* Tooltip */}
                <div className="absolute left-full ml-4 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  {section.label}
                </div>

                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -left-2 w-1 h-8 bg-gradient-to-b from-black via-red-600 to-orange-500 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
          
        </div>
      </nav>

      {/* Mobile Navigation - Top Right */}
      <div className="lg:hidden fixed top-6 right-6 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md shadow-lg border border-gray-200 flex items-center justify-center text-gray-900 hover:scale-105 transition-transform duration-200"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-64 bg-white shadow-2xl p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-4 mt-20">
                {sections.map((section) => {
                  const Icon = section.icon;
                  const isActive = activeSection === section.id;

                  return (
                    <button
                      key={section.id}
                      onClick={() => handleNavClick(section.id)}
                      className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
                        isActive
                          ? "bg-gradient-to-r from-black via-red-600 to-orange-500 text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{section.label}</span>
                    </button>
                  );
                })}
                
                {/* Blog Button - scroll to blogs section */}
                <button
                  onClick={() => { handleNavClick("blogs"); setIsMobileMenuOpen(false); }}
                  className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
                    activeSection === "blogs"
                      ? "bg-gradient-to-r from-black via-red-600 to-orange-500 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <BookOpen className="w-5 h-5" />
                  <span className="font-medium">{t.nav.blog}</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
