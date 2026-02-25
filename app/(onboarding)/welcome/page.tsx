import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { isOnboarded } from "@/lib/onboarding/onboarding";
import { WelcomeClient } from "./_components/welcome-client";

export default function WelcomePage() {
  if (isOnboarded(cookies())) {
    redirect("/market-audit");
  }

  return <WelcomeClient />;
}
