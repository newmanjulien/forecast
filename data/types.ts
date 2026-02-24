export type LooseEnum<T extends string> = T | (string & {});
export type Id<T extends string> = string & { __brand?: T };

export type SignalId = Id<"SignalId">;
export type OpportunityId = Id<"OpportunityId">;
export type CombinedOpportunityId = Id<"CombinedOpportunityId">;

export type Range = readonly [number, number];
export type MoneyRange = Range;
export type Units = number;
export type Dollars = number;
export type Percent = number;

export type NonEmptyArray<T> = [T, ...T[]];

export type Confidence = LooseEnum<"Low" | "Medium" | "High">;

export type SignalTheme = LooseEnum<
  | "creator"
  | "pricing"
  | "hardware"
  | "platform"
  | "audience"
  | "macro"
  | "content"
  | "competition"
  | "regulatory"
  | "regional"
>;

export type Signal = {
  id: SignalId;
  title: string;
  summary: string;
  theme: SignalTheme;
};

export type ModelLineKind = "units" | "price" | "attach" | "arppu";

export type OpportunityModelLine = {
  kind: ModelLineKind;
  label: string;
  formula: string;
  inputs: string;
  low: number;
  high: number;
  assumption: string;
};

export type OpportunityModelInputs = {
  baseUnits: Units;
  baseNetPrice: Dollars;
  baseAttachRate: Percent;
  baseDlcPrice: Dollars;
  baseArppu: Dollars;
  activeRate: Percent;
};

export type OpportunityDriverRow = {
  driver: string;
  baseline: string;
  opportunity: string;
  delta: string;
  confidence: Confidence;
};

export type OpportunityModel = {
  inputs: OpportunityModelInputs;
  baselineRevenue?: Dollars;
  opportunityRevenue?: MoneyRange;
  lines: OpportunityModelLine[];
  drivers?: OpportunityDriverRow[];
};

export type Opportunity = {
  id: OpportunityId;
  signalId: SignalId;
  name: string;
  summary: string;
  detail: string;
  assumptions: string[];
  revenueDelta: MoneyRange;
  model: OpportunityModel;
  confidence: Confidence;
};

export type CombinedOpportunity = {
  id: CombinedOpportunityId;
  signalIds: [SignalId, SignalId];
  combinedSignal: Signal;
  name: string;
  summary: string;
  detail: string;
  assumptions: string[];
  revenueDelta: MoneyRange;
  model: OpportunityModel;
  confidence: Confidence;
};

export type NamedLogo = {
  name: string;
  logo: string;
};

export type InternalAuditSignal = {
  id: string;
  title: string;
  summary: string;
  sources: NamedLogo[];
};

export type InternalAuditReportPoint = {
  date: string;
  values: Record<string, number>;
  profitRatio?: Record<string, number>;
};

export type InternalAuditReportCategory = {
  key: string;
  label: string;
  color: string;
};

export type InternalAuditReport = {
  id: string;
  title: string;
  subtitle: string;
  rangeLabel: string;
  xLabel: string;
  yLabel: string;
  legendLabel: string;
  categories: InternalAuditReportCategory[];
  data: InternalAuditReportPoint[];
  yMax?: number;
};

export type InternalAuditQuadrantPoint = {
  id: string;
  label: string;
  x: number;
  y: number;
  color: string;
};

export type InternalAuditQuadrantChart = {
  id: string;
  title: string;
  subtitle: string;
  xLabel: string;
  yLabel: string;
  xMid: number;
  yMid: number;
  points: InternalAuditQuadrantPoint[];
};
