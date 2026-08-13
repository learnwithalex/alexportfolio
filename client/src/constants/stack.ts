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
    description: "The foundations I write and ship with every day.",
    items: [
      { name: "HTML5", slug: "html5" },
      { name: "CSS3", slug: "css" },
      { name: "JavaScript", slug: "javascript" },
      { name: "TypeScript", slug: "typescript" },
    ],
  },
  {
    id: "frameworks",
    title: "UI Frameworks",
    description: "Component-driven interfaces and full-stack React apps.",
    items: [
      { name: "React", slug: "react" },
      { name: "Next.js", slug: "nextdotjs", mono: true },
      { name: "Vite", slug: "vite" },
    ],
  },
  {
    id: "styling",
    title: "Styling Systems",
    description: "Utility-first styling and polished interface craft.",
    items: [{ name: "Tailwind CSS", slug: "tailwindcss" }],
  },
  {
    id: "backend",
    title: "Server & APIs",
    description: "Runtimes and frameworks for APIs and backend services.",
    items: [
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Express", slug: "express", mono: true },
    ],
  },
  {
    id: "architecture",
    title: "App Architecture",
    description: "State, data fetching, validation, and client plumbing.",
    items: [
      { name: "Zustand", slug: "zustand" },
      { name: "TanStack Query", slug: "reactquery" },
      { name: "React Router", slug: "reactrouter" },
      { name: "Zod", slug: "zod" },
      { name: "Axios", slug: "axios" },
    ],
  },
  {
    id: "craft",
    title: "Motion & Feedback",
    description: "Interaction polish and user-facing feedback surfaces.",
    items: [
      { name: "Framer Motion", slug: "framer" },
      { name: "Sonner", slug: "sonner" },
    ],
  },
  {
    id: "platforms",
    title: "Dev Platforms",
    description: "Version control, packaging, and delivery tooling.",
    items: [
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github", mono: true },
      { name: "Bun", slug: "bun" },
      { name: "npm", slug: "npm" },
    ],
  },
  {
    id: "deployment",
    title: "Deployment & Hosting",
    description: "Where apps go live — modern deploys and hosting platforms.",
    items: [
      { name: "Vercel", slug: "vercel", mono: true },
      { name: "Orizon", slug: "orizon" },
    ],
  },
  {
    id: "software",
    title: "Everyday Software",
    description: "The apps I use to design, debug, and ship.",
    items: [
      { name: "VS Code", slug: "visualstudiocode" },
      { name: "Figma", slug: "figma" },
      { name: "Postman", slug: "postman" },
      { name: "Chrome", slug: "googlechrome" },
    ],
  },
];
