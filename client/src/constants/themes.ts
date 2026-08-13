export type ThemeId =
  | "midnight"
  | "obsidian"
  | "slate"
  | "forest"
  | "paper"
  | "sunset"
  | "ocean"
  | "violet"
  | "rose"
  | "aurora"
  | "citrus"
  | "candy";

export type ThemeOption = {
  id: ThemeId;
  label: string;
  description: string;
  swatch: string;
};

export const themes: ThemeOption[] = [
  {
    id: "midnight",
    label: "Midnight",
    description: "Warm dark charcoal",
    swatch: "#0C0B09",
  },
  {
    id: "obsidian",
    label: "Obsidian",
    description: "Pure black contrast",
    swatch: "#000000",
  },
  {
    id: "slate",
    label: "Slate",
    description: "Cool blue-gray",
    swatch: "#0f1419",
  },
  {
    id: "forest",
    label: "Forest",
    description: "Deep green undertone",
    swatch: "#0a120e",
  },
  {
    id: "paper",
    label: "Paper",
    description: "Soft light surface",
    swatch: "#f4f1ea",
  },
  {
    id: "sunset",
    label: "Sunset",
    description: "Warm coral glow",
    swatch: "#ff6b4a",
  },
  {
    id: "ocean",
    label: "Ocean",
    description: "Bright coastal blue",
    swatch: "#3aa0ff",
  },
  {
    id: "violet",
    label: "Violet",
    description: "Electric purple haze",
    swatch: "#a855f7",
  },
  {
    id: "rose",
    label: "Rose",
    description: "Bold magenta blush",
    swatch: "#f43f8c",
  },
  {
    id: "aurora",
    label: "Aurora",
    description: "Teal and cyan lights",
    swatch: "#2dd4bf",
  },
  {
    id: "citrus",
    label: "Citrus",
    description: "Zesty lime punch",
    swatch: "#a3e635",
  },
  {
    id: "candy",
    label: "Candy",
    description: "Soft pastel light",
    swatch: "#f9a8d4",
  },
];

export const DEFAULT_THEME: ThemeId = "midnight";

export const lightThemes: ThemeId[] = ["paper", "candy"];
