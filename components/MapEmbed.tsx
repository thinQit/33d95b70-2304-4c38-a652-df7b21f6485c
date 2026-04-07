"use client";

import { Clock3, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface MapEmbedProps {
  mapSrc: string;
  address: string;
  hours: string;
  email: string;
  phone: string;
}

export default function MapEmbed({
  mapSrc = 'https://www.google.com/maps?q=New+York+NY+10001&output=embed',
  address = '1210 Logistics Way, New York, NY 10001',
  hours = 'Mon–Fri: 8:00 AM – 8:00 PM',
  email = 'sameday@dhl.com',
  phone = '+1 (800) 225-5345',
}: Partial<MapEmbedProps>) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <iframe title="DHL Office Location" src={mapSrc} className="h-[360px] w-full rounded-xl border border-black/10" loading="lazy" />
      <div className="rounded-xl border border-black/10 bg-white p-6">
        <h3 className="font-serif text-2xl uppercase tracking-[0.08em]">Visit or Contact DHL</h3>
        <ul className="mt-5 space-y-3 text-sm text-black/80">
          <li className="flex gap-2"><MapPin className="h-4 w-4 text-[#C1121F]" />{address}</li>
          <li className="flex gap-2"><Clock3 className="h-4 w-4 text-[#C1121F]" />{hours}</li>
          <li className="flex gap-2"><Mail className="h-4 w-4 text-[#C1121F]" />{email}</li>
          <li className="flex gap-2"><Phone className="h-4 w-4 text-[#C1121F]" />{phone}</li>
        </ul>
        <div className="mt-6 flex gap-3">
          <Button asChild className="bg-[#C1121F] text-white hover:bg-[#a50f1a]">
            <Link href="/contact">Contact Team</Link>
          </Button>
          <Button asChild variant="outline">
            <a href={'tel:' + phone}>Call Now</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
