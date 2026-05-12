"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that follows best practices",
  },
  {
    icon: Palette,
    title: "Design Focus",
    description: "Creating intuitive interfaces with attention to every detail",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Building fast, optimized applications for the best user experience",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-[#48c6ef] to-[#6f86d6] bg-clip-text text-transparent">
            About
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-balance">
            Crafting Digital Experiences
          </h3>
          <p className="text-muted-foreground text-lg text-pretty">
            I&apos;m a passionate Frontend Developer who enjoys creating clean,
            responsive, and interactive web interfaces using React and Next.js.
            I’m currently expanding my skill set by learning backend development
            with Node.js and Express.js, with the goal of becoming a
            well-rounded full-stack developer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group rounded-2xl p-[1px] bg-gradient-to-b from-white/10 to-transparent"
            >
              {/* inner card */}
              <div className="rounded-2xl p-8 bg-black/40 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all">
                {/* glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 blur-xl" />

                {/* icon */}
                <motion.div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-white/5 border border-white/10"
                  whileHover={{ rotate: 6, scale: 1.1 }}
                >
                  <item.icon className="w-6 h-6 text-primary" />
                </motion.div>

                {/* title */}
                <h4 className="text-xl font-semibold mb-3 text-white group-hover:text-primary transition-colors">
                  {item.title}
                </h4>

                {/* description */}
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
