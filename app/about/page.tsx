export const dynamic = 'force-dynamic';

import HeroStarfield from "@/components/HeroStarfield"
import StatsCounter from "@/components/StatsCounter"
import FeaturesGrid from "@/components/FeaturesGrid"
import GalleryMasonry from "@/components/GalleryMasonry"
import CTASection from "@/components/CTASection"

export default function AboutPage() {
  return (
    <main>
      <div className="animate-fade-in-up">
        <HeroStarfield
          title="A same-hour team built around reliability."
          words={["Reliable", "Disciplined", "Responsive"]}
          subtitle="We combine disciplined dispatch operations with courier coverage planning—so urgent deliveries stay predictable."
          ctaLabel="Talk to our team"
          ctaHref="/contact"
          secondaryCtaLabel="See business cases"
          secondaryCtaHref="/proven-business-cases"
        />
      </div>

      <section className="py-24 md:py-32 bg-background animate-fade-in-up">
        <StatsCounter
          stats={[
            { label: "Metro zones covered", value: "3" },
            { label: "Typical dispatch time", value: "Under 10 min" },
            { label: "Proof of delivery", value: "Every shipment" },
          ]}
        />
      </section>

      <section className="py-24 md:py-32 bg-muted animate-fade-in-up">
        <FeaturesGrid
          badge="OUR STORY"
          headline="Why same-hour exists"
          subheadline="When a shipment is urgent, the cost of delay is bigger than the cost of delivery."
          features={[
            {
              icon: "Gauge",
              title: "Speed with standards",
              description:
                "Fast doesn’t mean rushed—pickup checks and handling notes are part of the workflow.",
            },
            {
              icon: "Eye",
              title: "Transparency",
              description: "Live tracking and ETAs reduce inbound “where is it?” calls.",
            },
            {
              icon: "BadgeCheck",
              title: "Accountability",
              description: "Proof of delivery is captured and shared automatically.",
            },
          ]}
        />
      </section>

      <section className="py-24 md:py-32 bg-background animate-fade-in-up">
        <GalleryMasonry
          headline="Meet the people behind dispatch"
          subheadline="A specialized team focused on urgent shipments and exception handling."
          images={[
            {
              url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577327/site-images/team-people/12899112.jpg",
              alt: "Maya Richter portrait",
              caption: "Maya Richter — Same Hour Operations Lead",
            },
            {
              url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/1181405.jpg",
              alt: "Daniel Okoye portrait",
              caption: "Daniel Okoye — Customer Success Manager",
            },
            {
              url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577357/site-images/team-people/1181738.jpg",
              alt: "Sofia Nguyen portrait",
              caption: "Sofia Nguyen — Courier Network Coordinator",
            },
            {
              url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577351/site-images/team-people/12903244.jpg",
              alt: "Amina El-Sayed portrait",
              caption: "Amina El-Sayed — Quality & Compliance",
            },
          ]}
        />
      </section>

      <section className="py-24 md:py-32 bg-muted animate-fade-in-up">
        <CTASection />
      </section>
    </main>
  )
}
