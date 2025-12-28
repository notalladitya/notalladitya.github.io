'use client'

import { motion } from 'framer-motion'
import { about } from '@/data/content'
import { AnimatedCard } from '@/components/ui/AnimatedCard'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export function About() {
  const Icon = about.currentFocus.icon

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Section Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-12"
            variants={fadeInUp}
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>

          {/* Bio */}
          <motion.p
            className="text-lg md:text-xl text-[var(--color-brand-ghost)] text-center max-w-3xl mx-auto mb-12 leading-relaxed"
            variants={fadeInUp}
          >
            {about.bio}
          </motion.p>

          {/* Current Focus Highlight */}
          <AnimatedCard className="max-w-2xl mx-auto mb-12 bg-gradient-to-br from-[var(--color-brand-cyan)]/10 to-[var(--color-brand-amber)]/10 border border-[var(--color-brand-cyan)]/20">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[var(--color-brand-cyan)]/20">
                <Icon className="w-8 h-8 text-[var(--color-brand-cyan)]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-brand-fog)] mb-2">
                  {about.currentFocus.title}
                </h3>
                <p className="text-[var(--color-brand-ghost)]">
                  {about.currentFocus.description}
                </p>
              </div>
            </div>
          </AnimatedCard>

          {/* Fun Facts Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {about.funFacts.map((fact, index) => {
              const FactIcon = fact.icon
              return (
                <AnimatedCard key={fact.title} delay={index * 0.1}>
                  <div className="text-center">
                    <motion.div
                      className="inline-flex p-4 rounded-full bg-[var(--color-brand-amber)]/10 mb-4"
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <FactIcon className="w-8 h-8 text-[var(--color-brand-amber)]" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-[var(--color-brand-fog)] mb-2">
                      {fact.title}
                    </h3>
                    <p className="text-sm text-[var(--color-brand-ghost)]">
                      {fact.description}
                    </p>
                  </div>
                </AnimatedCard>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
