"use client";

import { useMemo, useState } from "react";
import { ChartTooltip } from "@/components/ui/chart-tooltip";
import type { InternalAuditReport } from "@/data/types";
import {
  CHART_DIMENSIONS,
  CHART_PADDING,
  AXIS_LABEL_OFFSET,
  getInnerSize,
} from "@/lib/charts/layout";
import {
  clamp,
  formatCurrency,
  formatMonthLabel,
  formatRatio,
  formatThousands,
  linearScale,
  ticksLinear,
} from "@/lib/charts/scales";

function buildAreaPath(
  upper: Array<{ x: number; y: number }>,
  lower: Array<{ x: number; y: number }>
) {
  if (upper.length === 0) return "";
  const parts: string[] = [`M ${upper[0].x} ${upper[0].y}`];
  for (let i = 1; i < upper.length; i += 1) {
    parts.push(`L ${upper[i].x} ${upper[i].y}`);
  }
  for (let i = lower.length - 1; i >= 0; i -= 1) {
    parts.push(`L ${lower[i].x} ${lower[i].y}`);
  }
  parts.push("Z");
  return parts.join(" ");
}

export function InternalAuditAreaChart({ report }: { report: InternalAuditReport }) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [hoverCategoryKey, setHoverCategoryKey] = useState<string | null>(null);
  const [hoverPosition, setHoverPosition] = useState<{ x: number; y: number } | null>(null);
  const [hoverBounds, setHoverBounds] = useState<{ width: number; height: number } | null>(null);
  const [hoverXValue, setHoverXValue] = useState<number | null>(null);
  const [hoverInterpolated, setHoverInterpolated] = useState<Record<string, number> | null>(null);

  const chart = useMemo(() => {
    const inner = getInnerSize();
    const maxTotal =
      report.yMax ??
      Math.max(
        ...report.data.map((point) =>
          report.categories.reduce((sum, category) => sum + (point.values[category.key] ?? 0), 0)
        )
      );

    const xScale = linearScale(0, Math.max(report.data.length - 1, 1), CHART_PADDING.left, CHART_PADDING.left + inner.width);
    const yScale = linearScale(0, maxTotal, CHART_PADDING.top + inner.height, CHART_PADDING.top);

    const stackedSeries = report.categories.map((category, categoryIndex) => {
      const upper: Array<{ x: number; y: number }> = [];
      const lower: Array<{ x: number; y: number }> = [];

      report.data.forEach((point, index) => {
        let lowerValue = 0;
        for (let i = 0; i < categoryIndex; i += 1) {
          lowerValue += point.values[report.categories[i].key] ?? 0;
        }
        const upperValue = lowerValue + (point.values[category.key] ?? 0);

        const x = xScale(index);
        upper.push({ x, y: yScale(upperValue) });
        lower.push({ x, y: yScale(lowerValue) });
      });

      return {
        category,
        path: buildAreaPath(upper, lower),
      };
    });

    const yTickValues = ticksLinear(maxTotal, 6);

    const yearTicks = report.data.reduce<Record<string, number>>((acc, point, index) => {
      const year = point.date.slice(0, 4);
      if (acc[year] === undefined) {
        acc[year] = index;
      }
      return acc;
    }, {});

    return {
      stackedSeries,
      maxTotal,
      yTickValues,
      yearTicks,
      inner,
      xScale,
      yScale,
    };
  }, [report]);

  const hoverData = hoverIndex !== null ? report.data[hoverIndex] : null;
  const hoverCategory = hoverCategoryKey
    ? report.categories.find((category) => category.key === hoverCategoryKey)
    : null;

  const hoverMarker =
    hoverCategory && hoverXValue !== null && hoverInterpolated
      ? (() => {
          let lowerValue = 0;
          for (const category of report.categories) {
            if (category.key === hoverCategory.key) {
              break;
            }
            lowerValue += hoverInterpolated[category.key] ?? 0;
          }
          const upperValue = lowerValue + (hoverInterpolated[hoverCategory.key] ?? 0);
          return {
            x: hoverXValue,
            y: chart.yScale(upperValue),
          };
        })()
      : null;

  return (
    <div className="mt-5 grid gap-4 lg:grid-cols-[minmax(0,1fr)_180px]">
      <div className="relative rounded-xl border border-edge/70 bg-panel p-4">
        <svg
          viewBox={`0 0 ${CHART_DIMENSIONS.width} ${CHART_DIMENSIONS.height}`}
          className="h-auto w-full text-muted/70"
          role="img"
          aria-label={`${report.title} stacked area chart`}
          onMouseLeave={() => {
            setHoverIndex(null);
            setHoverCategoryKey(null);
            setHoverPosition(null);
            setHoverBounds(null);
            setHoverXValue(null);
            setHoverInterpolated(null);
          }}
          onMouseMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const scaleX = CHART_DIMENSIONS.width / rect.width;
            const scaleY = CHART_DIMENSIONS.height / rect.height;
            const xView = x * scaleX;
            const yView = y * scaleY;

            const plotLeft = CHART_PADDING.left;
            const plotRight = CHART_PADDING.left + chart.inner.width;
            const plotTop = CHART_PADDING.top;
            const plotBottom = CHART_PADDING.top + chart.inner.height;

            if (xView < plotLeft || xView > plotRight || yView < plotTop || yView > plotBottom) {
              setHoverIndex(null);
              setHoverCategoryKey(null);
              setHoverPosition(null);
              setHoverBounds(null);
              setHoverXValue(null);
              setHoverInterpolated(null);
              return;
            }

            const normalizedX = (xView - plotLeft) / chart.inner.width;
            const fractionalIndex = normalizedX * (report.data.length - 1);
            const lowerIndex = Math.floor(fractionalIndex);
            const upperIndex = Math.min(report.data.length - 1, lowerIndex + 1);
            const t = fractionalIndex - lowerIndex;
            const clampedIndex = clamp(Math.round(fractionalIndex), 0, report.data.length - 1);

            const interpolated = report.categories.reduce<Record<string, number>>((acc, category) => {
              const v0 = report.data[lowerIndex]?.values[category.key] ?? 0;
              const v1 = report.data[upperIndex]?.values[category.key] ?? v0;
              acc[category.key] = v0 + (v1 - v0) * t;
              return acc;
            }, {});

            const valueAtCursor =
              chart.maxTotal * (1 - (yView - plotTop) / chart.inner.height);

            let running = 0;
            let matchedCategoryKey: string | null = null;

            report.categories.forEach((category) => {
              const next = running + (interpolated[category.key] ?? 0);
              if (valueAtCursor >= running && valueAtCursor <= next) {
                matchedCategoryKey = category.key;
              }
              running = next;
            });

            setHoverIndex(clampedIndex);
            setHoverCategoryKey(matchedCategoryKey ?? report.categories[0].key);
            setHoverPosition({ x, y });
            setHoverBounds({ width: rect.width, height: rect.height });
            setHoverXValue(xView);
            setHoverInterpolated(interpolated);
          }}
        >
          {chart.yTickValues.map((tickValue) => {
            const y = chart.yScale(tickValue);
            return (
              <g key={tickValue}>
                <line
                  x1={CHART_PADDING.left}
                  x2={CHART_PADDING.left + chart.inner.width}
                  y1={y}
                  y2={y}
                  stroke="#e6e8ec"
                  strokeWidth={1}
                />
                <text
                  x={CHART_PADDING.left - 12}
                  y={y + 4}
                  textAnchor="end"
                  fontSize="12"
                  fill="currentColor"
                >
                  {formatThousands(tickValue)}
                </text>
              </g>
            );
          })}

          {chart.stackedSeries.map((series) => (
            <path
              key={series.category.key}
              d={series.path}
              fill={series.category.color}
              fillOpacity={0.65}
              stroke={series.category.color}
              strokeWidth={1.5}
            />
          ))}

          {hoverMarker && (
            <circle cx={hoverMarker.x} cy={hoverMarker.y} r={4} fill="#111827" fillOpacity={0.75} />
          )}

          <line
            x1={CHART_PADDING.left}
            x2={CHART_PADDING.left}
            y1={CHART_PADDING.top}
            y2={CHART_PADDING.top + chart.inner.height}
            stroke="#d9dde3"
          />
          <line
            x1={CHART_PADDING.left}
            x2={CHART_PADDING.left + chart.inner.width}
            y1={CHART_PADDING.top + chart.inner.height}
            y2={CHART_PADDING.top + chart.inner.height}
            stroke="#d9dde3"
          />

          <text
            x={CHART_PADDING.left - AXIS_LABEL_OFFSET.x}
            y={CHART_PADDING.top + chart.inner.height / 2}
            textAnchor="middle"
            fontSize="12"
            fill="currentColor"
            transform={`rotate(-90 ${CHART_PADDING.left - AXIS_LABEL_OFFSET.x} ${
              CHART_PADDING.top + chart.inner.height / 2
            })`}
          >
            {report.yLabel}
          </text>

          {Object.entries(chart.yearTicks).map(([year, index]) => {
            const x = chart.xScale(index);
            return (
              <text
                key={year}
                x={x}
                y={CHART_PADDING.top + chart.inner.height + 24}
                textAnchor="middle"
                fontSize="12"
                fill="currentColor"
              >
                {year}
              </text>
            );
          })}

          <text
            x={CHART_PADDING.left + chart.inner.width / 2}
            y={CHART_DIMENSIONS.height - AXIS_LABEL_OFFSET.bottom}
            textAnchor="middle"
            fontSize="12"
            fill="currentColor"
          >
            {report.xLabel}
          </text>
        </svg>

        {hoverCategory && hoverPosition && hoverBounds && (
          <ChartTooltip
            position={hoverPosition}
            bounds={hoverBounds}
            items={[
              { label: "Category:", value: hoverCategory.label },
              {
                label: "Month:",
                value: hoverIndex !== null ? formatMonthLabel(report.data[hoverIndex].date) : "--",
              },
              {
                label: "Sales:",
                value: hoverInterpolated
                  ? formatCurrency(hoverInterpolated[hoverCategory.key] ?? 0)
                  : "--",
              },
              ...(hoverData?.profitRatio?.[hoverCategory.key] !== undefined
                ? [
                    {
                      label: "Profit Ratio:",
                      value: formatRatio(hoverData.profitRatio[hoverCategory.key]),
                    },
                  ]
                : []),
            ]}
          />
        )}
      </div>

      <div className="rounded-xl border border-edge/70 bg-panel p-4">
        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-muted/70">
          {report.legendLabel}
        </div>
        <div className="mt-3 space-y-3 text-sm">
          {report.categories.map((category) => (
            <div key={category.key} className="flex items-center gap-2 text-ink">
              <span className="h-3 w-3 rounded-sm" style={{ backgroundColor: category.color }} />
              <span>{category.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
