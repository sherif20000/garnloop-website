export interface PortfolioCompany {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  url: string;
  status: "Active" | "In Development" | "Acquired";
  year: number;
}

export const companies: PortfolioCompany[] = [
  {
    slug: "rssdrop",
    name: "RssDrop",
    tagline: "RSS-powered content distribution",
    description:
      "An automated platform that transforms RSS feeds into engaging video content for social media distribution. Built for creators and publishers who want to repurpose content at scale.",
    category: "Content Distribution",
    url: "https://rssdrop.com",
    status: "Active",
    year: 2025,
  },
  {
    slug: "peakgearguide",
    name: "PeakGearGuide",
    tagline: "Outdoor gear reviews you can trust",
    description:
      "A curated outdoor gear review platform helping adventurers find the right equipment. In-depth, honest reviews across hiking, camping, and outdoor lifestyle categories — built for people who value quality over hype.",
    category: "Lifestyle",
    url: "https://peakgearguide.com",
    status: "Active",
    year: 2025,
  },
];
