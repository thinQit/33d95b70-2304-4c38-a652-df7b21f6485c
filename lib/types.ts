export interface NavItem {
  label: string;
  href: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface BaseSection {
  id: string;
  type: string;
  headline: string;
  subheadline?: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
  content?: Record<string, unknown>;
}

export interface SitePage {
  path: string;
  name: string;
  sections: BaseSection[];
}

export interface SeoMeta {
  title: string;
  description: string;
}

export interface SiteConfig {
  projectName: string;
  displayName: string;
  tagline: string;
  pages: SitePage[];
  navigation: {
    items: NavItem[];
  };
  seoMeta: SeoMeta;
}
