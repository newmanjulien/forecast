export const ONBOARDING_COOKIE = "overbase:onboardingComplete";
export const ONBOARDING_COOKIE_OPTIONS = {
  httpOnly: true,
  sameSite: "lax" as const,
  path: "/",
  maxAge: 60 * 60 * 24 * 365,
  secure: process.env.NODE_ENV === "production",
};

export const isOnboarded = (cookieStore: {
  get: (name: string) => { value: string } | undefined;
}) => cookieStore.get(ONBOARDING_COOKIE)?.value === "true";
