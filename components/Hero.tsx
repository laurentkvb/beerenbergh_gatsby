"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-[#fafafa] to-white">
      <div className="max-w-content mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6"
        >
          Laurent Kleering
        </motion.h1>

          <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6"
        >
          van Beerenbergh
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Full-stack developer blending rhythm and code.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-6 mb-16"
        >
          <a
            href="https://github.com/laurentkleering"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-200 hover:scale-105"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/laurentkleering"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 bg-apple-blue text-white rounded-full hover:bg-[#0066CC] transition-all duration-200 hover:scale-105"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:laurent@example.com"
            className="group flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-200 hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="block">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-8 h-8 text-gray-400" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
