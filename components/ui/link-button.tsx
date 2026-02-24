import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { buttonClassName, type ButtonSize, type ButtonVariant } from "@/components/ui/button";

export type LinkButtonProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function LinkButton({ className, variant, size, ...props }: LinkButtonProps) {
  return (
    <Link
      className={buttonClassName({ className, variant, size })}
      {...props}
    />
  );
}
