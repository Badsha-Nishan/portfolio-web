"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  { icon: Github, href: "https://github.com/Badsha-Nishan", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/badsha-nishan",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:badshanisan14@gmail.com", label: "Email" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-18 md:py-24 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground"
          >
            &copy; {currentYear} Sk Badsha Nishan. All rights reserved.
          </motion.p>

          <Link
            href="#"
            className="inline-block hover:scale-125 transition duration-200"
          >
            <Image src="/logo.png" width={80} height={80} alt="Logo" />
          </Link>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.label}
              >
                <link.icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
