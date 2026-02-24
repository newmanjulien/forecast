"use client";

import Image from "next/image";
import { Panel } from "@/components/ui/panel";
import type { PreviewSignal } from "@/data/types";

export function PreviewSignals({
  id,
  signals,
}: {
  id: string;
  signals: PreviewSignal[];
}) {
  if (signals.length === 0) {
    return null;
  }

  return (
    <Panel
      id={id}
      className="mt-4 flex flex-col divide-y divide-edge/60 overflow-hidden rounded-2xl"
    >
      {signals.map((signal) => (
        <div
          key={signal.id}
          className="group w-full cursor-default px-6 py-5 transition-colors hover:bg-sand/45"
        >
          <h3 className="text-[15px] font-semibold text-ink md:text-base">
            {signal.title}
          </h3>
          <p className="mt-2 text-sm text-muted/80">{signal.summary}</p>
          <div className="mt-3 flex items-center gap-2 text-xs text-muted/70">
            <div className="flex items-center -space-x-1.5">
              {signal.sources.map((source) => (
                <div
                  key={source.name}
                  className="h-6 w-6 overflow-hidden rounded-full border border-edge/60 bg-sand/30"
                >
                  <Image
                    src={source.logo}
                    alt={`${source.name} logo`}
                    width={24}
                    height={24}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
            <span>
              Sources: {signal.sources.map((source) => source.name).join(" & ")}
            </span>
          </div>
        </div>
      ))}
    </Panel>
  );
}
