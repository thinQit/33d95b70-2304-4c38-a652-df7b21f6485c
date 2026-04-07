export const dynamic = 'force-dynamic';

import HeroStarfield from "@/components/HeroStarfield"
import ContactForm from "@/components/ContactForm"
import MapEmbed from "@/components/MapEmbed"
import FAQAccordion from "@/components/FAQAccordion"
import CTASparkles from "@/components/CTASparkles"

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroStarfield
          title="Talk to DHL about Same‑Day Delivery"
          words={["Business Inquiries", "Same‑Hour", "Scheduled Runs"]}
          subtitle="Tell us what you’re shipping, where it’s going, and when it needs to arrive. We’ll respond with the best service level and next steps."
          ctaLabel="Submit inquiry"
          ctaHref="#contact-form"
          secondaryCtaLabel="View service details"
          secondaryCtaHref="/same-day-delivery"
        />
      </div>

      <div id="contact-form" className="animate-fade-in-up py-20 md:py-28 bg-muted">
        <div className="max-w-5xl mx-auto px-4">
          <ContactForm />
        </div>
      </div>

      <div className="animate-fade-in-up py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <MapEmbed />
        </div>
      </div>

      <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
        <div className="max-w-4xl mx-auto px-4">
          <FAQAccordion
            headline="Contact FAQs"
            subheadline="What to include so we can quote quickly and accurately."
            items={[
              {
                question: "What information do you need for a same-day quote?",
                answer:
                  "Pickup and delivery addresses/ZIPs, package dimensions and weight, shipment type, desired pickup time, and delivery deadline.",
              },
              {
                question: "How fast will you respond?",
                answer:
                  "We aim to respond within 1 business hour during operating times. For urgent requests, include your deadline and phone number.",
              },
              {
                question: "Can you support recurring routes?",
                answer:
                  "Yes. If you have daily/weekly volume, mention your preferred pickup times and stops so we can propose a scheduled run.",
              },
            ]}
          />
        </div>
      </div>

      <div className="animate-fade-in-up py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <CTASparkles
            title="Ready to launch same‑day delivery for your business?"
            subtitle="We’ll confirm coverage, recommend the right service level, and help you operationalize tracking and reporting."
            ctaLabel="Request a Quote"
            ctaHref="#contact-form"
            secondaryCtaLabel="View Business Cases"
            secondaryCtaHref="/business-cases"
          />
        </div>
      </div>
    </main>
  )
}
