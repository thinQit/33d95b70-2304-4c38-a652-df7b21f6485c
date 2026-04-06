"use client";

import React from "react";

interface Stat {
  value: string;
  label: string;
}

interface StatsCounterProps {
  stats: Stat[];
  bgColor?: string;
}

export default function StatsCounter({
  stats = [],
  bgColor = "bg-primary text-primary-foreground",
}: Partial<StatsCounterProps>) {
  const items =
    stats.length > 0
      ? stats
      : [
          { value: "12+", label: "Years in Fashion" },
          { value: "48", label: "Seasonal Drops" },
          { value: "96%", label: "Client Satisfaction" },
          { value: "30K", label: "Global Community" },
        ];

  return (
    <section className={`py-24 md:py-32 ${bgColor}`}>
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <div className={`grid gap-8 text-center grid-cols-2 md:grid-cols-${Math.min(items.length, 4)}`}>
          {items.map(function (stat, i) {
            return (
              <div key={i}>
                <p className="text-4xl font-semibold md:text-5xl">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-primary-foreground/80">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
