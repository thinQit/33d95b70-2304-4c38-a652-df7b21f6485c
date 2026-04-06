"use client";

import Image from 'next/image'
import { MapPin, Clock3, Phone } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface MapSectionProps {
  imageSrc?: string
  address?: string
  hours?: string
  phone?: string
}

export default function MapSection({
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577715/site-images/hero-backgrounds/1631677.jpg',
  address = 'DHL Express City Hub, 28 Logistics Avenue, Berlin, Germany',
  hours = 'Mon–Sat, 06:00–23:00',
  phone = '+49 30 1234 5678',
}: Partial<MapSectionProps>) {
  return (
    <section className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2 md:px-6">
      <div className="overflow-hidden rounded-xl border border-black/10">
        <Image src={imageSrc} alt="DHL service map area" width={1200} height={800} unoptimized className="h-full w-full object-cover" />
      </div>
      <Card className="rounded-xl border-black/10 p-6">
        <h3 className="font-serif text-3xl tracking-[0.1em] text-black">CONTACT HUB</h3>
        <div className="mt-6 space-y-4 text-sm text-black/80">
          <p className="flex gap-2"><MapPin className="h-4 w-4 text-[#C1121F]" /> {address}</p>
          <p className="flex gap-2"><Clock3 className="h-4 w-4 text-[#C1121F]" /> {hours}</p>
          <p className="flex gap-2"><Phone className="h-4 w-4 text-[#C1121F]" /> {phone}</p>
        </div>
      </Card>
    </section>
  )
}
