'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
  className: string;
}

export default function CTAButton({
  label = 'Get Started',
  href = '/contact',
  variant = 'primary',
  className = '',
}: Partial<CTAButtonProps>) {
  return (
    <Button
      asChild
      className={cn(
        'group rounded-lg px-6 py-3 text-sm uppercase tracking-[0.12em] transition-all focus-visible:ring-2 focus-visible:ring-[#FFD200]',
        variant === 'primary'
          ? 'bg-[#C1121F] text-white hover:bg-[#a50f1a]'
          : 'border border-black bg-white text-black hover:bg-black hover:text-white',
        className
      )}
    >
      <Link href={href}>
        {label}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </Button>
  );
}
