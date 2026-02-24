import * as React from "react";
import { cn } from "@/lib/shared";

export function Separator({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("h-px w-full bg-edge/50", className)}
      {...props}
    />
  );
}
