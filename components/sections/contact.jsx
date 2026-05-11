"use client"

import { motion } from "framer-motion"
import { Mail, Send, Github, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
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
            Contact
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Let’s Work Together
          </h3>
          <p className="text-muted-foreground">
            Have a project idea or opportunity? Feel free to reach out. I’m always open to new collaborations.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Left side - info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >

            {/* Email card */}
            <div className="p-6 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="text-primary" />
                <h4 className="font-semibold">Email</h4>
              </div>
              <p className="text-muted-foreground">contact@example.com</p>
            </div>

            {/* Social */}
            <div className="p-6 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-xl">
              <h4 className="font-semibold mb-4">Social</h4>

              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  className="p-3 rounded-lg border border-white/10 hover:bg-white/5 transition"
                >
                  <Github />
                </a>

                <a
                  href="https://linkedin.com"
                  className="p-3 rounded-lg border border-white/10 hover:bg-white/5 transition"
                >
                  <Linkedin />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right side - form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-xl space-y-4"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 outline-none focus:border-primary"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 outline-none focus:border-primary"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 outline-none focus:border-primary"
            />

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 p-3 rounded-lg bg-primary text-black font-medium hover:scale-[1.02] transition"
            >
              Send Message <Send size={16} />
            </button>

          </motion.form>

        </div>
      </div>
    </section>
  )
}