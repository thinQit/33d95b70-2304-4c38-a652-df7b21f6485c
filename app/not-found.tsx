import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="max-w-xl text-center space-y-6">
        <h1 className="text-4xl md:text-6xl uppercase tracking-wide">Page not found</h1>
        <p className="text-muted-foreground text-lg">
          The page you are looking for does not exist or has been moved.
        </p>
        <Button asChild className="transition-all duration-200 hover:scale-105">
          <Link href="/">Back to landing page</Link>
        </Button>
      </div>
    </main>
  )
}
