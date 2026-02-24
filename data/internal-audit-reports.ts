import type { InternalAuditQuadrantChart, InternalAuditReport } from "./types";

export const internalAuditSampleReport: InternalAuditReport = {
  id: "internal-audit-sample-report",
  title: "Internal audit revenue mix",
  subtitle: "Stacked revenue by category with audit-ready rollups.",
  rangeLabel: "Jan 2018 - Jan 2022",
  xLabel: "Month of order date",
  yLabel: "Sales",
  legendLabel: "Category",
  categories: [
    { key: "furniture", label: "Furniture", color: "#7f9fc4" },
    { key: "office", label: "Office Supplies", color: "#f4b36b" },
    { key: "technology", label: "Technology", color: "#f2a3a2" },
  ],
  data: [
    {
      date: "2018-01",
      values: { furniture: 12000, office: 8000, technology: 6000 },
      profitRatio: { furniture: 0.06, office: 0.03, technology: -0.01 },
    },
    {
      date: "2018-04",
      values: { furniture: 24000, office: 12000, technology: 9000 },
      profitRatio: { furniture: 0.04, office: 0.02, technology: 0.01 },
    },
    {
      date: "2018-07",
      values: { furniture: 18000, office: 14000, technology: 8000 },
      profitRatio: { furniture: 0.01, office: -0.02, technology: 0.03 },
    },
    {
      date: "2018-10",
      values: { furniture: 42000, office: 18000, technology: 14000 },
      profitRatio: { furniture: 0.05, office: 0.01, technology: -0.01 },
    },
    {
      date: "2019-01",
      values: { furniture: 26000, office: 12000, technology: 9000 },
      profitRatio: { furniture: 0.02, office: 0.01, technology: 0.04 },
    },
    {
      date: "2019-04",
      values: { furniture: 20000, office: 15000, technology: 11000 },
      profitRatio: { furniture: 0.03, office: 0.02, technology: 0.01 },
    },
    {
      date: "2019-07",
      values: { furniture: 34000, office: 20000, technology: 15000 },
      profitRatio: { furniture: 0.04, office: 0.03, technology: 0.02 },
    },
    {
      date: "2019-10",
      values: { furniture: 48000, office: 23000, technology: 17000 },
      profitRatio: { furniture: 0.06, office: 0.02, technology: 0.01 },
    },
    {
      date: "2020-01",
      values: { furniture: 32000, office: 18000, technology: 13000 },
      profitRatio: { furniture: 0.02, office: 0.01, technology: 0.03 },
    },
    {
      date: "2020-04",
      values: { furniture: 28000, office: 16000, technology: 12000 },
      profitRatio: { furniture: 0.01, office: -0.01, technology: 0.02 },
    },
    {
      date: "2020-07",
      values: { furniture: 46000, office: 24000, technology: 19000 },
      profitRatio: { furniture: 0.05, office: 0.03, technology: 0.02 },
    },
    {
      date: "2020-10",
      values: { furniture: 38000, office: 22000, technology: 16000 },
      profitRatio: { furniture: 0.04, office: 0.02, technology: 0.01 },
    },
    {
      date: "2021-01",
      values: { furniture: 52000, office: 28000, technology: 21000 },
      profitRatio: { furniture: 0.06, office: 0.03, technology: 0.02 },
    },
    {
      date: "2021-04",
      values: { furniture: 42000, office: 24000, technology: 18000 },
      profitRatio: { furniture: 0.04, office: 0.02, technology: 0.01 },
    },
    {
      date: "2021-07",
      values: { furniture: 56000, office: 30000, technology: 23000 },
      profitRatio: { furniture: 0.05, office: 0.03, technology: 0.02 },
    },
    {
      date: "2021-10",
      values: { furniture: 48000, office: 27000, technology: 20000 },
      profitRatio: { furniture: 0.03, office: 0.01, technology: 0.02 },
    },
    {
      date: "2022-01",
      values: { furniture: 64000, office: 32000, technology: 24000 },
      profitRatio: { furniture: 0.06, office: 0.04, technology: 0.03 },
    },
  ],
  yMax: 120000,
};

export const internalAuditSampleQuadrant: InternalAuditQuadrantChart = {
  id: "internal-audit-sample-quadrant",
  title: "Quadrant analysis: signal strength vs coverage",
  subtitle: "Signals grouped by impact and adoption percentile.",
  xLabel: "Percentile of signal strength",
  yLabel: "Percentile of coverage",
  xMid: 50,
  yMid: 50,
  points: [
    { id: "q1", label: "Northwind", x: 82, y: 91, color: "#d86f61" },
    { id: "q2", label: "Beacon", x: 67, y: 78, color: "#d86f61" },
    { id: "q3", label: "Horizon", x: 74, y: 58, color: "#d86f61" },
    { id: "q4", label: "Citrine", x: 58, y: 86, color: "#d86f61" },
    { id: "q5", label: "Atlas", x: 45, y: 70, color: "#f4b36b" },
    { id: "q6", label: "Lattice", x: 32, y: 62, color: "#f4b36b" },
    { id: "q7", label: "Mercury", x: 24, y: 38, color: "#b9b6b4" },
    { id: "q8", label: "Vega", x: 18, y: 26, color: "#b9b6b4" },
    { id: "q9", label: "Cascade", x: 12, y: 14, color: "#b9b6b4" },
    { id: "q10", label: "Helix", x: 86, y: 42, color: "#5a7fb7" },
    { id: "q11", label: "Solstice", x: 92, y: 63, color: "#d86f61" },
    { id: "q12", label: "Summit", x: 52, y: 52, color: "#d86f61" },
  ],
};
