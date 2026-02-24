import type { InternalAuditSignal } from "./types";

export const internalAuditSampleSignals = [
  {
    id: "crm-sync-lag",
    title: "CRM sync lag breaching SLA",
    summary:
      "Daily Salesforce to Snowflake sync averages 18h versus the 6h SLA, delaying pipeline reporting.",
    sources: [
      { name: "Salesforce", logo: "/avatars/aditya.jpg" },
      { name: "Snowflake", logo: "/avatars/yash.webp" },
    ],
  },
  {
    id: "model-drift",
    title: "Attribution model drift detected",
    summary:
      "Feature distributions shifted after the last release, creating a 12% variance in lift estimates.",
    sources: [
      { name: "Model registry", logo: "/avatars/yash.webp" },
      { name: "Experiment logs", logo: "/avatars/aditya.jpg" },
    ],
  },
  {
    id: "approval-overrides",
    title: "Manual spend approvals rising",
    summary:
      "Overrides now required on 1 in 4 campaigns, increasing audit effort for finance teams.",
    sources: [
      { name: "Salesforce", logo: "/avatars/aditya.jpg" },
      { name: "Gong", logo: "/avatars/yash.webp" },
    ],
  },
] satisfies InternalAuditSignal[];
