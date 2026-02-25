import Image from "next/image";
import { EmptyState } from "@/components/empty-state";
import { Pagination } from "@/components/pagination";
import { PageContainer, PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/ui/link-button";
import { Panel } from "@/components/ui/panel";
import { Separator } from "@/components/ui/separator";
import {
  marketDatasourceSections,
  type MarketDatasource,
} from "@/data/market-datasources";
import { getPagination } from "@/lib/shared/pagination";

const PAGE_SIZE = 3;

export default async function DatasourcesPage({
  searchParams,
}: {
  searchParams?: Promise<{ page?: string | string[] }>;
}) {
  const resolvedSearchParams = (await searchParams) ?? {};
  const marketDatasources = marketDatasourceSections.flatMap(
    (section) => section.items,
  );
  const { currentPage, totalPages, startIndex, rangeStart, rangeEnd } =
    getPagination({
      totalCount: marketDatasources.length,
      pageSize: PAGE_SIZE,
      pageParam: resolvedSearchParams.page,
    });
  const visible = marketDatasources.slice(startIndex, startIndex + PAGE_SIZE);
  const maintainers = [
    {
      name: "Aditya Sharma",
      photo: "/avatars/aditya.jpg",
      ndaSigned: true,
    },
    {
      name: "Yash Patel",
      photo: "/avatars/yash.webp",
      ndaSigned: true,
    },
  ];
  const ndaOnFile = maintainers.every((maintainer) => maintainer.ndaSigned);

  const renderDatasourceCard = (item: MarketDatasource) => (
    <div className="rounded-lg border border-edge/70 bg-panel p-5">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div className="min-w-[220px] flex-1">
          <h3 className="text-lg font-medium text-ink">{item.name}</h3>
          <p className="mt-2 text-sm text-muted">{item.description}</p>
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-2">
          <Button
            type="button"
            size="sm"
            variant="ghost"
            className="border border-edge/70"
          >
            Download raw data
          </Button>
          <Button
            type="button"
            size="sm"
            variant="ghost"
            className="border border-edge/70"
          >
            Edit datasource
          </Button>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-edge/50 pt-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center -space-x-2">
            {maintainers.map((maintainer) => (
              <div
                key={maintainer.name}
                className="h-9 w-9 overflow-hidden rounded-full border border-edge/60 bg-sand/30 ring-1 ring-edge/30"
              >
                <Image
                  src={maintainer.photo}
                  alt={`${maintainer.name} portrait`}
                  width={36}
                  height={36}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="leading-snug">
            <div
              title="Maintained by the data science team that owns pipeline health, refresh cadence, and signal quality."
              className="text-xs text-muted/70"
            >
              Maintained by
            </div>
            <div className="mt-1 text-sm font-medium text-ink/90">
              {maintainers.map((maintainer) => maintainer.name).join(" & ")}
            </div>
            <div className="mt-1 text-xs text-muted/60">
              NDAs {ndaOnFile ? "on file" : "pending"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <PageShell className="px-8 py-12 text-ink">
      <PageContainer className="max-w-5xl gap-8">
        <header>
          <h1 className="text-3xl font-medium tracking-tight text-ink">
            Datasources
          </h1>
          <p className="mt-3 max-w-2xl text-muted/80">
            Curate the internal and market inputs that fuel the audit pipeline.
            Internal datasources are owned by your teams, while market
            datasources track external signals.
          </p>
        </header>

        <Panel as="section" id="internal-datasources" className="p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-medium text-ink">
                Internal datasources
              </h2>
              <p className="mt-2 text-sm text-muted">
                Connect first-party systems, data warehouses, and internal
                dashboards.
              </p>
            </div>
          </div>
          <EmptyState className="mt-4 px-5 py-6">
            <p>No internal datasources connected yet.</p>
            <LinkButton href="/datasources/internal/new" className="mt-4">
              Add your first internal datasource
            </LinkButton>
          </EmptyState>
        </Panel>

        <Separator />

        <section id="market-datasources" className="flex flex-col gap-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-medium text-ink">
                Market datasources
              </h2>
              <p className="mt-2 text-sm text-muted">
                External intelligence signals monitored across the ecosystem.
              </p>
            </div>
            <Button
              type="button"
              variant="ghost"
              className="border border-edge/70"
            >
              Add datasource
            </Button>
          </div>

          <div className="flex flex-col gap-4">
            {visible.map((item) => (
              <div key={item.id}>{renderDatasourceCard(item)}</div>
            ))}
          </div>
          <Pagination
            label="Datasources"
            currentPage={currentPage}
            totalPages={totalPages}
            rangeStart={rangeStart}
            rangeEnd={rangeEnd}
            totalCount={marketDatasources.length}
            basePath="/datasources"
          />
        </section>
      </PageContainer>
    </PageShell>
  );
}
