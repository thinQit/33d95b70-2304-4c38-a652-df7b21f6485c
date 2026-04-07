"use client";

import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  align: 'left' | 'center';
  className: string;
}

export default function SectionHeader({
  eyebrow = 'DHL SAME-DAY',
  title = 'Speed With Certainty',
  description = 'Mission-critical delivery solutions designed for modern businesses.',
  align = 'left',
  className = '',
}: Partial<SectionHeaderProps>) {
  return (
    <div className={cn('space-y-4', align === 'center' ? 'text-center' : 'text-left', className)}>
      <p className="text-xs uppercase tracking-[0.2em] text-[#C1121F]">{eyebrow}</p>
      <h2 className="font-serif text-3xl uppercase tracking-[0.08em] text-black md:text-5xl">{title}</h2>
      <p className={cn('max-w-2xl text-base text-black/70 md:text-lg', align === 'center' ? 'mx-auto' : '')}>
        {description}
      </p>
    </div>
  );
}
