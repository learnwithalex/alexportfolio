import { useEffect, useMemo, useRef, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowDown01Icon,
  ArrowUp01Icon,
  Search01Icon,
} from "@hugeicons/core-free-icons";
import { countries } from "@/constants/countries";
import CountryFlag from "@/components/ui/country-flag";

type CountrySelectProps = {
  id?: string;
  label?: string;
  value?: string;
  error?: string;
  onChange: (code: string) => void;
};

export default function CountrySelect({
  id = "country",
  label = "Country",
  value,
  error,
  onChange,
}: CountrySelectProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const rootRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const selected = countries.find((c) => c.code === value);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return countries;
    return countries.filter(
      (c) =>
        c.name.toLowerCase().includes(q) || c.code.toLowerCase().includes(q)
    );
  }, [query]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
        setQuery("");
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => searchRef.current?.focus());
    }
  }, [open]);

  return (
    <div ref={rootRef} className="relative space-y-2">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-muted">
          {label}
        </label>
      )}

      <button
        id={id}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className={`flex h-11 w-full items-center justify-between gap-3 rounded-lg border bg-secondary px-4 text-left text-sm transition-colors ${
          open ? "border-muted" : "border-line hover:border-muted"
        } ${error ? "border-red-500" : ""}`}
      >
        <span className="flex min-w-0 items-center gap-2.5 truncate">
          {selected ? (
            <>
              <CountryFlag code={selected.code} />
              <span className="truncate text-main">{selected.name}</span>
            </>
          ) : (
            <span className="text-muted">Select a country</span>
          )}
        </span>
        <HugeiconsIcon
          icon={open ? ArrowUp01Icon : ArrowDown01Icon}
          size={18}
          color="currentColor"
          strokeWidth={1.75}
          className="shrink-0 text-muted"
        />
      </button>

      {open && (
        <div className="absolute top-[calc(100%+8px)] left-0 z-50 w-full overflow-hidden rounded-lg border border-line bg-background shadow-xl">
          <div className="flex items-center gap-2.5 border-b border-line px-3.5 py-2.5">
            <HugeiconsIcon
              icon={Search01Icon}
              size={16}
              color="currentColor"
              strokeWidth={1.75}
              className="shrink-0 text-muted"
            />
            <input
              ref={searchRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="h-8 w-full bg-transparent text-sm text-main placeholder:text-muted"
            />
          </div>

          <ul role="listbox" className="max-h-60 overflow-y-auto py-1.5">
            {filtered.length === 0 ? (
              <li className="px-3.5 py-3 text-sm text-muted">
                No countries found
              </li>
            ) : (
              filtered.map((country) => {
                const active = country.code === value;
                return (
                  <li key={country.code}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={active}
                      onClick={() => {
                        onChange(country.code);
                        setOpen(false);
                        setQuery("");
                      }}
                      className={`flex w-full items-center gap-2.5 px-3.5 py-2.5 text-left text-sm transition-colors ${
                        active
                          ? "bg-main/5 text-main"
                          : "text-main/90 hover:bg-main/5"
                      }`}
                    >
                      <CountryFlag code={country.code} />
                      <span className="truncate">{country.name}</span>
                    </button>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      )}

      {error && <p className="text-xs font-medium text-red-500">{error}</p>}
    </div>
  );
}
