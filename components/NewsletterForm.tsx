'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface NewsletterFormProps {
  title?: string
  subtitle?: string
  buttonLabel?: string
}

export default function NewsletterForm({
  title = 'STAY INFORMED',
  subtitle = 'Receive DHL same hour service updates, operational insights, and launch announcements.',
  buttonLabel = 'SUBSCRIBE',
}: Partial<NewsletterFormProps>) {
  const [email, setEmail] = useState('')

  return (
    <section className="mx-auto max-w-3xl px-4 py-20 md:px-6">
      <div className="rounded-xl border border-black/10 bg-white p-8 md:p-10">
        <p className="text-xs tracking-[0.24em] text-[#C1121F]">NEWSLETTER</p>
        <h3 className="mt-3 font-serif text-4xl tracking-[0.1em] text-black">{title}</h3>
        <p className="mt-3 text-black/70">{subtitle}</p>
        <form className="mt-8 flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@company.com"
            className="h-11 rounded-lg border-black/20"
          />
          <Button className="h-11 rounded-lg bg-black px-6 text-xs tracking-[0.16em] text-white hover:bg-[#C1121F]">
            {buttonLabel}
          </Button>
        </form>
      </div>
    </section>
  )
}
