"use client";

import type { Signal, Opportunity, CombinedOpportunity } from "@/data/types";
import type { OpportunityEvidencePack } from "@/data/evidence";
import { OpportunityAudit } from "./opportunity/opportunity-audit";
import { OpportunityModelPanel } from "./opportunity/opportunity-model-panel";
import { useOpportunityViewModel } from "./opportunity/use-opportunity-view-model";

export function OpportunityDetailClient({
  signal,
  opportunity,
  evidence,
}: {
  signal: Signal;
  opportunity: Opportunity | CombinedOpportunity;
  evidence: OpportunityEvidencePack;
}) {
  const viewModel = useOpportunityViewModel({ opportunity });

  return (
    <div className="flex flex-col gap-8">
      <OpportunityModelPanel
        signal={signal}
        opportunity={opportunity}
        viewModel={viewModel}
      />

      <OpportunityAudit
        signal={signal}
        opportunity={opportunity}
        evidence={evidence}
      />
    </div>
  );
}
