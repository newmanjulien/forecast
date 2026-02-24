import { InternalAuditPreview } from "@/components/internal-audit-preview";
import { PageContainer, PageShell } from "@/components/page-shell";
import { Panel } from "@/components/ui/panel";
import { TextLink } from "@/components/ui/text-link";
import { internalAuditSampleSignals } from "@/data/internal-audit-signals";
import {
  internalAuditSampleQuadrant,
  internalAuditSampleReport,
} from "@/data/internal-audit-reports";

export default function InternalAuditPage() {
  return (
    <PageShell className="px-8 py-12 text-ink">
      <PageContainer className="max-w-5xl gap-8">
        <header>
          <h1 className="text-3xl font-medium tracking-tight text-ink">
            Insight from our internal audit
          </h1>
          <p className="mt-3 max-w-2xl text-muted/80">
            Validate internal performance signals and operational readiness with
            audit-ready outputs.
          </p>
        </header>

        <Panel as="section" className="p-6">
          <div>
            <h2 className="text-2xl font-medium text-ink">
              Internal audit signals
            </h2>
            <p className="mt-2 text-sm text-muted">
              Internal audit entries appear once internal datasources are
              connected.
            </p>
          </div>
          <div className="mt-4 rounded-lg border border-dashed border-edge/70 bg-panel px-5 py-6 text-sm text-muted">
            No internal audit data yet. Add internal datasources to start the
            audit feed in{" "}
            <TextLink href="/datasources#internal-datasources">
              Datasources
            </TextLink>
            .
          </div>
        </Panel>

        <InternalAuditPreview
          variant="signals"
          signals={internalAuditSampleSignals}
          showLabel="Show example signals"
          hideLabel="Hide example signals"
        >
          <p className="text-sm text-muted/80">
            These signals appear once internal datasources are connected.
            Preview the output format before you add them.
          </p>
        </InternalAuditPreview>
      </PageContainer>
    </PageShell>
  );
}
