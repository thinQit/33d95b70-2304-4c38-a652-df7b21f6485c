"use client";

import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  serviceLinks: FooterLink[];
  companyLinks: FooterLink[];
  legalLinks: FooterLink[];
  companyName: string;
  address: string;
  email: string;
  phone: string;
}

export default function Footer({
  serviceLinks = [
    { label: 'Same-Hour Delivery', href: '/same-day-delivery' },
    { label: 'Same-Day Delivery', href: '/same-day-delivery' },
    { label: 'Scheduled Runs', href: '/same-day-delivery' },
    { label: 'Tracking & POD', href: '/same-day-delivery' },
  ],
  companyLinks = [
    { label: 'About DHL', href: '/about' },
    { label: 'Business Cases', href: '/business-cases' },
    { label: 'Contact', href: '/contact' },
  ],
  legalLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
  companyName = 'DHL Same-Day Delivery',
  address = '1210 Logistics Way, New York, NY 10001',
  email = 'sameday@dhl.com',
  phone = '+1 (800) 225-5345',
}: Partial<FooterProps>) {
  return (
    <footer className="border-t border-black/10 bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-6">
        <div>
          <h3 className="font-serif text-xl tracking-[0.14em]">{companyName}</h3>
          <p className="mt-4 text-sm text-white/70">
            High-trust same-day logistics built for brands that cannot afford delays.
          </p>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.14em] text-[#FFD200]">Services</h4>
          <ul className="mt-4 space-y-2">
            {serviceLinks.map((link) => (
              <li key={link.href + link.label}>
                <Link href={link.href} className="text-sm text-white/80 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.14em] text-[#FFD200]">Company</h4>
          <ul className="mt-4 space-y-2">
            {companyLinks.map((link) => (
              <li key={link.href + link.label}>
                <Link href={link.href} className="text-sm text-white/80 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.14em] text-[#FFD200]">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4" />{address}</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" />{email}</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" />{phone}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 md:flex-row md:px-6">
          <p className="text-xs text-white/60">© 2026 DHL. All rights reserved.</p>
          <div className="flex gap-4">
            {legalLinks.map((link) => (
              <Link key={link.href + link.label} href={link.href} className="text-xs text-white/60 hover:text-white/90">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
