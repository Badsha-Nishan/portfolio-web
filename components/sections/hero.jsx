"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import Image from "next/image";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:contact@example.com", label: "Email" },
];

export default function Hero() {
  return (
    <section className="pt-28 md:pt-32 relative z-10 min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-accent/10 blur-[120px] rounded-full" />
      </div>

      {/* MAIN GRID (IMPORTANT FIX) */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 items-center gap-12">
          {/* TEXT SIDE */}
          <div className="text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6"
            >
              Full-Stack Developer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Sk Badsha Nishan
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-muted-foreground mb-10 leading-relaxed"
            >
              I build fast, modern and scalable web applications using React and
              Next.js.
            </motion.p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center md:justify-start">
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
                <a
                  key={link.label}
                  href={link.href}
                  className="p-3 rounded-full border border-white/10 hover:bg-white/5"
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />

            <Image
              src="/profile.png"
              alt="Profile"
              width={320}
              height={320}
              className="relative rounded-full border border-white/10 shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* SCROLL */}
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
