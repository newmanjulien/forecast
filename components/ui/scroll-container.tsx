"use client";

import * as React from "react";
import { cn } from "@/lib/shared";

type ScrollContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  idleDelay?: number;
};

export function ScrollContainer({
  className,
  idleDelay = 700,
  ...props
}: ScrollContainerProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    let timeout: number | undefined;

    const handleScroll = () => {
      node.classList.add("is-scrolling");
      if (timeout) {
        window.clearTimeout(timeout);
      }
      timeout = window.setTimeout(() => {
        node.classList.remove("is-scrolling");
      }, idleDelay);
    };

    node.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      node.removeEventListener("scroll", handleScroll);
      if (timeout) {
        window.clearTimeout(timeout);
      }
    };
  }, [idleDelay]);

  return <div ref={ref} className={cn("scrollbar-auto", className)} {...props} />;
}
