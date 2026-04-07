'use client';

import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

interface TestimonialItem {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface TestimonialsCarouselProps {
  testimonials: TestimonialItem[];
}

export default function TestimonialsCarousel({
  testimonials = [
    {
      quote: 'Our same-day conversion rate climbed immediately after enabling DHL rapid delivery.',
      name: 'Morgan Lee',
      designation: 'Ecommerce Director, Urban Edit',
      src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577358/site-images/team-people/1181401.jpg',
    },
    {
      quote: 'Operationally precise, fast, and transparent. Tracking visibility is excellent.',
      name: 'Priya Raman',
      designation: 'Supply Chain Lead, Apex Health',
      src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577325/site-images/team-people/10347164.jpg',
    },
    {
      quote: 'The DHL team made same-hour logistics practical for our most urgent client requests.',
      name: 'Daniel Ortiz',
      designation: 'COO, Metro Legal Services',
      src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577335/site-images/team-people/1181734.jpg',
    },
  ],
}: Partial<TestimonialsCarouselProps>) {
  return <AnimatedTestimonials testimonials={testimonials} autoplay />;
}
