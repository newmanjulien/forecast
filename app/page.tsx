import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { isOnboarded } from "@/lib/onboarding/onboarding";

export default function HomePage() {
  const completed = isOnboarded(cookies());
  redirect(completed ? "/market-audit" : "/welcome");
}
