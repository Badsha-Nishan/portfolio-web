"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Code2, Palette, Zap } from "lucide-react";
import { useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

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

  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="underline decoration-[#48c6ef] underline-offset-4 text-sm sm:text-xl md:text-2xl font-bold leading-tight mb-6 bg-gradient-to-r from-[#48c6ef] to-[#6f86d6] bg-clip-text text-transparent">
            ABOUT ME
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-balance">
            Turning Ideas into Interactive Web Experiences
          </h3>
          <p className="text-muted-foreground text-lg text-pretty leading-relaxed">
            I&apos;m a passionate Full Stack Developer with a strong interest in
            building modern, responsive, and user-friendly web applications. My
            programming journey began with HTML, CSS, and JavaScript, and as I
            continued learning, I discovered how much I enjoy turning ideas into
            interactive digital experiences. Over time, I expanded my skills to
            work with React, Next.js, Node.js, Express.js, and MongoDB, allowing
            me to build complete web applications from frontend to backend.
          </p>

          <motion.div
            initial={false}
            animate={{
              height: showMore ? "auto" : 0,
              opacity: showMore ? 1 : 0,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-5 space-y-5">
              <p className="text-muted-foreground text-lg text-pretty leading-relaxed">
                I enjoy creating clean and visually appealing user interfaces
                while also building reliable APIs, managing databases, and
                developing secure, scalable application features. I&apos;m
                particularly interested in solving real-world problems through
                technology and continuously improving my skills by building
                practical projects.
              </p>

              <p className="text-muted-foreground text-lg text-pretty leading-relaxed">
                Outside of programming, I enjoy exploring new technologies,
                learning about AI tools, watching tech content, and working on
                personal projects. I&apos;m a curious and consistent learner who
                enjoys taking on new challenges and growing as a developer.
              </p>
            </div>
          </motion.div>

          <button
            type="button"
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-lg border border-primary/30 bg-primary/10 text-primary font-medium transition-all duration-300 hover:bg-primary hover:text-black hover:scale-105"
          >
            {showMore ? "Show Less" : "See More"}

            {showMore ? <ChevronUp size={17} /> : <ChevronDown size={17} />}
          </button>
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
