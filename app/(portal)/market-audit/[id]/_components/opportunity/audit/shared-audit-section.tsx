"use client";

import { useState } from "react";
import type { OpportunityEvidencePack } from "@/data/evidence";
import { Button } from "@/components/ui/button";
import { Panel } from "@/components/ui/panel";
import { SectionLabel } from "@/components/ui/section-label";

export function SharedAuditSection({
  sources,
  onDownload,
}: {
  sources: OpportunityEvidencePack["shared"]["sources"];
  onDownload: () => void;
}) {
  const [showShared, setShowShared] = useState(false);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <SectionLabel className="text-xs">Shared market audit data</SectionLabel>
        <Button
          type="button"
          variant="pill"
          className="w-fit"
          onClick={() => setShowShared((prev) => !prev)}
        >
          {showShared ? "Hide shared data" : "Show shared data"}
        </Button>
      </div>

      {showShared && (
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

          <button
            onClick={onDownload}
            className="w-fit rounded-md border border-edge/70 bg-panel px-4 py-2 text-xs font-medium tracking-[0.06em] text-ink"
          >
            Download shared dataset
          </button>
        </div>
      )}
    </div>
  );
}
