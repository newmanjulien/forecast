import * as React from "react";
import { cn } from "@/lib/shared";

type InputVariant = "default" | "website";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: InputVariant;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = "default", ...props }, ref) => {
    const baseClasses =
      variant === "website"
        ? "w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
        : "flex h-12 w-full rounded-2xl border border-edge/60 bg-panel px-5 text-[15px] text-ink transition-colors placeholder:text-muted/60 hover:border-edge focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/12";

    return (
      <input
        type={type}
        className={cn(baseClasses, className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
