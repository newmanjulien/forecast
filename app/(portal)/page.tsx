import Image from "next/image";
import Link from "next/link";
import { EmptyState } from "@/components/empty-state";
import { Pagination } from "@/components/pagination";
import { PageContainer, PageShell } from "@/components/page-shell";
import { TextLink } from "@/components/ui/text-link";
import { Input } from "@/components/ui/input";
import { Panel } from "@/components/ui/panel";
import { Separator } from "@/components/ui/separator";
import { getMarketAuditSignals } from "@/lib/market-audit";
import { cn } from "@/lib/shared";
import type { Signal } from "@/data/types";

const PAGE_SIZE = 5;

export default async function HomePage({
  searchParams,
}: {
  searchParams?: Promise<{ page?: string | string[] }>;
}) {
  const resolvedSearchParams = (await searchParams) ?? {};
  const signals = getMarketAuditSignals();
  const totalPages = Math.max(1, Math.ceil(signals.length / PAGE_SIZE));
  const rawPage = Array.isArray(resolvedSearchParams.page)
    ? resolvedSearchParams.page[0]
    : resolvedSearchParams.page;
  const parsedPage = Number.parseInt(rawPage ?? "1", 10);
  const currentPage = Number.isFinite(parsedPage)
    ? Math.min(Math.max(parsedPage, 1), totalPages)
    : 1;
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const visible = signals.slice(startIndex, startIndex + PAGE_SIZE);
  const rangeStart = signals.length === 0 ? 0 : startIndex + 1;
  const rangeEnd = startIndex + visible.length;
  const signalOwners = [
    { name: "Aditya Sharma", photo: "/avatars/aditya.jpg" },
    { name: "Yash Patel", photo: "/avatars/yash.webp" },
  ];

  const renderMarketAuditRow = (signal: Signal) => (
    <Link
      href={`/market-audit/${signal.id}`}
      className={cn(
        "group flex w-full flex-col px-6 py-5 transition-colors",
        "hover:bg-sand/45",
      )}
    >
      <h3 className="text-[15px] font-semibold text-ink md:text-base">
        {signal.title}
      </h3>
      <p className="mt-2 text-sm text-muted/80">{signal.summary}</p>
      <div className="mt-3 flex items-center gap-2 text-xs text-muted/70">
        <div className="flex items-center -space-x-1.5">
          {signalOwners.map((owner) => (
            <div
              key={owner.name}
              className="h-6 w-6 overflow-hidden rounded-full border border-edge/60 bg-sand/30"
            >
              <Image
                src={owner.photo}
                alt={`${owner.name} portrait`}
                width={24}
                height={24}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
        <span>
          Signal found by {signalOwners.map((owner) => owner.name).join(" & ")}
        </span>
      </div>
    </Link>
  );

  return (
    <PageShell className="px-8 py-12 text-ink">
      <PageContainer className="max-w-5xl gap-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-medium tracking-tight text-ink">
              Insight from our market audit
            </h1>
            <p className="mt-3 max-w-2xl text-muted/80">
              Dig into signals discovered by our market audit. Click in to see
              potential revenue opportunities. These signals are found through
              your{" "}
              <TextLink href="/datasources#market-datasources">
                market datasources
              </TextLink>
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <div className="w-full max-w-3xl">
            <div className="relative">
              <div className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted/70">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="M20 20L17 17" strokeLinecap="round" />
                </svg>
              </div>
              <Input
                type="search"
                placeholder="Search market audit signals, regions, products..."
                aria-label="Search market audit signals"
                className="h-10 rounded-lg bg-panel pl-10 text-sm placeholder:text-sm"
              />
            </div>
          </div>
          <div className="text-xs text-muted/70">
            Sort:{" "}
            <span className="font-medium text-ink/80">
              biggest impact first
            </span>
          </div>
        </div>
        <Separator />
        {visible.length === 0 ? (
          <EmptyState className="px-4 py-6">
            No market audit data yet. Add authored entries in{" "}
            <span className="text-ink">data/market-audit.ts</span>.
          </EmptyState>
        ) : (
          <>
            <Panel className="flex flex-col divide-y divide-edge/60 overflow-hidden rounded-2xl">
              {visible.map((signal) => (
                <div key={signal.id}>{renderMarketAuditRow(signal)}</div>
              ))}
            </Panel>
            <Pagination
              label="Signals"
              currentPage={currentPage}
              totalPages={totalPages}
              rangeStart={rangeStart}
              rangeEnd={rangeEnd}
              totalCount={signals.length}
              basePath="/"
            />
          </>
        )}
      </PageContainer>
    </PageShell>
  );
}
