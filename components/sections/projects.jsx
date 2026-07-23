"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Skill Pilot - AI",
    description:
      "SkillPilot AI is an advanced, production-grade career guidance and technical mentorship platform designed for software engineers. It combines bespoke, week-by-week learning roadmaps generated via the Google Gemini Pro model with a conversational AI Career Mentor that streaming-synchronizes learning metrics in real time.",
    image: "/skillpilot-ai.png",
    tech: [
      "React.js",
      "AI Engine",
      "Node.js",
      "Express",
      "TypeScript",
      "Better Auth",
      "MongoDB",
      "Tailwind",
      "HeroUI",
      "Recharts",
      "Zod",
    ],
    live: "https://skillpilot-ai-backend.onrender.com",
    github: "https://github.com/Badsha-Nishan/skillpilot-ai",
  },
  {
    title: "Life Drop",
    description:
      "A modern full-stack Blood Donation Management Platform built with Next.js, React, MongoDB, Express.js, and Better Auth. The platform connects blood donors with recipients through an easy-to-use dashboard where users can create, manage, and track blood donation requests.",
    image: "/lifedrop.png",
    tech: [
      "Next.js",
      "React.js",
      "Tailwind",
      "HeroUI",
      "Better Auth",
      "MongoDB",
    ],
    live: "https://life-drop-client.vercel.app",
    github: "https://github.com/Badsha-Nishan/life-drop-client",
  },
  {
    title: "Study Nook",
    description:
      "StudyNook is a modern full-stack study room booking platform where users can discover, add, and reserve study rooms easily. Built with Next.js, Express.js, MongoDB, and Better Auth.",
    image: "/studynook.png",
    tech: [
      "Next.js",
      "React.js",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Tailwind",
      "Better Auth",
      "Google Login",
    ],
    live: "https://studynook-client-one.vercel.app",
    github: "https://github.com/Badsha-Nishan/studynook-client",
  },
  {
    title: "Event Hub",
    description:
      "A modern Full-Stack Event Management Platform built with React, TypeScript, Node.js, Express, and MongoDB. EventHub allows users to discover events, create and manage events, register for events, and enjoy a seamless, responsive experience with secure authentication.",
    image: "/event-hub.png",
    tech: [
      "React.js",
      "TypeScript",
      "MongoDB",
      "Tailwind",
      "Axios",
      "HeroUI",
      "TanStack Query",
    ],
    live: "https://event-hub-client-gold.vercel.app",
    github: "https://github.com/Badsha-Nishan/event-hub-client",
  },
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
    title: "Digi Tools",
    description:
      "Modern digital tool buying platform with dynamic UI & cart system.",
    image: "/digitools.png",
    tech: [
      "React.js",
      "React Hooks",
      "React-Toastify",
      "Tailwind",
      "DaisyUI",
      "JSON",
    ],
    live: "https://digital-tool.netlify.app",
    github: "https://github.com/Badsha-Nishan/digital-tool-buying-website",
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
    live: "https://keen-keeper-react.vercel.app",
    github: "https://github.com/Badsha-Nishan/keen-keeper-react",
  },
  {
    title: "Job Application Tracker",
    description:
      "Job application tracker with status management and responsive UI with some interactivity.",
    image: "/job.png",
    tech: ["JavaScript (ES6+)", "Tailwind", "Local Storage/JSON"],
    live: "https://badsha-nishan.github.io/Job-Application-Tracker",
    github: "https://github.com/Badsha-Nishan/Job-Application-Tracker",
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
            Things I have Built
          </h3>
          <p className="text-muted-foreground">
            A selection of projects showcasing my skills in full-stack
            development, UI design, and performance optimization.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, rotateX: 3, rotateY: -3 }}
              className="group perspective h-full"
            >
              <div className="relative h-full rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-xl flex flex-col">
                {/* Glow border */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 blur-xl" />

                {/* Image */}
                <div className="h-48 overflow-hidden shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-6 relative flex flex-col flex-1">
                  <div>
                    <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition">
                      {project.title}
                    </h4>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

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
                  </div>

                  {/* Buttons always at bottom */}
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.live}
                      target="_blank"
                      className="flex items-center gap-2 text-xs px-3 py-2 rounded-lg bg-gradient-to-r from-[#48c6ef] to-[#6f86d6] text-black hover:scale-105 transition"
                    >
                      <ExternalLink size={14} /> Live Link
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
