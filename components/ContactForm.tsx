"use client";

import React from "react";
import { Mail, Phone, MapPin, Sparkles, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}

interface ContactFormProps {
  headline: string;
  subheadline?: string;
  contactInfo?: ContactInfo[];
}

const iconMap: Record<string, LucideIcon> = {
  Mail,
  Phone,
  MapPin,
};

export default function ContactForm({
  headline = "CONNECT WITH OUR ATELIER",
  subheadline = "For styling appointments, wholesale inquiries, or editorial collaborations, send us a message.",
  contactInfo = [],
}: Partial<ContactFormProps>) {
  const infoItems =
    contactInfo.length > 0
      ? contactInfo
      : [
          { icon: "Mail", label: "Email", value: "studio@veloura-house.com" },
          { icon: "Phone", label: "Phone", value: "+1 (212) 555-0198" },
          { icon: "MapPin", label: "Showroom", value: "SoHo, New York, NY" },
        ];

  return (
    <section className="py-24 md:py-32 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-[0.08em] uppercase text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Card className="border border-border bg-card card-hover">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Inquiry topic" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us more..." rows={5} />
                </div>
                <Button type="submit" className="w-full rounded-lg px-6 py-3 font-medium tracking-wide uppercase transition-all duration-200 hover:scale-105">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="flex flex-col justify-center space-y-8">
            {infoItems.map(function (info, i) {
              const Icon = iconMap[info.icon] || Sparkles;
              return (
                <div key={i} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold uppercase tracking-wide text-foreground">{info.label}</p>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
