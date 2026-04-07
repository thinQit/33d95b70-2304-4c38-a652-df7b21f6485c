'use client';
import React from 'react';
import { StarsBackground } from '@/components/ui/backgrounds/stars-background';
import { ShootingStars } from '@/components/ui/backgrounds/shooting-stars';
import { FlipWords } from '@/components/ui/text/flip-words';
import { Button } from '@/components/ui/button';

interface HeroStarfieldProps {
  title?: string;
  words?: string[];
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  starColor?: string;
  trailColor?: string;
}

export default function HeroStarfield({
  title = 'Define your signature with',
  words = ['couture', 'confidence', 'editorial style', 'timeless silhouettes'],
  subtitle = 'A modern fashion studio blending minimalist luxury with expressive personal styling.',
  ctaLabel = 'Explore Collections',
  ctaHref = '#collections',
  secondaryCtaLabel = 'Book Consultation',
  secondaryCtaHref = '#contact',
  starColor = '#a855f7',
  trailColor = '#06b6d4',
}: HeroStarfieldProps) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      <StarsBackground starDensity={0.0002} allStarsTwinkle={true} />
      <ShootingStars starColor={starColor} trailColor={trailColor} />
      <div className="relative z-10 flex flex-col items-center px-4 text-center animate-fade-in-up">
        <h1 className="text-4xl font-bold text-foreground md:text-6xl lg:text-7xl uppercase">
          {title}
          <FlipWords words={words} className="text-primary" />
        </h1>
        {subtitle && <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">{subtitle}</p>}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
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
