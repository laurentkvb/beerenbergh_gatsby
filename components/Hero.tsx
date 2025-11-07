"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-16 bg-gradient-to-b from-white via-[#fafafa] to-white overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.05, 0.03]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-500 to-red-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-40 left-20 w-[500px] h-[500px] bg-gradient-to-tr from-red-500 to-orange-500 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-5xl mx-auto text-center w-full relative z-10">
        {/* Eyebrow text - builds intrigue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200/50 mb-6"
        >
          <Sparkles className="w-4 h-4 text-orange-600" />
          <span className="text-sm font-medium text-gray-700">
            Full-Stack Developer • Musician • Problem Solver
          </span>
        </motion.div>

        {/* Main headline - power statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4 leading-[1.1]">
            <span className="bg-gradient-to-r from-black via-red-600 to-orange-500 bg-clip-text text-transparent">
              I Build Apps
            </span>
          </h1>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
            <span className="text-gray-900">
              People Love to Use
            </span>
          </h1>
        </motion.div>

        {/* Value proposition - emotional connection */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed"
        >
          7+ years crafting scalable web and mobile solutions.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto"
        >
          From React frontends to Java backends — I turn complex problems into elegant, human-centered experiences.
        </motion.p>

        {/* CTA buttons - clear hierarchy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="mailto:lkvb90@gmail.com?subject=Let's work together"
            className="group relative px-8 py-4 bg-gradient-to-r from-black via-red-600 to-orange-500 text-white rounded-full hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 text-lg font-semibold w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <Mail className="w-5 h-5" />
            <span>Start a Project</span>
            <motion.span
              className="absolute -right-1 -top-1 flex h-3 w-3"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
            </motion.span>
          </a>

          <a
            href="#about"
            className="group px-8 py-4 border-2 border-gray-300 text-gray-900 rounded-full hover:border-gray-900 hover:bg-gray-50 transition-all duration-300 hover:scale-105 text-lg font-medium w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <span>Learn More</span>
            <ArrowDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Social proof - subtle but builds credibility */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500"
        >
          <a
            href="https://github.com/laurentkvb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gray-900 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span className="font-medium">GitHub</span>
          </a>
          <span className="w-1 h-1 bg-gray-300 rounded-full" />
          <a
            href="https://linkedin.com/in/laurent-kleering-van-beerenbergh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gray-900 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span className="font-medium">LinkedIn</span>
          </a>
          <span className="w-1 h-1 bg-gray-300 rounded-full" />
          <span className="font-medium">Amsterdam, NL</span>
        </motion.div>

        {/* Scroll indicator - removed bouncing chevron, now part of CTA */}
      </div>
    </section>
  );
}
