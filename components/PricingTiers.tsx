"use client";

import { Check } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface Tier {
  name: string
  price: string
  features: string[]
  disclaimer: string
  featured?: boolean
}

interface PricingTiersProps {
  tiers?: Tier[]
}

export default function PricingTiers({
  tiers = [
    { name: 'ESSENTIAL', price: '€19+', features: ['Urban same hour lane', 'SMS status updates', 'Standard support'], disclaimer: 'For non-fragile parcels up to 5kg.' },
    { name: 'PRIORITY', price: '€34+', features: ['Fastest courier matching', 'Direct route promise', 'Priority support line'], disclaimer: 'Based on coverage and courier availability.', featured: true },
    { name: 'ENTERPRISE', price: 'Custom', features: ['Dedicated account ops', 'Volume pricing', 'SLA governance reporting'], disclaimer: 'Contract terms apply for monthly volume commitments.' },
  ],
}: Partial<PricingTiersProps>) {
  return (
    <section className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-3 md:px-6">
      {tiers.map((tier) => (
        <Card key={tier.name} className={'rounded-xl border-black/10 p-6 ' + (tier.featured ? 'border-[#C1121F]/50 bg-[#EACBD2]/20' : '')}>
          <p className="text-xs tracking-[0.2em] text-black/60">{tier.name}</p>
          <p className="mt-4 font-serif text-4xl text-black">{tier.price}</p>
          <ul className="mt-6 space-y-3">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-black/80">
                <Check className="mt-0.5 h-4 w-4 text-[#C1121F]" />
                {feature}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-black/60">{tier.disclaimer}</p>
          <Button className="mt-6 w-full rounded-lg bg-black text-xs tracking-[0.14em] text-white hover:bg-[#C1121F]">
            SELECT
          </Button>
        </Card>
      ))}
    </section>
  )
}
