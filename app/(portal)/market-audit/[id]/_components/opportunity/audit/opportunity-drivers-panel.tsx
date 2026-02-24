"use client";

import type { OpportunityEvidencePack } from "@/data/evidence";
import { Panel } from "@/components/ui/panel";
import { SectionLabel } from "@/components/ui/section-label";

export function OpportunityDriversPanel({
  drivers,
}: {
  drivers: OpportunityEvidencePack["drivers"];
}) {
  return (
    <Panel className="p-4">
      <SectionLabel className="text-[11px]">Opportunity drivers</SectionLabel>
      <div className="mt-3 grid gap-3 md:grid-cols-2">
        {drivers.map((driver) => (
          <div
            key={driver.id}
            className="rounded-md border border-edge/60 bg-panel px-3 py-2"
          >
            <div className="text-sm text-ink">{driver.factor}</div>
            <div className="text-xs text-muted">
              Direction: {driver.direction} Weight: {driver.weight}
            </div>
            <div className="text-xs text-muted">{driver.note}</div>
          </div>
        ))}
      </div>
    </Panel>
  );
}
