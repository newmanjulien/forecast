import * as React from "react";
import { cn } from "@/lib/shared";

export type PanelProps = React.HTMLAttributes<HTMLElement> & {
  as?: React.ElementType;
};

export function Panel({
  as: Component = "div",
  className,
  children,
  ...props
}: PanelProps) {
  return (
    <Component
      className={cn("rounded-lg border border-edge/70 bg-panel", className)}
      {...props}
    >
      {children}
    </Component>
  );
}
