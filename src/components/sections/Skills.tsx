'use client'

import { motion } from 'framer-motion'
import { skills } from '@/data/content'
import { SkillCard } from '@/components/ui/SkillCard'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export function Skills() {
  const skillCategories = Object.values(skills)

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--color-background-card)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Section Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-4"
            variants={fadeInUp}
          >
            Skills & <span className="text-gradient">Expertise</span>
          </motion.h2>

          <motion.p
            className="text-lg text-[var(--color-brand-ghost)] text-center mb-12 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Technologies and tools I work with to build exceptional software
          </motion.p>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCard
                key={category.name}
                name={category.name}
                icon={category.icon}
                color={category.color}
                skills={category.skills}
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
