'use client';
import React from 'react';
import { CardContainer, CardBody, CardItem } from '@/components/ui/effects/3d-card-effect';
import { Sparkles, Gem, Shirt, Star, Crown, Scissors, Zap, Eye, Handshake } from 'lucide-react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesCards3DProps {
  badge?: string;
  headline: string;
  subheadline?: string;
  features: Feature[];
}

const iconMap: Record<string, React.ElementType> = { Zap, Eye, Handshake, 
  Sparkles,
  Gem,
  Shirt,
  Star,
  Crown,
  Scissors,
};

export default function FeaturesCards3D({
  badge = 'Signature Features',
  headline = 'Designed for Modern Editorial Style',
  subheadline = 'From personalized wardrobe edits to premium tailoring, discover what sets our fashion house apart.',
  features = [],
}: Partial<FeaturesCards3DProps>) {
  return (
    <section className="py-24 md:py-32 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <div className="mx-auto max-w-2xl text-center">
          {badge && <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">{badge}</span>}
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl uppercase">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map(function (feature, index) {
            const Icon = iconMap[feature.icon] || Sparkles;
            return (
              <CardContainer key={index} className="inter-var">
                <CardBody className="card-hover relative group/card w-auto h-auto rounded-xl p-6 border border-border bg-card">
                  <CardItem translateZ="50" className="mb-4 text-primary">
                    {React.createElement(Icon, { className: 'h-8 w-8' })}
                  </CardItem>
                  <CardItem translateZ="60" className="text-xl font-bold text-foreground uppercase">
                    {feature.title}
                  </CardItem>
                  <CardItem as="p" translateZ="40" className="mt-2 text-sm text-muted-foreground">
                    {feature.description}
                  </CardItem>
                </CardBody>
              </CardContainer>
            );
          })}
        </div>
      </div>
    </section>
  );
}
