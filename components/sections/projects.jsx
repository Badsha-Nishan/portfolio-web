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
    title: "Dragon News",
    description:
      "Dragon News is a modern news platform delivering the latest updates, trending stories, and in-depth articles across various categories with a clean, fast, and user-friendly experience.",
    image: "/dragon.png",
    tech: ["Next.js", "React.js", "Tailwind", "Better Auth", "Google Login"],
    live: "https://dragon-news-nextjs-indol.vercel.app",
    github: "https://github.com/Badsha-Nishan/dragon-news-nextjs",
  },
  {
    title: "KeenKeeper",
    description:
      "KeenKeeper is a simple and secure task management app that helps users organize, track, and manage their daily to-dos efficiently with a clean and intuitive interface.",
    image: "/keenkeeper.png",
    tech: [
      "React.js",
      "React Router DOM",
      "Tailwind",
      "Rechart",
      "Context API",
    ],
    live: "https://keen-keeper-react.vercel.app/",
    github: "https://github.com/Badsha-Nishan/keen-keeper-react",
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
          <h2 className="underline decoration-[#48c6ef] underline-offset-4 text-sm sm:text-xl md:text-2xl font-bold leading-tight mb-6 bg-gradient-to-r from-[#48c6ef] to-[#6f86d6] bg-clip-text text-transparent">
            PROJECTS
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
                      target="_blank"
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
