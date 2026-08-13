export const libraries = [
  "React Router",
  "Tailwind CSS",
  "Lucide React",
  "React Hook Form",
  "React Query",
  "Zustand",
  "Axios",
  "Zod",
  "Sonner",
  "Framer Motion",
];

export const GITHUB_USERNAME = "learnwithalex";

// TODO(alex): fill in your real email before sharing this publicly — the
// address below is a placeholder and the contact link will not reach you.
export const socials = [
  {
    label: "Github",
    href: `https://github.com/${GITHUB_USERNAME}`,
    icon: "github" as const,
  },
  {
    label: "Email",
    href: "mailto:hello@example.com",
    icon: "mail" as const,
  },
  {
    label: "Resume",
    href: "/resume.pdf",
    icon: "resume" as const,
  },
];

export type Project = {
  id: string;
  index: string;
  title: string;
  categories: string[];
  description: string;
  tech: string[];
  year: string;
  href: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: "orizon",
    index: "01",
    title: "Orizon",
    categories: ["CLOUD", "INFRASTRUCTURE"],
    description:
      "Agent-based cloud hosting platform for the African market. Go control plane and node agents, git deploys, managed databases, dedicated servers, and a Cloudflare edge — with a data-residency tier built for Nigeria's compliance rules.",
    tech: ["GO", "TYPESCRIPT", "DOCKER", "POSTGRES", "NATS"],
    year: "2026",
    href: "https://orzn.io",
    image: "orizon",
  },
  {
    id: "pxxl",
    index: "02",
    title: "pxxl.app",
    categories: ["CLOUD", "DEPLOYMENT"],
    description:
      "Nigerian deployment platform in the Vercel/Railway mould, designed and shipped solo. The proving ground for everything that became Orizon.",
    tech: ["GO", "TYPESCRIPT", "DOCKER", "APIS"],
    year: "2025",
    href: "https://pxxl.app",
    image: "pxxl",
  },
  {
    id: "settlr",
    index: "03",
    title: "Settlr",
    categories: ["FINTECH", "PAYMENTS"],
    description:
      "Payment processing built on licensed banking rails — collections, settlement and payouts for Nigerian businesses, with a merchant dashboard and developer API.",
    tech: ["TYPESCRIPT", "POSTGRES", "APIS", "WEBHOOKS"],
    year: "2026",
    // TODO(alex): point this at Settlr's public site when there is one.
    href: "https://orzn.io",
    image: "settlr",
  },
  {
    id: "blincs",
    index: "04",
    title: "Blincs",
    categories: ["STREAMING", "MEDIA"],
    description:
      "Streaming platform with a custom player, built for the African creator economy and distributed across web, mobile and Android TV.",
    tech: ["NEXT.JS", "REACT NATIVE", "TYPESCRIPT", "TAURI"],
    year: "2025",
    // TODO(alex): add the public URL if/when Blincs is open to the world.
    href: "https://orzn.io",
    image: "blincs",
  },
  {
    id: "scarletdb",
    index: "05",
    title: "ScarletDB",
    categories: ["DEVELOPER TOOLS", "BAAS"],
    description:
      "Backend-as-a-service that provisioned managed Postgres behind a branded proxy layer. Now folded into Orizon's managed database product.",
    tech: ["TYPESCRIPT", "POSTGRES", "APIS"],
    year: "2025",
    href: "https://orzn.io",
    image: "scarletdb",
  },
];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Stack", to: "/stack" },
  { label: "Experience", to: "/experience" },
  { label: "Contact", to: "/contact" },
];
