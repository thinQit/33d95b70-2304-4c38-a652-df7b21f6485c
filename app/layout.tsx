import type { Metadata } from "next"
import { Bodoni_Moda, Cormorant } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  weight: ["400", "500", "600", "700"],
})

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
})

export const metadata: Metadata = {
  title: "DHL Same Hour Delivery | Urgent Metro Deliveries with Tracking & Proof",
  description:
    "Learn how DHL Same Hour Delivery works: service levels, coverage zones, proof of delivery, and proven business cases. Request a quote or consultation.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const navItems = [
    { label: "Landing", href: "/" },
    { label: "Same Hour Delivery", href: "/same-hour-delivery" },
    { label: "About Us", href: "/about" },
    { label: "Business Cases", href: "/proven-business-cases" },
    { label: "Contact", href: "/contact" },
  ]

  const footerColumns = [
    {
      title: "Services",
      links: [
        { label: "Same Hour Delivery", href: "/same-hour-delivery" },
        { label: "Proven Business Cases", href: "/proven-business-cases" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Operations",
      links: [
        { label: "Coverage & Hours", href: "/same-hour-delivery#coverage" },
        { label: "Service Levels", href: "/same-hour-delivery#service-levels" },
      ],
    },
  ]

  return (
    <html lang="en">
      <body className={`${bodoni.variable} ${cormorant.variable} font-sans bg-background text-foreground`}>
        <Navbar logo="DHL Same Hour" navItems={navItems} ctaLabel="Request a Quote" ctaHref="/contact" />
        {children}
        <Footer
          brand="DHL Same Hour Delivery"
          description="Same-hour delivery that keeps your business moving."
          columns={footerColumns}
          copyright="© 2026 DHL Same Hour Delivery. Informational marketing website concept."
        />
      </body>
    </html>
  )
}
