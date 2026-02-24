import { driverLabels, driverOrder, lineTypeColors } from "../constants";
import type { ComputedLine, DriverKey, SourceEntry } from "../types";

export { lineTypeColors };

export const buildSourceEntries = (computedLines: ComputedLine[]) => {
  const totals: Record<DriverKey, { low: number; high: number }> = {
    units: { low: 0, high: 0 },
    price: { low: 0, high: 0 },
    attach: { low: 0, high: 0 },
    arppu: { low: 0, high: 0 },
  };

  computedLines.forEach((line) => {
    totals[line.type].low += line.low;
    totals[line.type].high += line.high;
  });

  const sourceEntries: SourceEntry[] = driverOrder
    .map((key) => ({
      key,
      label: driverLabels[key],
      low: totals[key].low,
      high: totals[key].high,
      mid: (totals[key].low + totals[key].high) / 2,
    }))
    .filter(
      (entry) => Math.max(Math.abs(entry.low), Math.abs(entry.high)) > 1e-6,
    )
    .sort((a, b) => Math.abs(b.mid) - Math.abs(a.mid));

  const positiveEntries = sourceEntries.filter((entry) => entry.mid > 0);
  const negativeEntries = sourceEntries.filter((entry) => entry.mid < 0);
  const positiveTotal = positiveEntries.reduce((acc, entry) => acc + entry.mid, 0);
  const negativeRange = negativeEntries.reduce(
    (acc, entry) => {
      acc.low += entry.low;
      acc.high += entry.high;
      return acc;
    },
    { low: 0, high: 0 },
  );

  return {
    sourceEntries,
    positiveEntries,
    negativeEntries,
    positiveTotal,
    negativeRange,
  };
};
