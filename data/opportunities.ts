import type { Opportunity, OpportunityId, SignalId } from "./types";

export const opportunities: Opportunity[] = [
  {
    id: "opportunity-001" as OpportunityId,
    signalId: "signal-01" as SignalId,
    name: "Ship a CTV Currency Reconciliation Add-On for Nielsen ONE",
    summary: "Turn reconciliation pain into a paid module that standardizes cross-publisher reporting.",
    detail:
      "As buyers juggle platform, publisher, and independent measurement stacks, agencies are quietly building internal reconciliation teams. Nielsen can productize that workflow as a ‘currency reconciliation’ add-on: standard definitions, deduped reach, and a dispute-resolution audit trail that shortens post-campaign billing cycles.",
    assumptions: [
      "Agencies will pay to reduce reconciliation labor and billing delays.",
      "A small set of standardized reporting templates can cover most CTV deals.",
      "Nielsen can operationalize audit trails without slowing delivery.",
      "Sales can attach the module at renewal without elongating cycles."
    ],
    revenueDelta: [8, 18],
    model: {
      inputs: {
        baseUnits: 380,
        baseNetPrice: 1_250_000,
        baseAttachRate: 0.38,
        baseDlcPrice: 325_000,
        baseArppu: 140_000,
        activeRate: 0.5
      },
      baselineRevenue: 554_150_000,
      opportunityRevenue: [562_150_000, 572_150_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: add reconciliation module to new CTV deals",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 5,
          high: 10,
          assumption: "Win a small share of incremental CTV currency contracts because reconciliation is a differentiator."
        },
        {
          kind: "price",
          label: "Price mix: premium pricing for audit-ready currency reporting",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 4,
          assumption: "Charge a modest premium for audit trails, lineage, and dispute-resolution support."
        },
        {
          kind: "attach",
          label: "Attach expansion: reconciliation sold as an add-on module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 4,
          assumption: "Attach into renewals as a line item to reduce time-to-invoice and reduce churn risk."
        }
      ],
      drivers: [
        {
          driver: "Units",
          baseline: "380",
          opportunity: "388",
          delta: "+8",
          confidence: "Medium"
        },
        {
          driver: "Net price",
          baseline: "$1.25M",
          opportunity: "$1.26M",
          delta: "+$0.01M",
          confidence: "Medium"
        },
        {
          driver: "Attach rate",
          baseline: "38%",
          opportunity: "39%",
          delta: "+1 pt",
          confidence: "Medium"
        },
        {
          driver: "Live-ops ARPPU",
          baseline: "$0.14M",
          opportunity: "$0.14M",
          delta: "+$0.00M",
          confidence: "Low"
        }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-002" as OpportunityId,
    signalId: "signal-01" as SignalId,
    name: "Launch a CTV Supply Quality and Verification Program",
    summary: "Bundle independent verification with supply-quality scoring as a procurement-friendly package.",
    detail:
      "CTV deal-making is becoming procurement-driven, and procurement wants third-party verification and supply-quality guardrails. Nielsen can package independent verification, fraud/supply quality diagnostics, and governance reporting into a program that agencies can standardize across publishers, reducing operational risk and creating a durable upsell.",
    assumptions: [
      "Procurement and legal will increasingly require third-party verification language.",
      "A lightweight supply-quality score can be adopted without political fallout.",
      "Publishers prefer a single verification partner rather than multiple point solutions.",
      "The program can be sold as a renewal attachment rather than a standalone buy."
    ],
    revenueDelta: [6, 14],
    model: {
      inputs: {
        baseUnits: 380,
        baseNetPrice: 1_250_000,
        baseAttachRate: 0.38,
        baseDlcPrice: 300_000,
        baseArppu: 120_000,
        activeRate: 0.5
      },
      baselineRevenue: 544_300_000,
      opportunityRevenue: [550_300_000, 558_300_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: verification wins deals that would stall in procurement",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 4,
          high: 8,
          assumption: "Procurement friction converts to wins when verification language is standardized."
        },
        {
          kind: "attach",
          label: "Attach expansion: supply-quality score sold as add-on",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 4,
          assumption: "Attach the score to existing measurement contracts as a ‘risk reduction’ line item."
        },
        {
          kind: "price",
          label: "Price mix: higher net price for verified inventory reporting",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 2,
          assumption: "Modest premium is accepted because it reduces compliance overhead."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "380", opportunity: "386", delta: "+6", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.25M", opportunity: "$1.25M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "38%", opportunity: "39%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.12M", opportunity: "$0.12M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-003" as OpportunityId,
    signalId: "signal-01" as SignalId,
    name: "Sell Cross-Platform Dedupe as a Managed Measurement Service",
    summary: "Create a high-touch tier for cross-publisher deduplication and dispute-ready reporting.",
    detail:
      "When deduplication is the difference between ‘incremental reach’ and ‘waste’, agencies want a partner who will own the messy operational reality. Nielsen can offer a managed service tier that includes dedupe, methodological explainers, and stakeholder-ready readouts for clients who need speed and credibility more than self-serve dashboards.",
    assumptions: [
      "A subset of accounts will pay for ‘done-with-you’ measurement, not just tools.",
      "Managed service can be staffed with leverage (playbooks + automation) to protect margins.",
      "Cross-platform dedupe is difficult enough that buyers will accept premium pricing.",
      "Faster readouts reduce churn by improving perceived responsiveness."
    ],
    revenueDelta: [10, 22],
    model: {
      inputs: {
        baseUnits: 310,
        baseNetPrice: 1_450_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 400_000,
        baseArppu: 220_000,
        activeRate: 0.55
      },
      baselineRevenue: 528_520_000,
      opportunityRevenue: [538_520_000, 550_520_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: managed service converts complex multi-publisher accounts",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 7,
          high: 12,
          assumption: "Win complex accounts where self-serve competitors underperform on trust and speed."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: service tier drives higher usage-based fees",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 7,
          assumption: "High-touch reporting increases usage and drives incremental API/analysis fees."
        },
        {
          kind: "attach",
          label: "Attach expansion: add dispute-ready audit reporting module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 0,
          high: 3,
          assumption: "Attach a lightweight audit reporting module for clients with heavy governance."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "310", opportunity: "318", delta: "+8", confidence: "High" },
        { driver: "Net price", baseline: "$1.45M", opportunity: "$1.45M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "30%", opportunity: "31%", delta: "+1 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.22M", opportunity: "$0.25M", delta: "+$0.03M", confidence: "Medium" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-004" as OpportunityId,
    signalId: "signal-01" as SignalId,
    name: "Monetize Methodology as ‘Audit-Ready’ SLA Pricing",
    summary: "Introduce a premium service-level tier for faster reconciliation and methodology responses.",
    detail:
      "Boards don’t just want a number; they want defensibility. Nielsen can charge for speed and accountability: response-time SLAs for disputes, standardized methodology memos, and executive-ready audit packets. This turns a cost center (support) into a monetized tier and reduces ‘vendor switching’ risk.",
    assumptions: [
      "A meaningful slice of enterprise accounts will pay for response-time SLAs.",
      "Premium SLAs reduce churn by lowering board-level anxiety.",
      "The tier can be delivered with standardized playbooks to avoid runaway costs.",
      "Value is highest during upfront and post-campaign reconciliation windows."
    ],
    revenueDelta: [5, 12],
    model: {
      inputs: {
        baseUnits: 420,
        baseNetPrice: 1_100_000,
        baseAttachRate: 0.33,
        baseDlcPrice: 275_000,
        baseArppu: 120_000,
        activeRate: 0.48
      },
      baselineRevenue: 566_184_000,
      opportunityRevenue: [571_184_000, 578_184_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: audit-ready SLA premium on enterprise contracts",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 3,
          high: 7,
          assumption: "Charge a small annual premium for SLAs and audit packets, accepted by risk-averse buyers."
        },
        {
          kind: "units",
          label: "Unit expansion: premium tier helps close deal renewals",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 3,
          assumption: "Reduce churn and win a small number of competitive renewals due to governance comfort."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: paid methodology workshops drive incremental services",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 1,
          high: 2,
          assumption: "Convert bespoke methodology meetings into paid workshops and add-on analysis."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "420", opportunity: "421", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$1.10M", opportunity: "$1.12M", delta: "+$0.02M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "33%", opportunity: "33%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.12M", opportunity: "$0.12M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-005" as OpportunityId,
    signalId: "signal-01" as SignalId,
    name: "Release a Real-Time Reach & Frequency API for CTV",
    summary: "Sell faster optimization loops via an API product priced on usage.",
    detail:
      "CTV is bought and optimized faster than linear, but measurement often arrives too late to steer spend. A real-time reach & frequency API lets agencies optimize while the campaign is live. Pricing it on usage aligns value to spend velocity and creates an expansion path inside existing accounts.",
    assumptions: [
      "Agencies will pay for real-time signals that reduce over-frequency waste.",
      "API usage can be metered without integration friction.",
      "Real-time reporting improves perceived product leadership and reduces churn.",
      "Nielsen can avoid being blocked by platform access constraints via partnerships."
    ],
    revenueDelta: [7, 16],
    model: {
      inputs: {
        baseUnits: 290,
        baseNetPrice: 1_300_000,
        baseAttachRate: 0.29,
        baseDlcPrice: 260_000,
        baseArppu: 170_000,
        activeRate: 0.6
      },
      baselineRevenue: 471_934_000,
      opportunityRevenue: [478_934_000, 487_934_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: metered API calls scale with optimization cadence",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 4,
          high: 9,
          assumption: "API usage grows with campaign pacing needs, especially during upfront windows."
        },
        {
          kind: "attach",
          label: "Attach expansion: real-time reporting module added to contracts",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach real-time module to a portion of the base as an operational necessity."
        },
        {
          kind: "units",
          label: "Unit expansion: new demand from performance-oriented video teams",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 2,
          assumption: "Win incremental clients who previously avoided Nielsen due to latency of reporting."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "290", opportunity: "291", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$1.30M", opportunity: "$1.30M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "29%", opportunity: "31%", delta: "+2 pts", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.17M", opportunity: "$0.19M", delta: "+$0.02M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-006" as OpportunityId,
    signalId: "signal-02" as SignalId,
    name: "Create a Cross-Retailer Incrementality Scorecard",
    summary: "Productize RMN comparability with an incrementality-first scorecard buyers can standardize.",
    detail:
      "Retail media is growing, but buyers struggle to compare effectiveness across retailers and formats. Nielsen can offer a cross-retailer incrementality scorecard that standardizes definitions, reporting windows, and confidence bands so procurement can treat RMN as a governed channel rather than a set of bespoke dashboards.",
    assumptions: [
      "Top advertisers will pay for comparability more than bespoke retailer analytics.",
      "Incrementality proxies can be delivered in privacy-safe clean-room workflows.",
      "Retailers will tolerate a standardized scorecard if it expands budgets.",
      "Nielsen can keep methodology consistent across retailers without overfitting."
    ],
    revenueDelta: [9, 20],
    model: {
      inputs: {
        baseUnits: 140,
        baseNetPrice: 1_800_000,
        baseAttachRate: 0.42,
        baseDlcPrice: 450_000,
        baseArppu: 220_000,
        activeRate: 0.6
      },
      baselineRevenue: 297_000_000,
      opportunityRevenue: [306_000_000, 317_000_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: standard scorecard wins enterprise RMN measurement contracts",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 5,
          high: 9,
          assumption: "Win incremental contracts from advertisers consolidating RMN measurement vendors."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: scorecard refresh cadence drives ongoing usage fees",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 6,
          assumption: "Monthly/weekly refreshes increase usage-based reporting and API pulls."
        },
        {
          kind: "attach",
          label: "Attach expansion: retailer connectors sold as add-on module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach a small set of high-value retailer connectors as a paid module."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "140", opportunity: "144", delta: "+4", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.80M", opportunity: "$1.80M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "42%", opportunity: "44%", delta: "+2 pts", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.22M", opportunity: "$0.24M", delta: "+$0.02M", confidence: "Medium" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-007" as OpportunityId,
    signalId: "signal-02" as SignalId,
    name: "Sell RMN Clean-Room Connectors as a Standard Module",
    summary: "Turn one-off integrations into a repeatable attach motion across top clean-room ecosystems.",
    detail:
      "RMN measurement increasingly depends on clean-room joins, but today integrations are bespoke and slow. Nielsen can package connectors for the dominant clean-room ecosystems and sell them as a standardized module, reducing time-to-value for advertisers while protecting Nielsen from being disintermediated by the clean-room provider.",
    assumptions: [
      "A small set of clean-room ecosystems covers most RMN spend.",
      "Standard connectors reduce implementation time enough to influence vendor choice.",
      "Security and compliance review can be templated to shorten sales cycles.",
      "Attach economics remain strong because connectors unlock otherwise trapped data."
    ],
    revenueDelta: [7, 15],
    model: {
      inputs: {
        baseUnits: 140,
        baseNetPrice: 1_800_000,
        baseAttachRate: 0.42,
        baseDlcPrice: 475_000,
        baseArppu: 200_000,
        activeRate: 0.6
      },
      baselineRevenue: 299_050_000,
      opportunityRevenue: [306_050_000, 314_050_000],
      lines: [
        {
          kind: "attach",
          label: "Attach expansion: clean-room connectors sold as module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 3,
          high: 6,
          assumption: "Attach connector module into renewals because it becomes required for closed-loop workflows."
        },
        {
          kind: "units",
          label: "Unit expansion: faster integrations reduce lost deals",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 5,
          assumption: "Win incremental deals where implementation risk is the deciding factor."
        },
        {
          kind: "price",
          label: "Price mix: premium pricing for portable cross-retailer measurement",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 4,
          assumption: "Charge a premium for portability across clean rooms and retailers."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "140", opportunity: "142", delta: "+2", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.80M", opportunity: "$1.81M", delta: "+$0.01M", confidence: "Low" },
        { driver: "Attach rate", baseline: "42%", opportunity: "44%", delta: "+2 pts", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.20M", opportunity: "$0.20M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-008" as OpportunityId,
    signalId: "signal-02" as SignalId,
    name: "Introduce an RMN ‘Currency Subscription’ for Procurement",
    summary: "Position Nielsen as the standard cross-retailer reporting layer with tiered pricing.",
    detail:
      "Once RMN spend crosses a threshold, procurement wants a standardized reporting vendor with clear definitions and auditability. Nielsen can sell a ‘currency subscription’ that provides consistent cross-retailer reporting, governance artifacts, and quarterly board-ready summaries, with pricing that scales by spend tier and retailer coverage.",
    assumptions: [
      "Procurement wants predictable pricing more than bespoke analytics.",
      "Tiered coverage (top retailers vs. long tail) matches buyer willingness to pay.",
      "Governance artifacts (definitions, lineage, audit packets) are valued during vendor reviews.",
      "Nielsen can avoid retailer backlash by positioning as enabling budget growth."
    ],
    revenueDelta: [6, 14],
    model: {
      inputs: {
        baseUnits: 140,
        baseNetPrice: 1_800_000,
        baseAttachRate: 0.42,
        baseDlcPrice: 400_000,
        baseArppu: 240_000,
        activeRate: 0.6
      },
      baselineRevenue: 302_800_000,
      opportunityRevenue: [308_800_000, 316_800_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: subscription tier uplift for cross-retailer governance",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 4,
          high: 8,
          assumption: "Convert a portion of contracts to a higher tier that includes governance and reporting coverage."
        },
        {
          kind: "units",
          label: "Unit expansion: procurement-led standardization expands account footprint",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 3,
          assumption: "Win additional enterprise accounts when procurement mandates standard reporting."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: quarterly board packs sold as usage-based reporting",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 1,
          high: 3,
          assumption: "Sell quarterly board packs and ad-hoc deep dives as usage-based add-ons."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "140", opportunity: "141", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$1.80M", opportunity: "$1.84M", delta: "+$0.04M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "42%", opportunity: "42%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.24M", opportunity: "$0.24M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-009" as OpportunityId,
    signalId: "signal-02" as SignalId,
    name: "Package Closed-Loop Measurement as a Repeatable Consulting Playbook",
    summary: "Sell an outcome-focused service that operationalizes incrementality experiments at scale.",
    detail:
      "Many brands can’t operationalize incrementality tests across retailers because governance, data access, and experiment design are inconsistent. Nielsen can offer a repeatable service package that designs matched-market tests, implements clean-room joins, and produces executive-ready learnings that finance and procurement accept.",
    assumptions: [
      "Brands will fund services if they unlock budget reallocation decisions.",
      "Experiment templates can be standardized enough to scale marginably.",
      "Clean-room workflows reduce privacy risk and speed approvals.",
      "Consulting leads can pull-through product subscriptions."
    ],
    revenueDelta: [5, 12],
    model: {
      inputs: {
        baseUnits: 95,
        baseNetPrice: 2_200_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 350_000,
        baseArppu: 400_000,
        activeRate: 0.65
      },
      baselineRevenue: 263_825_000,
      opportunityRevenue: [268_825_000, 275_825_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: experiment services increase analysis fees",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 7,
          assumption: "Outcome experiments generate additional paid analysis and interpretation work."
        },
        {
          kind: "units",
          label: "Unit expansion: consulting win opens door to measurement contracts",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 3,
          assumption: "A subset of consulting engagements converts to longer-term measurement subscriptions."
        },
        {
          kind: "attach",
          label: "Attach expansion: add clean-room connector module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 2,
          assumption: "Attach connector module to keep the pipeline repeatable."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "95", opportunity: "96", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$2.20M", opportunity: "$2.20M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "30%", opportunity: "31%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.40M", opportunity: "$0.45M", delta: "+$0.05M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-010" as OpportunityId,
    signalId: "signal-02" as SignalId,
    name: "Expand RMN Measurement Coverage Internationally as a ‘Land-and-Expand’ Motion",
    summary: "Target regions where RMNs are scaling fastest and measurement standards are unsettled.",
    detail:
      "As RMNs expand outside the US, measurement norms are not yet locked in. Nielsen can win multi-year footholds by landing a standardized measurement offering in priority regions, then expanding retailer connectors and outcome measurement once data-sharing patterns are established.",
    assumptions: [
      "International RMN growth creates a window before standards ossify.",
      "A small number of multinational advertisers can anchor initial demand.",
      "Regional data residency constraints can be satisfied with localized deployments.",
      "Winning early creates durable switching costs via governance and definitions."
    ],
    revenueDelta: [8, 18],
    model: {
      inputs: {
        baseUnits: 120,
        baseNetPrice: 1_700_000,
        baseAttachRate: 0.35,
        baseDlcPrice: 420_000,
        baseArppu: 200_000,
        activeRate: 0.6
      },
      baselineRevenue: 247_920_000,
      opportunityRevenue: [255_920_000, 265_920_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: new regional advertiser and retailer contracts",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 6,
          high: 12,
          assumption: "Win regional accounts as standards are still being defined."
        },
        {
          kind: "attach",
          label: "Attach expansion: add retailer coverage connectors over time",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 4,
          assumption: "Expand retailer coverage by attaching additional connectors after landing the base subscription."
        },
        {
          kind: "price",
          label: "Price mix: premium for localized compliance and deployment",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 2,
          assumption: "Charge a small premium for compliance-by-design regional deployments."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "120", opportunity: "126", delta: "+6", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.70M", opportunity: "$1.71M", delta: "+$0.01M", confidence: "Low" },
        { driver: "Attach rate", baseline: "35%", opportunity: "36%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.20M", opportunity: "$0.20M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-011" as OpportunityId,
    signalId: "signal-03" as SignalId,
    name: "Introduce Attention-Weighted GRPs for Cross-Media Planning",
    summary: "Offer an attention-adjusted planning layer that aligns brand teams and performance teams.",
    detail:
      "Boards are increasingly skeptical of raw impression delivery as a proxy for impact. Nielsen can extend its currency role by publishing attention-weighted GRPs that combine reach with quality-of-exposure signals, enabling a single planning language across linear, CTV, and digital video.",
    assumptions: [
      "Agencies will test attention-weighted metrics if they map to business outcomes.",
      "Attention signals can be normalized across publishers to avoid vendor lock-in concerns.",
      "Methodology transparency prevents ‘black box’ pushback.",
      "The feature can be sold as a planning upgrade without re-platforming clients."
    ],
    revenueDelta: [8, 18],
    model: {
      inputs: {
        baseUnits: 260,
        baseNetPrice: 1_200_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 320_000,
        baseArppu: 160_000,
        activeRate: 0.55
      },
      baselineRevenue: 359_840_000,
      opportunityRevenue: [367_840_000, 377_840_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: premium for attention-weighted planning layer",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 4,
          high: 9,
          assumption: "Convert a portion of the base to a higher tier that includes attention-weighted planning."
        },
        {
          kind: "attach",
          label: "Attach expansion: attention module added to measurement contracts",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach attention reporting as a module to existing measurement contracts."
        },
        {
          kind: "units",
          label: "Unit expansion: win brand accounts seeking ‘quality of exposure’ governance",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 4,
          assumption: "Win incremental enterprise accounts where boards demand stronger governance than impressions."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "260", opportunity: "262", delta: "+2", confidence: "Low" },
        { driver: "Net price", baseline: "$1.20M", opportunity: "$1.22M", delta: "+$0.02M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "30%", opportunity: "31%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.16M", opportunity: "$0.16M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-012" as OpportunityId,
    signalId: "signal-03" as SignalId,
    name: "Deploy a Hybrid Attention Panel + Passive Signals Pilot",
    summary: "Create a defensible attention panel product that avoids being ‘just another vendor score’.",
    detail:
      "Attention vendors often fail because metrics are hard to audit. Nielsen can differentiate by using a hybrid approach: a smaller, higher-quality panel instrumented for attention signals, combined with privacy-safe passive signals to scale. The board-ready angle is transparency and defensibility.",
    assumptions: [
      "A hybrid panel can be trusted more than purely modeled attention scores.",
      "Pilot results can be productized into a scalable methodology.",
      "Buyers will pay for auditability even if attention metrics remain imperfect.",
      "The approach reduces the risk of becoming dependent on any single publisher signal."
    ],
    revenueDelta: [6, 13],
    model: {
      inputs: {
        baseUnits: 260,
        baseNetPrice: 1_200_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 300_000,
        baseArppu: 170_000,
        activeRate: 0.55
      },
      baselineRevenue: 361_390_000,
      opportunityRevenue: [367_390_000, 374_390_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: attention pilot converts skeptical enterprise buyers",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 3,
          high: 6,
          assumption: "Win incremental contracts from brands who reject black-box attention scoring."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: ongoing attention studies drive recurring analysis fees",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 5,
          assumption: "Hybrid panel data enables recurring deep dives by category, creative, and placement."
        },
        {
          kind: "attach",
          label: "Attach expansion: add attention reporting as module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 2,
          assumption: "Attach attention reporting to existing accounts that want a ‘quality’ lens."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "260", opportunity: "263", delta: "+3", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.20M", opportunity: "$1.20M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "30%", opportunity: "31%", delta: "+1 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.17M", opportunity: "$0.18M", delta: "+$0.01M", confidence: "Medium" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-013" as OpportunityId,
    signalId: "signal-03" as SignalId,
    name: "Sell Creative Attention Diagnostics as a Creative Optimization Product",
    summary: "Give brands a board-friendly narrative for why creative changes drive measurable lift.",
    detail:
      "As creative becomes more dynamic and fragmented, brands need diagnostics that translate ‘what people actually noticed’ into actions. Nielsen can sell a creative attention diagnostic that breaks out attention by creative variant, placement context, and cohort, then ties it back to brand outcomes.",
    assumptions: [
      "Creative teams will fund measurement if it produces actionable guidance.",
      "Nielsen can standardize reporting outputs so learnings are comparable across campaigns.",
      "Attention diagnostics can be integrated into existing campaign reporting without added friction.",
      "The product can be sold to both advertisers and agencies as a shared workflow."
    ],
    revenueDelta: [7, 16],
    model: {
      inputs: {
        baseUnits: 210,
        baseNetPrice: 950_000,
        baseAttachRate: 0.28,
        baseDlcPrice: 250_000,
        baseArppu: 220_000,
        activeRate: 0.6
      },
      baselineRevenue: 250_410_000,
      opportunityRevenue: [257_410_000, 266_410_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: creative diagnostics sold per campaign and per refresh",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 4,
          high: 9,
          assumption: "Creative variant analysis drives recurring usage-based revenue during active campaign periods."
        },
        {
          kind: "price",
          label: "Price mix: premium pricing for variant-level reporting",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 4,
          assumption: "Charge premium pricing for deeper, variant-level creative measurement."
        },
        {
          kind: "units",
          label: "Unit expansion: expand into creative operations buyers",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 3,
          assumption: "Win incremental seats from creative operations teams that have separate budgets."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "210", opportunity: "211", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$0.95M", opportunity: "$0.96M", delta: "+$0.01M", confidence: "Low" },
        { driver: "Attach rate", baseline: "28%", opportunity: "28%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.22M", opportunity: "$0.25M", delta: "+$0.03M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-014" as OpportunityId,
    signalId: "signal-03" as SignalId,
    name: "Offer an Attention API for Programmatic Platforms",
    summary: "Make attention a first-class planning and pacing signal inside DSP workflows.",
    detail:
      "Attention metrics will only matter if they are operational. Nielsen can ship an API that lets DSPs and planning tools consume attention-weighted signals for pacing, optimization, and reporting. This makes Nielsen sticky in the workflow and creates usage-based expansion.",
    assumptions: [
      "DSPs will integrate attention signals if they are stable and defensible.",
      "Usage-based pricing aligns with platform adoption and scales with spend.",
      "Nielsen can position this as ‘measurement-grade attention’ rather than ad-tech scoring.",
      "API integration can be templated to shorten partner timelines."
    ],
    revenueDelta: [5, 12],
    model: {
      inputs: {
        baseUnits: 180,
        baseNetPrice: 850_000,
        baseAttachRate: 0.22,
        baseDlcPrice: 200_000,
        baseArppu: 250_000,
        activeRate: 0.65
      },
      baselineRevenue: 189_550_000,
      opportunityRevenue: [194_550_000, 201_550_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: metered attention API usage scales with spend",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 7,
          assumption: "API pulls grow with optimization cadence and partner adoption."
        },
        {
          kind: "attach",
          label: "Attach expansion: attention API module sold into existing measurement accounts",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 3,
          assumption: "Attach API access as a paid module tied to platform integrations."
        },
        {
          kind: "units",
          label: "Unit expansion: new platform partnerships create incremental seats",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 2,
          assumption: "Win incremental platform accounts that buy the API as infrastructure."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "180", opportunity: "181", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$0.85M", opportunity: "$0.85M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "22%", opportunity: "23%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.25M", opportunity: "$0.27M", delta: "+$0.02M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-015" as OpportunityId,
    signalId: "signal-03" as SignalId,
    name: "Productize ‘Attention Methodology’ as a Board-Ready Audit Packet",
    summary: "Monetize defensibility: standardized explainers, governance artifacts, and risk controls.",
    detail:
      "The risk with attention metrics is skepticism. Nielsen can sell an audit packet that documents methodology, bias controls, and interpretation guidance in a board-friendly format. This not only supports adoption but also becomes an upsell that reduces churn in procurement-heavy accounts.",
    assumptions: [
      "Boards and procurement will increasingly demand methodology artifacts for new metrics.",
      "Standardized explainers can cover most objections without bespoke work.",
      "The audit packet can be bundled as a premium tier with high gross margin.",
      "Methodology trust increases attach rates for attention products."
    ],
    revenueDelta: [4, 10],
    model: {
      inputs: {
        baseUnits: 260,
        baseNetPrice: 1_200_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 275_000,
        baseArppu: 160_000,
        activeRate: 0.55
      },
      baselineRevenue: 356_915_000,
      opportunityRevenue: [360_915_000, 366_915_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: governance premium for audit packet",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 3,
          high: 6,
          assumption: "Charge modest premium for methodology documentation and governance reviews."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: paid workshops for stakeholder alignment",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 1,
          high: 2,
          assumption: "Convert ad-hoc methodology meetings into paid training and workshops."
        },
        {
          kind: "units",
          label: "Unit expansion: procurement comfort reduces lost renewals",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 0,
          high: 2,
          assumption: "Reduce churn and win a small number of renewals due to governance comfort."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "260", opportunity: "260", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.20M", opportunity: "$1.21M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "30%", opportunity: "30%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.16M", opportunity: "$0.17M", delta: "+$0.01M", confidence: "Medium" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-016" as OpportunityId,
    signalId: "signal-04" as SignalId,
    name: "Sell Explainable Identity Linkage Reports as a Premium Module",
    summary: "Turn identity skepticism into a paid feature: transparency, bias controls, and audit trails.",
    detail:
      "As identity becomes politically sensitive, buyers need more than a matched graph — they need to understand bias, coverage gaps, and what is modeled vs. observed. Nielsen can sell an explainable linkage module that includes coverage diagnostics, sensitivity ranges, and lineage so results stand up in governance forums.",
    assumptions: [
      "Buyers will pay for transparency when identity is central to budget allocation.",
      "Coverage diagnostics reduce disputes and improve retention.",
      "Explainability can be standardized into repeatable outputs.",
      "Selling explainability increases willingness to adopt modeled reach products."
    ],
    revenueDelta: [9, 19],
    model: {
      inputs: {
        baseUnits: 310,
        baseNetPrice: 1_350_000,
        baseAttachRate: 0.28,
        baseDlcPrice: 380_000,
        baseArppu: 190_000,
        activeRate: 0.5
      },
      baselineRevenue: 480_950_000,
      opportunityRevenue: [489_950_000, 499_950_000],
      lines: [
        {
          kind: "attach",
          label: "Attach expansion: explainable linkage module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 3,
          high: 7,
          assumption: "Attach explainability into identity-heavy accounts as an audit requirement."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: additional diagnostics and sensitivity runs",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 6,
          assumption: "Coverage and bias diagnostics drive recurring analysis requests and API pulls."
        },
        {
          kind: "price",
          label: "Price mix: premium for defensible modeled linkage",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 3,
          high: 6,
          assumption: "Charge a premium when the buyer requires governance and audit artifacts."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "310", opportunity: "310", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.35M", opportunity: "$1.37M", delta: "+$0.02M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "28%", opportunity: "30%", delta: "+2 pts", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.19M", opportunity: "$0.20M", delta: "+$0.01M", confidence: "Medium" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-017" as OpportunityId,
    signalId: "signal-04" as SignalId,
    name: "Build a Publisher ID Interoperability Toolkit",
    summary: "Help buyers compare PPID-based measurement across publishers without revealing identity.",
    detail:
      "As PPIDs proliferate, buyers worry they are trading cookie chaos for PPID chaos. Nielsen can ship a toolkit that normalizes PPID-based measurement outputs into comparable metrics and confidence ranges. This positions Nielsen as the neutral translator between publisher IDs and cross-media reporting.",
    assumptions: [
      "Publishers will cooperate if the toolkit increases spend and reduces disputes.",
      "Normalization rules can be standardized and documented.",
      "Buyers will pay for portability across publishers to reduce lock-in.",
      "Interoperability drives incremental enterprise renewals."
    ],
    revenueDelta: [7, 15],
    model: {
      inputs: {
        baseUnits: 310,
        baseNetPrice: 1_350_000,
        baseAttachRate: 0.28,
        baseDlcPrice: 350_000,
        baseArppu: 180_000,
        activeRate: 0.5
      },
      baselineRevenue: 471_000_000,
      opportunityRevenue: [478_000_000, 486_000_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: toolkit unlocks PPID-heavy publisher measurement deals",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 4,
          high: 7,
          assumption: "Win incremental clients who want comparable PPID measurement across publishers."
        },
        {
          kind: "attach",
          label: "Attach expansion: PPID interoperability module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach the toolkit to existing accounts as a requirement for cross-publisher reporting."
        },
        {
          kind: "price",
          label: "Price mix: premium for portability across publisher ID stacks",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 3,
          assumption: "Portability and governance justify a modest premium."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "310", opportunity: "314", delta: "+4", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.35M", opportunity: "$1.35M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "28%", opportunity: "29%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.18M", opportunity: "$0.18M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-018" as OpportunityId,
    signalId: "signal-04" as SignalId,
    name: "Offer an Identity Governance SLA Tier",
    summary: "Monetize ‘speed to defensibility’ with standardized governance artifacts and response SLAs.",
    detail:
      "Identity questions increasingly go through legal, privacy, and procurement. Nielsen can offer an SLA tier that guarantees response times for governance questions, provides standardized documentation, and includes periodic ‘linkage health’ reviews. This reduces churn risk and justifies premium pricing.",
    assumptions: [
      "Enterprise clients value response-time SLAs during audits and vendor reviews.",
      "Documentation can be templatized to keep delivery costs low.",
      "Governance tier reduces churn among identity-sensitive accounts.",
      "The tier can be sold as a price uplift rather than a separate procurement event."
    ],
    revenueDelta: [6, 13],
    model: {
      inputs: {
        baseUnits: 310,
        baseNetPrice: 1_350_000,
        baseAttachRate: 0.28,
        baseDlcPrice: 300_000,
        baseArppu: 190_000,
        activeRate: 0.5
      },
      baselineRevenue: 463_900_000,
      opportunityRevenue: [469_900_000, 476_900_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: governance SLA premium",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 3,
          high: 7,
          assumption: "Charge a modest annual premium for governance SLAs and documentation."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: periodic linkage health reviews",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 4,
          assumption: "Sell quarterly linkage health reviews as paid services."
        },
        {
          kind: "units",
          label: "Unit expansion: reduced churn and renewals retained",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 2,
          assumption: "Retain accounts that would otherwise churn due to governance friction."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "310", opportunity: "311", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$1.35M", opportunity: "$1.36M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "28%", opportunity: "28%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.19M", opportunity: "$0.20M", delta: "+$0.01M", confidence: "Medium" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-019" as OpportunityId,
    signalId: "signal-04" as SignalId,
    name: "Package Modeled Reach for Cookie-Less Web as a Single SKU",
    summary: "Make cookie-less measurement easy to buy, easy to explain, and hard to replace.",
    detail:
      "As cookies fade, brands need a consistent way to understand reach and frequency on the open web without identity overreach. Nielsen can offer a modeled reach SKU that includes coverage diagnostics and sensitivity ranges so results are explainable and acceptable to governance teams.",
    assumptions: [
      "Advertisers will accept modeled reach if transparency is strong.",
      "Coverage diagnostics reduce disputes and increase renewal probability.",
      "A single SKU simplifies procurement and reduces lost deals.",
      "Modeled reach pull-through increases attach of audit-ready governance features."
    ],
    revenueDelta: [8, 17],
    model: {
      inputs: {
        baseUnits: 310,
        baseNetPrice: 1_350_000,
        baseAttachRate: 0.28,
        baseDlcPrice: 325_000,
        baseArppu: 190_000,
        activeRate: 0.5
      },
      baselineRevenue: 466_075_000,
      opportunityRevenue: [474_075_000, 483_075_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: cookie-less measurement SKU closes stalled deals",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 5,
          high: 9,
          assumption: "Win incremental accounts that would otherwise defer measurement due to identity uncertainty."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: ongoing diagnostics for modeled reach",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 5,
          assumption: "Modeled reach requires periodic diagnostics and sensitivity analysis, creating recurring fees."
        },
        {
          kind: "attach",
          label: "Attach expansion: add governance and lineage reporting",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 3,
          assumption: "Attach governance reporting to protect against disputes."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "310", opportunity: "315", delta: "+5", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.35M", opportunity: "$1.35M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "28%", opportunity: "29%", delta: "+1 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.19M", opportunity: "$0.20M", delta: "+$0.01M", confidence: "Medium" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-020" as OpportunityId,
    signalId: "signal-04" as SignalId,
    name: "Create a ‘Clean-Room Neutrality’ Partnership Program",
    summary: "Standardize outputs across clean rooms to reduce vendor lock-in and increase attach.",
    detail:
      "Clean rooms are becoming the default data pipes, but each ecosystem encourages lock-in. Nielsen can become the neutral measurement layer by standardizing schemas, definitions, and outputs across clean rooms, then selling neutrality as a module that keeps buyer reporting comparable and portable.",
    assumptions: [
      "Advertisers care enough about portability to pay for it.",
      "Standard schemas can be negotiated with a small number of clean-room partners.",
      "Neutrality reduces switching risk and strengthens renewal position.",
      "A thin integration layer can cover most workflows without bespoke work."
    ],
    revenueDelta: [5, 12],
    model: {
      inputs: {
        baseUnits: 200,
        baseNetPrice: 1_600_000,
        baseAttachRate: 0.25,
        baseDlcPrice: 400_000,
        baseArppu: 200_000,
        activeRate: 0.55
      },
      baselineRevenue: 371_000_000,
      opportunityRevenue: [376_000_000, 383_000_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: neutrality positioning wins multi-ecosystem buyers",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 4,
          assumption: "Win incremental accounts with multi-clean-room strategies."
        },
        {
          kind: "attach",
          label: "Attach expansion: neutrality module added to contracts",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach neutrality as a paid module once the buyer standardizes on cross-room reporting."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: governance workstreams drive recurring usage",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 1,
          high: 3,
          assumption: "Portability governance creates recurring analysis and reporting requests."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "200", opportunity: "202", delta: "+2", confidence: "Low" },
        { driver: "Net price", baseline: "$1.60M", opportunity: "$1.60M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "25%", opportunity: "26%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.20M", opportunity: "$0.21M", delta: "+$0.01M", confidence: "Medium" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-021" as OpportunityId,
    signalId: "signal-05" as SignalId,
    name: "Launch a GenAI Supply Quality Index",
    summary: "Quantify synthetic content and low-quality supply risk in a measurement-grade product.",
    detail:
      "GenAI increases supply volume faster than quality controls can keep up. Nielsen can offer a supply quality index that scores inventory for brand safety, IVT risk, and synthetic content signals, then ties the score to audience and performance reporting so buyers can make procurement decisions with confidence.",
    assumptions: [
      "Buyers will pay for a standardized risk score tied to measurement outcomes.",
      "A small set of features can detect ‘risky’ supply reliably enough to be useful.",
      "Publishers will accept scoring if it is positioned as enabling premium spend.",
      "The index can be attached as a module to existing measurement contracts."
    ],
    revenueDelta: [6, 14],
    model: {
      inputs: {
        baseUnits: 210,
        baseNetPrice: 1_050_000,
        baseAttachRate: 0.34,
        baseDlcPrice: 260_000,
        baseArppu: 140_000,
        activeRate: 0.45
      },
      baselineRevenue: 252_330_000,
      opportunityRevenue: [258_330_000, 266_330_000],
      lines: [
        {
          kind: "attach",
          label: "Attach expansion: supply quality index module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach the index to accounts under procurement pressure to document supply quality controls."
        },
        {
          kind: "units",
          label: "Unit expansion: win risk-sensitive advertisers and agencies",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 3,
          high: 6,
          assumption: "Win incremental contracts where brand safety and IVT risk are board-level topics."
        },
        {
          kind: "price",
          label: "Price mix: premium for measurement + quality bundled",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 3,
          assumption: "Charge a premium for a combined audience + quality offering."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "210", opportunity: "213", delta: "+3", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.05M", opportunity: "$1.06M", delta: "+$0.01M", confidence: "Low" },
        { driver: "Attach rate", baseline: "34%", opportunity: "35%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.14M", opportunity: "$0.14M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-022" as OpportunityId,
    signalId: "signal-05" as SignalId,
    name: "Bundle Brand-Safety Measurement for UGC Video as a Standard Upsell",
    summary: "Make brand-safety reporting comparable and defensible across UGC environments.",
    detail:
      "UGC video will keep absorbing budget, but boards don’t want headline risk. Nielsen can bundle a brand-safety measurement layer that reports suitability categories, exposure patterns, and governance artifacts in a standardized way across platforms, creating a simple procurement-ready upsell.",
    assumptions: [
      "Brand teams will fund suitability reporting to reduce reputational risk.",
      "Suitability categories can be standardized across platforms without losing meaning.",
      "A single vendor approach reduces operational complexity for agencies.",
      "Bundling brand safety increases attach rates and reduces churn."
    ],
    revenueDelta: [7, 16],
    model: {
      inputs: {
        baseUnits: 210,
        baseNetPrice: 1_050_000,
        baseAttachRate: 0.34,
        baseDlcPrice: 280_000,
        baseArppu: 150_000,
        activeRate: 0.45
      },
      baselineRevenue: 254_364_000,
      opportunityRevenue: [261_364_000, 270_364_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: brand safety wins previously hesitant advertisers",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 4,
          high: 8,
          assumption: "Win incremental contracts from advertisers who avoided UGC reporting due to risk concerns."
        },
        {
          kind: "attach",
          label: "Attach expansion: suitability reporting module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach suitability reporting to existing accounts as a governance requirement."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: incident reviews and policy audits",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 1,
          high: 3,
          assumption: "Sell periodic incident reviews and policy audits as usage-based services."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "210", opportunity: "214", delta: "+4", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.05M", opportunity: "$1.05M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "34%", opportunity: "35%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.15M", opportunity: "$0.16M", delta: "+$0.01M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-023" as OpportunityId,
    signalId: "signal-05" as SignalId,
    name: "Offer ‘Fast-Fail’ IVT Monitoring for Always-On Campaigns",
    summary: "Sell near-real-time invalid traffic diagnostics priced as a usage-based service.",
    detail:
      "Always-on campaigns don’t tolerate weekly reporting when spend can be wasted daily. Nielsen can offer fast-fail IVT monitoring that flags anomalies, supply shifts, and synthetic traffic patterns quickly, enabling rapid intervention and creating a sticky operational dependency.",
    assumptions: [
      "Buyers will pay for speed when it directly reduces wasted spend.",
      "Anomaly detection can be delivered with low false positives.",
      "Usage-based pricing aligns with campaign volume and cadence.",
      "The product integrates cleanly into agency workflows without retraining."
    ],
    revenueDelta: [5, 11],
    model: {
      inputs: {
        baseUnits: 165,
        baseNetPrice: 900_000,
        baseAttachRate: 0.25,
        baseDlcPrice: 220_000,
        baseArppu: 220_000,
        activeRate: 0.6
      },
      baselineRevenue: 183_030_000,
      opportunityRevenue: [188_030_000, 194_030_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: monitoring priced per campaign and per alerting tier",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 7,
          assumption: "Monitoring usage grows with always-on campaign volume and alerting needs."
        },
        {
          kind: "attach",
          label: "Attach expansion: monitoring module attached to measurement contracts",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 2,
          assumption: "Attach monitoring to existing contracts for high-risk categories."
        },
        {
          kind: "price",
          label: "Price mix: premium for near-real-time delivery",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 2,
          assumption: "Charge a premium for low-latency reporting and operational support."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "165", opportunity: "165", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$0.90M", opportunity: "$0.91M", delta: "+$0.01M", confidence: "Low" },
        { driver: "Attach rate", baseline: "25%", opportunity: "26%", delta: "+1 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.22M", opportunity: "$0.25M", delta: "+$0.03M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-024" as OpportunityId,
    signalId: "signal-05" as SignalId,
    name: "License Contextual Metadata Bundles to Replace Identity-Dependent Targeting",
    summary: "Package high-quality metadata as a direct revenue line with clear buyer ROI.",
    detail:
      "As identity weakens, metadata becomes targeting infrastructure. Nielsen can license contextual metadata bundles (genre, tone, suitability, content signals) that plug into buy-side targeting and reporting. Done right, this becomes a high-margin data licensing revenue stream and strengthens Nielsen’s measurement position.",
    assumptions: [
      "Buyers will invest in contextual solutions as identity constraints tighten.",
      "Metadata quality is high enough to improve performance and reduce brand risk.",
      "Licensing can be priced by usage and coverage to scale with spend.",
      "Metadata adoption increases stickiness for Nielsen’s measurement products."
    ],
    revenueDelta: [8, 18],
    model: {
      inputs: {
        baseUnits: 230,
        baseNetPrice: 1_000_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 250_000,
        baseArppu: 210_000,
        activeRate: 0.55
      },
      baselineRevenue: 295_775_000,
      opportunityRevenue: [303_775_000, 313_775_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: metadata licensing uplift in contracts",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 5,
          high: 10,
          assumption: "Charge for metadata coverage as a contract uplift tied to targeting and suitability workflows."
        },
        {
          kind: "units",
          label: "Unit expansion: win identity-constrained advertisers",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 4,
          assumption: "Win incremental accounts prioritizing contextual solutions."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: API pulls for metadata and reporting",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 1,
          high: 4,
          assumption: "Usage-based API pulls increase as targeting workflows operationalize."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "230", opportunity: "232", delta: "+2", confidence: "Low" },
        { driver: "Net price", baseline: "$1.00M", opportunity: "$1.02M", delta: "+$0.02M", confidence: "High" },
        { driver: "Attach rate", baseline: "30%", opportunity: "30%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.21M", opportunity: "$0.22M", delta: "+$0.01M", confidence: "Medium" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-025" as OpportunityId,
    signalId: "signal-05" as SignalId,
    name: "Offer Premium Verification for High-Risk Categories",
    summary: "Sell a ‘verified supply’ package for regulated or reputation-sensitive advertisers.",
    detail:
      "Certain categories (finance, pharma, sensitive consumer goods) face higher brand and compliance risk. Nielsen can package premium verification, stricter anomaly monitoring, and governance reporting for those categories, priced as an enterprise upgrade that procurement can justify as risk mitigation.",
    assumptions: [
      "High-risk categories will pay for stricter verification and governance.",
      "Premium verification can be scoped to avoid operational sprawl.",
      "Verification upgrades reduce churn by reducing headline risk.",
      "The package can be sold via vertical-specific sales plays."
    ],
    revenueDelta: [4, 9],
    model: {
      inputs: {
        baseUnits: 140,
        baseNetPrice: 1_100_000,
        baseAttachRate: 0.25,
        baseDlcPrice: 240_000,
        baseArppu: 140_000,
        activeRate: 0.5
      },
      baselineRevenue: 182_400_000,
      opportunityRevenue: [186_400_000, 191_400_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: category-focused verification wins incremental deals",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 4,
          assumption: "Win incremental clients where verification is a gating requirement."
        },
        {
          kind: "price",
          label: "Price mix: premium for verified reporting",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 3,
          assumption: "Charge premium for stricter controls and governance artifacts."
        },
        {
          kind: "attach",
          label: "Attach expansion: add verification module to existing accounts",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 2,
          assumption: "Attach premium verification to a subset of the base."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "140", opportunity: "142", delta: "+2", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.10M", opportunity: "$1.11M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "25%", opportunity: "26%", delta: "+1 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.14M", opportunity: "$0.14M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-026" as OpportunityId,
    signalId: "signal-06" as SignalId,
    name: "Sell FAST Dedupe as a Standard Reach Reporting Package",
    summary: "Make FAST inventory comparable to linear/CTV with deduped reach and frequency reporting.",
    detail:
      "FAST is growing because it feels like TV, but advertisers don’t yet trust cross-platform reporting. Nielsen can sell a FAST reach package that delivers deduped reach/frequency across linear, CTV, and FAST, helping buyers justify incremental spend and reduce waste.",
    assumptions: [
      "FAST buyers care most about incremental reach vs. linear/CTV.",
      "Dedupe reporting can be delivered with acceptable latency and transparency.",
      "A standardized package can be sold across publishers without bespoke work.",
      "Better reporting increases willingness to commit budget, strengthening renewals."
    ],
    revenueDelta: [7, 15],
    model: {
      inputs: {
        baseUnits: 240,
        baseNetPrice: 1_100_000,
        baseAttachRate: 0.31,
        baseDlcPrice: 300_000,
        baseArppu: 150_000,
        activeRate: 0.52
      },
      baselineRevenue: 305_720_000,
      opportunityRevenue: [312_720_000, 320_720_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: FAST reporting wins new publisher and agency contracts",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 4,
          high: 7,
          assumption: "Win incremental contracts as FAST moves into standard planning and reporting."
        },
        {
          kind: "attach",
          label: "Attach expansion: deduped reach module added to measurement contracts",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach deduped reach reporting as a module for cross-platform buyers."
        },
        {
          kind: "price",
          label: "Price mix: premium for unified FAST + TV reporting",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 3,
          assumption: "Charge premium for unified reporting that supports budget reallocation decisions."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "240", opportunity: "244", delta: "+4", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.10M", opportunity: "$1.11M", delta: "+$0.01M", confidence: "Low" },
        { driver: "Attach rate", baseline: "31%", opportunity: "32%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.15M", opportunity: "$0.15M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-027" as OpportunityId,
    signalId: "signal-06" as SignalId,
    name: "Upsell FAST Taxonomy and Metadata Coverage (Gracenote-Led)",
    summary: "Turn content metadata into higher CPMs via better targeting and suitability controls.",
    detail:
      "FAST catalogs are deep and messy, and buyers need metadata to target, avoid adjacency, and report. Nielsen can upsell taxonomy and metadata coverage that improves planning and brand suitability, then tie it to measurable improvements in campaign performance and waste reduction.",
    assumptions: [
      "FAST publishers will pay for metadata if it increases monetization and fill rates.",
      "Metadata can be standardized across FAST platforms and genres.",
      "Better targeting and suitability reduces brand safety friction in procurement.",
      "Metadata adoption increases stickiness for Nielsen reporting."
    ],
    revenueDelta: [6, 13],
    model: {
      inputs: {
        baseUnits: 200,
        baseNetPrice: 950_000,
        baseAttachRate: 0.29,
        baseDlcPrice: 280_000,
        baseArppu: 160_000,
        activeRate: 0.55
      },
      baselineRevenue: 229_520_000,
      opportunityRevenue: [235_520_000, 242_520_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: metadata coverage uplift for FAST catalogs",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 3,
          high: 7,
          assumption: "Charge premium for broader metadata coverage and richer taxonomies."
        },
        {
          kind: "attach",
          label: "Attach expansion: metadata and suitability module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 4,
          assumption: "Attach a metadata module as the operational requirement for premium buys."
        },
        {
          kind: "units",
          label: "Unit expansion: win additional FAST publisher accounts",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 2,
          assumption: "Win incremental FAST accounts by leading with monetization story."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "200", opportunity: "201", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$0.95M", opportunity: "$0.97M", delta: "+$0.02M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "29%", opportunity: "30%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.16M", opportunity: "$0.16M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-028" as OpportunityId,
    signalId: "signal-06" as SignalId,
    name: "Sell FAST Ad Load + Attention Diagnostics to Reduce Waste",
    summary: "Make ‘ad load health’ a measurable control knob for publishers and buyers.",
    detail:
      "FAST platforms can overserve ads, degrading viewer experience and brand outcomes. Nielsen can sell diagnostics that link ad load and attention proxies to retention and outcomes, helping publishers optimize monetization without eroding long-term audience value.",
    assumptions: [
      "Publishers will pay for diagnostics that protect long-term monetization.",
      "Ad load and attention can be measured consistently enough to guide decisions.",
      "Diagnostics can be priced on usage and refresh cadence.",
      "The product pulls through other Nielsen reporting modules."
    ],
    revenueDelta: [5, 12],
    model: {
      inputs: {
        baseUnits: 180,
        baseNetPrice: 900_000,
        baseAttachRate: 0.25,
        baseDlcPrice: 240_000,
        baseArppu: 190_000,
        activeRate: 0.6
      },
      baselineRevenue: 203_760_000,
      opportunityRevenue: [208_760_000, 215_760_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: ongoing diagnostics and alerting refreshes",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 7,
          assumption: "Publishers and agencies request regular diagnostics during campaign cycles."
        },
        {
          kind: "attach",
          label: "Attach expansion: ad load health module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 3,
          assumption: "Attach ad-load diagnostics to measurement contracts as operational requirement."
        },
        {
          kind: "price",
          label: "Price mix: premium for attention-linked reporting",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 2,
          assumption: "Charge premium for diagnostics that translate into monetization decisions."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "180", opportunity: "180", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$0.90M", opportunity: "$0.91M", delta: "+$0.01M", confidence: "Low" },
        { driver: "Attach rate", baseline: "25%", opportunity: "26%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.19M", opportunity: "$0.21M", delta: "+$0.02M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-029" as OpportunityId,
    signalId: "signal-06" as SignalId,
    name: "Position FAST as ‘Incremental Reach’ in Planning Workflows",
    summary: "Package FAST planning so buyers can quantify incremental reach vs. linear and CTV.",
    detail:
      "FAST inventory is often bought opportunistically. Nielsen can help move it into planned budgets by making incremental reach a first-class planning output. When buyers can defend incremental reach to finance and procurement, FAST gets durable budget lines — and Nielsen becomes the enabling currency.",
    assumptions: [
      "Incremental reach is the primary buyer narrative for FAST budget expansion.",
      "Planning outputs can be integrated into existing agency workflows.",
      "Standardized methodology reduces disputes and adoption risk.",
      "Planning pull-through increases attach to ongoing reporting."
    ],
    revenueDelta: [8, 17],
    model: {
      inputs: {
        baseUnits: 240,
        baseNetPrice: 1_100_000,
        baseAttachRate: 0.31,
        baseDlcPrice: 260_000,
        baseArppu: 140_000,
        activeRate: 0.52
      },
      baselineRevenue: 300_760_000,
      opportunityRevenue: [308_760_000, 317_760_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: incremental reach planning wins new agency adoption",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 5,
          high: 9,
          assumption: "Win incremental adoption as FAST moves from opportunistic to planned."
        },
        {
          kind: "price",
          label: "Price mix: premium for planning-grade incremental reach reporting",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 5,
          assumption: "Charge premium for planning-grade outputs that tie to budget decisions."
        },
        {
          kind: "attach",
          label: "Attach expansion: add dedupe module for FAST + CTV",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 3,
          assumption: "Attach dedupe module as requirement to make incremental reach defensible."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "240", opportunity: "245", delta: "+5", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.10M", opportunity: "$1.11M", delta: "+$0.01M", confidence: "Low" },
        { driver: "Attach rate", baseline: "31%", opportunity: "32%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.14M", opportunity: "$0.14M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-030" as OpportunityId,
    signalId: "signal-06" as SignalId,
    name: "Create a FAST Publisher Onboarding Accelerator",
    summary: "Reduce implementation friction so publishers adopt measurement before standards lock in.",
    detail:
      "FAST publishers move fast and avoid heavy integration projects. Nielsen can package an onboarding accelerator with standardized data contracts, templates, and validation tools so FAST publishers can go live quickly and then expand modules over time.",
    assumptions: [
      "Reducing onboarding time materially increases publisher adoption.",
      "Templates cover most FAST publisher data realities without bespoke work.",
      "Faster onboarding creates earlier renewal and upsell windows.",
      "Nielsen can maintain quality controls while accelerating delivery."
    ],
    revenueDelta: [4, 10],
    model: {
      inputs: {
        baseUnits: 240,
        baseNetPrice: 1_100_000,
        baseAttachRate: 0.31,
        baseDlcPrice: 230_000,
        baseArppu: 120_000,
        activeRate: 0.52
      },
      baselineRevenue: 295_372_000,
      opportunityRevenue: [299_372_000, 305_372_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: faster onboarding converts long-tail publishers",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 3,
          high: 6,
          assumption: "Win incremental publisher accounts that require fast time-to-value."
        },
        {
          kind: "attach",
          label: "Attach expansion: onboarding includes optional reporting module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 3,
          assumption: "Attach a lightweight reporting module early to increase stickiness."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: validation and data QA services",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 0,
          high: 1,
          assumption: "Charge small fees for data QA and periodic validation checks."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "240", opportunity: "243", delta: "+3", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.10M", opportunity: "$1.10M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "31%", opportunity: "32%", delta: "+1 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.12M", opportunity: "$0.12M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-031" as OpportunityId,
    signalId: "signal-07" as SignalId,
    name: "Add Sports Co-Viewing and Out-of-Home Signals to Cross-Platform Reporting",
    summary: "Make sports reach ‘board-credible’ as rights move across screens and venues.",
    detail:
      "Sports rights are splintering across broadcast, streaming, and social highlights while watch parties and venues add hidden reach. Nielsen can sell a co-viewing + out-of-home augmentation module that improves reach/frequency credibility for rights holders and advertisers negotiating guarantees.",
    assumptions: [
      "Rights holders will pay for a neutral, cross-platform view of reach and co-viewing.",
      "Out-of-home proxies can be integrated without compromising auditability.",
      "Sports is a high-stakes category where buyers tolerate premium pricing for certainty.",
      "The module attaches most easily during rights negotiations and upfront windows."
    ],
    revenueDelta: [8, 18],
    model: {
      inputs: {
        baseUnits: 180,
        baseNetPrice: 2_000_000,
        baseAttachRate: 0.35,
        baseDlcPrice: 500_000,
        baseArppu: 250_000,
        activeRate: 0.55
      },
      baselineRevenue: 416_250_000,
      opportunityRevenue: [424_250_000, 434_250_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: sports deals won due to improved co-viewing visibility",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 4,
          high: 8,
          assumption: "Win incremental rights-holder and agency contracts because co-viewing is a negotiation issue."
        },
        {
          kind: "attach",
          label: "Attach expansion: sports co-viewing module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach the module where sports is a material share of spend."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: game-level readouts and guarantee dispute support",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 5,
          assumption: "Game-level analysis and dispute support increase recurring usage fees."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "180", opportunity: "184", delta: "+4", confidence: "Medium" },
        { driver: "Net price", baseline: "$2.00M", opportunity: "$2.00M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "35%", opportunity: "36%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.25M", opportunity: "$0.27M", delta: "+$0.02M", confidence: "Medium" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-032" as OpportunityId,
    signalId: "signal-07" as SignalId,
    name: "Sell a Rights-Deal Verification and Guarantees Pack",
    summary: "Monetize ‘referee value’ with verification, audit artifacts, and faster dispute resolution.",
    detail:
      "When rights fees and make-goods are on the line, stakeholders demand a neutral referee. Nielsen can sell a verification pack that includes standardized definitions, audit-ready methodology, and response-time SLAs for disputes, helping rights holders and buyers settle quickly.",
    assumptions: [
      "Rights-linked guarantees increase willingness to pay for verification.",
      "Audit artifacts can be templatized to avoid bespoke costs.",
      "Dispute SLAs reduce churn and increase renewal attachment.",
      "Sports clients are more tolerant of premium tiers due to high stakes."
    ],
    revenueDelta: [6, 14],
    model: {
      inputs: {
        baseUnits: 180,
        baseNetPrice: 2_000_000,
        baseAttachRate: 0.35,
        baseDlcPrice: 450_000,
        baseArppu: 220_000,
        activeRate: 0.55
      },
      baselineRevenue: 403_450_000,
      opportunityRevenue: [409_450_000, 417_450_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: premium tier for guarantees verification",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 3,
          high: 7,
          assumption: "Charge premium for verification, audit packets, and response-time SLAs."
        },
        {
          kind: "attach",
          label: "Attach expansion: verification module added to sports reporting",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach verification module for high-value rights and sponsorship deals."
        },
        {
          kind: "units",
          label: "Unit expansion: incremental rights-holder contracts",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 2,
          assumption: "Win a small number of additional rights-holder accounts due to premium tier."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "180", opportunity: "181", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$2.00M", opportunity: "$2.02M", delta: "+$0.02M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "35%", opportunity: "36%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.22M", opportunity: "$0.22M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-033" as OpportunityId,
    signalId: "signal-07" as SignalId,
    name: "Expand Sports Measurement Into Venue and Hospitality Distribution",
    summary: "Capture incremental ‘hidden reach’ in bars, venues, and shared-screen environments.",
    detail:
      "Sports is one of the last categories where group viewing materially changes reach. Nielsen can sell an out-of-home extension that estimates incremental reach from venues and hospitality networks, giving advertisers a more complete picture and enabling rights holders to defend valuations.",
    assumptions: [
      "Venue distribution reach is meaningful enough to change sponsor math.",
      "Methodology can be explained clearly enough for governance acceptance.",
      "Rights holders will pay to defend valuations in negotiations.",
      "Implementation can be done via a small set of venue data partners."
    ],
    revenueDelta: [5, 12],
    model: {
      inputs: {
        baseUnits: 120,
        baseNetPrice: 1_600_000,
        baseAttachRate: 0.28,
        baseDlcPrice: 350_000,
        baseArppu: 200_000,
        activeRate: 0.55
      },
      baselineRevenue: 230_200_000,
      opportunityRevenue: [235_200_000, 242_200_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: venue extension wins sponsorship measurement contracts",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 3,
          high: 6,
          assumption: "Win incremental contracts where group viewing is central to sponsor ROI discussions."
        },
        {
          kind: "price",
          label: "Price mix: premium for out-of-home coverage",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 3,
          assumption: "Charge a premium for incremental reach coverage outside the home."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: event-level readouts and activations analysis",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 1,
          high: 3,
          assumption: "Sell event-level readouts as recurring usage-based services."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "120", opportunity: "123", delta: "+3", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.60M", opportunity: "$1.61M", delta: "+$0.01M", confidence: "Low" },
        { driver: "Attach rate", baseline: "28%", opportunity: "28%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.20M", opportunity: "$0.21M", delta: "+$0.01M", confidence: "Medium" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-034" as OpportunityId,
    signalId: "signal-07" as SignalId,
    name: "Provide Real-Time Sports Pacing Dashboards for High-Value Campaign Windows",
    summary: "Sell low-latency reporting for in-season optimization and make-good avoidance.",
    detail:
      "Sports campaigns have short decision windows and high spend velocity. Nielsen can offer real-time pacing dashboards that combine delivery, reach, and frequency signals across screens, enabling faster optimization and reducing make-good exposure for rights sellers.",
    assumptions: [
      "Sports buyers will pay for low-latency reporting during key windows.",
      "Dashboards can be delivered without creating bespoke operational burden.",
      "Usage-based pricing scales with campaign volume.",
      "Real-time tools increase stickiness within agency workflows."
    ],
    revenueDelta: [7, 15],
    model: {
      inputs: {
        baseUnits: 160,
        baseNetPrice: 1_400_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 320_000,
        baseArppu: 230_000,
        activeRate: 0.6
      },
      baselineRevenue: 287_840_000,
      opportunityRevenue: [294_840_000, 302_840_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: metered real-time dashboard usage",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 4,
          high: 9,
          assumption: "Dashboards drive recurring usage fees during in-season optimization cycles."
        },
        {
          kind: "attach",
          label: "Attach expansion: real-time reporting module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 4,
          assumption: "Attach real-time module to high-value sports accounts."
        },
        {
          kind: "units",
          label: "Unit expansion: new deals from performance-minded sports buyers",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 2,
          assumption: "Win incremental clients who need real-time optimization."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "160", opportunity: "161", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$1.40M", opportunity: "$1.40M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "30%", opportunity: "31%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.23M", opportunity: "$0.25M", delta: "+$0.02M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-035" as OpportunityId,
    signalId: "signal-07" as SignalId,
    name: "Sell Sponsorship Outcome Studies as a Standardized Service Package",
    summary: "Convert bespoke sponsorship analysis into a repeatable product with clear ROI narratives.",
    detail:
      "Sponsorship dollars are scrutinized because they’re hard to attribute. Nielsen can offer a standardized outcome study package (awareness lift, consideration, incremental reach) that sponsors can use repeatedly across seasons, turning bespoke analysis into a repeatable margin-friendly service.",
    assumptions: [
      "Sponsors will fund studies if outputs are comparable across seasons and properties.",
      "Templates and playbooks keep delivery scalable.",
      "Outcome studies create pull-through for ongoing measurement subscriptions.",
      "Standardization reduces the sales friction of bespoke consulting."
    ],
    revenueDelta: [4, 10],
    model: {
      inputs: {
        baseUnits: 110,
        baseNetPrice: 1_250_000,
        baseAttachRate: 0.25,
        baseDlcPrice: 250_000,
        baseArppu: 250_000,
        activeRate: 0.65
      },
      baselineRevenue: 186_343_750,
      opportunityRevenue: [190_343_750, 196_343_750],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: repeated outcome studies and season reports",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 7,
          assumption: "Repeatable studies drive recurring service revenue across seasons."
        },
        {
          kind: "units",
          label: "Unit expansion: new sponsors adopt standardized outcomes reporting",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 0,
          high: 2,
          assumption: "Win incremental sponsor accounts when outcomes reporting becomes a standard expectation."
        },
        {
          kind: "price",
          label: "Price mix: premium for board-ready outcome narratives",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 1,
          assumption: "Charge a modest premium for standardized board-ready reporting formats."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "110", opportunity: "110", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.25M", opportunity: "$1.26M", delta: "+$0.01M", confidence: "Low" },
        { driver: "Attach rate", baseline: "25%", opportunity: "25%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.25M", opportunity: "$0.26M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-036" as OpportunityId,
    signalId: "signal-08" as SignalId,
    name: "Launch a Gaming Audience Reach Product for Brand Teams",
    summary: "Translate gaming exposure into the planning language CMOs already use.",
    detail:
      "Gaming offers incremental reach, especially among younger and harder-to-reach cohorts, but planners struggle to compare it to TV and digital video. Nielsen can launch a gaming audience reach product that normalizes gaming exposure into cross-media reach and frequency planning outputs.",
    assumptions: [
      "Brands want a trusted way to compare gaming to other reach channels.",
      "Gaming platforms and publishers will share enough data for credible reporting.",
      "The product is easiest to sell through agencies as a planning add-on.",
      "Better comparability increases gaming budget allocations, expanding Nielsen demand."
    ],
    revenueDelta: [6, 13],
    model: {
      inputs: {
        baseUnits: 150,
        baseNetPrice: 1_100_000,
        baseAttachRate: 0.25,
        baseDlcPrice: 300_000,
        baseArppu: 180_000,
        activeRate: 0.6
      },
      baselineRevenue: 192_450_000,
      opportunityRevenue: [198_450_000, 205_450_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: gaming reach product converts new brand accounts",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 3,
          high: 6,
          assumption: "Win incremental brand accounts seeking incremental reach in younger cohorts."
        },
        {
          kind: "attach",
          label: "Attach expansion: gaming reporting module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 4,
          assumption: "Attach gaming module to existing measurement contracts for brands with gaming spend."
        },
        {
          kind: "price",
          label: "Price mix: premium for cross-media normalization",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 3,
          assumption: "Charge premium for cross-media planning outputs rather than channel-specific reporting."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "150", opportunity: "153", delta: "+3", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.10M", opportunity: "$1.11M", delta: "+$0.01M", confidence: "Low" },
        { driver: "Attach rate", baseline: "25%", opportunity: "26%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.18M", opportunity: "$0.18M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-037" as OpportunityId,
    signalId: "signal-08" as SignalId,
    name: "Package Esports Measurement as Cross-Platform Sponsorship Reporting",
    summary: "Help sponsors understand reach and outcomes across live streams, VOD, and social clips.",
    detail:
      "Esports sponsorships are evaluated across live streams, highlight clips, and social amplification. Nielsen can package a cross-platform esports measurement offering with standardized reporting that sponsors can compare across properties, improving renewal confidence.",
    assumptions: [
      "Sponsors want comparable reporting across esports properties.",
      "Standardized outputs can be delivered without platform-specific bespoke work.",
      "Esports properties will cooperate if it increases sponsorship value.",
      "Sponsorship measurement budgets can support usage-based reporting."
    ],
    revenueDelta: [5, 11],
    model: {
      inputs: {
        baseUnits: 95,
        baseNetPrice: 1_150_000,
        baseAttachRate: 0.22,
        baseDlcPrice: 260_000,
        baseArppu: 200_000,
        activeRate: 0.65
      },
      baselineRevenue: 139_982_000,
      opportunityRevenue: [144_982_000, 150_982_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: esports sponsorship measurement contracts",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 4,
          assumption: "Win incremental sponsorship measurement contracts across key esports properties."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: event-level reporting and make-good analysis",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 5,
          assumption: "Event-level reporting creates recurring usage-based fees across seasons."
        },
        {
          kind: "attach",
          label: "Attach expansion: cross-platform dedupe module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 2,
          assumption: "Attach dedupe module to strengthen comparability across platforms."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "95", opportunity: "97", delta: "+2", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.15M", opportunity: "$1.15M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "22%", opportunity: "23%", delta: "+1 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.20M", opportunity: "$0.21M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-038" as OpportunityId,
    signalId: "signal-08" as SignalId,
    name: "Offer In-Game Ad Verification as an Attach Module",
    summary: "Make new ad surfaces procurement-safe with verification and auditability.",
    detail:
      "In-game advertising is growing, but buyers worry about viewability, fraud, and brand safety in novel environments. Nielsen can sell an in-game verification module that provides consistent reporting and governance artifacts so brands can scale spend without reputational risk.",
    assumptions: [
      "Brands will pay for verification when entering new ad surfaces.",
      "A small set of metrics covers most procurement requirements.",
      "Verification increases adoption and spend, expanding attach opportunities.",
      "Platform partnerships can provide sufficient signal coverage."
    ],
    revenueDelta: [4, 9],
    model: {
      inputs: {
        baseUnits: 150,
        baseNetPrice: 1_100_000,
        baseAttachRate: 0.25,
        baseDlcPrice: 275_000,
        baseArppu: 160_000,
        activeRate: 0.6
      },
      baselineRevenue: 188_650_000,
      opportunityRevenue: [192_650_000, 197_650_000],
      lines: [
        {
          kind: "attach",
          label: "Attach expansion: in-game verification module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 4,
          assumption: "Attach verification module to a subset of brand accounts experimenting with in-game buys."
        },
        {
          kind: "price",
          label: "Price mix: premium for governance and audit artifacts",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 2,
          assumption: "Charge premium for procurement-ready reporting and audit trails."
        },
        {
          kind: "units",
          label: "Unit expansion: incremental contracts from new gaming ad entrants",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 3,
          assumption: "Win a small number of new accounts as brands enter gaming ad surfaces."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "150", opportunity: "151", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$1.10M", opportunity: "$1.10M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "25%", opportunity: "26%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.16M", opportunity: "$0.16M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-039" as OpportunityId,
    signalId: "signal-08" as SignalId,
    name: "Measure Creator-Led Gaming Commerce With Outcome-Linked Reporting",
    summary: "Bridge brand and performance: quantify commerce lift from gaming creators and streams.",
    detail:
      "Gaming creators drive commerce via affiliate, live shopping, and influencer codes, but measurement is fragmented. Nielsen can sell outcome-linked reporting that ties exposure to downstream commerce signals in privacy-safe ways, enabling brands to scale spend with defensible ROI narratives.",
    assumptions: [
      "Creator commerce budgets will shift to vendors that can quantify outcomes credibly.",
      "Outcome linkage can be done via clean-room-safe methods.",
      "Brands will pay for standardized reporting across creators and platforms.",
      "Outcome measurement creates recurring usage-based analysis demand."
    ],
    revenueDelta: [7, 16],
    model: {
      inputs: {
        baseUnits: 120,
        baseNetPrice: 950_000,
        baseAttachRate: 0.22,
        baseDlcPrice: 250_000,
        baseArppu: 260_000,
        activeRate: 0.65
      },
      baselineRevenue: 156_920_000,
      opportunityRevenue: [163_920_000, 172_920_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: outcome-linked creator commerce reporting",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 4,
          high: 9,
          assumption: "Commerce outcome reporting drives recurring analysis per creator, per campaign."
        },
        {
          kind: "units",
          label: "Unit expansion: new brand clients adopting creator commerce measurement",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 4,
          assumption: "Win incremental clients as creator commerce becomes a planned channel."
        },
        {
          kind: "price",
          label: "Price mix: premium for closed-loop outcomes",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 3,
          assumption: "Closed-loop reporting commands premium pricing versus exposure-only measurement."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "120", opportunity: "122", delta: "+2", confidence: "Medium" },
        { driver: "Net price", baseline: "$0.95M", opportunity: "$0.96M", delta: "+$0.01M", confidence: "Low" },
        { driver: "Attach rate", baseline: "22%", opportunity: "22%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.26M", opportunity: "$0.28M", delta: "+$0.02M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-040" as OpportunityId,
    signalId: "signal-08" as SignalId,
    name: "License Gaming Content Metadata to Power Targeting and Suitability",
    summary: "Turn metadata into a high-margin licensing line and improve measurement stickiness.",
    detail:
      "Gaming content is diverse, and buyers need context to target and avoid adjacency. Nielsen can license gaming content metadata (genre, tone, audience fit) that improves targeting and suitability, then bundle it into measurement contracts to increase stickiness.",
    assumptions: [
      "Metadata is increasingly valuable as identity constraints tighten.",
      "Gaming publishers and platforms will adopt standardized metadata for monetization lift.",
      "Licensing can scale via APIs and coverage tiers.",
      "Metadata increases attach to measurement contracts by improving workflow value."
    ],
    revenueDelta: [5, 12],
    model: {
      inputs: {
        baseUnits: 150,
        baseNetPrice: 1_100_000,
        baseAttachRate: 0.25,
        baseDlcPrice: 250_000,
        baseArppu: 180_000,
        activeRate: 0.6
      },
      baselineRevenue: 190_950_000,
      opportunityRevenue: [195_950_000, 202_950_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: metadata licensing uplift in contracts",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 3,
          high: 7,
          assumption: "Charge a contract uplift for gaming metadata coverage."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: API usage for metadata and reporting",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 1,
          high: 3,
          assumption: "API pulls increase as targeting workflows operationalize."
        },
        {
          kind: "units",
          label: "Unit expansion: new gaming-focused advertisers adopt metadata bundles",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 2,
          assumption: "Win incremental clients who prioritize contextual targeting in gaming."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "150", opportunity: "151", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$1.10M", opportunity: "$1.11M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "25%", opportunity: "25%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.18M", opportunity: "$0.19M", delta: "+$0.01M", confidence: "Medium" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-041" as OpportunityId,
    signalId: "signal-09" as SignalId,
    name: "Deliver Unified Audio Reach and Frequency Across Podcast, Streaming Audio, and Radio",
    summary: "Make audio a governed cross-media channel with deduped reach and consistent definitions.",
    detail:
      "Audio budgets are growing, but measurement remains siloed by format. Nielsen can deliver unified audio reach/frequency that dedupes across podcast, streaming audio, and radio, enabling planners to treat audio as a scaled reach channel rather than an experimental line item.",
    assumptions: [
      "Agencies want unified audio reporting to manage frequency and waste.",
      "A common definition set can be accepted across major audio distributors.",
      "Unified audio reporting increases commitment budgets, expanding demand for Nielsen.",
      "Dedupe is valuable enough to support premium pricing and module attach."
    ],
    revenueDelta: [7, 15],
    model: {
      inputs: {
        baseUnits: 220,
        baseNetPrice: 900_000,
        baseAttachRate: 0.28,
        baseDlcPrice: 220_000,
        baseArppu: 160_000,
        activeRate: 0.6
      },
      baselineRevenue: 232_670_000,
      opportunityRevenue: [239_670_000, 247_670_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: unified audio reporting wins agency adoption",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 3,
          high: 6,
          assumption: "Win incremental accounts as audio moves into cross-media planning."
        },
        {
          kind: "attach",
          label: "Attach expansion: audio dedupe module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach dedupe to reduce over-frequency and improve planning confidence."
        },
        {
          kind: "price",
          label: "Price mix: premium for cross-format audio governance",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 4,
          assumption: "Charge premium for a governed, comparable audio currency layer."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "220", opportunity: "223", delta: "+3", confidence: "Medium" },
        { driver: "Net price", baseline: "$0.90M", opportunity: "$0.91M", delta: "+$0.01M", confidence: "Low" },
        { driver: "Attach rate", baseline: "28%", opportunity: "29%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.16M", opportunity: "$0.16M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-042" as OpportunityId,
    signalId: "signal-09" as SignalId,
    name: "Package Audio Outcome Measurement for Brand + Performance Teams",
    summary: "Move audio from ‘reach only’ to ‘outcomes’ with privacy-safe linkage and reporting.",
    detail:
      "Audio is often justified by reach, but performance teams want outcomes. Nielsen can sell an audio outcomes package that links audio exposure to downstream behaviors using privacy-safe methods, producing board-ready learnings that justify budget growth.",
    assumptions: [
      "Brands will pay for outcome linkage when budgets are scrutinized.",
      "Privacy-safe linkage is feasible via clean-room workflows.",
      "Standardized reporting reduces adoption friction.",
      "Outcome packages increase renewal stickiness and module attach."
    ],
    revenueDelta: [6, 14],
    model: {
      inputs: {
        baseUnits: 160,
        baseNetPrice: 950_000,
        baseAttachRate: 0.25,
        baseDlcPrice: 240_000,
        baseArppu: 220_000,
        activeRate: 0.65
      },
      baselineRevenue: 189_800_000,
      opportunityRevenue: [195_800_000, 203_800_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: outcome studies and matched-market experiments",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 7,
          assumption: "Outcome studies drive recurring usage-based services and analysis."
        },
        {
          kind: "units",
          label: "Unit expansion: new performance buyers adopt audio outcomes reporting",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 4,
          assumption: "Win incremental accounts when audio becomes measurable for performance teams."
        },
        {
          kind: "attach",
          label: "Attach expansion: clean-room connector module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 3,
          assumption: "Attach connector module required for privacy-safe outcome linkage."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "160", opportunity: "162", delta: "+2", confidence: "Medium" },
        { driver: "Net price", baseline: "$0.95M", opportunity: "$0.95M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "25%", opportunity: "26%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.22M", opportunity: "$0.24M", delta: "+$0.02M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-043" as OpportunityId,
    signalId: "signal-09" as SignalId,
    name: "Add Audio Suitability and Brand Safety Reporting",
    summary: "Standardize ‘safe adjacency’ reporting for podcasts and audio environments.",
    detail:
      "Audio brand safety is less visible than video but can still create risk. Nielsen can add suitability reporting (content categories, tone, risk flags) for podcasts and audio placements, giving buyers a standardized governance tool and a simple attach module.",
    assumptions: [
      "Brand teams want suitability reporting as audio spend grows.",
      "Taxonomy can be standardized without overcomplicating buying workflows.",
      "Suitability attaches best as an add-on to existing audio measurement contracts.",
      "Governance features reduce churn in procurement-heavy accounts."
    ],
    revenueDelta: [4, 9],
    model: {
      inputs: {
        baseUnits: 220,
        baseNetPrice: 900_000,
        baseAttachRate: 0.28,
        baseDlcPrice: 200_000,
        baseArppu: 150_000,
        activeRate: 0.6
      },
      baselineRevenue: 226_240_000,
      opportunityRevenue: [230_240_000, 235_240_000],
      lines: [
        {
          kind: "attach",
          label: "Attach expansion: audio suitability module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 4,
          assumption: "Attach suitability reporting to brands with stricter governance requirements."
        },
        {
          kind: "price",
          label: "Price mix: premium for suitability governance",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 2,
          assumption: "Charge a small premium for governance artifacts in procurement contexts."
        },
        {
          kind: "units",
          label: "Unit expansion: win brand accounts expanding into podcasts",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 3,
          assumption: "Win incremental accounts as podcast spend becomes more mainstream."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "220", opportunity: "221", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$0.90M", opportunity: "$0.90M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "28%", opportunity: "29%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.15M", opportunity: "$0.15M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-044" as OpportunityId,
    signalId: "signal-09" as SignalId,
    name: "Ship an Audio Planning API for Agencies and DSPs",
    summary: "Embed Nielsen audio measurement in workflows via usage-based APIs.",
    detail:
      "Audio planning tools are fragmented. Nielsen can ship an API that provides standardized reach/frequency and cohort insights for audio, enabling integration into DSPs and planning suites. Usage-based pricing provides expansion with partner adoption.",
    assumptions: [
      "Planning tools will integrate if Nielsen provides stable, defensible definitions.",
      "Usage-based pricing aligns with adoption and scales efficiently.",
      "Integration can be templated across partners to reduce delivery cost.",
      "API access increases switching costs and improves renewals."
    ],
    revenueDelta: [5, 11],
    model: {
      inputs: {
        baseUnits: 140,
        baseNetPrice: 850_000,
        baseAttachRate: 0.22,
        baseDlcPrice: 180_000,
        baseArppu: 210_000,
        activeRate: 0.7
      },
      baselineRevenue: 151_148_000,
      opportunityRevenue: [156_148_000, 162_148_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: metered audio planning API calls",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 7,
          assumption: "API usage grows with partner adoption and optimization cadence."
        },
        {
          kind: "attach",
          label: "Attach expansion: API access module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 2,
          assumption: "Attach API access to a portion of the base as operational requirement."
        },
        {
          kind: "units",
          label: "Unit expansion: new platform partners adopt API",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 2,
          assumption: "Win incremental platform accounts buying the API as infrastructure."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "140", opportunity: "141", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$0.85M", opportunity: "$0.85M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "22%", opportunity: "23%", delta: "+1 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.21M", opportunity: "$0.23M", delta: "+$0.02M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-045" as OpportunityId,
    signalId: "signal-09" as SignalId,
    name: "Expand Unified Audio Measurement to Local Markets as a Bundled Offering",
    summary: "Use local advertisers as an expansion wedge for national audio measurement contracts.",
    detail:
      "Local advertisers are increasingly buying streaming audio and podcasts, but measurement and planning remain immature. Nielsen can bundle local audio measurement into national contracts to expand footprint and reduce churn, turning local adoption into a broader land-and-expand motion.",
    assumptions: [
      "Local audio spend continues shifting into streaming formats.",
      "Bundling reduces procurement friction versus separate local products.",
      "Local expansion increases account stickiness and renewal rates.",
      "Standardized local reporting templates are sufficient for most buyers."
    ],
    revenueDelta: [4, 10],
    model: {
      inputs: {
        baseUnits: 220,
        baseNetPrice: 900_000,
        baseAttachRate: 0.28,
        baseDlcPrice: 200_000,
        baseArppu: 160_000,
        activeRate: 0.6
      },
      baselineRevenue: 230_720_000,
      opportunityRevenue: [234_720_000, 240_720_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: local market coverage adds new advertiser seats",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 5,
          assumption: "Expand local advertiser adoption through agency and publisher relationships."
        },
        {
          kind: "price",
          label: "Price mix: premium for local + national unified reporting",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 3,
          assumption: "Charge modest uplift for broader coverage and unified templates."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring local pacing and diagnostics",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 1,
          high: 2,
          assumption: "Local buyers request pacing readouts, driving recurring usage fees."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "220", opportunity: "222", delta: "+2", confidence: "Medium" },
        { driver: "Net price", baseline: "$0.90M", opportunity: "$0.90M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "28%", opportunity: "28%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.16M", opportunity: "$0.17M", delta: "+$0.01M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-046" as OpportunityId,
    signalId: "signal-10" as SignalId,
    name: "Sell a Political Pacing ‘War Room’ Subscription for Election Cycles",
    summary: "Monetize short-cycle decision support during high-spend political windows.",
    detail:
      "Political cycles create sudden spend spikes across local broadcast, streaming, and digital video. Nielsen can sell a war room subscription that provides rapid pacing diagnostics, forecasted inventory pressure, and board-ready weekly summaries for groups managing risk and delivery.",
    assumptions: [
      "Election-cycle buyers fund short-cycle reporting to reduce delivery risk.",
      "A standardized war room format can be delivered repeatedly with high leverage.",
      "Usage-based elements align pricing to intensity of the cycle.",
      "War room subscriptions create pull-through to longer-term local measurement contracts."
    ],
    revenueDelta: [5, 12],
    model: {
      inputs: {
        baseUnits: 90,
        baseNetPrice: 1_500_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 250_000,
        baseArppu: 300_000,
        activeRate: 0.7
      },
      baselineRevenue: 160_650_000,
      opportunityRevenue: [165_650_000, 172_650_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: weekly war room reporting and diagnostics",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 7,
          assumption: "High cadence reporting during election windows drives service revenue."
        },
        {
          kind: "units",
          label: "Unit expansion: new political buyers adopt Nielsen for pacing visibility",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 3,
          assumption: "Win incremental accounts that need rapid pacing and reconciliation support."
        },
        {
          kind: "attach",
          label: "Attach expansion: local cross-screen pacing module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 2,
          assumption: "Attach pacing module to existing local measurement accounts for the cycle."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "90", opportunity: "91", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$1.50M", opportunity: "$1.50M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "30%", opportunity: "31%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.30M", opportunity: "$0.35M", delta: "+$0.05M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-047" as OpportunityId,
    signalId: "signal-10" as SignalId,
    name: "Bundle Local CTV Measurement for Broadcasters and Station Groups",
    summary: "Help broadcasters defend local CTV inventory with comparable cross-screen reporting.",
    detail:
      "Local broadcasters are selling more CTV, but buyers demand cross-screen comparability and faster pacing diagnostics during peak seasons. Nielsen can bundle a local CTV measurement offering that unifies reporting across broadcast and streaming, strengthening renewals and improving pricing power.",
    assumptions: [
      "Station groups will pay to defend valuations and win shifting budgets.",
      "Unified reporting can be delivered with standardized templates.",
      "Local CTV measurement becomes a renewal driver during political cycles.",
      "Bundling reduces procurement friction versus separate point solutions."
    ],
    revenueDelta: [6, 14],
    model: {
      inputs: {
        baseUnits: 90,
        baseNetPrice: 1_500_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 300_000,
        baseArppu: 250_000,
        activeRate: 0.7
      },
      baselineRevenue: 164_400_000,
      opportunityRevenue: [170_400_000, 178_400_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: new station group contracts for local CTV reporting",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 4,
          high: 8,
          assumption: "Win incremental station group accounts as local CTV inventory scales."
        },
        {
          kind: "attach",
          label: "Attach expansion: local cross-screen dedupe module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 3,
          assumption: "Attach dedupe module so buyers can compare broadcast and local CTV reach."
        },
        {
          kind: "price",
          label: "Price mix: premium for unified local reporting",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 3,
          assumption: "Charge modest premium for unified templates and faster readouts."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "90", opportunity: "94", delta: "+4", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.50M", opportunity: "$1.51M", delta: "+$0.01M", confidence: "Low" },
        { driver: "Attach rate", baseline: "30%", opportunity: "31%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.25M", opportunity: "$0.25M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-048" as OpportunityId,
    signalId: "signal-10" as SignalId,
    name: "Offer Election-Season Brand Safety and Compliance Reporting",
    summary: "Help buyers document suitability controls as political content increases risk exposure.",
    detail:
      "During election seasons, adjacency risk rises across news and local content. Nielsen can offer a compliance and suitability reporting pack that documents controls, flags incidents, and produces procurement-ready governance artifacts for brands that must prove controls to boards and regulators.",
    assumptions: [
      "Brands will pay for governance when adjacency risk is highest.",
      "Suitability taxonomy can be standardized for local markets without overfitting.",
      "Compliance packs can be delivered using templates to protect margin.",
      "Governance reporting increases renewal retention for local measurement contracts."
    ],
    revenueDelta: [4, 9],
    model: {
      inputs: {
        baseUnits: 90,
        baseNetPrice: 1_500_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 250_000,
        baseArppu: 250_000,
        activeRate: 0.7
      },
      baselineRevenue: 160_650_000,
      opportunityRevenue: [164_650_000, 169_650_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: compliance reporting premium",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 4,
          assumption: "Charge premium for standardized governance artifacts during election windows."
        },
        {
          kind: "attach",
          label: "Attach expansion: suitability and incident reporting module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 3,
          assumption: "Attach suitability module to risk-sensitive accounts."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: incident reviews and weekly compliance snapshots",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 1,
          high: 2,
          assumption: "Sell weekly compliance snapshots as usage-based add-ons."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "90", opportunity: "90", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.50M", opportunity: "$1.52M", delta: "+$0.02M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "30%", opportunity: "31%", delta: "+1 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.25M", opportunity: "$0.26M", delta: "+$0.01M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-049" as OpportunityId,
    signalId: "signal-10" as SignalId,
    name: "Build a Forecasting Product for Political Spend Displacement",
    summary: "Help advertisers anticipate pricing pressure and inventory scarcity in local markets.",
    detail:
      "Political spend displaces commercial inventory and changes pricing dynamics in local markets. Nielsen can sell forecasting that estimates displacement, pricing pressure, and optimal budget reallocation, turning macro uncertainty into a decision-support product with recurring demand each cycle.",
    assumptions: [
      "Buyers will pay to reduce price shock and delivery risk during election cycles.",
      "Forecasts can be directionally accurate and operationally useful.",
      "Recurring cycles create repeated demand and predictable renewal motion.",
      "Forecasting can be bundled into war room subscriptions or sold standalone."
    ],
    revenueDelta: [5, 11],
    model: {
      inputs: {
        baseUnits: 90,
        baseNetPrice: 1_500_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 200_000,
        baseArppu: 300_000,
        activeRate: 0.7
      },
      baselineRevenue: 157_500_000,
      opportunityRevenue: [162_500_000, 168_500_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring forecast refreshes",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 7,
          assumption: "Forecast refresh cadence increases as uncertainty rises near election windows."
        },
        {
          kind: "price",
          label: "Price mix: premium for forecasting decision support",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 2,
          assumption: "Charge modest premium for forecast access and governance artifacts."
        },
        {
          kind: "units",
          label: "Unit expansion: new buyers adopt forecasting for local risk management",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 2,
          assumption: "Win incremental buyers who previously relied on internal heuristics."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "90", opportunity: "91", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$1.50M", opportunity: "$1.50M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "30%", opportunity: "30%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.30M", opportunity: "$0.32M", delta: "+$0.02M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-050" as OpportunityId,
    signalId: "signal-10" as SignalId,
    name: "Introduce a Rapid Post-Buy Reconciliation SLA Tier for Local",
    summary: "Turn reconciliation speed into a paid tier during high-volume campaign periods.",
    detail:
      "Local post-buy reconciliation becomes a bottleneck during political seasons. Nielsen can offer a premium SLA tier that accelerates reconciliation, reduces disputes, and improves cash collection cycles for stakeholders that value speed and defensibility.",
    assumptions: [
      "A subset of accounts will pay for faster reconciliation during peak periods.",
      "SLAs can be delivered with playbooks and automation to protect margin.",
      "Faster reconciliation reduces churn risk and improves renewal comfort.",
      "Premium tiers are easiest to sell as seasonal upgrades."
    ],
    revenueDelta: [3, 8],
    model: {
      inputs: {
        baseUnits: 90,
        baseNetPrice: 1_500_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 200_000,
        baseArppu: 250_000,
        activeRate: 0.7
      },
      baselineRevenue: 154_350_000,
      opportunityRevenue: [157_350_000, 162_350_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: premium for reconciliation SLA",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 5,
          assumption: "Charge premium for response-time SLAs and dispute-resolution support."
        },
        {
          kind: "units",
          label: "Unit expansion: retain renewals that would otherwise churn",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 0,
          high: 2,
          assumption: "Retain a small number of at-risk renewals by improving support experience."
        },
        {
          kind: "attach",
          label: "Attach expansion: optional post-buy audit module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 1,
          assumption: "Attach a small audit module to formalize the SLA tier."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "90", opportunity: "90", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.50M", opportunity: "$1.52M", delta: "+$0.02M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "30%", opportunity: "31%", delta: "+1 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.25M", opportunity: "$0.25M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-051" as OpportunityId,
    signalId: "signal-11" as SignalId,
    name: "Standardize UGC Suitability Taxonomy and Reporting for Agencies",
    summary: "Make suitability governance measurable and comparable across platforms and publishers.",
    detail:
      "UGC suitability is now a board-level risk topic, but reporting is inconsistent across platforms. Nielsen can standardize taxonomy and reporting so agencies can enforce suitability controls and produce procurement-ready governance artifacts across clients.",
    assumptions: [
      "Agencies want standardized suitability reporting to reduce operational complexity.",
      "Taxonomy can be standardized without losing relevance across categories.",
      "Standardization increases attach opportunities for Nielsen measurement products.",
      "Governance artifacts reduce churn by making vendor performance defensible."
    ],
    revenueDelta: [6, 14],
    model: {
      inputs: {
        baseUnits: 200,
        baseNetPrice: 1_000_000,
        baseAttachRate: 0.33,
        baseDlcPrice: 280_000,
        baseArppu: 150_000,
        activeRate: 0.55
      },
      baselineRevenue: 234_980_000,
      opportunityRevenue: [240_980_000, 248_980_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: governance premium for standardized suitability reporting",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 3,
          high: 7,
          assumption: "Charge premium for standardized taxonomy, controls reporting, and audit artifacts."
        },
        {
          kind: "attach",
          label: "Attach expansion: suitability reporting module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach suitability module to accounts with elevated governance requirements."
        },
        {
          kind: "units",
          label: "Unit expansion: win additional agency-wide contracts",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 2,
          assumption: "Expand into agency-wide contracts by being the standardized layer."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "200", opportunity: "201", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$1.00M", opportunity: "$1.02M", delta: "+$0.02M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "33%", opportunity: "34%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.15M", opportunity: "$0.15M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-052" as OpportunityId,
    signalId: "signal-11" as SignalId,
    name: "Sell Suitability Incident Response as a Premium Service",
    summary: "Turn inevitable incidents into a structured, paid response and governance workflow.",
    detail:
      "Incidents will happen; the differentiator is response. Nielsen can offer an incident response service that documents what happened, quantifies exposure, and produces governance-ready remediation recommendations, priced as a premium add-on to suitability reporting.",
    assumptions: [
      "Brands will pay for structured incident response to reduce board risk.",
      "Workflows can be standardized enough to avoid bespoke cost blowouts.",
      "Incident response increases renewal stickiness and reduces churn risk.",
      "The service pulls through broader suitability modules."
    ],
    revenueDelta: [4, 10],
    model: {
      inputs: {
        baseUnits: 200,
        baseNetPrice: 1_000_000,
        baseAttachRate: 0.33,
        baseDlcPrice: 250_000,
        baseArppu: 170_000,
        activeRate: 0.55
      },
      baselineRevenue: 232_250_000,
      opportunityRevenue: [236_250_000, 242_250_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: incident review services and remediation audits",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 7,
          assumption: "Incident responses and follow-up audits drive recurring paid services."
        },
        {
          kind: "price",
          label: "Price mix: premium for response-time SLAs",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 2,
          assumption: "Charge premium for rapid response SLAs and governance artifacts."
        },
        {
          kind: "units",
          label: "Unit expansion: incremental adoption from risk-sensitive brands",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 0,
          high: 1,
          assumption: "Win small incremental accounts where incident response is a differentiator."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "200", opportunity: "200", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.00M", opportunity: "$1.01M", delta: "+$0.01M", confidence: "Low" },
        { driver: "Attach rate", baseline: "33%", opportunity: "33%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.17M", opportunity: "$0.19M", delta: "+$0.02M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-053" as OpportunityId,
    signalId: "signal-11" as SignalId,
    name: "Offer Cross-Platform Suitability ‘Exclusion Audit’ Reporting",
    summary: "Help brands prove they honored suitability and exclusion rules across spend.",
    detail:
      "Boards and regulators increasingly ask whether suitability controls were actually enforced. Nielsen can sell an exclusion audit module that documents enforcement across platforms and spend, providing defensible evidence when questions arise.",
    assumptions: [
      "Brands will pay to prove enforcement when governance scrutiny is high.",
      "Audit reporting can be standardized enough to scale.",
      "Cross-platform reporting differentiates Nielsen from platform-native reports.",
      "Audit modules attach naturally at renewal and during compliance reviews."
    ],
    revenueDelta: [5, 11],
    model: {
      inputs: {
        baseUnits: 200,
        baseNetPrice: 1_000_000,
        baseAttachRate: 0.33,
        baseDlcPrice: 280_000,
        baseArppu: 150_000,
        activeRate: 0.55
      },
      baselineRevenue: 234_980_000,
      opportunityRevenue: [239_980_000, 245_980_000],
      lines: [
        {
          kind: "attach",
          label: "Attach expansion: exclusion audit module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach audit module for brands under stricter governance requirements."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring audit snapshots and reviews",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 1,
          high: 3,
          assumption: "Quarterly audit snapshots drive recurring usage-based revenue."
        },
        {
          kind: "price",
          label: "Price mix: premium for compliance-grade reporting",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 3,
          assumption: "Charge modest premium for compliance-grade documentation."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "200", opportunity: "200", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.00M", opportunity: "$1.01M", delta: "+$0.01M", confidence: "Low" },
        { driver: "Attach rate", baseline: "33%", opportunity: "34%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.15M", opportunity: "$0.16M", delta: "+$0.01M", confidence: "Medium" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-054" as OpportunityId,
    signalId: "signal-11" as SignalId,
    name: "Create a Publisher Certification Program for ‘Safe Supply’",
    summary: "Sell a certification that reduces procurement friction and raises premium spend.",
    detail:
      "Publishers want a way to signal safety and governance, while buyers want fewer vendor exceptions. Nielsen can create a certification program that ties suitability controls, reporting integrity, and auditability into a badge that accelerates approvals and increases spend.",
    assumptions: [
      "Publishers will fund certification if it expands premium demand.",
      "Buyers will treat certification as a procurement shortcut.",
      "Certification criteria can be stable and defensible across publishers.",
      "Certification reduces disputes and improves renewal retention."
    ],
    revenueDelta: [4, 9],
    model: {
      inputs: {
        baseUnits: 200,
        baseNetPrice: 1_000_000,
        baseAttachRate: 0.33,
        baseDlcPrice: 250_000,
        baseArppu: 150_000,
        activeRate: 0.55
      },
      baselineRevenue: 232_250_000,
      opportunityRevenue: [236_250_000, 241_250_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: certification brings new publisher clients",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 4,
          assumption: "Win incremental publisher contracts as certification becomes a market signal."
        },
        {
          kind: "attach",
          label: "Attach expansion: certification audit module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 3,
          assumption: "Attach ongoing audit services as part of certification maintenance."
        },
        {
          kind: "price",
          label: "Price mix: premium for certified reporting",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 2,
          assumption: "Charge premium for certification and governance reporting."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "200", opportunity: "202", delta: "+2", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.00M", opportunity: "$1.01M", delta: "+$0.01M", confidence: "Low" },
        { driver: "Attach rate", baseline: "33%", opportunity: "34%", delta: "+1 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.15M", opportunity: "$0.15M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-055" as OpportunityId,
    signalId: "signal-11" as SignalId,
    name: "Sell an Agency-Wide Suitability Governance Subscription",
    summary: "Bundle taxonomy, audits, and quarterly governance packs to standardize agency operations.",
    detail:
      "Agencies struggle to manage suitability at scale across dozens of clients. Nielsen can sell an agency-wide governance subscription that standardizes taxonomy, reporting, and audit workflows, then produces quarterly governance packs agencies can share with clients and boards.",
    assumptions: [
      "Agencies will pay for operational simplification if it reduces risk and labor.",
      "Quarterly governance packs become a recurring value moment.",
      "Agency subscriptions expand cross-sell into advertiser accounts.",
      "Standardization reduces churn by making the vendor indispensable."
    ],
    revenueDelta: [5, 12],
    model: {
      inputs: {
        baseUnits: 120,
        baseNetPrice: 1_400_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 300_000,
        baseArppu: 200_000,
        activeRate: 0.6
      },
      baselineRevenue: 206_400_000,
      opportunityRevenue: [211_400_000, 218_400_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: premium subscription for agency governance",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 3,
          high: 7,
          assumption: "Agency-wide governance subscription commands premium pricing versus per-client contracts."
        },
        {
          kind: "units",
          label: "Unit expansion: new agency groups adopt standardized governance",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 2,
          assumption: "Win additional agency groups seeking to reduce risk exposure."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: quarterly governance packs and audits",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 1,
          high: 3,
          assumption: "Quarterly audits and packs drive recurring service revenue."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "120", opportunity: "121", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$1.40M", opportunity: "$1.42M", delta: "+$0.02M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "30%", opportunity: "30%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.20M", opportunity: "$0.21M", delta: "+$0.01M", confidence: "Medium" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-056" as OpportunityId,
    signalId: "signal-12" as SignalId,
    name: "Offer a Hybrid Panel + Census Measurement Starter Kit for Emerging Markets",
    summary: "Win early currency positions where panel infrastructure is thin but demand is accelerating.",
    detail:
      "In many emerging markets, platform growth outpaces traditional panels. Nielsen can offer a hybrid starter kit that blends smaller panels with census and modeled signals, with clear auditability and confidence bands. Winning early sets durable currency positions as standards are set.",
    assumptions: [
      "Hybrid approaches are acceptable if transparency and confidence bands are clear.",
      "A starter kit lowers implementation burden for markets with limited infrastructure.",
      "Early wins create multi-year switching costs as standards reset.",
      "Regional partners can supply census-like signals for scale."
    ],
    revenueDelta: [7, 16],
    model: {
      inputs: {
        baseUnits: 130,
        baseNetPrice: 1_300_000,
        baseAttachRate: 0.26,
        baseDlcPrice: 320_000,
        baseArppu: 160_000,
        activeRate: 0.6
      },
      baselineRevenue: 192_300_000,
      opportunityRevenue: [199_300_000, 208_300_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: new market contracts won with hybrid measurement",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 4,
          high: 8,
          assumption: "Win incremental contracts as markets select new cross-platform currencies."
        },
        {
          kind: "attach",
          label: "Attach expansion: hybrid modeling and QA module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach modeling and QA services to maintain credibility as coverage scales."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring calibration and confidence reviews",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 1,
          high: 3,
          assumption: "Calibration reviews become recurring governance events."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "130", opportunity: "134", delta: "+4", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.30M", opportunity: "$1.30M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "26%", opportunity: "27%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.16M", opportunity: "$0.17M", delta: "+$0.01M", confidence: "Medium" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-057" as OpportunityId,
    signalId: "signal-12" as SignalId,
    name: "Charge a Premium for Localized Data Residency Deployments",
    summary: "Turn compliance friction into revenue by shipping ‘compliance-by-design’ measurement.",
    detail:
      "Data localization rules are forcing local deployments and governance controls. Nielsen can charge a premium for localized, compliant measurement deployments that maintain global definition consistency while satisfying residency and access constraints.",
    assumptions: [
      "Enterprises will pay for compliance-by-design rather than building internally.",
      "Localized deployments can be standardized enough to avoid bespoke costs.",
      "Compliance reduces deal friction and improves renewal stability.",
      "Regional deployments create a platform for broader land-and-expand."
    ],
    revenueDelta: [4, 10],
    model: {
      inputs: {
        baseUnits: 130,
        baseNetPrice: 1_300_000,
        baseAttachRate: 0.26,
        baseDlcPrice: 300_000,
        baseArppu: 160_000,
        activeRate: 0.6
      },
      baselineRevenue: 190_260_000,
      opportunityRevenue: [194_260_000, 200_260_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: compliance premium for localized deployments",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 3,
          high: 7,
          assumption: "Charge premium for data residency compliance and governance controls."
        },
        {
          kind: "units",
          label: "Unit expansion: new regulated market contracts",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 0,
          high: 2,
          assumption: "Win incremental contracts where compliance is a gating requirement."
        },
        {
          kind: "attach",
          label: "Attach expansion: governance and audit reporting module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 1,
          assumption: "Attach governance reporting to formalize compliance posture."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "130", opportunity: "130", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.30M", opportunity: "$1.32M", delta: "+$0.02M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "26%", opportunity: "27%", delta: "+1 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.16M", opportunity: "$0.16M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-058" as OpportunityId,
    signalId: "signal-12" as SignalId,
    name: "Win Streaming Measurement Partnerships Where Currencies Are Resetting",
    summary: "Land streaming partners early in emerging markets before standards ossify.",
    detail:
      "Emerging markets are adopting streaming quickly, and measurement currencies are still being established. Nielsen can win key partnerships with platforms and broadcasters by offering a credible hybrid methodology and local compliance, then expand modules over time.",
    assumptions: [
      "Platforms in emerging markets want independent measurement to unlock ad budgets.",
      "Hybrid measurement is acceptable if methodology is transparent.",
      "Early partnerships create multi-year lock-in due to integration and standard setting.",
      "Partnerships create pull-through for advertiser measurement subscriptions."
    ],
    revenueDelta: [6, 14],
    model: {
      inputs: {
        baseUnits: 130,
        baseNetPrice: 1_300_000,
        baseAttachRate: 0.26,
        baseDlcPrice: 320_000,
        baseArppu: 160_000,
        activeRate: 0.6
      },
      baselineRevenue: 192_300_000,
      opportunityRevenue: [198_300_000, 206_300_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: new streaming and broadcaster partnerships",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 4,
          high: 8,
          assumption: "Win a small set of anchor partnerships that open broader market adoption."
        },
        {
          kind: "attach",
          label: "Attach expansion: cross-platform dedupe module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 3,
          assumption: "Attach dedupe and QA modules as streaming inventory scales."
        },
        {
          kind: "price",
          label: "Price mix: premium for currency leadership in new markets",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 3,
          assumption: "Charge premium for currency leadership and governance artifacts."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "130", opportunity: "134", delta: "+4", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.30M", opportunity: "$1.31M", delta: "+$0.01M", confidence: "Low" },
        { driver: "Attach rate", baseline: "26%", opportunity: "27%", delta: "+1 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.16M", opportunity: "$0.16M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-059" as OpportunityId,
    signalId: "signal-12" as SignalId,
    name: "Sell a Cross-Border Governance Pack for Multinational Advertisers",
    summary: "Standardize definitions globally while honoring regional compliance requirements.",
    detail:
      "Multinationals want consistent reporting, but data rules vary by region. Nielsen can sell a governance pack that standardizes definitions, documents methodology, and provides regional deployment playbooks so global stakeholders can compare results without violating local constraints.",
    assumptions: [
      "Multinationals will pay for consistency and governance in reporting.",
      "Governance artifacts can be standardized and reused across accounts.",
      "Regional compliance playbooks reduce deal friction and churn risk.",
      "The pack increases attach rates for localized deployment offerings."
    ],
    revenueDelta: [5, 12],
    model: {
      inputs: {
        baseUnits: 130,
        baseNetPrice: 1_300_000,
        baseAttachRate: 0.26,
        baseDlcPrice: 320_000,
        baseArppu: 160_000,
        activeRate: 0.6
      },
      baselineRevenue: 192_300_000,
      opportunityRevenue: [197_300_000, 204_300_000],
      lines: [
        {
          kind: "attach",
          label: "Attach expansion: governance and audit reporting module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach governance reporting as procurement and legal teams demand documentation."
        },
        {
          kind: "price",
          label: "Price mix: premium for globally consistent definitions",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 4,
          assumption: "Charge premium for standard definitions and deployment playbooks across regions."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: periodic cross-border reviews and recalibration",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 1,
          high: 3,
          assumption: "Sell periodic reviews as recurring paid services."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "130", opportunity: "130", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.30M", opportunity: "$1.31M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "26%", opportunity: "27%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.16M", opportunity: "$0.17M", delta: "+$0.01M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-060" as OpportunityId,
    signalId: "signal-12" as SignalId,
    name: "Launch High-Growth Cohort Audience Segments as a Product",
    summary: "Monetize fast-growing cohorts with standardized segments for planning and reporting.",
    detail:
      "In emerging markets, a few cohorts drive outsized growth (mobile-first households, first-time streamers, young families). Nielsen can package standardized cohort segments for planning and reporting, helping advertisers move faster while creating a paid usage layer.",
    assumptions: [
      "Advertisers will pay for standardized, comparable cohort definitions.",
      "Segments can be maintained with stable methodology as markets evolve.",
      "Segment usage ties naturally to planning and reporting workflows.",
      "Cohort segments increase stickiness and cross-sell into broader measurement."
    ],
    revenueDelta: [4, 10],
    model: {
      inputs: {
        baseUnits: 130,
        baseNetPrice: 1_300_000,
        baseAttachRate: 0.26,
        baseDlcPrice: 250_000,
        baseArppu: 180_000,
        activeRate: 0.6
      },
      baselineRevenue: 187_100_000,
      opportunityRevenue: [191_100_000, 197_100_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: cohort segment usage in planning and reporting",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 6,
          assumption: "Segment usage grows with campaign volume and refresh cadence."
        },
        {
          kind: "units",
          label: "Unit expansion: new advertisers adopt cohort targeting and reporting",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 3,
          assumption: "Win incremental clients where cohort definitions reduce planning uncertainty."
        },
        {
          kind: "price",
          label: "Price mix: premium for segment access",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 1,
          assumption: "Charge small premium for segment access in enterprise contracts."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "130", opportunity: "131", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$1.30M", opportunity: "$1.30M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "26%", opportunity: "26%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.18M", opportunity: "$0.19M", delta: "+$0.01M", confidence: "Medium" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-061" as OpportunityId,
    signalId: "signal-13" as SignalId,
    name: "Ship an Incrementality Measurement Suite (Matched-Market + Clean Room)",
    summary: "Make ‘what did this add?’ the default question Nielsen answers for enterprise buyers.",
    detail:
      "Outcome-based buying pushes measurement from delivery to incrementality. Nielsen can ship an incrementality suite that standardizes matched-market designs, uses clean-room-safe linkage where needed, and outputs confidence-banded deltas that finance and procurement accept.",
    assumptions: [
      "Buyers will fund incrementality when budgets are scrutinized.",
      "Methodology can be standardized enough to scale without bespoke consulting.",
      "Clean-room workflows reduce privacy friction and speed approvals.",
      "Outcome results pull-through renewals and modules."
    ],
    revenueDelta: [10, 24],
    model: {
      inputs: {
        baseUnits: 210,
        baseNetPrice: 1_600_000,
        baseAttachRate: 0.32,
        baseDlcPrice: 420_000,
        baseArppu: 250_000,
        activeRate: 0.55
      },
      baselineRevenue: 393_100_000,
      opportunityRevenue: [403_100_000, 417_100_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: incrementality experiments and refresh cycles",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 4,
          high: 10,
          assumption: "Experiment refresh cadence drives recurring analysis and reporting fees."
        },
        {
          kind: "units",
          label: "Unit expansion: new enterprise outcomes contracts",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 4,
          high: 8,
          assumption: "Win incremental enterprise accounts adopting incrementality as governance."
        },
        {
          kind: "attach",
          label: "Attach expansion: clean-room connector and experiment module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 6,
          assumption: "Attach connectors and experiment tooling as required infrastructure."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "210", opportunity: "214", delta: "+4", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.60M", opportunity: "$1.60M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "32%", opportunity: "34%", delta: "+2 pts", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.25M", opportunity: "$0.28M", delta: "+$0.03M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-062" as OpportunityId,
    signalId: "signal-13" as SignalId,
    name: "Productize Outcome-Based Contract Language and Governance Artifacts",
    summary: "Sell defensibility: standard definitions, audit trails, and procurement-ready packets.",
    detail:
      "Outcome-based buying increases disputes unless definitions and governance are standardized. Nielsen can package contract language templates, methodology explainers, and audit artifacts as a premium tier that lowers friction in procurement and accelerates renewals.",
    assumptions: [
      "Procurement will increasingly require standardized governance artifacts.",
      "Templates cover most objections without bespoke work.",
      "Governance premium reduces churn by increasing defensibility.",
      "Governance artifacts increase attach of outcomes products."
    ],
    revenueDelta: [6, 14],
    model: {
      inputs: {
        baseUnits: 210,
        baseNetPrice: 1_600_000,
        baseAttachRate: 0.32,
        baseDlcPrice: 350_000,
        baseArppu: 220_000,
        activeRate: 0.55
      },
      baselineRevenue: 375_220_000,
      opportunityRevenue: [381_220_000, 389_220_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: governance premium for outcome-based contracts",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 3,
          high: 7,
          assumption: "Charge premium for audit-ready packets and standardized definitions."
        },
        {
          kind: "attach",
          label: "Attach expansion: outcome governance module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach governance module where outcomes are tied to payment terms."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: paid methodology workshops",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 1,
          high: 2,
          assumption: "Convert governance meetings into paid workshops and training."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "210", opportunity: "210", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.60M", opportunity: "$1.61M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "32%", opportunity: "33%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.22M", opportunity: "$0.22M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-063" as OpportunityId,
    signalId: "signal-13" as SignalId,
    name: "Bridge Retail + Media Outcomes With a Clean-Room ‘Closed Loop’ Module",
    summary: "Make closed-loop outcomes repeatable across partners and retailers.",
    detail:
      "Outcome buying often breaks at the join between media and commerce. Nielsen can offer a closed-loop module that standardizes clean-room joins and reporting across partners, turning one-off experiments into a repeatable enterprise workflow.",
    assumptions: [
      "A repeatable closed-loop workflow increases buyer willingness to scale spend.",
      "Clean-room joins can be standardized across common partners.",
      "Closed-loop reporting commands premium pricing due to business value.",
      "Closed-loop modules reduce switching risk by owning definitions."
    ],
    revenueDelta: [8, 18],
    model: {
      inputs: {
        baseUnits: 210,
        baseNetPrice: 1_600_000,
        baseAttachRate: 0.32,
        baseDlcPrice: 420_000,
        baseArppu: 250_000,
        activeRate: 0.55
      },
      baselineRevenue: 393_100_000,
      opportunityRevenue: [401_100_000, 411_100_000],
      lines: [
        {
          kind: "attach",
          label: "Attach expansion: closed-loop connector module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 3,
          high: 7,
          assumption: "Attach connectors once outcomes reporting becomes a procurement requirement."
        },
        {
          kind: "units",
          label: "Unit expansion: closed-loop capability wins new enterprise accounts",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 3,
          high: 6,
          assumption: "Win incremental accounts when closed-loop outcomes are a deciding factor."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring incremental lift readouts",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 5,
          assumption: "Outcome readouts drive recurring analysis and reporting usage."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "210", opportunity: "213", delta: "+3", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.60M", opportunity: "$1.60M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "32%", opportunity: "33%", delta: "+1 pt", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.25M", opportunity: "$0.26M", delta: "+$0.01M", confidence: "Medium" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-064" as OpportunityId,
    signalId: "signal-13" as SignalId,
    name: "Deliver Executive Outcome Dashboards That Tie Spend to Business Deltas",
    summary: "Turn outcome measurement into a board-facing product with recurring refresh value.",
    detail:
      "Outcome measurement often dies in analyst decks. Nielsen can ship an executive dashboard that surfaces business deltas with confidence bands and decision notes, making outcomes a recurring governance touchpoint rather than a one-off study.",
    assumptions: [
      "Executive stakeholders value consistent, governed outcome readouts.",
      "A standard set of KPIs covers most board questions.",
      "Recurring refresh cycles justify usage-based pricing.",
      "Dashboards increase retention by improving perceived strategic value."
    ],
    revenueDelta: [5, 12],
    model: {
      inputs: {
        baseUnits: 210,
        baseNetPrice: 1_600_000,
        baseAttachRate: 0.32,
        baseDlcPrice: 350_000,
        baseArppu: 250_000,
        activeRate: 0.55
      },
      baselineRevenue: 375_220_000,
      opportunityRevenue: [380_220_000, 387_220_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring dashboard refreshes",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 7,
          assumption: "Boards and finance request recurring updates and scenario refreshes."
        },
        {
          kind: "price",
          label: "Price mix: premium for executive reporting tier",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 3,
          assumption: "Charge modest premium for a board-facing reporting tier."
        },
        {
          kind: "units",
          label: "Unit expansion: expand into finance-led measurement buyers",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 2,
          assumption: "Win incremental accounts as finance requires governed outcome reporting."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "210", opportunity: "211", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$1.60M", opportunity: "$1.61M", delta: "+$0.01M", confidence: "Low" },
        { driver: "Attach rate", baseline: "32%", opportunity: "32%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.25M", opportunity: "$0.26M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-065" as OpportunityId,
    signalId: "signal-13" as SignalId,
    name: "Convert Outcome Consulting Into a Product-Led Expansion Motion",
    summary: "Use a standardized outcomes playbook to land, then expand into modules and renewals.",
    detail:
      "Boards want outcomes now, even if data is messy. Nielsen can offer a standardized consulting play that delivers quick outcome answers, then converts successful engagements into ongoing subscriptions, connectors, and governance modules.",
    assumptions: [
      "Consulting can be standardized to protect margin and speed.",
      "Successful engagements convert to subscriptions at meaningful rates.",
      "Product modules can be positioned as ‘automation of what we just did’.",
      "Outcome wins improve renewal retention by increasing strategic value."
    ],
    revenueDelta: [7, 15],
    model: {
      inputs: {
        baseUnits: 120,
        baseNetPrice: 1_900_000,
        baseAttachRate: 0.25,
        baseDlcPrice: 400_000,
        baseArppu: 350_000,
        activeRate: 0.65
      },
      baselineRevenue: 287_875_000,
      opportunityRevenue: [294_875_000, 302_875_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: consulting-led land converts to subscriptions",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 4,
          assumption: "Convert a portion of outcome consulting engagements to recurring subscriptions."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring outcome deep dives",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 7,
          assumption: "Outcome deep dives become recurring, funded by performance budgets."
        },
        {
          kind: "price",
          label: "Price mix: premium for faster decision windows",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 4,
          assumption: "Charge premium for rapid-turn outcome deliverables tied to decision windows."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "120", opportunity: "122", delta: "+2", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.90M", opportunity: "$1.91M", delta: "+$0.01M", confidence: "Low" },
        { driver: "Attach rate", baseline: "25%", opportunity: "25%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.35M", opportunity: "$0.37M", delta: "+$0.02M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-066" as OpportunityId,
    signalId: "signal-14" as SignalId,
    name: "Make MMM the Governance Layer: Integrate MMM + Experiments + Measurement",
    summary: "Position Nielsen as the orchestration layer that reconciles competing ‘truths’.",
    detail:
      "MMM is returning as the cross-channel governance tool in a privacy-constrained world. Nielsen can integrate MMM with experiments and measurement into a single governance layer, with consistent definitions and decision notes that help finance and marketing agree on what to believe.",
    assumptions: [
      "Enterprises want a single governance layer to reconcile MMM and platform reporting.",
      "Integration can be standardized across common MMM tooling and workflows.",
      "Governance features command premium pricing and improve retention.",
      "A unified layer reduces internal political friction, increasing stickiness."
    ],
    revenueDelta: [9, 20],
    model: {
      inputs: {
        baseUnits: 170,
        baseNetPrice: 1_800_000,
        baseAttachRate: 0.28,
        baseDlcPrice: 400_000,
        baseArppu: 300_000,
        activeRate: 0.6
      },
      baselineRevenue: 355_640_000,
      opportunityRevenue: [364_640_000, 375_640_000],
      lines: [
        {
          kind: "attach",
          label: "Attach expansion: MMM governance integration module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 3,
          high: 7,
          assumption: "Attach integration once clients run MMM and need consistent governance."
        },
        {
          kind: "price",
          label: "Price mix: premium for finance-grade governance",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 3,
          high: 7,
          assumption: "Charge premium for governance that reduces disputes between finance and marketing."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring calibration and scenario refreshes",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 6,
          assumption: "Scenario refresh cycles create recurring usage-based fees."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "170", opportunity: "170", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.80M", opportunity: "$1.82M", delta: "+$0.02M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "28%", opportunity: "29%", delta: "+1 pt", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.30M", opportunity: "$0.31M", delta: "+$0.01M", confidence: "Medium" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-067" as OpportunityId,
    signalId: "signal-14" as SignalId,
    name: "Sell Always-On MMM Refresh as a Subscription",
    summary: "Move MMM from annual exercise to monthly governance with recurring revenue.",
    detail:
      "The value of MMM rises when it updates with the market. Nielsen can sell always-on MMM refresh subscriptions that publish monthly channel effectiveness updates, confidence bands, and decision notes for budget reallocation.",
    assumptions: [
      "Enterprises will pay for recurring refreshes if it supports budget decisions.",
      "Refresh processes can be automated enough to scale.",
      "Monthly cadence becomes a governance ritual tied to finance planning cycles.",
      "Always-on MMM improves retention by embedding Nielsen in operating cadence."
    ],
    revenueDelta: [7, 16],
    model: {
      inputs: {
        baseUnits: 170,
        baseNetPrice: 1_800_000,
        baseAttachRate: 0.28,
        baseDlcPrice: 350_000,
        baseArppu: 300_000,
        activeRate: 0.6
      },
      baselineRevenue: 346_120_000,
      opportunityRevenue: [353_120_000, 362_120_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: monthly MMM refresh cycles",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 4,
          high: 10,
          assumption: "Recurring refresh cycles drive service revenue and API usage."
        },
        {
          kind: "price",
          label: "Price mix: premium for always-on governance",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 4,
          assumption: "Charge premium for shifting MMM from annual to always-on."
        },
        {
          kind: "units",
          label: "Unit expansion: new clients adopt subscription MMM",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 2,
          assumption: "Win incremental accounts that want a governance layer without building internally."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "170", opportunity: "171", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$1.80M", opportunity: "$1.81M", delta: "+$0.01M", confidence: "Low" },
        { driver: "Attach rate", baseline: "28%", opportunity: "28%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.30M", opportunity: "$0.32M", delta: "+$0.02M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-068" as OpportunityId,
    signalId: "signal-14" as SignalId,
    name: "Add an Experiment Calibration Module to Keep MMM Honest",
    summary: "Tie experiments to MMM to increase trust and reduce internal disputes.",
    detail:
      "MMM is trusted when it is calibrated to reality. Nielsen can attach an experiment calibration module that ingests matched-market tests and adjusts MMM priors, producing explainable changes and audit trails.",
    assumptions: [
      "Clients running experiments want them reflected in MMM governance.",
      "Calibration can be standardized for common experiment designs.",
      "Auditability reduces disputes and increases retention.",
      "The module attaches naturally to always-on MMM subscriptions."
    ],
    revenueDelta: [6, 14],
    model: {
      inputs: {
        baseUnits: 170,
        baseNetPrice: 1_800_000,
        baseAttachRate: 0.28,
        baseDlcPrice: 400_000,
        baseArppu: 300_000,
        activeRate: 0.6
      },
      baselineRevenue: 355_640_000,
      opportunityRevenue: [361_640_000, 369_640_000],
      lines: [
        {
          kind: "attach",
          label: "Attach expansion: experiment calibration module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach calibration to clients running experiments and needing governance linkage."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring calibration runs and model refreshes",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 5,
          assumption: "Calibration cycles generate recurring analysis work."
        },
        {
          kind: "units",
          label: "Unit expansion: new MMM accounts attracted by ‘trust’ story",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 4,
          assumption: "Win incremental accounts where MMM skepticism blocks adoption."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "170", opportunity: "172", delta: "+2", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.80M", opportunity: "$1.80M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "28%", opportunity: "29%", delta: "+1 pt", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.30M", opportunity: "$0.31M", delta: "+$0.01M", confidence: "Medium" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-069" as OpportunityId,
    signalId: "signal-14" as SignalId,
    name: "Publish Finance-Grade Scenario Packs for Budget Reallocation",
    summary: "Turn MMM outputs into a scenario engine finance can action.",
    detail:
      "Boards want scenarios, not point estimates. Nielsen can sell scenario packs that translate MMM into what-if budget shifts with confidence ranges and decision notes, aligned to finance planning cycles.",
    assumptions: [
      "Finance stakeholders value scenario outputs over static ROI tables.",
      "Scenarios can be generated consistently with clear assumptions.",
      "Scenario packs become recurring quarterly deliverables.",
      "Packaging improves renewal retention by increasing executive visibility."
    ],
    revenueDelta: [5, 12],
    model: {
      inputs: {
        baseUnits: 170,
        baseNetPrice: 1_800_000,
        baseAttachRate: 0.28,
        baseDlcPrice: 300_000,
        baseArppu: 300_000,
        activeRate: 0.6
      },
      baselineRevenue: 336_600_000,
      opportunityRevenue: [341_600_000, 348_600_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: premium for finance-grade scenarios",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 3,
          high: 6,
          assumption: "Charge premium for scenario packs aligned to finance planning cycles."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: quarterly scenario refresh and stakeholder workshops",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 1,
          high: 3,
          assumption: "Refresh cycles include stakeholder workshops and interpretation."
        },
        {
          kind: "units",
          label: "Unit expansion: expand into finance-led buyers",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 3,
          assumption: "Win incremental accounts where finance requires governed scenarios."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "170", opportunity: "171", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$1.80M", opportunity: "$1.81M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "28%", opportunity: "28%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.30M", opportunity: "$0.31M", delta: "+$0.01M", confidence: "Medium" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-070" as OpportunityId,
    signalId: "signal-14" as SignalId,
    name: "Create a Systems-Integrator Partner Motion for MMM Deployments",
    summary: "Scale implementation by enabling partners, while keeping Nielsen as the governance layer.",
    detail:
      "MMM and governance implementations often require enterprise change management. Nielsen can scale by enabling SIs and consultancies with standardized integration kits and governance templates, while keeping Nielsen as the measurement and definition layer.",
    assumptions: [
      "Partners will sell faster if templates reduce implementation risk.",
      "Nielsen can preserve ownership of definitions and reporting outputs.",
      "Partner motion expands coverage without linear headcount growth.",
      "Implementation partnerships increase renewal stickiness."
    ],
    revenueDelta: [4, 10],
    model: {
      inputs: {
        baseUnits: 170,
        baseNetPrice: 1_800_000,
        baseAttachRate: 0.28,
        baseDlcPrice: 300_000,
        baseArppu: 240_000,
        activeRate: 0.6
      },
      baselineRevenue: 326_400_000,
      opportunityRevenue: [330_400_000, 336_400_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: partner-sourced MMM wins",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 4,
          assumption: "SIs source incremental deals when implementation risk is reduced."
        },
        {
          kind: "attach",
          label: "Attach expansion: integration and governance module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 3,
          assumption: "Attach governance modules as part of standardized deployments."
        },
        {
          kind: "price",
          label: "Price mix: premium for partner-certified deployments",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 3,
          assumption: "Charge premium for partner-certified deployments and reduced time-to-value."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "170", opportunity: "172", delta: "+2", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.80M", opportunity: "$1.81M", delta: "+$0.01M", confidence: "Low" },
        { driver: "Attach rate", baseline: "28%", opportunity: "29%", delta: "+1 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.24M", opportunity: "$0.24M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-071" as OpportunityId,
    signalId: "signal-15" as SignalId,
    name: "Package Shoppable Video Measurement With Commerce Lift Readouts",
    summary: "Give boards a defensible view of commerce lift from video exposure.",
    detail:
      "Shoppable video blurs media and commerce. Nielsen can sell a measurement package that quantifies commerce lift with confidence bands, making shoppable spend governable and enabling budget expansion.",
    assumptions: [
      "Brands will pay for commerce lift measurement to justify scaling spend.",
      "Lift can be estimated in privacy-safe ways via clean-room workflows.",
      "Standard readouts cover most stakeholder questions.",
      "Recurring campaign cadence creates repeat usage revenue."
    ],
    revenueDelta: [7, 16],
    model: {
      inputs: {
        baseUnits: 150,
        baseNetPrice: 1_250_000,
        baseAttachRate: 0.25,
        baseDlcPrice: 350_000,
        baseArppu: 280_000,
        activeRate: 0.65
      },
      baselineRevenue: 227_925_000,
      opportunityRevenue: [234_925_000, 243_925_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: commerce lift readouts per campaign",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 4,
          high: 9,
          assumption: "Commerce lift readouts repeat across campaigns and retailer partners."
        },
        {
          kind: "units",
          label: "Unit expansion: new shoppable video measurement buyers",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 4,
          assumption: "Win incremental clients as shoppable video budgets scale."
        },
        {
          kind: "price",
          label: "Price mix: premium for outcomes-linked reporting",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 3,
          assumption: "Charge premium when reporting is tied to commerce outcomes."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "150", opportunity: "152", delta: "+2", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.25M", opportunity: "$1.26M", delta: "+$0.01M", confidence: "Low" },
        { driver: "Attach rate", baseline: "25%", opportunity: "25%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.28M", opportunity: "$0.30M", delta: "+$0.02M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-072" as OpportunityId,
    signalId: "signal-15" as SignalId,
    name: "Sell Creator Commerce Attribution Connectors as an Attach Module",
    summary: "Turn fragmented affiliate/creator signals into standardized, privacy-safe reporting.",
    detail:
      "Creator commerce lives in messy affiliate and platform-specific data. Nielsen can sell connectors and standardized reporting that attribute commerce outcomes to creator exposure in privacy-safe ways, improving spend confidence.",
    assumptions: [
      "Creators and platforms provide enough signal to build repeatable connectors.",
      "Brands will pay for standardized attribution across creators.",
      "Connector attach rates are strong because they unlock otherwise trapped data.",
      "Standardization reduces the cost of bespoke attribution projects."
    ],
    revenueDelta: [6, 14],
    model: {
      inputs: {
        baseUnits: 150,
        baseNetPrice: 1_250_000,
        baseAttachRate: 0.25,
        baseDlcPrice: 350_000,
        baseArppu: 260_000,
        activeRate: 0.65
      },
      baselineRevenue: 225_975_000,
      opportunityRevenue: [231_975_000, 239_975_000],
      lines: [
        {
          kind: "attach",
          label: "Attach expansion: creator commerce connector module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach connectors into contracts as creator commerce becomes a recurring line item."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring attribution runs and reporting",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 6,
          assumption: "Attribution runs repeat across creators and campaigns."
        },
        {
          kind: "units",
          label: "Unit expansion: new creator-led commerce measurement buyers",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 3,
          assumption: "Win incremental buyers when attribution becomes required for scaling spend."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "150", opportunity: "151", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$1.25M", opportunity: "$1.25M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "25%", opportunity: "26%", delta: "+1 pt", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.26M", opportunity: "$0.28M", delta: "+$0.02M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-073" as OpportunityId,
    signalId: "signal-15" as SignalId,
    name: "License Commerce Taxonomy and SKU-Level Metadata for Planning",
    summary: "Create a data licensing line that makes commerce signals usable in media workflows.",
    detail:
      "Commerce data is often unusable in planning without taxonomy and metadata. Nielsen can license standardized commerce taxonomy and metadata that help brands plan and report across retailers and shoppable surfaces.",
    assumptions: [
      "Brands will pay for standard definitions that reduce internal data wrangling.",
      "Taxonomy can be maintained as retailers and categories evolve.",
      "Licensing can scale via APIs and coverage tiers.",
      "Metadata licensing increases stickiness of outcomes products."
    ],
    revenueDelta: [5, 12],
    model: {
      inputs: {
        baseUnits: 150,
        baseNetPrice: 1_250_000,
        baseAttachRate: 0.25,
        baseDlcPrice: 300_000,
        baseArppu: 240_000,
        activeRate: 0.65
      },
      baselineRevenue: 222_075_000,
      opportunityRevenue: [227_075_000, 234_075_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: taxonomy licensing uplift",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 3,
          high: 7,
          assumption: "Charge contract uplift for access to standardized commerce taxonomies."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: API usage for taxonomy pulls",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 1,
          high: 3,
          assumption: "API usage scales with planning and reporting cadence."
        },
        {
          kind: "units",
          label: "Unit expansion: new clients buy taxonomy to enable shoppable reporting",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 2,
          assumption: "Win incremental clients prioritizing commerce-linked measurement."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "150", opportunity: "151", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$1.25M", opportunity: "$1.26M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "25%", opportunity: "25%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.24M", opportunity: "$0.25M", delta: "+$0.01M", confidence: "Medium" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-074" as OpportunityId,
    signalId: "signal-15" as SignalId,
    name: "Offer Joint Retailer + Publisher Reporting for Shoppable Video Programs",
    summary: "Create a repeatable reporting product that aligns stakeholders across commerce and media.",
    detail:
      "Shoppable programs often fail because stakeholders use different definitions and tools. Nielsen can offer joint reporting that aligns retailer and publisher views, showing incremental lift and confidence bands in one place.",
    assumptions: [
      "Retailers and publishers will cooperate if joint reporting expands budgets.",
      "Standard templates can cover most programs without bespoke work.",
      "Joint reporting reduces disputes and increases renewal rates.",
      "Cross-stakeholder alignment increases attach of connectors."
    ],
    revenueDelta: [6, 13],
    model: {
      inputs: {
        baseUnits: 150,
        baseNetPrice: 1_250_000,
        baseAttachRate: 0.25,
        baseDlcPrice: 350_000,
        baseArppu: 260_000,
        activeRate: 0.65
      },
      baselineRevenue: 225_975_000,
      opportunityRevenue: [231_975_000, 238_975_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: new joint programs adopt Nielsen reporting",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 3,
          high: 6,
          assumption: "Win incremental joint programs as shoppable video scales."
        },
        {
          kind: "attach",
          label: "Attach expansion: retailer and publisher connector modules",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 3,
          assumption: "Attach connectors to keep reporting repeatable across partners."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring lift readouts per program",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 4,
          assumption: "Programs generate recurring readouts and optimization cycles."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "150", opportunity: "153", delta: "+3", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.25M", opportunity: "$1.25M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "25%", opportunity: "26%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.26M", opportunity: "$0.27M", delta: "+$0.01M", confidence: "Medium" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-075" as OpportunityId,
    signalId: "signal-15" as SignalId,
    name: "Create a ‘Performance-to-Brand’ Narrative Pack for Creator Commerce",
    summary: "Help brands defend creator commerce spend with standardized, board-ready storytelling.",
    detail:
      "Creator commerce is easy to oversimplify into last-click metrics. Nielsen can sell a narrative pack that blends incremental reach, brand outcomes, and commerce lift into a board-ready story with assumptions and confidence ranges.",
    assumptions: [
      "Boards want consistent narratives for creator commerce, not platform screenshots.",
      "Standard packs can be templatized for scalability.",
      "Narrative packs improve retention by increasing executive visibility.",
      "Narrative packs pull-through measurement and connector modules."
    ],
    revenueDelta: [4, 10],
    model: {
      inputs: {
        baseUnits: 150,
        baseNetPrice: 1_250_000,
        baseAttachRate: 0.25,
        baseDlcPrice: 300_000,
        baseArppu: 240_000,
        activeRate: 0.65
      },
      baselineRevenue: 222_075_000,
      opportunityRevenue: [226_075_000, 232_075_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: premium for board-ready narrative pack",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 4,
          assumption: "Charge modest premium for standardized executive reporting formats."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring narrative refreshes",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 1,
          high: 3,
          assumption: "Refresh narratives quarterly or per major campaign cycle."
        },
        {
          kind: "units",
          label: "Unit expansion: new clients adopt narrative governance for creator spend",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 3,
          assumption: "Win incremental accounts where governance is a barrier to scaling creator commerce."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "150", opportunity: "151", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$1.25M", opportunity: "$1.26M", delta: "+$0.01M", confidence: "Low" },
        { driver: "Attach rate", baseline: "25%", opportunity: "25%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.24M", opportunity: "$0.25M", delta: "+$0.01M", confidence: "Medium" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-076" as OpportunityId,
    signalId: "signal-16" as SignalId,
    name: "Upgrade Accounts to a Unified Cross-Media Currency Tier",
    summary: "Monetize the operating-model shift: deduped reach becomes the primary object.",
    detail:
      "Cross-media planning is now the default, but tools remain fragmented. Nielsen can upgrade accounts to a unified currency tier that provides deduped reach and consistent definitions across screens, turning cross-media operating model change into durable pricing power.",
    assumptions: [
      "Enterprises will pay more for a single cross-media ‘truth’ layer.",
      "Dedupe quality and methodology transparency are sufficient to stand up to scrutiny.",
      "Upgrades can be sold at renewal without elongating cycles materially.",
      "Unified tier increases stickiness by embedding in planning workflows."
    ],
    revenueDelta: [12, 28],
    model: {
      inputs: {
        baseUnits: 300,
        baseNetPrice: 1_400_000,
        baseAttachRate: 0.35,
        baseDlcPrice: 450_000,
        baseArppu: 200_000,
        activeRate: 0.5
      },
      baselineRevenue: 497_250_000,
      opportunityRevenue: [509_250_000, 525_250_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: unified currency tier uplift",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 6,
          high: 12,
          assumption: "Upgrade a portion of accounts to a higher tier that includes full cross-media currency and governance."
        },
        {
          kind: "attach",
          label: "Attach expansion: cross-media dedupe and governance modules",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 3,
          high: 8,
          assumption: "Attach supporting modules required for cross-media operating model adoption."
        },
        {
          kind: "units",
          label: "Unit expansion: win net-new cross-media accounts",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 3,
          high: 8,
          assumption: "Win incremental accounts that consolidate measurement to a single vendor."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "300", opportunity: "303", delta: "+3", confidence: "Low" },
        { driver: "Net price", baseline: "$1.40M", opportunity: "$1.44M", delta: "+$0.04M", confidence: "High" },
        { driver: "Attach rate", baseline: "35%", opportunity: "36%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.20M", opportunity: "$0.20M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-077" as OpportunityId,
    signalId: "signal-16" as SignalId,
    name: "Sell Cross-Platform Frequency Management as Waste Reduction",
    summary: "Quantify and reduce overserving; turn savings into a budget-funded product purchase.",
    detail:
      "Frequency waste is now acknowledged as material. Nielsen can sell a frequency management product that measures cross-platform frequency and estimates waste, then provides planning guidance to reduce it. The narrative is cost reduction, which procurement likes.",
    assumptions: [
      "Brands will fund tools that quantify measurable waste reduction.",
      "Frequency dedupe is accurate enough to be actionable.",
      "Waste-reduction framing reduces sales friction in procurement.",
      "Product embeds in planning workflow, improving retention."
    ],
    revenueDelta: [8, 20],
    model: {
      inputs: {
        baseUnits: 300,
        baseNetPrice: 1_400_000,
        baseAttachRate: 0.35,
        baseDlcPrice: 400_000,
        baseArppu: 200_000,
        activeRate: 0.5
      },
      baselineRevenue: 490_250_000,
      opportunityRevenue: [498_250_000, 510_250_000],
      lines: [
        {
          kind: "attach",
          label: "Attach expansion: frequency management module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 3,
          high: 7,
          assumption: "Attach frequency module to accounts where waste reduction is a strategic goal."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: ongoing frequency audits and refresh cycles",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 7,
          assumption: "Frequency audits repeat monthly/quarterly as spend shifts."
        },
        {
          kind: "price",
          label: "Price mix: premium for measurable waste-reduction claims",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 6,
          assumption: "Charge premium when product is positioned as funding itself via waste reduction."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "300", opportunity: "300", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.40M", opportunity: "$1.41M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "35%", opportunity: "36%", delta: "+1 pt", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.20M", opportunity: "$0.21M", delta: "+$0.01M", confidence: "Medium" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-078" as OpportunityId,
    signalId: "signal-16" as SignalId,
    name: "Close the Loop: Planning-to-Post-Buy as a Single Workflow",
    summary: "Sell an end-to-end workflow that reduces disputes and accelerates learnings.",
    detail:
      "When planning and post-buy live in different tools, disputes and slow learning cycles follow. Nielsen can package a closed-loop workflow that carries definitions from plan through delivery, producing faster reconciliations and repeatable learnings.",
    assumptions: [
      "Agencies value reduced reconciliation labor and faster learning cycles.",
      "Workflows can be productized without major re-platforming.",
      "Closed-loop increases stickiness and reduces churn.",
      "Usage-based pricing captures value during active campaign windows."
    ],
    revenueDelta: [7, 16],
    model: {
      inputs: {
        baseUnits: 300,
        baseNetPrice: 1_400_000,
        baseAttachRate: 0.35,
        baseDlcPrice: 350_000,
        baseArppu: 220_000,
        activeRate: 0.5
      },
      baselineRevenue: 478_000_000,
      opportunityRevenue: [485_000_000, 494_000_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: post-buy reconciliation and learnings refreshes",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 4,
          high: 9,
          assumption: "Campaign cycles create recurring usage-based fees for reconciliations and learnings."
        },
        {
          kind: "attach",
          label: "Attach expansion: workflow and lineage module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 4,
          assumption: "Attach lineage module to preserve definitions from plan to post-buy."
        },
        {
          kind: "units",
          label: "Unit expansion: new clients adopt end-to-end workflow",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 3,
          assumption: "Win incremental accounts consolidating planning and reporting."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "300", opportunity: "302", delta: "+2", confidence: "Low" },
        { driver: "Net price", baseline: "$1.40M", opportunity: "$1.40M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "35%", opportunity: "35%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.22M", opportunity: "$0.24M", delta: "+$0.02M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-079" as OpportunityId,
    signalId: "signal-16" as SignalId,
    name: "Expand Seats Into Finance and Procurement With Governance-Ready Reporting",
    summary: "Make Nielsen’s outputs ‘finance-native’ to grow account footprint and reduce churn.",
    detail:
      "Cross-media decisions are increasingly finance-mediated. Nielsen can expand seat count by making reporting governance-ready: decision notes, audit artifacts, and scenario deltas that procurement can understand and finance can approve.",
    assumptions: [
      "Finance and procurement want governance-ready outputs, not channel dashboards.",
      "Governance packaging increases willingness to expand seats.",
      "Seat expansion reduces churn by increasing internal stakeholder count.",
      "Packaging can be standardized to protect margin."
    ],
    revenueDelta: [6, 14],
    model: {
      inputs: {
        baseUnits: 300,
        baseNetPrice: 1_400_000,
        baseAttachRate: 0.35,
        baseDlcPrice: 300_000,
        baseArppu: 200_000,
        activeRate: 0.5
      },
      baselineRevenue: 462_500_000,
      opportunityRevenue: [468_500_000, 476_500_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: seat expansion into governance stakeholders",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 4,
          assumption: "Increase account footprint by adding finance/procurement seats."
        },
        {
          kind: "price",
          label: "Price mix: premium for governance-ready reporting tier",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 3,
          high: 7,
          assumption: "Charge modest premium for governance features and scenario packs."
        },
        {
          kind: "attach",
          label: "Attach expansion: audit and lineage module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 3,
          assumption: "Attach audit trails where procurement requires documentation."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "300", opportunity: "302", delta: "+2", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.40M", opportunity: "$1.41M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "35%", opportunity: "36%", delta: "+1 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.20M", opportunity: "$0.20M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-080" as OpportunityId,
    signalId: "signal-16" as SignalId,
    name: "Open a Cross-Media API Ecosystem for Planning and Reporting Partners",
    summary: "Drive usage-based expansion by embedding Nielsen in partner tools.",
    detail:
      "If cross-media planning is the operating model, the measurement layer must be embedded. Nielsen can open APIs that deliver deduped reach, frequency, and governance artifacts to partner tools, pricing on usage and coverage.",
    assumptions: [
      "Partners will integrate if definitions are stable and defensible.",
      "Usage-based pricing aligns with adoption and scales efficiently.",
      "APIs increase switching costs and strengthen renewals.",
      "A small number of partner integrations covers most workflow volume."
    ],
    revenueDelta: [5, 12],
    model: {
      inputs: {
        baseUnits: 220,
        baseNetPrice: 1_100_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 300_000,
        baseArppu: 220_000,
        activeRate: 0.6
      },
      baselineRevenue: 308_000_000,
      opportunityRevenue: [313_000_000, 320_000_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: metered cross-media API calls",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 7,
          assumption: "API usage grows with partner adoption and pacing cadence."
        },
        {
          kind: "attach",
          label: "Attach expansion: API access module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 3,
          assumption: "Attach API access to enterprise contracts tied to partner workflows."
        },
        {
          kind: "units",
          label: "Unit expansion: new platform partners adopt the API layer",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 2,
          assumption: "Win incremental accounts buying Nielsen as infrastructure rather than reports."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "220", opportunity: "221", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$1.10M", opportunity: "$1.10M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "30%", opportunity: "31%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.22M", opportunity: "$0.23M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-081" as OpportunityId,
    signalId: "signal-17" as SignalId,
    name: "Build a Standard Clean-Room Schema and Portability Layer",
    summary: "Make clean-room outputs comparable across ecosystems to reduce vendor lock-in.",
    detail:
      "Clean rooms are the new pipes, but each ecosystem encourages lock-in. Nielsen can sell a portability layer that standardizes schemas, definitions, and outputs, making measurement comparable across clean rooms and retailers.",
    assumptions: [
      "Advertisers care enough about portability to fund it.",
      "Standard schema coverage can be negotiated across key ecosystems.",
      "Portability reduces switching risk and strengthens renewals.",
      "A thin translation layer can cover most workflows without bespoke work."
    ],
    revenueDelta: [8, 18],
    model: {
      inputs: {
        baseUnits: 220,
        baseNetPrice: 1_500_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 450_000,
        baseArppu: 220_000,
        activeRate: 0.55
      },
      baselineRevenue: 386_320_000,
      opportunityRevenue: [394_320_000, 404_320_000],
      lines: [
        {
          kind: "attach",
          label: "Attach expansion: portability module for clean-room outputs",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 3,
          high: 7,
          assumption: "Attach portability where buyers operate across multiple clean-room ecosystems."
        },
        {
          kind: "units",
          label: "Unit expansion: win multi-ecosystem enterprise accounts",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 4,
          assumption: "Win incremental accounts that require comparable outputs across ecosystems."
        },
        {
          kind: "price",
          label: "Price mix: premium for portability and governance",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 3,
          high: 7,
          assumption: "Charge premium for portability plus standardized governance artifacts."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "220", opportunity: "222", delta: "+2", confidence: "Low" },
        { driver: "Net price", baseline: "$1.50M", opportunity: "$1.51M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "30%", opportunity: "31%", delta: "+1 pt", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.22M", opportunity: "$0.22M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-082" as OpportunityId,
    signalId: "signal-17" as SignalId,
    name: "Offer Clean-Room Measurement as a Managed Service Tier",
    summary: "Own the operational messy middle: joins, QA, and dispute-ready readouts.",
    detail:
      "Many clients struggle to operationalize clean-room workflows. Nielsen can offer a managed service tier that runs joins, validates outputs, and provides dispute-ready readouts, priced as a premium service with usage-based expansion.",
    assumptions: [
      "A subset of accounts will pay for ‘done-with-you’ clean-room workflows.",
      "Playbooks and automation keep services marginable.",
      "Managed service reduces churn by improving time-to-value.",
      "Service tier pulls through connector and portability modules."
    ],
    revenueDelta: [9, 21],
    model: {
      inputs: {
        baseUnits: 220,
        baseNetPrice: 1_500_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 450_000,
        baseArppu: 260_000,
        activeRate: 0.55
      },
      baselineRevenue: 391_160_000,
      opportunityRevenue: [400_160_000, 412_160_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: managed service closes operationally constrained buyers",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 4,
          high: 8,
          assumption: "Win incremental accounts where operational capacity blocks adoption."
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
          label: "Attach expansion: connector module and governance artifacts",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 4,
          assumption: "Attach connectors and governance once the service tier is adopted."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "220", opportunity: "224", delta: "+4", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.50M", opportunity: "$1.50M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "30%", opportunity: "31%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.26M", opportunity: "$0.28M", delta: "+$0.02M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-083" as OpportunityId,
    signalId: "signal-17" as SignalId,
    name: "Sell Clean-Room Data Quality Validation as a Required Control",
    summary: "Turn QA into a paid module that reduces disputes and improves trust.",
    detail:
      "Clean-room outputs can be wrong in subtle ways. Nielsen can sell a QA/validation module that checks schemas, coverage, drift, and join health, producing audit-friendly diagnostics that procurement likes.",
    assumptions: [
      "Buyers will pay for QA when clean-room outputs drive budgeting decisions.",
      "Validation checks can be standardized across ecosystems.",
      "QA reduces disputes, improving renewal retention.",
      "QA attaches naturally to managed service and portability motions."
    ],
    revenueDelta: [6, 14],
    model: {
      inputs: {
        baseUnits: 220,
        baseNetPrice: 1_500_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 400_000,
        baseArppu: 220_000,
        activeRate: 0.55
      },
      baselineRevenue: 380_320_000,
      opportunityRevenue: [386_320_000, 394_320_000],
      lines: [
        {
          kind: "attach",
          label: "Attach expansion: validation and QA module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach QA as a control required by governance teams."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring validation runs and drift checks",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 5,
          assumption: "Validation runs repeat with refresh cadence and new partner integrations."
        },
        {
          kind: "price",
          label: "Price mix: premium for dispute-ready diagnostics",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 4,
          assumption: "Charge premium for diagnostics that reduce disputes and audit risk."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "220", opportunity: "220", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.50M", opportunity: "$1.51M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "30%", opportunity: "31%", delta: "+1 pt", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.22M", opportunity: "$0.23M", delta: "+$0.01M", confidence: "Medium" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-084" as OpportunityId,
    signalId: "signal-17" as SignalId,
    name: "Offer Privacy-Safe Dedupe as a Clean-Room Native Product",
    summary: "Make deduped reach deliverable in clean-room constraints without losing trust.",
    detail:
      "Dedupe is most valuable where identity is constrained. Nielsen can offer privacy-safe dedupe built for clean-room environments, with transparent methodology and confidence bands to support cross-media planning and reporting.",
    assumptions: [
      "Dedupe demand increases as identity constraints tighten.",
      "Clean-room-native dedupe is feasible with acceptable latency.",
      "Transparency reduces adoption friction and disputes.",
      "Dedupe attaches to both planning and verification products."
    ],
    revenueDelta: [7, 16],
    model: {
      inputs: {
        baseUnits: 220,
        baseNetPrice: 1_500_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 450_000,
        baseArppu: 220_000,
        activeRate: 0.55
      },
      baselineRevenue: 386_320_000,
      opportunityRevenue: [393_320_000, 402_320_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: dedupe visibility wins new cross-media accounts",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 3,
          high: 6,
          assumption: "Win incremental accounts where cross-media dedupe is a procurement requirement."
        },
        {
          kind: "attach",
          label: "Attach expansion: privacy-safe dedupe module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach dedupe where identity constraints block other approaches."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring dedupe runs and reporting cadence",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 5,
          assumption: "Recurring run cadence creates usage-based revenue."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "220", opportunity: "223", delta: "+3", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.50M", opportunity: "$1.50M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "30%", opportunity: "31%", delta: "+1 pt", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.22M", opportunity: "$0.23M", delta: "+$0.01M", confidence: "Medium" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-085" as OpportunityId,
    signalId: "signal-17" as SignalId,
    name: "Create a Multi-Clean-Room Partner Program With Standard Definitions",
    summary: "Scale distribution while keeping Nielsen as the definitions and governance owner.",
    detail:
      "If clean rooms are unavoidable, distribution matters. Nielsen can create a partner program that standardizes measurement definitions and governance artifacts across clean-room ecosystems, then sells portability as the differentiated value.",
    assumptions: [
      "Partners will accept standardized definitions if it increases adoption.",
      "Standardization reduces implementation cost across ecosystems.",
      "Partner motion expands coverage without linear headcount growth.",
      "Portability value increases as advertisers diversify ecosystems."
    ],
    revenueDelta: [4, 10],
    model: {
      inputs: {
        baseUnits: 220,
        baseNetPrice: 1_500_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 300_000,
        baseArppu: 200_000,
        activeRate: 0.55
      },
      baselineRevenue: 365_800_000,
      opportunityRevenue: [369_800_000, 375_800_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: partner-sourced enterprise wins",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 4,
          assumption: "Partner program sources incremental enterprise deals."
        },
        {
          kind: "price",
          label: "Price mix: premium for portability across partner ecosystems",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 3,
          assumption: "Charge premium for portability and governance outputs."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring partner enablement and governance reviews",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 1,
          high: 3,
          assumption: "Governance reviews repeat as partners onboard new datasets."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "220", opportunity: "222", delta: "+2", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.50M", opportunity: "$1.50M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "30%", opportunity: "30%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.20M", opportunity: "$0.21M", delta: "+$0.01M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-086" as OpportunityId,
    signalId: "signal-18" as SignalId,
    name: "Sell Audit Trail + Lineage Reporting as a First-Class Module",
    summary: "Make auditability a product: sources, transformations, and decision notes.",
    detail:
      "As scrutiny rises, clients want to see how numbers were produced. Nielsen can sell an audit/lineage module that provides source lists, transformation steps, and decision notes, reducing disputes and strengthening procurement confidence.",
    assumptions: [
      "Auditability is increasingly required for vendor approval and renewals.",
      "Lineage outputs can be standardized across products.",
      "Audit modules reduce churn by lowering governance anxiety.",
      "Auditability increases attach of modeled and outcomes products."
    ],
    revenueDelta: [7, 16],
    model: {
      inputs: {
        baseUnits: 260,
        baseNetPrice: 1_350_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 350_000,
        baseArppu: 200_000,
        activeRate: 0.5
      },
      baselineRevenue: 404_300_000,
      opportunityRevenue: [411_300_000, 420_300_000],
      lines: [
        {
          kind: "attach",
          label: "Attach expansion: audit and lineage module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 3,
          high: 7,
          assumption: "Attach audit module to accounts facing governance scrutiny."
        },
        {
          kind: "price",
          label: "Price mix: premium for defensible measurement",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 5,
          assumption: "Charge premium when auditability reduces procurement friction."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring audits and methodology reviews",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 4,
          assumption: "Quarterly reviews drive recurring service revenue."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "260", opportunity: "260", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.35M", opportunity: "$1.36M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "30%", opportunity: "31%", delta: "+1 pt", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.20M", opportunity: "$0.21M", delta: "+$0.01M", confidence: "Medium" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-087" as OpportunityId,
    signalId: "signal-18" as SignalId,
    name: "Monetize Methodology Governance SLAs",
    summary: "Charge for response-time guarantees and standardized methodology packets.",
    detail:
      "Procurement scrutiny turns ‘support’ into a differentiator. Nielsen can sell SLAs for methodology responses, standardized documentation, and governance reviews as a premium tier that improves renewals and reduces churn.",
    assumptions: [
      "Enterprise accounts will pay for response-time guarantees during audits.",
      "Documentation can be templatized to keep costs low.",
      "Governance SLAs reduce churn by improving stakeholder confidence.",
      "Premium tier can be sold as a renewal uplift."
    ],
    revenueDelta: [5, 12],
    model: {
      inputs: {
        baseUnits: 260,
        baseNetPrice: 1_350_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 300_000,
        baseArppu: 200_000,
        activeRate: 0.5
      },
      baselineRevenue: 392_600_000,
      opportunityRevenue: [397_600_000, 404_600_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: governance SLA premium",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 3,
          high: 7,
          assumption: "Charge premium for response SLAs and governance-ready packets."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: quarterly methodology reviews",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 1,
          high: 3,
          assumption: "Sell periodic reviews and alignment workshops as services."
        },
        {
          kind: "units",
          label: "Unit expansion: retain at-risk renewals",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 2,
          assumption: "Reduce churn and retain a small number of renewals due to improved governance posture."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "260", opportunity: "261", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$1.35M", opportunity: "$1.36M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "30%", opportunity: "30%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.20M", opportunity: "$0.21M", delta: "+$0.01M", confidence: "Medium" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-088" as OpportunityId,
    signalId: "signal-18" as SignalId,
    name: "Offer Bias and Representativeness Diagnostics as a Trust Module",
    summary: "Quantify coverage gaps and bias sensitivity to make modeled results defensible.",
    detail:
      "Scrutiny increases when results are modeled. Nielsen can sell diagnostics that quantify coverage gaps, representativeness, and sensitivity to assumptions, improving trust and reducing disputes.",
    assumptions: [
      "Buyers will pay for diagnostics when modeling drives budget decisions.",
      "Sensitivity reporting can be standardized across products.",
      "Diagnostics reduce disputes and improve retention.",
      "Trust modules increase adoption of modeled reach and outcomes products."
    ],
    revenueDelta: [6, 14],
    model: {
      inputs: {
        baseUnits: 260,
        baseNetPrice: 1_350_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 300_000,
        baseArppu: 220_000,
        activeRate: 0.5
      },
      baselineRevenue: 395_200_000,
      opportunityRevenue: [401_200_000, 409_200_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: sensitivity runs and representativeness diagnostics",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 7,
          assumption: "Diagnostics are requested repeatedly during audits and major vendor reviews."
        },
        {
          kind: "attach",
          label: "Attach expansion: trust and diagnostics module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 4,
          assumption: "Attach diagnostics where procurement requires defensible modeling explanations."
        },
        {
          kind: "price",
          label: "Price mix: premium for explainable modeling",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 3,
          assumption: "Charge premium for explainability and governance outputs."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "260", opportunity: "260", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.35M", opportunity: "$1.36M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "30%", opportunity: "31%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.22M", opportunity: "$0.23M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-089" as OpportunityId,
    signalId: "signal-18" as SignalId,
    name: "Sell ‘Audit Readiness’ Packages for External Reviews",
    summary: "Turn periodic audits into a repeatable, paid preparation workflow.",
    detail:
      "External reviews and audits create intense work. Nielsen can sell an audit readiness package that prepares documentation, runs pre-checks, and produces executive summaries, reducing client anxiety and creating high-margin services revenue.",
    assumptions: [
      "Clients will pay to reduce audit overhead and risk.",
      "Preparation workflows can be standardized.",
      "Audit readiness improves renewal retention by reducing switching risk.",
      "Services can be delivered with high leverage using templates."
    ],
    revenueDelta: [4, 10],
    model: {
      inputs: {
        baseUnits: 260,
        baseNetPrice: 1_350_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 300_000,
        baseArppu: 200_000,
        activeRate: 0.5
      },
      baselineRevenue: 392_600_000,
      opportunityRevenue: [396_600_000, 402_600_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: audit readiness services",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 6,
          assumption: "Audit prep services are funded during review cycles."
        },
        {
          kind: "units",
          label: "Unit expansion: new accounts adopt Nielsen for audit posture",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 2,
          assumption: "Win incremental deals when audit readiness is a differentiator."
        },
        {
          kind: "price",
          label: "Price mix: premium for audit readiness tier",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 2,
          assumption: "Charge modest premium for preparation and documentation support."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "260", opportunity: "261", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$1.35M", opportunity: "$1.35M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "30%", opportunity: "30%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.20M", opportunity: "$0.21M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-090" as OpportunityId,
    signalId: "signal-18" as SignalId,
    name: "Package Transparent Model Explainers as a Lightweight Add-On",
    summary: "Reduce ‘black box’ skepticism with standardized explainers tied to each metric.",
    detail:
      "Trust grows when models are explainable. Nielsen can package model explainers that describe inputs, transformations, and limitations in plain language, reducing skepticism and increasing adoption of modeled outputs.",
    assumptions: [
      "Stakeholders value explainers that reduce internal re-litigation of methodology.",
      "Explainability can be standardized without exposing proprietary IP.",
      "Explainability reduces churn by increasing confidence.",
      "Explainability increases attach of audit and governance modules."
    ],
    revenueDelta: [3, 8],
    model: {
      inputs: {
        baseUnits: 260,
        baseNetPrice: 1_350_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 250_000,
        baseArppu: 200_000,
        activeRate: 0.5
      },
      baselineRevenue: 383_500_000,
      opportunityRevenue: [386_500_000, 391_500_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: premium for explainable reporting",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 4,
          assumption: "Charge modest premium for standard explainers and documentation."
        },
        {
          kind: "attach",
          label: "Attach expansion: explainability module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 2,
          assumption: "Attach explainability to modeled products where skepticism is highest."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: training and enablement sessions",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 0,
          high: 2,
          assumption: "Optional enablement sessions are funded during onboarding and governance cycles."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "260", opportunity: "260", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.35M", opportunity: "$1.36M", delta: "+$0.01M", confidence: "Low" },
        { driver: "Attach rate", baseline: "30%", opportunity: "31%", delta: "+1 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.20M", opportunity: "$0.20M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-091" as OpportunityId,
    signalId: "signal-19" as SignalId,
    name: "Shift to Hybrid Measurement to Protect Trust While Reducing Panel Cost",
    summary: "Use hybrid measurement to reduce panel dependency without losing auditability.",
    detail:
      "Panel costs are rising, but trust is the franchise. Nielsen can move more accounts to hybrid measurement (panel + modeled + census-like signals) with clear confidence bands and audit trails, protecting margins while maintaining credibility.",
    assumptions: [
      "Hybrid measurement is acceptable if confidence bands and bias controls are explicit.",
      "A standardized hybrid playbook can be deployed across accounts.",
      "Hybrid reduces cost pressure without eroding trust.",
      "Hybrid posture supports premium pricing for governance."
    ],
    revenueDelta: [6, 14],
    model: {
      inputs: {
        baseUnits: 280,
        baseNetPrice: 1_200_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 320_000,
        baseArppu: 160_000,
        activeRate: 0.45
      },
      baselineRevenue: 383_040_000,
      opportunityRevenue: [389_040_000, 397_040_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: premium for hybrid trust posture",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 5,
          assumption: "Charge premium for transparent hybrid methodology and governance artifacts."
        },
        {
          kind: "attach",
          label: "Attach expansion: hybrid modeling and QA module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach QA and modeling modules required to maintain trust in hybrid outputs."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring calibration and representativeness checks",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 4,
          assumption: "Hybrid measurement increases demand for periodic calibration reviews."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "280", opportunity: "280", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.20M", opportunity: "$1.21M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "30%", opportunity: "31%", delta: "+1 pt", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.16M", opportunity: "$0.17M", delta: "+$0.01M", confidence: "Medium" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-092" as OpportunityId,
    signalId: "signal-19" as SignalId,
    name: "Form Panel Recruitment Partnerships to Improve Representation",
    summary: "Reduce panel supply risk by partnering for recruitment and incentives.",
    detail:
      "Representation is the most fragile part of trust. Nielsen can partner with device OEMs, ISPs, and research panels to improve recruitment, reduce attrition, and stabilize representation in key cohorts, then sell the improved quality as an enterprise upgrade.",
    assumptions: [
      "Partners can deliver recruitment scale without compromising privacy.",
      "Improved representation is valued and monetizable for enterprise buyers.",
      "Quality improvements can be documented in a board-ready way.",
      "Partnerships reduce long-run supply risk and costs."
    ],
    revenueDelta: [4, 10],
    model: {
      inputs: {
        baseUnits: 280,
        baseNetPrice: 1_200_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 250_000,
        baseArppu: 160_000,
        activeRate: 0.45
      },
      baselineRevenue: 365_540_000,
      opportunityRevenue: [369_540_000, 375_540_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: improved panel representation retains renewals",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 4,
          assumption: "Retention and renewals improve when representation can be defended."
        },
        {
          kind: "price",
          label: "Price mix: premium for higher-quality panel coverage",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 3,
          assumption: "Charge premium for documented improvements in representation and stability."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: quality reporting and representation audits",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 1,
          high: 3,
          assumption: "Quality audits become recurring governance touchpoints."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "280", opportunity: "282", delta: "+2", confidence: "Low" },
        { driver: "Net price", baseline: "$1.20M", opportunity: "$1.21M", delta: "+$0.01M", confidence: "Low" },
        { driver: "Attach rate", baseline: "30%", opportunity: "30%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.16M", opportunity: "$0.16M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-093" as OpportunityId,
    signalId: "signal-19" as SignalId,
    name: "Sell ‘Panel Quality Certification’ as a Governance Upgrade",
    summary: "Productize trust: representation scorecards, drift monitoring, and certification badges.",
    detail:
      "As panel skepticism grows, Nielsen can provide a quality certification upgrade: representation scorecards, drift monitoring, and documented controls. This becomes a procurement-friendly premium tier that defends pricing power.",
    assumptions: [
      "Procurement and legal value documented quality controls.",
      "Quality scorecards can be standardized across markets and products.",
      "Certification reduces churn and dispute rates.",
      "Certification increases attach of modeled and outcomes features."
    ],
    revenueDelta: [5, 12],
    model: {
      inputs: {
        baseUnits: 280,
        baseNetPrice: 1_200_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 300_000,
        baseArppu: 160_000,
        activeRate: 0.45
      },
      baselineRevenue: 379_040_000,
      opportunityRevenue: [384_040_000, 391_040_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: certification premium",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 3,
          high: 6,
          assumption: "Charge premium for certified quality controls and governance reporting."
        },
        {
          kind: "attach",
          label: "Attach expansion: certification and monitoring module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 3,
          assumption: "Attach monitoring module to maintain certification posture."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring drift reviews",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 1,
          high: 3,
          assumption: "Drift reviews become recurring governance cycles."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "280", opportunity: "280", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.20M", opportunity: "$1.21M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "30%", opportunity: "31%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.16M", opportunity: "$0.17M", delta: "+$0.01M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-094" as OpportunityId,
    signalId: "signal-19" as SignalId,
    name: "Deploy a Passive Measurement Kit to Reduce Panel Burden",
    summary: "Lower attrition by reducing participant friction and improving signal continuity.",
    detail:
      "Panel attrition increases when participation is burdensome. Nielsen can deploy passive measurement kits (opt-in, privacy-preserving) that reduce participant friction and improve continuity, then monetize the improved stability via a premium module.",
    assumptions: [
      "Passive kits improve retention without triggering major privacy backlash.",
      "Signal continuity is valuable enough to monetize.",
      "Implementation can be standardized across key device ecosystems.",
      "Stability improvements reduce operational support costs and disputes."
    ],
    revenueDelta: [7, 16],
    model: {
      inputs: {
        baseUnits: 280,
        baseNetPrice: 1_200_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 320_000,
        baseArppu: 160_000,
        activeRate: 0.45
      },
      baselineRevenue: 383_040_000,
      opportunityRevenue: [390_040_000, 399_040_000],
      lines: [
        {
          kind: "attach",
          label: "Attach expansion: passive measurement stability module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 3,
          high: 7,
          assumption: "Attach module to accounts where stability and continuity are premium needs."
        },
        {
          kind: "units",
          label: "Unit expansion: improved stability retains renewals and wins new accounts",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 4,
          assumption: "Stability improvements reduce churn and win a few competitive renewals."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring stability diagnostics",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 5,
          assumption: "Diagnostics requested during major methodology and audit cycles."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "280", opportunity: "282", delta: "+2", confidence: "Low" },
        { driver: "Net price", baseline: "$1.20M", opportunity: "$1.20M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "30%", opportunity: "31%", delta: "+1 pt", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.16M", opportunity: "$0.17M", delta: "+$0.01M", confidence: "Medium" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-095" as OpportunityId,
    signalId: "signal-19" as SignalId,
    name: "Offer Panel Insights Subscriptions for Category-Level Cohort Views",
    summary: "Monetize panel learnings as recurring insights rather than one-off reports.",
    detail:
      "Panels produce valuable cohort insights beyond currency measurement. Nielsen can sell recurring insights subscriptions that package category-level cohort shifts into board-ready summaries, priced as a usage layer.",
    assumptions: [
      "Clients will pay for recurring insights that reduce internal analysis workload.",
      "A standard cadence and template can scale across categories.",
      "Insights subscriptions increase stickiness and support renewals.",
      "Insights can be delivered without expanding bespoke reporting."
    ],
    revenueDelta: [3, 8],
    model: {
      inputs: {
        baseUnits: 280,
        baseNetPrice: 1_200_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 250_000,
        baseArppu: 160_000,
        activeRate: 0.45
      },
      baselineRevenue: 365_540_000,
      opportunityRevenue: [368_540_000, 373_540_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring cohort insights refreshes",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 5,
          assumption: "Monthly or quarterly refresh cadence drives recurring usage fees."
        },
        {
          kind: "units",
          label: "Unit expansion: new insights subscribers added",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 0,
          high: 1,
          assumption: "Win a small number of new insights subscribers from adjacent buyers."
        },
        {
          kind: "price",
          label: "Price mix: premium for board-ready insights pack",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 2,
          assumption: "Charge modest premium for executive-ready packaging."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "280", opportunity: "280", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.20M", opportunity: "$1.20M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "30%", opportunity: "30%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.16M", opportunity: "$0.17M", delta: "+$0.01M", confidence: "Medium" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-096" as OpportunityId,
    signalId: "signal-20" as SignalId,
    name: "Sell a Weekly ‘Demand Pulse’ Product for Rapid Budget Shifts",
    summary: "Monetize timeliness: faster readouts become a paid tier when macro is volatile.",
    detail:
      "In volatile periods, weekly signals matter. Nielsen can sell a demand pulse that summarizes audience and spend shifts weekly, enabling faster reallocation and improving renewal stickiness by being the ‘early warning’ layer.",
    assumptions: [
      "Buyers will pay for weekly signals that enable action.",
      "Weekly reporting can be operationalized without sacrificing quality.",
      "Timeliness reduces churn by improving perceived responsiveness.",
      "Usage-based pricing scales with intensity of volatility."
    ],
    revenueDelta: [6, 14],
    model: {
      inputs: {
        baseUnits: 260,
        baseNetPrice: 1_150_000,
        baseAttachRate: 0.28,
        baseDlcPrice: 300_000,
        baseArppu: 170_000,
        activeRate: 0.5
      },
      baselineRevenue: 342_940_000,
      opportunityRevenue: [348_940_000, 356_940_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: weekly demand pulse refreshes",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 7,
          assumption: "Weekly cadence creates recurring usage-based revenue."
        },
        {
          kind: "units",
          label: "Unit expansion: new accounts adopt faster readouts",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 4,
          assumption: "Win incremental accounts that previously relied on slower dashboards."
        },
        {
          kind: "price",
          label: "Price mix: premium for timeliness",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 3,
          assumption: "Charge premium for faster cadence and operational support."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "260", opportunity: "262", delta: "+2", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.15M", opportunity: "$1.16M", delta: "+$0.01M", confidence: "Low" },
        { driver: "Attach rate", baseline: "28%", opportunity: "28%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.17M", opportunity: "$0.18M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-097" as OpportunityId,
    signalId: "signal-20" as SignalId,
    name: "Offer a Churn and Budget-Risk Early Warning Module",
    summary: "Detect spend pullbacks early and turn retention playbooks into a product.",
    detail:
      "Macro volatility increases churn risk. Nielsen can offer early warning indicators (spend pullback, audience shifts, category softness) and pair them with retention playbooks, sold as an attach module to existing contracts.",
    assumptions: [
      "Clients value early warning indicators enough to pay for them.",
      "Signals can be delivered without leaking sensitive partner data.",
      "Retention playbooks can be templatized.",
      "Early warning improves renewal outcomes."
    ],
    revenueDelta: [5, 12],
    model: {
      inputs: {
        baseUnits: 260,
        baseNetPrice: 1_150_000,
        baseAttachRate: 0.28,
        baseDlcPrice: 300_000,
        baseArppu: 170_000,
        activeRate: 0.5
      },
      baselineRevenue: 342_940_000,
      opportunityRevenue: [347_940_000, 354_940_000],
      lines: [
        {
          kind: "attach",
          label: "Attach expansion: early warning module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach early warning where clients are sensitive to volatility."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring risk reviews and action planning",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 5,
          assumption: "Risk reviews become recurring governance touchpoints."
        },
        {
          kind: "price",
          label: "Price mix: premium for retention and risk insights",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 2,
          assumption: "Charge modest premium for risk insights during volatile periods."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "260", opportunity: "260", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.15M", opportunity: "$1.16M", delta: "+$0.01M", confidence: "Low" },
        { driver: "Attach rate", baseline: "28%", opportunity: "29%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.17M", opportunity: "$0.18M", delta: "+$0.01M", confidence: "Medium" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-098" as OpportunityId,
    signalId: "signal-20" as SignalId,
    name: "Sell Budget Reallocation Playbooks as a Repeatable Service",
    summary: "Turn volatility into decision support: scenario deltas, guardrails, and action plans.",
    detail:
      "When budgets shift quickly, teams need guardrails. Nielsen can sell playbooks that translate measurement changes into recommended reallocations with assumptions and sensitivity ranges, packaged for executive consumption.",
    assumptions: [
      "Buyers fund playbooks when they reduce decision paralysis.",
      "Templates can cover most categories and channels.",
      "Playbooks increase retention by increasing strategic value.",
      "Recurring cycles create repeat usage revenue."
    ],
    revenueDelta: [4, 10],
    model: {
      inputs: {
        baseUnits: 190,
        baseNetPrice: 1_250_000,
        baseAttachRate: 0.25,
        baseDlcPrice: 250_000,
        baseArppu: 200_000,
        activeRate: 0.6
      },
      baselineRevenue: 266_000_000,
      opportunityRevenue: [270_000_000, 276_000_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: scenario refreshes and reallocations guidance",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 6,
          assumption: "Playbooks require periodic refreshes as macro shifts."
        },
        {
          kind: "price",
          label: "Price mix: premium for executive playbooks",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 2,
          assumption: "Charge modest premium for board-ready packaging."
        },
        {
          kind: "units",
          label: "Unit expansion: new clients adopt playbooks during volatility",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 2,
          assumption: "Win incremental adoption when volatility makes guidance valuable."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "190", opportunity: "191", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$1.25M", opportunity: "$1.25M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "25%", opportunity: "25%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.20M", opportunity: "$0.21M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-099" as OpportunityId,
    signalId: "signal-20" as SignalId,
    name: "Launch a Mid-Market Tier for Faster Diagnostics",
    summary: "Capture demand from smaller brands that still need governed signals during volatility.",
    detail:
      "Volatility hits mid-market brands too, but they can’t afford enterprise tooling. Nielsen can create a lighter, faster tier that delivers key diagnostics and confidence bands, expanding addressable market while feeding upsells into enterprise tiers.",
    assumptions: [
      "Mid-market brands will pay for simplified, governed diagnostics.",
      "A lighter tier avoids heavy implementation and scales efficiently.",
      "Tiered pricing prevents cannibalization of enterprise contracts.",
      "Mid-market adoption creates pipeline for enterprise upgrades."
    ],
    revenueDelta: [5, 11],
    model: {
      inputs: {
        baseUnits: 260,
        baseNetPrice: 650_000,
        baseAttachRate: 0.2,
        baseDlcPrice: 180_000,
        baseArppu: 120_000,
        activeRate: 0.55
      },
      baselineRevenue: 196_640_000,
      opportunityRevenue: [201_640_000, 207_640_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: mid-market logos added",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 3,
          high: 6,
          assumption: "Acquire incremental mid-market clients with a simpler tier."
        },
        {
          kind: "price",
          label: "Price mix: bundles increase net price per contract",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 3,
          assumption: "Bundle key diagnostics for modest price uplift."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: periodic refresh and benchmarking",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 1,
          high: 2,
          assumption: "Benchmarking refreshes create recurring usage fees."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "260", opportunity: "263", delta: "+3", confidence: "Medium" },
        { driver: "Net price", baseline: "$0.65M", opportunity: "$0.66M", delta: "+$0.01M", confidence: "Low" },
        { driver: "Attach rate", baseline: "20%", opportunity: "20%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.12M", opportunity: "$0.13M", delta: "+$0.01M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-100" as OpportunityId,
    signalId: "signal-20" as SignalId,
    name: "Offer a Timeliness SLA Tier to Protect Renewals",
    summary: "Sell faster response and delivery as a premium tier when volatility increases scrutiny.",
    detail:
      "When budgets shift quickly, slower vendors get blamed. Nielsen can offer timeliness SLAs for delivery, response, and governance questions, monetizing speed and reducing churn risk during volatile cycles.",
    assumptions: [
      "Accounts will pay for SLAs when timeliness affects decisions.",
      "SLAs can be delivered with playbooks and automation.",
      "Premium tiers reduce churn during volatile periods.",
      "Value is highest near quarterly closes and planning cycles."
    ],
    revenueDelta: [3, 8],
    model: {
      inputs: {
        baseUnits: 260,
        baseNetPrice: 1_150_000,
        baseAttachRate: 0.28,
        baseDlcPrice: 250_000,
        baseArppu: 170_000,
        activeRate: 0.5
      },
      baselineRevenue: 328_940_000,
      opportunityRevenue: [331_940_000, 336_940_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: timeliness SLA premium",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 5,
          assumption: "Charge premium for timeliness guarantees and rapid response."
        },
        {
          kind: "units",
          label: "Unit expansion: retain renewals under scrutiny",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 0,
          high: 2,
          assumption: "Reduce churn among accounts evaluating alternatives."
        },
        {
          kind: "attach",
          label: "Attach expansion: optional rapid reconciliation module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 1,
          assumption: "Attach a small module to formalize SLA packaging."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "260", opportunity: "260", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.15M", opportunity: "$1.16M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "28%", opportunity: "29%", delta: "+1 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.17M", opportunity: "$0.17M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-101" as OpportunityId,
    signalId: "signal-21" as SignalId,
    name: "Offer a Bundling Cohort Measurement Module for Streaming",
    summary: "Make bundling-driven shifts measurable with cohort-aware reporting and confidence bands.",
    detail:
      "Bundles and tiering shift audiences in ways that standard reporting misses. Nielsen can offer cohort-aware measurement that tracks bundling-driven behavior changes, enabling publishers and advertisers to adjust strategy without identity overreach.",
    assumptions: [
      "Streaming stakeholders need cohort-aware reporting as bundling increases.",
      "Cohorts can be defined consistently without sensitive identity data.",
      "Cohort reporting attaches cleanly to existing measurement contracts.",
      "Better cohort visibility improves retention and renewals."
    ],
    revenueDelta: [6, 14],
    model: {
      inputs: {
        baseUnits: 220,
        baseNetPrice: 1_100_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 300_000,
        baseArppu: 180_000,
        activeRate: 0.55
      },
      baselineRevenue: 283_580_000,
      opportunityRevenue: [289_580_000, 297_580_000],
      lines: [
        {
          kind: "attach",
          label: "Attach expansion: cohort reporting module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach cohort reporting as bundling becomes material to strategy."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring cohort diagnostics and refreshes",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 5,
          assumption: "Cohort shifts require periodic diagnostics and refresh cycles."
        },
        {
          kind: "units",
          label: "Unit expansion: new streaming accounts adopt cohort governance",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 4,
          assumption: "Win incremental accounts where bundling changes make cohort tracking essential."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "220", opportunity: "222", delta: "+2", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.10M", opportunity: "$1.10M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "30%", opportunity: "31%", delta: "+1 pt", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.18M", opportunity: "$0.19M", delta: "+$0.01M", confidence: "Medium" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-102" as OpportunityId,
    signalId: "signal-21" as SignalId,
    name: "Sell Ad Load Tolerance and Churn Diagnostics for Ad Tiers",
    summary: "Quantify the tradeoff between monetization and retention as ad tiers expand.",
    detail:
      "Ad tiers grow, but ad load can drive churn. Nielsen can sell diagnostics that link ad load and attention proxies to churn risk, helping streamers optimize monetization without eroding long-term audience value.",
    assumptions: [
      "Streamers will pay for churn avoidance and monetization optimization.",
      "Ad load and churn signals can be linked credibly enough to guide decisions.",
      "Diagnostics can be delivered as recurring refreshes.",
      "Product strengthens renewal posture by tying to executive KPIs."
    ],
    revenueDelta: [5, 12],
    model: {
      inputs: {
        baseUnits: 180,
        baseNetPrice: 1_250_000,
        baseAttachRate: 0.25,
        baseDlcPrice: 300_000,
        baseArppu: 200_000,
        activeRate: 0.6
      },
      baselineRevenue: 270_000_000,
      opportunityRevenue: [275_000_000, 282_000_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring churn and ad load diagnostics",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 7,
          assumption: "Diagnostics repeat as streamers adjust ad load and pricing."
        },
        {
          kind: "attach",
          label: "Attach expansion: ad tier diagnostics module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 3,
          assumption: "Attach module to accounts with meaningful ad-tier revenue."
        },
        {
          kind: "price",
          label: "Price mix: premium for retention-linked reporting",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 2,
          assumption: "Charge premium for reporting tied to churn and retention KPIs."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "180", opportunity: "180", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.25M", opportunity: "$1.26M", delta: "+$0.01M", confidence: "Low" },
        { driver: "Attach rate", baseline: "25%", opportunity: "26%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.20M", opportunity: "$0.22M", delta: "+$0.02M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-103" as OpportunityId,
    signalId: "signal-21" as SignalId,
    name: "Deliver Bundle-Level Reach and Frequency Across Partners",
    summary: "Make bundles governable by showing deduped reach across bundled services.",
    detail:
      "Bundles change reach and frequency dynamics across services. Nielsen can offer bundle-level reporting that dedupes audience across bundled partners and explains overlap, helping both advertisers and bundle operators price and plan.",
    assumptions: [
      "Bundle operators need overlap and dedupe insights to manage pricing and value.",
      "Partners will share enough data to produce credible dedupe outputs.",
      "Standard definitions reduce disputes across partners.",
      "Reporting supports premium pricing due to strategic value."
    ],
    revenueDelta: [7, 15],
    model: {
      inputs: {
        baseUnits: 220,
        baseNetPrice: 1_100_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 320_000,
        baseArppu: 180_000,
        activeRate: 0.55
      },
      baselineRevenue: 286_780_000,
      opportunityRevenue: [293_780_000, 301_780_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: bundle operators adopt Nielsen dedupe reporting",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 3,
          high: 6,
          assumption: "Win incremental bundle operator and advertiser accounts."
        },
        {
          kind: "attach",
          label: "Attach expansion: bundle overlap and dedupe module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach overlap reporting as a core requirement for bundles."
        },
        {
          kind: "price",
          label: "Price mix: premium for bundle-level governance",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 4,
          assumption: "Charge premium for cross-partner governance and definitions."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "220", opportunity: "223", delta: "+3", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.10M", opportunity: "$1.11M", delta: "+$0.01M", confidence: "Low" },
        { driver: "Attach rate", baseline: "30%", opportunity: "31%", delta: "+1 pt", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.18M", opportunity: "$0.18M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-104" as OpportunityId,
    signalId: "signal-21" as SignalId,
    name: "Sell Subscriber Cohort Segments for Bundled and Tiered Streaming",
    summary: "Monetize cohort definitions as a planning and reporting layer without identity creep.",
    detail:
      "Bundling creates new subscriber cohorts. Nielsen can sell standardized cohort segments (bundle joiners, ad-tier switchers, churn-risk cohorts) for planning and reporting, priced as a usage layer.",
    assumptions: [
      "Standard cohort definitions reduce internal wrangling and speed decisions.",
      "Cohorts can be maintained without sensitive identity data.",
      "Segments attach to planning workflows and increase stickiness.",
      "Usage-based pricing scales with campaign and reporting cadence."
    ],
    revenueDelta: [4, 10],
    model: {
      inputs: {
        baseUnits: 220,
        baseNetPrice: 1_100_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 250_000,
        baseArppu: 180_000,
        activeRate: 0.55
      },
      baselineRevenue: 266_000_000,
      opportunityRevenue: [270_000_000, 276_000_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: cohort segment usage in planning",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 6,
          assumption: "Segment usage increases with campaign volume and refresh cadence."
        },
        {
          kind: "price",
          label: "Price mix: premium for cohort segment access",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 2,
          assumption: "Charge modest premium for segment access and governance."
        },
        {
          kind: "units",
          label: "Unit expansion: new clients adopt cohort segments for streaming buys",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 2,
          assumption: "Win incremental adoption as cohort segmentation becomes table stakes."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "220", opportunity: "221", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$1.10M", opportunity: "$1.10M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "30%", opportunity: "30%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.18M", opportunity: "$0.19M", delta: "+$0.01M", confidence: "Medium" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-105" as OpportunityId,
    signalId: "signal-21" as SignalId,
    name: "Create a Negotiation Reporting Pack for Bundle Partners",
    summary: "Provide board-ready overlap and value narratives for bundle deal negotiations.",
    detail:
      "Bundles are negotiated with incomplete information about overlap and incremental value. Nielsen can sell negotiation packs that quantify overlap, incremental reach, and value drivers, reducing deal risk and supporting better terms.",
    assumptions: [
      "Bundle negotiations have budget for third-party data when stakes are high.",
      "Overlap measurement can be delivered with explainable methodology.",
      "Packs can be templatized to scale across deals.",
      "Negotiation packs create pull-through to ongoing reporting subscriptions."
    ],
    revenueDelta: [5, 11],
    model: {
      inputs: {
        baseUnits: 120,
        baseNetPrice: 1_600_000,
        baseAttachRate: 0.25,
        baseDlcPrice: 300_000,
        baseArppu: 220_000,
        activeRate: 0.6
      },
      baselineRevenue: 240_960_000,
      opportunityRevenue: [245_960_000, 251_960_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: premium for negotiation pack",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 3,
          high: 6,
          assumption: "Charge premium for high-stakes negotiation support and governance artifacts."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring negotiation and renewal cycles",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 1,
          high: 3,
          assumption: "Negotiation cycles repeat annually, creating recurring service revenue."
        },
        {
          kind: "units",
          label: "Unit expansion: new bundle partner engagements",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 2,
          assumption: "Win incremental deal support engagements through existing relationships."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "120", opportunity: "121", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$1.60M", opportunity: "$1.61M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "25%", opportunity: "25%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.22M", opportunity: "$0.23M", delta: "+$0.01M", confidence: "Medium" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-106" as OpportunityId,
    signalId: "signal-22" as SignalId,
    name: "Ship Dynamic Creative Measurement That Summarizes Micro-Variants",
    summary: "Make AI-personalized creative measurable without collapsing into noise.",
    detail:
      "When creative changes per user, standard reporting breaks. Nielsen can sell dynamic creative measurement that aggregates micro-variants into meaningful clusters, producing actionable insights for brand and performance teams.",
    assumptions: [
      "Brands need variant-level visibility to govern AI-driven creative systems.",
      "Clustering and summarization are explainable enough to be trusted.",
      "Outputs can be standardized across major platforms.",
      "Usage-based pricing scales with creative volume and cadence."
    ],
    revenueDelta: [7, 16],
    model: {
      inputs: {
        baseUnits: 200,
        baseNetPrice: 1_250_000,
        baseAttachRate: 0.28,
        baseDlcPrice: 320_000,
        baseArppu: 200_000,
        activeRate: 0.6
      },
      baselineRevenue: 291_920_000,
      opportunityRevenue: [298_920_000, 307_920_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: variant measurement and refresh cadence",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 4,
          high: 9,
          assumption: "Variant measurement repeats with creative testing cycles."
        },
        {
          kind: "attach",
          label: "Attach expansion: dynamic creative module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 4,
          assumption: "Attach module to accounts adopting dynamic creative systems."
        },
        {
          kind: "units",
          label: "Unit expansion: expand into creative operations buyers",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 3,
          assumption: "Win incremental adoption among creative operations teams with budget."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "200", opportunity: "202", delta: "+2", confidence: "Low" },
        { driver: "Net price", baseline: "$1.25M", opportunity: "$1.25M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "28%", opportunity: "29%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.20M", opportunity: "$0.22M", delta: "+$0.02M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-107" as OpportunityId,
    signalId: "signal-22" as SignalId,
    name: "Offer Variant-Level Outcome Reporting for Dynamic Creative",
    summary: "Tie creative variants to outcomes with confidence bands and clear assumptions.",
    detail:
      "Dynamic creative only matters if it improves outcomes. Nielsen can sell outcome reporting that links creative clusters to downstream signals in privacy-safe ways, giving teams confidence to scale AI-driven creative optimization.",
    assumptions: [
      "Outcome linkage can be performed without identity overreach via clean rooms.",
      "Variant clustering remains stable enough to compare over time.",
      "Standard reporting formats can be adopted across brands.",
      "Outcome reporting becomes a recurring demand as creative cycles accelerate."
    ],
    revenueDelta: [6, 14],
    model: {
      inputs: {
        baseUnits: 200,
        baseNetPrice: 1_250_000,
        baseAttachRate: 0.28,
        baseDlcPrice: 300_000,
        baseArppu: 200_000,
        activeRate: 0.6
      },
      baselineRevenue: 286_320_000,
      opportunityRevenue: [292_320_000, 300_320_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring outcome runs per creative cycle",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 7,
          assumption: "Outcome readouts repeat across creative testing cycles."
        },
        {
          kind: "price",
          label: "Price mix: premium for outcomes-linked variant reporting",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 5,
          assumption: "Charge premium for linking variants to outcomes and explaining assumptions."
        },
        {
          kind: "units",
          label: "Unit expansion: new performance-led buyers adopt the product",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 2,
          assumption: "Win incremental adoption among performance teams driving creative systems."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "200", opportunity: "201", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$1.25M", opportunity: "$1.26M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "28%", opportunity: "28%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.20M", opportunity: "$0.21M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-108" as OpportunityId,
    signalId: "signal-22" as SignalId,
    name: "Standardize Creative IDs and Taxonomy as a Privacy-Safe Control Layer",
    summary: "Reduce reporting chaos by enforcing consistent creative identity and definitions.",
    detail:
      "Variant explosion creates reporting chaos. Nielsen can provide a privacy-safe creative ID and taxonomy standard that enables comparability across platforms, then monetize it as an attach module in measurement contracts.",
    assumptions: [
      "Teams will adopt a standard if it reduces reporting overhead.",
      "Taxonomy can be implemented without breaking platform constraints.",
      "Standards improve trust and reduce disputes.",
      "Attach motion is strong because standards unlock other reporting."
    ],
    revenueDelta: [5, 12],
    model: {
      inputs: {
        baseUnits: 200,
        baseNetPrice: 1_250_000,
        baseAttachRate: 0.28,
        baseDlcPrice: 320_000,
        baseArppu: 180_000,
        activeRate: 0.6
      },
      baselineRevenue: 284_720_000,
      opportunityRevenue: [289_720_000, 296_720_000],
      lines: [
        {
          kind: "attach",
          label: "Attach expansion: creative taxonomy module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach taxonomy module where variant sprawl makes reporting unreliable."
        },
        {
          kind: "price",
          label: "Price mix: premium for standardized variant reporting",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 4,
          assumption: "Charge modest premium for reduced operational overhead."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: ongoing taxonomy maintenance and mapping",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 1,
          high: 3,
          assumption: "Maintenance work recurs as creative systems evolve."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "200", opportunity: "200", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.25M", opportunity: "$1.26M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "28%", opportunity: "29%", delta: "+1 pt", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.18M", opportunity: "$0.19M", delta: "+$0.01M", confidence: "Medium" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-109" as OpportunityId,
    signalId: "signal-22" as SignalId,
    name: "Open APIs for Creative Performance Taxonomy and Reporting",
    summary: "Embed Nielsen in partner tooling; price on usage as creative volume scales.",
    detail:
      "Creative systems are increasingly automated. Nielsen can offer APIs that provide taxonomy mapping, performance summaries, and governance artifacts to partner tools, creating usage-based expansion.",
    assumptions: [
      "Partners will integrate if APIs reduce reporting overhead.",
      "Usage-based pricing aligns with creative volume and adoption.",
      "APIs increase switching costs and renewals.",
      "A small set of partners covers most workflow volume."
    ],
    revenueDelta: [4, 10],
    model: {
      inputs: {
        baseUnits: 160,
        baseNetPrice: 950_000,
        baseAttachRate: 0.25,
        baseDlcPrice: 250_000,
        baseArppu: 200_000,
        activeRate: 0.65
      },
      baselineRevenue: 201_625_000,
      opportunityRevenue: [205_625_000, 211_625_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: metered creative taxonomy API calls",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 6,
          assumption: "API usage grows with creative volume and refresh cadence."
        },
        {
          kind: "attach",
          label: "Attach expansion: API access module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 2,
          assumption: "Attach API access to enterprise contracts tied to partner workflows."
        },
        {
          kind: "units",
          label: "Unit expansion: new partners adopt APIs as infrastructure",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 2,
          assumption: "Win incremental partner accounts buying the API layer."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "160", opportunity: "161", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$0.95M", opportunity: "$0.95M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "25%", opportunity: "26%", delta: "+1 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.20M", opportunity: "$0.21M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-110" as OpportunityId,
    signalId: "signal-22" as SignalId,
    name: "Offer Managed Services for Creative Experimentation Governance",
    summary: "Help clients operationalize experimentation at scale with repeatable playbooks.",
    detail:
      "Many teams can’t operationalize creative experimentation governance. Nielsen can offer a managed service that sets up experimentation cadence, reporting standards, and executive readouts, then converts clients into product modules over time.",
    assumptions: [
      "A subset of clients will pay for ‘done-with-you’ experimentation governance.",
      "Playbooks keep delivery scalable and marginable.",
      "Service work converts to modules at renewal.",
      "Managed services increase retention by delivering fast wins."
    ],
    revenueDelta: [6, 15],
    model: {
      inputs: {
        baseUnits: 120,
        baseNetPrice: 1_300_000,
        baseAttachRate: 0.25,
        baseDlcPrice: 300_000,
        baseArppu: 260_000,
        activeRate: 0.65
      },
      baselineRevenue: 192_450_000,
      opportunityRevenue: [198_450_000, 207_450_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: managed experimentation governance wins accounts",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 4,
          assumption: "Win incremental accounts that lack internal experimentation capacity."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring experimentation cycles and readouts",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 8,
          assumption: "Recurring cycles drive usage-based services and analysis fees."
        },
        {
          kind: "attach",
          label: "Attach expansion: taxonomy and reporting modules",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 3,
          assumption: "Attach modules after initial managed services prove value."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "120", opportunity: "122", delta: "+2", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.30M", opportunity: "$1.30M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "25%", opportunity: "26%", delta: "+1 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.26M", opportunity: "$0.28M", delta: "+$0.02M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-111" as OpportunityId,
    signalId: "signal-23" as SignalId,
    name: "Build Independent Verification Integrations Across Major Platforms",
    summary: "Make Nielsen the default ‘referee’ via privacy-safe APIs and standardized definitions.",
    detail:
      "Walled gardens will provide numbers, but buyers want independent verification and comparability. Nielsen can build verification integrations with privacy-safe APIs, then sell standardized cross-platform verification as a premium enterprise tier.",
    assumptions: [
      "Platforms will support verification integrations under advertiser pressure.",
      "Definitions can be standardized enough to be comparable across platforms.",
      "Verification is valuable enough to support premium pricing.",
      "Integrations create high switching costs and improve retention."
    ],
    revenueDelta: [10, 24],
    model: {
      inputs: {
        baseUnits: 320,
        baseNetPrice: 1_450_000,
        baseAttachRate: 0.34,
        baseDlcPrice: 400_000,
        baseArppu: 180_000,
        activeRate: 0.5
      },
      baselineRevenue: 536_320_000,
      opportunityRevenue: [546_320_000, 560_320_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: verification wins enterprise consolidation deals",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 4,
          high: 8,
          assumption: "Win incremental accounts consolidating verification under one vendor."
        },
        {
          kind: "attach",
          label: "Attach expansion: platform verification connectors module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 3,
          high: 8,
          assumption: "Attach connectors as a required layer for multi-platform verification."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring verification audits and disputes",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 8,
          assumption: "Verification cycles and audits create recurring usage-based fees."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "320", opportunity: "324", delta: "+4", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.45M", opportunity: "$1.45M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "34%", opportunity: "35%", delta: "+1 pt", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.18M", opportunity: "$0.20M", delta: "+$0.02M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-112" as OpportunityId,
    signalId: "signal-23" as SignalId,
    name: "Bundle Cross-Platform Dedupe + Verification as a Single Tier",
    summary: "Sell a procurement-friendly SKU that addresses the biggest board questions.",
    detail:
      "Boards ask two questions: did we reach incremental people, and can we trust the numbers? Nielsen can bundle dedupe and verification into a single tier with auditability, reducing procurement friction and increasing pricing power.",
    assumptions: [
      "Buyers prefer single-SKU solutions when governance scrutiny is high.",
      "Bundling increases conversion and reduces sales complexity.",
      "Auditability reduces disputes and increases renewals.",
      "Tiering can be sold at renewal as a straightforward upgrade."
    ],
    revenueDelta: [9, 21],
    model: {
      inputs: {
        baseUnits: 320,
        baseNetPrice: 1_450_000,
        baseAttachRate: 0.34,
        baseDlcPrice: 400_000,
        baseArppu: 180_000,
        activeRate: 0.5
      },
      baselineRevenue: 536_320_000,
      opportunityRevenue: [545_320_000, 557_320_000],
      lines: [
        {
          kind: "attach",
          label: "Attach expansion: dedupe + verification module bundle",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 4,
          high: 9,
          assumption: "Attach bundled module to high-governance enterprise accounts."
        },
        {
          kind: "price",
          label: "Price mix: premium for bundled governance tier",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 3,
          high: 6,
          assumption: "Charge premium for a single tier that addresses trust and dedupe."
        },
        {
          kind: "units",
          label: "Unit expansion: new enterprise wins from consolidation",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 6,
          assumption: "Win incremental enterprise accounts consolidating measurement vendors."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "320", opportunity: "322", delta: "+2", confidence: "Low" },
        { driver: "Net price", baseline: "$1.45M", opportunity: "$1.46M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "34%", opportunity: "35%", delta: "+1 pt", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.18M", opportunity: "$0.18M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-113" as OpportunityId,
    signalId: "signal-23" as SignalId,
    name: "Offer Outcome Reconciliation Across Walled Gardens",
    summary: "Standardize outcome definitions so finance can compare channels without platform bias.",
    detail:
      "Outcome buying breaks when each platform defines outcomes differently. Nielsen can offer outcome reconciliation that standardizes definitions, documents assumptions, and produces comparable deltas across platforms with confidence bands.",
    assumptions: [
      "Advertisers want comparable outcomes across platforms for budgeting decisions.",
      "Reconciliation can be done via privacy-safe clean-room workflows.",
      "Documentation reduces disputes and procurement friction.",
      "Outcome reconciliation increases stickiness and module attach."
    ],
    revenueDelta: [8, 18],
    model: {
      inputs: {
        baseUnits: 320,
        baseNetPrice: 1_450_000,
        baseAttachRate: 0.34,
        baseDlcPrice: 400_000,
        baseArppu: 180_000,
        activeRate: 0.5
      },
      baselineRevenue: 536_320_000,
      opportunityRevenue: [544_320_000, 554_320_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: outcome reconciliation runs and stakeholder readouts",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 7,
          assumption: "Outcome reconciliation repeats monthly/quarterly for budget decisions."
        },
        {
          kind: "attach",
          label: "Attach expansion: outcome reconciliation module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach module where outcomes are central to procurement negotiations."
        },
        {
          kind: "price",
          label: "Price mix: premium for finance-grade comparability",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 3,
          high: 6,
          assumption: "Charge premium for comparable, documented outcome definitions."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "320", opportunity: "320", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.45M", opportunity: "$1.46M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "34%", opportunity: "35%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.18M", opportunity: "$0.19M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-114" as OpportunityId,
    signalId: "signal-23" as SignalId,
    name: "Monetize Dispute Resolution SLAs Between Platforms and Publishers",
    summary: "Charge for speed and defensibility when stakeholders disagree on delivery and outcomes.",
    detail:
      "When multiple stakeholders are involved, disputes are inevitable. Nielsen can sell an SLA tier for dispute response, standardized audit packets, and governance review meetings that reduce time-to-resolution and increase trust.",
    assumptions: [
      "Enterprise accounts value response-time SLAs during disputes.",
      "Audit packets can be standardized to keep delivery scalable.",
      "Dispute SLAs reduce churn by reducing board anxiety.",
      "Premium tier is easiest to sell during renewal and high-stakes windows."
    ],
    revenueDelta: [5, 12],
    model: {
      inputs: {
        baseUnits: 320,
        baseNetPrice: 1_450_000,
        baseAttachRate: 0.34,
        baseDlcPrice: 300_000,
        baseArppu: 180_000,
        activeRate: 0.5
      },
      baselineRevenue: 495_520_000,
      opportunityRevenue: [500_520_000, 507_520_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: SLA premium for dispute response",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 3,
          high: 7,
          assumption: "Charge premium for response-time SLAs and standardized governance artifacts."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring dispute readouts",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 1,
          high: 3,
          assumption: "Disputes and audits drive recurring paid readouts."
        },
        {
          kind: "units",
          label: "Unit expansion: retain and win renewals due to governance posture",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 2,
          assumption: "Retain at-risk accounts and win a small number of renewals."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "320", opportunity: "321", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$1.45M", opportunity: "$1.46M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "34%", opportunity: "34%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.18M", opportunity: "$0.18M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-115" as OpportunityId,
    signalId: "signal-23" as SignalId,
    name: "Create Portfolio Pricing: Verify + Plan + Audit as a Single Enterprise Tier",
    summary: "Move from point solutions to an enterprise governance tier with clear board value.",
    detail:
      "Boards prefer a single vendor story: verification, planning, and auditability. Nielsen can package these into a single enterprise tier with portfolio pricing, increasing net price and reducing churn by expanding stakeholder coverage.",
    assumptions: [
      "Enterprise buyers prefer fewer vendors when governance scrutiny is high.",
      "Bundling reduces procurement friction and increases net price.",
      "Tiering increases attach and reduces churn risk.",
      "Portfolio tier creates strong switching costs."
    ],
    revenueDelta: [7, 16],
    model: {
      inputs: {
        baseUnits: 320,
        baseNetPrice: 1_450_000,
        baseAttachRate: 0.34,
        baseDlcPrice: 400_000,
        baseArppu: 180_000,
        activeRate: 0.5
      },
      baselineRevenue: 536_320_000,
      opportunityRevenue: [543_320_000, 552_320_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: enterprise portfolio tier uplift",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 4,
          high: 9,
          assumption: "Convert a portion of accounts to a portfolio tier with governance value."
        },
        {
          kind: "attach",
          label: "Attach expansion: portfolio modules attached by default",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach verification and audit modules as part of the tier."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring governance reviews and refresh cycles",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 1,
          high: 2,
          assumption: "Tier includes recurring reviews that drive usage-based services revenue."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "320", opportunity: "320", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.45M", opportunity: "$1.48M", delta: "+$0.03M", confidence: "High" },
        { driver: "Attach rate", baseline: "34%", opportunity: "35%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.18M", opportunity: "$0.18M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-116" as OpportunityId,
    signalId: "signal-24" as SignalId,
    name: "Sell a Compliance-by-Design Measurement Suite",
    summary: "Turn regulatory expansion into a product moat with standardized controls and artifacts.",
    detail:
      "As regulation expands beyond privacy, measurement buyers want compliance built-in. Nielsen can offer compliance-by-design suites that include standardized controls, documentation, and audit trails, reducing client risk and increasing willingness to pay.",
    assumptions: [
      "Compliance reduces procurement friction and increases renewal comfort.",
      "Controls and documentation can be standardized across regions.",
      "Compliance features support premium pricing and attach modules.",
      "Regulatory change increases buyer urgency to outsource compliance."
    ],
    revenueDelta: [6, 14],
    model: {
      inputs: {
        baseUnits: 240,
        baseNetPrice: 1_300_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 350_000,
        baseArppu: 170_000,
        activeRate: 0.55
      },
      baselineRevenue: 359_640_000,
      opportunityRevenue: [365_640_000, 373_640_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: premium for compliance-by-design",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 3,
          high: 7,
          assumption: "Charge premium for standardized controls and audit artifacts."
        },
        {
          kind: "attach",
          label: "Attach expansion: compliance and governance module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach compliance module where regulations create operational burden."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: periodic compliance reviews and updates",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 1,
          high: 2,
          assumption: "Regulatory updates create recurring reviews and documentation refresh cycles."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "240", opportunity: "240", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.30M", opportunity: "$1.31M", delta: "+$0.01M", confidence: "High" },
        { driver: "Attach rate", baseline: "30%", opportunity: "31%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.17M", opportunity: "$0.17M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-117" as OpportunityId,
    signalId: "signal-24" as SignalId,
    name: "Offer AI Transparency Reporting for Automated Decisioning",
    summary: "Provide explainability and documentation as AI rules expand into governance.",
    detail:
      "AI regulation and governance require explainability. Nielsen can offer transparency reporting that documents automated decisioning, inputs, and limitations for measurement and modeling, turning compliance into an attach module.",
    assumptions: [
      "Regulators and procurement will demand AI transparency documentation.",
      "Transparency outputs can be standardized across products.",
      "AI transparency reduces disputes and increases renewals.",
      "The module pulls through governance and audit features."
    ],
    revenueDelta: [5, 12],
    model: {
      inputs: {
        baseUnits: 240,
        baseNetPrice: 1_300_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 350_000,
        baseArppu: 170_000,
        activeRate: 0.55
      },
      baselineRevenue: 359_640_000,
      opportunityRevenue: [364_640_000, 371_640_000],
      lines: [
        {
          kind: "attach",
          label: "Attach expansion: AI transparency module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach transparency where AI scrutiny is highest."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring explainability reviews",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 5,
          assumption: "Reviews repeat as models and data change."
        },
        {
          kind: "price",
          label: "Price mix: premium for compliance-ready documentation",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 2,
          assumption: "Charge modest premium for compliance-ready transparency artifacts."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "240", opportunity: "240", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.30M", opportunity: "$1.31M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "30%", opportunity: "31%", delta: "+1 pt", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.17M", opportunity: "$0.18M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-118" as OpportunityId,
    signalId: "signal-24" as SignalId,
    name: "Ship Data Portability Export APIs for Governance and Vendor Reviews",
    summary: "Reduce lock-in fear by making exports and portability a documented capability.",
    detail:
      "Portability requirements are increasing. Nielsen can ship export APIs and standardized data packages that let clients move data between systems while preserving definitions, priced as an attach module to enterprise contracts.",
    assumptions: [
      "Clients value portability, especially during vendor reviews.",
      "Export packages can be standardized without exposing sensitive IP.",
      "Portability reduces churn by lowering perceived lock-in risk.",
      "Usage-based pricing aligns with export and audit cycles."
    ],
    revenueDelta: [4, 10],
    model: {
      inputs: {
        baseUnits: 240,
        baseNetPrice: 1_300_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 300_000,
        baseArppu: 170_000,
        activeRate: 0.55
      },
      baselineRevenue: 347_640_000,
      opportunityRevenue: [351_640_000, 357_640_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: export runs and governance reviews",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 6,
          assumption: "Export activity increases during audits and vendor evaluations."
        },
        {
          kind: "attach",
          label: "Attach expansion: export API module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 3,
          assumption: "Attach export APIs to enterprise contracts as governance requirement."
        },
        {
          kind: "units",
          label: "Unit expansion: new clients adopt portability posture",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 1,
          assumption: "Win a small number of deals where portability is a gating requirement."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "240", opportunity: "241", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$1.30M", opportunity: "$1.30M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "30%", opportunity: "30%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.17M", opportunity: "$0.18M", delta: "+$0.01M", confidence: "Medium" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-119" as OpportunityId,
    signalId: "signal-24" as SignalId,
    name: "Offer a Regulatory Change Advisory Subscription for Measurement Leaders",
    summary: "Turn regulatory ambiguity into recurring governance and decision-support revenue.",
    detail:
      "Regulation changes faster than measurement teams can track. Nielsen can offer a subscription that summarizes regulatory changes, implications, and recommended controls, packaged as quarterly governance packs for executives.",
    assumptions: [
      "Measurement leaders want a trusted source for regulatory implications.",
      "Advisory packs can be templatized across regions and topics.",
      "Subscription increases stickiness and supports renewals.",
      "Advisory feeds demand into compliance-by-design modules."
    ],
    revenueDelta: [3, 8],
    model: {
      inputs: {
        baseUnits: 240,
        baseNetPrice: 1_300_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 200_000,
        baseArppu: 170_000,
        activeRate: 0.55
      },
      baselineRevenue: 323_640_000,
      opportunityRevenue: [326_640_000, 331_640_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: quarterly advisory packs and briefings",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 5,
          assumption: "Quarterly cadence creates recurring advisory revenue."
        },
        {
          kind: "price",
          label: "Price mix: premium for compliance and governance guidance",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 2,
          assumption: "Charge modest premium for advisory access."
        },
        {
          kind: "units",
          label: "Unit expansion: new advisory subscribers added",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 0,
          high: 1,
          assumption: "Win a small number of new advisory subscriptions from adjacent stakeholders."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "240", opportunity: "240", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.30M", opportunity: "$1.30M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "30%", opportunity: "30%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.17M", opportunity: "$0.17M", delta: "+$0.00M", confidence: "Medium" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-120" as OpportunityId,
    signalId: "signal-24" as SignalId,
    name: "Create a Regional Compliance Deployment Accelerator",
    summary: "Reduce time-to-value in regulated regions with templates, controls, and validation.",
    detail:
      "Regional compliance needs can delay deployments. Nielsen can offer an accelerator with templates, controls, and validation checks that helps clients go live faster, priced as a module or implementation upgrade.",
    assumptions: [
      "Clients will pay to reduce deployment time and compliance risk.",
      "Templates can cover most regional requirements without bespoke work.",
      "Accelerator reduces churn by improving onboarding experience.",
      "Accelerator creates attach opportunities for governance modules."
    ],
    revenueDelta: [5, 12],
    model: {
      inputs: {
        baseUnits: 240,
        baseNetPrice: 1_300_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 300_000,
        baseArppu: 170_000,
        activeRate: 0.55
      },
      baselineRevenue: 347_640_000,
      opportunityRevenue: [352_640_000, 359_640_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: faster regional onboarding wins deals",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 4,
          assumption: "Win incremental regional deals by reducing onboarding and compliance friction."
        },
        {
          kind: "attach",
          label: "Attach expansion: deployment accelerator module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach accelerator to accounts entering new regulated regions."
        },
        {
          kind: "price",
          label: "Price mix: premium for compliance templates and validation",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 3,
          assumption: "Charge premium for standardized controls and validation tooling."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "240", opportunity: "242", delta: "+2", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.30M", opportunity: "$1.31M", delta: "+$0.01M", confidence: "Low" },
        { driver: "Attach rate", baseline: "30%", opportunity: "31%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.17M", opportunity: "$0.17M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-121" as OpportunityId,
    signalId: "signal-25" as SignalId,
    name: "Offer Global Definitions With Regional Deployment (One Contract, Many Regions)",
    summary: "Sell consistency: one measurement definition set, deployed regionally with local compliance.",
    detail:
      "Cross-border restrictions push companies into regional stacks, but boards still want global comparability. Nielsen can sell a global definitions package with regional deployments, preserving consistency while honoring residency requirements.",
    assumptions: [
      "Multinationals will pay for global comparability with local compliance.",
      "Regional deployments can be templatized to avoid bespoke cost blowups.",
      "Consistency reduces internal governance disputes.",
      "Solution increases switching costs once embedded across regions."
    ],
    revenueDelta: [7, 16],
    model: {
      inputs: {
        baseUnits: 180,
        baseNetPrice: 1_550_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 350_000,
        baseArppu: 200_000,
        activeRate: 0.55
      },
      baselineRevenue: 317_700_000,
      opportunityRevenue: [324_700_000, 333_700_000],
      lines: [
        {
          kind: "attach",
          label: "Attach expansion: regional deployment module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 3,
          high: 7,
          assumption: "Attach deployment modules as clients expand into additional regulated regions."
        },
        {
          kind: "units",
          label: "Unit expansion: expand footprint within multinational accounts",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 4,
          assumption: "Expand from single-region to multi-region deployments within existing multinationals."
        },
        {
          kind: "price",
          label: "Price mix: premium for global comparability",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 5,
          assumption: "Charge premium for consistent definitions and governance across regions."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "180", opportunity: "182", delta: "+2", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.55M", opportunity: "$1.56M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "30%", opportunity: "31%", delta: "+1 pt", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.20M", opportunity: "$0.20M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-122" as OpportunityId,
    signalId: "signal-25" as SignalId,
    name: "Sell Data Residency Compliance as a Product Module",
    summary: "Turn localization and access controls into an attachable compliance SKU.",
    detail:
      "Data residency requirements create friction and cost. Nielsen can sell a compliance module that includes localized storage, access controls, and documented governance artifacts, simplifying procurement and reducing client risk.",
    assumptions: [
      "Compliance is a gating requirement that buyers will fund.",
      "Controls can be standardized across common regulatory regimes.",
      "Compliance reduces churn by lowering legal and procurement anxiety.",
      "Attach motion works best at renewal and during regional expansion."
    ],
    revenueDelta: [5, 12],
    model: {
      inputs: {
        baseUnits: 180,
        baseNetPrice: 1_550_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 300_000,
        baseArppu: 200_000,
        activeRate: 0.55
      },
      baselineRevenue: 308_700_000,
      opportunityRevenue: [313_700_000, 320_700_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: premium for residency controls and documentation",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 3,
          high: 7,
          assumption: "Charge premium for localized compliance, access controls, and audit artifacts."
        },
        {
          kind: "attach",
          label: "Attach expansion: compliance module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 3,
          assumption: "Attach compliance module to regional deployments as regulations require."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring compliance reviews",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 1,
          high: 2,
          assumption: "Compliance reviews repeat with regulatory changes and audits."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "180", opportunity: "180", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.55M", opportunity: "$1.56M", delta: "+$0.01M", confidence: "High" },
        { driver: "Attach rate", baseline: "30%", opportunity: "31%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.20M", opportunity: "$0.20M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-123" as OpportunityId,
    signalId: "signal-25" as SignalId,
    name: "Publish Cross-Border Governance Dashboards With Confidence Bands",
    summary: "Give global leaders a single view with explicit regional caveats and assumptions.",
    detail:
      "When stacks vary by region, global dashboards become misleading. Nielsen can sell governance dashboards that explicitly encode confidence bands, coverage, and regional caveats so global leaders can compare without false precision.",
    assumptions: [
      "Executives value governed dashboards that avoid false precision.",
      "Confidence bands reduce disputes and increase trust in reporting.",
      "Dashboards can be standardized across most multinational needs.",
      "Recurring refresh cadence supports usage-based pricing."
    ],
    revenueDelta: [4, 10],
    model: {
      inputs: {
        baseUnits: 180,
        baseNetPrice: 1_550_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 250_000,
        baseArppu: 200_000,
        activeRate: 0.55
      },
      baselineRevenue: 299_700_000,
      opportunityRevenue: [303_700_000, 309_700_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring cross-border governance refreshes",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 6,
          assumption: "Global governance reviews repeat quarterly and during planning cycles."
        },
        {
          kind: "price",
          label: "Price mix: premium for governed cross-border reporting",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 2,
          assumption: "Charge modest premium for executive-ready governance outputs."
        },
        {
          kind: "units",
          label: "Unit expansion: expand into global stakeholder seats",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 2,
          assumption: "Expand footprint by adding global governance stakeholders."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "180", opportunity: "181", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$1.55M", opportunity: "$1.55M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "30%", opportunity: "30%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.20M", opportunity: "$0.21M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-124" as OpportunityId,
    signalId: "signal-25" as SignalId,
    name: "Create a Regional Partner Network to Scale Local Deployments",
    summary: "Scale through partners while keeping Nielsen definitions and governance consistent.",
    detail:
      "Regional requirements differ. Nielsen can scale by building a partner network that delivers localized deployments under standardized definitions and governance, enabling faster expansion without linear headcount growth.",
    assumptions: [
      "Partners can execute under Nielsen governance without quality drift.",
      "Standard kits and validation checks reduce delivery risk.",
      "Partner motion expands geographic coverage quickly.",
      "Governance ownership preserves Nielsen pricing power."
    ],
    revenueDelta: [6, 14],
    model: {
      inputs: {
        baseUnits: 180,
        baseNetPrice: 1_550_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 350_000,
        baseArppu: 200_000,
        activeRate: 0.55
      },
      baselineRevenue: 317_700_000,
      opportunityRevenue: [323_700_000, 331_700_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: partner-sourced regional wins",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 3,
          high: 6,
          assumption: "Partners source incremental regional deployments."
        },
        {
          kind: "attach",
          label: "Attach expansion: regional modules attached as clients expand",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach modules as clients add regions and requirements."
        },
        {
          kind: "price",
          label: "Price mix: premium for standardized partner-certified delivery",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 3,
          assumption: "Charge premium for faster delivery with governance controls."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "180", opportunity: "183", delta: "+3", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.55M", opportunity: "$1.55M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "30%", opportunity: "31%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.20M", opportunity: "$0.20M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-125" as OpportunityId,
    signalId: "signal-25" as SignalId,
    name: "Sell Localization QA and Validation as a Recurring Control",
    summary: "Prevent regional drift by turning validation into a paid, recurring governance loop.",
    detail:
      "Regional deployments can drift. Nielsen can sell QA/validation services that run periodic checks for coverage, methodology drift, and definition alignment, priced as a recurring governance control.",
    assumptions: [
      "Governance teams value periodic validation when stacks differ by region.",
      "Validation checks can be standardized and automated.",
      "Recurring checks reduce disputes and support renewals.",
      "Validation increases trust in global dashboards."
    ],
    revenueDelta: [3, 8],
    model: {
      inputs: {
        baseUnits: 180,
        baseNetPrice: 1_550_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 250_000,
        baseArppu: 200_000,
        activeRate: 0.55
      },
      baselineRevenue: 299_700_000,
      opportunityRevenue: [302_700_000, 307_700_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring validation cycles",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 5,
          assumption: "Validation cycles repeat quarterly and during major releases."
        },
        {
          kind: "attach",
          label: "Attach expansion: QA and validation module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 2,
          assumption: "Attach validation to multi-region deployments."
        },
        {
          kind: "price",
          label: "Price mix: premium for governance controls",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 1,
          assumption: "Charge modest premium for governance-grade validation."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "180", opportunity: "180", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.55M", opportunity: "$1.55M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "30%", opportunity: "31%", delta: "+1 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.20M", opportunity: "$0.21M", delta: "+$0.01M", confidence: "Medium" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-126" as OpportunityId,
    signalId: "signal-26" as SignalId,
    name: "Sell a Contextual Planning + Suitability Suite Powered by Metadata",
    summary: "Make metadata the operating layer when identity weakens: planning, targeting, reporting.",
    detail:
      "As identity weakens, metadata becomes targeting infrastructure. Nielsen can sell a suite that uses metadata for contextual planning and suitability reporting, tied to measurable waste reduction and brand safety controls.",
    assumptions: [
      "Buyers will shift budget toward contextual solutions as identity constraints tighten.",
      "Metadata quality is strong enough to improve performance and governance.",
      "Suite can be integrated into existing workflows without major re-platforming.",
      "Metadata-led planning increases stickiness and attach."
    ],
    revenueDelta: [8, 18],
    model: {
      inputs: {
        baseUnits: 240,
        baseNetPrice: 1_200_000,
        baseAttachRate: 0.32,
        baseDlcPrice: 300_000,
        baseArppu: 190_000,
        activeRate: 0.55
      },
      baselineRevenue: 336_120_000,
      opportunityRevenue: [344_120_000, 354_120_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: premium for metadata-powered planning suite",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 4,
          high: 10,
          assumption: "Charge premium for contextual planning and suitability governance."
        },
        {
          kind: "attach",
          label: "Attach expansion: metadata coverage module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach expanded metadata coverage as clients scale contextual targeting."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring contextual audits and reviews",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 3,
          assumption: "Governance and audits create recurring usage-based services revenue."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "240", opportunity: "240", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.20M", opportunity: "$1.23M", delta: "+$0.03M", confidence: "High" },
        { driver: "Attach rate", baseline: "32%", opportunity: "33%", delta: "+1 pt", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.19M", opportunity: "$0.19M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-127" as OpportunityId,
    signalId: "signal-26" as SignalId,
    name: "Expand Metadata API Licensing as a Usage-Based Revenue Stream",
    summary: "Sell metadata via APIs with pricing that scales with coverage and call volume.",
    detail:
      "Metadata is most valuable when it is operationalized. Nielsen can license metadata via APIs to DSPs, publishers, and analytics tools, capturing usage-based expansion and creating a high-margin data line.",
    assumptions: [
      "Partners will integrate if metadata improves targeting and reporting.",
      "Usage-based pricing scales with adoption and is procurement-friendly.",
      "APIs increase switching costs and support renewals.",
      "Metadata licensing creates pull-through for measurement products."
    ],
    revenueDelta: [6, 14],
    model: {
      inputs: {
        baseUnits: 240,
        baseNetPrice: 1_200_000,
        baseAttachRate: 0.32,
        baseDlcPrice: 250_000,
        baseArppu: 190_000,
        activeRate: 0.55
      },
      baselineRevenue: 324_120_000,
      opportunityRevenue: [330_120_000, 338_120_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: metered metadata API calls",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 6,
          assumption: "API calls scale with campaign volume and partner adoption."
        },
        {
          kind: "price",
          label: "Price mix: premium for expanded metadata coverage",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 3,
          high: 6,
          assumption: "Charge contract uplift for expanded metadata coverage tiers."
        },
        {
          kind: "units",
          label: "Unit expansion: new partners adopt metadata licensing",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 2,
          assumption: "Win incremental partners that buy metadata as infrastructure."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "240", opportunity: "241", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$1.20M", opportunity: "$1.21M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "32%", opportunity: "32%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.19M", opportunity: "$0.20M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-128" as OpportunityId,
    signalId: "signal-26" as SignalId,
    name: "Create a Publisher Metadata Onboarding Toolkit",
    summary: "Reduce friction so publishers can standardize metadata quickly and monetize faster.",
    detail:
      "Metadata is only as good as onboarding. Nielsen can ship an onboarding toolkit with templates, validation, and mapping tools to help publishers standardize metadata quickly, then attach governance modules over time.",
    assumptions: [
      "Reducing onboarding time increases publisher adoption and renewals.",
      "Validation checks can be standardized and automated.",
      "Toolkit creates early attachment points for modules.",
      "Publishers fund onboarding if it increases monetization."
    ],
    revenueDelta: [5, 12],
    model: {
      inputs: {
        baseUnits: 240,
        baseNetPrice: 1_200_000,
        baseAttachRate: 0.32,
        baseDlcPrice: 300_000,
        baseArppu: 190_000,
        activeRate: 0.55
      },
      baselineRevenue: 336_120_000,
      opportunityRevenue: [341_120_000, 348_120_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: onboarding toolkit wins long-tail publishers",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 4,
          assumption: "Win incremental publishers that require fast time-to-value."
        },
        {
          kind: "attach",
          label: "Attach expansion: metadata validation module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach validation tooling as publishers scale coverage."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring metadata QA and mapping services",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 1,
          high: 3,
          assumption: "QA and mapping requests recur as catalogs evolve."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "240", opportunity: "242", delta: "+2", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.20M", opportunity: "$1.20M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "32%", opportunity: "33%", delta: "+1 pt", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.19M", opportunity: "$0.19M", delta: "+$0.00M", confidence: "Medium" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-129" as OpportunityId,
    signalId: "signal-26" as SignalId,
    name: "Quantify Outcome Uplift From Contextual Targeting and Suitability",
    summary: "Prove that metadata improves outcomes; package results as a repeatable product.",
    detail:
      "Metadata wins when it moves outcomes. Nielsen can offer outcome studies that quantify uplift from contextual targeting and suitability controls, then convert learnings into ongoing subscriptions.",
    assumptions: [
      "Brands will fund studies if results translate into measurable outcome deltas.",
      "Outcome linkage can be done via privacy-safe methods.",
      "Standardized study templates keep delivery scalable.",
      "Studies pull-through metadata licensing and planning products."
    ],
    revenueDelta: [7, 16],
    model: {
      inputs: {
        baseUnits: 240,
        baseNetPrice: 1_200_000,
        baseAttachRate: 0.32,
        baseDlcPrice: 300_000,
        baseArppu: 190_000,
        activeRate: 0.55
      },
      baselineRevenue: 336_120_000,
      opportunityRevenue: [343_120_000, 352_120_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: new brands adopt contextual outcome measurement",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 4,
          assumption: "Win incremental accounts seeking outcome proof for contextual strategies."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring contextual outcome readouts",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 7,
          assumption: "Readouts repeat across campaigns and categories."
        },
        {
          kind: "price",
          label: "Price mix: premium for outcomes proof",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 5,
          assumption: "Charge premium when work supports budget shifts and procurement decisions."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "240", opportunity: "242", delta: "+2", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.20M", opportunity: "$1.21M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "32%", opportunity: "32%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.19M", opportunity: "$0.20M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-130" as OpportunityId,
    signalId: "signal-26" as SignalId,
    name: "Bridge Retail and Content Taxonomies for Commerce-Aware Context",
    summary: "Connect content metadata to commerce categories to power planning without identity.",
    detail:
      "Commerce and content teams use different languages. Nielsen can bridge taxonomies so contextual planning can align to commerce categories, improving activation and reporting for shoppable and retail media programs.",
    assumptions: [
      "Brands want a shared taxonomy between media and commerce teams.",
      "Taxonomy mapping can be maintained as categories evolve.",
      "Bridge increases attach for RMN and contextual products.",
      "Pricing can be justified as operational simplification."
    ],
    revenueDelta: [5, 11],
    model: {
      inputs: {
        baseUnits: 240,
        baseNetPrice: 1_200_000,
        baseAttachRate: 0.32,
        baseDlcPrice: 300_000,
        baseArppu: 190_000,
        activeRate: 0.55
      },
      baselineRevenue: 336_120_000,
      opportunityRevenue: [341_120_000, 347_120_000],
      lines: [
        {
          kind: "attach",
          label: "Attach expansion: taxonomy bridge module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach bridge module to brands running retail media and contextual strategies."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: ongoing mapping and category updates",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 1,
          high: 3,
          assumption: "Mapping updates recur as catalogs and categories change."
        },
        {
          kind: "price",
          label: "Price mix: premium for cross-team interoperability",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 3,
          assumption: "Charge premium for interoperability that reduces internal friction."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "240", opportunity: "240", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.20M", opportunity: "$1.21M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "32%", opportunity: "33%", delta: "+1 pt", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.19M", opportunity: "$0.19M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-131" as OpportunityId,
    signalId: "signal-27" as SignalId,
    name: "Sell Cross-Platform Frequency Cap Planning as a Module",
    summary: "Make frequency a governed control knob across TV, CTV, and digital video.",
    detail:
      "Overserving is expensive. Nielsen can sell a frequency cap planning module that measures cross-platform frequency and recommends caps and allocations, tying the narrative to waste reduction and improved reach quality.",
    assumptions: [
      "Brands will pay to reduce measurable frequency waste.",
      "Cross-platform dedupe is accurate enough to guide planning.",
      "Waste-reduction framing reduces procurement friction.",
      "Module embeds in planning workflow, increasing stickiness."
    ],
    revenueDelta: [9, 21],
    model: {
      inputs: {
        baseUnits: 280,
        baseNetPrice: 1_250_000,
        baseAttachRate: 0.33,
        baseDlcPrice: 320_000,
        baseArppu: 180_000,
        activeRate: 0.5
      },
      baselineRevenue: 404_770_000,
      opportunityRevenue: [413_770_000, 425_770_000],
      lines: [
        {
          kind: "attach",
          label: "Attach expansion: frequency cap planning module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 3,
          high: 8,
          assumption: "Attach module where waste reduction is a strategic priority."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring frequency audits and refreshes",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 7,
          assumption: "Frequency audits repeat monthly/quarterly as spend shifts."
        },
        {
          kind: "price",
          label: "Price mix: premium for measurable waste reduction",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 3,
          high: 6,
          assumption: "Charge premium when product funds itself via waste reduction."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "280", opportunity: "280", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.25M", opportunity: "$1.26M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "33%", opportunity: "34%", delta: "+1 pt", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.18M", opportunity: "$0.19M", delta: "+$0.01M", confidence: "Medium" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-132" as OpportunityId,
    signalId: "signal-27" as SignalId,
    name: "Publish a Frequency Waste Quantification Scorecard",
    summary: "Turn hidden waste into a board-visible metric that funds the solution purchase.",
    detail:
      "Frequency waste is hard to see. Nielsen can publish a scorecard that estimates overserve and wasted impressions with confidence bands, then uses that quantified waste to justify the frequency product as a budget-funded fix.",
    assumptions: [
      "Brands will act when waste is quantified credibly.",
      "Scorecard methodology is explainable enough for procurement and governance.",
      "Scorecard becomes a recurring quarterly deliverable.",
      "Scorecard creates pull-through for frequency modules."
    ],
    revenueDelta: [7, 16],
    model: {
      inputs: {
        baseUnits: 280,
        baseNetPrice: 1_250_000,
        baseAttachRate: 0.33,
        baseDlcPrice: 250_000,
        baseArppu: 180_000,
        activeRate: 0.5
      },
      baselineRevenue: 378_370_000,
      opportunityRevenue: [385_370_000, 394_370_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: premium for waste scorecard governance",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 3,
          high: 7,
          assumption: "Charge premium for a scorecard that becomes a governance ritual."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring scorecard refreshes",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 6,
          assumption: "Refreshes repeat across quarterly planning and vendor reviews."
        },
        {
          kind: "units",
          label: "Unit expansion: new clients adopt frequency governance",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 3,
          assumption: "Win incremental adoption where waste reduction is a board topic."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "280", opportunity: "282", delta: "+2", confidence: "Low" },
        { driver: "Net price", baseline: "$1.25M", opportunity: "$1.26M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "33%", opportunity: "33%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.18M", opportunity: "$0.19M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-133" as OpportunityId,
    signalId: "signal-27" as SignalId,
    name: "Integrate Frequency Signals Into Programmatic Workflows via API",
    summary: "Make frequency operational by embedding signals in DSP pacing and optimization.",
    detail:
      "Frequency only matters if it can be acted on. Nielsen can provide APIs for frequency signals that integrate into DSP workflows, priced on usage and tied to waste reduction outcomes.",
    assumptions: [
      "DSPs and agencies will integrate if signals are stable and defensible.",
      "Usage-based pricing scales with spend and adoption.",
      "API integration increases switching costs and retention.",
      "A small set of partners covers most workflow volume."
    ],
    revenueDelta: [6, 14],
    model: {
      inputs: {
        baseUnits: 280,
        baseNetPrice: 1_250_000,
        baseAttachRate: 0.33,
        baseDlcPrice: 250_000,
        baseArppu: 180_000,
        activeRate: 0.5
      },
      baselineRevenue: 378_370_000,
      opportunityRevenue: [384_370_000, 392_370_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: metered frequency API calls",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 7,
          assumption: "API pulls scale with optimization cadence and partner adoption."
        },
        {
          kind: "attach",
          label: "Attach expansion: API access module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 3,
          assumption: "Attach API access to enterprise contracts tied to programmatic workflows."
        },
        {
          kind: "units",
          label: "Unit expansion: new platform integrations win incremental accounts",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 4,
          assumption: "Win incremental accounts that buy frequency infrastructure via partners."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "280", opportunity: "282", delta: "+2", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.25M", opportunity: "$1.25M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "33%", opportunity: "34%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.18M", opportunity: "$0.19M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-134" as OpportunityId,
    signalId: "signal-27" as SignalId,
    name: "Sell Frequency Governance SLAs for Enterprise Buyers",
    summary: "Monetize response-time and dispute support for frequency measurement questions.",
    detail:
      "Frequency disputes happen when budgets move. Nielsen can sell governance SLAs and standardized audit packets for frequency measurement, improving trust and reducing churn in high-stakes accounts.",
    assumptions: [
      "Enterprise clients pay for response-time SLAs during disputes.",
      "Audit packets can be standardized.",
      "SLAs improve renewal outcomes.",
      "Premium tier is easiest to sell at renewal."
    ],
    revenueDelta: [4, 10],
    model: {
      inputs: {
        baseUnits: 280,
        baseNetPrice: 1_250_000,
        baseAttachRate: 0.33,
        baseDlcPrice: 250_000,
        baseArppu: 180_000,
        activeRate: 0.5
      },
      baselineRevenue: 378_370_000,
      opportunityRevenue: [382_370_000, 388_370_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: SLA premium for frequency governance",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 3,
          high: 6,
          assumption: "Charge premium for response SLAs and audit artifacts."
        },
        {
          kind: "attach",
          label: "Attach expansion: audit module for frequency",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 2,
          assumption: "Attach audit module to formalize SLA packaging."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: periodic governance reviews",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 0,
          high: 2,
          assumption: "Optional reviews funded during planning cycles."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "280", opportunity: "280", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.25M", opportunity: "$1.26M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "33%", opportunity: "33%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.18M", opportunity: "$0.18M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-135" as OpportunityId,
    signalId: "signal-27" as SignalId,
    name: "Provide Real-Time Frequency Monitoring to Prevent Overserve",
    summary: "Sell low-latency monitoring so teams can intervene before waste accumulates.",
    detail:
      "Real-time monitoring enables mid-flight intervention. Nielsen can sell real-time frequency monitoring priced on usage, paired with alerting and governance artifacts that procurement can accept.",
    assumptions: [
      "Teams will pay for low-latency monitoring that reduces waste.",
      "Alerting can avoid excessive false positives.",
      "Usage-based pricing scales with spend volume.",
      "Monitoring increases stickiness in operational workflows."
    ],
    revenueDelta: [6, 15],
    model: {
      inputs: {
        baseUnits: 280,
        baseNetPrice: 1_250_000,
        baseAttachRate: 0.33,
        baseDlcPrice: 320_000,
        baseArppu: 180_000,
        activeRate: 0.5
      },
      baselineRevenue: 404_770_000,
      opportunityRevenue: [410_770_000, 419_770_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: metered monitoring and alerting",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 4,
          high: 9,
          assumption: "Monitoring usage grows with campaign pacing and volume."
        },
        {
          kind: "attach",
          label: "Attach expansion: monitoring module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 4,
          assumption: "Attach monitoring to enterprise accounts with high spend velocity."
        },
        {
          kind: "units",
          label: "Unit expansion: new performance buyers adopt monitoring",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 2,
          assumption: "Win incremental accounts that require real-time intervention capabilities."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "280", opportunity: "281", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$1.25M", opportunity: "$1.25M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "33%", opportunity: "34%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.18M", opportunity: "$0.19M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-136" as OpportunityId,
    signalId: "signal-28" as SignalId,
    name: "Standardize News Suitability Reporting for Premium Inventory",
    summary: "Help brands buy news safely with comparable reporting and governance artifacts.",
    detail:
      "Brands differentiate between ‘news’ and ‘risk’. Nielsen can standardize suitability reporting for news environments, enabling premium buys with documented controls and reducing procurement friction.",
    assumptions: [
      "Brands will pay for suitability governance as polarization increases.",
      "Taxonomy can be standardized without politicization.",
      "Governance artifacts reduce disputes and improve renewals.",
      "Suitability attaches to existing measurement contracts."
    ],
    revenueDelta: [5, 12],
    model: {
      inputs: {
        baseUnits: 200,
        baseNetPrice: 1_100_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 280_000,
        baseArppu: 150_000,
        activeRate: 0.55
      },
      baselineRevenue: 253_300_000,
      opportunityRevenue: [258_300_000, 265_300_000],
      lines: [
        {
          kind: "attach",
          label: "Attach expansion: news suitability module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach module to brands with strict governance around news adjacency."
        },
        {
          kind: "price",
          label: "Price mix: premium for governance-ready suitability reporting",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 4,
          assumption: "Charge premium for standardized governance artifacts."
        },
        {
          kind: "units",
          label: "Unit expansion: win new brands re-entering news inventory",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 3,
          assumption: "Win incremental accounts that want to buy news with defensible controls."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "200", opportunity: "201", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$1.10M", opportunity: "$1.11M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "30%", opportunity: "31%", delta: "+1 pt", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.15M", opportunity: "$0.15M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-137" as OpportunityId,
    signalId: "signal-28" as SignalId,
    name: "Create a ‘Safe News’ Publisher Certification Tier",
    summary: "Reduce procurement friction by certifying controls and reporting integrity.",
    detail:
      "Publishers want to defend premium news inventory, and buyers want fewer exceptions. Nielsen can offer a certification tier that documents controls, reporting integrity, and auditability for news environments.",
    assumptions: [
      "Publishers will fund certification if it expands premium demand.",
      "Buyers accept certification as a procurement shortcut.",
      "Criteria can be stable and defensible.",
      "Certification creates recurring maintenance revenue."
    ],
    revenueDelta: [4, 9],
    model: {
      inputs: {
        baseUnits: 200,
        baseNetPrice: 1_100_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 250_000,
        baseArppu: 150_000,
        activeRate: 0.55
      },
      baselineRevenue: 247_300_000,
      opportunityRevenue: [251_300_000, 256_300_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: certified publishers adopt Nielsen governance",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 4,
          assumption: "Win incremental publisher contracts via certification program."
        },
        {
          kind: "price",
          label: "Price mix: premium for certification badge",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 2,
          assumption: "Charge premium for certification and documented controls."
        },
        {
          kind: "attach",
          label: "Attach expansion: certification audit module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 3,
          assumption: "Attach ongoing audits as part of certification maintenance."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "200", opportunity: "202", delta: "+2", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.10M", opportunity: "$1.10M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "30%", opportunity: "31%", delta: "+1 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.15M", opportunity: "$0.15M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-138" as OpportunityId,
    signalId: "signal-28" as SignalId,
    name: "Offer Crisis-Mode Monitoring and Incident Response for News Adjacency",
    summary: "Turn high-risk periods into recurring governance services with clear SLAs.",
    detail:
      "During crisis events, adjacency risk spikes. Nielsen can sell crisis-mode monitoring and incident response services that quantify exposure, document controls, and provide remediation recommendations.",
    assumptions: [
      "Brands will fund crisis response when reputational risk is high.",
      "Monitoring can be delivered with manageable false positives.",
      "Templates keep response scalable.",
      "Services increase renewal stickiness."
    ],
    revenueDelta: [4, 10],
    model: {
      inputs: {
        baseUnits: 200,
        baseNetPrice: 1_100_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 250_000,
        baseArppu: 150_000,
        activeRate: 0.55
      },
      baselineRevenue: 247_300_000,
      opportunityRevenue: [251_300_000, 257_300_000],
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
          kind: "price",
          label: "Price mix: premium for response SLAs",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 2,
          assumption: "Charge premium for response-time guarantees."
        },
        {
          kind: "units",
          label: "Unit expansion: new crisis response subscriptions added",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 0,
          high: 1,
          assumption: "Win a small number of new subscriptions during major events."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "200", opportunity: "200", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.10M", opportunity: "$1.10M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "30%", opportunity: "30%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.15M", opportunity: "$0.16M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-139" as OpportunityId,
    signalId: "signal-28" as SignalId,
    name: "Sell Suitability Segment Planning Tools for News Inventory",
    summary: "Help planners buy ‘safe reach’ in news with explicit segment and suitability controls.",
    detail:
      "Brands don’t want to blacklist all news; they want controlled exposure. Nielsen can sell planning tools that model reach within suitability constraints, producing governed plans and comparable post-buys.",
    assumptions: [
      "Planners value tools that enable safe exposure rather than blanket exclusions.",
      "Suitability constraints can be operationalized across key partners.",
      "Governed planning reduces disputes and improves renewals.",
      "Planning tools attach to existing measurement contracts."
    ],
    revenueDelta: [5, 11],
    model: {
      inputs: {
        baseUnits: 200,
        baseNetPrice: 1_100_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 250_000,
        baseArppu: 150_000,
        activeRate: 0.55
      },
      baselineRevenue: 247_300_000,
      opportunityRevenue: [252_300_000, 258_300_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: premium for governed suitability planning",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 3,
          high: 6,
          assumption: "Charge premium for planning outputs that are governance-ready."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring suitability plan refreshes",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 1,
          high: 3,
          assumption: "Plans are refreshed during quarterly cycles and major news events."
        },
        {
          kind: "attach",
          label: "Attach expansion: suitability constraints module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 2,
          assumption: "Attach constraint module to formalize suitability controls."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "200", opportunity: "200", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.10M", opportunity: "$1.11M", delta: "+$0.01M", confidence: "High" },
        { driver: "Attach rate", baseline: "30%", opportunity: "31%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.15M", opportunity: "$0.15M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-140" as OpportunityId,
    signalId: "signal-28" as SignalId,
    name: "Publish Advertiser Governance Packs for News Adjacency Decisions",
    summary: "Create board-ready documentation so brands can defend their news posture.",
    detail:
      "Brands need to defend their posture: when to advertise in news, where, and under what controls. Nielsen can sell governance packs with decision notes, taxonomy definitions, and audit artifacts.",
    assumptions: [
      "Brands will pay for documentation that reduces board-level anxiety.",
      "Packs can be standardized across categories and regions.",
      "Governance packs increase retention and reduce churn.",
      "Packs pull-through suitability modules and monitoring services."
    ],
    revenueDelta: [3, 8],
    model: {
      inputs: {
        baseUnits: 200,
        baseNetPrice: 1_100_000,
        baseAttachRate: 0.3,
        baseDlcPrice: 250_000,
        baseArppu: 150_000,
        activeRate: 0.55
      },
      baselineRevenue: 247_300_000,
      opportunityRevenue: [250_300_000, 255_300_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: governance pack premium",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 4,
          assumption: "Charge modest premium for standardized executive documentation."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring governance refreshes",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 1,
          high: 2,
          assumption: "Refreshes repeat quarterly and during major risk events."
        },
        {
          kind: "units",
          label: "Unit expansion: new governance subscriptions added",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 0,
          high: 2,
          assumption: "Win incremental governance subscriptions from risk-sensitive brands."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "200", opportunity: "200", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.10M", opportunity: "$1.10M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "30%", opportunity: "30%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.15M", opportunity: "$0.15M", delta: "+$0.00M", confidence: "Medium" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-141" as OpportunityId,
    signalId: "signal-29" as SignalId,
    name: "Sell an Ad-Tier Currency Certification Bundle to Streamers",
    summary: "Win currency reset moments with independent measurement, governance, and auditability.",
    detail:
      "Ad tiers create a currency reset moment. Nielsen can sell a certification bundle that provides TV-like reporting, auditability, and standardized definitions that procurement and agencies trust, positioning Nielsen as the default currency for ad-tier inventory.",
    assumptions: [
      "Streamers will invest in independent measurement to unlock premium ad demand.",
      "Certification reduces procurement friction for buyers.",
      "Standard definitions can be negotiated and documented.",
      "Certification creates multi-year lock-in once adopted."
    ],
    revenueDelta: [10, 24],
    model: {
      inputs: {
        baseUnits: 260,
        baseNetPrice: 1_350_000,
        baseAttachRate: 0.32,
        baseDlcPrice: 350_000,
        baseArppu: 170_000,
        activeRate: 0.55
      },
      baselineRevenue: 404_430_000,
      opportunityRevenue: [414_430_000, 428_430_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: new ad-tier certification clients",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 4,
          high: 8,
          assumption: "Win incremental streamer and agency contracts during currency reset moments."
        },
        {
          kind: "attach",
          label: "Attach expansion: certification and audit modules",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 3,
          high: 7,
          assumption: "Attach audit and governance modules as part of certification."
        },
        {
          kind: "price",
          label: "Price mix: premium for currency certification",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 3,
          high: 9,
          assumption: "Charge premium for certification, governance artifacts, and industry trust."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "260", opportunity: "264", delta: "+4", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.35M", opportunity: "$1.36M", delta: "+$0.01M", confidence: "High" },
        { driver: "Attach rate", baseline: "32%", opportunity: "33%", delta: "+1 pt", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.17M", opportunity: "$0.17M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-142" as OpportunityId,
    signalId: "signal-29" as SignalId,
    name: "Offer Forecasting for Streaming Guarantees and Make-Goods",
    summary: "Reduce delivery risk with forecasting and pacing diagnostics for ad-tier inventory.",
    detail:
      "As ad tiers scale, guarantees and make-goods become real risk. Nielsen can offer forecasting and pacing diagnostics that help streamers and buyers avoid shortfalls, priced as a recurring usage-based product.",
    assumptions: [
      "Guarantee risk increases willingness to pay for forecasting.",
      "Forecasts can be directionally accurate and operationally useful.",
      "Recurring refresh cadence supports usage-based pricing.",
      "Forecasting improves renewals by reducing high-stakes disputes."
    ],
    revenueDelta: [7, 16],
    model: {
      inputs: {
        baseUnits: 260,
        baseNetPrice: 1_350_000,
        baseAttachRate: 0.32,
        baseDlcPrice: 350_000,
        baseArppu: 170_000,
        activeRate: 0.55
      },
      baselineRevenue: 404_430_000,
      opportunityRevenue: [411_430_000, 420_430_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring forecasting and pacing refreshes",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 8,
          assumption: "Forecasting refresh cadence increases near upfront and quarter-end."
        },
        {
          kind: "attach",
          label: "Attach expansion: guarantees and pacing module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach pacing module to ad-tier deals with guarantees."
        },
        {
          kind: "price",
          label: "Price mix: premium for delivery-risk reduction",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 3,
          assumption: "Charge modest premium for risk reduction and governance artifacts."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "260", opportunity: "260", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.35M", opportunity: "$1.35M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "32%", opportunity: "33%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.17M", opportunity: "$0.18M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-143" as OpportunityId,
    signalId: "signal-29" as SignalId,
    name: "Deliver Cross-Platform Dedupe for Ad-Tier Streaming Reach",
    summary: "Make ad-tier reach incremental and comparable to linear/CTV with deduped reporting.",
    detail:
      "Buyers need to know whether ad tiers add incremental reach or just shift it. Nielsen can offer deduped reach/frequency reporting for ad tiers across platforms, positioning ad tiers as a governed part of cross-media plans.",
    assumptions: [
      "Incremental reach is the buyer narrative for scaling ad tiers.",
      "Dedupe can be delivered with explainable methodology.",
      "Standard reporting reduces disputes and supports procurement.",
      "Dedupe attaches naturally to currency certification."
    ],
    revenueDelta: [8, 18],
    model: {
      inputs: {
        baseUnits: 260,
        baseNetPrice: 1_350_000,
        baseAttachRate: 0.32,
        baseDlcPrice: 350_000,
        baseArppu: 170_000,
        activeRate: 0.55
      },
      baselineRevenue: 404_430_000,
      opportunityRevenue: [412_430_000, 422_430_000],
      lines: [
        {
          kind: "attach",
          label: "Attach expansion: ad-tier dedupe module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 3,
          high: 7,
          assumption: "Attach dedupe module to enterprise ad-tier buyers."
        },
        {
          kind: "units",
          label: "Unit expansion: new ad-tier reporting contracts",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 2,
          high: 4,
          assumption: "Win incremental accounts when ad tiers become planned inventory."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring dedupe runs and refreshes",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 7,
          assumption: "Dedupe refresh cadence drives recurring usage-based revenue."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "260", opportunity: "262", delta: "+2", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.35M", opportunity: "$1.35M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "32%", opportunity: "33%", delta: "+1 pt", confidence: "High" },
        { driver: "Live-ops ARPPU", baseline: "$0.17M", opportunity: "$0.18M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-144" as OpportunityId,
    signalId: "signal-29" as SignalId,
    name: "Sell Ad Load and Attention Diagnostics for Ad Tiers",
    summary: "Optimize monetization without driving churn by measuring ad load health and attention.",
    detail:
      "Ad tiers add complexity: too many ads and churn increases. Nielsen can sell diagnostics that link ad load and attention proxies to retention risk, enabling better monetization decisions.",
    assumptions: [
      "Streamers will pay for churn risk reduction tied to monetization decisions.",
      "Diagnostics can be delivered with a repeatable template.",
      "Recurring cadence supports usage-based pricing.",
      "Diagnostics attach to certification and currency offerings."
    ],
    revenueDelta: [6, 14],
    model: {
      inputs: {
        baseUnits: 260,
        baseNetPrice: 1_350_000,
        baseAttachRate: 0.32,
        baseDlcPrice: 350_000,
        baseArppu: 170_000,
        activeRate: 0.55
      },
      baselineRevenue: 404_430_000,
      opportunityRevenue: [410_430_000, 418_430_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring ad load diagnostics",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 3,
          high: 7,
          assumption: "Diagnostics repeat as ad strategies change."
        },
        {
          kind: "attach",
          label: "Attach expansion: ad load health module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 4,
          assumption: "Attach module to streamers with meaningful ad-tier revenue."
        },
        {
          kind: "price",
          label: "Price mix: premium for retention-linked reporting",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 3,
          assumption: "Charge premium for reporting tied to churn and retention."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "260", opportunity: "260", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.35M", opportunity: "$1.36M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "32%", opportunity: "33%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.17M", opportunity: "$0.18M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-145" as OpportunityId,
    signalId: "signal-29" as SignalId,
    name: "Offer an International Ad-Tier Launch Kit (Measurement + Governance)",
    summary: "Help streamers launch ad tiers globally with consistent definitions and local compliance.",
    detail:
      "International ad-tier launches require local compliance and consistent definitions. Nielsen can offer a launch kit with templates, governance artifacts, and validation checks, priced as a premium onboarding package.",
    assumptions: [
      "Streamers will pay for faster international launches with reduced compliance risk.",
      "Templates can cover most launch scenarios without bespoke work.",
      "Launch kits create attach opportunities for ongoing modules.",
      "Early wins create durable currency positions."
    ],
    revenueDelta: [6, 15],
    model: {
      inputs: {
        baseUnits: 260,
        baseNetPrice: 1_350_000,
        baseAttachRate: 0.32,
        baseDlcPrice: 350_000,
        baseArppu: 170_000,
        activeRate: 0.55
      },
      baselineRevenue: 404_430_000,
      opportunityRevenue: [410_430_000, 419_430_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: new international launch engagements",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 3,
          high: 6,
          assumption: "Win incremental launch engagements in priority regions."
        },
        {
          kind: "attach",
          label: "Attach expansion: compliance and governance modules",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach compliance and audit modules as part of launch kit."
        },
        {
          kind: "price",
          label: "Price mix: premium for launch acceleration",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 4,
          assumption: "Charge premium for faster onboarding and reduced compliance risk."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "260", opportunity: "263", delta: "+3", confidence: "Medium" },
        { driver: "Net price", baseline: "$1.35M", opportunity: "$1.36M", delta: "+$0.01M", confidence: "Low" },
        { driver: "Attach rate", baseline: "32%", opportunity: "33%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.17M", opportunity: "$0.17M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-146" as OpportunityId,
    signalId: "signal-30" as SignalId,
    name: "Add Carbon-Aware Media Reporting as an Attach Module",
    summary: "Meet procurement demand for sustainability metrics in media buying and reporting.",
    detail:
      "Sustainability is moving into procurement. Nielsen can add carbon-aware reporting (emissions proxies, supply mix) as an attach module, enabling brands to report against internal targets without adding new vendors.",
    assumptions: [
      "Procurement will increasingly require sustainability reporting for media buys.",
      "Emissions proxies are directionally useful and can be transparently documented.",
      "Attach module reduces churn by expanding stakeholder coverage.",
      "Sustainability reporting can be standardized across key channels."
    ],
    revenueDelta: [5, 12],
    model: {
      inputs: {
        baseUnits: 150,
        baseNetPrice: 1_000_000,
        baseAttachRate: 0.25,
        baseDlcPrice: 250_000,
        baseArppu: 140_000,
        activeRate: 0.55
      },
      baselineRevenue: 170_925_000,
      opportunityRevenue: [175_925_000, 182_925_000],
      lines: [
        {
          kind: "attach",
          label: "Attach expansion: carbon reporting module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 5,
          assumption: "Attach to enterprise accounts with formal sustainability reporting needs."
        },
        {
          kind: "price",
          label: "Price mix: premium for procurement-ready sustainability metrics",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 4,
          assumption: "Charge premium when metrics are required for procurement compliance."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring sustainability audits and refreshes",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 1,
          high: 3,
          assumption: "Audits and refresh cycles create recurring usage-based services revenue."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "150", opportunity: "150", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.00M", opportunity: "$1.01M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "25%", opportunity: "26%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.14M", opportunity: "$0.15M", delta: "+$0.01M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-147" as OpportunityId,
    signalId: "signal-30" as SignalId,
    name: "Create a Sustainable Supply Certification for Media Inventory",
    summary: "Certify inventory and reporting integrity for sustainability-minded procurement teams.",
    detail:
      "If sustainability becomes part of the buy, certification reduces friction. Nielsen can offer a sustainable supply certification that documents methodology and controls, helping buyers align spend to targets.",
    assumptions: [
      "Brands will pay for certification if it simplifies procurement decisions.",
      "Certification criteria can be standardized and defensible.",
      "Certification creates recurring maintenance revenue.",
      "Certification ties naturally to carbon reporting modules."
    ],
    revenueDelta: [4, 10],
    model: {
      inputs: {
        baseUnits: 150,
        baseNetPrice: 1_000_000,
        baseAttachRate: 0.25,
        baseDlcPrice: 250_000,
        baseArppu: 140_000,
        activeRate: 0.55
      },
      baselineRevenue: 170_925_000,
      opportunityRevenue: [174_925_000, 180_925_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: certified supply wins new accounts",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 3,
          assumption: "Win incremental accounts where sustainability is a gating requirement."
        },
        {
          kind: "price",
          label: "Price mix: premium for certification",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 3,
          assumption: "Charge premium for certification and documented controls."
        },
        {
          kind: "attach",
          label: "Attach expansion: certification audit module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 2,
          high: 4,
          assumption: "Attach ongoing audits as part of certification maintenance."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "150", opportunity: "151", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$1.00M", opportunity: "$1.01M", delta: "+$0.01M", confidence: "Low" },
        { driver: "Attach rate", baseline: "25%", opportunity: "26%", delta: "+1 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.14M", opportunity: "$0.14M", delta: "+$0.00M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-148" as OpportunityId,
    signalId: "signal-30" as SignalId,
    name: "Sell Sustainability Planning Scenario Packs for Procurement",
    summary: "Translate sustainability targets into what-if media mixes with assumptions and deltas.",
    detail:
      "If sustainability becomes part of the buy, teams need scenarios. Nielsen can sell scenario packs that translate targets into media mix what-ifs and governance artifacts that procurement can accept.",
    assumptions: [
      "Procurement values scenario outputs over static reporting.",
      "Proxies can be transparently documented with confidence bands.",
      "Scenario packs repeat quarterly.",
      "Packs increase attach of carbon reporting modules."
    ],
    revenueDelta: [3, 8],
    model: {
      inputs: {
        baseUnits: 150,
        baseNetPrice: 1_000_000,
        baseAttachRate: 0.25,
        baseDlcPrice: 200_000,
        baseArppu: 140_000,
        activeRate: 0.55
      },
      baselineRevenue: 158_425_000,
      opportunityRevenue: [161_425_000, 166_425_000],
      lines: [
        {
          kind: "arppu",
          label: "Usage ARPPU: quarterly scenario refreshes",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 5,
          assumption: "Refresh cadence aligns to procurement and finance cycles."
        },
        {
          kind: "price",
          label: "Price mix: premium for scenario packs",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 1,
          high: 2,
          assumption: "Charge modest premium for board-ready scenario outputs."
        },
        {
          kind: "units",
          label: "Unit expansion: new scenario pack subscribers",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 0,
          high: 1,
          assumption: "Win incremental subscriptions among sustainability-led procurement teams."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "150", opportunity: "150", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.00M", opportunity: "$1.00M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "25%", opportunity: "25%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.14M", opportunity: "$0.14M", delta: "+$0.00M", confidence: "Medium" }
      ]
    },
    confidence: "Medium"
  },
  {
    id: "opportunity-149" as OpportunityId,
    signalId: "signal-30" as SignalId,
    name: "Partner With Carbon Data Providers and Attach ‘Verified Emissions’ Reporting",
    summary: "Increase credibility by sourcing third-party emissions factors and documenting lineage.",
    detail:
      "Sustainability metrics will be questioned. Nielsen can partner with carbon data providers, attach verified emissions factors, and document lineage, increasing credibility and pricing power.",
    assumptions: [
      "Third-party data increases credibility enough to justify pricing.",
      "Partnership data can be integrated without heavy operational burden.",
      "Verified reporting reduces disputes and improves renewals.",
      "Partnerships create additional attach opportunities."
    ],
    revenueDelta: [4, 9],
    model: {
      inputs: {
        baseUnits: 150,
        baseNetPrice: 1_000_000,
        baseAttachRate: 0.25,
        baseDlcPrice: 250_000,
        baseArppu: 140_000,
        activeRate: 0.55
      },
      baselineRevenue: 170_925_000,
      opportunityRevenue: [174_925_000, 179_925_000],
      lines: [
        {
          kind: "units",
          label: "Unit expansion: new procurement-led sustainability buyers",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 1,
          high: 2,
          assumption: "Win incremental accounts where verified emissions reporting is required."
        },
        {
          kind: "attach",
          label: "Attach expansion: verified emissions reporting module",
          formula: "Attach delta x units x module price",
          inputs: "Attach rate x Units x Module price",
          low: 1,
          high: 3,
          assumption: "Attach verified reporting to existing enterprise accounts."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: recurring verification and audit cycles",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 2,
          high: 4,
          assumption: "Verification and audits recur quarterly."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "150", opportunity: "151", delta: "+1", confidence: "Low" },
        { driver: "Net price", baseline: "$1.00M", opportunity: "$1.00M", delta: "+$0.00M", confidence: "Low" },
        { driver: "Attach rate", baseline: "25%", opportunity: "26%", delta: "+1 pt", confidence: "Medium" },
        { driver: "Live-ops ARPPU", baseline: "$0.14M", opportunity: "$0.15M", delta: "+$0.01M", confidence: "High" }
      ]
    },
    confidence: "High"
  },
  {
    id: "opportunity-150" as OpportunityId,
    signalId: "signal-30" as SignalId,
    name: "Create an Executive Sustainability Governance Pack (Quarterly)",
    summary: "Make sustainability reporting board-ready: definitions, caveats, and decision notes.",
    detail:
      "Boards want consistent sustainability reporting, not ad-hoc spreadsheets. Nielsen can sell quarterly governance packs that document definitions, assumptions, and deltas, turning sustainability into a governed reporting ritual.",
    assumptions: [
      "Boards and procurement will pay for consistent, governed sustainability reporting.",
      "Standard templates can cover most reporting needs.",
      "Quarterly cadence creates recurring revenue.",
      "Governance packs increase retention and attach of carbon modules."
    ],
    revenueDelta: [3, 8],
    model: {
      inputs: {
        baseUnits: 150,
        baseNetPrice: 1_000_000,
        baseAttachRate: 0.25,
        baseDlcPrice: 200_000,
        baseArppu: 140_000,
        activeRate: 0.55
      },
      baselineRevenue: 158_425_000,
      opportunityRevenue: [161_425_000, 166_425_000],
      lines: [
        {
          kind: "price",
          label: "Price mix: premium for governance pack",
          formula: "Price delta x units",
          inputs: "Net price x Units",
          low: 2,
          high: 4,
          assumption: "Charge premium for executive-ready governance artifacts and documentation."
        },
        {
          kind: "arppu",
          label: "Usage ARPPU: quarterly governance refreshes",
          formula: "ARPPU delta x active units",
          inputs: "ARPPU x MAU",
          low: 1,
          high: 3,
          assumption: "Quarterly refresh cadence drives recurring services revenue."
        },
        {
          kind: "units",
          label: "Unit expansion: new governance pack subscribers",
          formula: "New clients x net price",
          inputs: "Units x Net price",
          low: 0,
          high: 1,
          assumption: "Win incremental subscriptions among procurement-led stakeholders."
        }
      ],
      drivers: [
        { driver: "Units", baseline: "150", opportunity: "150", delta: "+0", confidence: "Low" },
        { driver: "Net price", baseline: "$1.00M", opportunity: "$1.01M", delta: "+$0.01M", confidence: "Medium" },
        { driver: "Attach rate", baseline: "25%", opportunity: "25%", delta: "+0 pt", confidence: "Low" },
        { driver: "Live-ops ARPPU", baseline: "$0.14M", opportunity: "$0.15M", delta: "+$0.01M", confidence: "Low" }
      ]
    },
    confidence: "Medium"
  }
];
