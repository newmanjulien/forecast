"use client";

import { useState } from "react";
import type { CombinedOpportunity, Opportunity, Signal } from "@/data/types";
import type { OpportunityEvidencePack } from "@/data/evidence";
import { downloadFile, toCsv } from "@/lib/data-export";
import { Button } from "@/components/ui/button";
import { Panel } from "@/components/ui/panel";
import { Separator } from "@/components/ui/separator";
import { OpportunityDriversPanel } from "./audit/opportunity-drivers-panel";
import { SharedAuditSection } from "./audit/shared-audit-section";
import { OpportunityAuditSection } from "./audit/opportunity-audit-section";

export function OpportunityAudit({
  signal,
  opportunity,
  evidence,
}: {
  signal: Signal;
  opportunity: Opportunity | CombinedOpportunity;
  evidence: OpportunityEvidencePack;
}) {
  const [showData, setShowData] = useState(false);

  const downloadShared = () => {
    const csv = toCsv(
      evidence.shared.raw.map((row) => ({
        date: row.date,
        region: row.region,
        source: row.source,
        metric: row.metric,
        value: row.value,
      })),
    );
    downloadFile(csv, `${signal.id}-shared-data.csv`, "text/csv");
  };

  const downloadOpportunity = () => {
    const csv = toCsv(
      evidence.opportunity.raw.map((row) => ({
        date: row.date,
        region: row.region,
        source: row.source,
        metric: row.metric,
        value: row.value,
      })),
    );
    downloadFile(csv, `${opportunity.id}-opportunity-data.csv`, "text/csv");
  };

  const downloadLineage = () => {
    const report = JSON.stringify(
      {
        signal: {
          id: signal.id,
          title: signal.title,
        },
        opportunity: {
          id: opportunity.id,
          name: opportunity.name,
        },
        drivers: evidence.drivers,
        sharedSources: evidence.shared.sources,
        opportunitySources: evidence.opportunity.sources,
        lineage: evidence.opportunity.lineage,
      },
      null,
      2,
    );
    downloadFile(report, `${opportunity.id}-lineage.json`, "application/json");
  };

  return (
    <Panel className="p-6">
      <div className="flex flex-col gap-3">
        <div className="text-sm text-ink">Audit this opportunity</div>
        <p className="text-sm text-muted">
          Opportunity data differs from shared market audit signals. Expand each
          layer to see the sources, inputs, and transformations used.
        </p>
        <Button
          type="button"
          variant="pill"
          className="w-fit"
          onClick={() => setShowData((prev) => !prev)}
        >
          {showData ? "Hide audit data" : "Show audit data"}
        </Button>
      </div>

      {showData && (
        <div className="mt-6 space-y-6">
          <OpportunityDriversPanel drivers={evidence.drivers} />

          <Separator />

          <SharedAuditSection
            sources={evidence.shared.sources}
            onDownload={downloadShared}
          />

          <Separator />

          <OpportunityAuditSection
            sources={evidence.opportunity.sources}
            lineage={evidence.opportunity.lineage}
            raw={evidence.opportunity.raw}
            onDownloadOpportunity={downloadOpportunity}
            onDownloadLineage={downloadLineage}
          />
        </div>
      )}
    </Panel>
  );
}
