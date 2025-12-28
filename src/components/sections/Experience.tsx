'use client'

import { motion } from 'framer-motion'
import { experience } from '@/data/content'
import { TimelineItem } from '@/components/ui/TimelineItem'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {/* Section Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-4"
            variants={fadeInUp}
          >
            Work <span className="text-gradient">Experience</span>
          </motion.h2>

          <motion.p
            className="text-lg text-[var(--color-brand-ghost)] text-center mb-16 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            My journey in software development across innovative companies
          </motion.p>

          {/* Timeline */}
          <div className="relative">
            {experience.map((job, index) => (
              <TimelineItem
                key={`${job.company}-${job.role}`}
                company={job.company}
                role={job.role}
                duration={job.duration}
                location={job.location}
                color={job.color}
                achievements={job.achievements}
                techStack={job.techStack}
                delay={index * 0.2}
                isLast={index === experience.length - 1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
