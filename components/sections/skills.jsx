"use client";

import { motion } from "framer-motion";
import { Code2, Database, Globe, Layout, Server, Wrench } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "REST API"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL"],
  },
  {
    title: "Languages",
    icon: Code2,
    skills: ["JavaScript", "TypeScript"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Vercel"],
  },
  {
    title: "Web",
    icon: Globe,
    skills: ["SEO Basics", "Responsive Design"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-sm uppercase tracking-widest text-primary mb-3">
            Skills
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Technologies I Use
          </h3>
          <p className="text-muted-foreground">
            A collection of tools and technologies I use to build modern web
            applications.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative group rounded-2xl p-[1px] bg-gradient-to-b from-white/10 to-transparent"
            >
              {/* card */}
              <div className="rounded-2xl p-6 bg-black/40 backdrop-blur-xl border border-white/10 hover:border-white/20 transition">
                {/* glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-primary/10 blur-2xl rounded-2xl" />

                {/* icon */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-white/5 border border-white/10 group-hover:scale-110 transition">
                  <group.icon className="w-6 h-6 text-primary" />
                </div>

                {/* title */}
                <h4 className="text-lg font-semibold mb-3 group-hover:text-primary transition">
                  {group.title}
                </h4>

                {/* skills */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/70"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
