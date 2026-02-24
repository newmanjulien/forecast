import { combinedOpportunities } from "@/data/combined-opportunities";
import { opportunities } from "@/data/opportunities";
import { signals } from "@/data/market-audit";
import {
  buildCombinedOpportunityEvidence,
  buildOpportunityEvidence,
  type OpportunityEvidencePack,
} from "@/data/evidence";
import type { CombinedOpportunity, Opportunity, Signal } from "@/data/types";

export const getMarketAuditSignals = () => signals;

export const getSignalById = (id: string): Signal | undefined =>
  signals.find((item) => item.id === id);

export const getOpportunitiesBySignalId = (signalId: string) =>
  opportunities.filter((opportunity) => opportunity.signalId === signalId);

export const getOpportunityById = (
  signalId: string,
  opportunityId: string,
): { signal: Signal; opportunity: Opportunity } | null => {
  const signal = getSignalById(signalId);
  const opportunity = opportunities.find((item) => item.id === opportunityId);
  if (!signal || !opportunity || opportunity.signalId !== signal.id) return null;
  return { signal, opportunity };
};

export const getCombinedOpportunityById = (
  signalId: string,
  combinedId: string,
): { signal: Signal; combinedOpportunity: CombinedOpportunity } | null => {
  const combinedOpportunity = combinedOpportunities.find(
    (item) => item.id === combinedId,
  );
  if (
    !combinedOpportunity ||
    !combinedOpportunity.signalIds.some((id) => id === signalId)
  ) {
    return null;
  }
  return {
    signal: combinedOpportunity.combinedSignal,
    combinedOpportunity,
  };
};

export type OpportunityDetail = {
  kind: "single" | "combined";
  signal: Signal;
  opportunity: Opportunity | CombinedOpportunity;
  evidence: OpportunityEvidencePack;
};

export const getOpportunityDetailById = (
  signalId: string,
  opportunityId: string,
): OpportunityDetail | null => {
  const combined = getCombinedOpportunityById(signalId, opportunityId);
  const single = getOpportunityById(signalId, opportunityId);

  if (combined && single) {
    console.warn(
      `Opportunity id collision detected for ${opportunityId}. Favoring combined opportunity.`,
    );
  }

  if (combined) {
    const { combinedOpportunity, signal } = combined;
    return {
      kind: "combined",
      signal,
      opportunity: combinedOpportunity,
      evidence: buildCombinedOpportunityEvidence(
        combinedOpportunity.combinedSignal,
        combinedOpportunity,
      ),
    };
  }

  if (single) {
    const { signal, opportunity } = single;
    return {
      kind: "single",
      signal,
      opportunity,
      evidence: buildOpportunityEvidence(signal, opportunity),
    };
  }

  return null;
};

export const getAllCombinedOpportunities = () => combinedOpportunities;
export const getAllOpportunities = () => opportunities;
