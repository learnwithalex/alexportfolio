/** Converts a positive integer year to Roman numerals (e.g. 2026 → MMXXVI). */
export function toRoman(year: number): string {
  if (!Number.isFinite(year) || year <= 0) return "";

  const values: [number, string][] = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  let remaining = Math.floor(year);
  let result = "";

  for (const [value, numeral] of values) {
    while (remaining >= value) {
      result += numeral;
      remaining -= value;
    }
  }

  return result;
}

export function currentYearRoman(): string {
  return toRoman(new Date().getFullYear());
}
