export type PaginationInput = {
  totalCount: number;
  pageSize: number;
  pageParam?: string | string[];
};

export type PaginationResult = {
  currentPage: number;
  totalPages: number;
  startIndex: number;
  rangeStart: number;
  rangeEnd: number;
};

export function getPagination({
  totalCount,
  pageSize,
  pageParam,
}: PaginationInput): PaginationResult {
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
  const rawPage = Array.isArray(pageParam) ? pageParam[0] : pageParam;
  const parsedPage = Number.parseInt(rawPage ?? "1", 10);
  const currentPage = Number.isFinite(parsedPage)
    ? Math.min(Math.max(parsedPage, 1), totalPages)
    : 1;
  const startIndex = (currentPage - 1) * pageSize;
  const rangeStart = totalCount === 0 ? 0 : startIndex + 1;
  const rangeEnd = Math.min(startIndex + pageSize, totalCount);

  return {
    currentPage,
    totalPages,
    startIndex,
    rangeStart,
    rangeEnd,
  };
}
