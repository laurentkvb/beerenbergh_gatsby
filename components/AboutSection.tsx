"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-8 md:px-12 lg:px-16 bg-white" ref={ref}>
      <div className="max-w-content mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Circular Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-gray-100 shadow-xl">
              <Image
                src="/images/laurent.png"
                alt="Laurent Kleering van Beerenbergh"
                fill
                className="object-cover"
                priority
                sizes="192px"

              />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-orange-600 via-red-600 to-black bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl w-full space-y-10"
          >
            {/* Developer Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
                Developer
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                I&apos;m a full-stack developer with over 7 years of experience building scalable, user-centered applications.
                My strength lies in combining technical depth with clear communication and a creative mindset.
                I&apos;ve worked with teams at <span className="font-semibold text-gray-900">VGZ</span>, <span className="font-semibold text-gray-900">Ayvens (LeasePlan)</span>, and <span className="font-semibold text-gray-900">Rebels.io</span>, focusing on frontend excellence with React and TypeScript, backend stability with Java and .NET, and delivering high-performance solutions across web and mobile platforms.
              </p>
            </div>

            {/* Musician Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
                Also...
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                Outside of code, I&apos;m a bass guitarist in the reggae band <span className="font-semibold text-gray-900">Jah Riddim</span> and a freelance musician in the pop, rock, and R&B scene.
                Music teaches me rhythm, listening, and improvisation — the same qualities that shape my work as a developer.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
