"use client";

import { motion } from "framer-motion";

const education = [
  {
    year: "2015 - 2018",
    title: "BSS – Social Science",
    institution: "Bangladesh Open University",
    description:
      "Undergraduate program in social sciences and humanities. Focused on developing academic and analytical skills.",
  },
  {
    year: "2025 - Present",
    title: "Web Development – Programming Hero",
    institution: "Programming Hero",
    description:
      "Currently learning full-stack web development, focusing on modern technologies like React, Next.js, and Node.js while building practical projects.",
  },
];

export default function Education() {
  return (
    <section id="education" className="mb-18">
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
            EDUCATION
          </h2>

          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            My Academic Journey
          </h3>

          <p className="text-muted-foreground">
            My educational background and learning progress in Web Development.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative group rounded-2xl p-[1px] bg-gradient-to-b from-white/10 to-transparent"
            >
              {/* Card */}
              <div className="rounded-2xl p-6 bg-black/40 backdrop-blur-xl border border-white/10 hover:border-white/20 transition">
                {/* glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-primary/10 blur-2xl rounded-2xl" />

                {/* Year */}
                <span className="text-xs text-primary font-semibold">
                  {item.year}
                </span>

                {/* Title */}
                <h3 className="text-lg font-semibold mt-2">{item.title}</h3>

                {/* Institution */}
                <p className="text-sm text-muted-foreground mt-1">
                  {item.institution}
                </p>

                {/* Description */}
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
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
