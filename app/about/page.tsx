export const dynamic = 'force-dynamic';

import HeroStarfield from "@/components/HeroStarfield"
import FeaturesCards3D from "@/components/FeaturesCards3D"
import StatsCounter from "@/components/StatsCounter"
import TestimonialsAnimated from "@/components/TestimonialsAnimated"
import CTASparkles from "@/components/CTASparkles"

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroStarfield
          title="Logistics expertise you can rely on—especially when it’s urgent"
          words={["Global Reach", "Operational Discipline", "Reliable Execution"]}
          subtitle="DHL helps businesses move time-critical shipments with disciplined operations, clear communication, and a global network built for reliability."
          ctaLabel="Explore Same‑Day Delivery"
          ctaHref="/same-day-delivery"
          secondaryCtaLabel="Contact our team"
          secondaryCtaHref="/contact"
        />
      </div>

      <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <FeaturesCards3D
            badge="Our Mission"
            title="Make urgent delivery predictable for modern operations"
            subtitle="Same-day logistics needs speed, coordination, visibility, and accountability."
            features={[
              { icon: "Gauge", title: "Speed with control", description: "Fast dispatch and routing without sacrificing process quality." },
              { icon: "Eye", title: "Visibility by default", description: "Tracking milestones and delivery confirmation for every shipment." },
              { icon: "Handshake", title: "Operational partnership", description: "Service design aligned to your workflows and stakeholders." },
            ]}
          />
        </div>
      </div>

      <div className="animate-fade-in-up">
        <StatsCounter
          bgColor="bg-background"
          stats={[
            { value: "Same‑Hour • Same‑Day • Scheduled Runs", label: "Same‑day service models" },
            { value: "Milestones + POD", label: "Visibility" },
            { value: "Business-focused response", label: "Support" },
          ]}
        />
      </div>

      <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <TestimonialsAnimated
            title="Same‑Day leadership"
            subtitle="A team focused on operational excellence and customer outcomes."
            autoplay
            testimonials={[
              {
                quote: "Designs same-day programs for regulated and high-velocity operations, including labs and service parts networks.",
                name: "Amira Khan",
                designation: "Same‑Day Solutions Lead",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/10375912.jpg",
              },
              {
                quote: "Leads dispatch standards, exception management, and service quality reviews across metro coverage.",
                name: "Michael Torres",
                designation: "Operations Manager",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577335/site-images/team-people/1181734.jpg",
              },
              {
                quote: "Partners with customers on onboarding, reporting, and continuous improvement for recurring routes.",
                name: "Sofia Nguyen",
                designation: "Customer Success Manager",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577327/site-images/team-people/12899112.jpg",
              },
            ]}
          />
        </div>
      </div>

      <div className="animate-fade-in-up py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <CTASparkles
            title="Let’s design your same‑day delivery workflow"
            subtitle="Tell us your pickup/delivery lanes, cutoff times, and shipment types. We’ll recommend a service level and rollout plan."
            ctaLabel="Start a conversation"
            ctaHref="/contact"
            secondaryCtaLabel="Review Same‑Day details"
            secondaryCtaHref="/same-day-delivery"
          />
        </div>
      </div>
    </main>
  )
}
