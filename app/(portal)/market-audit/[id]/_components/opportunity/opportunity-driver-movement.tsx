import type { ReactNode } from "react";
import type { DriverDisplayRow, DriverKey } from "@/lib/opportunity/types";
import { DataTable, DataTableHeader, DataTableRow } from "@/components/ui/data-table";
import { InlineEditableNumber } from "@/components/inline-editable-number";
import { Panel } from "@/components/ui/panel";
import { SectionLabel } from "@/components/ui/section-label";

export function OpportunityDriverMovement({
  drivers,
  onBaselineCommit,
  onOpportunityCommit,
  modelHintContent,
  mutedButtonClass,
}: {
  drivers: DriverDisplayRow[];
  onBaselineCommit: (key: DriverKey, value: number) => void;
  onOpportunityCommit: (key: DriverKey, value: number, baselineValue: number) => void;
  modelHintContent: ReactNode;
  mutedButtonClass: string;
}) {
  return (
    <Panel className="mt-6 p-4">
      <SectionLabel className="text-[11px]">
        Driver movement
      </SectionLabel>
      <DataTable className="mt-3 overflow-hidden">
        <DataTableHeader className="grid-cols-5 bg-panel">
          <div>Driver</div>
          <div>Baseline</div>
          <div>Opportunity</div>
          <div>Delta</div>
          <div>Confidence</div>
        </DataTableHeader>
        {drivers.map((driver) => (
          <DataTableRow key={driver.key} className="grid-cols-5">
            <div className="text-ink">{driver.driver}</div>
            <div className="text-muted">
              <InlineEditableNumber
                value={driver.baselineEditValue}
                display={driver.baseline}
                unitLabel={driver.unitLabel}
                displayClassName={mutedButtonClass}
                onCommit={(next) => onBaselineCommit(driver.key, next)}
              />
            </div>
            <div className="text-muted">
              <InlineEditableNumber
                value={driver.opportunityEditValue}
                display={driver.opportunity}
                unitLabel={driver.unitLabel}
                displayClassName={mutedButtonClass}
                onCommit={(next) =>
                  onOpportunityCommit(driver.key, next, driver.baselineValue)
                }
              />
            </div>
            <div className="text-ink">{driver.delta}</div>
            <div className="text-muted">{driver.confidence}</div>
          </DataTableRow>
        ))}
      </DataTable>
      <div className="mt-3 text-xs text-muted">{modelHintContent}</div>
    </Panel>
  );
}
