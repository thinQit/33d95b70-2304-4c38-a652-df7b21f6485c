export const dynamic = 'force-dynamic';

import HeroStarfield from "@/components/HeroStarfield"
import FeaturesCards3D from "@/components/FeaturesCards3D"
import StatsCounter from "@/components/StatsCounter"
import FAQAccordion from "@/components/FAQAccordion"
import CTASparkles from "@/components/CTASparkles"

export default function SameDayDeliveryPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroStarfield
          title="Same‑Day and Same‑Hour delivery—designed for time‑critical operations"
          words={["Speed", "Reliability", "Tracking"]}
          subtitle="Understand service levels, coverage, tracking, and how to get started with DHL Same‑Day Delivery for your business."
          ctaLabel="Request a Quote"
          ctaHref="/contact"
          secondaryCtaLabel="See Business Cases"
          secondaryCtaHref="/business-cases"
        />
      </div>

      <div id="service-levels" className="animate-fade-in-up py-20 md:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <FeaturesCards3D
            badge="Service Levels"
            title="Select the urgency that matches your timeline"
            subtitle="Choose Same‑Hour, Same‑Day, or Scheduled Runs based on operational risk."
            features={[
              { icon: "Zap", title: "Same‑Hour (Priority Courier)", description: "Immediate dispatch with direct routing for critical shipments." },
              { icon: "Clock3", title: "Same‑Day (Time‑Definite)", description: "Defined same-day windows with milestone notifications and exception alerts." },
              { icon: "Route", title: "Scheduled Runs", description: "Recurring routes with fixed pickup times, consolidated billing, and reporting." },
            ]}
          />
        </div>
      </div>

      <div id="coverage" className="animate-fade-in-up">
        <StatsCounter
          bgColor="bg-background"
          stats={[
            { value: "Chicago", label: "Downtown + near suburbs" },
            { value: "Dallas–Fort Worth", label: "DFW core metro" },
            { value: "Los Angeles", label: "LA basin" },
            { value: "New York City", label: "Manhattan + select corridors" },
          ]}
        />
      </div>

      <div id="tracking" className="animate-fade-in-up py-20 md:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <FeaturesCards3D
            badge="Tracking & POD"
            title="Tracking and proof of delivery"
            subtitle="Clear shipment visibility for teams and customers."
            features={[
              { icon: "CheckCircle2", title: "Milestone updates", description: "Pickup confirmed, in transit, out for delivery, delivered." },
              { icon: "BellRing", title: "Exception alerts", description: "Proactive notifications when conditions impact timing." },
              { icon: "FileCheck2", title: "Proof of delivery", description: "Timestamped confirmation with recipient details." },
            ]}
          />
        </div>
      </div>

      <div id="faqs" className="animate-fade-in-up py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <FAQAccordion
            headline="FAQs"
            subheadline="Answers to common questions about DHL Same‑Day and Same‑Hour delivery."
            items={[
              {
                question: "What’s the difference between Same‑Hour and Same‑Day?",
                answer:
                  "Same‑Hour prioritizes immediate dispatch and direct routing for critical shipments. Same‑Day offers time-definite delivery windows within the same day with tracking milestones.",
              },
              {
                question: "Do you support recurring routes?",
                answer:
                  "Yes. Scheduled Runs are designed for daily or weekly routes with fixed pickup times, consolidated billing, and performance reporting.",
              },
              {
                question: "Can I require signature on delivery?",
                answer:
                  "Yes. Signature-required delivery and proof of delivery are available for business shipments.",
              },
              {
                question: "How do I confirm coverage in my area?",
                answer:
                  "Submit your pickup and delivery ZIP/postal codes via the contact form. Our team will confirm availability and recommended service level.",
              },
            ]}
          />
        </div>
      </div>

      <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <CTASparkles
            title="Need an urgent shipment delivered today?"
            subtitle="Share your shipment details and timeline—our team will respond with the best same‑day option and next steps."
            ctaLabel="Request a Quote"
            ctaHref="/contact"
            secondaryCtaLabel="Call business support"
            secondaryCtaHref="/contact"
          />
        </div>
      </div>
    </main>
  )
}
