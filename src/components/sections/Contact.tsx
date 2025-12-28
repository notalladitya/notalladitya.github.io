'use client'

import { motion } from 'framer-motion'
import { contact } from '@/data/content'
import { SocialLink } from '@/components/ui/SocialLink'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--color-background-card)]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="text-center"
        >
          {/* Section Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={fadeInUp}
          >
            <span className="text-gradient">{contact.title}</span>
          </motion.h2>

          <motion.p
            className="text-lg text-[var(--color-brand-ghost)] mb-12 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            {contact.message}
          </motion.p>

          {/* Social Links */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {contact.links.map((link, index) => (
              <SocialLink
                key={link.name}
                name={link.name}
                icon={link.icon}
                url={link.url}
                handle={link.handle}
                color={link.color}
                delay={index * 0.1}
              />
            ))}
          </div>

          {/* Farewell Message */}
          <motion.div
            className="inline-flex items-center gap-2 text-xl text-[var(--color-brand-fog)]"
            variants={fadeInUp}
          >
            <span>{contact.farewell}</span>
            <motion.span
              animate={{ rotate: [0, 15, -15, 15, 0], scale: [1, 1.2, 1.2, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              ✨
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
