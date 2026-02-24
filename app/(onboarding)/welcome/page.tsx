"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FormPageLayout } from "@/components/layouts/form-page-layout";

const ONBOARDING_KEY = "overbase:onboardingComplete";

const STEPS = [
  {
    title: "Welcome to the portal",
    description:
      "A quick three-step tour to show where insights live and how to act on them.",
    details: [
      "Market audit signals surface external opportunities and risks.",
      "Internal audit keeps performance signals grounded in your data.",
      "Datasources power every insight across the portal.",
    ],
  },
  {
    title: "Read the audit layers",
    description:
      "Each signal comes with a traceable model so teams can trust the story.",
    details: [
      "Open any signal to see impact ranges and key drivers.",
      "Trace sources, inputs, and transformations in the audit layer.",
      "Share summaries with leadership in a consistent format.",
    ],
  },
  {
    title: "Connect your first datasource",
    description:
      "Fresh inputs keep the portal up to date and unlock more views.",
    details: [
      "Internal datasources unlock internal audit and forecasting views.",
      "Market datasources feed external signals and competitive context.",
      "Add or edit datasources anytime in the Datasources section.",
    ],
  },
];

const markOnboardingComplete = () => {
  window.localStorage.setItem(ONBOARDING_KEY, "true");
};

export default function WelcomePage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const totalSteps = STEPS.length;
  const current = STEPS[step - 1] ?? STEPS[0];

  useEffect(() => {
    const completed = window.localStorage.getItem(ONBOARDING_KEY) === "true";
    if (completed) {
      router.replace("/");
    }
  }, [router]);

  const handleContinue = () => {
    if (step < totalSteps) {
      setStep((prev) => Math.min(prev + 1, totalSteps));
      return;
    }
    markOnboardingComplete();
    router.push("/");
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleLogoClick = () => {
    markOnboardingComplete();
    router.push("/");
  };

  return (
    <FormPageLayout
      title={current.title}
      description={current.description}
      onLogoClick={handleLogoClick}
      onPrimaryAction={handleContinue}
      primaryActionText={step === totalSteps ? "Enter portal" : "Continue"}
      onBack={step > 1 ? handleBack : undefined}
      step={step}
      totalSteps={totalSteps}
      sideImageSrc="/market.png"
      sideImageAlt="Portal preview"
      sideImagePriority
      sideImageClassName="object-contain bg-white"
    >
      <div className="space-y-3 text-sm text-gray-700">
        {current.details.map((detail) => (
          <div key={detail} className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-900" />
            <p className="leading-relaxed">{detail}</p>
          </div>
        ))}
      </div>
    </FormPageLayout>
  );
}
