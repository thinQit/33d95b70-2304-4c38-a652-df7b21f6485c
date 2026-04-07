import "./globals.css"
import type { Metadata } from "next"
import { Bodoni_Moda, Cormorant } from "next/font/google"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
})

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
})

export const metadata: Metadata = {
  title: "DHL Same‑Day Delivery | Same‑Hour & Same‑Day Logistics for Business",
  description:
    "A responsive, high-trust DHL same-day delivery website showcasing Same‑Hour and Same‑Day services, coverage, industries served, proven business cases, and a professional contact form.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${bodoni.variable} ${cormorant.variable} antialiased bg-background text-foreground`}>
        <Navbar
          logo="DHL Same‑Day Delivery"
          navItems={[
            { label: "Landing", href: "/" },
            { label: "Same‑Day Delivery", href: "/same-day-delivery" },
            { label: "About Us", href: "/about" },
            { label: "Business Cases", href: "/business-cases" },
            { label: "Contact", href: "/contact" },
          ]}
          ctaLabel="Request a Quote"
          ctaHref="/contact"
        />
        {children}
        <Footer
          brand="DHL Same‑Day Delivery"
          description="Time-critical logistics with visibility and confidence."
          columns={[
            {
              title: "Services",
              links: [
                { label: "Same‑Day Delivery", href: "/same-day-delivery" },
                { label: "Same‑Hour Priority", href: "/same-day-delivery#service-levels" },
                { label: "Scheduled Runs", href: "/same-day-delivery#service-levels" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "About Us", href: "/about" },
                { label: "Proven Business Cases", href: "/business-cases" },
                { label: "Contact", href: "/contact" },
              ],
            },
            {
              title: "Contact",
              links: [
                { label: "Business inquiries: same-day@dhl.example", href: "/contact" },
                { label: "Phone: +1 (312) 555‑0148", href: "/contact" },
                { label: "Hours: Mon–Fri 7:00–19:00", href: "/contact" },
              ],
            },
          ]}
          copyright="© 2026 DHL Same‑Day Delivery. All rights reserved."
        />
      </body>
    </html>
  )
}
