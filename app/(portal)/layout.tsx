import { PortalHeader } from "./_components/portal-header";
import { PortalSidebar } from "./_components/portal-sidebar";
import { ScrollContainer } from "@/components/ui/scroll-container";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { isOnboarded } from "@/lib/onboarding/onboarding";

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!isOnboarded(cookies())) {
    redirect("/welcome");
  }

  return (
    <div className="h-screen h-[100dvh] overflow-hidden bg-surface">
      <div className="grid h-full grid-cols-[50px_1fr] grid-rows-[44px_1fr] bg-white">
        <div className="col-start-1 row-span-2">
          <PortalSidebar />
        </div>
        <div className="col-start-2 row-start-1">
          <PortalHeader />
        </div>
        <ScrollContainer className="col-start-2 row-start-2 min-h-0 overflow-y-auto border border-edge/40 rounded-tl-[9px] bg-surface">
          {children}
        </ScrollContainer>
      </div>
    </div>
  );
}
