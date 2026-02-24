import { BackLink } from "@/components/back-link";
import { PageContainer, PageShell } from "@/components/page-shell";
import { Panel } from "@/components/ui/panel";

export default function NotFound() {
  return (
    <PageShell className="px-6 py-10">
      <PageContainer className="max-w-xl">
        <Panel className="flex flex-col gap-4 p-8 text-ink">
          <h1 className="text-3xl font-medium">Market audit entry not found</h1>
          <p className="text-sm text-muted">
            The market audit entry you are looking for does not exist in this
            demo dataset.
          </p>
          <BackLink href="/">Return to Market Audit</BackLink>
        </Panel>
      </PageContainer>
    </PageShell>
  );
}
