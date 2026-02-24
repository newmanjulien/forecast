"use client";

import { Panel } from "@/components/ui/panel";
import type { InternalAuditQuadrantChart as InternalAuditQuadrantChartType, InternalAuditReport } from "@/data/types";
import { InternalAuditQuadrantChart } from "@/components/internal-audit-quadrant-chart";
import { InternalAuditAreaChart } from "@/components/internal-audit-area-chart";

export function InternalAuditReportPreview({
  report,
  quadrant,
}: {
  report: InternalAuditReport;
  quadrant?: InternalAuditQuadrantChartType;
}) {
  return (
    <Panel className="mt-4 p-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-ink">{report.title}</h3>
          <p className="mt-1 text-sm text-muted/80">{report.subtitle}</p>
        </div>
      </div>

      <InternalAuditAreaChart report={report} />

      {quadrant && <InternalAuditQuadrantChart chart={quadrant} />}
    </Panel>
  );
}
