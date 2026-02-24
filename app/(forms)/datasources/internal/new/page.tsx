"use client";

import { useMemo, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { FormPageLayout } from "@/components/layouts/form-page-layout";
import { Input } from "@/components/ui/input";

const STEP_METADATA = [
  {
    title: "Add an internal datasource",
    description:
      "Capture the essentials so we can map internal telemetry into the audit pipeline.",
  },
  {
    title: "Define access and cadence",
    description:
      "Clarify how the connection should run and how often signals refresh.",
  },
  {
    title: "Review and launch",
    description:
      "Confirm the last details before the first sync window opens.",
  },
];

type InternalDatasourceForm = {
  name: string;
  system: string;
  owner: string;
  connection: string;
  cadence: string;
  environment: string;
  notifyEmail: string;
  confirmation: string;
};

export default function InternalDatasourceNewPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<InternalDatasourceForm>({
    name: "",
    system: "",
    owner: "",
    connection: "",
    cadence: "",
    environment: "",
    notifyEmail: "",
    confirmation: "",
  });

  const { title, description } = STEP_METADATA[step - 1] ?? STEP_METADATA[0];

  const canContinue = useMemo(() => {
    if (step === 1) {
      return Boolean(formData.name && formData.system && formData.owner);
    }
    if (step === 2) {
      return Boolean(
        formData.connection && formData.cadence && formData.environment,
      );
    }
    return Boolean(formData.notifyEmail && formData.confirmation);
  }, [formData, step]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (step < STEP_METADATA.length) {
      setStep((prev) => Math.min(prev + 1, STEP_METADATA.length));
      return;
    }
    router.push("/datasources/internal/new/success");
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const stepOne = (
    <div className="space-y-3">
      <label htmlFor="datasource-name" className="sr-only">
        Datasource name
      </label>
      <Input
        id="datasource-name"
        placeholder="Datasource name"
        variant="website"
        value={formData.name}
        onChange={(event) =>
          setFormData((prev) => ({ ...prev, name: event.target.value }))
        }
      />

      <label htmlFor="datasource-system" className="sr-only">
        Primary system
      </label>
      <Input
        id="datasource-system"
        placeholder="Primary system"
        variant="website"
        value={formData.system}
        onChange={(event) =>
          setFormData((prev) => ({ ...prev, system: event.target.value }))
        }
      />

      <label htmlFor="datasource-owner" className="sr-only">
        Owner team
      </label>
      <Input
        id="datasource-owner"
        placeholder="Owner team"
        variant="website"
        value={formData.owner}
        onChange={(event) =>
          setFormData((prev) => ({ ...prev, owner: event.target.value }))
        }
      />
    </div>
  );

  const stepTwo = (
    <div className="space-y-3">
      <label htmlFor="datasource-connection" className="sr-only">
        Connection method
      </label>
      <Input
        id="datasource-connection"
        placeholder="Connection method"
        variant="website"
        value={formData.connection}
        onChange={(event) =>
          setFormData((prev) => ({ ...prev, connection: event.target.value }))
        }
      />

      <label htmlFor="datasource-cadence" className="sr-only">
        Refresh cadence
      </label>
      <Input
        id="datasource-cadence"
        placeholder="Refresh cadence"
        variant="website"
        value={formData.cadence}
        onChange={(event) =>
          setFormData((prev) => ({ ...prev, cadence: event.target.value }))
        }
      />

      <label htmlFor="datasource-environment" className="sr-only">
        Environment
      </label>
      <Input
        id="datasource-environment"
        placeholder="Environment"
        variant="website"
        value={formData.environment}
        onChange={(event) =>
          setFormData((prev) => ({ ...prev, environment: event.target.value }))
        }
      />
    </div>
  );

  const stepThree = (
    <div className="space-y-3">
      <label htmlFor="datasource-notify" className="sr-only">
        Notification email
      </label>
      <Input
        id="datasource-notify"
        placeholder="Notification email"
        variant="website"
        value={formData.notifyEmail}
        onChange={(event) =>
          setFormData((prev) => ({ ...prev, notifyEmail: event.target.value }))
        }
      />

      <label htmlFor="datasource-confirm" className="sr-only">
        Confirmation
      </label>
      <Input
        id="datasource-confirm"
        placeholder="Type CONFIRM to launch"
        variant="website"
        value={formData.confirmation}
        onChange={(event) =>
          setFormData((prev) => ({ ...prev, confirmation: event.target.value }))
        }
      />
    </div>
  );

  return (
    <FormPageLayout
      title={title}
      description={description}
      onLogoClick={() => router.push("/datasources")}
      onSubmit={handleSubmit}
      primaryActionText={step === STEP_METADATA.length ? "Finish setup" : "Continue"}
      isPrimaryDisabled={!canContinue}
      onBack={step > 1 ? handleBack : undefined}
      step={step}
      totalSteps={STEP_METADATA.length}
    >
      {step === 1 ? stepOne : step === 2 ? stepTwo : stepThree}
    </FormPageLayout>
  );
}
