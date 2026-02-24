import type {
  CombinedOpportunity,
  Opportunity,
  OpportunityModelInputs,
  OpportunityModelLine,
  Range,
} from "@/data/types";

export type DriverKey = "units" | "price" | "attach" | "arppu";
export type LineTypeColor = { stroke: string; fill: string };

export type DefaultLineMeta = {
  type: DriverKey;
  lowFactor: number;
  highFactor: number;
  value: number;
};

export type ComputedLine = OpportunityModelLine & { type: DriverKey };

export type SourceEntry = {
  key: DriverKey;
  label: string;
  low: number;
  high: number;
  mid: number;
};

export type DriverDisplayRow = {
  key: DriverKey;
  driver: string;
  baselineValue: number;
  opportunityValue: number;
  baseline: string;
  opportunity: string;
  delta: string;
  confidence: Opportunity["confidence"];
  baselineEditValue: number;
  opportunityEditValue: number;
  unitLabel: string;
};

export type OpportunityModelLineInput = OpportunityModelLine;
export type OpportunityModelInputState = OpportunityModelInputs;
export type OpportunityRange = Range;
export type OpportunityLike = Opportunity | CombinedOpportunity;
