"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-8 md:px-12 lg:px-16 bg-gradient-to-b from-[#fafafa] to-white">
      <div className="max-w-content mx-auto text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-black via-red-600 to-orange-500 bg-clip-text text-transparent mb-1 md:mb-6">
            Laurent Kleering
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-black via-red-600 to-orange-500 bg-clip-text text-transparent mb-6">
            van Beerenbergh
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Full-stack developer & musician building intuitive, scalable applications with precision and creativity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 mb-16"
        >
          <a
            href="https://github.com/laurentkvb"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-black via-red-600 to-orange-500 text-white rounded-full hover:opacity-90 transition-all duration-200 hover:scale-105 w-full max-w-[280px] md:w-auto justify-center"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/laurent-kleering-van-beerenbergh"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 via-red-600 to-black text-white rounded-full hover:opacity-90 transition-all duration-200 hover:scale-105 w-full max-w-[280px] md:w-auto justify-center"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:lkvb90@gmail.com"
            className="group flex items-center gap-2 px-6 py-3 border-2 border-transparent bg-gradient-to-r from-black via-red-600 to-orange-500 bg-clip-padding text-white rounded-full hover:opacity-90 transition-all duration-200 hover:scale-105 w-full max-w-[280px] md:w-auto justify-center relative before:absolute before:inset-0 before:p-[2px] before:bg-gradient-to-r before:from-black before:via-red-600 before:to-orange-500 before:rounded-full before:-z-10"
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
