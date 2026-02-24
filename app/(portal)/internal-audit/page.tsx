import { Preview } from "@/components/preview/preview";
import { PageContainer, PageShell } from "@/components/page-shell";
import { EmptyStateLayout } from "@/components/empty-state-layout";
import { previewExampleSignals } from "@/data/preview-signals";

export default function InternalAuditPage() {
  return (
    <PageShell className="px-8 py-12 text-ink">
      <PageContainer className="max-w-5xl gap-8">
        <EmptyStateLayout
          pageTitle="Insight from our internal audit"
          pageDescription="Dig into signals discovered by our market audit. Click in to see potential revenue opportunities. These signals are found through your internal datasources"
          panelTitle="Add internal datasources"
          panelDescription={
            "Overbase's data scientists can find revenue opportunities by doing an audit of your sales operation - analyze sales calls, emails, signed contracts and all other details of your sales operation"
          }
          ctaText="Add"
          ctaLinkLabel="internal datasources"
          ctaSuffix="to get an internal audit"
          ctaHref="/datasources#internal-datasources"
          preview={
            <Preview
              variant="signals"
              signals={previewExampleSignals}
              showLabel="Show example signals"
              hideLabel="Hide example signals"
            >
              <p className="text-sm text-muted/80">
                Businesses drive millions in easy revenue every quarter with the
                hidden opportunities they discover through their internal audit
              </p>
            </Preview>
          }
        />
      </PageContainer>
    </PageShell>
  );
}
