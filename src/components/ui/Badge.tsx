import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'amber' | 'ink' | 'ghost'
  className?: string
}

export default function Badge({ children, variant = 'ghost', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-sans text-xs px-2.5 py-1 rounded-md border',
        variant === 'amber' && 'bg-amber-light border-amber/20 text-amber',
        variant === 'ink'   && 'bg-surface-2 border-border text-ink-2',
        variant === 'ghost' && 'bg-surface border-border text-ink-3',
        className
      )}
    >
      {children}
    </span>
  )
}
