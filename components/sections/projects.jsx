"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "SkillSphere Hub",
    description:
      "SkillSphere Hub is a modern learning platform for skill-based courses like Web Development, Design, and Marketing, built with Next.js and a clean, responsive UI for a smooth experience across all devices.",
    image: "/skillsphere.png",
    tech: [
      "Next.js",
      "React.js",
      "Tailwind",
      "HeroUI",
      "Better Auth",
      "MongoDB",
    ],
    live: "https://skillsphere-hub.vercel.app",
    github: "https://github.com/Badsha-Nishan/skillsphere-hub",
  },
  {
    title: "Project Two",
    description: "Interactive UI dashboard with real-time data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    tech: ["React", "Framer Motion", "API"],
    live: "#",
    github: "#",
  },
  {
    title: "Project Three",
    description: "E-commerce platform with smooth UX and payment integration.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    tech: ["Next.js", "Stripe", "Prisma"],
    live: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-[#48c6ef] to-[#6f86d6] bg-clip-text text-transparent">
            Projects
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-balance">
            Things I’ve Built
          </h3>
          <p className="text-muted-foreground">
            A selection of projects showcasing my skills in full-stack
            development, UI design, and performance optimization.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, rotateX: 3, rotateY: -3 }}
              className="group perspective"
            >
              {/* Card */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-xl">
                {/* Glow border */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 blur-xl" />

                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition">
                    {project.title}
                  </h4>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-xs px-3 py-2 rounded-lg bg-gradient-to-r from-[#48c6ef] to-[#6f86d6] text-black hover:scale-105 transition"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>

                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-xs px-3 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition"
                    >
                      <Github size={14} /> Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
