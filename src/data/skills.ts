export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "languages",
    items: ["TypeScript", "JavaScript", "Swift", "Elixir", "HTML", "CSS", "SQL"],
  },
  {
    label: "frontend",
    items: [
      "React",
      "React Native (Expo)",
      "Next.js",
      "Astro",
      "Gatsby",
      "Tailwind CSS",
      "Redux",
      "D3.js",
      "Highcharts",
      "Plotly",
      "Chart.js",
      "Nivo",
    ],
  },
  {
    label: "backend & apis",
    items: [
      "Node.js",
      "Express",
      "Phoenix",
      "REST",
      "GraphQL",
      "WebSockets",
      "WebRTC (WHIP/WHEP)",
      "Stripe",
      "Auth0",
      "Firebase Auth",
      "JWT / Passport.js",
      "LiveKit",
    ],
  },
  {
    label: "data & pipelines",
    items: [
      "PostgreSQL",
      "triggers · materialized views",
      "pg_cron · pgvector",
      "Firebase",
      "Elasticsearch",
      "AWS S3",
      "Redis",
      "edge KV",
      "Puppeteer",
      "Google Places",
      "OpenStreetMap Overpass",
    ],
  },
  {
    label: "infrastructure",
    items: [
      "Cloudflare Workers / Pages",
      "Durable Objects",
      "Cloudflare Stream",
      "Fly.io",
      "Neon",
      "Supabase",
      "AWS",
      "Vercel",
      "GitHub Actions",
      "Docker",
    ],
  },
  {
    label: "ai & automation",
    items: [
      "Claude API",
      "agentic workflows",
      "structured prompt patterns",
      "RAG",
      "multi-platform content pipelines",
    ],
  },
  {
    label: "practice",
    items: [
      "AI-native development",
      "distributed team leadership",
      "post-acquisition integration",
      "mentorship",
      "async-first remote",
    ],
  },
];
