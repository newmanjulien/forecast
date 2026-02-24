"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";

const ONBOARDING_KEY = "overbase:onboardingComplete";

type OnboardingGateProps = {
  children: ReactNode;
};

export function OnboardingGate({ children }: OnboardingGateProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const completed = window.localStorage.getItem(ONBOARDING_KEY) === "true";
    if (!completed) {
      if (pathname !== "/welcome") {
        router.replace("/welcome");
      }
      return;
    }
    setIsReady(true);
  }, [pathname, router]);

  if (!isReady) {
    return null;
  }

  return <>{children}</>;
}
