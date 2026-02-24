import { notFound } from "next/navigation";
import { BackLink } from "@/components/back-link";
import { OpportunityDetailClient } from "../../_components/opportunity-detail-client";
import { PageContainer, PageShell } from "@/components/page-shell";
import { getOpportunityDetailById } from "@/lib/market-audit";

export default async function OpportunityDetailPage({
  params,
}: {
  params: Promise<{ id: string; opportunityId: string }>;
}) {
  const { id, opportunityId } = await params;
  const detail = getOpportunityDetailById(id, opportunityId);

  if (!detail) {
    notFound();
  }

  const { signal, opportunity, evidence } = detail;

  return (
    <PageShell className="px-6 py-10">
      <PageContainer className="max-w-4xl gap-8">
        <div className="flex items-center justify-between">
          <BackLink href={`/market-audit/${signal.id}`}>
            Back to list of opportunities
          </BackLink>
        </div>

        <OpportunityDetailClient
          signal={signal}
          opportunity={opportunity}
          evidence={evidence}
        />
      </PageContainer>
    </PageShell>
  );
}
