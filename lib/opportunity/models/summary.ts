import type { OpportunityLike } from "../types";

export const buildPlayOutNarrative = (opportunity: OpportunityLike) => {
  const name = opportunity.name.toLowerCase();
  const isApi = name.includes("api");
  const isProgram =
    name.includes("program") ||
    name.includes("verification") ||
    name.includes("quality");
  const isService =
    name.includes("managed") ||
    name.includes("service") ||
    name.includes("sla");
  const isModule =
    name.includes("add-on") ||
    name.includes("module") ||
    name.includes("subscription") ||
    name.includes("tier");

  const opener = isApi
    ? "Nielsen would ship this as a product API with clear contracts, onboarding, and operational monitoring so teams can use the signal in day-to-day buying and reporting."
    : isProgram
      ? "Nielsen would stand up this as a repeatable program: publish a rubric, bake checks into reporting, and produce governance artifacts that procurement and legal can reuse."
      : isService
        ? "Nielsen would operationalize this as a service: playbooks, a delivery cadence, and stakeholder-ready readouts when timelines are tight and scrutiny is high."
        : isModule
          ? "Nielsen would package this as a sellable module inside Nielsen ONE with standard definitions, an implementation checklist, and a clean handoff from sales to delivery."
          : "Nielsen would turn this into a repeatable offer with standard inputs, clear deliverables, and a workflow that can be delivered consistently across accounts.";

  const kinds = new Set(opportunity.model.lines.map((line) => line.kind));
  const motions: string[] = [];
  if (kinds.has("units"))
    motions.push("use it to unblock new deals and competitive renewals");
  if (kinds.has("attach"))
    motions.push("make it easy to attach at renewal as a standard add-on");
  if (kinds.has("price"))
    motions.push("position it as a premium tier with clear deliverables");
  if (kinds.has("arppu"))
    motions.push(
      "create a usage-based expansion path through reporting and services",
    );

  const commercial =
    motions.length > 0
      ? `Commercially, Nielsen would ${motions.join(", ")}.`
      : "";

  const closer =
    "In practice that means aligning agencies and publishers on definitions, wiring the required data feeds, running QA and reconciliation, and shipping an audit-ready output with an escalation path when results are challenged.";

  return [commercial ? `${opener} ${commercial}` : opener, closer];
};

export const decapitalizeLead = (text: string) => {
  // Lowercase the first letter only when it's a normal capitalized word
  // (keep acronyms like "CTV", "RMN", "API" intact).
  const match = text.match(/^(\s*["“'(\[]?)([A-Z])([a-z])/);
  if (!match) return text;
  return `${match[1]}${match[2].toLowerCase()}${match[3]}${text.slice(match[0].length)}`;
};
