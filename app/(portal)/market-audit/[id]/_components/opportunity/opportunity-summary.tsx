import type { CombinedOpportunity, Opportunity, Signal } from "@/data/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/section-label";

export function OpportunitySummary({
  signal,
  opportunity,
  contextSummary,
  isDirty,
  onReset,
  narrative,
}: {
  signal: Signal;
  opportunity: Opportunity | CombinedOpportunity;
  contextSummary: string;
  isDirty: boolean;
  onReset: () => void;
  narrative: string[];
}) {
  return (
    <>
      <div className="flex flex-col gap-3">
        <Badge tone="muted" className="w-fit">
          {opportunity.confidence} confidence
        </Badge>
        <h1 className="text-2xl font-medium text-ink">{opportunity.name}</h1>
        {isDirty && (
          <Button
            type="button"
            variant="pill"
            size="xs"
            className="w-fit"
            onClick={onReset}
          >
            Reset to defaults
          </Button>
        )}
      </div>
      <div className="mt-4">
        <SectionLabel className="text-xs">Context</SectionLabel>
        <div className="mt-2 space-y-3 text-sm text-ink">
          <p>{signal.summary}</p>
          <p>
            The opportunity here is to use this shift to drive incremental
            revenue and {contextSummary}. This sets the stage for how the
            opportunity could play out.
          </p>
        </div>
      </div>

      <SectionLabel className="mt-6 text-xs">
        How this could play out
      </SectionLabel>
      <div className="mt-2 space-y-3 text-sm text-ink">
        {narrative.map((paragraph, index) => (
          <p key={`${opportunity.id}-playout-${index}`}>{paragraph}</p>
        ))}
      </div>
    </>
  );
}
