'use client';
import { SparklesCore } from '@/components/ui/backgrounds/sparkles';
import { Button } from '@/components/ui/button';

interface CTASparklesProps {
  headline: string;
  description?: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  sparkleColor?: string;
}

export default function CTASparkles({
  headline = 'Join the Next Drop',
  description = 'Be first to access limited collections, private styling sessions, and editor-curated releases.',
  ctaLabel = 'Join Newsletter',
  ctaHref = '#',
  secondaryCtaLabel = 'Book Styling',
  secondaryCtaHref = '#',
  sparkleColor = '#a855f7',
}: Partial<CTASparklesProps>) {
  return (
    <section className="relative h-[30rem] w-full bg-background flex flex-col items-center justify-center overflow-hidden rounded-md animate-fade-in-up">
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore id="cta-sparkles" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={80} particleColor={sparkleColor} />
      </div>
      <div className="relative z-10 px-4 text-center">
        <h2 className="md:text-5xl text-3xl lg:text-6xl font-bold text-center text-foreground uppercase">{headline}</h2>
        {description && <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-lg">{description}</p>}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="px-8 py-6 text-lg transition-all duration-200 hover:scale-105" asChild>
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
          {secondaryCtaLabel && secondaryCtaHref && (
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg transition-all duration-200 hover:scale-105" asChild>
              <a href={secondaryCtaHref}>{secondaryCtaLabel}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
