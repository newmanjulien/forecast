"use client";

import { useEffect } from "react";

type ScrollIndicatorProps = {
  idleDelay?: number;
};

export function ScrollIndicator({ idleDelay = 700 }: ScrollIndicatorProps) {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("scrollbar-auto");

    let timeout: number | undefined;

    const handleScroll = () => {
      root.classList.add("is-scrolling");
      if (timeout) {
        window.clearTimeout(timeout);
      }
      timeout = window.setTimeout(() => {
        root.classList.remove("is-scrolling");
      }, idleDelay);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeout) {
        window.clearTimeout(timeout);
      }
    };
  }, [idleDelay]);

  return null;
}
