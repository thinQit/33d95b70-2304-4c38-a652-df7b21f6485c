"use client";

import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title?: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeading({
  eyebrow = 'DHL EXPRESS',
  title = 'SAME HOUR DELIVERY',
  subtitle = 'Editorial clarity for high-urgency logistics communication.',
  align = 'left',
  className = '',
}: Partial<SectionHeadingProps>) {
  return (
    <div className={cn('space-y-4', align === 'center' ? 'text-center' : 'text-left', className)}>
      <p className="text-xs tracking-[0.24em] text-[#C1121F]">{eyebrow}</p>
      <h2 className="font-serif text-3xl uppercase tracking-[0.12em] text-black md:text-5xl">{title}</h2>
      <p className="max-w-2xl text-base leading-relaxed text-black/70 md:text-lg">{subtitle}</p>
    </div>
  )
}
