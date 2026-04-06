"use client";

import React from "react";
import { Sparkles, Palette, Shirt, Scissors, Gem, Layers, LucideIcon, ShieldCheck, Package, RefreshCw, Eye } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesGridProps {
  badge?: string;
  headline: string;
  subheadline?: string;
  features: Feature[];
}

const iconMap: Record<string, LucideIcon> = { ShieldCheck, Package, RefreshCw, Eye, 
  Sparkles,
  Palette,
  Shirt,
  Scissors,
  Gem,
  Layers,
};

export default function FeaturesGrid({
  badge = "Creating Designs",
  headline = "EDITORIAL CRAFT FOR MODERN WARDROBES",
  subheadline = "From silhouette research to final stitch, each collection is developed with precision, restraint, and a sharp fashion point of view.",
  features = [],
}: Partial<FeaturesGridProps>) {
  const defaultFeatures: Feature[] = [
    {
      icon: "Palette",
      title: "Concept Development",
      description: "Seasonal narratives translated into cohesive palettes, textures, and signature visual language.",
    },
    {
      icon: "Scissors",
      title: "Pattern & Cut",
      description: "Refined construction focused on movement, proportion, and clean architectural tailoring.",
    },
    {
      icon: "Shirt",
      title: "Fabric Curation",
      description: "Premium textiles selected for drape, durability, and elevated day-to-evening wearability.",
    },
    {
      icon: "Gem",
      title: "Detail Engineering",
      description: "Minimal but intentional trims, finishes, and accents that define each garment’s identity.",
    },
    {
      icon: "Layers",
      title: "Capsule Styling",
      description: "Interchangeable pieces designed to layer effortlessly across editorial and everyday looks.",
    },
    {
      icon: "Sparkles",
      title: "Runway-Ready Finish",
      description: "Final styling and quality checks ensure every release feels polished, modern, and iconic.",
    },
  ];

  const items = features.length > 0 ? features : defaultFeatures;

  return (
    <section className="py-24 md:py-32 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <div className="mx-auto max-w-2xl text-center">
          {badge && <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary">{badge}</span>}
          <h2 className="text-3xl font-semibold tracking-[0.08em] uppercase text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map(function (feature, index) {
            const Icon = iconMap[feature.icon] || Sparkles;
            return (
              <Card key={index} className="rounded-xl border border-border bg-card card-hover transition-all duration-200">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold uppercase tracking-wide text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
