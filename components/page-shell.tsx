import * as React from "react";
import { cn } from "@/lib/shared";

export function PageShell({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <main className={cn("bg-surface", className)} {...props}>
      {children}
    </main>
  );
}

export function PageContainer({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mx-auto flex w-full flex-col", className)} {...props}>
      {children}
    </div>
  );
}
