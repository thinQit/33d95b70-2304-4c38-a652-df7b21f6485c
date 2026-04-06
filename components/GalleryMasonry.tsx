"use client";

import React, { useState } from "react";
import Image from "next/image";

interface GalleryImage {
  url: string;
  alt: string;
  caption?: string;
}

interface GalleryMasonryProps {
  headline: string;
  subheadline?: string;
  images: GalleryImage[];
}

export default function GalleryMasonry({
  headline = "LOOKBOOK",
  subheadline = "A monochrome visual diary with modern silhouettes and soft accent moments.",
  images = [],
}: Partial<GalleryMasonryProps>) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const galleryItems =
    images.length > 0
      ? images
      : [
          { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577630/site-images/retail/12385440.jpg", alt: "Editorial look one", caption: "Tailored Ease" },
          { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577623/site-images/retail/13077721.jpg", alt: "Editorial look two", caption: "Evening Contrast" },
          { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577600/site-images/retail/12299947.jpg", alt: "Editorial look three", caption: "Minimal Statement" },
          { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577599/site-images/retail/11297769.jpg", alt: "Editorial look four", caption: "Soft Structure" },
          { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577603/site-images/retail/12340558.jpg", alt: "Editorial look five", caption: "Runway Neutrals" },
          { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577624/site-images/retail/13070798.jpg", alt: "Editorial look six", caption: "City Layering" },
        ];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-[0.08em] uppercase text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map(function (img, i) {
            return (
              <div
                key={i}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl card-hover"
                onClick={function () {
                  setSelectedImage(img);
                }}
              >
                <Image
                  src={img.url}
                  alt={img.alt}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 transition-all group-hover:bg-foreground/30" />
                {img.caption && (
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform group-hover:translate-y-0">
                    <p className="text-sm text-primary-foreground uppercase tracking-wide">{img.caption}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4"
            onClick={function () {
              setSelectedImage(null);
            }}
          >
            <div className="relative h-[85vh] w-[90vw]">
              <Image
                src={selectedImage.url}
                alt={selectedImage.alt}
                fill
                unoptimized
                className="rounded-lg object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
