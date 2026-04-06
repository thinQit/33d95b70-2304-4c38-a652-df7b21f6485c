"use client";

import { Clock3, ShieldCheck, Truck, Sparkles } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface CollectionItem {
  title: string
  highlight: string
  price: string
  sla: string
  icon: string
}

interface CollectionCardsProps {
  items?: CollectionItem[]
}

const iconMap = {
  Clock3,
  ShieldCheck,
  Truck,
  Sparkles,
}

export default function CollectionCards({
  items = [
    { title: 'Core Same Hour', highlight: 'Best for urban zones', price: 'From €19', sla: 'Pickup in 20 min target', icon: 'Clock3' },
    { title: 'Priority Medical', highlight: 'Temperature-sensitive option', price: 'From €34', sla: 'Direct route dispatch', icon: 'ShieldCheck' },
    { title: 'Retail Rush', highlight: 'Peak-hour order recovery', price: 'From €22', sla: 'Delivery under 90 min', icon: 'Truck' },
  ],
}: Partial<CollectionCardsProps>) {
  return (
    <section className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-3 md:px-6">
      {items.map((item, idx) => {
        const Icon = iconMap[item.icon as keyof typeof iconMap] || Sparkles
        return (
          <Card
            key={item.title + idx}
            className={cn('rounded-xl border-black/10 p-6 transition-all hover:-translate-y-1 hover:border-[#C1121F]/30')}
          >
            <div className="mb-5 inline-flex rounded-full bg-[#EACBD2]/40 p-2">
              <Icon className="h-4 w-4 text-[#C1121F]" />
            </div>
            <h3 className="font-serif text-2xl uppercase tracking-[0.08em] text-black">{item.title}</h3>
            <p className="mt-2 text-sm tracking-wide text-black/70">{item.highlight}</p>
            <p className="mt-6 text-xl text-black">{item.price}</p>
            <p className="mt-1 text-xs tracking-[0.12em] text-black/60">{item.sla}</p>
          </Card>
        )
      })}
    </section>
  )
}
