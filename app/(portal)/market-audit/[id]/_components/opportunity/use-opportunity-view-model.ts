"use client";

import { useEffect, useMemo, useState } from "react";
import type { CombinedOpportunity, Opportunity } from "@/data/types";
import {
  buildComputedLines,
  buildDefaultLineMeta,
} from "@/lib/opportunity/models/bottom-up";
import { buildDriverDeltas, buildDriverState, toInternalDriverValue } from "@/lib/opportunity/models/drivers";
import { buildSourceEntries } from "@/lib/opportunity/models/chart";
import { buildPlayOutNarrative, decapitalizeLead } from "@/lib/opportunity/models/summary";
import type { DriverKey } from "@/lib/opportunity/types";

export type OpportunityViewModel = {
  contextSummary: string;
  narrative: string[];
  isDirty: boolean;
  defaultLineMeta: ReturnType<typeof buildDefaultLineMeta>;
  computedLines: ReturnType<typeof buildComputedLines>;
  driverDeltas: ReturnType<typeof buildDriverDeltas>;
  drivers: ReturnType<typeof buildDriverState>["drivers"];
  totalLow: number;
  totalHigh: number;
  sourceEntries: ReturnType<typeof buildSourceEntries>["sourceEntries"];
  positiveEntries: ReturnType<typeof buildSourceEntries>["positiveEntries"];
  negativeEntries: ReturnType<typeof buildSourceEntries>["negativeEntries"];
  positiveTotal: number;
  negativeRange: ReturnType<typeof buildSourceEntries>["negativeRange"];
  baselineInputs: Opportunity["model"]["inputs"];
  lineValues: number[];
  resetModel: () => void;
  updateBaselineValue: (
    key: keyof Opportunity["model"]["inputs"],
    value: number,
  ) => void;
  updateLineValue: (index: number, value: number) => void;
  handleBaselineCommit: (key: DriverKey, next: number) => void;
  handleOpportunityCommit: (
    key: DriverKey,
    next: number,
    baselineValue: number,
  ) => void;
};

export function useOpportunityViewModel({
  opportunity,
}: {
  opportunity: Opportunity | CombinedOpportunity;
}): OpportunityViewModel {
  const model = opportunity.model;
  const {
    baseUnits,
    baseNetPrice,
    baseAttachRate,
    baseDlcPrice,
    baseArppu,
    activeRate,
  } = opportunity.model.inputs;

  const defaultInputs = useMemo(
    () => ({
      baseUnits,
      baseNetPrice,
      baseAttachRate,
      baseDlcPrice,
      baseArppu,
      activeRate,
    }),
    [
      baseUnits,
      baseNetPrice,
      baseAttachRate,
      baseDlcPrice,
      baseArppu,
      activeRate,
    ],
  );
  const [baselineInputs, setBaselineInputs] = useState(defaultInputs);

  useEffect(() => {
    setBaselineInputs(defaultInputs);
  }, [defaultInputs]);

  const defaultLineMeta = useMemo(
    () => buildDefaultLineMeta(model.lines, defaultInputs),
    [model.lines, defaultInputs],
  );

  const defaultLineValues = useMemo(
    () => defaultLineMeta.map((meta) => meta.value),
    [defaultLineMeta],
  );
  const [lineValues, setLineValues] = useState(defaultLineValues);

  useEffect(() => {
    setLineValues(defaultLineValues);
  }, [defaultLineValues]);

  const resetModel = () => {
    setBaselineInputs(defaultInputs);
    setLineValues(defaultLineValues);
  };

  const updateBaselineValue = (
    key: keyof typeof baselineInputs,
    value: number,
  ) => {
    setBaselineInputs((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const updateLineValue = (index: number, value: number) => {
    setLineValues((prev) =>
      prev.map((current, i) => (i === index ? value : current)),
    );
  };

  const updateBucketDelta = (bucket: DriverKey, targetDelta: number) => {
    setLineValues((prev) => {
      const indices = prev
        .map((_, index) =>
          defaultLineMeta[index]?.type === bucket ? index : -1,
        )
        .filter((index) => index >= 0);
      if (indices.length === 0) return prev;

      const currentSum = indices.reduce((sum, index) => sum + prev[index], 0);
      const next = [...prev];

      if (currentSum !== 0) {
        const scale = targetDelta / currentSum;
        indices.forEach((index) => {
          next[index] = prev[index] * scale;
        });
        return next;
      }

      const defaultSum = indices.reduce(
        (sum, index) => sum + (defaultLineMeta[index]?.value ?? 0),
        0,
      );
      if (defaultSum !== 0) {
        const scale = targetDelta / defaultSum;
        indices.forEach((index) => {
          next[index] = (defaultLineMeta[index]?.value ?? 0) * scale;
        });
        return next;
      }

      next[indices[0]] = targetDelta;
      return next;
    });
  };

  const driverDeltas = useMemo(
    () => buildDriverDeltas(defaultLineMeta, lineValues),
    [lineValues, defaultLineMeta],
  );

  const computedLines = useMemo(
    () =>
      buildComputedLines(model.lines, defaultLineMeta, lineValues, baselineInputs),
    [lineValues, baselineInputs, model.lines, defaultLineMeta],
  );

  const isDirty = useMemo(() => {
    const inputsDirty = Object.keys(defaultInputs).some((key) => {
      const typedKey = key as keyof typeof defaultInputs;
      return Math.abs(defaultInputs[typedKey] - baselineInputs[typedKey]) > 1e-6;
    });
    const linesDirty = lineValues.some(
      (value, index) =>
        Math.abs(value - (defaultLineValues[index] ?? 0)) > 1e-6,
    );
    return inputsDirty || linesDirty;
  }, [baselineInputs, defaultInputs, lineValues, defaultLineValues]);

  const totalLow = computedLines.reduce((acc, line) => acc + line.low, 0);
  const totalHigh = computedLines.reduce((acc, line) => acc + line.high, 0);

  const {
    sourceEntries,
    positiveEntries,
    negativeEntries,
    positiveTotal,
    negativeRange,
  } = useMemo(() => buildSourceEntries(computedLines), [computedLines]);

  const { drivers } = useMemo(
    () => buildDriverState(baselineInputs, driverDeltas, opportunity.confidence),
    [baselineInputs, driverDeltas, opportunity.confidence],
  );

  const contextSummary = useMemo(
    () =>
      decapitalizeLead(
        opportunity.summary.replace(/^Possible move:\s*/i, "").replace(/\.$/, ""),
      ),
    [opportunity.summary],
  );

  const narrative = useMemo(
    () => buildPlayOutNarrative(opportunity),
    [opportunity],
  );

  const handleBaselineCommit = (key: DriverKey, next: number) => {
    const internal = toInternalDriverValue(key, next);
    if (key === "units") updateBaselineValue("baseUnits", internal);
    if (key === "price") updateBaselineValue("baseNetPrice", internal);
    if (key === "attach") updateBaselineValue("baseAttachRate", internal);
    if (key === "arppu") updateBaselineValue("baseArppu", internal);
  };

  const handleOpportunityCommit = (
    key: DriverKey,
    next: number,
    baselineValue: number,
  ) => {
    const internal = toInternalDriverValue(key, next);
    const targetDelta = internal - baselineValue;
    updateBucketDelta(key, targetDelta);
  };

  return {
    contextSummary,
    narrative,
    isDirty,
    defaultLineMeta,
    computedLines,
    driverDeltas,
    drivers,
    totalLow,
    totalHigh,
    sourceEntries,
    positiveEntries,
    negativeEntries,
    positiveTotal,
    negativeRange,
    baselineInputs,
    lineValues,
    resetModel,
    updateBaselineValue,
    updateLineValue,
    handleBaselineCommit,
    handleOpportunityCommit,
  };
}
