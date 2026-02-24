"use client";

import { useState } from "react";
import { Panel } from "@/components/ui/panel";
import { ChartTooltip } from "@/components/ui/chart-tooltip";
import type { InternalAuditQuadrantChart } from "@/data/types";
import {
  CHART_DIMENSIONS,
  CHART_PADDING,
  AXIS_LABEL_OFFSET,
  getInnerSize,
} from "@/lib/charts/layout";
import { linearScale, ticksLinear } from "@/lib/charts/scales";

export function InternalAuditQuadrantChart({
  chart,
}: {
  chart: InternalAuditQuadrantChart;
}) {
  const inner = getInnerSize();
  const [hoveredPoint, setHoveredPoint] =
    useState<InternalAuditQuadrantChart["points"][number] | null>(null);
  const [hoverPosition, setHoverPosition] = useState<{ x: number; y: number } | null>(null);
  const [hoverBounds, setHoverBounds] = useState<{ width: number; height: number } | null>(
    null
  );

  const xForValue = linearScale(0, 100, CHART_PADDING.left, CHART_PADDING.left + inner.width);
  const yForValue = linearScale(0, 100, CHART_PADDING.top + inner.height, CHART_PADDING.top);

  const ticks = ticksLinear(100, 4);

  return (
    <Panel className="mt-4 p-5">
      <div>
        <h3 className="text-lg font-semibold text-ink">{chart.title}</h3>
        <p className="mt-1 text-sm text-muted/80">{chart.subtitle}</p>
      </div>

      <div className="relative mt-5 rounded-xl border border-edge/70 bg-panel p-4">
        <svg
          viewBox={`0 0 ${CHART_DIMENSIONS.width} ${CHART_DIMENSIONS.height}`}
          className="h-auto w-full text-muted/70"
          role="img"
          aria-label={chart.title}
          onMouseLeave={() => {
            setHoveredPoint(null);
            setHoverPosition(null);
            setHoverBounds(null);
          }}
        >
          {ticks.map((tick) => {
            const x = xForValue(tick);
            const y = yForValue(tick);
            return (
              <g key={tick}>
                <line
                  x1={CHART_PADDING.left}
                  x2={CHART_PADDING.left + inner.width}
                  y1={y}
                  y2={y}
                  stroke="#eef0f3"
                />
                <line
                  x1={x}
                  x2={x}
                  y1={CHART_PADDING.top}
                  y2={CHART_PADDING.top + inner.height}
                  stroke="#f2f4f7"
                />
                <text
                  x={CHART_PADDING.left - 12}
                  y={y + 4}
                  textAnchor="end"
                  fontSize="12"
                  fill="currentColor"
                >
                  {tick}%
                </text>
                <text
                  x={x}
                  y={CHART_PADDING.top + inner.height + 22}
                  textAnchor="middle"
                  fontSize="12"
                  fill="currentColor"
                >
                  {tick}%
                </text>
              </g>
            );
          })}

          <line
            x1={xForValue(chart.xMid)}
            x2={xForValue(chart.xMid)}
            y1={CHART_PADDING.top}
            y2={CHART_PADDING.top + inner.height}
            stroke="#cfd6df"
            strokeWidth={1.5}
          />
          <line
            x1={CHART_PADDING.left}
            x2={CHART_PADDING.left + inner.width}
            y1={yForValue(chart.yMid)}
            y2={yForValue(chart.yMid)}
            stroke="#cfd6df"
            strokeWidth={1.5}
          />

          {chart.points.map((point) => (
            <g
              key={point.id}
              onMouseEnter={(event) => {
                const rect = event.currentTarget.ownerSVGElement?.getBoundingClientRect();
                if (!rect) return;
                setHoveredPoint(point);
                setHoverPosition({
                  x: event.clientX - rect.left,
                  y: event.clientY - rect.top,
                });
                setHoverBounds({ width: rect.width, height: rect.height });
              }}
              onMouseMove={(event) => {
                const rect = event.currentTarget.ownerSVGElement?.getBoundingClientRect();
                if (!rect) return;
                setHoverPosition({
                  x: event.clientX - rect.left,
                  y: event.clientY - rect.top,
                });
              }}
            >
              <circle
                cx={xForValue(point.x)}
                cy={yForValue(point.y)}
                r={6}
                fill={point.color}
                fillOpacity={0.85}
              />
              <text
                x={xForValue(point.x) + 8}
                y={yForValue(point.y) + 4}
                fontSize="12"
                fill="#59616b"
              >
                {point.label}
              </text>
            </g>
          ))}

          <text
            x={CHART_PADDING.left - AXIS_LABEL_OFFSET.x}
            y={CHART_PADDING.top + inner.height / 2}
            textAnchor="middle"
            fontSize="12"
            fill="currentColor"
            transform={`rotate(-90 ${CHART_PADDING.left - AXIS_LABEL_OFFSET.x} ${
              CHART_PADDING.top + inner.height / 2
            })`}
          >
            {chart.yLabel}
          </text>
          <text
            x={CHART_PADDING.left + inner.width / 2}
            y={CHART_DIMENSIONS.height - AXIS_LABEL_OFFSET.bottom}
            textAnchor="middle"
            fontSize="12"
            fill="currentColor"
          >
            {chart.xLabel}
          </text>
        </svg>

        {hoveredPoint && hoverPosition && hoverBounds && (
          <ChartTooltip
            position={hoverPosition}
            bounds={hoverBounds}
            offset={{ x: 12, y: -52 }}
            maxWidth={170}
            items={[
              { label: "Signal:", value: hoveredPoint.label },
              { label: "X:", value: `${hoveredPoint.x}%` },
              { label: "Y:", value: `${hoveredPoint.y}%` },
            ]}
          />
        )}
      </div>
    </Panel>
  );
}
