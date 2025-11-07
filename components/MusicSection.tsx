"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Music } from "lucide-react";

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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Outside of software, I play bass in Jah Riddim — a reggae band that performs across Europe. 
            I also produce and record my own music, blending groove and emotion with precision and sound design.
          </p>
        </motion.div>

        <div className="space-y-6 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1552785714&color=%23007AFF&inverse=false&auto_play=false&show_user=true"
              loading="lazy"
              className="w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1548746925&color=%23007AFF&inverse=false&auto_play=false&show_user=true"
              loading="lazy"
              className="w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
