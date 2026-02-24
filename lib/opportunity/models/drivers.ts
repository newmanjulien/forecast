import type { Opportunity } from "@/data/types";
import {
  formatDeltaArppu,
  formatDeltaPrice,
  formatDeltaPts,
  formatDeltaUnits,
  formatPct,
  formatPrice,
  formatUnits,
} from "../formatters";
import type { DriverDisplayRow, DriverKey, OpportunityModelInputState } from "../types";

export const buildDriverDeltas = (
  defaultLineMeta: { type: DriverKey }[],
  lineValues: number[],
) => {
  return lineValues.reduce(
    (acc, value, index) => {
      const type = defaultLineMeta[index]?.type ?? "units";
      acc[type] += value;
      return acc;
    },
    { units: 0, price: 0, attach: 0, arppu: 0 } as Record<DriverKey, number>,
  );
};

export const buildDriverState = (
  baselineInputs: OpportunityModelInputState,
  driverDeltas: Record<DriverKey, number>,
  confidence: Opportunity["confidence"],
) => {
  const unitsBaseline = baselineInputs.baseUnits;
  const unitsOpportunity = unitsBaseline + driverDeltas.units;
  const priceBaseline = baselineInputs.baseNetPrice;
  const priceOpportunity = priceBaseline + driverDeltas.price;
  const attachBaseline = baselineInputs.baseAttachRate;
  const attachOpportunity = attachBaseline + driverDeltas.attach;
  const arppuBaseline = baselineInputs.baseArppu;
  const arppuOpportunity = arppuBaseline + driverDeltas.arppu;

  const drivers: DriverDisplayRow[] = [
    {
      key: "units",
      driver: "Units",
      baselineValue: unitsBaseline,
      opportunityValue: unitsOpportunity,
      baseline: formatUnits(unitsBaseline),
      opportunity: formatUnits(unitsOpportunity),
      delta: formatDeltaUnits(driverDeltas.units),
      confidence,
      baselineEditValue: Number(unitsBaseline.toFixed(2)),
      opportunityEditValue: Number(unitsOpportunity.toFixed(2)),
      unitLabel: "units",
    },
    {
      key: "price",
      driver: "Net price",
      baselineValue: priceBaseline,
      opportunityValue: priceOpportunity,
      baseline: formatPrice(priceBaseline),
      opportunity: formatPrice(priceOpportunity),
      delta: formatDeltaPrice(driverDeltas.price),
      confidence,
      baselineEditValue: Number(priceBaseline.toFixed(2)),
      opportunityEditValue: Number(priceOpportunity.toFixed(2)),
      unitLabel: "$",
    },
    {
      key: "attach",
      driver: "Attach rate",
      baselineValue: attachBaseline,
      opportunityValue: attachOpportunity,
      baseline: formatPct(attachBaseline),
      opportunity: formatPct(attachOpportunity),
      delta: formatDeltaPts(driverDeltas.attach),
      confidence,
      baselineEditValue: Number((attachBaseline * 100).toFixed(1)),
      opportunityEditValue: Number((attachOpportunity * 100).toFixed(1)),
      unitLabel: "pts",
    },
    {
      key: "arppu",
      driver: "Live-ops ARPPU",
      baselineValue: arppuBaseline,
      opportunityValue: arppuOpportunity,
      baseline: formatPrice(arppuBaseline),
      opportunity: formatPrice(arppuOpportunity),
      delta: formatDeltaArppu(driverDeltas.arppu),
      confidence,
      baselineEditValue: Number(arppuBaseline.toFixed(2)),
      opportunityEditValue: Number(arppuOpportunity.toFixed(2)),
      unitLabel: "$",
    },
  ];

  return { drivers };
};

export const toInternalDriverValue = (key: DriverKey, value: number) => {
  if (key === "units") return value;
  if (key === "attach") return value / 100;
  return value;
};
