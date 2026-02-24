"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Opportunity, Signal, CombinedOpportunity } from "@/data/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DataTable, DataTableFooter, DataTableHeader, DataTableRow } from "@/components/ui/data-table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { cn } from "@/lib/shared";

const formatRange = (range: readonly [number, number], suffix: string) => {
  const [low, high] = range;
  const sign = (value: number) => `${value < 0 ? "-" : "+"}${Math.abs(value)}`;
  return `${sign(low)}${suffix} to ${sign(high)}${suffix}`;
};

const certaintyLabel = (value: Opportunity["confidence"]) => {
  if (value === "High") return "High certainty";
  if (value === "Medium") return "Medium certainty";
  if (value === "Low") return "Low certainty";
  return `${value} certainty`;
};

const toPairKey = (leftId: string, rightId: string) => {
  return [leftId, rightId].sort().join("--");
};

export function OpportunityTable({
  opportunities,
  allSignals,
  allCombinedOpportunities,
  currentSignalId
}: {
  opportunities: Opportunity[];
  allSignals: Signal[];
  allCombinedOpportunities: CombinedOpportunity[];
  currentSignalId: string;
}) {
  const [selectedSignalId, setSelectedSignalId] = useState<string>("");
  const currentSignal = allSignals.find((signal) => signal.id === currentSignalId);
  const curatedPairs = useMemo(
    () =>
      new Set(
        allCombinedOpportunities.map((item) =>
          toPairKey(item.signalIds[0], item.signalIds[1]),
        ),
      ),
    [allCombinedOpportunities],
  );

  const canCombine = (left: Signal, right: Signal) => {
    if (left.id === right.id) return false;
    return curatedPairs.has(toPairKey(left.id, right.id));
  };

  const combined = useMemo(() => {
    if (!selectedSignalId) return [];
    return allCombinedOpportunities.filter((item) => {
      const [first, second] = item.signalIds;
      return (
        (first === currentSignalId && second === selectedSignalId) ||
        (second === currentSignalId && first === selectedSignalId)
      );
    });
  }, [selectedSignalId, allCombinedOpportunities, currentSignalId]);

  const combinedMode = Boolean(selectedSignalId && combined.length > 0);

  return (
    <DataTable className="overflow-hidden bg-panel">
      <DataTableHeader className="grid-cols-3 bg-sand/60 py-3">
        <div>Revenue opportunity</div>
        <div>Revenue upside</div>
        <div>Certainty</div>
      </DataTableHeader>
      {combinedMode
        ? combined.map((opportunity) => (
            <DataTableRow
              key={opportunity.id}
              as={Link}
              href={`/market-audit/${currentSignalId}/opportunity/${opportunity.id}`}
              className={cn(
                "grid-cols-3 py-3 transition-colors hover:bg-sand/50",
              )}
            >
              <div>
                <div className="font-medium text-ink">{opportunity.name}</div>
                <div className="mt-1 text-xs text-muted">{opportunity.summary}</div>
              </div>
              <div className="text-ink">{formatRange(opportunity.revenueDelta, "M")}</div>
              <div>
                <Badge tone="muted">{certaintyLabel(opportunity.confidence)}</Badge>
              </div>
            </DataTableRow>
          ))
        : opportunities.map((opportunity) => (
            <DataTableRow
              key={opportunity.id}
              as={Link}
              href={`/market-audit/${currentSignalId}/opportunity/${opportunity.id}`}
              className={cn(
                "grid-cols-3 py-3 transition-colors hover:bg-sand/50",
              )}
            >
              <div>
                <div className="font-medium text-ink">{opportunity.name}</div>
                <div className="mt-1 text-xs text-muted">
                  Possible move: {opportunity.summary}
                </div>
              </div>
              <div className="text-ink">{formatRange(opportunity.revenueDelta, "M")}</div>
              <div>
                <Badge tone="muted">{certaintyLabel(opportunity.confidence)}</Badge>
              </div>
            </DataTableRow>
          ))}
      <DataTableFooter className="bg-sand/40 py-3">
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
          <span className="text-[11px] font-medium tracking-[0.08em] text-muted">
            Combine with
          </span>
          <Select value={selectedSignalId} onValueChange={setSelectedSignalId}>
            <SelectTrigger className="min-w-[260px]">
              <SelectValue placeholder="Select another market audit signal" />
            </SelectTrigger>
          <SelectContent>
            {allSignals
              .filter((signal) => signal.id !== currentSignalId)
              .filter((signal) =>
                currentSignal ? canCombine(currentSignal, signal) : false,
              )
              .map((signal) => (
                <SelectItem key={signal.id} value={signal.id}>
                  {signal.title}
                </SelectItem>
              ))}
          </SelectContent>
          </Select>
          {selectedSignalId && (
            <Button
              type="button"
              variant="ghost"
              size="xs"
              className="hover:bg-panel"
              onClick={() => setSelectedSignalId("")}
            >
              Clear
            </Button>
          )}
        </div>
      </DataTableFooter>
    </DataTable>
  );
}
