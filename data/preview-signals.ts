import type { PreviewSignal } from "./types";

export const previewExampleSignals = [
  {
    id: "crm-sync-lag",
    title: "Buenos Aires team is overperforming",
    summary:
      "The Buenos Aires team's close rate has significantly increased since your new GM started. This is hidden in the broader LATAM numbers but you may want to make sure this new GM is properly recognized",
    sources: [
      { name: "Salesforce", logo: "/logos/salesforce.png" },
      { name: "Marketo", logo: "/logos/marketo.png" },
    ],
  },
  {
    id: "model-drift",
    title: "AI Teammates product may be hurting retention",
    summary:
      "Accounts which purchased the AI Teammates product may be churning at a measurably higher rate than before they purchased the add-on. There may or may not be an issue with that product",
    sources: [
      { name: "Posthog", logo: "/logos/posthog.png" },
      { name: "Snowflake", logo: "/logos/snowflake.png" },
    ],
  },
  {
    id: "approval-overrides",
    title: "ICP in the manufacturing sector might be wrong",
    summary:
      "The manufacturing deals seem to end up getting signed by Directors not by C-Suite execs. You might be able to close deals faster by targeting Directors more specifically in that vertical",
    sources: [
      { name: "Salesforce", logo: "/logos/salesforce.png" },
      { name: "Docusign", logo: "/logos/docusign.png" },
    ],
  },
] satisfies PreviewSignal[];
