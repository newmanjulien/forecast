import { PortalHeader } from "./_components/portal-header";
import { PortalSidebar } from "./_components/portal-sidebar";
import { OnboardingGate } from "@/components/onboarding/onboarding-gate";

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen overflow-hidden bg-surface">
      <div className="grid h-full grid-cols-[50px_1fr] grid-rows-[44px_1fr] bg-white">
        <div className="col-start-1 row-span-2">
          <PortalSidebar />
        </div>
        <div className="col-start-2 row-start-1">
          <PortalHeader />
        </div>
        <div className="col-start-2 row-start-2 min-h-0 overflow-y-auto border border-edge/40 rounded-tl-[9px] bg-surface">
          <OnboardingGate>{children}</OnboardingGate>
        </div>
      </div>
    </div>
  );
}
