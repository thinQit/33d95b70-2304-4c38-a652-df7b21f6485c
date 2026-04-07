export const dynamic = 'force-dynamic';

import HeroStarfield from "@/components/HeroStarfield"
import ScrollReveal from "@/components/ScrollReveal"
import TrustBadges from "@/components/TrustBadges"
import ServiceLevelCards from "@/components/ServiceLevelCards"
import LookbookGallery from "@/components/LookbookGallery"
import IndustryCards from "@/components/IndustryCards"
import StatsCounter from "@/components/StatsCounter"
import CTASparkles from "@/components/CTASparkles"

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroStarfield
          title="Same‑Day Delivery that keeps your business on schedule"
          words={["Same‑Hour", "Time‑Definite", "Tracked", "Reliable"]}
          subtitle="From urgent parts to time-critical documents, DHL Same‑Day Delivery helps you move shipments within hours—backed by real-time tracking, proactive support, and a global logistics network."
          ctaLabel="Request a Same‑Day Quote"
          ctaHref="/contact"
          secondaryCtaLabel="How Same‑Day Works"
          secondaryCtaHref="/same-day-delivery"
        />
      </div>

      <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <TrustBadges
            items={[
              "Real-time tracking & milestone updates",
              "Time-definite pickup and delivery windows",
              "Dedicated customer support for urgent shipments",
              "Business-ready invoicing and reporting",
            ]}
          />
        </div>
      </div>

      <div className="animate-fade-in-up py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <ServiceLevelCards />
        </div>
      </div>

      <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <LookbookGallery />
        </div>
      </div>

      <div className="animate-fade-in-up py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <IndustryCards />
        </div>
      </div>

      <div className="animate-fade-in-up">
        <StatsCounter
          bgColor="bg-muted"
          stats={[
            { label: "Typical pickup", value: "60–120 min" },
            { label: "Service window", value: "Same day" },
            { label: "Tracking", value: "Live status" },
          ]}
        />
      </div>

      <div className="animate-fade-in-up py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <CTASparkles
            title="Ready to move an urgent shipment today?"
            subtitle="Tell us what you’re shipping and when it needs to arrive—our team will recommend the right same‑day option."
            ctaLabel="Request a Quote"
            ctaHref="/contact"
            secondaryCtaLabel="View Business Cases"
            secondaryCtaHref="/business-cases"
          />
        </div>
      </div>
    </main>
  )
}
