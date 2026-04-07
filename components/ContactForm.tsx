'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ContactFormProps {
  heading: string;
  description: string;
}

export default function ContactForm({
  heading = 'Start Your Same-Day Delivery Plan',
  description = 'Tell us about your volume, routes, and SLA requirements. Our team will respond promptly.',
}: Partial<ContactFormProps>) {
  const [status, setStatus] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setStatus('Thank you. Your inquiry has been captured for follow-up.');
      }}
      className="space-y-5 rounded-xl border border-black/10 bg-white p-6 shadow-sm md:p-8"
    >
      <div>
        <h3 className="font-serif text-2xl uppercase tracking-[0.08em]">{heading}</h3>
        <p className="mt-2 text-sm text-black/70">{description}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Input name="name" placeholder="Full Name" required />
        <Input name="company" placeholder="Company" required />
        <Input name="email" type="email" placeholder="Business Email" required />
        <Input name="phone" type="tel" placeholder="Phone Number" required />
      </div>

      <textarea
        name="message"
        placeholder="Tell us about your same-day delivery needs"
        required
        className="min-h-[140px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[#FFD200]"
      />

      <Button type="submit" className="w-full rounded-lg bg-[#C1121F] text-white hover:bg-[#a50f1a] md:w-auto">
        Submit Business Inquiry
      </Button>

      {status ? <p className="text-sm text-green-700">{status}</p> : null}
    </form>
  );
}
