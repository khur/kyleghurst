export type Product = {
  name: string;
  url: string;
  tagline: string;
  metrics: string[];
  tech: string[];
};

export const products: Product[] = [
  {
    name: "Pickleball Plus",
    url: "https://pickleballplusapp.com",
    tagline:
      "Native iOS app for pickleball players, with a global court database harvested at zero API cost.",
    metrics: [
      "20,000+ monthly visitors",
      "8,500 → 22,600 courts worldwide",
      "zero api cost",
    ],
    tech: ["swift", "firebase", "google places", "overpass"],
  },
  {
    name: "Flip It Golf",
    url: "https://flipitgolf.com",
    tagline:
      "Multiplayer iOS side game played on top of a real round of golf — call coin-flip wagers shot-by-shot, win the flip, your opponent re-hits.",
    metrics: [
      "soft launched on ios · 2026",
      "2v2 + free-for-all",
      "offline-first · venmo / cashapp settle-up",
    ],
    tech: ["swift", "ios", "astro", "deep-links"],
  },
  {
    name: "Parrot Scoring",
    url: "https://parrotscoring.com",
    tagline:
      "Live scoring platform for high school athletics, expanding across Utah school deployments.",
    metrics: ["multi-source ingestion", "real-time updates"],
    tech: ["cloudflare workers", "postgres", "react"],
  },
  {
    name: "Workout Surplus",
    url: "",
    tagline:
      "Liquidation gym-equipment pricing intelligence — scrapers, enrichment pipeline, classification system.",
    metrics: ["ebay + play-it-again-sports scrapers", "trigger-based enrichment"],
    tech: ["puppeteer", "postgres", "node"],
  },
  {
    name: "Lunchbox Hands",
    url: "https://lunchboxhands.com",
    tagline:
      "Free developer tools site with a Cloudflare Worker marketing engine that scrapes Reddit and HN trends.",
    metrics: ["migrated vite spa → astro for seo", "reddit + hn trend scraping"],
    tech: ["astro", "cloudflare workers", "postgres"],
  },
];
