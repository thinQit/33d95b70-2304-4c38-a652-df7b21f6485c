"use client";

import { BadgeCheck, Headset, Truck } from 'lucide-react';

interface TrustBadgeItem {
  icon: string;
  label: string;
}

interface TrustBadgesProps {
  items: TrustBadgeItem[];
}

const iconMap = {
  Truck,
  BadgeCheck,
  Headset,
};

export default function TrustBadges({
  items = [
    { icon: 'Truck', label: 'Real-Time Tracking' },
    { icon: 'BadgeCheck', label: 'Proof of Delivery' },
    { icon: 'Headset', label: '24/7 Priority Support' },
  ],
}: Partial<TrustBadgesProps>) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {items.map((item, idx) => {
        const Icon = iconMap[item.icon as keyof typeof iconMap] || BadgeCheck;
        return (
          <div key={item.label + idx} className="flex items-center gap-3 rounded-xl border border-black/10 bg-white px-4 py-3">
            <div className="rounded-full bg-[#FFD200]/40 p-2 text-[#C1121F]">
              <Icon className="h-4 w-4" />
            </div>
            <p className="text-sm uppercase tracking-[0.08em] text-black/80">{item.label}</p>
          </div>
        );
      })}
    </div>
  );
}
