import { Preview } from "@/components/preview/preview";
import { previewExampleQuadrant } from "@/data/preview-reports";
import { PageContainer, PageShell } from "@/components/page-shell";
import { EmptyStateLayout } from "@/components/empty-state-layout";

export default function SalesForecastPage() {
  return (
    <PageShell className="px-8 py-12 text-ink">
      <PageContainer className="max-w-5xl gap-10">
        <EmptyStateLayout
          pageTitle="Second sales forecast"
          pageDescription={
            "Find revenue opportunities with a second forecast. This second forecast is created using our in-depth audit of your internal operation and of your market"
          }
          panelTitle="Add internal datasources"
          panelDescription={
            "Overbase's data scientists create a second forecast by doing an audit of your sales operation - analyzing sales calls, emails, signed contracts and all other details of your sales operation"
          }
          ctaText="Add"
          ctaLinkLabel="internal datasources"
          ctaSuffix="to get a second forecast"
          ctaHref="/datasources#internal-datasources"
          preview={
            <Preview
              variant="quadrant"
              quadrant={previewExampleQuadrant}
              showLabel="Show example quadrant"
              hideLabel="Hide example quadrant"
            >
              <div className="space-y-3 text-sm text-muted">
                <p>
                  Drive easy revenue by doing a second sales forecast. Our data
                  scientists do a deep audit of your operation and of your
                  market to create a reliable second forecast
                </p>
              </div>
            </Preview>
          }
        />
      </PageContainer>
    </PageShell>
  );
}
