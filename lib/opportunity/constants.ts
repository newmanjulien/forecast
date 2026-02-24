import type { DriverKey, LineTypeColor } from "./types";

export const lineTypeColors: Record<DriverKey, LineTypeColor> = {
  units: { stroke: "var(--chart-units)", fill: "var(--chart-units)" },
  price: { stroke: "var(--chart-price)", fill: "var(--chart-price)" },
  attach: { stroke: "var(--chart-attach)", fill: "var(--chart-attach)" },
  arppu: { stroke: "var(--chart-arppu)", fill: "var(--chart-arppu)" },
};

export const driverOrder: DriverKey[] = ["units", "price", "attach", "arppu"];

export const driverLabels: Record<DriverKey, string> = {
  units: "Unit expansion",
  price: "Price mix",
  attach: "Attach expansion",
  arppu: "Usage ARPPU",
};
