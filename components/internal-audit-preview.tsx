"use client";

import Image from "next/image";
import { useId, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Panel } from "@/components/ui/panel";
import type { InternalAuditQuadrantChart, InternalAuditReport, InternalAuditSignal } from "@/data/types";
import { InternalAuditReportPreview } from "@/components/internal-audit-report-preview";

export function InternalAuditPreview({
  signals,
  children,
  showLabel,
  hideLabel,
  variant = "signals",
  report,
  reportQuadrant,
}: {
  signals?: InternalAuditSignal[];
  children: ReactNode;
  showLabel: string;
  hideLabel: string;
  variant?: "signals" | "reports";
  report?: InternalAuditReport;
  reportQuadrant?: InternalAuditQuadrantChart;
}) {
  const [showExamples, setShowExamples] = useState(true);
  const listId = useId();

  return (
    <Panel as="section" className="p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="max-w-2xl">
          {children}
        </div>
        <Button
          type="button"
          size="sm"
          variant="ghost"
          className="justify-center px-3"
          aria-expanded={showExamples}
          aria-controls={listId}
          onClick={() => setShowExamples((prev) => !prev)}
        >
          {showExamples ? hideLabel : showLabel}
        </Button>
      </div>

      {showExamples && variant === "signals" && (signals ?? []).length > 0 && (
        <Panel
          id={listId}
          className="mt-4 flex flex-col divide-y divide-edge/60 overflow-hidden rounded-2xl"
        >
          {(signals ?? []).map((signal) => (
            <div
              key={signal.id}
              className="group w-full cursor-default px-6 py-5 transition-colors hover:bg-sand/45"
            >
              <h3 className="text-[15px] font-semibold text-ink md:text-base">
                {signal.title}
              </h3>
              <p className="mt-2 text-sm text-muted/80">{signal.summary}</p>
              <div className="mt-3 flex items-center gap-2 text-xs text-muted/70">
                <div className="flex items-center -space-x-1.5">
                  {signal.sources.map((source) => (
                    <div
                      key={source.name}
                      className="h-6 w-6 overflow-hidden rounded-full border border-edge/60 bg-sand/30"
                    >
                      <Image
                        src={source.logo}
                        alt={`${source.name} logo`}
                        width={24}
                        height={24}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <span>
                  Sources:{" "}
                  {signal.sources.map((source) => source.name).join(" & ")}
                </span>
                <span className="text-muted/50">•</span>
                <span>Sample signal</span>
              </div>
            </div>
          ))}
        </Panel>
      )}

      {showExamples && variant === "reports" && report && (
        <div id={listId}>
          <InternalAuditReportPreview report={report} quadrant={reportQuadrant} />
        </div>
      )}
    </Panel>
  );
}
