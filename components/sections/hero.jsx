"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import Image from "next/image";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/Badsha-Nishan",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/badsha-nishan",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:badshanisan14@gmail.com",
    label: "Email",
  },
];

export default function Hero() {
  return (
    <section className="relative z-10 min-h-screen flex items-center overflow-hidden bg-background pt-28 md:pt-32">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-accent/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 items-center gap-16">
          {/* TEXT SIDE */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6"
            >
              Full-Stack Developer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
            >
              Crafting Modern{" "}
              <span className="bg-gradient-to-r from-[#48c6ef] to-[#6f86d6] bg-clip-text text-transparent">
                Web Experiences
              </span>{" "}
              That Feel Alive.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 mb-10"
            >
              Hi, I&apos;m{" "}
              <span className="font-semibold text-white">Sk Badsha Nishan</span>
              , a Full-Stack Developer focused on building modern, scalable and
              interactive web applications with clean design and seamless user
              experiences.
            </motion.p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 mb-10">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="px-6 py-3 rounded-xl bg-primary text-black font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
              >
                View Projects
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all duration-300"
              >
                Contact Me
              </motion.a>
            </div>

            {/* SOCIALS */}
            <div className="flex gap-4 justify-center md:justify-start">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 relative flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.03, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px]"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-[30%_70%_70%_30%/30%_30%_70%_70%] blur-3xl opacity-30 animate-pulse" />

              {/* Image Container */}
              <div className="relative w-full h-full rounded-[30%_70%_70%_30%/30%_30%_70%_70%] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl p-3">
                <Image
                  src="/profile.png"
                  alt="Sk Badsha Nishan"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={18} />
      </motion.div>
    </section>
  );
}
