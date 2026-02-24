import { InternalAuditPreview } from "@/components/internal-audit-preview";
import {
  internalAuditSampleQuadrant,
  internalAuditSampleReport,
} from "@/data/internal-audit-reports";
import { PageContainer, PageShell } from "@/components/page-shell";
import { Panel } from "@/components/ui/panel";
import { TextLink } from "@/components/ui/text-link";

export default function SalesForecastPage() {
  return (
    <PageShell className="px-8 py-12 text-ink">
      <PageContainer className="max-w-5xl gap-10">
        <header className="space-y-6">
          <div>
            <h1 className="text-3xl font-medium tracking-tight text-ink">
              Second sales forecast
            </h1>
            <p className="mt-3 max-w-2xl text-muted/80">
              A second forecast built from a full internal audit.
            </p>
          </div>

          <Panel className="p-6">
            <div>
              <h2 className="text-2xl font-medium text-ink">
                Sales forecast feed
              </h2>
              <p className="mt-2 text-sm text-muted">
                Forecast entries appear once internal datasources are connected.
              </p>
            </div>
            <div className="mt-4 rounded-lg border border-dashed border-edge/70 bg-panel px-5 py-6 text-sm text-muted">
              No sales forecast data yet. Add internal datasources to start the
              forecast feed in{" "}
              <TextLink href="/datasources#internal-datasources">
                Datasources
              </TextLink>
              .
            </div>
          </Panel>
        </header>

        <InternalAuditPreview
          variant="reports"
          report={internalAuditSampleReport}
          reportQuadrant={internalAuditSampleQuadrant}
          showLabel="Show example reports"
          hideLabel="Hide example reports"
        >
          <div className="space-y-3 text-sm text-muted">
            <p>
              We audit every layer of the business: calls, emails, CRM history,
              contracts, billing, and product usage. The output is an
              independent view of performance that spots what the pipeline
              misses.
            </p>
            <p>
              Your team can work inside your BI tool, or view the forecast here
              once SSO is enabled.
            </p>
          </div>
        </InternalAuditPreview>
      </PageContainer>
    </PageShell>
  );
}
