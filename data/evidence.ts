import type { Signal, Opportunity, SignalTheme, CombinedOpportunity } from "./types";
import { signals } from "./market-audit";
import { opportunities } from "./opportunities";
import { combinedOpportunities } from "./combined-opportunities";

export type EvidenceSource = {
  id: string;
  domain: string;
  signal: string;
  metric: string;
  window: string;
  note: string;
  provider: string;
  coverage: string;
};

export type DecisionNote = {
  id: string;
  title: string;
  details: string;
};

export type RawRow = {
  id: string;
  date: string;
  region: string;
  source: string;
  metric: string;
  value: string;
};

export type LineageStep = {
  id: string;
  stage: string;
  input: string;
  output: string;
  rule: string;
};

export type OpportunityDriver = {
  id: string;
  factor: string;
  direction: "Up" | "Down" | "Mixed";
  weight: string;
  note: string;
};

export type EvidencePack = {
  sources: EvidenceSource[];
  reasons: DecisionNote[];
  lineage: LineageStep[];
  raw: RawRow[];
};

export type OpportunityEvidencePack = {
  shared: EvidencePack;
  opportunity: EvidencePack;
  drivers: OpportunityDriver[];
};

const emptyPack: EvidencePack = {
  sources: [],
  reasons: [],
  lineage: [],
  raw: []
};

const hashString = (value: string) => {
  // Deterministic tiny hash for stable dummy values.
  let hash = 2166136261;
  for (let i = 0; i < value.length; i++) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
};

const pickFrom = <T,>(items: T[], seed: number, count: number) => {
  const picked: T[] = [];
  if (items.length === 0) return picked;
  for (let i = 0; i < count; i++) {
    const index = (seed + i * 97) % items.length;
    picked.push(items[index]);
  }
  return picked;
};

const makeDate = (seed: number, index: number) => {
  // Dates are illustrative, not "current" data; keep them recent-ish and stable.
  const base = new Date();
  const monthOffset = (seed % 6) + Math.floor(index / 4);
  const day = ((seed % 23) + 1 + index * 2) % 28;
  const date = new Date(base.getFullYear(), base.getMonth() - monthOffset, day + 1);
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${mm}-${dd}`;
};

const themeSources: Record<SignalTheme, Omit<EvidenceSource, "id">[]> = {
  platform: [
    {
      domain: "CTV platform reporting",
      signal: "Cross-platform dedupe gaps and reconciliation variance",
      metric: "deduped reach delta",
      window: "Rolling 8 weeks",
      note: "Variance between publisher-native and independent counts creates billing friction.",
      provider: "Partner APIs",
      coverage: "US, CA, UK"
    },
    {
      domain: "Agency workflow telemetry",
      signal: "Reconciliation cycle time growth",
      metric: "days to post-buy signoff",
      window: "Last 6 months",
      note: "Longer cycles correlate with dispute rate and delayed invoicing.",
      provider: "Agency ops survey",
      coverage: "Top holding companies"
    },
    {
      domain: "Buy-side adoption",
      signal: "API-based measurement demand",
      metric: "API call volume index",
      window: "Rolling 90 days",
      note: "Growth indicates shift toward operational measurement inputs.",
      provider: "Nielsen sandbox logs (synthetic)",
      coverage: "Global"
    }
  ],
  pricing: [
    {
      domain: "Procurement benchmarks",
      signal: "Shift to tiered vendor contracts and governance premiums",
      metric: "contract tier mix",
      window: "Last 4 quarters",
      note: "Premium tiers correlate with auditability and SLA language.",
      provider: "Deal desk anonymized",
      coverage: "Enterprise"
    },
    {
      domain: "RMN buy-side feedback",
      signal: "Demand for cross-retailer comparability",
      metric: "standardization requests",
      window: "Last 2 quarters",
      note: "Procurement prefers standardized scorecards over bespoke dashboards.",
      provider: "Agency interviews",
      coverage: "US, EU"
    },
    {
      domain: "Renewals",
      signal: "Upsell conversion when governance artifacts are offered",
      metric: "attach uplift",
      window: "Last 12 months",
      note: "Audit packets materially improve renewal confidence in complex deals.",
      provider: "CRM notes (synthetic)",
      coverage: "Global"
    }
  ],
  audience: [
    {
      domain: "Audience fragmentation",
      signal: "Cohort shift across platforms",
      metric: "cohort reach index",
      window: "Rolling 13 weeks",
      note: "Younger cohorts show higher multi-platform duplication and volatility.",
      provider: "Panel + modeled blend (synthetic)",
      coverage: "US"
    },
    {
      domain: "Attention studies",
      signal: "Quality-of-exposure variation by placement",
      metric: "viewable seconds proxy",
      window: "Rolling 60 days",
      note: "Placement context drives large variance even when impressions are similar.",
      provider: "Research sample (synthetic)",
      coverage: "US, UK"
    },
    {
      domain: "Engagement diagnostics",
      signal: "Frequency waste concentration",
      metric: "overserve share",
      window: "Last 8 weeks",
      note: "A small share of users receive a disproportionate share of impressions.",
      provider: "Log-level aggregation (synthetic)",
      coverage: "US"
    }
  ],
  macro: [
    {
      domain: "Macro indicators",
      signal: "Budget reallocation volatility",
      metric: "weekly spend variance",
      window: "Last 26 weeks",
      note: "Higher variance increases demand for timelier diagnostics and scenario guidance.",
      provider: "Industry index (synthetic)",
      coverage: "US, EU"
    },
    {
      domain: "Client churn risk",
      signal: "Renewal risk increases with delayed insights",
      metric: "risk score",
      window: "Last 4 quarters",
      note: "Accounts with slower cadence have higher dispute and churn likelihood.",
      provider: "Account health model (synthetic)",
      coverage: "Global"
    },
    {
      domain: "Planning cycles",
      signal: "Quarter-end governance pressure",
      metric: "exec reporting requests",
      window: "Quarter-end weeks",
      note: "Demand peaks around finance and procurement cycles.",
      provider: "Support ticket tags (synthetic)",
      coverage: "Global"
    }
  ],
  content: [
    {
      domain: "Content metadata",
      signal: "Contextual targeting effectiveness",
      metric: "brand suitability pass rate",
      window: "Rolling 90 days",
      note: "Metadata quality increases usable supply and reduces adjacency incidents.",
      provider: "Metadata pipeline (synthetic)",
      coverage: "US, EU"
    },
    {
      domain: "FAST catalogs",
      signal: "Inventory growth and taxonomy drift",
      metric: "catalog size index",
      window: "Last 6 months",
      note: "Catalog growth increases need for standardized taxonomies and reporting.",
      provider: "Publisher submissions (synthetic)",
      coverage: "US"
    },
    {
      domain: "Sports rights",
      signal: "Fragmentation across carriers",
      metric: "rights distribution count",
      window: "Last 2 seasons",
      note: "More carriers increase dedupe and reconciliation complexity.",
      provider: "Rights tracker (synthetic)",
      coverage: "US"
    }
  ],
  competition: [
    {
      domain: "Vendor landscape",
      signal: "Proliferation of point solutions",
      metric: "tool count per account",
      window: "Last 12 months",
      note: "More vendors increases desire for consolidation and governance.",
      provider: "Procurement notes (synthetic)",
      coverage: "Enterprise"
    },
    {
      domain: "Platform reporting",
      signal: "Black-box measurement skepticism",
      metric: "verification demand index",
      window: "Rolling 6 months",
      note: "Independent verification demand rises as budgets move cross-platform.",
      provider: "Agency survey (synthetic)",
      coverage: "Global"
    },
    {
      domain: "Ad fraud",
      signal: "IVT pressure on premium buys",
      metric: "IVT incident rate",
      window: "Rolling 90 days",
      note: "Incidents increase procurement’s emphasis on governance and certification.",
      provider: "Risk feed (synthetic)",
      coverage: "US"
    }
  ],
  regulatory: [
    {
      domain: "Privacy and AI governance",
      signal: "Demand for explainability and documentation",
      metric: "governance requests",
      window: "Last 2 quarters",
      note: "Teams require artifacts that separate observed vs. modeled signals.",
      provider: "Legal/procurement interviews (synthetic)",
      coverage: "US, EU"
    },
    {
      domain: "Data localization",
      signal: "Regional deployment requirements",
      metric: "region-specific controls count",
      window: "Last 12 months",
      note: "Local controls increase time-to-value without standardized templates.",
      provider: "Compliance tracker (synthetic)",
      coverage: "EU, APAC"
    },
    {
      domain: "Brand safety",
      signal: "Suitability incidents",
      metric: "incident volume",
      window: "Rolling 60 days",
      note: "Incident spikes correlate with increased demand for monitoring and audit trails.",
      provider: "Incident logs (synthetic)",
      coverage: "Global"
    }
  ],
  regional: [
    {
      domain: "Regional market dynamics",
      signal: "Platform adoption outpaces panel infrastructure",
      metric: "streaming penetration index",
      window: "Last 12 months",
      note: "Hybrid measurement is needed where panel scale is limited.",
      provider: "Market tracker (synthetic)",
      coverage: "LATAM, SEA"
    },
    {
      domain: "Localization requirements",
      signal: "Data residency and reporting variants",
      metric: "deployment variant count",
      window: "Last 4 quarters",
      note: "Global comparability requires stable definitions + local deployment playbooks.",
      provider: "Implementation tracker (synthetic)",
      coverage: "Global"
    },
    {
      domain: "Seasonality",
      signal: "Election and holiday spend spikes",
      metric: "weekly spend index",
      window: "Peak windows",
      note: "High spikes require pacing diagnostics and faster reconciliation.",
      provider: "Spend index (synthetic)",
      coverage: "US"
    }
  ],
  creator: [
    {
      domain: "Creator commerce",
      signal: "Affiliate and shoppable adoption",
      metric: "shoppable program count",
      window: "Last 2 quarters",
      note: "Commerce teams demand outcomes linkage and governance for scaling spend.",
      provider: "Program tracker (synthetic)",
      coverage: "US, EU"
    },
    {
      domain: "Creator content dynamics",
      signal: "Short-cycle signal shifts",
      metric: "topic velocity",
      window: "Rolling 30 days",
      note: "Fast shifts increase need for frequent reporting and decision notes.",
      provider: "Content signals (synthetic)",
      coverage: "Global"
    },
    {
      domain: "Measurement buyer behavior",
      signal: "Outcome-based negotiation language growth",
      metric: "contract language tags",
      window: "Last 12 months",
      note: "Shift from CPM to incrementality language creates demand for outcome tooling.",
      provider: "Deal desk (synthetic)",
      coverage: "Enterprise"
    }
  ],
  hardware: [
    {
      domain: "Device ecosystem",
      signal: "Increased variant-level delivery complexity",
      metric: "creative variants per campaign",
      window: "Rolling 8 weeks",
      note: "Variant explosion increases need for summarization and governance.",
      provider: "Campaign telemetry (synthetic)",
      coverage: "US"
    },
    {
      domain: "Network conditions",
      signal: "Latency constraints for near-real-time reporting",
      metric: "delivery lag",
      window: "Rolling 30 days",
      note: "Latency impacts ability to optimize mid-flight.",
      provider: "Pipeline metrics (synthetic)",
      coverage: "Global"
    },
    {
      domain: "Privacy tech",
      signal: "Ad tech shifting to contextual and first-party IDs",
      metric: "ID mix index",
      window: "Last 6 months",
      note: "Changes increase pressure for transparent measurement methods.",
      provider: "Industry feed (synthetic)",
      coverage: "US, EU"
    }
  ]
};

const makeSignalPack = (signal: Signal): EvidencePack => {
  const seed = hashString(signal.id);
  const sourcesBase = themeSources[signal.theme] ?? themeSources.platform;
  const sources = pickFrom(sourcesBase, seed, 3).map((source, index) => ({
    id: `${signal.id}-source-${index + 1}`,
    ...source
  }));

  const reasons: DecisionNote[] = [
    {
      id: `${signal.id}-reason-1`,
      title: "Board-level relevance",
      details:
        "The shift affects currency trust, comparability, or procurement governance — which directly changes renewal risk and pricing power."
    },
    {
      id: `${signal.id}-reason-2`,
      title: "Near-term decision window",
      details:
        "Signals move quickly enough to matter in the next planning/renewal cycle, not just as a long-term thesis."
    }
  ];

  const lineage: LineageStep[] = [
    {
      id: `${signal.id}-lineage-1`,
      stage: "Normalize signals",
      input: "Partner and panel inputs (mixed cadence)",
      output: "Weekly normalized indices",
      rule: "Winsorize outliers; align to weekly buckets; standardize by baseline period"
    },
    {
      id: `${signal.id}-lineage-2`,
      stage: "Detect movement",
      input: "Weekly indices",
      output: "Change points and volatility flags",
      rule: "Change-point heuristic + rolling z-score threshold (synthetic)"
    }
  ];

  const regions = ["US", "EU", "UK", "CA", "LATAM", "APAC"];
  const metrics = ["Index", "Volatility", "Adoption", "DisputeRate", "Coverage"];
  const raw: RawRow[] = Array.from({ length: 8 }).map((_, index) => {
    const region = regions[(seed + index) % regions.length];
    const metric = metrics[(seed + index * 3) % metrics.length];
    const value = Number(80 + ((seed % 17) * 3) + index * 2 + ((seed >>> 3) % 9)).toFixed(1);
    return {
      id: `${signal.id}-raw-${index + 1}`,
      date: makeDate(seed, index),
      region,
      source: sources[index % sources.length]?.domain ?? "Synthetic source",
      metric,
      value
    };
  });

  return { sources, reasons, lineage, raw };
};

const makeOpportunityPack = (
  opportunity: Opportunity | CombinedOpportunity
): OpportunityEvidencePack => {
  const seed = hashString(opportunity.id);
  const shared: EvidencePack = {
    sources: [
      {
        id: `${opportunity.id}-shared-source-1`,
        domain: "Client contract and renewal signals",
        signal: "Expansion likelihood under procurement scrutiny",
        metric: "attach and renewal uplift proxy",
        window: "Last 4 quarters",
        note: "Governance artifacts and timeliness correlate with retention and attach.",
        provider: "CRM tags (synthetic)",
        coverage: "Enterprise"
      }
    ],
    reasons: [
      {
        id: `${opportunity.id}-shared-reason-1`,
        title: "Why this maps to revenue",
        details:
          "The opportunity converts operational pain (reconciliation, governance, latency) into a paid module or tier, increasing net price and attach."
      }
    ],
    lineage: [
      {
        id: `${opportunity.id}-shared-lineage-1`,
        stage: "Map drivers",
        input: "Signal + buyer workflow constraints",
        output: "Units/price/attach/ARPPU driver deltas",
        rule: "Translate workflow value into contract and usage levers (synthetic)"
      }
    ],
    raw: Array.from({ length: 4 }).map((_, index) => ({
      id: `${opportunity.id}-shared-raw-${index + 1}`,
      date: makeDate(seed, index),
      region: ["US", "EU", "UK", "CA"][(seed + index) % 4],
      source: "Sales ops (synthetic)",
      metric: ["RenewalRisk", "AttachRate", "CycleTime", "DisputeRate"][(seed + index) % 4],
      value: Number(10 + ((seed % 13) * 1.7) + index * 0.8).toFixed(2)
    }))
  };

  const opportunitySources: EvidenceSource[] = [
    {
      id: `${opportunity.id}-opp-source-1`,
      domain: "Partner delivery and reporting logs",
      signal: "Latency and reconciliation overhead",
      metric: "hours to publish / disputes",
      window: "Rolling 8 weeks",
      note: "Operational friction increases willingness to pay for SLAs and audit trails.",
      provider: "Ops telemetry (synthetic)",
      coverage: "Enterprise"
    },
    {
      id: `${opportunity.id}-opp-source-2`,
      domain: "Buyer interviews",
      signal: "Governance and procurement requirements",
      metric: "required artifacts count",
      window: "Last 2 quarters",
      note: "Demand clusters around auditability, portability, and comparable definitions.",
      provider: "Qual research (synthetic)",
      coverage: "US, EU"
    }
  ];

  const opportunityLineage: LineageStep[] = [
    {
      id: `${opportunity.id}-opp-lineage-1`,
      stage: "Assemble dataset",
      input: "Partner + client signals (synthetic)",
      output: "Normalized weekly inputs",
      rule: "Align cadence; standardize to baseline; cap outliers"
    },
    {
      id: `${opportunity.id}-opp-lineage-2`,
      stage: "Compute driver deltas",
      input: "Normalized inputs",
      output: "Driver movement (units/price/attach/arppu)",
      rule: "Map signal changes to commercial levers; apply confidence weights"
    }
  ];

  const metrics = ["UnitConversion", "PriceMix", "AttachExpansion", "ARPPUUsage", "Confidence"];
  const opportunityRaw: RawRow[] = Array.from({ length: 10 }).map((_, index) => {
    const metric = metrics[(seed + index) % metrics.length];
    const value =
      metric === "Confidence"
        ? ["Low", "Medium", "High"][(seed + index) % 3]
        : Number(100 + ((seed % 19) * 3) + index * 5).toFixed(1);
    return {
      id: `${opportunity.id}-opp-raw-${index + 1}`,
      date: makeDate(seed, index + 2),
      region: ["US", "EU", "UK", "CA", "LATAM", "APAC"][(seed + index * 2) % 6],
      source: ["CTV logs", "Retail clean room", "Publisher reports", "Agency ops", "Panel blend"][
        (seed + index) % 5
      ],
      metric,
      value
    };
  });

  const drivers: OpportunityDriver[] = [
    {
      id: `${opportunity.id}-driver-1`,
      factor: "Governance (auditability, lineage, portability)",
      direction: "Up",
      weight: `+${(0.18 + ((seed % 7) * 0.02)).toFixed(2)}`,
      note: "Governance reduces procurement friction and dispute rates, supporting price/attach expansion."
    },
    {
      id: `${opportunity.id}-driver-2`,
      factor: "Timeliness (latency, pacing cadence)",
      direction: "Up",
      weight: `+${(0.14 + ((seed % 5) * 0.03)).toFixed(2)}`,
      note: "Faster readouts increase operational value and renewals during high-spend windows."
    },
    {
      id: `${opportunity.id}-driver-3`,
      factor: "Comparability (cross-platform definitions and dedupe)",
      direction: "Up",
      weight: `+${(0.16 + ((seed % 6) * 0.02)).toFixed(2)}`,
      note: "Comparable outputs enable consolidation and budget reallocation decisions."
    },
    {
      id: `${opportunity.id}-driver-4`,
      factor: "Integration complexity",
      direction: (seed % 4) === 0 ? "Mixed" : "Down",
      weight: `-${(0.08 + ((seed % 4) * 0.02)).toFixed(2)}`,
      note: "Integration effort can slow adoption; mitigation is templates and standardized connectors."
    }
  ];

  return {
    shared,
    opportunity: {
      sources: opportunitySources,
      reasons: [
        {
          id: `${opportunity.id}-opp-reason-1`,
          title: "Why now",
          details:
            "Buyer governance and comparability demands are rising; packaging auditability and operational signals turns urgency into pricing power."
        }
      ],
      lineage: opportunityLineage,
      raw: opportunityRaw
    },
    drivers
  };
};

export const signalEvidenceById: Record<string, EvidencePack> = Object.fromEntries(
  signals.map((signal) => [signal.id, makeSignalPack(signal)])
);

export const opportunityEvidenceById: Record<string, OpportunityEvidencePack> = Object.fromEntries(
  opportunities.map((opportunity) => [opportunity.id, makeOpportunityPack(opportunity)])
);

export const combinedOpportunityEvidenceById: Record<string, OpportunityEvidencePack> =
  Object.fromEntries(
    combinedOpportunities.map((opportunity) => [opportunity.id, makeOpportunityPack(opportunity)])
  );

export const buildSignalEvidence = (signal: Signal): EvidencePack => {
  return signalEvidenceById[signal.id] ?? emptyPack;
};

export const buildOpportunityEvidence = (
  _signal: Signal,
  opportunity: Opportunity
): OpportunityEvidencePack => {
  return opportunityEvidenceById[opportunity.id] ?? {
    shared: emptyPack,
    opportunity: emptyPack,
    drivers: []
  };
};

export const buildCombinedOpportunityEvidence = (
  _combinedSignal: Signal,
  opportunity: CombinedOpportunity
): OpportunityEvidencePack => {
  return combinedOpportunityEvidenceById[opportunity.id] ?? {
    shared: emptyPack,
    opportunity: emptyPack,
    drivers: []
  };
};

// Optional: theme-level driver pool can be defined when real evidence is added.
