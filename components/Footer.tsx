"use client";

import Link from 'next/link'
import { cn } from '@/lib/utils'

interface FooterLink {
  label: string
  href: string
}

interface FooterProps {
  brand?: string
  serviceLinks?: FooterLink[]
  companyLinks?: FooterLink[]
  operationsLinks?: FooterLink[]
  finePrint?: string
}

export default function Footer({
  brand = 'DHL SAME HOUR',
  serviceLinks = [
    { label: 'Emergency Delivery', href: '/same-hour-delivery' },
    { label: 'On-Demand Courier', href: '/same-hour-delivery' },
    { label: 'Medical Priority', href: '/same-hour-delivery' },
    { label: 'Retail Rush', href: '/same-hour-delivery' },
  ],
  companyLinks = [
    { label: 'About Us', href: '/about-us' },
    { label: 'Proven Business Cases', href: '/proven-business-cases' },
    { label: 'Careers', href: '/about-us' },
    { label: 'Press', href: '/about-us' },
  ],
  operationsLinks = [
    { label: 'Coverage Areas', href: '/same-hour-delivery' },
    { label: 'Service SLA', href: '/same-hour-delivery' },
    { label: 'Contact Center', href: '/contact' },
    { label: 'Support', href: '/contact' },
  ],
  finePrint = '© 2026 DHL Same Hour. Service availability and response times vary by route, traffic, weather, and package readiness.',
}: Partial<FooterProps>) {
  const col = 'space-y-4'
  const heading = 'text-xs tracking-[0.2em] text-black'
  const item = 'block text-sm text-black/70 transition-colors hover:text-[#C1121F]'

  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <p className="font-serif text-lg tracking-[0.2em] text-black">{brand}</p>
            <p className="max-w-xs text-sm text-black/70">
              Mission-critical same hour logistics designed for modern operations and customer expectations.
            </p>
          </div>

          <div className={col}>
            <h4 className={heading}>SERVICES</h4>
            <div className="space-y-2">
              {serviceLinks.map((l) => (
                <Link key={l.label} href={l.href} className={item}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div className={col}>
            <h4 className={heading}>COMPANY</h4>
            <div className="space-y-2">
              {companyLinks.map((l) => (
                <Link key={l.label} href={l.href} className={item}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div className={col}>
            <h4 className={heading}>OPERATIONS</h4>
            <div className="space-y-2">
              {operationsLinks.map((l) => (
                <Link key={l.label} href={l.href} className={item}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className={cn('mt-12 border-t border-black/10 pt-6 text-xs tracking-wide text-black/60')}>
          {finePrint}
        </div>
      </div>
    </footer>
  )
}
