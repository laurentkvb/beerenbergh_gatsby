"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Music, Youtube } from "lucide-react";

export default function MusicSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="music" className="py-24 px-8 md:px-12 lg:px-16 bg-white" ref={ref}>
      <div className="max-w-content mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <Music className="w-8 h-8 text-gray-600" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 bg-clip-text text-transparent">
              Music
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Outside of software, I play bass in Jah Riddim — a reggae band that performs across Europe. 
            I also produce and record my own music, blending groove and emotion with precision and sound design.
          </p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            href="https://www.youtube.com/@B4SSKid"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-black via-red-600 to-orange-500 text-white rounded-full hover:opacity-90 transition-all duration-200 hover:scale-105 text-lg font-medium"
          >
            <Youtube className="w-6 h-6" />
            <span>Watch on YouTube</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
