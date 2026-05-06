export type ExperienceEntry = {
  start: string;
  end: string;
  company: string;
  role: string;
  location?: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    start: "2025.07",
    end: "present",
    company: "MMERCH",
    role: "Senior Software Engineer, AI Engineering",
    location: "Sandy, UT",
    bullets: [
      "Established AI-augmented engineering practices across the team — structured prompt patterns, sequential build plans, and review processes that compressed feature delivery cycles.",
      "Architected a Postgres audit logging system with trigger logic covering admin-invited user flows; built a temporary-storage pattern with pg_cron cleanup to resolve payload-size limits in the remove.bg edge function pipeline.",
      "Designed and shipped an AI-powered content generation system producing multi-platform content packages from trending articles.",
      "Built internal React Native tools and database schemas that streamline team operations.",
    ],
  },
  {
    start: "2025.04",
    end: "2025.07",
    company: "Guru Technologies",
    role: "Software Engineer",
    location: "Logan, UT",
    bullets: [
      "Shipped features into a React web application for client Obra under an outsourced delivery model, contributing across multiple cross-functional teams.",
    ],
  },
  {
    start: "2022.10",
    end: "2023.10",
    company: "Amberdata",
    role: "Software Engineer",
    location: "Salt Lake County, UT",
    bullets: [
      "Owned the post-acquisition technical merger of Genesis Volatility into Amberdata, coordinating across stakeholders to keep the platform live for existing users throughout the cutover.",
      "Executed full-stack migrations across authentication (Firebase → Auth0), data layer (SQL → AWS S3), and APIs (GraphQL → REST) in a single coordinated release.",
      "Led the front-end redesign of the analytics platform onto Amberdata's design system in Tailwind CSS.",
      "Drove operational consolidation across communication, project management, and source control tooling, and facilitated weekly retrospectives.",
    ],
  },
  {
    start: "2021.07",
    end: "2022.10",
    company: "Genesis Volatility",
    role: "Software Engineer · Tech Lead, 3 direct reports",
    bullets: [
      "Led a remote team of three direct reports plus contractors; mentored engineers through product launches and managed delivery across Scrum, Monday.com, and GitHub.",
      "Developed and launched the analytics platform, growing it to 10,000+ users and providing edge for derivatives trading strategies.",
      "Architected the front-end on Gatsby with GraphQL, enabling non-technical product owners to iterate quickly.",
      "Integrated Genesis Volatility visuals into partner platforms including Deribit, OKEX, and LedgerX.",
      "Launched Stripe-powered subscriptions, opening a new revenue channel and improving retention.",
    ],
  },
  {
    start: "2020.03",
    end: "2021.07",
    company: "EDMS LLC",
    role: "Software Engineer",
    location: "San Diego, CA",
    bullets: [
      "Built energy-usage and demand-projection analytics dashboards for municipalities using D3.js and Plotly.",
      "Implemented marketing landing pages from Adobe XD wireframes to drive municipal sales pipelines.",
    ],
  },
  {
    start: "2018.09",
    end: "2019.09",
    company: "FRST",
    role: "Software Engineer · Front-End Lead",
    location: "Greater Chicago Area",
    bullets: [
      "Led an international engineering team building a front-end application for blockchain data visualization, using D3.js, Highcharts, Plotly, Nivo, and Chart.js.",
      "Designed a state-management system that significantly reduced API requests and improved application performance.",
      "Streamlined enterprise-client authentication via Firebase Auth and optimized GraphQL APIs for the enterprise user experience.",
      "Architected high-performance handling of large datasets to support real-time analysis and visualization.",
    ],
  },
  {
    start: "2016.10",
    end: "2018.09",
    company: "Speakr",
    role: "Full-Stack Developer",
    location: "Greater Los Angeles Area",
    bullets: [
      "Migrated the core API from Rails to Node/Express, improving scalability and developer velocity.",
      "Engineered the data pipeline from PostgreSQL into Elasticsearch, accelerating influencer search and metrics retrieval.",
      "Architected and shipped the influencer search web application, enabling enterprise clients to query 30+ data points.",
    ],
  },
  {
    start: "2016.02",
    end: "2016.09",
    company: "Stotz Equipment",
    role: "Front-End Engineer",
    location: "Phoenix, AZ",
    bullets: [
      "Built real-time equipment tracking using WebSockets, React, Redux, and the Google Maps API.",
      "Implemented JWT session management with Passport.js to improve authentication flow.",
    ],
  },
  {
    start: "2015.07",
    end: "2015.09",
    company: "POPRAGEOUS",
    role: "Email Designer",
    bullets: ["Produced HTML email designs for the customer acquisition team."],
  },
  {
    start: "2008.06",
    end: "2012.08",
    company: "Los Angeles Angels organization",
    role: "Pitcher · Professional Baseball",
    location: "Tempe · Rancho Cucamonga · Little Rock · Salt Lake City",
    bullets: [
      "Played professionally across four seasons in the Angels' minor league system. The discipline, preparation, and resilience built across pro sport carry directly into how I approach engineering work today.",
    ],
  },
];
