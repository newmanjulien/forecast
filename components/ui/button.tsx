import * as React from "react";
import { cn } from "@/lib/shared";

export type ButtonVariant = "default" | "ghost" | "pill";
export type ButtonSize = "default" | "sm" | "xs";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function buttonClassName({
  className,
  variant = "default",
  size = "default",
}: {
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}) {
  const sizeClasses =
    variant === "pill"
      ? size === "xs"
        ? "px-3 py-1 text-xs"
        : "px-4 py-2 text-xs"
      : size === "sm"
        ? "h-8 px-3 text-xs"
        : size === "xs"
          ? "px-3 py-1 text-xs"
          : "h-10 px-4";

  return cn(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
    variant === "default" &&
      "bg-ink text-white hover:bg-ink/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/20",
    variant === "ghost" &&
      "border border-edge/70 bg-panel text-ink hover:bg-sand/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/20",
    variant === "pill" &&
      "rounded-full border border-edge/60 bg-panel/70 text-ink/80 hover:bg-sand/60 hover:text-ink",
    sizeClasses,
    className
  );
}

export function Button({ className, variant = "default", size = "default", ...props }: ButtonProps) {
  return (
    <button
      className={buttonClassName({ className, variant, size })}
      {...props}
    />
  );
}
