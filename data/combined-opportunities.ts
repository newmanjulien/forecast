import type { CombinedOpportunity, CombinedOpportunityId, SignalId } from "./types";

export const combinedOpportunities: CombinedOpportunity[] = [
  {
    id: "combined-opportunity-001" as CombinedOpportunityId,
    signalIds: ["signal-01" as SignalId, "signal-02" as SignalId],
    combinedSignal: {
      id: "signal-01" as SignalId,
      title: "CTV Currency + Retail Media: One Cross-Channel Outcomes Layer",
      summary:
        "As CTV currency fragments and retail media demands standardization, the board-level opportunity is a single outcomes layer that reconciles across publishers and retailers without identity overreach.",
      theme: "platform"
    },
    name: "Launch a Cross-Channel Outcomes Currency (CTV + RMN) for Top Advertisers",
    summary: "Bundle reconciliation, incrementality, and governance into a single enterprise tier.",
    detail:
      "A unified outcomes currency that spans CTV and RMN lets procurement buy comparability instead of bespoke dashboards. Nielsen can package deduped reach, closed-loop incrementality, and audit trails into one tier, positioned as reducing waste and accelerating finance-approved reallocations.",
    assumptions: [
      "Top advertisers want one governed outcomes view across CTV and RMN.",
      "Clean-room-safe joins cover most closed-loop needs.",
      "Bundling reduces procurement friction versus multiple point solutions.",
      "Nielsen can maintain methodology consistency across partners."
    ],
    revenueDelta: [14, 32],
    model: {
      inputs: {
        baseUnits: 120,
        baseNetPrice: 2_400_000,
        baseAttachRate: 0.32,
        baseDlcPrice: 500_000,
        baseArppu: 350_000,
        activeRate: 0.6
      },
      baselineRevenue: 360_840_000,
      opportunityRevenue: [374_840_000, 392_840_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: enterprise consolidation wins for cross-channel outcomes",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 6,
          high: 12,
          assumption: "Win consolidation deals where clients replace multiple vendors with one outcomes layer."
        },
        {
          kind: "attach",
          label: "Attach expansion: clean-room connectors and reconciliation modules",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 4,
          high: 10,
          assumption: "Attach connectors and reconciliation as required infrastructure across RMNs and publishers."
        },
        {
          kind: "price",
          label: "Price mix: premium for finance-grade outcomes governance",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 4,
          high: 10,
          assumption: "Charge premium for auditability, comparability, and board-ready scenario outputs."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "120", opportunity: "126", delta: "+6", confidence: "Medium" },
        { driver: "Net price", baseline: "$2.40M", opportunity: "$2.44M", delta: "+$0.04M", confidence: "High" },
        { driver: "Attach rate", baseline: "32%", opportunity: "34%", delta: "+2 pts", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.35M", opportunity: "$0.35M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "High"
  },
  {
    id: "combined-opportunity-002" as CombinedOpportunityId,
    signalIds: ["signal-01" as SignalId, "signal-02" as SignalId],
    combinedSignal: {
      id: "signal-01" as SignalId,
      title: "CTV Currency + Retail Media: Comparable Incrementality as Default",
      summary:
        "CTV reconciliation pain and RMN comparability demands converge on one requirement: incrementality that is comparable, explainable, and auditable.",
      theme: "pricing"
    },
    name: "Sell Comparable Incrementality Scorecards for CTV + RMN Spend",
    summary: "Create a standard scorecard that procurement can enforce across both channels.",
    detail:
      "If incrementality scorecards are comparable across RMNs and CTV publishers, procurement can treat outcomes as governed. Nielsen can sell a standardized scorecard with sensitivity bands and lineage, then attach it broadly at renewal.",
    assumptions: [
      "Procurement wants comparability more than bespoke channel dashboards.",
      "Scorecard templates can cover most deal structures.",
      "Audit artifacts reduce disputes and improve renewal rates.",
      "Teams adopt scorecards if they enable faster budget decisions."
    ],
    revenueDelta: [10, 24],
    model: {
      inputs: {
        baseUnits: 160,
        baseNetPrice: 1_700_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 450_000,
        baseArppu: 280_000,
        activeRate: 0.6
      },
      baselineRevenue: 350_400_000,
      opportunityRevenue: [360_400_000, 374_400_000],
      lines: [
        {
          kind: "attach",
          label: "Attach expansion: scorecard module for CTV and RMN",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 4,
          high: 9,
          assumption: "Attach scorecards as a governance requirement for both channels."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring refreshes and executive readouts",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 8,
          assumption: "Refresh cadence aligns to planning cycles and quarter closes."
        },
        {
          kind: "price",
          label: "Price mix: premium for comparability and auditability",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 3,
          high: 7,
          assumption: "Charge premium for standardized definitions and audit trails."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "160", opportunity: "160", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.70M", opportunity: "$1.71M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "30%", opportunity: "31%", delta: "+1 pt", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.28M", opportunity: "$0.30M", delta: "+$0.02M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "combined-opportunity-003" as CombinedOpportunityId,
    signalIds: ["signal-01" as SignalId, "signal-02" as SignalId],
    combinedSignal: {
      id: "signal-01" as SignalId,
      title: "CTV + RMN: Executive Governance Packs as a Subscription",
      summary:
        "When measurement spans publishers and retailers, executives need one governed story. Governance packs become a recurring value moment.",
      theme: "competition"
    },
    name: "Create a Quarterly ‘Board Pack’ Subscription for Cross-Channel Outcomes",
    summary: "Sell executive-ready scenarios, audit notes, and decisions across CTV and RMN.",
    detail:
      "Nielsen can package quarterly board packs that summarize cross-channel outcomes, key risks, and scenario deltas with clear assumptions and lineage. This makes measurement visible to executives and hard to replace.",
    assumptions: [
      "Enterprises will pay for consistent executive reporting.",
      "Board packs can be standardized and produced with leverage.",
      "Decision notes reduce internal re-litigation of measurement.",
      "Packs pull-through modules like connectors and reconciliation."
    ],
    revenueDelta: [8, 18],
    model: {
      inputs: {
        baseUnits: 200,
        baseNetPrice: 1_250_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 300_000,
        baseArppu: 240_000,
        activeRate: 0.6
      },
      baselineRevenue: 311_200_000,
      opportunityRevenue: [319_200_000, 329_200_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: quarterly board packs and workshops",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 4,
          high: 9,
          assumption: "Quarterly cadence creates recurring executive reporting revenue."
        },
        {
          kind: "price",
          label: "Price mix: premium for executive governance tier",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 5,
          assumption: "Charge modest premium for executive-ready packaging and governance artifacts."
        },
        {
          kind: "units",
          label: "Unit expansion: expand footprint into finance-led stakeholders",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 4,
          assumption: "Add stakeholders and win incremental governance subscriptions."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "200", opportunity: "202", delta: "+2", confidence: "Low" },
        { driver: "Net price", baseline: "$1.25M", opportunity: "$1.26M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "30%", opportunity: "30%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.24M", opportunity: "$0.25M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "combined-opportunity-004" as CombinedOpportunityId,
    signalIds: ["signal-03" as SignalId, "signal-04" as SignalId],
    combinedSignal: {
      id: "signal-03" as SignalId,
      title: "Attention + Identity: Outcomes That Survive Governance",
      summary:
        "Attention metrics and identity changes converge on one requirement: explainable, audit-ready outcomes that finance and procurement accept.",
      theme: "audience"
    },
    name: "Offer Attention-Weighted, Identity-Safe Outcomes as a Premium Tier",
    summary: "Bundle attention weighting with explainable linkage and confidence bands.",
    detail:
      "This combined tier positions Nielsen as the vendor that can quantify impact without overreaching on identity: attention-weighted exposure, modeled linkage with explainability, and governance artifacts that reduce disputes.",
    assumptions: [
      "Buyers will pay for outcomes when methodology is explainable.",
      "Attention weighting is adopted only if auditability is strong.",
      "Clean-room safe workflows cover most outcome linkage needs.",
      "Bundling reduces procurement friction compared to point solutions."
    ],
    revenueDelta: [12, 26],
    model: {
      inputs: {
        baseUnits: 140,
        baseNetPrice: 1_900_000,
        baseAttachRate: 0.28,
        baseDlcPrice: 450_000,
        baseArppu: 280_000,
        activeRate: 0.6
      },
      baselineRevenue: 328_520_000,
      opportunityRevenue: [340_520_000, 354_520_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: premium for attention-weighted outcomes tier",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 5,
          high: 10,
          assumption: "Charge premium for attention-weighted outputs and governance-ready documentation."
        },
        {
          kind: "attach",
          label: "Attach expansion: explainable linkage and audit module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 3,
          high: 7,
          assumption: "Attach explainability where identity governance is a gating requirement."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring sensitivity and coverage diagnostics",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 4,
          high: 9,
          assumption: "Diagnostics repeat across quarters and major campaigns."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "140", opportunity: "140", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.90M", opportunity: "$1.94M", delta: "+$0.04M", confidence: "High" },
        { driver: "Attach rate", baseline: "28%", opportunity: "29%", delta: "+1 pt", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.28M", opportunity: "$0.30M", delta: "+$0.02M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "combined-opportunity-005" as CombinedOpportunityId,
    signalIds: ["signal-03" as SignalId, "signal-04" as SignalId],
    combinedSignal: {
      id: "signal-03" as SignalId,
      title: "Attention + PPIDs: Operational Signals Inside Buying Tools",
      summary:
        "Attention becomes real when it is operational and identity-safe. PPID interoperability is the pipe; attention is the optimization signal.",
      theme: "platform"
    },
    name: "Ship a PPID-Safe Attention API for DSP and Planning Workflows",
    summary: "Embed ‘measurement-grade attention’ into buying tools without identity overreach.",
    detail:
      "Nielsen can provide an API that delivers attention-weighted signals and comparable outputs across PPID stacks, priced on usage and paired with governance artifacts for procurement.",
    assumptions: [
      "DSPs will integrate if signals are stable and defensible.",
      "PPID interoperability reduces friction across publishers.",
      "Usage-based pricing scales with adoption and spend velocity.",
      "Governance artifacts reduce partner objections."
    ],
    revenueDelta: [8, 18],
    model: {
      inputs: {
        baseUnits: 120,
        baseNetPrice: 1_400_000,
        baseAttachRate: 0.25,
        baseDlcPrice: 300_000,
        baseArppu: 260_000,
        activeRate: 0.7
      },
      baselineRevenue: 224_400_000,
      opportunityRevenue: [232_400_000, 242_400_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: metered attention API usage",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 4,
          high: 9,
          assumption: "API calls scale with optimization cadence and partner adoption."
        },
        {
          kind: "attach",
          label: "Attach expansion: PPID interoperability module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach interoperability as a required layer for comparable outputs across publishers."
        },
        {
          kind: "units",
          label: "Unit expansion: new platform partners adopt the API layer",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 4,
          assumption: "Win incremental partners that buy Nielsen as infrastructure."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "120", opportunity: "122", delta: "+2", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.40M", opportunity: "$1.40M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "25%", opportunity: "26%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.26M", opportunity: "$0.28M", delta: "+$0.02M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "combined-opportunity-006" as CombinedOpportunityId,
    signalIds: ["signal-03" as SignalId, "signal-04" as SignalId],
    combinedSignal: {
      id: "signal-03" as SignalId,
      title: "Attention + Identity: Audit Pack as a Product",
      summary:
        "New metrics only survive procurement if they are explainable. Attention + identity needs audit artifacts by default.",
      theme: "regulatory"
    },
    name: "Sell an ‘Audit-Ready New Metrics’ Pack for Attention + Identity Products",
    summary: "Standardize methodology explainers, lineage, and sensitivity ranges.",
    detail:
      "Nielsen can attach an audit-ready pack that documents how attention signals are produced, how identity-safe linkage works, what is modeled vs. observed, and the sensitivity ranges that governance teams expect.",
    assumptions: [
      "Procurement requires documentation for new metrics.",
      "Audit packets can be templatized.",
      "Auditability reduces churn and disputes.",
      "Audit packs increase attach of attention products."
    ],
    revenueDelta: [6, 14],
    model: {
      inputs: {
        baseUnits: 200,
        baseNetPrice: 1_250_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 250_000,
        baseArppu: 220_000,
        activeRate: 0.6
      },
      baselineRevenue: 309_200_000,
      opportunityRevenue: [315_200_000, 323_200_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: premium for audit-ready documentation",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 3,
          high: 7,
          assumption: "Charge premium for standardized methodology and governance artifacts."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring governance reviews and workshops",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 5,
          assumption: "Workshops repeat during audits, renewals, and major campaign periods."
        },
        {
          kind: "attach",
          label: "Attach expansion: lineage and sensitivity module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 2,
          assumption: "Attach lineage as a lightweight module to formalize the governance tier."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "200", opportunity: "200", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.25M", opportunity: "$1.26M", delta: "+$0.01M", confidence: "High" },
        { driver: "Attach rate", baseline: "30%", opportunity: "31%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.22M", opportunity: "$0.23M", delta: "+$0.01M", confidence: "Medium" }
      ]
    },
    confidence: "High"
  },
  {
    id: "combined-opportunity-007" as CombinedOpportunityId,
    signalIds: ["signal-05" as SignalId, "signal-06" as SignalId],
    combinedSignal: {
      id: "signal-05" as SignalId,
      title: "GenAI Supply Risk + FAST Growth: Make FAST Procurement-Safe",
      summary:
        "FAST growth plus synthetic supply risk increases the need for verification, suitability, and supply quality scoring in TV-like inventory.",
      theme: "competition"
    },
    name: "Create a FAST Supply Quality Certification Bundle",
    summary: "Bundle FAST measurement with supply quality scoring and verification artifacts.",
    detail:
      "Nielsen can certify FAST inventory with standardized quality signals, brand safety controls, and audit trails, enabling agencies to scale FAST budgets with lower reputational and fraud risk.",
    assumptions: [
      "FAST buyers will pay for procurement-ready supply quality signals.",
      "Publishers accept scoring if it expands premium demand.",
      "Certification criteria can be documented and stable.",
      "Bundle can be sold at renewal as a simple upgrade."
    ],
    revenueDelta: [9, 20],
    model: {
      inputs: {
        baseUnits: 160,
        baseNetPrice: 1_400_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 320_000,
        baseArppu: 200_000,
        activeRate: 0.55
      },
      baselineRevenue: 267_760_000,
      opportunityRevenue: [276_760_000, 287_760_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: certification wins new FAST contracts",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 3,
          high: 6,
          assumption: "Win incremental publisher and agency contracts by reducing procurement risk."
        },
        {
          kind: "attach",
          label: "Attach expansion: supply quality and verification modules",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 3,
          high: 7,
          assumption: "Attach quality modules as required governance controls."
        },
        {
          kind: "price",
          label: "Price mix: premium for certified reporting",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 3,
          high: 7,
          assumption: "Charge premium for certification and audit artifacts."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "160", opportunity: "163", delta: "+3", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.40M", opportunity: "$1.41M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "30%", opportunity: "31%", delta: "+1 pt", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.20M", opportunity: "$0.20M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "High"
  },
  {
    id: "combined-opportunity-008" as CombinedOpportunityId,
    signalIds: ["signal-05" as SignalId, "signal-06" as SignalId],
    combinedSignal: {
      id: "signal-05" as SignalId,
      title: "FAST Operations: IVT Fast-Fail + Ad Load Health",
      summary:
        "FAST needs low-latency controls to avoid waste and churn. IVT monitoring and ad load diagnostics together create an operational product surface.",
      theme: "platform"
    },
    name: "Offer Real-Time FAST Monitoring (IVT + Ad Load) as Usage-Based Add-On",
    summary: "Sell alerting and diagnostics that prevent waste and protect retention.",
    detail:
      "Nielsen can bundle fast-fail IVT monitoring with ad load/attention diagnostics to help publishers and buyers intervene mid-flight, priced on usage and refresh cadence.",
    assumptions: [
      "Teams will pay for low-latency monitoring that reduces waste.",
      "Alerting can avoid excessive false positives.",
      "Usage pricing scales with campaign volume.",
      "Monitoring increases stickiness by embedding in operations."
    ],
    revenueDelta: [7, 16],
    model: {
      inputs: {
        baseUnits: 140,
        baseNetPrice: 1_100_000,
        baseAttachRate: 0.25,
        baseDlcPrice: 280_000,
        baseArppu: 220_000,
        activeRate: 0.6
      },
      baselineRevenue: 199_800_000,
      opportunityRevenue: [206_800_000, 215_800_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: metered monitoring and alerting",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 4,
          high: 9,
          assumption: "Monitoring usage grows with always-on FAST campaigns."
        },
        {
          kind: "attach",
          label: "Attach expansion: monitoring module attached to FAST measurement",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach module to accounts buying FAST measurement and pacing."
        },
        {
          kind: "units",
          label: "Unit expansion: new operational buyers adopt monitoring",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 2,
          assumption: "Win incremental buyers that need operational controls."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "140", opportunity: "141", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$1.10M", opportunity: "$1.10M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "25%", opportunity: "26%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.22M", opportunity: "$0.24M", delta: "+$0.02M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "combined-opportunity-009" as CombinedOpportunityId,
    signalIds: ["signal-05" as SignalId, "signal-06" as SignalId],
    combinedSignal: {
      id: "signal-05" as SignalId,
      title: "FAST Context: Metadata + Suitability as the Monetization Engine",
      summary:
        "FAST becomes more valuable when context is strong. Metadata enables targeting and suitability controls without identity dependence.",
      theme: "content"
    },
    name: "Sell Metadata-Driven Contextual Targeting and Suitability for FAST",
    summary: "License metadata bundles and attach suitability reporting for FAST catalogs.",
    detail:
      "Nielsen can package FAST metadata (taxonomy, tone, suitability) as both a targeting enabler and a governance tool, helping publishers monetize more and buyers reduce risk.",
    assumptions: [
      "Metadata improves monetization enough that publishers will pay.",
      "Buyers value suitability controls for FAST procurement.",
      "APIs and coverage tiers enable scalable licensing economics.",
      "Contextual approach is resilient under identity constraints."
    ],
    revenueDelta: [8, 18],
    model: {
      inputs: {
        baseUnits: 180,
        baseNetPrice: 1_000_000,
        baseAttachRate: 0.28,
        baseDlcPrice: 250_000,
        baseArppu: 200_000,
        activeRate: 0.55
      },
      baselineRevenue: 248_700_000,
      opportunityRevenue: [256_700_000, 266_700_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: metadata licensing uplift for FAST catalogs",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 4,
          high: 9,
          assumption: "Charge contract uplift for richer metadata coverage and taxonomy."
        },
        {
          kind: "attach",
          label: "Attach expansion: suitability reporting module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 6,
          assumption: "Attach suitability reporting as procurement requires controls."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: API pulls and periodic audits",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 3,
          assumption: "API usage and audits repeat with campaign cadence."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "180", opportunity: "180", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.00M", opportunity: "$1.02M", delta: "+$0.02M", confidence: "High" },
        { driver: "Attach rate", baseline: "28%", opportunity: "29%", delta: "+1 pt", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.20M", opportunity: "$0.20M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "High"
  },
  {
    id: "combined-opportunity-010" as CombinedOpportunityId,
    signalIds: ["signal-07" as SignalId, "signal-08" as SignalId],
    combinedSignal: {
      id: "signal-07" as SignalId,
      title: "Sports + Gaming: Unified Sponsorship Outcomes",
      summary:
        "Sponsors increasingly buy across sports, esports, and gaming creators. A unified outcomes layer turns fragmented sponsorship reporting into comparable governance.",
      theme: "audience"
    },
    name: "Create a Unified Sponsorship Outcomes Package Across Sports and Gaming",
    summary: "Standardize reach and outcome reporting across live games, streams, and clips.",
    detail:
      "Nielsen can package sponsorship reporting that dedupes reach across sports and gaming surfaces and ties exposure to outcomes in a board-ready format, helping sponsors scale spend with confidence.",
    assumptions: [
      "Sponsors want comparability across sports and gaming properties.",
      "Outcome linkage is feasible in privacy-safe workflows.",
      "Standard templates reduce bespoke reporting costs.",
      "Unified reporting increases renewal confidence."
    ],
    revenueDelta: [8, 18],
    model: {
      inputs: {
        baseUnits: 110,
        baseNetPrice: 1_750_000,
        baseAttachRate: 0.25,
        baseDlcPrice: 350_000,
        baseArppu: 260_000,
        activeRate: 0.65
      },
      baselineRevenue: 252_012_500,
      opportunityRevenue: [260_012_500, 270_012_500],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: outcome studies and seasonal reports",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 7,
          assumption: "Studies repeat across seasons and sponsorship portfolios."
        },
        {
          kind: "units",
          label: "Unit expansion: new sponsorship measurement contracts",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 4,
          assumption: "Win incremental sponsors and agencies adopting unified reporting."
        },
        {
          kind: "price",
          label: "Price mix: premium for cross-surface comparability",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 3,
          high: 7,
          assumption: "Charge premium for comparable outputs across properties."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "110", opportunity: "112", delta: "+2", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.75M", opportunity: "$1.76M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "25%", opportunity: "25%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.26M", opportunity: "$0.27M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "combined-opportunity-011" as CombinedOpportunityId,
    signalIds: ["signal-07" as SignalId, "signal-08" as SignalId],
    combinedSignal: {
      id: "signal-07" as SignalId,
      title: "Live Events: Real-Time Reach Across Sports and Esports",
      summary:
        "Live windows matter in both sports and esports. Low-latency reach and pacing becomes a paid operational capability.",
      theme: "platform"
    },
    name: "Sell Real-Time Pacing Dashboards for Live Sports + Esports Windows",
    summary: "Offer low-latency cross-screen signals priced on usage.",
    detail:
      "Nielsen can offer real-time reach/frequency pacing across sports broadcasts and esports streams, enabling mid-flight intervention and reducing make-good risk.",
    assumptions: [
      "Live-event buyers will pay for low-latency reporting.",
      "Dashboards can be delivered with manageable operational overhead.",
      "Usage-based pricing aligns to event volume.",
      "Operational tools increase stickiness in agency workflows."
    ],
    revenueDelta: [7, 16],
    model: {
      inputs: {
        baseUnits: 120,
        baseNetPrice: 1_400_000,
        baseAttachRate: 0.25,
        baseDlcPrice: 300_000,
        baseArppu: 240_000,
        activeRate: 0.7
      },
      baselineRevenue: 245_400_000,
      opportunityRevenue: [252_400_000, 261_400_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: metered live-event pacing dashboards",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 4,
          high: 9,
          assumption: "Usage peaks during live windows with high spend velocity."
        },
        {
          kind: "attach",
          label: "Attach expansion: real-time reporting module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach module to accounts with recurring live-event buys."
        },
        {
          kind: "units",
          label: "Unit expansion: new event buyers adopt pacing",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 2,
          assumption: "Win incremental buyers who need operational controls."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "120", opportunity: "121", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$1.40M", opportunity: "$1.40M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "25%", opportunity: "26%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.24M", opportunity: "$0.26M", delta: "+$0.02M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "combined-opportunity-012" as CombinedOpportunityId,
    signalIds: ["signal-07" as SignalId, "signal-08" as SignalId],
    combinedSignal: {
      id: "signal-07" as SignalId,
      title: "Co-Viewing: Venues + Streams as One Audience",
      summary:
        "Group viewing and streaming co-viewing create hidden reach. A combined product quantifies it as incremental audience.",
      theme: "audience"
    },
    name: "Quantify Incremental Co-Viewing Reach Across Venues and Live Streams",
    summary: "Sell co-viewing visibility as a negotiation and valuation advantage.",
    detail:
      "Nielsen can quantify incremental co-viewing across venues and streams, giving rights holders and sponsors a defensible story for valuation and make-good decisions.",
    assumptions: [
      "Co-viewing is material enough to change sponsorship and rights economics.",
      "Methodology can be explained clearly enough for governance acceptance.",
      "Partners can supply venue and stream signals with stable coverage.",
      "Product can be sold as a module attached to sports reporting."
    ],
    revenueDelta: [6, 14],
    model: {
      inputs: {
        baseUnits: 110,
        baseNetPrice: 1_600_000,
        baseAttachRate: 0.25,
        baseDlcPrice: 300_000,
        baseArppu: 220_000,
        activeRate: 0.65
      },
      baselineRevenue: 224_925_000,
      opportunityRevenue: [230_925_000, 238_925_000],
      lines: [
        {
          kind: "attach",
          label: "Attach expansion: co-viewing measurement module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach module to accounts where co-viewing is central to valuation."
        },
        {
          kind: "units",
          label: "Unit expansion: new rights and sponsor accounts",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 4,
          assumption: "Win incremental accounts during rights negotiation cycles."
        },
        {
          kind: "price",
          label: "Price mix: premium for incremental reach defensibility",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 5,
          assumption: "Charge premium for board-credible incremental reach reporting."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "110", opportunity: "112", delta: "+2", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.60M", opportunity: "$1.61M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "25%", opportunity: "26%", delta: "+1 pt", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.22M", opportunity: "$0.22M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "High"
  },
  {
    id: "combined-opportunity-013" as CombinedOpportunityId,
    signalIds: ["signal-09" as SignalId, "signal-10" as SignalId],
    combinedSignal: {
      id: "signal-09" as SignalId,
      title: "Audio + Political: Cross-Local Pacing and Governance",
      summary:
        "Election cycles drive rapid spend shifts across local audio and video. A combined war-room product makes it governable.",
      theme: "regional"
    },
    name: "Sell an Election-Cycle War Room for Local Audio + Video",
    summary: "Bundle pacing, forecasting, and reconciliation across local channels.",
    detail:
      "Nielsen can package a war room subscription that covers local audio and video delivery, pacing diagnostics, and weekly executive summaries, priced on cadence and cycle intensity.",
    assumptions: [
      "Election-cycle stakeholders fund short-cycle reporting to reduce delivery risk.",
      "Local channel data can be harmonized with repeatable templates.",
      "Recurring cycles create predictable renewal motion.",
      "War room subscriptions pull-through year-round local measurement."
    ],
    revenueDelta: [6, 14],
    model: {
      inputs: {
        baseUnits: 90,
        baseNetPrice: 1_600_000,
        baseAttachRate: 0.28,
        baseDlcPrice: 250_000,
        baseArppu: 260_000,
        activeRate: 0.7
      },
      baselineRevenue: 177_050_000,
      opportunityRevenue: [183_050_000, 191_050_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: weekly war room reporting",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 7,
          assumption: "Weekly cadence drives recurring service revenue."
        },
        {
          kind: "units",
          label: "Unit expansion: new political and local buyers adopt war room",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 4,
          assumption: "Win incremental accounts needing pacing and reconciliation."
        },
        {
          kind: "attach",
          label: "Attach expansion: local cross-screen pacing module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 3,
          assumption: "Attach pacing module for high-volume election windows."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "90", opportunity: "92", delta: "+2", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.60M", opportunity: "$1.60M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "28%", opportunity: "29%", delta: "+1 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.26M", opportunity: "$0.27M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "combined-opportunity-014" as CombinedOpportunityId,
    signalIds: ["signal-09" as SignalId, "signal-10" as SignalId],
    combinedSignal: {
      id: "signal-09" as SignalId,
      title: "Audio + Political: Compliance and Suitability as a Pack",
      summary:
        "Political cycles increase adjacency risk. Audio and local channels need standardized suitability and compliance artifacts.",
      theme: "regulatory"
    },
    name: "Bundle Political Compliance + Suitability Reporting for Local Audio",
    summary: "Sell governance artifacts and incident workflows as an attach module.",
    detail:
      "Nielsen can package suitability controls and compliance reporting for political adjacency in local audio environments, positioned as risk reduction for boards and procurement.",
    assumptions: [
      "Brands will pay for governance when adjacency risk is highest.",
      "Taxonomy can be standardized without politicization.",
      "Templates keep delivery scalable.",
      "Pack attaches at renewal as a simple upgrade."
    ],
    revenueDelta: [5, 12],
    model: {
      inputs: {
        baseUnits: 140,
        baseNetPrice: 900_000,
        baseAttachRate: 0.28,
        baseDlcPrice: 220_000,
        baseArppu: 170_000,
        activeRate: 0.6
      },
      baselineRevenue: 149_296_000,
      opportunityRevenue: [154_296_000, 161_296_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: premium for compliance reporting",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 5,
          assumption: "Charge premium for governance artifacts required by procurement."
        },
        {
          kind: "attach",
          label: "Attach expansion: suitability and incident module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach suitability controls to accounts with strict governance."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: incident reviews during election windows",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 1,
          high: 2,
          assumption: "Incident reviews drive recurring fees during high-risk periods."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "140", opportunity: "140", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$0.90M", opportunity: "$0.91M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "28%", opportunity: "29%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.17M", opportunity: "$0.17M", delta: "+$0.00M", confidence: "Medium" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "combined-opportunity-015" as CombinedOpportunityId,
    signalIds: ["signal-09" as SignalId, "signal-10" as SignalId],
    combinedSignal: {
      id: "signal-09" as SignalId,
      title: "Audio + Local Politics: Forecasting Displacement as Decision Support",
      summary:
        "Political spend displaces inventory and shifts prices. Forecasting across local channels becomes a repeatable product surface.",
      theme: "macro"
    },
    name: "Sell Forecasting for Spend Displacement Across Local Audio and Video",
    summary: "Provide scenario deltas and pacing guardrails in one place.",
    detail:
      "Nielsen can forecast displacement and pricing pressure across local audio and video, then translate it into budget guardrails and scenario deltas that finance teams can action.",
    assumptions: [
      "Forecasts are valuable even if directionally accurate, not perfect.",
      "Recurring cycles create repeat demand.",
      "Scenario outputs reduce decision paralysis.",
      "Forecasting pulls-through war room subscriptions."
    ],
    revenueDelta: [4, 10],
    model: {
      inputs: {
        baseUnits: 90,
        baseNetPrice: 1_400_000,
        baseAttachRate: 0.25,
        baseDlcPrice: 200_000,
        baseArppu: 260_000,
        activeRate: 0.7
      },
      baselineRevenue: 157_380_000,
      opportunityRevenue: [161_380_000, 167_380_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring forecast refreshes",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 6,
          assumption: "Refresh cadence increases near election windows."
        },
        {
          kind: "price",
          label: "Price mix: premium for decision support",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 2,
          assumption: "Charge modest premium for scenario packs and governance artifacts."
        },
        {
          kind: "units",
          label: "Unit expansion: new clients adopt forecasting",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 2,
          assumption: "Win incremental accounts that previously relied on internal heuristics."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "90", opportunity: "91", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$1.40M", opportunity: "$1.40M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "25%", opportunity: "25%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.26M", opportunity: "$0.27M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "combined-opportunity-016" as CombinedOpportunityId,
    signalIds: ["signal-11" as SignalId, "signal-12" as SignalId],
    combinedSignal: {
      id: "signal-11" as SignalId,
      title: "Suitability + Emerging Markets: Global Taxonomy, Regional Reality",
      summary:
        "Emerging markets need cross-platform measurement without mature panels; suitability governance must travel globally with local nuance.",
      theme: "regional"
    },
    name: "Sell Global Suitability Taxonomy With Regional Deployment Playbooks",
    summary: "Standardize governance globally while honoring local content and regulation differences.",
    detail:
      "Nielsen can sell a global suitability taxonomy with regional deployment playbooks and validation, enabling multinational brands to buy with consistent controls across emerging markets.",
    assumptions: [
      "Multinationals value consistent governance across regions.",
      "Taxonomy can be localized without losing comparability.",
      "Validation checks prevent regional drift.",
      "Product attaches to existing measurement contracts."
    ],
    revenueDelta: [7, 16],
    model: {
      inputs: {
        baseUnits: 120,
        baseNetPrice: 1_500_000,
        baseAttachRate: 0.28,
        baseDlcPrice: 300_000,
        baseArppu: 200_000,
        activeRate: 0.6
      },
      baselineRevenue: 203_040_000,
      opportunityRevenue: [210_040_000, 219_040_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: premium for global governance consistency",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 3,
          high: 7,
          assumption: "Charge premium for standardized governance artifacts across regions."
        },
        {
          kind: "attach",
          label: "Attach expansion: regional suitability enforcement module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 6,
          assumption: "Attach enforcement as brands expand into additional regions."
        },
        {
          kind: "units",
          label: "Unit expansion: expand into multinational regional stakeholders",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 3,
          assumption: "Expand footprint within multinationals that require global controls."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "120", opportunity: "122", delta: "+2", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.50M", opportunity: "$1.51M", delta: "+$0.01M", confidence: "High" },
        { driver: "Attach rate", baseline: "28%", opportunity: "29%", delta: "+1 pt", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.20M", opportunity: "$0.20M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "High"
  },
  {
    id: "combined-opportunity-017" as CombinedOpportunityId,
    signalIds: ["signal-11" as SignalId, "signal-12" as SignalId],
    combinedSignal: {
      id: "signal-11" as SignalId,
      title: "Emerging Markets: Crisis Monitoring With Suitability Controls",
      summary:
        "Emerging markets can see sudden event-driven risk spikes. Crisis monitoring combined with suitability controls becomes a premium operational product.",
      theme: "regulatory"
    },
    name: "Offer Crisis Monitoring and Incident Response for Emerging Market Buys",
    summary: "Sell monitoring, incident workflows, and executive readouts as a premium tier.",
    detail:
      "Nielsen can package crisis monitoring with suitability taxonomy and incident response workflows, producing governance artifacts brands can use when headlines spike.",
    assumptions: [
      "Brands will pay for incident response in high-risk periods.",
      "Templates keep response scalable across markets.",
      "Monitoring improves renewal retention by reducing anxiety.",
      "Package attaches best to multinational governance accounts."
    ],
    revenueDelta: [5, 12],
    model: {
      inputs: {
        baseUnits: 110,
        baseNetPrice: 1_300_000,
        baseAttachRate: 0.25,
        baseDlcPrice: 250_000,
        baseArppu: 220_000,
        activeRate: 0.65
      },
      baselineRevenue: 178_812_500,
      opportunityRevenue: [183_812_500, 190_812_500],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: incident response and monitoring",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 7,
          assumption: "Incident response drives recurring services during high-risk periods."
        },
        {
          kind: "attach",
          label: "Attach expansion: monitoring module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 3,
          assumption: "Attach monitoring as an operational control for governance teams."
        },
        {
          kind: "price",
          label: "Price mix: premium for crisis-mode SLAs",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 2,
          assumption: "Charge premium for response-time SLAs and executive reporting."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "110", opportunity: "110", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.30M", opportunity: "$1.31M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "25%", opportunity: "26%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.22M", opportunity: "$0.23M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "combined-opportunity-018" as CombinedOpportunityId,
    signalIds: ["signal-11" as SignalId, "signal-12" as SignalId],
    combinedSignal: {
      id: "signal-11" as SignalId,
      title: "Safe Supply in New Markets: Certification + Hybrid Measurement",
      summary:
        "As currencies reset in emerging markets, ‘safe supply’ programs with credible measurement can become the default standard.",
      theme: "competition"
    },
    name: "Create a Partner-Certified ‘Safe Supply’ Program for Emerging Markets",
    summary: "Certify controls and measurement integrity with regional partners.",
    detail:
      "Nielsen can partner to certify safe supply and measurement integrity in emerging markets, helping buyers scale spend with lower risk and creating durable multi-year contracts.",
    assumptions: [
      "Regional partners can execute under Nielsen governance without quality drift.",
      "Certification reduces procurement friction and increases budget confidence.",
      "Hybrid measurement is acceptable if documented and auditable.",
      "Early wins create durable currency positions."
    ],
    revenueDelta: [6, 14],
    model: {
      inputs: {
        baseUnits: 120,
        baseNetPrice: 1_250_000,
        baseAttachRate: 0.25,
        baseDlcPrice: 300_000,
        baseArppu: 200_000,
        activeRate: 0.6
      },
      baselineRevenue: 190_000_000,
      opportunityRevenue: [196_000_000, 204_000_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: certification wins regional deployments",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 5,
          assumption: "Win incremental regional deployments during currency reset windows."
        },
        {
          kind: "attach",
          label: "Attach expansion: certification audit and validation module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach audits and validation as ongoing controls."
        },
        {
          kind: "price",
          label: "Price mix: premium for certified governance posture",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 4,
          assumption: "Charge premium for procurement-ready documentation and controls."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "120", opportunity: "122", delta: "+2", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.25M", opportunity: "$1.26M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "25%", opportunity: "26%", delta: "+1 pt", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.20M", opportunity: "$0.20M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "High"
  },
  {
    id: "combined-opportunity-019" as CombinedOpportunityId,
    signalIds: ["signal-13" as SignalId, "signal-14" as SignalId],
    combinedSignal: {
      id: "signal-13" as SignalId,
      title: "Outcomes + MMM: One Governance Layer for Finance",
      summary:
        "Incrementality demands and MMM resurgence converge on a single governance layer that reconciles experiments, MMM, and measurement into finance-grade decisions.",
      theme: "macro"
    },
    name: "Sell an Enterprise ‘Decision Governance’ Tier (MMM + Incrementality)",
    summary: "Bundle comparable outcomes, scenario deltas, and auditability into one tier.",
    detail:
      "Nielsen can offer a governance tier that reconciles MMM, experiments, and outcome measurement, producing scenario deltas with confidence bands and audit trails finance can accept.",
    assumptions: [
      "Enterprises will fund governance that reduces finance/marketing disputes.",
      "Scenario outputs are valued more than point estimates.",
      "Auditability is required for procurement approval.",
      "Tier can be sold at renewal as an upgrade."
    ],
    revenueDelta: [14, 34],
    model: {
      inputs: {
        baseUnits: 110,
        baseNetPrice: 2_600_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 600_000,
        baseArppu: 450_000,
        activeRate: 0.65
      },
      baselineRevenue: 360_175_000,
      opportunityRevenue: [374_175_000, 394_175_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: premium for finance-grade decision governance",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 6,
          high: 12,
          assumption: "Charge premium for reconciling competing truths into a single governance layer."
        },
        {
          kind: "attach",
          label: "Attach expansion: experiment calibration and audit modules",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 4,
          high: 10,
          assumption: "Attach calibration and audit modules as required controls."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring scenario refreshes and workshops",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 4,
          high: 12,
          assumption: "Quarterly refresh cycles create recurring executive workshops and analysis."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "110", opportunity: "110", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$2.60M", opportunity: "$2.66M", delta: "+$0.06M", confidence: "High" },
        { driver: "Attach rate", baseline: "30%", opportunity: "32%", delta: "+2 pts", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.45M", opportunity: "$0.47M", delta: "+$0.02M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "combined-opportunity-020" as CombinedOpportunityId,
    signalIds: ["signal-13" as SignalId, "signal-14" as SignalId],
    combinedSignal: {
      id: "signal-13" as SignalId,
      title: "Always-On Governance: Outcomes + MMM Refresh Cadence",
      summary:
        "Boards want repeatable governance rituals: monthly effectiveness shifts and quarterly scenario updates grounded in outcomes.",
      theme: "pricing"
    },
    name: "Sell Always-On Governance Subscriptions With Comparable Outcome Definitions",
    summary: "Move from one-off studies to recurring refreshes with confidence bands.",
    detail:
      "Nielsen can offer subscriptions that publish monthly MMM refreshes and quarterly outcome reconciliation, creating recurring value moments tied to budget reallocation.",
    assumptions: [
      "Recurring cadence increases willingness to pay versus annual models.",
      "Refreshes can be automated enough to scale.",
      "Comparable definitions reduce disputes across stakeholders.",
      "Subscriptions reduce churn by embedding in operating cadence."
    ],
    revenueDelta: [10, 24],
    model: {
      inputs: {
        baseUnits: 140,
        baseNetPrice: 1_900_000,
        baseAttachRate: 0.28,
        baseDlcPrice: 450_000,
        baseArppu: 320_000,
        activeRate: 0.65
      },
      baselineRevenue: 341_460_000,
      opportunityRevenue: [351_460_000, 365_460_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: monthly refresh cycles",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 5,
          high: 12,
          assumption: "Recurring refresh cadence drives ongoing analysis fees."
        },
        {
          kind: "price",
          label: "Price mix: premium for always-on governance",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 3,
          high: 6,
          assumption: "Charge premium for shifting from annual to recurring governance."
        },
        {
          kind: "attach",
          label: "Attach expansion: outcome reconciliation module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 6,
          assumption: "Attach outcome reconciliation to maintain comparability across channels."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "140", opportunity: "140", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.90M", opportunity: "$1.91M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "28%", opportunity: "29%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.32M", opportunity: "$0.34M", delta: "+$0.02M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "combined-opportunity-021" as CombinedOpportunityId,
    signalIds: ["signal-13" as SignalId, "signal-14" as SignalId],
    combinedSignal: {
      id: "signal-13" as SignalId,
      title: "Board Packs: Outcomes + MMM Scenarios",
      summary:
        "Scenario mapping becomes the executive language: ‘if we shift spend, what happens to outcomes?’ backed by auditability.",
      theme: "competition"
    },
    name: "Create Quarterly Board Packs That Reconcile MMM and Incrementality",
    summary: "Sell scenario deltas, decision notes, and audit trails as a subscription.",
    detail:
      "Nielsen can deliver board packs that translate models into action: scenario deltas with confidence ranges, decision notes, and a lineage trail that supports governance.",
    assumptions: [
      "Executives pay for consistent decision-ready reporting.",
      "Board packs can be templatized for leverage.",
      "Packs increase retention by expanding stakeholder coverage.",
      "Packs pull-through governance and connector modules."
    ],
    revenueDelta: [8, 18],
    model: {
      inputs: {
        baseUnits: 200,
        baseNetPrice: 1_250_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 300_000,
        baseArppu: 240_000,
        activeRate: 0.6
      },
      baselineRevenue: 311_200_000,
      opportunityRevenue: [319_200_000, 329_200_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: quarterly scenario refreshes",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 7,
          assumption: "Scenario refreshes repeat quarterly and during planning cycles."
        },
        {
          kind: "price",
          label: "Price mix: premium for executive reporting tier",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 3,
          high: 7,
          assumption: "Charge premium for executive-ready packaging and decision notes."
        },
        {
          kind: "units",
          label: "Unit expansion: expand into finance-led stakeholder seats",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 4,
          assumption: "Add stakeholders and win incremental governance subscriptions."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "200", opportunity: "202", delta: "+2", confidence: "Low" },
        { driver: "Net price", baseline: "$1.25M", opportunity: "$1.26M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "30%", opportunity: "30%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.24M", opportunity: "$0.25M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "combined-opportunity-022" as CombinedOpportunityId,
    signalIds: ["signal-15" as SignalId, "signal-16" as SignalId],
    combinedSignal: {
      id: "signal-15" as SignalId,
      title: "Commerce + Cross-Media Planning: One Operating Model",
      summary:
        "Shoppable video and creator commerce converge with cross-media planning: commerce outcomes become a first-class planning dimension.",
      theme: "platform"
    },
    name: "Sell a Cross-Media Commerce Planning Layer (Shoppable + Creator)",
    summary: "Bundle commerce lift, reach, and governance into planning and post-buy workflows.",
    detail:
      "Nielsen can help brands plan across TV/CTV/social/creator with commerce outcomes in the same model, producing deduped reach and commerce lift narratives that finance accepts.",
    assumptions: [
      "Brands want commerce outcomes embedded in planning, not separate dashboards.",
      "Privacy-safe joins cover most commerce linkage needs.",
      "Unified workflow reduces disputes and speeds decisions.",
      "Bundling increases willingness to pay and reduces churn."
    ],
    revenueDelta: [12, 28],
    model: {
      inputs: {
        baseUnits: 140,
        baseNetPrice: 2_000_000,
        baseAttachRate: 0.28,
        baseDlcPrice: 500_000,
        baseArppu: 350_000,
        activeRate: 0.65
      },
      baselineRevenue: 364_700_000,
      opportunityRevenue: [376_700_000, 392_700_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: premium for commerce-aware cross-media planning",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 5,
          high: 10,
          assumption: "Charge premium for embedding commerce outcomes into cross-media planning."
        },
        {
          kind: "attach",
          label: "Attach expansion: commerce connectors and dedupe modules",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 3,
          high: 8,
          assumption: "Attach connectors and governance modules as required infrastructure."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring commerce lift readouts",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 4,
          high: 10,
          assumption: "Lift readouts repeat across campaigns and quarterly reviews."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "140", opportunity: "140", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$2.00M", opportunity: "$2.04M", delta: "+$0.04M", confidence: "High" },
        { driver: "Attach rate", baseline: "28%", opportunity: "29%", delta: "+1 pt", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.35M", opportunity: "$0.37M", delta: "+$0.02M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "combined-opportunity-023" as CombinedOpportunityId,
    signalIds: ["signal-15" as SignalId, "signal-16" as SignalId],
    combinedSignal: {
      id: "signal-15" as SignalId,
      title: "Commerce Outcomes: A Comparable Currency Across Channels",
      summary:
        "Commerce attribution can’t stay channel-specific. A comparable outcomes currency across creators and CTV becomes the board language.",
      theme: "pricing"
    },
    name: "Create a Comparable Commerce Outcomes Currency for Cross-Media Buys",
    summary: "Standardize definitions, confidence bands, and lineage for commerce lift reporting.",
    detail:
      "Nielsen can standardize commerce lift definitions across channels, producing comparable deltas and audit trails that procurement can enforce and finance can trust.",
    assumptions: [
      "Brands prefer comparable outcomes across channels to allocate budgets.",
      "Clean-room safe joins cover most linkage needs.",
      "Standard definitions reduce disputes across internal teams.",
      "Currency positioning supports premium pricing."
    ],
    revenueDelta: [10, 22],
    model: {
      inputs: {
        baseUnits: 160,
        baseNetPrice: 1_700_000,
        baseAttachRate: 0.28,
        baseDlcPrice: 450_000,
        baseArppu: 320_000,
        activeRate: 0.65
      },
      baselineRevenue: 355_840_000,
      opportunityRevenue: [365_840_000, 377_840_000],
      lines: [
        {
          kind: "attach",
          label: "Attach expansion: commerce connector module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 3,
          high: 7,
          assumption: "Attach connectors as required infrastructure for closed-loop commerce measurement."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring commerce lift runs",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 7,
          assumption: "Lift runs repeat with campaign cadence and quarterly reviews."
        },
        {
          kind: "price",
          label: "Price mix: premium for comparable outcomes currency",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 4,
          high: 8,
          assumption: "Charge premium for comparability, confidence bands, and auditability."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "160", opportunity: "160", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.70M", opportunity: "$1.72M", delta: "+$0.02M", confidence: "High" },
        { driver: "Attach rate", baseline: "28%", opportunity: "29%", delta: "+1 pt", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.32M", opportunity: "$0.34M", delta: "+$0.02M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "combined-opportunity-024" as CombinedOpportunityId,
    signalIds: ["signal-15" as SignalId, "signal-16" as SignalId],
    combinedSignal: {
      id: "signal-15" as SignalId,
      title: "Commerce Governance Packs: Executive Narrative as a Subscription",
      summary:
        "When commerce and media collide, executives need one story with assumptions, ranges, and audit notes.",
      theme: "competition"
    },
    name: "Sell Quarterly ‘Commerce + Media’ Board Packs",
    summary: "Turn outcomes and planning into an executive narrative with decision notes.",
    detail:
      "Nielsen can produce quarterly executive packs that reconcile commerce lift, cross-media reach, and governance caveats into one decision-ready narrative.",
    assumptions: [
      "Executives pay for consistent narratives that reduce internal re-litigation.",
      "Templates keep delivery scalable.",
      "Packs increase retention by expanding stakeholder coverage.",
      "Packs pull-through connectors and audit modules."
    ],
    revenueDelta: [6, 14],
    model: {
      inputs: {
        baseUnits: 180,
        baseNetPrice: 1_200_000,
        baseAttachRate: 0.28,
        baseDlcPrice: 250_000,
        baseArppu: 240_000,
        activeRate: 0.65
      },
      baselineRevenue: 282_060_000,
      opportunityRevenue: [288_060_000, 296_060_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: quarterly executive packs and workshops",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 7,
          assumption: "Quarterly cadence creates recurring services revenue."
        },
        {
          kind: "price",
          label: "Price mix: premium for executive governance tier",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 5,
          assumption: "Charge premium for executive-ready packaging and governance artifacts."
        },
        {
          kind: "units",
          label: "Unit expansion: expand into finance and procurement stakeholders",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 2,
          assumption: "Win incremental governance subscriptions via stakeholder expansion."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "180", opportunity: "181", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$1.20M", opportunity: "$1.21M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "28%", opportunity: "28%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.24M", opportunity: "$0.25M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "combined-opportunity-025" as CombinedOpportunityId,
    signalIds: ["signal-17" as SignalId, "signal-18" as SignalId],
    combinedSignal: {
      id: "signal-17" as SignalId,
      title: "Clean Rooms + Auditability: Portable, Dispute-Ready Measurement",
      summary:
        "Clean rooms are the pipes; auditability is the trust. Together they enable portable measurement that survives procurement scrutiny.",
      theme: "regulatory"
    },
    name: "Sell a Portable Clean-Room Measurement Tier With Full Lineage",
    summary: "Bundle portability, validation, and audit artifacts as a premium governance tier.",
    detail:
      "Nielsen can offer a premium tier that standardizes clean-room outputs across ecosystems and provides full lineage, validation checks, and dispute-ready artifacts.",
    assumptions: [
      "Enterprises will pay for portability and auditability.",
      "Standard schemas can cover most workflows.",
      "Lineage reduces disputes and improves renewal comfort.",
      "Tier can be sold as an upgrade to existing clean-room clients."
    ],
    revenueDelta: [12, 26],
    model: {
      inputs: {
        baseUnits: 140,
        baseNetPrice: 2_000_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 500_000,
        baseArppu: 300_000,
        activeRate: 0.6
      },
      baselineRevenue: 340_200_000,
      opportunityRevenue: [352_200_000, 366_200_000],
      lines: [
        {
          kind: "attach",
          label: "Attach expansion: portability, validation, and lineage modules",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 4,
          high: 9,
          assumption: "Attach governance modules as required controls for clean-room workflows."
        },
        {
          kind: "price",
          label: "Price mix: premium for audit-ready portability tier",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 4,
          high: 9,
          assumption: "Charge premium for procurement-ready documentation and comparability."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring audits and validation refreshes",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 4,
          high: 8,
          assumption: "Audits repeat with refresh cadence and partner changes."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "140", opportunity: "140", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$2.00M", opportunity: "$2.04M", delta: "+$0.04M", confidence: "High" },
        { driver: "Attach rate", baseline: "30%", opportunity: "32%", delta: "+2 pts", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.30M", opportunity: "$0.31M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "combined-opportunity-026" as CombinedOpportunityId,
    signalIds: ["signal-17" as SignalId, "signal-18" as SignalId],
    combinedSignal: {
      id: "signal-17" as SignalId,
      title: "Clean Room Ops: Managed QA + Lineage as the Differentiator",
      summary:
        "Operational excellence becomes the product: managed joins, QA, and explainability that prevents disputes.",
      theme: "competition"
    },
    name: "Offer a Managed Clean-Room Operations Tier With QA and Lineage",
    summary: "Sell ‘done-with-you’ delivery for clean-room measurement with governance artifacts.",
    detail:
      "Nielsen can offer managed operations that run joins, validate outputs, and publish lineage, priced as a premium service tier with usage-based expansion.",
    assumptions: [
      "A subset of accounts will pay for managed delivery.",
      "Playbooks keep service marginable.",
      "QA and lineage reduce disputes and churn.",
      "Tier increases attach and renewal strength."
    ],
    revenueDelta: [9, 21],
    model: {
      inputs: {
        baseUnits: 120,
        baseNetPrice: 1_800_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 450_000,
        baseArppu: 300_000,
        activeRate: 0.65
      },
      baselineRevenue: 298_725_000,
      opportunityRevenue: [307_725_000, 319_725_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: managed tier closes operationally constrained buyers",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 3,
          high: 6,
          assumption: "Win incremental accounts that lack internal clean-room capacity."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring joins, QA, and reporting cycles",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 9,
          assumption: "Recurring cycles create usage-based service revenue."
        },
        {
          kind: "attach",
          label: "Attach expansion: governance and lineage module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 3,
          high: 6,
          assumption: "Attach governance module once managed operations are adopted."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "120", opportunity: "123", delta: "+3", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.80M", opportunity: "$1.80M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "30%", opportunity: "31%", delta: "+1 pt", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.30M", opportunity: "$0.32M", delta: "+$0.02M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "combined-opportunity-027" as CombinedOpportunityId,
    signalIds: ["signal-17" as SignalId, "signal-18" as SignalId],
    combinedSignal: {
      id: "signal-17" as SignalId,
      title: "Portability: Exportable Lineage Reports as a Product",
      summary:
        "Clients fear lock-in and want audit trails. Exportable lineage reports turn portability into a procurement feature.",
      theme: "regulatory"
    },
    name: "Sell Exportable Lineage Reports for Clean-Room Workflows",
    summary: "Package standardized export and audit artifacts for vendor reviews and regulators.",
    detail:
      "Nielsen can offer exportable lineage reports that document inputs, transformations, and assumptions in a portable format, priced as a premium governance add-on.",
    assumptions: [
      "Portability reduces procurement friction and improves renewals.",
      "Reports can be standardized without exposing sensitive IP.",
      "Exports are used during audits and vendor reviews, supporting recurring revenue.",
      "Lineage improves trust in modeled outputs."
    ],
    revenueDelta: [6, 14],
    model: {
      inputs: {
        baseUnits: 180,
        baseNetPrice: 1_250_000,
        baseAttachRate: 0.28,
        baseDlcPrice: 300_000,
        baseArppu: 240_000,
        activeRate: 0.6
      },
      baselineRevenue: 285_360_000,
      opportunityRevenue: [291_360_000, 299_360_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: premium for exportable governance artifacts",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 3,
          high: 6,
          assumption: "Charge premium for portability and audit-ready documentation."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring export and audit cycles",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 5,
          assumption: "Exports spike during vendor reviews and regulatory audits."
        },
        {
          kind: "attach",
          label: "Attach expansion: lineage export module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 3,
          assumption: "Attach module to enterprise accounts with strict governance needs."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "180", opportunity: "180", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.25M", opportunity: "$1.26M", delta: "+$0.01M", confidence: "High" },
        { driver: "Attach rate", baseline: "28%", opportunity: "29%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.24M", opportunity: "$0.25M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "combined-opportunity-028" as CombinedOpportunityId,
    signalIds: ["signal-19" as SignalId, "signal-20" as SignalId],
    combinedSignal: {
      id: "signal-19" as SignalId,
      title: "Trust Under Volatility: Weekly Signals With Representation Controls",
      summary:
        "Macro volatility increases demand for speed; rising panel costs increase demand for hybrid trust controls. Combined, they create a premium timeliness tier.",
      theme: "macro"
    },
    name: "Sell Weekly ‘Pulse’ With Explicit Representation Confidence Bands",
    summary: "Monetize speed without sacrificing trust: faster cadence + documented controls.",
    detail:
      "Nielsen can sell a weekly pulse tier that includes explicit representation diagnostics and confidence bands, protecting the brand while monetizing timeliness.",
    assumptions: [
      "Clients pay for weekly signals when budgets shift quickly.",
      "Representation diagnostics prevent ‘fast but wrong’ perception.",
      "Templates keep delivery scalable.",
      "Timeliness tier improves renewals under scrutiny."
    ],
    revenueDelta: [6, 15],
    model: {
      inputs: {
        baseUnits: 220,
        baseNetPrice: 1_150_000,
        baseAttachRate: 0.28,
        baseDlcPrice: 300_000,
        baseArppu: 200_000,
        activeRate: 0.55
      },
      baselineRevenue: 287_100_000,
      opportunityRevenue: [293_100_000, 302_100_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: weekly pulse refreshes",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 8,
          assumption: "Weekly cadence creates recurring usage-based revenue."
        },
        {
          kind: "attach",
          label: "Attach expansion: representation diagnostics module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 4,
          assumption: "Attach diagnostics as governance teams demand defensibility."
        },
        {
          kind: "price",
          label: "Price mix: premium for timeliness tier",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 3,
          assumption: "Charge premium for faster cadence and governance artifacts."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "220", opportunity: "220", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.15M", opportunity: "$1.16M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "28%", opportunity: "29%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.20M", opportunity: "$0.21M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "combined-opportunity-029" as CombinedOpportunityId,
    signalIds: ["signal-19" as SignalId, "signal-20" as SignalId],
    combinedSignal: {
      id: "signal-19" as SignalId,
      title: "Hybrid Trust + Timeliness SLAs",
      summary:
        "Clients want faster readouts and fewer disputes. Hybrid trust controls plus timeliness SLAs turn support into productized revenue.",
      theme: "pricing"
    },
    name: "Monetize ‘Fast and Defensible’ Reporting With Hybrid Controls and SLAs",
    summary: "Bundle timeliness SLAs with hybrid measurement governance artifacts.",
    detail:
      "Nielsen can sell a premium tier that guarantees delivery/response SLAs while documenting hybrid methodology, representation diagnostics, and lineage, reducing churn risk during volatile periods.",
    assumptions: [
      "Accounts will pay for SLAs when timeliness affects decisions.",
      "Hybrid governance reduces skepticism about faster cadence.",
      "Playbooks keep delivery costs predictable.",
      "Premium tier is easiest to sell at renewal."
    ],
    revenueDelta: [5, 12],
    model: {
      inputs: {
        baseUnits: 240,
        baseNetPrice: 1_150_000,
        baseAttachRate: 0.28,
        baseDlcPrice: 250_000,
        baseArppu: 180_000,
        activeRate: 0.5
      },
      baselineRevenue: 303_600_000,
      opportunityRevenue: [308_600_000, 315_600_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: premium for SLAs and governance artifacts",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 5,
          assumption: "Charge premium for timeliness SLAs tied to governance controls."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring governance reviews",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 4,
          assumption: "Reviews repeat quarterly and during audits."
        },
        {
          kind: "attach",
          label: "Attach expansion: hybrid validation module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 3,
          assumption: "Attach validation to formalize hybrid controls."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "240", opportunity: "240", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.15M", opportunity: "$1.16M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "28%", opportunity: "29%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.18M", opportunity: "$0.19M", delta: "+$0.01M", confidence: "Medium" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "combined-opportunity-030" as CombinedOpportunityId,
    signalIds: ["signal-19" as SignalId, "signal-20" as SignalId],
    combinedSignal: {
      id: "signal-19" as SignalId,
      title: "Mid-Market Expansion: Governed Diagnostics at Lower Cost",
      summary:
        "Hybrid methods reduce cost; mid-market tiers expand reach. Together they create a growth wedge without sacrificing trust posture.",
      theme: "competition"
    },
    name: "Launch a Mid-Market Tier With Hybrid Controls and Weekly Diagnostics",
    summary: "Expand addressable market with simplified, governed measurement products.",
    detail:
      "Nielsen can create a mid-market tier that delivers key diagnostics weekly with clear confidence bands, enabling growth while protecting the trust franchise.",
    assumptions: [
      "Mid-market buyers will pay for simplified governance.",
      "Hybrid measurement lowers delivery costs.",
      "Tiering avoids enterprise cannibalization.",
      "Mid-market tier creates pipeline for upgrades."
    ],
    revenueDelta: [7, 16],
    model: {
      inputs: {
        baseUnits: 260,
        baseNetPrice: 650_000,
        baseAttachRate: 0.2,
        baseDlcPrice: 180_000,
        baseArppu: 140_000,
        activeRate: 0.55
      },
      baselineRevenue: 208_780_000,
      opportunityRevenue: [215_780_000, 224_780_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: mid-market logos added via simplified tier",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 3,
          high: 6,
          assumption: "Acquire incremental mid-market clients with lower implementation friction."
        },
        {
          kind: "price",
          label: "Price mix: bundle uplift in tiered contracts",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 5,
          assumption: "Bundle key diagnostics for modest net price uplift."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring refresh cadence",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 5,
          assumption: "Recurring refreshes create usage-based revenue."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "260", opportunity: "263", delta: "+3", confidence: "Medium" },
        { driver: "Net price", baseline: "$0.65M", opportunity: "$0.66M", delta: "+$0.01M", confidence: "Low" },
        { driver: "Attach rate", baseline: "20%", opportunity: "20%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.14M", opportunity: "$0.15M", delta: "+$0.01M", confidence: "Medium" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "combined-opportunity-031" as CombinedOpportunityId,
    signalIds: ["signal-21" as SignalId, "signal-22" as SignalId],
    combinedSignal: {
      id: "signal-21" as SignalId,
      title: "Bundling + Dynamic Creative: Cohort x Variant Governance",
      summary:
        "Bundling changes cohorts; AI changes creative variants. Together, reporting must summarize micro-variants by cohort without identity creep.",
      theme: "audience"
    },
    name: "Sell Cohort-by-Variant Reporting for Ad Tiers and Bundles",
    summary: "Make complex streaming and creative systems governable with explainable summaries.",
    detail:
      "Nielsen can offer reporting that summarizes dynamic creative performance by bundling cohorts, producing actionable insights and confidence bands that help both brand and performance teams.",
    assumptions: [
      "Cohort-by-variant reporting is a real pain point for streaming ad tiers.",
      "Summaries can be explainable enough to be trusted.",
      "Outputs can be standardized across major platforms.",
      "Usage-based pricing scales with creative volume."
    ],
    revenueDelta: [8, 18],
    model: {
      inputs: {
        baseUnits: 180,
        baseNetPrice: 1_350_000,
        baseAttachRate: 0.28,
        baseDlcPrice: 320_000,
        baseArppu: 260_000,
        activeRate: 0.65
      },
      baselineRevenue: 301_920_000,
      opportunityRevenue: [309_920_000, 319_920_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: cohort-by-variant diagnostics",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 4,
          high: 9,
          assumption: "Diagnostics repeat as creative systems iterate."
        },
        {
          kind: "attach",
          label: "Attach expansion: dynamic creative governance module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach module to streaming accounts with AI-driven creative."
        },
        {
          kind: "units",
          label: "Unit expansion: new streaming ad-tier buyers adopt the product",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 4,
          assumption: "Win incremental accounts as ad tiers scale and reporting complexity rises."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "180", opportunity: "182", delta: "+2", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.35M", opportunity: "$1.35M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "28%", opportunity: "29%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.26M", opportunity: "$0.27M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "combined-opportunity-032" as CombinedOpportunityId,
    signalIds: ["signal-21" as SignalId, "signal-22" as SignalId],
    combinedSignal: {
      id: "signal-21" as SignalId,
      title: "Retention Risk: Ad Load x Creative Systems",
      summary:
        "Ad load tolerance and dynamic creative both affect churn. A combined diagnostic ties creative and ad strategy to retention risk.",
      theme: "macro"
    },
    name: "Sell Churn-Aware Creative and Ad Strategy Diagnostics",
    summary: "Quantify the retention tradeoff to protect long-term monetization.",
    detail:
      "Nielsen can offer diagnostics that link creative and ad strategies to churn risk, producing governance-ready guidance streamers can use to balance monetization and retention.",
    assumptions: [
      "Streamers will pay for retention risk reduction.",
      "Signals can be linked credibly enough to guide decisions.",
      "Diagnostics can be delivered with repeatable templates.",
      "Recurring refresh cadence supports usage pricing."
    ],
    revenueDelta: [6, 14],
    model: {
      inputs: {
        baseUnits: 160,
        baseNetPrice: 1_250_000,
        baseAttachRate: 0.25,
        baseDlcPrice: 300_000,
        baseArppu: 240_000,
        activeRate: 0.65
      },
      baselineRevenue: 266_000_000,
      opportunityRevenue: [272_000_000, 280_000_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring churn and creative diagnostics",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 7,
          assumption: "Diagnostics repeat as streaming strategies iterate."
        },
        {
          kind: "price",
          label: "Price mix: premium for retention-linked reporting",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 4,
          assumption: "Charge premium for reporting tied to retention KPIs."
        },
        {
          kind: "attach",
          label: "Attach expansion: ad tier diagnostics module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 3,
          assumption: "Attach module to accounts with meaningful ad-tier revenue."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "160", opportunity: "160", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.25M", opportunity: "$1.26M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "25%", opportunity: "26%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.24M", opportunity: "$0.25M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "combined-opportunity-033" as CombinedOpportunityId,
    signalIds: ["signal-21" as SignalId, "signal-22" as SignalId],
    combinedSignal: {
      id: "signal-21" as SignalId,
      title: "Cohorts + Variants: API Layer for Partner Tools",
      summary:
        "If reporting becomes a matrix of cohorts and creative variants, APIs are the only scalable interface. Nielsen can be the layer partner tools consume.",
      theme: "platform"
    },
    name: "Open APIs for Cohort and Variant Summaries in Streaming",
    summary: "Embed Nielsen in partner tools with usage-based expansion.",
    detail:
      "Nielsen can provide APIs that return cohort and variant summaries with confidence bands and governance metadata, enabling integration into partner dashboards and DSP tools.",
    assumptions: [
      "Partners will integrate if APIs reduce reporting overhead.",
      "Usage-based pricing scales with adoption.",
      "APIs increase switching costs.",
      "A small set of partner integrations covers most volume."
    ],
    revenueDelta: [5, 12],
    model: {
      inputs: {
        baseUnits: 140,
        baseNetPrice: 950_000,
        baseAttachRate: 0.25,
        baseDlcPrice: 250_000,
        baseArppu: 220_000,
        activeRate: 0.7
      },
      baselineRevenue: 202_750_000,
      opportunityRevenue: [207_750_000, 214_750_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: metered cohort and variant APIs",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 7,
          assumption: "API usage grows with partner adoption and refresh cadence."
        },
        {
          kind: "attach",
          label: "Attach expansion: API access module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 3,
          assumption: "Attach module to enterprise contracts tied to partner tooling."
        },
        {
          kind: "units",
          label: "Unit expansion: new partners adopt APIs as infrastructure",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 2,
          assumption: "Win incremental platform partners that buy the API layer."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "140", opportunity: "141", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$0.95M", opportunity: "$0.95M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "25%", opportunity: "26%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.22M", opportunity: "$0.23M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "combined-opportunity-034" as CombinedOpportunityId,
    signalIds: ["signal-23" as SignalId, "signal-24" as SignalId],
    combinedSignal: {
      id: "signal-23" as SignalId,
      title: "Verification + Regulation: Compliance-by-Design Referee Tier",
      summary:
        "Independent verification demand meets expanding regulation. The combined opportunity is a compliance-by-design verification tier with audit artifacts by default.",
      theme: "regulatory"
    },
    name: "Sell a Compliance-by-Design Verification Tier Across Major Platforms",
    summary: "Bundle verification integrations with controls, documentation, and auditability.",
    detail:
      "Nielsen can turn regulatory expansion into a moat by packaging verification with standardized controls and audit packets, reducing procurement friction and increasing pricing power.",
    assumptions: [
      "Procurement will pay for compliance-ready verification.",
      "Controls can be standardized across major platforms.",
      "Auditability reduces disputes and improves renewals.",
      "Tier can be sold as a renewal upgrade."
    ],
    revenueDelta: [12, 28],
    model: {
      inputs: {
        baseUnits: 220,
        baseNetPrice: 1_800_000,
        baseAttachRate: 0.32,
        baseDlcPrice: 500_000,
        baseArppu: 260_000,
        activeRate: 0.6
      },
      baselineRevenue: 451_520_000,
      opportunityRevenue: [463_520_000, 479_520_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: premium for compliance-by-design verification",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 5,
          high: 10,
          assumption: "Charge premium for governance artifacts and compliance-ready reporting."
        },
        {
          kind: "attach",
          label: "Attach expansion: verification connectors and audit modules",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 4,
          high: 9,
          assumption: "Attach modules as required infrastructure for multi-platform verification."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring compliance reviews and audits",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 9,
          assumption: "Audits repeat quarterly and during vendor reviews."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "220", opportunity: "220", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.80M", opportunity: "$1.82M", delta: "+$0.02M", confidence: "High" },
        { driver: "Attach rate", baseline: "32%", opportunity: "33%", delta: "+1 pt", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.26M", opportunity: "$0.27M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "combined-opportunity-035" as CombinedOpportunityId,
    signalIds: ["signal-23" as SignalId, "signal-24" as SignalId],
    combinedSignal: {
      id: "signal-23" as SignalId,
      title: "Portability for Regulators: Exportable Verification and Lineage",
      summary:
        "Regulators and procurement increasingly ask for portability and documentation. Exportable lineage turns compliance into a product feature.",
      theme: "regulatory"
    },
    name: "Ship Exportable Lineage and Portability Packs for Verification Programs",
    summary: "Make verification outputs portable and audit-ready with standardized exports.",
    detail:
      "Nielsen can provide exportable lineage reports and portability packs that document how verification numbers were produced, used during audits and vendor reviews, priced as a premium governance add-on.",
    assumptions: [
      "Portability reduces lock-in fear and improves procurement outcomes.",
      "Exports can be standardized without exposing sensitive IP.",
      "Audits and vendor reviews recur, supporting recurring revenue.",
      "Lineage increases trust in modeled and reconciled outputs."
    ],
    revenueDelta: [6, 14],
    model: {
      inputs: {
        baseUnits: 200,
        baseNetPrice: 1_250_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 300_000,
        baseArppu: 240_000,
        activeRate: 0.6
      },
      baselineRevenue: 311_200_000,
      opportunityRevenue: [317_200_000, 325_200_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring export and audit cycles",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 5,
          assumption: "Export demand spikes during audits and vendor reviews."
        },
        {
          kind: "attach",
          label: "Attach expansion: lineage export module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach module to enterprise accounts with strict governance requirements."
        },
        {
          kind: "price",
          label: "Price mix: premium for portability and compliance artifacts",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 4,
          assumption: "Charge premium for procurement-ready portability artifacts."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "200", opportunity: "200", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.25M", opportunity: "$1.26M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "30%", opportunity: "31%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.24M", opportunity: "$0.25M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "combined-opportunity-036" as CombinedOpportunityId,
    signalIds: ["signal-23" as SignalId, "signal-24" as SignalId],
    combinedSignal: {
      id: "signal-23" as SignalId,
      title: "AI Transparency + Verification: Governance Pack",
      summary:
        "As AI regulation expands, transparency becomes mandatory. Verification plus explainability becomes a board-level control.",
      theme: "regulatory"
    },
    name: "Sell AI Transparency Packs for Verification and Modeled Measurement",
    summary: "Document automated decisioning, inputs, caveats, and sensitivity ranges.",
    detail:
      "Nielsen can attach AI transparency packs that explain automated decisioning and modeling for verification programs, reducing audit risk and increasing procurement confidence.",
    assumptions: [
      "Procurement and legal demand AI transparency documentation.",
      "Templates cover most transparency needs.",
      "Transparency reduces disputes and improves retention.",
      "Packs pull-through audit and governance modules."
    ],
    revenueDelta: [7, 16],
    model: {
      inputs: {
        baseUnits: 220,
        baseNetPrice: 1_450_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 350_000,
        baseArppu: 220_000,
        activeRate: 0.6
      },
      baselineRevenue: 369_600_000,
      opportunityRevenue: [376_600_000, 385_600_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: premium for transparency documentation",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 3,
          high: 7,
          assumption: "Charge premium for compliance-ready transparency artifacts."
        },
        {
          kind: "attach",
          label: "Attach expansion: transparency and lineage module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach module to accounts under AI governance scrutiny."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring explainability reviews",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 4,
          assumption: "Reviews repeat as models and data evolve."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "220", opportunity: "220", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.45M", opportunity: "$1.46M", delta: "+$0.01M", confidence: "High" },
        { driver: "Attach rate", baseline: "30%", opportunity: "31%", delta: "+1 pt", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.22M", opportunity: "$0.23M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "combined-opportunity-037" as CombinedOpportunityId,
    signalIds: ["signal-25" as SignalId, "signal-26" as SignalId],
    combinedSignal: {
      id: "signal-25" as SignalId,
      title: "Cross-Border + Metadata: Regional Context Without Identity",
      summary:
        "Data localization increases regional stack variance; metadata enables contextual targeting without identity dependence. Combined, they create a scalable regional product surface.",
      theme: "regional"
    },
    name: "Sell Regional Metadata Deployments With Global Definition Consistency",
    summary: "Deploy metadata locally while keeping taxonomy consistent across regions.",
    detail:
      "Nielsen can deploy metadata and contextual tooling regionally under residency constraints, while preserving consistent global taxonomy and governance artifacts.",
    assumptions: [
      "Enterprises value consistent taxonomy across regions.",
      "Local deployments can be templatized and validated.",
      "Metadata reduces dependency on identity under regulatory pressure.",
      "Regional deployments increase switching costs."
    ],
    revenueDelta: [8, 18],
    model: {
      inputs: {
        baseUnits: 140,
        baseNetPrice: 1_600_000,
        baseAttachRate: 0.28,
        baseDlcPrice: 350_000,
        baseArppu: 200_000,
        activeRate: 0.6
      },
      baselineRevenue: 271_040_000,
      opportunityRevenue: [279_040_000, 289_040_000],
      lines: [
        {
          kind: "attach",
          label: "Attach expansion: regional metadata deployment module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 3,
          high: 7,
          assumption: "Attach regional modules as clients expand into additional markets."
        },
        {
          kind: "price",
          label: "Price mix: premium for consistent global taxonomy",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 3,
          high: 7,
          assumption: "Charge premium for governance and comparability across regions."
        },
        {
          kind: "units",
          label: "Unit expansion: expand within multinational accounts",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 4,
          assumption: "Expand from one region to multiple regions within the same enterprise."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "140", opportunity: "142", delta: "+2", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.60M", opportunity: "$1.61M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "28%", opportunity: "29%", delta: "+1 pt", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.20M", opportunity: "$0.20M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "High"
  },
  {
    id: "combined-opportunity-038" as CombinedOpportunityId,
    signalIds: ["signal-25" as SignalId, "signal-26" as SignalId],
    combinedSignal: {
      id: "signal-25" as SignalId,
      title: "Regulated Regions: Contextual Targeting as the Default",
      summary:
        "In regulated environments, contextual targeting grows. Metadata plus local compliance enables scalable activation without identity overreach.",
      theme: "regulatory"
    },
    name: "Sell Contextual Targeting + Governance for Regulated Regions",
    summary: "Package metadata, suitability, and compliance artifacts into one module.",
    detail:
      "Nielsen can offer a regulated-region contextual suite with documented taxonomy, suitability controls, and compliance artifacts, priced as a premium governance layer.",
    assumptions: [
      "Contextual targeting demand rises as identity constraints tighten.",
      "Compliance artifacts reduce procurement friction.",
      "Suite can be standardized across major regimes.",
      "Usage-based pricing scales with campaign cadence."
    ],
    revenueDelta: [7, 16],
    model: {
      inputs: {
        baseUnits: 160,
        baseNetPrice: 1_200_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 300_000,
        baseArppu: 220_000,
        activeRate: 0.6
      },
      baselineRevenue: 251_200_000,
      opportunityRevenue: [258_200_000, 267_200_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: premium for contextual compliance suite",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 4,
          high: 9,
          assumption: "Charge premium for procurement-ready compliance and governance."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring contextual audits and refreshes",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 5,
          assumption: "Audits and refreshes repeat quarterly and with campaign shifts."
        },
        {
          kind: "attach",
          label: "Attach expansion: suitability controls module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 2,
          assumption: "Attach controls to formalize governance posture."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "160", opportunity: "160", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.20M", opportunity: "$1.21M", delta: "+$0.01M", confidence: "High" },
        { driver: "Attach rate", baseline: "30%", opportunity: "31%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.22M", opportunity: "$0.23M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "combined-opportunity-039" as CombinedOpportunityId,
    signalIds: ["signal-25" as SignalId, "signal-26" as SignalId],
    combinedSignal: {
      id: "signal-25" as SignalId,
      title: "Portability: Taxonomy + Metadata Governance Packs",
      summary:
        "Cross-border constraints increase governance needs. Exportable taxonomy and metadata governance packs reduce disputes and lock-in concerns.",
      theme: "competition"
    },
    name: "Sell Exportable Taxonomy Governance Packs for Multinational Contextual Programs",
    summary: "Provide decision notes, lineage, and export artifacts for vendor reviews.",
    detail:
      "Nielsen can sell governance packs that document taxonomy decisions, lineage, and exports for multinational contextual programs, priced as a premium add-on.",
    assumptions: [
      "Governance packs reduce procurement friction and improve renewals.",
      "Templates keep delivery scalable.",
      "Exports are used during vendor reviews, creating recurring value.",
      "Packs increase attach of metadata products."
    ],
    revenueDelta: [5, 12],
    model: {
      inputs: {
        baseUnits: 180,
        baseNetPrice: 1_200_000,
        baseAttachRate: 0.28,
        baseDlcPrice: 250_000,
        baseArppu: 220_000,
        activeRate: 0.6
      },
      baselineRevenue: 260_640_000,
      opportunityRevenue: [265_640_000, 272_640_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring governance refreshes",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 5,
          assumption: "Refresh cadence aligns to quarterly planning cycles."
        },
        {
          kind: "price",
          label: "Price mix: premium for portability artifacts",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 5,
          assumption: "Charge premium for exportable lineage and documentation."
        },
        {
          kind: "attach",
          label: "Attach expansion: governance pack module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 2,
          assumption: "Attach module to enterprise contextual programs."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "180", opportunity: "180", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.20M", opportunity: "$1.21M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "28%", opportunity: "29%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.22M", opportunity: "$0.23M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "combined-opportunity-040" as CombinedOpportunityId,
    signalIds: ["signal-27" as SignalId, "signal-28" as SignalId],
    combinedSignal: {
      id: "signal-27" as SignalId,
      title: "Safe Reach Optimization: Frequency Caps Within Suitability Constraints",
      summary:
        "Brands want ‘safe reach’ without overserving. Combining frequency management and news suitability creates a governance-ready optimization product.",
      theme: "regulatory"
    },
    name: "Sell ‘Safe Reach’ Optimization (Frequency + News Suitability)",
    summary: "Quantify waste while enforcing suitability controls in planning and reporting.",
    detail:
      "Nielsen can offer optimization that balances frequency waste reduction with suitability constraints, producing governed plans and comparable post-buys.",
    assumptions: [
      "Brands value safe reach more than blanket exclusions.",
      "Suitability constraints can be operationalized consistently.",
      "Waste-reduction framing reduces procurement friction.",
      "Product embeds in planning workflow, increasing stickiness."
    ],
    revenueDelta: [8, 18],
    model: {
      inputs: {
        baseUnits: 180,
        baseNetPrice: 1_500_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 350_000,
        baseArppu: 220_000,
        activeRate: 0.6
      },
      baselineRevenue: 303_600_000,
      opportunityRevenue: [311_600_000, 321_600_000],
      lines: [
        {
          kind: "attach",
          label: "Attach expansion: safe reach optimization module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 3,
          high: 7,
          assumption: "Attach module to accounts with strict governance and frequency waste concerns."
        },
        {
          kind: "price",
          label: "Price mix: premium for governed optimization",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 3,
          high: 6,
          assumption: "Charge premium for optimization outputs that are governance-ready."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring audits and refresh cycles",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 5,
          assumption: "Refresh cadence aligns to quarterly planning and major events."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "180", opportunity: "180", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.50M", opportunity: "$1.51M", delta: "+$0.01M", confidence: "High" },
        { driver: "Attach rate", baseline: "30%", opportunity: "31%", delta: "+1 pt", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.22M", opportunity: "$0.23M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "combined-opportunity-041" as CombinedOpportunityId,
    signalIds: ["signal-27" as SignalId, "signal-28" as SignalId],
    combinedSignal: {
      id: "signal-27" as SignalId,
      title: "Crisis Mode: Frequency Guardrails + Incident Monitoring",
      summary:
        "During major events, adjacency risk and overserve risk spike. Monitoring plus frequency guardrails becomes a premium operational product.",
      theme: "regulatory"
    },
    name: "Sell Crisis Monitoring That Enforces Suitability and Frequency Guardrails",
    summary: "Provide alerting, incident workflows, and safe frequency guidance.",
    detail:
      "Nielsen can combine incident monitoring with frequency guardrails to prevent overserve and adjacency risk during crisis events, priced on usage and SLAs.",
    assumptions: [
      "Brands pay for crisis response when reputational risk is high.",
      "Alerting can be tuned to avoid false positives.",
      "Templates keep response scalable.",
      "Product increases retention by reducing board anxiety."
    ],
    revenueDelta: [6, 14],
    model: {
      inputs: {
        baseUnits: 160,
        baseNetPrice: 1_250_000,
        baseAttachRate: 0.28,
        baseDlcPrice: 300_000,
        baseArppu: 240_000,
        activeRate: 0.65
      },
      baselineRevenue: 266_000_000,
      opportunityRevenue: [272_000_000, 280_000_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: incident monitoring and response",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 7,
          assumption: "Incident workflows drive recurring services revenue during crisis windows."
        },
        {
          kind: "attach",
          label: "Attach expansion: monitoring and guardrails module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 4,
          assumption: "Attach module to governance-heavy accounts."
        },
        {
          kind: "price",
          label: "Price mix: premium for crisis SLAs",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 3,
          assumption: "Charge premium for response-time SLAs and executive reporting."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "160", opportunity: "160", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.25M", opportunity: "$1.26M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "28%", opportunity: "29%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.24M", opportunity: "$0.25M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "combined-opportunity-042" as CombinedOpportunityId,
    signalIds: ["signal-27" as SignalId, "signal-28" as SignalId],
    combinedSignal: {
      id: "signal-27" as SignalId,
      title: "Procurement Governance: Safe Frequency Packs",
      summary:
        "Frequency and suitability decisions need documentation. Governance packs make safe reach defendable to boards and procurement.",
      theme: "competition"
    },
    name: "Sell Procurement-Ready Governance Packs for Safe Frequency Decisions",
    summary: "Package definitions, decision notes, and audit artifacts as a quarterly subscription.",
    detail:
      "Nielsen can sell governance packs that document suitability constraints, frequency decisions, and audit trails, reducing disputes and increasing renewal comfort.",
    assumptions: [
      "Governance packs reduce internal re-litigation and vendor switching.",
      "Templates keep delivery scalable.",
      "Packs expand stakeholder coverage.",
      "Packs pull-through modules like monitoring and optimization."
    ],
    revenueDelta: [5, 12],
    model: {
      inputs: {
        baseUnits: 180,
        baseNetPrice: 1_200_000,
        baseAttachRate: 0.28,
        baseDlcPrice: 250_000,
        baseArppu: 220_000,
        activeRate: 0.6
      },
      baselineRevenue: 263_160_000,
      opportunityRevenue: [268_160_000, 275_160_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: premium for governance packs",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 3,
          high: 6,
          assumption: "Charge premium for executive-ready documentation and audit artifacts."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: quarterly reviews and workshops",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 1,
          high: 4,
          assumption: "Workshops repeat quarterly and during audits."
        },
        {
          kind: "units",
          label: "Unit expansion: expand into governance stakeholders",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 2,
          assumption: "Win incremental governance subscriptions via stakeholder expansion."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "180", opportunity: "181", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$1.20M", opportunity: "$1.21M", delta: "+$0.01M", confidence: "High" },
        { driver: "Attach rate", baseline: "28%", opportunity: "28%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.22M", opportunity: "$0.22M", delta: "+$0.00M", confidence: "Medium" }
      ]
    },
    confidence: "High"
  },
  {
    id: "combined-opportunity-043" as CombinedOpportunityId,
    signalIds: ["signal-29" as SignalId, "signal-30" as SignalId],
    combinedSignal: {
      id: "signal-29" as SignalId,
      title: "Ad Tiers + Sustainability: Carbon-Aware Currency Reporting",
      summary:
        "As ad tiers expand, procurement asks for sustainability. Carbon-aware reporting becomes part of the buying currency conversation.",
      theme: "macro"
    },
    name: "Attach Carbon-Aware Reporting to Ad-Tier Currency and Verification",
    summary: "Bundle emissions proxies and lineage with ad-tier measurement and governance.",
    detail:
      "Nielsen can attach carbon-aware reporting to ad-tier measurement, providing procurement-ready sustainability artifacts alongside currency reporting, priced as a premium module.",
    assumptions: [
      "Procurement will increasingly require sustainability reporting for major buys.",
      "Emissions proxies are directionally useful if transparently documented.",
      "Bundling reduces vendor sprawl and procurement friction.",
      "Governance artifacts reduce disputes and improve renewals."
    ],
    revenueDelta: [7, 16],
    model: {
      inputs: {
        baseUnits: 160,
        baseNetPrice: 1_400_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 350_000,
        baseArppu: 220_000,
        activeRate: 0.6
      },
      baselineRevenue: 303_600_000,
      opportunityRevenue: [310_600_000, 319_600_000],
      lines: [
        {
          kind: "attach",
          label: "Attach expansion: carbon reporting module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach carbon reporting to enterprise ad-tier measurement contracts."
        },
        {
          kind: "price",
          label: "Price mix: premium for procurement-ready sustainability artifacts",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 6,
          assumption: "Charge premium when sustainability reporting is required for procurement compliance."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring sustainability audits",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 5,
          assumption: "Audits and refresh cycles create recurring usage-based revenue."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "160", opportunity: "160", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.40M", opportunity: "$1.41M", delta: "+$0.01M", confidence: "High" },
        { driver: "Attach rate", baseline: "30%", opportunity: "31%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.22M", opportunity: "$0.23M", delta: "+$0.01M", confidence: "Medium" }
      ]
    },
    confidence: "High"
  },
  {
    id: "combined-opportunity-044" as CombinedOpportunityId,
    signalIds: ["signal-29" as SignalId, "signal-30" as SignalId],
    combinedSignal: {
      id: "signal-29" as SignalId,
      title: "Sustainable Supply: Certification for Ad-Tier Inventory",
      summary:
        "Ad tiers are a currency reset moment; sustainability requirements create a second dimension of certification and procurement controls.",
      theme: "competition"
    },
    name: "Create a ‘Sustainable Ad-Tier Supply’ Certification Bundle",
    summary: "Certify controls and reporting integrity for both measurement and sustainability.",
    detail:
      "Nielsen can offer a certification that combines ad-tier currency reporting with sustainability controls and documented lineage, reducing procurement friction for major advertisers.",
    assumptions: [
      "Certification simplifies procurement decisions for large advertisers.",
      "Criteria can be standardized and defensible.",
      "Certification creates recurring maintenance revenue.",
      "Certification increases stickiness of ad-tier measurement contracts."
    ],
    revenueDelta: [6, 14],
    model: {
      inputs: {
        baseUnits: 140,
        baseNetPrice: 1_500_000,
        baseAttachRate: 0.28,
        baseDlcPrice: 350_000,
        baseArppu: 200_000,
        activeRate: 0.6
      },
      baselineRevenue: 275_440_000,
      opportunityRevenue: [281_440_000, 289_440_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: new ad-tier certification clients",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 4,
          assumption: "Win incremental certification clients during currency reset moments."
        },
        {
          kind: "attach",
          label: "Attach expansion: sustainability and audit modules",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach ongoing audits and sustainability modules as part of certification."
        },
        {
          kind: "price",
          label: "Price mix: premium for certified governance posture",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 5,
          assumption: "Charge premium for procurement-ready documentation and controls."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "140", opportunity: "142", delta: "+2", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.50M", opportunity: "$1.51M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "28%", opportunity: "29%", delta: "+1 pt", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.20M", opportunity: "$0.20M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "High"
  },
  {
    id: "combined-opportunity-045" as CombinedOpportunityId,
    signalIds: ["signal-29" as SignalId, "signal-30" as SignalId],
    combinedSignal: {
      id: "signal-29" as SignalId,
      title: "Executive Tradeoffs: Monetization vs. Emissions Scenarios",
      summary:
        "Procurement wants sustainability; revenue teams want monetization. Scenario packs reconcile tradeoffs with assumptions and confidence bands.",
      theme: "macro"
    },
    name: "Sell Executive Scenario Packs for Monetization vs. Sustainability Tradeoffs",
    summary: "Provide board-ready what-ifs with decision notes and lineage.",
    detail:
      "Nielsen can produce scenario packs that model monetization and sustainability tradeoffs (ad load, supply mix, targeting) with explicit assumptions and ranges, making decisions governable.",
    assumptions: [
      "Executives value scenarios over static reports for tradeoff decisions.",
      "Proxies can be transparently documented with confidence bands.",
      "Scenario packs repeat quarterly and during major strategy shifts.",
      "Packs increase retention by expanding stakeholder coverage."
    ],
    revenueDelta: [5, 12],
    model: {
      inputs: {
        baseUnits: 160,
        baseNetPrice: 1_200_000,
        baseAttachRate: 0.28,
        baseDlcPrice: 250_000,
        baseArppu: 220_000,
        activeRate: 0.6
      },
      baselineRevenue: 266_560_000,
      opportunityRevenue: [271_560_000, 278_560_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: quarterly scenario refreshes",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 6,
          assumption: "Refresh cadence aligns to procurement and finance cycles."
        },
        {
          kind: "price",
          label: "Price mix: premium for executive scenario packs",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 4,
          assumption: "Charge modest premium for board-ready scenario outputs and decision notes."
        },
        {
          kind: "units",
          label: "Unit expansion: expand to new governance stakeholders",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 2,
          assumption: "Expand footprint by adding procurement and sustainability stakeholders."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "160", opportunity: "161", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$1.20M", opportunity: "$1.21M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "28%", opportunity: "28%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.22M", opportunity: "$0.23M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  }
];
