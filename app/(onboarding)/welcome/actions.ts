"use server";

import { cookies } from "next/headers";
import {
  ONBOARDING_COOKIE,
  ONBOARDING_COOKIE_OPTIONS,
} from "@/lib/onboarding/onboarding";

export async function completeOnboarding() {
  cookies().set(ONBOARDING_COOKIE, "true", ONBOARDING_COOKIE_OPTIONS);
}
