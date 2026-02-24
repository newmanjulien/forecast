"use client";

import { useEffect, useRef, useState } from "react";
import { Panel } from "@/components/ui/panel";
import { ChartTooltip } from "@/components/ui/chart-tooltip";
import type { PreviewQuadrantChart, PreviewQuadrantPoint } from "@/data/types";
import { cn } from "@/lib/shared";
import {
  AXIS_LABEL_OFFSET,
  CHART_DIMENSIONS,
  CHART_PADDING,
  getInnerSize,
} from "@/lib/charts/layout";
import { linearScale, ticksLinear } from "@/lib/charts/scales";

export function PreviewQuadrantChart({
  chart,
  className,
}: {
  chart: PreviewQuadrantChart;
  className?: string;
}) {
  const inner = getInnerSize();
  const [hoveredPoint, setHoveredPoint] = useState<PreviewQuadrantPoint | null>(null);
  const [hoverPosition, setHoverPosition] = useState<{ x: number; y: number } | null>(
    null
  );
  const [hoverBounds, setHoverBounds] = useState<{ width: number; height: number } | null>(
    null
  );
  const [hasInteracted, setHasInteracted] = useState(false);
  const svgRef = useRef<SVGSVGElement | null>(null);

  const xForValue = linearScale(0, 100, CHART_PADDING.left, CHART_PADDING.left + inner.width);
  const yForValue = linearScale(0, 100, CHART_PADDING.top + inner.height, CHART_PADDING.top);

  const ticks = ticksLinear(100, 4);
  const DISAGREE_THRESHOLD = 6;
  const defaultPoint = chart.points.find((point) => point.id === "q18");

  useEffect(() => {
    if (hasInteracted || !defaultPoint) return;
    const rect = svgRef.current?.getBoundingClientRect();
    const width = rect?.width ?? CHART_DIMENSIONS.width;
    const height = rect?.height ?? CHART_DIMENSIONS.height;
    const xScale = linearScale(
      0,
      100,
      CHART_PADDING.left,
      CHART_PADDING.left + inner.width,
    );
    const yScale = linearScale(
      0,
      100,
      CHART_PADDING.top + inner.height,
      CHART_PADDING.top,
    );
    const x = xScale(defaultPoint.x);
    const y = yScale(defaultPoint.y);

    setHoveredPoint(defaultPoint);
    setHoverBounds({ width, height });
    setHoverPosition({
      x: (x / CHART_DIMENSIONS.width) * width,
      y: (y / CHART_DIMENSIONS.height) * height,
    });
  }, [defaultPoint?.id, hasInteracted, inner.height, inner.width]);

  const getPointColor = (point: PreviewQuadrantPoint) => {
    const isRight = point.x >= chart.xMid;
    const isTop = point.y >= chart.yMid;
    const delta = point.y - point.x;
    const isDisagreement = Math.abs(delta) > DISAGREE_THRESHOLD;

    if (isDisagreement && ((isTop && isRight) || (!isTop && !isRight))) {
      return delta > 0 ? "#86efac" : "#fca5a5";
    }

    if (isTop && isRight) return "#111827";
    if (isTop && !isRight) return "#16a34a";
    if (!isTop && isRight) return "#dc2626";
    return "#9ca3af";
  };

  return (
    <Panel className={cn("p-6 border-gray-200 bg-white", className)}>
      <div>
        <h3 className="text-lg font-medium text-gray-900">{chart.title}</h3>
        <p className="mt-1 text-sm text-gray-500">{chart.subtitle}</p>
      </div>

      <div className="relative mt-5 rounded-xl border border-gray-100 bg-white p-4">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${CHART_DIMENSIONS.width} ${CHART_DIMENSIONS.height}`}
          className="h-auto w-full text-gray-400"
          role="img"
          aria-label={chart.title}
          onMouseMove={() => {
            if (!hasInteracted) {
              setHasInteracted(true);
            }
          }}
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
                  stroke="#f3f4f6"
                />
                <line
                  x1={x}
                  x2={x}
                  y1={CHART_PADDING.top}
                  y2={CHART_PADDING.top + inner.height}
                  stroke="#f5f5f5"
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
            stroke="#d1d5db"
            strokeWidth={1.5}
          />
          <line
            x1={CHART_PADDING.left}
            x2={CHART_PADDING.left + inner.width}
            y1={yForValue(chart.yMid)}
            y2={yForValue(chart.yMid)}
            stroke="#d1d5db"
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
                fill={getPointColor(point)}
                fillOpacity={0.85}
              />
              <text
                x={xForValue(point.x) + 8}
                y={yForValue(point.y) + 4}
                fontSize="12"
                fill="#6b7280"
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
            title={`${hoveredPoint.label} deal`}
            rows={[
              { label: "Current", value: `${hoveredPoint.x}%` },
              { label: "Overbase", value: `${hoveredPoint.y}%` },
              {
                label: "Gap",
                value: `${hoveredPoint.y - hoveredPoint.x >= 0 ? "+" : ""}${
                  hoveredPoint.y - hoveredPoint.x
                } pts`,
              },
            ]}
            body={(() => {
              const delta = hoveredPoint.y - hoveredPoint.x;
              const absDelta = Math.abs(delta);
              if (absDelta <= DISAGREE_THRESHOLD) return undefined;
              return hoveredPoint.description;
            })()}
            position={hoverPosition}
            bounds={hoverBounds}
            offset={{ x: 12, y: -92 }}
            width={320}
          />
        )}
      </div>
    </Panel>
  );
}
