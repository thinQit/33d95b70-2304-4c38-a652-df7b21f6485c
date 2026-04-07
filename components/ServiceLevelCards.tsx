"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock3, Timer, CalendarClock } from 'lucide-react';

interface ServiceCard {
  icon: string;
  name: string;
  price: string;
  description: string;
  highlights: string[];
}

interface ServiceLevelCardsProps {
  services: ServiceCard[];
}

const iconMap = { Clock3, Timer, CalendarClock };

export default function ServiceLevelCards({
  services = [
    {
      icon: 'Timer',
      name: 'Same-Hour',
      price: 'From $89',
      description: 'Immediate dispatch for critical parts, legal documents, and urgent retail orders.',
      highlights: ['Dispatch in under 15 minutes', 'Dedicated courier', 'Live ETA updates'],
    },
    {
      icon: 'Clock3',
      name: 'Same-Day',
      price: 'From $39',
      description: 'Fast same-day delivery across metro zones with trusted DHL operational standards.',
      highlights: ['Multiple pickup windows', 'Signature on delivery', 'Business SLA coverage'],
    },
    {
      icon: 'CalendarClock',
      name: 'Scheduled Runs',
      price: 'Custom Plans',
      description: 'Planned daily or weekly routes for recurring inventory and B2B transfers.',
      highlights: ['Predictable pricing', 'Route optimization', 'Account manager support'],
    },
  ],
}: Partial<ServiceLevelCardsProps>) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {services.map((service) => {
        const Icon = iconMap[service.icon as keyof typeof iconMap] || Clock3;
        return (
          <Card key={service.name} className="rounded-xl border border-black/10 bg-white shadow-sm transition hover:shadow-md">
            <CardHeader>
              <div className="mb-4 inline-flex rounded-full bg-[#FFD200]/50 p-2 text-[#C1121F]">
                <Icon className="h-5 w-5" />
              </div>
              <CardTitle className="font-serif text-2xl uppercase tracking-[0.08em]">{service.name}</CardTitle>
              <p className="text-sm uppercase tracking-[0.12em] text-[#C1121F]">{service.price}</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-black/70">{service.description}</p>
              <ul className="mt-4 space-y-2">
                {service.highlights.map((h) => (
                  <li key={h} className="text-sm text-black/80">• {h}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
