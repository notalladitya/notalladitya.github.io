'use client'

import { motion } from 'framer-motion'
import { Badge } from './Badge'
import { slideInLeft } from '@/lib/animations'

interface TimelineItemProps {
  company: string
  role: string
  duration: string
  location: string
  color: string
  achievements: string[]
  techStack: string[]
  delay?: number
  isLast?: boolean
}

export function TimelineItem({
  company,
  role,
  duration,
  location,
  color,
  achievements,
  techStack,
  delay = 0,
  isLast = false,
}: TimelineItemProps) {
  return (
    <motion.div
      className="relative pl-8 pb-12"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={slideInLeft}
      transition={{ delay }}
    >
      {/* Timeline Line */}
      {!isLast && (
        <div
          className="absolute left-[11px] top-6 w-0.5 h-full bg-gradient-to-b from-[var(--color-brand-ghost)] to-transparent opacity-30"
        />
      )}

      {/* Timeline Dot */}
      <motion.div
        className="absolute left-0 top-0 w-6 h-6 rounded-full border-4 border-[var(--color-background)]"
        style={{ backgroundColor: color }}
        whileInView={{ scale: [0, 1.2, 1] }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.2 }}
      />

      {/* Content Card */}
      <motion.div
        className="glass rounded-xl p-6 card-glow"
        whileHover={{ scale: 1.02, rotateY: 2, rotateX: -2 }}
        style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-[var(--color-brand-fog)] mb-1">
              {company}
            </h3>
            <p className="text-lg font-medium" style={{ color }}>
              {role}
            </p>
          </div>
          <div className="text-sm text-[var(--color-brand-ghost)] mt-2 md:mt-0 md:text-right">
            <p>{duration}</p>
            <p>{location}</p>
          </div>
        </div>

        {/* Achievements */}
        <ul className="space-y-2 mb-4">
          {achievements.map((achievement, index) => (
            <motion.li
              key={index}
              className="flex items-start gap-2 text-sm text-[var(--color-brand-ghost)]"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.3 + index * 0.1 }}
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
              <span>{achievement}</span>
            </motion.li>
          ))}
        </ul>

        {/* Tech Stack */}
        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <Badge key={tech} variant="default">
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}
