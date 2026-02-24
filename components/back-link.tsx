import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/shared";

export type BackLinkProps = ComponentPropsWithoutRef<typeof Link>;

export function BackLink({ className, children, ...props }: BackLinkProps) {
  return (
    <Link
      className={cn(
        "text-xs font-medium text-muted transition-colors hover:text-ink",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
