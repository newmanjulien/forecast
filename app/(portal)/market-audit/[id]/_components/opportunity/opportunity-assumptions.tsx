import { Panel } from "@/components/ui/panel";
import { SectionLabel } from "@/components/ui/section-label";

export function OpportunityAssumptions({
  assumptions,
}: {
  assumptions: string[];
}) {
  return (
    <Panel className="mt-6 p-4">
      <SectionLabel className="text-[11px]">
        Assumptions
      </SectionLabel>
      <ul className="mt-3 space-y-2 text-sm text-ink">
        {assumptions.map((assumption) => (
          <li key={assumption}>- {assumption}</li>
        ))}
      </ul>
    </Panel>
  );
}
