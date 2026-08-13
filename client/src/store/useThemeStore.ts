import { create } from "zustand";
import { persist } from "zustand/middleware";
import { DEFAULT_THEME, type ThemeId } from "@/constants/themes";

interface ThemeStore {
  theme: ThemeId;
  setTheme: (theme: ThemeId) => void;
}

const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: DEFAULT_THEME,
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "portfolio-theme",
      partialize: (state) => ({ theme: state.theme }),
    }
  )
);

export default useThemeStore;
