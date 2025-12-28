import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'cyan' | 'amber' | 'coral'
}

export function Badge({ children, className, variant = 'default' }: BadgeProps) {
  const variantStyles = {
    default: 'bg-[rgba(136,146,176,0.1)] border-[var(--color-brand-ghost)] text-[var(--color-brand-ghost)]',
    cyan: 'bg-[rgba(6,214,160,0.1)] border-[var(--color-brand-cyan)] text-[var(--color-brand-cyan)]',
    amber: 'bg-[rgba(255,183,3,0.1)] border-[var(--color-brand-amber)] text-[var(--color-brand-amber)]',
    coral: 'bg-[rgba(239,71,111,0.1)] border-[var(--color-brand-coral)] text-[var(--color-brand-coral)]',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border',
        'transition-all duration-200 hover:scale-105',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
