export const dynamic = 'force-dynamic';

import HeroStarfield from "@/components/HeroStarfield"
import CaseStudies from "@/components/CaseStudies"
import Testimonials from "@/components/Testimonials"
import CTASection from "@/components/CTASection"

export default function ProvenBusinessCasesPage() {
  return (
    <main>
      <div className="animate-fade-in-up">
        <HeroStarfield
          title="Proven outcomes from urgent delivery."
          words={["Lower Churn", "Protected Revenue", "Faster Operations"]}
          subtitle="Examples of how same-hour delivery reduces churn, protects revenue, and keeps operations on schedule."
          ctaLabel="Discuss your use case"
          ctaHref="/contact"
          secondaryCtaLabel="See service levels"
          secondaryCtaHref="/same-hour-delivery#service-levels"
        />
      </div>

      <section className="py-24 md:py-32 bg-background animate-fade-in-up">
        <CaseStudies />
      </section>

      <section className="py-24 md:py-32 bg-muted animate-fade-in-up">
        <Testimonials />
      </section>

      <section className="py-24 md:py-32 bg-background animate-fade-in-up">
        <CTASection />
      </section>
    </main>
  )
}
