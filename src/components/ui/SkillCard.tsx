'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { ProgressBar } from './ProgressBar'
import { fadeInUp } from '@/lib/animations'

interface Skill {
  name: string
  level: number
}

interface SkillCardProps {
  name: string
  icon: LucideIcon
  color: string
  skills: Skill[]
  delay?: number
}

export function SkillCard({ name, icon: Icon, color, skills, delay = 0 }: SkillCardProps) {
  return (
    <motion.div
      className="glass rounded-xl p-6 card-glow"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
      transition={{ delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      style={{ borderTop: `3px solid ${color}` }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div
          className="p-3 rounded-lg"
          style={{ backgroundColor: `${color}20` }}
        >
          <Icon className="w-6 h-6" style={{ color }} />
        </div>
        <h3 className="text-xl font-bold text-[var(--color-brand-fog)]">{name}</h3>
      </div>

      <div className="space-y-4">
        {skills.map((skill, index) => (
          <ProgressBar
            key={skill.name}
            skill={skill.name}
            level={skill.level}
            delay={delay + 0.1 * (index + 1)}
            color={color}
          />
        ))}
      </div>
    </motion.div>
  )
}
