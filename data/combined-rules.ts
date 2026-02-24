import type { Signal } from "./types";
import { combinedOpportunities } from "./combined-opportunities";

type CombineResult = { ok: true } | { ok: false; reason: string };

const toPairKey = (leftId: string, rightId: string) => {
  return [leftId, rightId].sort().join("--");
};

const curatedPairs = new Set(
  combinedOpportunities.map((item) => toPairKey(item.signalIds[0], item.signalIds[1]))
);

export const canCombine = (left: Signal, right: Signal): CombineResult => {
  if (left.id === right.id) return { ok: false, reason: "Same signal" };
  const key = toPairKey(left.id, right.id);
  if (!curatedPairs.has(key)) {
    return { ok: false, reason: "Not curated" };
  }
  return { ok: true };
};
