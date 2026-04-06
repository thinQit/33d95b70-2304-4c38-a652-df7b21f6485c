"use client";

import { Card } from '@/components/ui/card'

interface CaseStudy {
  title: string
  challenge: string
  solution: string
  results: string
  metricChips: string[]
}

interface CaseStudiesProps {
  studies?: CaseStudy[]
}

export default function CaseStudies({
  studies = [
    {
      title: 'LUXURY RETAIL RECOVERY',
      challenge: 'High-value carts were abandoned due to delayed fulfillment windows.',
      solution: 'Integrated same hour checkout option for city inventory.',
      results: 'Recovered premium conversions in under 8 weeks.',
      metricChips: ['+31% CART RECOVERY', '<60 MIN AVERAGE', 'NPS +18'],
    },
    {
      title: 'HEALTH NETWORK URGENCY',
      challenge: 'Critical specimen movement lacked route certainty.',
      solution: 'Dedicated dispatch workflow with live chain-of-custody updates.',
      results: 'Clinical processing queues normalized across two districts.',
      metricChips: ['43% FASTER TURNAROUND', '99.2% ON-TIME', '24/7 READY'],
    },
  ],
}: Partial<CaseStudiesProps>) {
  return (
    <section className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2 md:px-6">
      {studies.map((study) => (
        <Card key={study.title} className="rounded-xl border-black/10 p-6">
          <h3 className="font-serif text-2xl tracking-[0.08em] text-black">{study.title}</h3>
          <div className="mt-5 space-y-3 text-sm text-black/80">
            <p><span className="text-black">Challenge:</span> {study.challenge}</p>
            <p><span className="text-black">Solution:</span> {study.solution}</p>
            <p><span className="text-black">Results:</span> {study.results}</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {study.metricChips.map((chip) => (
              <span key={chip} className="rounded-full border border-black/15 px-3 py-1 text-xs tracking-[0.1em] text-[#C1121F]">
                {chip}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </section>
  )
}
