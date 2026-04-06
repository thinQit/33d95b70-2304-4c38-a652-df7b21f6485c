"use client"

import { Button } from "@/components/ui/button"

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="max-w-xl text-center space-y-6">
        <h1 className="text-3xl md:text-5xl uppercase tracking-wide">Something went wrong</h1>
        <p className="text-muted-foreground text-lg">
          We couldn’t load this page right now. Please try again.
        </p>
        <Button onClick={reset} className="transition-all duration-200 hover:scale-105">
          Try again
        </Button>
      </div>
    </main>
  )
}
