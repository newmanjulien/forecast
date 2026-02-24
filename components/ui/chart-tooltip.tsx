import type { CSSProperties } from "react";

export type ChartTooltipItem = {
  label: string;
  value: string;
};

export type ChartTooltipProps = {
  items: ChartTooltipItem[];
  position: { x: number; y: number };
  bounds: { width: number; height: number };
  offset?: { x: number; y: number };
  maxWidth?: number;
};

export function ChartTooltip({
  items,
  position,
  bounds,
  offset,
  maxWidth,
}: ChartTooltipProps) {
  const resolvedOffset = { x: 12, y: -64, ...offset };
  const resolvedMaxWidth = maxWidth ?? 180;
  const style: CSSProperties = {
    left: Math.min(position.x + resolvedOffset.x, bounds.width - resolvedMaxWidth),
    top: Math.max(position.y + resolvedOffset.y, 12),
  };

  return (
    <div
      className="pointer-events-none absolute rounded-lg border border-edge/70 bg-panel px-3 py-2 text-xs text-muted shadow-sm"
      style={style}
    >
      <div className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-1">
        {items.map((item) => (
          <div key={item.label} className="contents">
            <span className="text-muted/60">{item.label}</span>
            <span className="text-ink">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
