"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Leaseplan",
    description: "React frontend for smart mobility platform",
    stack: ["React", "TypeScript", "Azure"],
    link: "#",
  },
  {
    title: "Rebels.io",
    description: "Front-end engineer for software consultancy",
    stack: ["React", "Node.js"],
    link: "#",
  },
  {
    title: "Hely",
    description: "Mobility platform UI overhaul",
    stack: ["React Native", "TypeScript"],
    link: "#",
  },
  {
    title: "Personal Website",
    description: "Portfolio & creative hub",
    stack: ["Next.js", "TailwindCSS"],
    link: "#",
  },
];

export default function ProjectGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6 bg-apple-gray" ref={ref}>
      <div className="max-w-content mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-apple-gray text-gray-700 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="inline-flex items-center gap-2 text-apple-blue font-medium group-hover:gap-3 transition-all"
              >
                View Project
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
