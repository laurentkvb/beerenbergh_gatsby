"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Building2, Car, FileText, Code, Coffee, Bike, Calendar } from "lucide-react";

const projects = [
  {
    title: "VGZ ZorgApp",
    description: "Led React Native & TypeScript development for VGZ's health platform, serving thousands of users. Improved UX flows, implemented new features for health insurance management, and enhanced API performance with .NET backend integration.",
    stack: ["React Native", "TypeScript", ".NET", "Azure DevOps", "REST APIs", "Agile/Scrum"],
    link: "https://www.vgz.nl/vgz-app",
    icon: Building2,
    iconColor: "text-blue-600",
    duration: "Apr 2024 - Current",
    startYear: 2024,
    startMonth: 4,
    endYear: null,
    endMonth: null,
  },
  {
    title: "Ayvens (LeasePlan Rebrand)",
    description: "Spearheaded the front-end transformation during LeasePlan's rebrand to Ayvens across multiple European countries. Ensured brand consistency, implemented responsive designs, and optimized performance for used car marketplace platforms.",
    stack: ["Salesforce B2C Commerce", "SCSS", "HTML5", "REST APIs", "JavaScript", "Git"],
    link: "https://usedcars.ayvens.com/pt-pt",
    icon: Car,
    iconColor: "text-green-600",
    duration: "Jun 2023 - Mar 2024",
    startYear: 2023,
    startMonth: 6,
    endYear: 2024,
    endMonth: 3,
  },
  {
    title: "LeasePlan PPA System",
    description: "Architected and developed React-based internal tooling for managing lease parameters and pricing. Integrated secure authentication with Azure AD, implemented comprehensive testing with Cypress, and built scalable state management solutions.",
    stack: ["React", "TypeScript", "Redux", "Cypress", "Azure AD", "REST APIs", "Agile"],
    link: "https://www.ayvens.com/nl-nl/",
    icon: FileText,
    iconColor: "text-purple-600",
    duration: "Jun 2021 - Jun 2023",
    startYear: 2021,
    startMonth: 6,
    endYear: 2023,
    endMonth: 6,
  },
  {
    title: "Rebels.io Digital Solutions",
    description: "Built multiple high-performance client-facing websites and web applications from scratch. Delivered modern, maintainable solutions using React ecosystem, focusing on responsive design and optimal user experience.",
    stack: ["React", "Gatsby", "Next.js", "TypeScript", "Styled Components", "Vercel", "GraphQL"],
    link: "https://rebels.io/",
    icon: Code,
    iconColor: "text-red-600",
    duration: "Sep 2020 - May 2021",
    startYear: 2020,
    startMonth: 9,
    endYear: 2021,
    endMonth: 5,
  },
  {
    title: "Nieuwe Kafe Website",
    description: "Created a modern, engaging website for Nieuwe Kafe restaurant. Focused on beautiful design, mobile responsiveness, and fast loading times to showcase the restaurant's ambiance and menu.",
    stack: ["React", "Next.js", "TailwindCSS", "Responsive Design", "Performance Optimization"],
    link: "https://www.nieuwe-kafe.nl/",
    icon: Coffee,
    iconColor: "text-amber-600",
    duration: "Mar 2021 - Apr 2021",
    startYear: 2021,
    startMonth: 3,
    endYear: 2021,
    endMonth: 4,
  },
  {
    title: "Hely Mobility Platform",
    description: "Developed backend microservices and front-end tools for a shared mobility application. Built scalable Java services with gRPC, created React-based back office for fleet management, and deployed on Kubernetes infrastructure.",
    stack: ["Java", "gRPC", "React", "Kubernetes", "Docker", "Microservices", "Spring Boot"],
    link: "https://hely.com/",
    icon: Bike,
    iconColor: "text-cyan-600",
    duration: "Mar 2019 - Aug 2020",
    startYear: 2019,
    startMonth: 3,
    endYear: 2020,
    endMonth: 8,
  },
];

export default function ProjectGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Calculate timeline range
  const minYear = 2019;
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const totalMonths = (currentYear - minYear) * 12 + currentMonth;

  const getProjectPosition = (year: number, month: number) => {
    const monthsSinceStart = (year - minYear) * 12 + month;
    return (monthsSinceStart / totalMonths) * 100;
  };

  const getProjectWidth = (startYear: number, startMonth: number, endYear: number | null, endMonth: number | null) => {
    const startPos = getProjectPosition(startYear, startMonth);
    const endPos = endYear && endMonth
      ? getProjectPosition(endYear, endMonth)
      : 100;
    return endPos - startPos;
  };

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

        {/* Timeline Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 max-w-6xl mx-auto"
        >
          <div className="relative bg-white rounded-2xl p-8 shadow-lg">
            {/* Year Markers */}
            <div className="flex justify-between mb-4 text-sm font-semibold text-gray-600">
              <span>2019</span>
              <span>2020</span>
              <span>2021</span>
              <span>2022</span>
              <span>2023</span>
              <span>2024</span>
              <span className="text-green-600">Now</span>
            </div>

            {/* Main Timeline Bar with Projects */}
            <div className="relative h-32 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 rounded-xl border-2 border-gray-200 overflow-hidden">
              {projects.map((project, index) => {
                const IconComponent = project.icon;
                const startPos = getProjectPosition(project.startYear, project.startMonth);
                const width = getProjectWidth(project.startYear, project.startMonth, project.endYear, project.endMonth);

                return (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="absolute group"
                    style={{
                      left: `${Math.max(0.5, startPos)}%`,
                      width: `${Math.min(width, 99 - startPos)}%`,
                      top: `${12 + (index % 3) * 36}px`,
                      height: '28px',
                    }}
                  >
                    <div 
                      className={`h-full rounded-lg ${project.iconColor.replace('text-', 'bg-')} bg-opacity-30 border-2 ${project.iconColor.replace('text-', 'border-')} flex items-center px-2 gap-2 hover:bg-opacity-50 transition-all duration-200 cursor-pointer relative overflow-hidden`}
                    >
                      <IconComponent className={`w-4 h-4 ${project.iconColor} flex-shrink-0`} />
                      <span className="text-xs font-semibold text-gray-800 truncate">
                        {project.title}
                      </span>
                      
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                        {project.duration}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

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

                {/* Duration Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-600">
                    {project.duration}
                  </span>
                  {project.endYear === null && (
                    <span className="px-2 py-0.5 text-xs bg-green-100 text-green-700 rounded-full font-medium">
                      Current
                    </span>
                  )}
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