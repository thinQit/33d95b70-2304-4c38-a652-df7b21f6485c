export const dynamic = 'force-dynamic';

import HeroStarfield from "@/components/HeroStarfield"
import Steps from "@/components/Steps"
import PricingTiers from "@/components/PricingTiers"
import MapSection from "@/components/MapSection"
import FeaturesGrid from "@/components/FeaturesGrid"
import CTASection from "@/components/CTASection"

export default function SameHourDeliveryPage() {
  return (
    <main>
      <div className="animate-fade-in-up">
        <HeroStarfield
          title="Same-hour delivery with proof, precision, and priority dispatch."
          words={["Priority", "Precision", "Proof"]}
          subtitle="Understand service levels, coverage, packaging guidance, and what to expect from request to delivery confirmation."
          ctaLabel="Request a quote"
          ctaHref="/contact"
          secondaryCtaLabel="See business cases"
          secondaryCtaHref="/proven-business-cases"
        />
      </div>

      <section className="py-24 md:py-32 bg-background animate-fade-in-up">
        <Steps />
      </section>

      <section id="service-levels" className="py-24 md:py-32 bg-muted animate-fade-in-up">
        <PricingTiers />
      </section>

      <section id="coverage" className="py-24 md:py-32 bg-background animate-fade-in-up">
        <MapSection />
      </section>

      <section className="py-24 md:py-32 bg-muted animate-fade-in-up">
        <FeaturesGrid
          badge="GUIDELINES"
          headline="Packaging & handling guidelines"
          subheadline="Reduce exceptions and protect your shipment with simple standards."
          features={[
            {
              icon: "Package",
              title: "Secure packaging",
              description:
                "Use sealed, labeled packaging with clear recipient details to reduce delivery delays.",
            },
            {
              icon: "FileCheck",
              title: "Proof-ready handoff",
              description:
                "Signature and photo proof are captured at delivery and shared instantly.",
            },
            {
              icon: "RefreshCw",
              title: "Exception workflow",
              description:
                "If recipient is unavailable, we coordinate redelivery, safe drop, or return-to-sender.",
            },
          ]}
        />
      </section>

      <section className="py-24 md:py-32 bg-background animate-fade-in-up">
        <CTASection />
      </section>
    </main>
  )
}
