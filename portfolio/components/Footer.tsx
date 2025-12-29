'use client';

import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[var(--color-charcoal)] border-t border-[var(--color-carbon)]">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold font-mono mb-4">
              <span className="text-[var(--color-ghost)]">{'<'}</span>
              <span className="neon-text">Aditya Sharma</span>
              <span className="text-[var(--color-ghost)]">{' />'}</span>
            </h3>
            <p className="text-[var(--color-silver)] text-sm">
              Senior Software Engineer passionate about building scalable, elegant solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-sm font-mono text-[var(--color-primary)] uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              {['About', 'Experience', 'Skills', 'Contact'].map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="block text-[var(--color-silver)] hover:text-[var(--color-primary)] text-sm transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm font-mono text-[var(--color-primary)] uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex gap-4">
              {[
                { icon: <Github size={20} />, href: 'https://github.com/dtr-beast', label: 'GitHub' },
                { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/aditya-5harma', label: 'LinkedIn' },
                { icon: <Mail size={20} />, href: 'mailto:aditya.sharma.11072001@gmail.com', label: 'Email' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--color-carbon)] text-[var(--color-silver)] border border-[var(--color-slate)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-[var(--color-carbon)] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-sm text-[var(--color-zinc)] font-mono flex items-center justify-center gap-2 flex-wrap">
            <span>© {currentYear} Aditya Sharma.</span>
            <span className="hidden sm:inline">Built with</span>
            <Heart size={14} className="text-[var(--color-neon-magenta)] inline" fill="currentColor" />
            <span className="hidden sm:inline">using Next.js, Framer Motion & Tailwind CSS</span>
          </p>
          <p className="text-xs text-[var(--color-zinc)] font-mono mt-2">
            Designed with <span className="text-[var(--color-primary)]">Kinetic Typography Lab</span> aesthetic
          </p>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent opacity-50" />
    </footer>
  );
}
