"use client";

import { useState } from "react";
import type { OpportunityEvidencePack } from "@/data/evidence";
import { Button } from "@/components/ui/button";
import { Panel } from "@/components/ui/panel";
import { SectionLabel } from "@/components/ui/section-label";
import { AuditRawDataTable } from "./audit-raw-data-table";
import { LineagePanel } from "./lineage-panel";

export function OpportunityAuditSection({
  sources,
  lineage,
  raw,
  onDownloadOpportunity,
  onDownloadLineage,
}: {
  sources: OpportunityEvidencePack["opportunity"]["sources"];
  lineage: OpportunityEvidencePack["opportunity"]["lineage"];
  raw: OpportunityEvidencePack["opportunity"]["raw"];
  onDownloadOpportunity: () => void;
  onDownloadLineage: () => void;
}) {
  const [showOpportunity, setShowOpportunity] = useState(false);
  const [showLineage, setShowLineage] = useState(false);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <SectionLabel className="text-xs">
          Opportunity-specific data
        </SectionLabel>
        <Button
          type="button"
          variant="pill"
          className="w-fit"
          onClick={() => setShowOpportunity((prev) => !prev)}
        >
          {showOpportunity ? "Hide opportunity data" : "Show opportunity data"}
        </Button>
      </div>

      {showOpportunity && (
        <div className="mt-4 space-y-4">
          <div className="grid gap-3 md:grid-cols-2">
            {sources.map((source) => (
              <Panel key={source.id} className="p-4 text-sm">
                <div className="text-ink">{source.domain}</div>
                <div className="mt-1 text-muted">
                  {source.signal} {source.metric}
                </div>
                <div className="mt-2 text-xs text-muted">
                  {source.window} {source.coverage}
                </div>
                <div className="mt-2 text-xs text-ink">
                  Provider: {source.provider}
                </div>
              </Panel>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              type="button"
              variant="pill"
              className="w-fit"
              onClick={() => setShowLineage((prev) => !prev)}
            >
              {showLineage ? "Hide lineage" : "Show lineage"}
            </Button>
            <Button
              type="button"
              variant="pill"
              className="w-fit"
              onClick={onDownloadOpportunity}
            >
              Download opportunity dataset
            </Button>
            <Button
              type="button"
              variant="pill"
              className="w-fit"
              onClick={onDownloadLineage}
            >
              Download lineage report
            </Button>
          </div>

          {showLineage && <LineagePanel lineage={lineage} />}

          <AuditRawDataTable rows={raw} />
        </div>
      )}
    </div>
  );
}
