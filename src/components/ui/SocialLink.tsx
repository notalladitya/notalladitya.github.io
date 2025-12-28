'use client'

import { motion } from 'framer-motion'
import { LucideIcon, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SocialLinkProps {
  name: string
  icon: LucideIcon
  url: string
  handle: string
  color: string
  delay?: number
}

export function SocialLink({ name, icon: Icon, url, handle, color, delay = 0 }: SocialLinkProps) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="glass rounded-lg p-6 flex items-center gap-4 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, type: 'spring', stiffness: 100, damping: 15 }}
      whileHover={{ scale: 1.05, y: -4 }}
    >
      <motion.div
        className="p-3 rounded-full"
        style={{ backgroundColor: `${color}20` }}
        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="w-6 h-6" style={{ color }} />
      </motion.div>

      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[var(--color-brand-fog)]">{name}</span>
          <ExternalLink className="w-4 h-4 text-[var(--color-brand-ghost)] opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <span className="text-sm text-[var(--color-brand-ghost)]">{handle}</span>
      </div>

      <motion.div
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: color }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.a>
  )
}
