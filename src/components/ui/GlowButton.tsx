import Link from 'next/link'
import { cn } from '@/lib/utils'

interface GlowButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

export default function GlowButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  type = 'button',
  disabled = false,
}: GlowButtonProps) {
  const base = cn(
    'inline-flex items-center justify-center font-mono font-medium rounded-lg transition-all duration-200 cursor-pointer select-none',
    size === 'sm' && 'text-xs px-4 py-2 gap-1.5',
    size === 'md' && 'text-sm px-6 py-3 gap-2',
    size === 'lg' && 'text-base px-8 py-4 gap-2',
    variant === 'primary' && [
      'bg-cyan text-void',
      'hover:bg-cyan/90 hover:shadow-glow-cyan',
      'active:scale-[0.98]',
    ],
    variant === 'outline' && [
      'bg-transparent text-cyan border border-cyan/50',
      'hover:border-cyan hover:bg-cyan/5 hover:shadow-glow-sm',
      'active:scale-[0.98]',
    ],
    variant === 'ghost' && [
      'bg-transparent text-ghost border border-border',
      'hover:border-border/80 hover:text-slate-light',
      'active:scale-[0.98]',
    ],
    disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
    className
  )

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base}>
      {children}
    </button>
  )
}
