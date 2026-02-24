import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/shared";

export type TextLinkProps = ComponentPropsWithoutRef<typeof Link>;

export function TextLink({ className, children, ...props }: TextLinkProps) {
  return (
    <Link
      className={cn(
        "text-ink/85 underline decoration-ink/20 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink/40",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
