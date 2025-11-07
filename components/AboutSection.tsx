"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Code2, Music2, Lightbulb, Users, Zap, Heart } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const values = [
    { icon: Code2, label: t.about.values.technical.label, desc: t.about.values.technical.desc },
    { icon: Users, label: t.about.values.team.label, desc: t.about.values.team.desc },
    { icon: Lightbulb, label: t.about.values.creative.label, desc: t.about.values.creative.desc },
    { icon: Zap, label: t.about.values.learner.label, desc: t.about.values.learner.desc },
  ];

  const techHighlights = [
    "React & TypeScript",
    "Java & .NET",
    "Next.js & Node.js",
    "Mobile Development",
    "System Architecture",
    "Agile & Scrum",
  ];

  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-16 bg-gradient-to-b from-white to-[#fafafa]" ref={ref}>
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-black bg-clip-text text-transparent">
            {t.about.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.about.subtitle}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          
          {/* Left: Portrait + Quick Facts */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-0"
          >
            {/* Combined card with portrait and facts */}
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              {/* Portrait section */}
              <div className="relative w-full aspect-square bg-gradient-to-br from-gray-50 to-gray-100">
                <Image
                  src="/images/laurent.png"
                  alt="Laurent Kleering van Beerenbergh"
                  fill
                  className="object-cover"
                  priority
                  sizes="400px"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
              </div>

              {/* Quick facts section - directly attached */}
              <div className="p-6 bg-gradient-to-br from-white to-gray-50">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-600" />
                  {t.about.quickFacts}
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between group">
                    <span className="text-gray-500">{t.about.location}</span>
                    <span className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors">{t.about.locationValue}</span>
                  </div>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                  
                  <div className="flex items-center justify-between group">
                    <span className="text-gray-500">{t.about.experience}</span>
                    <span className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors">{t.about.experienceValue}</span>
                  </div>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                  
                  <div className="flex items-center justify-between group">
                    <span className="text-gray-500">{t.about.currentRole}</span>
                    <span className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors">{t.about.currentRoleValue}</span>
                  </div>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                  
                  <div className="flex items-center justify-between group">
                    <span className="text-gray-500">{t.about.sideGig}</span>
                    <span className="font-medium text-gray-900 flex items-center gap-1.5 group-hover:text-orange-600 transition-colors">
                      <Music2 className="w-4 h-4 text-orange-600" />
                      {t.about.sideGigValue}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Story + Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Story section in a card */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  {t.about.story1}
                </p>
                <p>
                  {t.about.story2}
                </p>
                <p>
                  {t.about.story3}
                </p>
              </div>
            </div>

            {/* Core values card */}
            <div className="bg-white rounded-3xl p-6 shadow-2xl border border-gray-100">
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <motion.div
                      key={value.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-4 border border-orange-200/50 hover:border-orange-300 hover:shadow-lg transition-all duration-200"
                    >
                      <Icon className="w-6 h-6 text-orange-600 mb-2" />
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">{value.label}</h4>
                      <p className="text-xs text-gray-600">{value.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">
            {t.about.techTitle}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techHighlights.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                className="px-5 py-2.5 bg-white text-gray-800 rounded-full text-sm font-medium border-2 border-gray-200 hover:border-orange-300 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:shadow-md transition-all duration-200"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
