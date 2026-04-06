"use client";

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CTASectionProps {
  title?: string
  bullets?: string[]
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export default function CTASection({
  title = 'READY TO ACTIVATE SAME HOUR DELIVERY?',
  bullets = ['Fast onboarding in days, not months', 'Coverage designed for dense urban demand', 'Enterprise-ready SLA governance'],
  primaryLabel = 'TALK TO SALES',
  primaryHref = '/contact',
  secondaryLabel = 'VIEW BUSINESS CASES',
  secondaryHref = '/proven-business-cases',
}: Partial<CTASectionProps>) {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h3 className="font-serif text-3xl uppercase tracking-[0.1em] text-white md:text-5xl">{title}</h3>
        <ul className="mt-8 space-y-2 text-white/80">
          {bullets.map((b) => (
            <li key={b} className="text-sm tracking-wide">• {b}</li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild className="rounded-lg bg-[#C1121F] px-6 text-xs tracking-[0.16em] text-white hover:bg-[#a00f19]">
            <Link href={primaryHref}>{primaryLabel}</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-lg border-white/30 bg-transparent px-6 text-xs tracking-[0.16em] text-white hover:bg-white hover:text-black">
            <Link href={secondaryHref} className="inline-flex items-center gap-2">
              {secondaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
