export interface NavItem {
  label: string;
  href: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface SectionBase {
  id: string;
  type: string;
  headline: string;
  subheadline?: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
}

export interface PageConfig {
  path: string;
  name: string;
  sections: SectionBase[];
}

export interface SiteConfig {
  projectName: string;
  displayName: string;
  tagline: string;
  navigation: {
    items: NavItem[];
  };
  pages: PageConfig[];
}
