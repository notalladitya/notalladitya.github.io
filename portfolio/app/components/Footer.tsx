"use client";

import { motion } from "motion/react";
import { Heart, Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/dtr-beast", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/aditya-5harma", label: "LinkedIn" },
  { icon: Mail, href: "mailto:aditya.sharma.11072001@gmail.com", label: "Email" },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <a href="#" className="inline-block group">
              <span className="text-xl font-bold font-[family-name:var(--font-clash)] tracking-tight">
                <span className="text-[var(--text-primary)]">aditya</span>
                <span className="gradient-text">.</span>
              </span>
            </a>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Building the future, one line at a time.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 rounded-lg bg-[var(--bg-tertiary)] text-[var(--text-muted)] hover:text-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/10 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-[var(--border-subtle)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--text-muted)]">
            © {currentYear} Aditya Sharma. All rights reserved.
          </p>
          <p className="text-sm text-[var(--text-muted)] flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-[var(--accent-tertiary)] inline" /> using Next.js & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
