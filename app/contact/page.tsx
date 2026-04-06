export const dynamic = 'force-dynamic';

import HeroStarfield from "@/components/HeroStarfield"
import ContactForm from "@/components/ContactForm"
import MapSection from "@/components/MapSection"
import NewsletterForm from "@/components/NewsletterForm"

export default function ContactPage() {
  return (
    <main>
      <div className="animate-fade-in-up">
        <HeroStarfield
          title="Talk to DHL Same Hour."
          words={["Coverage", "Service Levels", "Indicative Pricing"]}
          subtitle="Tell us your routes, urgency, and package types. We’ll respond with coverage, service level recommendations, and indicative pricing."
          ctaLabel="Send a request"
          ctaHref="#contact-form"
          secondaryCtaLabel="View coverage"
          secondaryCtaHref="/same-hour-delivery#coverage"
        />
      </div>

      <section id="contact-form" className="py-24 md:py-32 bg-background animate-fade-in-up">
        <ContactForm
          headline="Request a quote or consultation"
          subheadline="Provide a few details and we’ll follow up with next steps."
          contactInfo={[
            { icon: "MapPin", label: "Operations Hub", value: "120 Logistics Way, Metro District" },
            { icon: "Phone", label: "Phone", value: "+1 (555) 010-2040" },
            { icon: "Mail", label: "Email", value: "samehour@dhl-example.com" },
          ]}
        />
      </section>

      <section className="py-24 md:py-32 bg-muted animate-fade-in-up">
        <MapSection />
      </section>

      <section className="py-24 md:py-32 bg-background animate-fade-in-up">
        <NewsletterForm />
      </section>
    </main>
  )
}
