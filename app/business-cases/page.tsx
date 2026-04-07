export const dynamic = 'force-dynamic';

import HeroStarfield from "@/components/HeroStarfield"
import GalleryMasonry from "@/components/GalleryMasonry"
import TestimonialsAnimated from "@/components/TestimonialsAnimated"
import CTASparkles from "@/components/CTASparkles"

export default function BusinessCasesPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroStarfield
          title="Proven outcomes from same‑day delivery programs"
          words={["Reduce Downtime", "Protect Revenue", "Improve CX"]}
          subtitle="Realistic examples of how businesses use same‑day logistics to reduce downtime, improve customer experience, and protect revenue."
          ctaLabel="Talk to an expert"
          ctaHref="/contact"
          secondaryCtaLabel="Explore service levels"
          secondaryCtaHref="/same-day-delivery#service-levels"
        />
      </div>

      <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <GalleryMasonry
            headline="Case studies"
            subheadline="Metrics-focused stories that show how same-day delivery supports business continuity."
            images={[
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576892/site-images/corporate/1181305.jpg",
                alt: "Healthcare logistics case study",
                caption: "NorthBridge Diagnostics: +22% same-day processing improvement",
              },
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576907/site-images/corporate/10142683.jpg",
                alt: "Manufacturing urgent parts case study",
                caption: "RidgeLine Manufacturing: 96% critical part success within target window",
              },
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576895/site-images/corporate/10041266.jpg",
                alt: "Retail same-day experience case study",
                caption: "Arc & Co. Retail Group: +35% same-day adoption",
              },
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576893/site-images/corporate/10041276.jpg",
                alt: "Operations reporting and visibility",
                caption: "On-time performance and POD reporting across programs",
              },
            ]}
          />
        </div>
      </div>

      <div className="animate-fade-in-up py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <TestimonialsAnimated
            title="What operations teams say"
            subtitle="High-trust logistics is measured in clarity, consistency, and outcomes."
            testimonials={[
              {
                quote: "We needed predictable same-day movement with clear proof of delivery. The reporting and communication reduced internal friction immediately.",
                name: "Priya Desai",
                designation: "Supply Chain Manager, Midwest MedTech",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577358/site-images/team-people/1181401.jpg",
              },
              {
                quote: "Same-hour dispatch helped us protect revenue during urgent incidents. The direct routing model is exactly what we needed.",
                name: "Tomás Alvarez",
                designation: "Field Service Lead, Metro Industrial Services",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577351/site-images/team-people/12903244.jpg",
              },
              {
                quote: "Our customer experience improved because we could proactively communicate delivery milestones instead of guessing.",
                name: "Hannah Brooks",
                designation: "CX Operations, Urban Retail Collective",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577363/site-images/team-people/12903169.jpg",
              },
            ]}
          />
        </div>
      </div>

      <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <CTASparkles
            title="Want a case study tailored to your lanes and timelines?"
            subtitle="Share your shipment profile and service goals. We’ll recommend a same-day model and expected performance metrics."
            ctaLabel="Contact us"
            ctaHref="/contact"
            secondaryCtaLabel="Explore Same‑Day Delivery"
            secondaryCtaHref="/same-day-delivery"
          />
        </div>
      </div>
    </main>
  )
}
