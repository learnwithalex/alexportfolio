import { useTheme } from "@/hooks";
import { HugeiconsIcon } from "@hugeicons/react";
import { Sun01Icon, Moon02Icon } from "@hugeicons/core-free-icons";
import { useThemeStore } from "@/store";
import { lightThemes } from "@/constants/themes";

export default function ModeToggle() {
  const { theme } = useTheme();
  const setTheme = useThemeStore((s) => s.setTheme);

  const isLight = lightThemes.includes(theme);

  return (
    <button
      className="text-main h-11 w-11 center rounded-full"
      onClick={() => setTheme(isLight ? "midnight" : "paper")}
      aria-label="Toggle light and dark theme"
    >
      {isLight ? (
        <HugeiconsIcon icon={Moon02Icon} size={20} color="currentColor" />
      ) : (
        <HugeiconsIcon icon={Sun01Icon} size={20} color="currentColor" />
      )}
    </button>
  );
}
