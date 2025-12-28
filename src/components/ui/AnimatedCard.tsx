'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { fadeInUp } from '@/lib/animations'

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function AnimatedCard({ children, className, delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
      transition={{ delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={cn(
        'glass rounded-xl p-6 card-glow',
        'transition-all duration-300',
        className
      )}
    >
      {children}
    </motion.div>
  )
}
