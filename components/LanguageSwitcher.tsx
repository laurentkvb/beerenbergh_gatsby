"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-24 z-50 lg:right-6">
      <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md rounded-full px-4 py-2 shadow-lg border border-gray-200">
        <Globe className="w-4 h-4 text-gray-600" />
        
        <div className="flex items-center gap-1">
          <button
            onClick={() => setLanguage("en")}
            className={`relative px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
              language === "en"
                ? "text-white"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {language === "en" && (
              <motion.div
                layoutId="languageBackground"
                className="absolute inset-0 bg-gradient-to-r from-black via-red-600 to-orange-500 rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">EN</span>
          </button>

          <div className="w-px h-4 bg-gray-300" />

          <button
            onClick={() => setLanguage("nl")}
            className={`relative px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
              language === "nl"
                ? "text-white"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {language === "nl" && (
              <motion.div
                layoutId="languageBackground"
                className="absolute inset-0 bg-gradient-to-r from-black via-red-600 to-orange-500 rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">NL</span>
          </button>
        </div>
      </div>
    </div>
  );
}
