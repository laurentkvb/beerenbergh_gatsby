"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Building2, Car, FileText, Code, Coffee, Bike } from "lucide-react";

const projects = [
  {
    title: "VGZ ZorgApp",
    description: "Led React Native & TypeScript development for VGZ's health platform, serving thousands of users. Improved UX flows, implemented new features for health insurance management, and enhanced API performance with .NET backend integration.",
    stack: ["React Native", "TypeScript", ".NET", "Azure DevOps", "REST APIs", "Agile/Scrum"],
    link: "https://www.vgz.nl/vgz-app",
    icon: Building2,
    iconColor: "text-blue-600",
  },
  {
    title: "Ayvens (LeasePlan Rebrand)",
    description: "Spearheaded the front-end transformation during LeasePlan's rebrand to Ayvens across multiple European countries. Ensured brand consistency, implemented responsive designs, and optimized performance for used car marketplace platforms.",
    stack: ["Salesforce B2C Commerce", "SCSS", "HTML5", "REST APIs", "JavaScript", "Git"],
    link: "https://usedcars.ayvens.com/pt-pt",
    icon: Car,
    iconColor: "text-green-600",
  },
  {
    title: "LeasePlan PPA System",
    description: "Architected and developed React-based internal tooling for managing lease parameters and pricing. Integrated secure authentication with Azure AD, implemented comprehensive testing with Cypress, and built scalable state management solutions.",
    stack: ["React", "TypeScript", "Redux", "Cypress", "Azure AD", "REST APIs", "Agile"],
    link: "https://www.ayvens.com/nl-nl/",
    icon: FileText,
    iconColor: "text-purple-600",
  },
  {
    title: "Rebels.io Digital Solutions",
    description: "Built multiple high-performance client-facing websites and web applications from scratch. Delivered modern, maintainable solutions using React ecosystem, focusing on responsive design and optimal user experience.",
    stack: ["React", "Gatsby", "Next.js", "TypeScript", "Styled Components", "Vercel", "GraphQL"],
    link: "https://rebels.io/",
    icon: Code,
    iconColor: "text-red-600",
  },
  {
    title: "Nieuwe Kafe Website",
    description: "Created a modern, engaging website for Nieuwe Kafe restaurant. Focused on beautiful design, mobile responsiveness, and fast loading times to showcase the restaurant's ambiance and menu.",
    stack: ["React", "Next.js", "TailwindCSS", "Responsive Design", "Performance Optimization"],
    link: "https://www.nieuwe-kafe.nl/",
    icon: Coffee,
    iconColor: "text-amber-600",
  },
  {
    title: "Hely Mobility Platform",
    description: "Developed backend microservices and front-end tools for a shared mobility application. Built scalable Java services with gRPC, created React-based back office for fleet management, and deployed on Kubernetes infrastructure.",
    stack: ["Java", "gRPC", "React", "Kubernetes", "Docker", "Microservices", "Spring Boot"],
    link: "https://hely.com/",
    icon: Bike,
    iconColor: "text-cyan-600",
  },
];

export default function ProjectGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-8 md:px-12 lg:px-16 bg-apple-gray" ref={ref}>
      <div className="max-w-content mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-black via-red-600 to-orange-500 bg-clip-text text-transparent mb-16 text-center"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center max-w-[1200px] mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col w-full max-w-sm"
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center mb-4 ${project.iconColor}`}>
                  <IconComponent className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-apple-gray text-gray-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-apple-gray text-gray-700 rounded-full">
                      +{project.stack.length - 3}
                    </span>
                  )}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-apple-blue font-medium group-hover:gap-3 transition-all text-sm mt-auto"
                >
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
