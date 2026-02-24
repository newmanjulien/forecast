import type { CSSProperties } from "react";

export type ChartTooltipItem = {
  label: string;
  value: string;
};

export type ChartTooltipProps = {
  title?: string;
  rows?: ChartTooltipItem[];
  body?: string;
  position: { x: number; y: number };
  bounds: { width: number; height: number };
  offset?: { x: number; y: number };
  width?: number;
};

export function ChartTooltip({
  title,
  rows,
  body,
  position,
  bounds,
  offset,
  width,
}: ChartTooltipProps) {
  const resolvedOffset = { x: 12, y: -64, ...offset };
  const resolvedWidth = width ?? 240;
  const style: CSSProperties = {
    left: Math.max(
      12,
      Math.min(position.x + resolvedOffset.x, bounds.width - resolvedWidth - 12)
    ),
    top: Math.max(position.y + resolvedOffset.y, 12),
    width: resolvedWidth,
  };

  return (
    <div
      className="pointer-events-none absolute rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs shadow-sm"
      style={style}
    >
      <div className="space-y-2">
        {title ? <div className="text-xs font-medium text-gray-900">{title}</div> : null}
        {rows?.length ? (
          <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1">
            {rows.map((row) => (
              <div key={`${row.label}-${row.value}`} className="contents">
                <span className="whitespace-nowrap text-gray-400">{row.label}</span>
                <span className="min-w-0 break-words text-gray-900">{row.value}</span>
              </div>
            ))}
          </div>
        ) : null}
        {body ? <div className="break-words leading-snug text-gray-700">{body}</div> : null}
      </div>
    </div>
  );
}
