import { useEffect } from "react";
import { useThemeStore } from "@/store";
import { DEFAULT_THEME, type ThemeId } from "@/constants/themes";

const applyTheme = (value: ThemeId) => {
  document.documentElement.setAttribute("data-theme", value);
};

const useTheme = () => {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    applyTheme(theme || DEFAULT_THEME);
  }, [theme]);

  return { theme, setTheme };
};

export default useTheme;
