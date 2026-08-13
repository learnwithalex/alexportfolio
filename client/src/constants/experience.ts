export type ExperienceEntry = {
  id: string;
  company: string;
  role: string;
  period: string;
  year: string;
  countryCode?: "gb" | "es";
  href?: string;
  tags?: string[];
  tech: string[];
  summary: string;
  contributions: string[];
};

export const experienceEntries: ExperienceEntry[] = [
  {
    id: "terrace-pools",
    company: "Terrace Pools",
    role: "Full Stack Engineer",
    period: "Feb 2026 - Mar 2026",
    year: "2026",
    countryCode: "es",
    href: "https://terracepool.com",
    tech: ["NODE.JS", "REACT", "TYPESCRIPT", "APIS"],
    summary:
      "Spain-based pool construction and renovation brand. Delivered the full digital product, from content architecture to lead capture and deployment.",
    contributions: [
      "Designed and built the marketing site with structured service pages optimized for conversion.",
      "Implemented lead flows and contact integrations that connect prospects directly to the sales pipeline.",
      "Shipped a performant, responsive frontend aligned with the brand's premium positioning.",
    ],
  },
  {
    id: "boxstreamz",
    company: "BoxStreamz",
    role: "Frontend Engineer",
    period: "Jun 2026 - Jul 2026",
    year: "2026",
    href: "https://boxstreamz.com/",
    tags: ["STREAMING"],
    tech: ["NEXT.JS", "TYPESCRIPT", "TAILWIND CSS", "APIS"],
    summary:
      "Streaming platform for movies, TV series, anime, and live sports, a fast, cached watch experience with bookmarks, history, downloads, and a premium app.",
    contributions: [
      "Built the Next.js frontend for browsing and watching movies, series, anime, and live sports.",
      "Shipped catalog, search, and watch flows with bookmarks, history, and download surfaces.",
      "Delivered a responsive, dark-themed UI with theme switching and a PWA-ready streaming experience.",
    ],
  },
  {
    id: "periwinkle",
    company: "Periwinkle",
    role: "Full Stack Engineer",
    period: "2026 – Present",
    year: "2026",
    href: "https://periwinkle.cc",
    tags: ["DIGITAL MARKETPLACE"],
    tech: ["NODE.JS", "REACT", "TYPESCRIPT", "APIS"],
    summary:
      "African-inspired digital asset marketplace for designers and creators — premium mockups, 3D scenes, branding kits, and billboards for modern brands worldwide.",
    contributions: [
      "Built marketplace flows for browsing, publishing, and purchasing digital assets end to end.",
      "Shipped product surfaces for phone mockups, 3D scenes, branding materials, and billboard assets.",
      "Owned full-stack delivery from architecture through production so creators can publish and earn.",
    ],
  },
  {
    id: "questpay",
    company: "Questpay",
    role: "Founder / Full Stack",
    period: "2026 – Present",
    year: "2026",
    href: "https://payments.questlabs.cc/",
    tags: ["FINTECH"],
    tech: ["REACT", "NODE.JS", "TYPESCRIPT", "APIS"],
    summary:
      "Fintech payment checkout platform built for SMBs in Nigeria, enabling businesses to collect payments with instant settlements.",
    contributions: [
      "Architected payment checkout flows and settlement logic tailored for Nigerian SMB use cases.",
      "Built the merchant-facing dashboard and API layer for real-time transaction visibility.",
      "Drove product decisions from infrastructure through UX to ensure reliability at scale.",
    ],
  },
  {
    id: "quest-base",
    company: "Quest Base",
    role: "Founder / Full Stack",
    period: "2026 – Present",
    year: "2026",
    href: "https://questbase.vercel.app/",
    tags: ["SAAS", "BAAS"],
    tech: ["TYPESCRIPT", "NODE.JS", "APIS", "WEBHOOKS"],
    summary:
      "Backend-primitives SaaS; form2mail, OTP verification, waitlists, spam/bot protection, and webhooks via a unified API and developer dashboard.",
    contributions: [
      "Designed the unified API surface and developer dashboard for rapid backend integration.",
      "Shipped core primitives (OTP, waitlists, webhooks, honeypot spam/bot protection) that reduce backend build time.",
      "Integrated Quest Base form2mail into this portfolio's contact form.",
    ],
  },
  {
    id: "orizon",
    company: "Orizon",
    role: "Co-founder / Team Support",
    period: "2026 – Present",
    year: "2026",
    href: "https://orzn.io",
    tags: ["HOSTING", "DEPLOYMENT"],
    tech: ["NEXT.JS", "NODE.JS", "DOCKER", "APIS"],
    summary:
      "Co-founder supporting the team behind a modern deployment and hosting platform, one-click cPanel migration, git deploys, dedicated servers, and global edge delivery.",
    contributions: [
      "Support product and engineering across the deployment pipeline, from infrastructure to user-facing UI.",
      "Help the team ship git-based deploys and edge delivery for low-latency global performance.",
      "Back onboarding and migration flows that move sites off legacy shared hosting.",
    ],
  },
  {
    id: "protection-pools",
    company: "Protection Pools",
    role: "Full Stack Engineer",
    period: "Dec 2025 - Jan 2026",
    year: "2025",
    href: "https://protectionpools.com",
    tech: ["NODE.JS", "REACT", "TYPESCRIPT", "APIS"],
    summary:
      "Betting protection pools platform where users secure stakes through collective pool mechanics, dashboards, and real-time pool management.",
    contributions: [
      "Delivered full-stack pool mechanics, user dashboards, and secure transaction flows.",
      "Built responsive UI for pool discovery, enrollment, and balance management across devices.",
      "Collaborated on API design for real-time pool state and payout processing.",
    ],
  },
  {
    id: "giftbox",
    company: "GiftBox",
    role: "Frontend Engineer",
    period: "Jun 2024",
    year: "2024",
    countryCode: "gb",
    tech: ["NEXT.JS", "TYPESCRIPT", "TAILWIND CSS", "REST APIS"],
    summary:
      "Global event celebration and digital gifting platform, card payments, bank transfers, and gift cards across a scalable, accessible frontend.",
    contributions: [
      "Developed and maintained the responsive frontend with Next.js, TypeScript, and Tailwind CSS.",
      "Integrated secure payment gateways, authentication, and data-driven features via REST APIs.",
      "Improved load times by over 30% through code splitting, lazy loading, and optimized rendering.",
    ],
  },
];
