"use client";

import type { CombinedOpportunity, Opportunity, Signal } from "@/data/types";
import { InlineEditableNumber } from "@/components/inline-editable-number";
import { OpportunityAssumptions } from "./opportunity-assumptions";
import { OpportunityBottomUpTable } from "./opportunity-bottom-up-table";
import { OpportunityDriverMovement } from "./opportunity-driver-movement";
import { OpportunityModelChart } from "./opportunity-model-chart";
import { OpportunitySummary } from "./opportunity-summary";
import { Panel } from "@/components/ui/panel";
import { TextLink } from "@/components/ui/text-link";
import {
  formatDeltaArppu,
  formatDeltaPrice,
  formatDeltaPts,
  formatDeltaUnits,
  formatPrice,
  formatUnits,
} from "@/lib/opportunity/formatters";
import type { OpportunityViewModel } from "./use-opportunity-view-model";

export function OpportunityModelPanel({
  signal,
  opportunity,
  viewModel,
}: {
  signal: Signal;
  opportunity: Opportunity | CombinedOpportunity;
  viewModel: OpportunityViewModel;
}) {
  const modelHintContent = viewModel.isDirty ? (
    "Click on reset to defaults button to reset the values you edited"
  ) : (
    <>
      Model inputs are estimates.{" "}
      <TextLink href="/datasources">Add internal datasources</TextLink> to use
      real inputs or tap a value to edit and explore sensitivity
    </>
  );

  const mutedButtonClass =
    "border-0 bg-transparent p-0 text-left text-muted focus:outline-none";

  const renderInputs = (index: number) => {
    const type = viewModel.defaultLineMeta[index]?.type ?? "units";
    const value = viewModel.lineValues[index] ?? 0;
    const baseUnitsValue = viewModel.baselineInputs.baseUnits;
    const baseNetPriceValue = viewModel.baselineInputs.baseNetPrice;
    const baseDlcPriceValue = viewModel.baselineInputs.baseDlcPrice;
    const mau = viewModel.baselineInputs.baseUnits * viewModel.baselineInputs.activeRate;

    if (type === "units") {
      return (
        <span className="text-muted">
          <InlineEditableNumber
            value={Number(value.toFixed(2))}
            display={formatDeltaUnits(value)}
            displayClassName={mutedButtonClass}
            onCommit={(next) => viewModel.updateLineValue(index, next)}
          />
          <span> units x </span>
          <InlineEditableNumber
            value={Number(baseNetPriceValue.toFixed(2))}
            display={formatPrice(baseNetPriceValue)}
            unitLabel="$"
            displayClassName={mutedButtonClass}
            onCommit={(next) => viewModel.updateBaselineValue("baseNetPrice", next)}
          />
          <span> net</span>
        </span>
      );
    }

    if (type === "price") {
      return (
        <span className="text-muted">
          <InlineEditableNumber
            value={Number(value.toFixed(2))}
            display={formatDeltaPrice(value)}
            unitLabel="$"
            displayClassName={mutedButtonClass}
            onCommit={(next) => viewModel.updateLineValue(index, next)}
          />
          <span> net price x </span>
          <InlineEditableNumber
            value={Number(baseUnitsValue.toFixed(2))}
            display={formatUnits(baseUnitsValue)}
            displayClassName={mutedButtonClass}
            onCommit={(next) => viewModel.updateBaselineValue("baseUnits", next)}
          />
          <span> units</span>
        </span>
      );
    }

    if (type === "attach") {
      return (
        <span className="text-muted">
          <InlineEditableNumber
            value={Number((value * 100).toFixed(1))}
            display={formatDeltaPts(value)}
            unitLabel="pts"
            displayClassName={mutedButtonClass}
            onCommit={(next) => viewModel.updateLineValue(index, next / 100)}
          />
          <span> x </span>
          <InlineEditableNumber
            value={Number(baseDlcPriceValue.toFixed(2))}
            display={formatPrice(baseDlcPriceValue)}
            unitLabel="$"
            displayClassName={mutedButtonClass}
            onCommit={(next) => viewModel.updateBaselineValue("baseDlcPrice", next)}
          />
          <span> x </span>
          <InlineEditableNumber
            value={Number(baseUnitsValue.toFixed(2))}
            display={formatUnits(baseUnitsValue)}
            displayClassName={mutedButtonClass}
            onCommit={(next) => viewModel.updateBaselineValue("baseUnits", next)}
          />
          <span> units</span>
        </span>
      );
    }

    return (
      <span className="text-muted">
        <InlineEditableNumber
          value={Number(value.toFixed(2))}
          display={formatDeltaArppu(value)}
          unitLabel="$"
          displayClassName={mutedButtonClass}
          onCommit={(next) => viewModel.updateLineValue(index, next)}
        />
        <span> ARPPU x </span>
        <InlineEditableNumber
          value={Number(mau.toFixed(2))}
          display={formatUnits(mau)}
          displayClassName={mutedButtonClass}
          onCommit={(next) =>
            viewModel.updateBaselineValue(
              "activeRate",
              baseUnitsValue > 0 ? next / baseUnitsValue : 0,
            )
          }
        />
        <span> MAU</span>
      </span>
    );
  };

  return (
    <Panel className="p-8 shadow-soft">
      <OpportunitySummary
        signal={signal}
        opportunity={opportunity}
        contextSummary={viewModel.contextSummary}
        isDirty={viewModel.isDirty}
        onReset={viewModel.resetModel}
        narrative={viewModel.narrative}
      />
      <OpportunityModelChart
        totalLow={viewModel.totalLow}
        totalHigh={viewModel.totalHigh}
        sourceEntries={viewModel.sourceEntries}
        positiveEntries={viewModel.positiveEntries}
        negativeEntries={viewModel.negativeEntries}
        positiveTotal={viewModel.positiveTotal}
        negativeRange={viewModel.negativeRange}
      />
      <OpportunityBottomUpTable
        computedLines={viewModel.computedLines}
        renderInputs={renderInputs}
        totalLow={viewModel.totalLow}
        totalHigh={viewModel.totalHigh}
        modelHintContent={modelHintContent}
      />
      <OpportunityDriverMovement
        drivers={viewModel.drivers}
        onBaselineCommit={viewModel.handleBaselineCommit}
        onOpportunityCommit={viewModel.handleOpportunityCommit}
        modelHintContent={modelHintContent}
        mutedButtonClass={mutedButtonClass}
      />
      <OpportunityAssumptions assumptions={opportunity.assumptions} />
    </Panel>
  );
}
