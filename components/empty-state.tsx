import * as React from "react";
import { cn } from "@/lib/shared";

export function EmptyState({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg border border-dashed border-edge/70 bg-panel text-sm text-muted",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
