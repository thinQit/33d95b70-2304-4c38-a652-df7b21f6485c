"use client";

import { cn } from '@/lib/utils'

interface StepItem {
  title: string
  description: string
}

interface StepsProps {
  items?: StepItem[]
}

export default function Steps({
  items = [
    { title: 'REQUEST', description: 'Submit pickup details, package dimensions, and urgency through one short form.' },
    { title: 'DISPATCH', description: 'Nearest available DHL partner is assigned with route optimization in real time.' },
    { title: 'DELIVER', description: 'Recipient receives proactive updates and verified same hour handoff confirmation.' },
  ],
}: Partial<StepsProps>) {
  return (
    <section className="mx-auto max-w-5xl space-y-5 px-4 md:px-6">
      {items.map((step, idx) => (
        <div key={step.title + idx} className="grid gap-4 border-b border-black/10 pb-5 md:grid-cols-[90px_1fr]">
          <p className={cn('font-serif text-4xl leading-none text-[#C1121F]')}>{String(idx + 1).padStart(2, '0')}</p>
          <div>
            <h3 className="font-serif text-2xl uppercase tracking-[0.1em] text-black">{step.title}</h3>
            <p className="mt-2 text-black/70">{step.description}</p>
          </div>
        </div>
      ))}
    </section>
  )
}
