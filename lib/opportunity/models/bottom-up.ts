import { safeDivide } from "./utils";
import type {
  ComputedLine,
  DefaultLineMeta,
  DriverKey,
  OpportunityModelInputState,
  OpportunityModelLineInput,
} from "../types";

export const computeLineValue = (
  type: DriverKey,
  midRevenue: number,
  inputs: {
    baseUnits: number;
    baseNetPrice: number;
    baseDlcPrice: number;
    activeRate: number;
  },
) => {
  if (type === "units") return safeDivide(midRevenue, inputs.baseNetPrice);
  if (type === "price") return safeDivide(midRevenue, inputs.baseUnits);
  if (type === "attach")
    return safeDivide(midRevenue, inputs.baseUnits * inputs.baseDlcPrice);
  return safeDivide(midRevenue, inputs.baseUnits * inputs.activeRate);
};

export const computeLineRevenue = (
  type: DriverKey,
  value: number,
  inputs: {
    baseUnits: number;
    baseNetPrice: number;
    baseDlcPrice: number;
    activeRate: number;
  },
) => {
  if (type === "units") return value * inputs.baseNetPrice;
  if (type === "price") return value * inputs.baseUnits;
  if (type === "attach") return value * inputs.baseUnits * inputs.baseDlcPrice;
  return value * inputs.baseUnits * inputs.activeRate;
};

export const buildDefaultLineMeta = (
  lines: OpportunityModelLineInput[],
  defaultInputs: OpportunityModelInputState,
): DefaultLineMeta[] => {
  return lines.map((line) => {
    const mid = (line.low + line.high) / 2;
    const midRevenue = mid * 1_000_000;
    const type = line.kind;
    return {
      type,
      lowFactor: mid !== 0 ? line.low / mid : 1,
      highFactor: mid !== 0 ? line.high / mid : 1,
      value: computeLineValue(type, midRevenue, defaultInputs),
    };
  });
};

export const buildComputedLines = (
  lines: OpportunityModelLineInput[],
  defaultLineMeta: DefaultLineMeta[],
  values: number[],
  inputs: OpportunityModelInputState,
): ComputedLine[] => {
  return lines.map((line, index) => {
    const meta = defaultLineMeta[index];
    const type = meta?.type ?? line.kind ?? "units";
    const value = values[index] ?? 0;
    const midRevenue = computeLineRevenue(type, value, inputs);
    const mid = midRevenue / 1_000_000;
    const low = mid * (meta?.lowFactor ?? 1);
    const high = mid * (meta?.highFactor ?? 1);

    return {
      ...line,
      low,
      high,
      type,
    };
  });
};
