"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FormPageLayout } from "@/components/layouts/form-page-layout";
import { completeOnboarding } from "../actions";

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

export function WelcomeClient() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const totalSteps = STEPS.length;
  const current = STEPS[step - 1] ?? STEPS[0];

  const finishOnboarding = async () => {
    if (isLoading) return;
    setIsLoading(true);
    setError(null);
    try {
      await completeOnboarding();
      router.replace("/market-audit");
    } catch {
      setIsLoading(false);
      setError("We couldn't complete onboarding. Please try again.");
    }
  };

  const handleContinue = () => {
    if (step < totalSteps) {
      setStep((prev) => Math.min(prev + 1, totalSteps));
      return;
    }
    void finishOnboarding();
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleLogoClick = () => {
    void finishOnboarding();
  };

  return (
    <FormPageLayout
      title={current.title}
      description={current.description}
      onLogoClick={handleLogoClick}
      onPrimaryAction={handleContinue}
      primaryActionText={step === totalSteps ? "Enter portal" : "Continue"}
      isLoading={isLoading}
      loadingText="Entering portal..."
      error={error}
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
