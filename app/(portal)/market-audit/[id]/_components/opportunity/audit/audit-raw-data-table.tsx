"use client";

import type { OpportunityEvidencePack } from "@/data/evidence";
import { DataTable, DataTableHeader, DataTableRow } from "@/components/ui/data-table";

export function AuditRawDataTable({
  rows,
}: {
  rows: OpportunityEvidencePack["opportunity"]["raw"];
}) {
  return (
    <DataTable className="max-h-[380px] overflow-auto">
      <DataTableHeader className="grid-cols-5 bg-panel">
        <div>Date</div>
        <div>Region</div>
        <div>Source</div>
        <div>Metric</div>
        <div>Value</div>
      </DataTableHeader>
      {rows.map((row) => (
        <DataTableRow key={row.id} className="grid-cols-5">
          <div className="text-ink">{row.date}</div>
          <div className="text-ink">{row.region}</div>
          <div className="text-ink">{row.source}</div>
          <div className="text-ink">{row.metric}</div>
          <div className="text-ink">{row.value}</div>
        </DataTableRow>
      ))}
    </DataTable>
  );
}
