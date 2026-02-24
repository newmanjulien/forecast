import type { ReactNode } from "react";
import type { ComputedLine } from "@/lib/opportunity/types";
import { formatSignedValue } from "@/lib/opportunity/formatters";
import { DataTable, DataTableFooter, DataTableHeader, DataTableRow } from "@/components/ui/data-table";
import { Panel } from "@/components/ui/panel";
import { SectionLabel } from "@/components/ui/section-label";

export function OpportunityBottomUpTable({
  computedLines,
  renderInputs,
  totalLow,
  totalHigh,
  modelHintContent,
}: {
  computedLines: ComputedLine[];
  renderInputs: (index: number) => ReactNode;
  totalLow: number;
  totalHigh: number;
  modelHintContent: ReactNode;
}) {
  return (
    <Panel className="mt-6 p-4">
      <SectionLabel className="text-[11px]">
        Bottom-up revenue model
      </SectionLabel>
      <DataTable className="mt-4 overflow-auto">
        <DataTableHeader className="grid-cols-6 bg-panel">
          <div>Line item</div>
          <div>Formula</div>
          <div>Inputs</div>
          <div>Low</div>
          <div>High</div>
          <div>Key assumption</div>
        </DataTableHeader>
        {computedLines.map((line, index) => (
          <DataTableRow key={line.label} className="grid-cols-6">
            <div className="text-ink">{line.label}</div>
            <div className="text-muted">{line.formula}</div>
            <div className="text-muted">{renderInputs(index)}</div>
            <div className="text-ink">{formatSignedValue(line.low, "M")}</div>
            <div className="text-ink">{formatSignedValue(line.high, "M")}</div>
            <div className="text-muted">{line.assumption}</div>
          </DataTableRow>
        ))}
        <DataTableFooter className="grid-cols-6 bg-panel">
          <div className="text-ink">Total incremental</div>
          <div className="text-muted">-</div>
          <div className="text-muted">-</div>
          <div className="text-ink">{formatSignedValue(totalLow, "M")}</div>
          <div className="text-ink">{formatSignedValue(totalHigh, "M")}</div>
          <div className="text-muted">Matches opportunity range</div>
        </DataTableFooter>
      </DataTable>
      <div className="mt-3 text-xs text-muted">{modelHintContent}</div>
    </Panel>
  );
}
