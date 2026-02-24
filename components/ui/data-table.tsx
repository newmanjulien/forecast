import * as React from "react";
import { cn } from "@/lib/shared";

export function DataTable({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("rounded-lg border border-edge/70", className)} {...props}>
      {children}
    </div>
  );
}

export function DataTableHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "grid gap-2 border-b border-edge/70 px-4 py-2 text-[11px] font-medium tracking-[0.08em] text-muted",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function DataTableRow<T extends React.ElementType = "div">({
  as,
  className,
  children,
  ...props
}: { as?: T } & React.ComponentPropsWithoutRef<T>) {
  const Component = as ?? "div";
  return (
    <Component
      className={cn(
        "grid gap-2 border-b border-edge/60 px-4 py-2 text-sm last:border-b-0",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function DataTableFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "grid gap-2 border-t border-edge/70 px-4 py-2 text-sm",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
