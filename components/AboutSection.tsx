"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 bg-white" ref={ref}>
      <div className="max-w-content mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-square rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/laurent.jpg"
              alt="Laurent Kleering van Beerenbergh"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-black bg-clip-text text-transparent mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                I&apos;m a full-stack developer with over 7 years of experience building scalable, 
                user-centered applications. My strength lies in combining technical depth with 
                clear communication and a creative mindset.
              </p>
              <p>
                I&apos;ve worked with teams at VGZ, Ayvens (LeasePlan), and Rebels.io, focusing on 
                frontend excellence with React and TypeScript, backend stability with Java and .NET, 
                and delivering high-performance solutions across web and mobile platforms.
              </p>
              <p>
                Outside of code, I&apos;m a bass guitarist in the reggae band Jah Riddim and a 
                freelance musician in the pop, rock, and R&B scene. Music teaches me rhythm, 
                listening, and improvisation — the same qualities that shape my work as a developer.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
