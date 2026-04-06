"use client";

import { Card } from '@/components/ui/card'

interface Testimonial {
  quote: string
  name: string
  role: string
}

interface TestimonialsProps {
  items?: Testimonial[]
}

export default function Testimonials({
  items = [
    { quote: 'DHL same hour delivery helped us protect high-value orders during evening peaks.', name: 'E. Navarro', role: 'Head of Ecommerce, Mode Atelier' },
    { quote: 'The process is remarkably consistent. Dispatch visibility is exactly what our ops team needed.', name: 'P. Klein', role: 'Operations Director, CityLab Health' },
    { quote: 'Customer complaints dropped significantly after we enabled instant local fulfillment.', name: 'M. Rossi', role: 'Regional Manager, Urban Parts Co.' },
  ],
}: Partial<TestimonialsProps>) {
  return (
    <section className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-3 md:px-6">
      {items.map((item, idx) => (
        <Card key={item.name + idx} className="rounded-xl border-black/10 p-6 transition-transform duration-300 hover:-translate-y-1">
          <p className="text-lg leading-relaxed text-black">“{item.quote}”</p>
          <p className="mt-6 text-sm tracking-wide text-black">{item.name}</p>
          <p className="text-xs tracking-[0.12em] text-black/60">{item.role.toUpperCase()}</p>
        </Card>
      ))}
    </section>
  )
}
