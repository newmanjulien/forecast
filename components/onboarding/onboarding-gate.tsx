"use client";

import { useEffect, useSyncExternalStore, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";

const ONBOARDING_KEY = "overbase:onboardingComplete";

type OnboardingGateProps = {
  children: ReactNode;
};

export function OnboardingGate({ children }: OnboardingGateProps) {
  const router = useRouter();
  const pathname = usePathname();
  const completed = useSyncExternalStore(
    (onStoreChange) => {
      if (typeof window === "undefined") {
        return () => {};
      }
      window.addEventListener("storage", onStoreChange);
      return () => window.removeEventListener("storage", onStoreChange);
    },
    () => {
      if (typeof window === "undefined") {
        return false;
      }
      return window.localStorage.getItem(ONBOARDING_KEY) === "true";
    },
    () => false
  );

  useEffect(() => {
    if (!completed) {
      if (pathname !== "/welcome") {
        router.replace("/welcome");
      }
    }
  }, [completed, pathname, router]);

  if (!completed) {
    return null;
  }

  return <>{children}</>;
}
