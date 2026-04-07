"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Building2, HeartPulse, ShoppingBag, Wrench } from 'lucide-react';

interface IndustryItem {
  icon: string;
  title: string;
  fitLabel: string;
  description: string;
}

interface IndustryCardsProps {
  industries: IndustryItem[];
}

const iconMap = { Building2, HeartPulse, ShoppingBag, Wrench };

export default function IndustryCards({
  industries = [
    { icon: 'ShoppingBag', title: 'Retail & Fashion', fitLabel: 'High Volume', description: 'Fast customer delivery for premium and time-sensitive orders.' },
    { icon: 'HeartPulse', title: 'Healthcare', fitLabel: 'Critical', description: 'Reliable transport for urgent medical devices and documentation.' },
    { icon: 'Wrench', title: 'Manufacturing', fitLabel: 'Operational', description: 'Rapid part movement to reduce production line downtime.' },
    { icon: 'Building2', title: 'Professional Services', fitLabel: 'Secure', description: 'Same-hour legal and financial document transfer with POD.' },
  ],
}: Partial<IndustryCardsProps>) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {industries.map((industry) => {
        const Icon = iconMap[industry.icon as keyof typeof iconMap] || Building2;
        return (
          <Card key={industry.title} className="rounded-xl border border-black/10 bg-white">
            <CardContent className="p-6">
              <Icon className="h-6 w-6 text-[#C1121F]" />
              <p className="mt-3 inline-block rounded-full bg-[#FFD200]/60 px-3 py-1 text-xs uppercase tracking-[0.1em] text-black">
                {industry.fitLabel}
              </p>
              <h3 className="mt-4 font-serif text-xl uppercase tracking-[0.06em]">{industry.title}</h3>
              <p className="mt-2 text-sm text-black/70">{industry.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
