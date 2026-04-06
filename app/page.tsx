export const dynamic = 'force-dynamic';

import HeroStarfield from "@/components/HeroStarfield"
import CollectionCards from "@/components/CollectionCards"
import LookbookGallery from "@/components/LookbookGallery"
import UseCaseCarousel from "@/components/UseCaseCarousel"
import FeaturesGrid from "@/components/FeaturesGrid"
import NewsletterForm from "@/components/NewsletterForm"

export default function HomePage() {
  return (
    <main>
      <div className="animate-fade-in-up">
        <HeroStarfield
          title="Same-hour delivery for the moments you can’t miss."
          words={["Fast", "Trackable", "Reliable", "Accountable"]}
          subtitle="DHL Same Hour helps retailers, healthcare providers, and service teams move urgent shipments across the city—fast, trackable, and handled with care."
          ctaLabel="Request a same-hour quote"
          ctaHref="/contact"
          secondaryCtaLabel="How it works"
          secondaryCtaHref="/same-hour-delivery"
        />
      </div>

      <section className="py-24 md:py-32 bg-background animate-fade-in-up">
        <CollectionCards />
      </section>

      <section className="py-24 md:py-32 bg-muted animate-fade-in-up">
        <LookbookGallery />
      </section>

      <section className="py-24 md:py-32 bg-background animate-fade-in-up">
        <UseCaseCarousel />
      </section>

      <section className="py-24 md:py-32 bg-muted animate-fade-in-up">
        <FeaturesGrid
          badge="WHY DHL SAME HOUR"
          headline="Fast is nothing without control."
          subheadline="DHL Same Hour is designed for teams that need speed, visibility, and accountable delivery confirmation."
          features={[
            {
              icon: "ShieldCheck",
              title: "Operational discipline",
              description:
                "Standardized pickup checks, handling notes, and delivery confirmation to reduce exceptions.",
            },
            {
              icon: "Radar",
              title: "Visibility by default",
              description: "Live tracking links, ETA updates, and proof-of-delivery artifacts for every shipment.",
            },
            {
              icon: "Headphones",
              title: "Customer-first support",
              description: "A dedicated support line for urgent shipments and exception management.",
            },
          ]}
        />
      </section>

      <section className="py-24 md:py-32 bg-background animate-fade-in-up">
        <NewsletterForm />
      </section>
    </main>
  )
}
