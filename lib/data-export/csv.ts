export const toCsv = (rows: Record<string, string | number>[]) => {
  if (rows.length === 0) return "";
  const headers: string[] = [];
  const seen = new Set<string>();
  rows.forEach((row) => {
    Object.keys(row).forEach((key) => {
      if (seen.has(key)) return;
      seen.add(key);
      headers.push(key);
    });
  });
  const escape = (value: string | number) =>
    `"${String(value).replace(/"/g, '""')}"`;
  const headerLine = headers.map(escape).join(",");
  const body = rows.map((row) =>
    headers.map((key) => escape(row[key] ?? "")).join(","),
  );
  return [headerLine, ...body].join("\n");
};
