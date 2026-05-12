"use client";

import { motion } from "framer-motion";

const techStack = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Git",
  "GitHub",
  "Framer Motion",
  "Vercel",
];

export default function TechStack() {
  return (
    <section className="py-18 md:py-24 bg-black text-white overflow-hidden">
     
      {/* Marquee Wrapper */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...techStack, ...techStack].map((tech, index) => (
            <div
              key={index}
              className="group px-6 py-3 border border-white/10 rounded-full text-white/60 whitespace-nowrap transition-all duration-300 hover:text-white hover:border-primary hover:shadow-[0_0_20px_rgba(72,198,239,0.4)]"
            >
              <span className="group-hover:text-primary transition">
                {tech}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
