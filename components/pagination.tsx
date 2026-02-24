import Link from "next/link";
import { Panel } from "@/components/ui/panel";

export type PaginationProps = {
  label: string;
  currentPage: number;
  totalPages: number;
  rangeStart: number;
  rangeEnd: number;
  totalCount: number;
  basePath: string;
};

const buildHref = (basePath: string, page: number) => {
  const joiner = basePath.includes("?") ? "&" : "?";
  return `${basePath}${joiner}page=${page}`;
};

export function Pagination({
  label,
  currentPage,
  totalPages,
  rangeStart,
  rangeEnd,
  totalCount,
  basePath,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  return (
    <Panel className="flex flex-wrap items-center justify-between gap-3 rounded-xl border-edge/60 bg-panel/70 px-4 py-3">
      <div className="text-xs text-muted/70">
        {label} <span className="text-ink/80">{rangeStart}</span>–{" "}
        <span className="text-ink/80">{rangeEnd}</span> of{" "}
        <span className="text-ink/80">{totalCount}</span>
      </div>
      <nav
        aria-label="Pagination"
        className="flex flex-wrap items-center gap-1.5"
      >
        {currentPage > 1 ? (
          <Link
            href={buildHref(basePath, currentPage - 1)}
            scroll={false}
            className="rounded-full border border-edge/60 bg-panel/70 px-3 py-1 text-xs text-ink/80 transition-colors hover:bg-sand/60 hover:text-ink"
          >
            Prev
          </Link>
        ) : (
          <span className="cursor-not-allowed rounded-full border border-edge/40 bg-panel/70 px-3 py-1 text-xs text-muted/40">
            Prev
          </span>
        )}
        {pageNumbers.map((page) =>
          page === currentPage ? (
            <span
              key={page}
              aria-current="page"
              className="rounded-full border border-ink/20 bg-ink/10 px-3 py-1 text-xs text-ink"
            >
              {page}
            </span>
          ) : (
            <Link
              key={page}
              href={buildHref(basePath, page)}
              scroll={false}
              className="rounded-full border border-edge/60 bg-panel/70 px-3 py-1 text-xs text-ink/80 transition-colors hover:bg-sand/60 hover:text-ink"
            >
              {page}
            </Link>
          ),
        )}
        {currentPage < totalPages ? (
          <Link
            href={buildHref(basePath, currentPage + 1)}
            scroll={false}
            className="rounded-full border border-edge/60 bg-panel/70 px-3 py-1 text-xs text-ink/80 transition-colors hover:bg-sand/60 hover:text-ink"
          >
            Next
          </Link>
        ) : (
          <span className="cursor-not-allowed rounded-full border border-edge/40 bg-panel/70 px-3 py-1 text-xs text-muted/40">
            Next
          </span>
        )}
      </nav>
    </Panel>
  );
}
