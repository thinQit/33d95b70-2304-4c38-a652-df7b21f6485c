'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface UseCase {
  industry: string
  summary: string
  outcome: string
}

interface UseCaseCarouselProps {
  cases?: UseCase[]
}

export default function UseCaseCarousel({
  cases = [
    { industry: 'HEALTHCARE', summary: 'Urgent lab samples moved within city perimeter.', outcome: '43% faster clinical turnaround' },
    { industry: 'FASHION RETAIL', summary: 'Same-day conversion of abandoned premium carts.', outcome: '31% uplift in completion rate' },
    { industry: 'AUTOMOTIVE', summary: 'Critical parts routed to service centers in under 60 minutes.', outcome: '22% downtime reduction' },
  ],
}: Partial<UseCaseCarouselProps>) {
  const [index, setIndex] = useState(0)
  const active = cases[index] || cases[0]

  return (
    <section className="mx-auto max-w-7xl px-4 md:px-6">
      <div className="md:hidden">
        <Card className="rounded-xl border-black/10 p-6">
          <Sparkles className="h-4 w-4 text-[#C1121F]" />
          <p className="mt-4 text-xs tracking-[0.2em] text-black/60">{active.industry}</p>
          <p className="mt-3 text-base text-black">{active.summary}</p>
          <p className="mt-5 text-sm text-[#C1121F]">{active.outcome}</p>
          <div className="mt-6 flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={() => setIndex((v) => (v - 1 + cases.length) % cases.length)}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => setIndex((v) => (v + 1) % cases.length)}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      </div>

      <div className="hidden gap-6 md:grid md:grid-cols-3">
        {cases.map((item, idx) => (
          <Card key={item.industry + idx} className="rounded-xl border-black/10 p-6">
            <p className="text-xs tracking-[0.2em] text-black/60">{item.industry}</p>
            <p className="mt-3 text-base text-black">{item.summary}</p>
            <p className="mt-5 text-sm text-[#C1121F]">{item.outcome}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
