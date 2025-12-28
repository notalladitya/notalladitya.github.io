'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AnimatedButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  icon?: LucideIcon
  className?: string
}

export function AnimatedButton({
  children,
  href,
  onClick,
  variant = 'primary',
  icon: Icon,
  className,
}: AnimatedButtonProps) {
  const variantStyles = {
    primary: 'bg-[var(--color-brand-cyan)] text-[var(--color-brand-navy)] hover:bg-[var(--color-brand-amber)]',
    secondary: 'glass text-[var(--color-brand-fog)] hover:bg-[rgba(255,255,255,0.1)]',
  }

  const ButtonContent = (
    <motion.span
      className="flex items-center gap-2"
      whileHover={{ x: 4 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      {children}
      {Icon && <Icon className="w-5 h-5" />}
    </motion.span>
  )

  const commonClasses = cn(
    'px-6 py-3 rounded-lg font-semibold transition-all duration-300',
    'shadow-lg hover:shadow-xl',
    variantStyles[variant],
    className
  )

  if (href) {
    return (
      <motion.a
        href={href}
        className={commonClasses}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        {ButtonContent}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      className={commonClasses}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {ButtonContent}
    </motion.button>
  )
}
