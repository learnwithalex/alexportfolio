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
    id: "orizon",
    company: "Orizon Cloud Services",
    role: "Co-founder / Platform Engineer",
    period: "2026 – Present",
    year: "2026",
    href: "https://orzn.io",
    tags: ["CLOUD", "INFRASTRUCTURE"],
    tech: ["GO", "TYPESCRIPT", "DOCKER", "POSTGRES", "NATS", "CLOUDFLARE"],
    summary:
      "Agent-based cloud hosting platform, launched publicly in July 2026. I co-founded it and own the platform layer — control plane, node agents, and the edge.",
    contributions: [
      "Built the Go control plane and the node agents that run customer workloads, with git-based deploys, managed databases, and automated TLS across a multi-region fleet.",
      "Designed the routing and certificate layer — Caddy at the edge behind Cloudflare, with per-zone certificate handling and a WireGuard mesh between nodes.",
      "Shipped a data-residency tier on dedicated in-country nodes, ahead of Nigeria's 2027 residency directive.",
      "Run the reliability side: deploy queues, failure recovery, autoscaling, and the observability that catches regressions before customers do.",
    ],
  },
  {
    id: "settlr",
    company: "Settlr",
    role: "Founder / Engineer",
    period: "2026 – Present",
    year: "2026",
    tags: ["FINTECH", "PAYMENTS"],
    tech: ["TYPESCRIPT", "POSTGRES", "APIS", "WEBHOOKS"],
    summary:
      "Payment processing built on licensed banking rails — collections, settlement, and payouts for Nigerian businesses.",
    contributions: [
      "Built the payments core: collection flows, settlement logic, and reconciliation against provider rails.",
      "Shipped the merchant dashboard and developer API, including webhooks and virtual accounts.",
      "Handled the compliance surface — KYC capture and review — required to operate on regulated rails.",
    ],
  },
  {
    id: "pxxl",
    company: "pxxl.app",
    role: "Solo Founder / Engineer",
    period: "2025 – 2026",
    year: "2025",
    href: "https://pxxl.app",
    tags: ["CLOUD", "DEPLOYMENT"],
    tech: ["GO", "TYPESCRIPT", "DOCKER", "APIS"],
    summary:
      "A Nigerian deployment platform in the Vercel/Railway mould, designed and built alone end to end. The proof of concept that Orizon grew out of.",
    contributions: [
      "Built the whole platform solo — build pipeline, container runtime, routing, and dashboard.",
      "Proved that a local deployment platform could serve African developers on local latency and local payment rails.",
      "Carried the architectural lessons — and the mistakes — directly into Orizon's design.",
    ],
  },
  {
    id: "blincs",
    company: "Blincs",
    role: "Founder / Full Stack",
    period: "2025 – Present",
    year: "2025",
    tags: ["STREAMING", "MEDIA"],
    tech: ["NEXT.JS", "REACT NATIVE", "TYPESCRIPT", "TAURI"],
    summary:
      "Streaming platform with a custom player, aimed at the African creator economy and distributed across web, desktop, mobile, and Android TV.",
    contributions: [
      "Built the streaming frontend and a custom player tuned for low-bandwidth playback.",
      "Shipped multi-platform distribution from one codebase — web, Tauri desktop, React Native, and Android TV.",
      "Designed the catalogue and delivery pipeline around creator-owned content.",
    ],
  },
  {
    id: "scarletdb",
    company: "ScarletDB",
    role: "Founder / Engineer",
    period: "2025 – 2026",
    year: "2025",
    tags: ["DEVELOPER TOOLS", "BAAS"],
    tech: ["TYPESCRIPT", "POSTGRES", "APIS"],
    summary:
      "Backend-as-a-service that provisioned managed Postgres behind a branded proxy layer. Since folded into Orizon's managed database product.",
    contributions: [
      "Built automated database provisioning and a proxy layer that presented it under one branded endpoint.",
      "Designed the developer API and dashboard for creating, branching, and connecting to databases.",
      "Migrated the product into Orizon rather than running two overlapping platforms.",
    ],
  },
  {
    id: "ringly",
    company: "Ringly",
    role: "Founder / Full Stack",
    period: "2025",
    year: "2025",
    tags: ["SAAS", "TELEPHONY"],
    tech: ["TYPESCRIPT", "WEBRTC", "TWILIO", "APIS"],
    summary:
      "Browser-based calling and SMS platform — WebRTC to PSTN calling, a shared SMS inbox, and a developer API on top of Twilio.",
    contributions: [
      "Built browser-to-phone calling over WebRTC with PSTN termination.",
      "Shipped a shared SMS inbox and number management for teams.",
      "Exposed the whole thing as a developer API for programmatic calling and messaging.",
    ],
  },
  {
    id: "freelance",
    company: "Independent / Contract",
    role: "Software Engineer",
    period: "2024 – Present",
    year: "2024",
    tags: ["CONTRACT"],
    tech: ["TYPESCRIPT", "GO", "REACT", "NODE.JS", "APIS"],
    summary:
      "Contract engineering across simulation software, offline-first ERP, marketplaces, streaming, and quality-management web apps.",
    contributions: [
      "Delivered offline-first ERP software that stays usable through unreliable connectivity and reconciles on reconnect.",
      "Built marketplace and streaming products end to end, from data model to production deployment.",
      "Worked across simulation and quality-management systems with strict correctness requirements.",
    ],
  },
];
