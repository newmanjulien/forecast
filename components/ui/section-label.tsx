import * as React from "react";
import { cn } from "@/lib/shared";

export function SectionLabel({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("text-muted font-medium tracking-[0.08em]", className)} {...props}>
      {children}
    </div>
  );
}
