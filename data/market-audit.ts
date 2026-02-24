import type { Signal, SignalId } from "./types";

export const signals: Signal[] = [
  {
    id: "signal-01" as SignalId,
    title: "CTV Currency Fragmentation Is Becoming a Buying Friction",
    summary:
      "Upfronts are increasingly negotiated across multiple measurement stacks (platform, publisher, and independent), creating reconciliation overhead and slower optimization. Boards will ask who owns the ‘truth’ for cross-screen reach, frequency, and outcomes — a direct opening for Nielsen to be the default currency layer.",
    theme: "platform"
  },
  {
    id: "signal-02" as SignalId,
    title: "Retail Media Standardization Moves From Nice-to-Have to Requirement",
    summary:
      "RMNs are being pushed to prove incrementality and comparability across retailers, but data lives in closed loops. The buyers’ demand is shifting from ‘retailer-specific dashboards’ to standardized cross-retailer reporting — a natural adjacency for Nielsen measurement products and identity-safe linkage.",
    theme: "pricing"
  },
  {
    id: "signal-03" as SignalId,
    title: "Attention Metrics Are Creeping Into the Media Currency Conversation",
    summary:
      "Advertisers want to pay for probability of impact, not just delivered impressions. ‘Viewable seconds’, audibility, and dwell are becoming table stakes in pitch meetings, creating a wedge for Nielsen to extend from audience measurement into attention-weighted planning and attribution layers.",
    theme: "audience"
  },
  {
    id: "signal-04" as SignalId,
    title: "Identity Shifts: Cookies Fade, PPIDs Rise, and Linkage Gets Political",
    summary:
      "As third-party identifiers weaken, buyers lean on publisher-provided IDs (PPIDs), clean rooms, and modeled identity — which introduces governance and bias questions. This raises the premium on transparent methodology and auditability, where Nielsen can differentiate if it ships ‘explainable linkage’ at scale.",
    theme: "regulatory"
  },
  {
    id: "signal-05" as SignalId,
    title: "GenAI Content Flood Increases Brand-Safety Complexity and IVT Risk",
    summary:
      "The supply of low-quality pages and synthetic video channels increases invalid traffic and makes contextual targeting noisier. Measurement buyers are asking for verifiable supply quality and ‘human attention’ signals — an opportunity for Nielsen to package quality + audience measurement together.",
    theme: "competition"
  },
  {
    id: "signal-06" as SignalId,
    title: "FAST Channels Keep Growing, But Advertisers Still Lack Comparable Reporting",
    summary:
      "FAST is attracting budget because it looks like TV with digital targeting, but planning and post-campaign reporting remain fragmented. Boards will ask whether FAST inventory is incremental to linear/CTV reach — a use case that demands cross-platform dedupe and unified reporting.",
    theme: "content"
  },
  {
    id: "signal-07" as SignalId,
    title: "Sports Rights Fragmentation Creates New Measurement ‘Must-Wins’",
    summary:
      "Sports audiences now scatter across broadcast, MVPD, and multiple streamers; rights deals are increasingly performance-linked. Rights holders and advertisers need a common view of reach and co-viewing — Nielsen can become the neutral scoreboard.",
    theme: "content"
  },
  {
    id: "signal-08" as SignalId,
    title: "Gaming and Interactive Ads Are Pulling Brand Budgets Into New Surfaces",
    summary:
      "Brand teams want to quantify incremental reach from in-game, esports, and creator-led gaming content, but measurement conventions are inconsistent. A Nielsen ‘gaming audience layer’ could translate gaming exposure into the language media directors already use.",
    theme: "audience"
  },
  {
    id: "signal-09" as SignalId,
    title: "Podcast and Digital Audio Measurement Is Consolidating Around a Few Standards",
    summary:
      "Audio is moving from experimental to planned, with buyers demanding comparable reach and frequency across podcasts, streaming audio, and radio. The winner is the vendor that can link audio exposure to cross-media outcomes without identity overreach.",
    theme: "platform"
  },
  {
    id: "signal-10" as SignalId,
    title: "Political Ad Cycles Are Forcing Local and Streaming to ‘Prove It’ Fast",
    summary:
      "Political spend surges hit local broadcast, local CTV, and digital video simultaneously, and buyers want rapid pacing diagnostics. This is a recurring seasonal event where Nielsen can sell short-cycle measurement + forecasting packages.",
    theme: "regional"
  },
  {
    id: "signal-11" as SignalId,
    title: "Brand Suitability in UGC Has Become a Board-Level Risk Topic",
    summary:
      "UGC platforms are increasingly scrutinized for adjacency to misinformation and unsafe content. Agencies want suitability controls with measurement-grade reporting — a chance for Nielsen to sell ‘quality + audience’ bundles with consistent governance.",
    theme: "regulatory"
  },
  {
    id: "signal-12" as SignalId,
    title: "Emerging Markets Demand Modern Cross-Platform Measurement Without Mature Panels",
    summary:
      "In LATAM, SEA, and parts of Africa, device and platform growth is outpacing traditional panel infrastructure. The company that can blend panel, census, and modeled signals transparently can win multi-year contracts as currencies reset.",
    theme: "regional"
  },
  {
    id: "signal-13" as SignalId,
    title: "Outcome-Based Buying Is Shifting Negotiations From CPMs to Incrementality",
    summary:
      "Advertisers increasingly ask ‘what did this add?’ rather than ‘what did this deliver?’. This requires clean-room-safe matched-market and incrementality methods that can stand up to procurement — a premium consulting + product opportunity for Nielsen.",
    theme: "pricing"
  },
  {
    id: "signal-14" as SignalId,
    title: "MMM Is Back — Not as a Model, but as a Governance Layer",
    summary:
      "Privacy restrictions and walled-garden limits are reviving MMM as the cross-channel truth. The board question becomes: can Nielsen be the orchestrator that ties MMM, experiments, and measurement into one consistent decision framework?",
    theme: "macro"
  },
  {
    id: "signal-15" as SignalId,
    title: "Shoppable Video and Creator Commerce Blur the Line Between Media and Retail",
    summary:
      "Commerce signals are migrating into video surfaces (shoppable ads, affiliate, live shopping), but the measurement stack is fragmented between commerce and media teams. Nielsen can bridge the taxonomy and quantify cross-media commerce lift.",
    theme: "creator"
  },
  {
    id: "signal-16" as SignalId,
    title: "Cross-Media Planning Is Becoming the Default Operating Model",
    summary:
      "Media teams now plan holistically across linear, CTV, digital, audio, and social, but tools still split by channel. The opportunity is a unified planning and post-campaign system where deduped reach is the first-class object — Nielsen’s natural endgame.",
    theme: "platform"
  },
  {
    id: "signal-17" as SignalId,
    title: "Clean Rooms Are the New Data Pipes — and the New Vendor Lock-In",
    summary:
      "Data clean rooms are increasingly required for privacy-safe joins, but they introduce ecosystem-specific schemas and constraints. Buyers want portability and standardized measurement definitions; Nielsen can become the layer that makes clean-room outputs comparable.",
    theme: "regulatory"
  },
  {
    id: "signal-18" as SignalId,
    title: "Measurement Methodology Scrutiny Is Increasing (Auditability as a Product)",
    summary:
      "Procurement and legal teams are asking sharper questions about bias, panel representation, and modeling assumptions. Companies that can package audit trails, lineage, and explainable modeling will be preferred vendors — matching Nielsen’s credibility advantage if operationalized.",
    theme: "competition"
  },
  {
    id: "signal-19" as SignalId,
    title: "Panel Recruitment and Maintenance Costs Are Rising (Supply Constraints)",
    summary:
      "Recruiting representative panels is harder as consumers opt out and device ecosystems fragment. The near-term challenge is cost; the long-term opportunity is hybrid measurement that lowers dependency on pure panel scale while maintaining trust.",
    theme: "macro"
  },
  {
    id: "signal-20" as SignalId,
    title: "Macro Volatility Increases the Value of Fast, Credible Demand Signals",
    summary:
      "When consumer budgets tighten, marketers reallocate quickly and demand weekly diagnostics. Nielsen can monetize timeliness — turning ‘faster readouts’ into an upsell and reducing churn in uncertain periods.",
    theme: "macro"
  },
  {
    id: "signal-21" as SignalId,
    title: "Streaming Bundling Changes Audience Definitions and Retention Strategies",
    summary:
      "Bundles and tiered pricing are changing who watches what and how ad loads are tolerated. Publishers and advertisers need cohort-aware measurement that can describe bundling-driven shifts without identity creep — a place for Nielsen segmentation products.",
    theme: "audience"
  },
  {
    id: "signal-22" as SignalId,
    title: "AI Personalization and Dynamic Creative Increase Measurement Complexity",
    summary:
      "When creative and targeting vary by user in real time, ‘campaign’ becomes a set of micro-variants. The measurement provider that can summarize performance without losing fidelity will win new budget owners in performance and brand teams.",
    theme: "hardware"
  },
  {
    id: "signal-23" as SignalId,
    title: "Walled Gardens Offer ‘Black-Box’ Reporting, Driving Demand for Independent Verification",
    summary:
      "Major platforms will happily provide numbers — but advertisers increasingly want independent verification and deduplication across platforms. This creates a wedge for Nielsen to be the referee, especially if it can integrate via privacy-safe APIs.",
    theme: "competition"
  },
  {
    id: "signal-24" as SignalId,
    title: "Regulation Is Expanding Beyond Privacy to AI, Content, and Data Portability",
    summary:
      "New rules focus on automated decisioning, transparency, and cross-border data flows. This raises implementation costs for measurement and identity, and increases willingness to pay for ‘compliance-by-design’ measurement products.",
    theme: "regulatory"
  },
  {
    id: "signal-25" as SignalId,
    title: "Cross-Border Data Restrictions Create Regional Measurement Variants",
    summary:
      "Data residency and localization requirements are forcing different measurement stacks by region. A global company needs consistent definitions with regional deployment — a high-value enterprise sell for Nielsen.",
    theme: "regional"
  },
  {
    id: "signal-26" as SignalId,
    title: "Content Metadata Becomes a Competitive Weapon (Context Wins Without Identity)",
    summary:
      "As identity weakens, high-quality content metadata powers contextual targeting, brand suitability, and planning. The board-level thesis: better metadata becomes better monetization — positioning Nielsen’s metadata assets as a growth engine.",
    theme: "content"
  },
  {
    id: "signal-27" as SignalId,
    title: "Advertisers Want Consistent Cross-Platform Frequency Management",
    summary:
      "Overserving and wasted frequency are now recognized as a material cost; brands want a single view of frequency caps across TV, CTV, and digital video. A Nielsen frequency layer could be sold as a measurable waste-reduction product.",
    theme: "platform"
  },
  {
    id: "signal-28" as SignalId,
    title: "News Consumption Polarization Raises Suitability Demands in Premium Inventory",
    summary:
      "Brands increasingly differentiate between ‘news’ and ‘risk’, leading to tighter suitability filters and measurement requirements. Nielsen can monetize standardized suitability measurement and reporting for agencies and publishers.",
    theme: "regulatory"
  },
  {
    id: "signal-29" as SignalId,
    title: "Ad-Supported SVOD Expansion Changes Supply Mix and Measurement Expectations",
    summary:
      "As more streamers launch ad tiers, buyers demand TV-like reporting and predictable guarantees. This is a currency reset moment that favors independent measurement and unified reach accounting.",
    theme: "platform"
  },
  {
    id: "signal-30" as SignalId,
    title: "Sustainability Reporting Is Moving Into Media Procurement",
    summary:
      "Large advertisers increasingly ask for carbon-aware planning and reporting. If sustainability becomes part of the buy, measurement providers that can quantify and standardize emissions proxies gain a new product surface.",
    theme: "macro"
  }
];
