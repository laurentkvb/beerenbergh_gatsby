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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                Hey, I&apos;m Laurent — a developer and musician from the Netherlands. 
                I build apps that are intuitive, fast, and human-centered.
              </p>
              <p>
                When I&apos;m not coding, I&apos;m laying down basslines and producing music. 
                The rhythm and discipline from music inspire how I approach software: 
                with precision, creativity, and a focus on the experience.
              </p>
              <p>
                I specialize in React, TypeScript, and building scalable front-end 
                architectures that users love to interact with.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
