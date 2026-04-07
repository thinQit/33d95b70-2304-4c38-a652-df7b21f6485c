'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface GalleryItem {
  imageSrc: string;
  caption: string;
}

interface LookbookGalleryProps {
  images: GalleryItem[];
}

export default function LookbookGallery({
  images = [
    { imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577593/site-images/retail/10360425.jpg', caption: 'Priority retail handoff in downtown district' },
    { imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577602/site-images/retail/11498771.jpg', caption: 'Store-to-door premium same-day experience' },
    { imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577617/site-images/retail/13068367.jpg', caption: 'Peak-hour dispatch from fulfillment point' },
    { imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577588/site-images/retail/11440423.jpg', caption: 'Branded delivery touchpoint for luxury orders' },
  ],
}: Partial<LookbookGalleryProps>) {
  return (
    <div className="grid gap-4 md:grid-cols-12">
      {images.map((item, index) => (
        <motion.figure
          key={item.imageSrc + index}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className={index % 3 === 0 ? 'md:col-span-7' : 'md:col-span-5'}
        >
          <div className="overflow-hidden rounded-xl">
            <Image
              src={item.imageSrc}
              alt={item.caption}
              width={1200}
              height={800}
              unoptimized
              className="h-[320px] w-full object-cover md:h-[420px]"
            />
          </div>
          <figcaption className="mt-2 text-sm uppercase tracking-[0.08em] text-black/70">{item.caption}</figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
