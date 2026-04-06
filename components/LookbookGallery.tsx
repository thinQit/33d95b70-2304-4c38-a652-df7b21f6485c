'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface LookbookItem {
  imageSrc: string
  caption: string
}

interface LookbookGalleryProps {
  images?: LookbookItem[]
}

export default function LookbookGallery({
  images = [
    { imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577623/site-images/retail/13077721.jpg', caption: 'Peak-hour dispatch desk' },
    { imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577588/site-images/retail/12791209.jpg', caption: 'Store-to-door same hour lane' },
    { imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577599/site-images/retail/11297769.jpg', caption: 'Operational handoff precision' },
    { imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577607/site-images/retail/13068378.jpg', caption: 'Courier readiness at scale' },
  ],
}: Partial<LookbookGalleryProps>) {
  return (
    <section className="mx-auto grid max-w-7xl gap-4 px-4 md:grid-cols-12 md:px-6">
      {images.map((item, idx) => (
        <motion.figure
          key={item.caption + idx}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: idx * 0.08 }}
          className={cn(
            'group overflow-hidden rounded-xl',
            idx === 0 ? 'md:col-span-7 md:row-span-2' : '',
            idx === 1 ? 'md:col-span-5' : '',
            idx === 2 ? 'md:col-span-5' : '',
            idx === 3 ? 'md:col-span-7' : ''
          )}
        >
          <Image
            src={item.imageSrc}
            alt={item.caption}
            width={1200}
            height={800}
            unoptimized
            className="h-[260px] w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-full"
          />
          <figcaption className="border border-t-0 border-black/10 bg-white px-4 py-3 text-xs tracking-[0.14em] text-black/70">
            {item.caption.toUpperCase()}
          </figcaption>
        </motion.figure>
      ))}
    </section>
  )
}
