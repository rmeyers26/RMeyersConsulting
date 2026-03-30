import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
  color?: 'cyan' | 'green'
}

export default function SectionLabel({
  children,
  className,
  color = 'cyan',
}: SectionLabelProps) {
  return (
    <span
      className={cn(
        'font-mono text-xs tracking-[0.2em] uppercase block mb-3',
        color === 'cyan' && 'text-cyan-dim',
        color === 'green' && 'text-green-dim',
        className
      )}
    >
      {`// ${children}`}
    </span>
  )
}
