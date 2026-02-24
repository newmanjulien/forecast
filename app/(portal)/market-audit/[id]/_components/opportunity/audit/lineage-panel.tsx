"use client";

import type { OpportunityEvidencePack } from "@/data/evidence";
import { Panel } from "@/components/ui/panel";
import { SectionLabel } from "@/components/ui/section-label";

export function LineagePanel({
  lineage,
}: {
  lineage: OpportunityEvidencePack["opportunity"]["lineage"];
}) {
  return (
    <Panel className="p-4">
      <SectionLabel className="text-[11px]">Lineage</SectionLabel>
      <div className="mt-3 space-y-2 text-sm text-muted">
        {lineage.map((step) => (
          <div
            key={step.id}
            className="rounded-md border border-edge/60 bg-panel px-3 py-2"
          >
            <div className="text-ink">{step.stage}</div>
            <div className="text-xs text-muted">
              Input: {step.input} Output: {step.output}
            </div>
            <div className="text-xs text-muted">Rule: {step.rule}</div>
          </div>
        ))}
      </div>
    </Panel>
  );
}
