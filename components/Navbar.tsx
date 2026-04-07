'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  logoText: string;
  items: NavItem[];
  ctaLabel: string;
  ctaHref: string;
}

export default function Navbar({
  logoText = 'DHL SAME-DAY',
  items = [
    { label: 'Home', href: '/' },
    { label: 'Same-Day Delivery', href: '/same-day-delivery' },
    { label: 'About Us', href: '/about' },
    { label: 'Business Cases', href: '/business-cases' },
    { label: 'Contact', href: '/contact' },
  ],
  ctaLabel = 'Request a Quote',
  ctaHref = '/contact',
}: Partial<NavbarProps>) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white/95 backdrop-blur">
      <div className="h-1 w-full bg-[#C1121F]" />
      <div className="h-1 w-full bg-[#FFD200]" />
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="font-serif text-lg tracking-[0.18em] text-black md:text-xl">
          {logoText}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm uppercase tracking-[0.14em] text-black/80 transition hover:text-[#C1121F]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="rounded-lg bg-[#C1121F] text-white hover:bg-[#a50f1a]">
            <Link href={ctaHref}>
              {ctaLabel}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-black md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          'border-t border-black/10 bg-white md:hidden',
          open ? 'block' : 'hidden'
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4">
          {items.map((item) => (
            <Link
              key={'mobile-' + item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm uppercase tracking-[0.12em] text-black/80 hover:bg-black/5"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="mt-2 w-full rounded-lg bg-[#C1121F] text-white hover:bg-[#a50f1a]">
            <Link href={ctaHref} onClick={() => setOpen(false)}>
              {ctaLabel}
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
