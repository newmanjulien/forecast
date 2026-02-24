import * as React from "react";
import { cn } from "@/lib/shared";

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> & {
  tone?: "default" | "muted" | "accent" | "accent2";
};

export function Badge({ className, tone = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium",
        tone === "default" && "border-edge/70 bg-panel text-ink",
        tone === "muted" && "border-edge/40 bg-sand text-muted",
        tone === "accent" && "border-transparent bg-ink/10 text-ink",
        tone === "accent2" && "border-transparent bg-ink/5 text-muted",
        className
      )}
      {...props}
    />
  );
}
