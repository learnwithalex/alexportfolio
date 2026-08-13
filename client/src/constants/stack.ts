export type StackItem = {
  name: string;
  slug: string;
  /** Black/default brand mark — invert on dark themes */
  mono?: boolean;
  /** Custom icon URL when not on Simple Icons */
  iconUrl?: string;
};

export type StackCategory = {
  id: string;
  title: string;
  description: string;
  items: StackItem[];
};

export const stackCategories: StackCategory[] = [
  {
    id: "languages",
    title: "Core Languages",
    description: "Go for anything that has to stay up. TypeScript for everything else.",
    items: [
      { name: "Go", slug: "go" },
      { name: "TypeScript", slug: "typescript" },
      { name: "JavaScript", slug: "javascript" },
      { name: "SQL", slug: "postgresql" },
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    description: "The layer I spend most of my time in — runtimes, proxies, and the boxes underneath.",
    items: [
      { name: "Docker", slug: "docker" },
      { name: "Linux", slug: "linux" },
      { name: "Caddy", slug: "caddy" },
      { name: "Nginx", slug: "nginx" },
      { name: "WireGuard", slug: "wireguard" },
    ],
  },
  {
    id: "data",
    title: "Data & Messaging",
    description: "State, queues, and the plumbing between services.",
    items: [
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "Redis", slug: "redis" },
      { name: "NATS", slug: "natsdotio" },
      { name: "SQLite", slug: "sqlite" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & Edge",
    description: "Where the fleet actually runs, and what sits in front of it.",
    items: [
      { name: "Cloudflare", slug: "cloudflare" },
      { name: "Hetzner", slug: "hetzner" },
      { name: "Vultr", slug: "vultr" },
    ],
  },
  {
    id: "backend",
    title: "Server & APIs",
    description: "Runtimes and frameworks for the services I ship.",
    items: [
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Hono", slug: "hono" },
      { name: "Bun", slug: "bun" },
    ],
  },
  {
    id: "frameworks",
    title: "Interfaces",
    description: "Dashboards and product surfaces on top of the platform.",
    items: [
      { name: "React", slug: "react" },
      { name: "Next.js", slug: "nextdotjs", mono: true },
      { name: "Vite", slug: "vite" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
    ],
  },
  {
    id: "observability",
    title: "Operations",
    description: "Knowing something broke before a customer tells you.",
    items: [
      { name: "Grafana", slug: "grafana" },
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github", mono: true },
    ],
  },
  {
    id: "deployment",
    title: "Deployment & Hosting",
    description: "Where things go live — including the platform I build.",
    items: [
      { name: "Orizon", slug: "orizon" },
      { name: "Vercel", slug: "vercel", mono: true },
    ],
  },
];
