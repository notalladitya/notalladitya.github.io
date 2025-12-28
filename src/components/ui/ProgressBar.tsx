'use client'

import { motion } from 'framer-motion'

interface ProgressBarProps {
  skill: string
  level: number
  delay?: number
  color?: string
}

export function ProgressBar({ skill, level, delay = 0, color = '#06D6A0' }: ProgressBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-[var(--color-brand-fog)]">{skill}</span>
        <span className="text-xs text-[var(--color-brand-ghost)]">{level}%</span>
      </div>
      <div className="w-full h-2 bg-[rgba(255,255,255,0.05)] rounded-full overflow-hidden">
        <motion.div
          className="h-full circuit-trace relative"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 1.5,
            ease: [0.43, 0.13, 0.23, 0.96],
            delay: delay + 0.2,
          }}
        />
      </div>
    </div>
  )
}
