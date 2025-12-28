'use client'

import { motion } from 'framer-motion'
import { Heart, Coffee } from 'lucide-react'
import { personalInfo } from '@/data/content'
import { BackToTop } from '@/components/ui/BackToTop'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-[rgba(255,255,255,0.1)] bg-[var(--color-background-card)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-4">
          {/* Made with love message */}
          <motion.p
            className="text-[var(--color-brand-ghost)] flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Heart className="w-5 h-5 text-[var(--color-brand-coral)] fill-current" />
            </motion.span>
            and lots of
            <motion.span
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            >
              <Coffee className="w-5 h-5 text-[var(--color-brand-amber)]" />
            </motion.span>
          </motion.p>

          {/* Copyright */}
          <motion.p
            className="text-sm text-[var(--color-brand-ghost)]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            © {currentYear} {personalInfo.name}. All rights reserved.
          </motion.p>

          {/* Tech Stack */}
          <motion.p
            className="text-xs text-[var(--color-brand-ghost)] opacity-70"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Built with Next.js, TypeScript, Tailwind CSS & Framer Motion
          </motion.p>
        </div>
      </div>

      {/* Back to Top Button */}
      <BackToTop />
    </footer>
  )
}
