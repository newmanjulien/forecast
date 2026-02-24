"use client";

import { useRouter } from "next/navigation";
import { FormPageLayout } from "@/components/layouts/form-page-layout";

export default function InternalDatasourceSuccessPage() {
  const router = useRouter();

  return (
    <FormPageLayout
      title="Datasource is queued"
      description="We will validate the connection and begin the first sync window within the next few hours."
      onLogoClick={() => router.push("/")}
      onPrimaryAction={() => router.push("/")}
      primaryActionText="Back to dashboard"
    >
      <div className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700">
        Status: Awaiting first sync.
      </div>
    </FormPageLayout>
  );
}
