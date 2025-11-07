"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Music2, ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function MusicSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="music" className="py-24 px-8 md:px-12 lg:px-16 bg-white" ref={ref}>
      <div className="max-w-content mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <Music2 className="w-8 h-8 text-orange-500" />
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-black via-red-600 to-orange-500 bg-clip-text text-transparent">
            {t.music.title}
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          {t.music.description}
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          href="https://youtube.com/@L.Kleering"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
        >
          <ExternalLink className="w-5 h-5" />
          {t.music.cta}
        </motion.a>
      </div>
    </section>
  );
}
