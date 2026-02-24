"use client";

import { useId, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Panel } from "@/components/ui/panel";
import type {
  PreviewQuadrantChart as PreviewQuadrantChartType,
  PreviewSignal,
} from "@/data/types";
import { PreviewQuadrantChart } from "./quadrant-chart";
import { PreviewSignals } from "./signals";

export function Preview({
  signals,
  children,
  showLabel,
  hideLabel,
  variant = "signals",
  quadrant,
}: {
  signals?: PreviewSignal[];
  children: ReactNode;
  showLabel: string;
  hideLabel: string;
  variant?: "signals" | "quadrant";
  quadrant?: PreviewQuadrantChartType;
}) {
  const [showExamples, setShowExamples] = useState(true);
  const listId = useId();

  return (
    <Panel as="section" className="p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="max-w-2xl">{children}</div>
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

      {showExamples && variant === "signals" && (
        <PreviewSignals id={listId} signals={signals ?? []} />
      )}

      {showExamples && variant === "quadrant" && (
        <div id={listId}>
          {quadrant && (
            <PreviewQuadrantChart chart={quadrant} className="mt-4" />
          )}
        </div>
      )}
    </Panel>
  );
}
