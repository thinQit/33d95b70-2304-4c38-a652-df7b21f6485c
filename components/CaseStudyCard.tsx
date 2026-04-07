"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

interface CaseStudyCardProps {
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  metrics: string[];
  testimonial: string;
  person: string;
  role: string;
  imageSrc: string;
}

export default function CaseStudyCard({
  company = 'Northline Fashion Group',
  industry = 'Retail',
  challenge = 'Late deliveries were impacting repeat purchases in major metro markets.',
  solution = 'DHL implemented same-day zone routing with live tracking and guaranteed POD.',
  metrics = ['98.7% on-time same-day rate', '31% increase in repeat orders', '22% fewer support tickets'],
  testimonial = 'DHL gave us reliability at speed. Customer confidence rose within the first month.',
  person = 'Avery Collins',
  role = 'Head of Operations',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577599/site-images/retail/10574807.jpg',
}: Partial<CaseStudyCardProps>) {
  return (
    <Card className="overflow-hidden rounded-xl border border-black/10">
      <div className="grid md:grid-cols-2">
        <Image src={imageSrc} alt={company} width={1200} height={800} unoptimized className="h-full w-full object-cover" />
        <CardContent className="p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.16em] text-[#C1121F]">{industry}</p>
          <h3 className="mt-2 font-serif text-2xl uppercase tracking-[0.08em]">{company}</h3>
          <div className="mt-5 space-y-4 text-sm text-black/75">
            <p><span className="font-semibold text-black">Challenge:</span> {challenge}</p>
            <p><span className="font-semibold text-black">Solution:</span> {solution}</p>
          </div>
          <ul className="mt-5 space-y-1 text-sm text-black/80">
            {metrics.map((m) => (
              <li key={m}>• {m}</li>
            ))}
          </ul>
          <blockquote className="mt-5 border-l-2 border-[#FFD200] pl-4 text-sm italic text-black/80">
            “{testimonial}”
          </blockquote>
          <p className="mt-3 text-xs uppercase tracking-[0.1em] text-black/60">{person} · {role}</p>
        </CardContent>
      </div>
    </Card>
  );
}
