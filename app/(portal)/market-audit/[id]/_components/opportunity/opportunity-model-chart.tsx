"use client";

import { useLayoutEffect, useRef } from "react";
import type { SourceEntry } from "@/lib/opportunity/types";
import { formatRange } from "@/lib/opportunity/formatters";
import { Panel } from "@/components/ui/panel";

const lineTypeClassNames: Record<SourceEntry["key"], string> = {
  units: "bg-chart-units",
  price: "bg-chart-price",
  attach: "bg-chart-attach",
  arppu: "bg-chart-arppu",
};

export function OpportunityModelChart({
  totalLow,
  totalHigh,
  sourceEntries,
  positiveEntries,
  negativeEntries,
  positiveTotal,
  negativeRange,
}: {
  totalLow: number;
  totalHigh: number;
  sourceEntries: SourceEntry[];
  positiveEntries: SourceEntry[];
  negativeEntries: SourceEntry[];
  positiveTotal: number;
  negativeRange: { low: number; high: number };
}) {
  const barRefs = useRef(new Map<SourceEntry["key"], HTMLDivElement>());

  useLayoutEffect(() => {
    positiveEntries.forEach((entry) => {
      const bar = barRefs.current.get(entry.key);
      if (!bar) return;
      const pct = positiveTotal > 0 ? (entry.mid / positiveTotal) * 100 : 0;
      bar.style.width = `${pct}%`;
    });
  }, [positiveEntries, positiveTotal]);

  return (
    <Panel className="mt-6 p-4">
      <div className="flex flex-wrap items-center gap-3">
        <div className="text-sm text-ink">Total incremental</div>
        <div className="rounded-md border border-edge/70 bg-panel px-3 py-1 text-xs text-ink">
          {formatRange([totalLow, totalHigh], "M", 1)}
        </div>
      </div>
      <div className="mt-4 overflow-x-auto">
        {positiveEntries.length === 0 ? (
          <div className="rounded-md border border-edge/70 bg-panel px-4 py-6 text-sm text-muted">
            No model lines to chart.
          </div>
        ) : (
          <div className="min-w-[520px]">
            <div className="flex h-4 overflow-hidden rounded-full border border-edge/70 bg-panel">
              {positiveEntries.map((entry) => {
                return (
                  <div
                    key={entry.key}
                    ref={(node) => {
                      if (node) {
                        barRefs.current.set(entry.key, node);
                      } else {
                        barRefs.current.delete(entry.key);
                      }
                    }}
                    className={`h-full flex-shrink-0 opacity-65 ${lineTypeClassNames[entry.key]}`}
                  />
                );
              })}
            </div>
            <div className="mt-4 grid gap-2 md:grid-cols-2">
              {sourceEntries.map((entry) => {
                const pct =
                  positiveTotal > 0 && entry.mid > 0
                    ? Math.round((entry.mid / positiveTotal) * 100)
                    : null;
                return (
                  <div
                    key={entry.key}
                    className="flex items-center justify-between gap-3 rounded-md border border-edge/70 bg-panel px-3 py-2 text-sm"
                  >
                    <div className="flex items-center gap-2 text-ink">
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${lineTypeClassNames[entry.key]}`}
                      />
                      <span>{entry.label}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted">
                      <span>{formatRange([entry.low, entry.high], "M", 1)}</span>
                      {pct !== null ? (
                        <span className="rounded-md border border-edge/70 bg-panel px-2 py-0.5 text-[10px] font-medium tracking-[0.08em] text-ink">
                          {pct}%
                        </span>
                      ) : (
                        <span className="text-[10px] font-medium tracking-[0.06em] text-muted">
                          Headwind
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            {negativeEntries.length > 0 &&
              Math.max(Math.abs(negativeRange.low), Math.abs(negativeRange.high)) >
                1e-6 && (
                <div className="mt-3 text-xs text-muted">
                  Headwinds of {formatRange([negativeRange.low, negativeRange.high], "M", 1)} reduce
                  the net total.
                </div>
              )}
          </div>
        )}
      </div>
    </Panel>
  );
}
