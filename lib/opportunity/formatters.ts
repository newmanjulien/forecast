import type { OpportunityRange } from "./types";

export const formatRange = (
  range: OpportunityRange,
  suffix: string,
  digits = 0,
) => {
  const [low, high] = range;
  const sign = (value: number) =>
    `${value < 0 ? "-" : "+"}${Math.abs(value).toFixed(digits)}`;
  return `${sign(low)}${suffix} to ${sign(high)}${suffix}`;
};

export const formatSignedValue = (
  value: number,
  suffix: string,
  digits = 0,
) => {
  return `${value < 0 ? "-" : "+"}${Math.abs(value).toFixed(digits)}${suffix}`;
};

const formatNumber = (value: number, digits = 2) =>
  value.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: digits,
  });

export const formatUnits = (units: number) => formatNumber(units, 2);
export const formatPrice = (value: number) => `$${value.toFixed(1)}`;
export const formatPct = (value: number) => `${(value * 100).toFixed(1)}%`;
export const formatDeltaUnits = (value: number) =>
  `${value >= 0 ? "+" : ""}${formatNumber(Math.abs(value), 2)}`;
export const formatDeltaPrice = (value: number) =>
  `${value >= 0 ? "+" : ""}$${value.toFixed(2)}`;
export const formatDeltaPts = (value: number) =>
  `${value >= 0 ? "+" : ""}${(value * 100).toFixed(1)} pts`;
export const formatDeltaArppu = (value: number) =>
  `${value >= 0 ? "+" : ""}$${value.toFixed(2)}`;
