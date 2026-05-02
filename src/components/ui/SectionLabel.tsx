import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
  color?: 'cyan' | 'green'
}

export default function SectionLabel({
  children,
  className,
  // color prop retained for backwards compatibility but no longer used
}: SectionLabelProps) {
  return (
    <span
      className={cn(
        'font-sans text-xs tracking-widest uppercase text-amber font-medium block mb-4',
        className
      )}
    >
      {children}
    </span>
  )
}
