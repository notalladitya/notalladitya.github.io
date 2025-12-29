"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Send, Mail, Linkedin, Github, MapPin, Loader2, CheckCircle } from "lucide-react";

export default function Contact() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("sending");

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormState("sent");

    // Reset after 3 seconds
    setTimeout(() => setFormState("idle"), 3000);
  };

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--bg-secondary)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,166,35,0.08)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[var(--accent-primary)] font-mono text-sm mb-2 block">
            04. What&apos;s Next?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-clash)] mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-lg mx-auto">
            I&apos;m always open to discussing new opportunities, interesting projects,
            or just having a chat about technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="card-glass p-8">
              <h3 className="text-xl font-bold font-[family-name:var(--font-clash)] text-[var(--text-primary)] mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:aditya.sharma.11072001@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg bg-[var(--bg-tertiary)] hover:bg-[var(--accent-primary)]/10 border border-transparent hover:border-[var(--accent-primary)]/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[var(--accent-primary)]/10 flex items-center justify-center group-hover:bg-[var(--accent-primary)]/20 transition-colors">
                    <Mail className="w-5 h-5 text-[var(--accent-primary)]" />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--text-muted)]">Email</p>
                    <p className="text-[var(--text-primary)] font-medium group-hover:text-[var(--accent-primary)] transition-colors">
                      aditya.sharma.11072001@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/aditya-5harma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-[var(--bg-tertiary)] hover:bg-[var(--accent-secondary)]/10 border border-transparent hover:border-[var(--accent-secondary)]/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[var(--accent-secondary)]/10 flex items-center justify-center group-hover:bg-[var(--accent-secondary)]/20 transition-colors">
                    <Linkedin className="w-5 h-5 text-[var(--accent-secondary)]" />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--text-muted)]">LinkedIn</p>
                    <p className="text-[var(--text-primary)] font-medium group-hover:text-[var(--accent-secondary)] transition-colors">
                      linkedin.com/in/aditya-5harma
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/dtr-beast"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-[var(--bg-tertiary)] hover:bg-[var(--text-primary)]/5 border border-transparent hover:border-[var(--text-primary)]/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[var(--text-primary)]/10 flex items-center justify-center group-hover:bg-[var(--text-primary)]/15 transition-colors">
                    <Github className="w-5 h-5 text-[var(--text-primary)]" />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--text-muted)]">GitHub</p>
                    <p className="text-[var(--text-primary)] font-medium">
                      github.com/dtr-beast
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-[var(--bg-tertiary)]">
                  <div className="w-12 h-12 rounded-lg bg-[var(--accent-tertiary)]/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[var(--accent-tertiary)]" />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--text-muted)]">Location</p>
                    <p className="text-[var(--text-primary)] font-medium">
                      India (Remote Friendly)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="card-glass p-8">
              <h3 className="text-xl font-bold font-[family-name:var(--font-clash)] text-[var(--text-primary)] mb-6">
                Send a Message
              </h3>

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] rounded-lg text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] rounded-lg text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] rounded-lg text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-all resize-none"
                    placeholder="Hi Aditya, I'd love to discuss..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={formState !== "idle"}
                  whileHover={{ scale: formState === "idle" ? 1.02 : 1 }}
                  whileTap={{ scale: formState === "idle" ? 0.98 : 1 }}
                  className={`w-full py-3.5 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${formState === "sent"
                      ? "bg-green-500 text-white"
                      : "bg-[var(--accent-primary)] text-[var(--bg-primary)] hover:bg-[var(--accent-primary-light)]"
                    } disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                  {formState === "idle" && (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                  {formState === "sending" && (
                    <>
                      Sending...
                      <Loader2 className="w-4 h-4 animate-spin" />
                    </>
                  )}
                  {formState === "sent" && (
                    <>
                      Message Sent!
                      <CheckCircle className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
