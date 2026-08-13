import { useEffect, useRef, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ColorsIcon, Tick02Icon } from "@hugeicons/core-free-icons";
import { useTheme } from "@/hooks";
import { themes, type ThemeId } from "@/constants/themes";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const selectTheme = (id: ThemeId) => {
    setTheme(id);
    setOpen(false);
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change theme"
        onClick={() => setOpen((prev) => !prev)}
        className="text-muted transition-colors hover:text-main"
      >
        <HugeiconsIcon
          icon={ColorsIcon}
          size={18}
          color="currentColor"
          strokeWidth={1.75}
        />
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Themes"
          className="absolute top-full left-0 z-50 mt-3 max-h-[min(70vh,420px)] w-52 overflow-y-auto border border-line bg-secondary/95 p-1.5 shadow-xl backdrop-blur-md"
        >
          {themes.map((option) => {
            const active = theme === option.id;
            return (
              <button
                key={option.id}
                type="button"
                role="option"
                aria-selected={active}
                onClick={() => selectTheme(option.id)}
                className={`flex w-full items-center gap-3 px-2.5 py-2 text-left transition-colors ${
                  active ? "bg-main/5 text-main" : "text-muted hover:bg-main/5 hover:text-main"
                }`}
              >
                <span
                  className="size-3.5 shrink-0 border border-line"
                  style={{ backgroundColor: option.swatch }}
                  aria-hidden
                />
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-medium tracking-wide">
                    {option.label}
                  </span>
                  <span className="block text-[10px] text-muted">
                    {option.description}
                  </span>
                </span>
                {active && (
                  <HugeiconsIcon
                    icon={Tick02Icon}
                    size={14}
                    color="currentColor"
                    strokeWidth={2}
                  />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
