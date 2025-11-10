"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail, Calendar } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t, language } = useLanguage();

  return (
    <section className="py-32 px-8 md:px-12 lg:px-16 bg-gradient-to-b from-white to-[#fafafa]" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`cta-${language}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-black via-red-600 to-orange-500 bg-clip-text text-transparent">
              {t.cta.title}
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
              {t.cta.subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <AnimatePresence mode="wait">
            <motion.a
              key={`cta-primary-${language}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              href="mailto:lkvb90@gmail.com?subject=Let's work together"
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-black via-red-600 to-orange-500 text-white rounded-full hover:opacity-90 transition-all duration-200 hover:scale-105 text-lg font-medium w-full sm:w-auto justify-center shadow-lg"
            >
              <Mail className="w-5 h-5" />
              <span>{t.cta.ctaPrimary}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.a
              key={`cta-secondary-${language}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              href="https://linkedin.com/in/laurent-kleering-van-beerenbergh"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-200 hover:scale-105 text-lg font-medium w-full sm:w-auto justify-center"
            >
              <Calendar className="w-5 h-5" />
              <span>{t.cta.ctaSecondary}</span>
            </motion.a>
          </AnimatePresence>
        </motion.div>


      </div>
    </section>
  );
}
