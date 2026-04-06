'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface NavLink {
  label: string
  href: string
}

interface NavbarProps {
  logo?: string
  navItems?: NavLink[]
  ctaLabel?: string
  ctaHref?: string
}

export default function Navbar({
  logo = 'DHL Same Hour',
  navItems = [
    { label: 'Landing', href: '/' },
    { label: 'Same Hour Delivery', href: '/same-hour-delivery' },
    { label: 'About Us', href: '/about' },
    { label: 'Business Cases', href: '/proven-business-cases' },
    { label: 'Contact', href: '/contact' },
  ],
  ctaLabel = 'Request a Quote',
  ctaHref = '/contact',
}: Partial<NavbarProps>) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="font-serif text-lg tracking-[0.2em] text-black">
          {logo}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs tracking-[0.2em] text-black/80 transition-colors hover:text-[#C1121F]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button
            asChild
            className="rounded-lg bg-[#C1121F] px-6 py-2 text-xs tracking-[0.16em] text-white hover:bg-[#a00f19]"
          >
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5 text-black" /> : <Menu className="h-5 w-5 text-black" />}
        </button>
      </nav>

      <div
        className={cn(
          'overflow-hidden border-t border-black/10 bg-white transition-all duration-300 md:hidden',
          open ? 'max-h-96' : 'max-h-0'
        )}
      >
        <div className="space-y-1 px-4 py-4">
          {navItems.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-black/5 py-3 text-xs tracking-[0.2em] text-black"
            >
              {link.label}
              <ChevronRight className="h-4 w-4 text-[#C1121F]" />
            </Link>
          ))}
          <Button asChild className="mt-3 w-full rounded-lg bg-[#C1121F] text-xs tracking-[0.16em] text-white">
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
