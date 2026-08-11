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
    slug: "raqibhealth",
    name: "RaqibHealth",
    tagline: "Pharma intelligence for Saudi Arabia",
    description:
      "A regulatory intelligence platform tracking SFDA registrations, recalls, and e-pharmacy activity across the Saudi pharmaceutical market. Built for pharma professionals who need real-time market visibility.",
    category: "Healthcare Intelligence",
    url: "https://raqibhealth.com",
    status: "Active",
    year: 2025,
  },
  {
    slug: "rssdrop",
    name: "RssDrop",
    tagline: "Read what matters. Own your feed.",
    description:
      "An automated platform that transforms RSS feeds into engaging video content for social media distribution. Built for creators and publishers who want to repurpose content at scale.",
    category: "Content Distribution",
    url: "https://rssdrop.com",
    status: "Active",
    year: 2025,
  },
  {
    slug: "khaleejcalculators",
    name: "KhaleejCalculators",
    tagline: "Gulf Arabic calculators for everyday life",
    description:
      "A comprehensive suite of Arabic-language calculators designed for Gulf residents. Covers financial, health, and utility calculations tailored to the GCC region.",
    category: "Utilities",
    url: "https://khaleejcalculators.com",
    status: "Active",
    year: 2025,
  },
  {
    slug: "arabtoolkit",
    name: "ArabToolkit",
    tagline: "130 Arabic online tools in one place",
    description:
      "A single-page hub of 130+ free Arabic-language tools spanning text formatting, calculators, converters, and productivity utilities for Arabic-speaking users worldwide.",
    category: "Utilities",
    url: "https://arabtoolkit.com",
    status: "Active",
    year: 2025,
  },
  {
    slug: "peakgearguide",
    name: "PeakGearGuide",
    tagline: "Outdoor gear reviews you can trust",
    description:
      "A curated outdoor gear review platform helping adventurers find the right equipment. In-depth, honest reviews across hiking, camping, and outdoor lifestyle categories.",
    category: "Lifestyle",
    url: "https://peakgearguide.com",
    status: "Active",
    year: 2025,
  },
  {
    slug: "sleepyhero",
    name: "SleepyHero",
    tagline: "Better sleep starts here",
    description:
      "A sleep wellness platform offering expert-backed product reviews, sleep science articles, and actionable advice to help people improve their sleep quality.",
    category: "Wellness",
    url: "https://sleepyhero.com",
    status: "Active",
    year: 2025,
  },
  {
    slug: "meowpicks",
    name: "MeowPicks",
    tagline: "The best gear for your cat",
    description:
      "A curated cat gear and product recommendation platform. Expert picks across food, toys, furniture, and health products for cat owners who want the best for their pets.",
    category: "Lifestyle",
    url: "https://meowpicks.com",
    status: "Active",
    year: 2025,
  },
  {
    slug: "bioskinrepair",
    name: "BioSkinRepair",
    tagline: "Science-backed skin barrier repair",
    description:
      "A dermo-cosmetic content platform focused on science-backed skin barrier repair. Educational content and product guidance for people dealing with sensitive or damaged skin.",
    category: "Wellness",
    url: "https://bioskinrepair.com",
    status: "Active",
    year: 2025,
  },
  {
    slug: "pharmagrowth",
    name: "PharmaGrowth",
    tagline: "Grow your pharma marketing career",
    description:
      "A career platform and content brand for pharmaceutical marketing professionals. Insights, community, and resources for marketers building careers in the pharma and consumer healthcare industry.",
    category: "Career & Community",
    url: "https://pharmagrowth.co",
    status: "Active",
    year: 2025,
  },
  {
    slug: "couponawy",
    name: "Couponawy",
    tagline: "Arabic coupons and deals",
    description:
      "An Arabic-language coupon and deals aggregation platform. Curated discount codes and offers from major retailers across the Middle East.",
    category: "E-Commerce",
    url: "https://couponawy.com",
    status: "Active",
    year: 2025,
  },
  {
    slug: "adcraft",
    name: "AdCraft",
    tagline: "Create ads that convert",
    description:
      "An ad creation tool that helps marketers and small businesses build high-converting ad creatives quickly without design skills.",
    category: "Marketing Tools",
    url: "https://adcraft.sherifalkady.com",
    status: "Active",
    year: 2025,
  },
  {
    slug: "claude-arabic",
    name: "Claude Code Arabic",
    tagline: "Learn Claude Code in Arabic",
    description:
      "An Arabic-language learning resource for Claude Code. Tutorials, guides, and walkthroughs designed for Arabic-speaking developers and creators getting started with AI-powered coding.",
    category: "Education",
    url: "https://claude.sherifalkady.com",
    status: "Active",
    year: 2025,
  },
];
