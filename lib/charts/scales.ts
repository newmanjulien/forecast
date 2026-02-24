export function linearScale(
  domainMin: number,
  domainMax: number,
  rangeMin: number,
  rangeMax: number
) {
  const span = domainMax - domainMin;
  const range = rangeMax - rangeMin;
  if (span === 0) {
    return () => rangeMin;
  }
  return (value: number) => rangeMin + ((value - domainMin) / span) * range;
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function ticksLinear(max: number, count: number) {
  if (count <= 0) return [0, max];
  const step = max / count;
  return Array.from({ length: count + 1 }, (_, idx) => Math.round(step * idx));
}

export function formatThousands(value: number) {
  if (value <= 0) return "0K";
  return `${Math.round(value / 1000)}K`;
}

export function formatMonthLabel(date: string) {
  const [year, month] = date.split("-");
  const monthIndex = Number(month) - 1;
  const dateValue = new Date(Number(year), Number(monthIndex), 1);
  return dateValue.toLocaleString("en-US", { month: "long", year: "numeric" });
}

export function formatCurrency(value: number) {
  return value.toLocaleString("en-US");
}

export function formatRatio(value: number) {
  const sign = value > 0 ? "+" : "";
  return `${sign}${Math.round(value * 100)}%`;
}
