"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AlignJustify,
  ClipboardCheck,
  Database,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/shared";

const navItems = [
  { label: "Sales forecast", href: "/sales-forecast", disabled: false },
  { label: "Internal audit", href: "/internal-audit", disabled: false },
  { label: "Market audit", href: "/", disabled: false },
  { label: "Datasources", href: "/datasources", disabled: false },
];

export function PortalSidebar() {
  const pathname = usePathname();
  const isMarketAudit =
    pathname === "/" || pathname.startsWith("/market-audit");
  const isDatasources = pathname.startsWith("/datasources");
  const isInternalAudit = pathname.startsWith("/internal-audit");
  const isSalesForecast = pathname.startsWith("/sales-forecast");

  const iconMap: Record<string, ReactNode> = {
    "Market audit": <AlignJustify className="h-4 w-4" strokeWidth={1.6} />,
    Datasources: <Database className="h-4 w-4" strokeWidth={1.6} />,
    "Internal audit": <ClipboardCheck className="h-4 w-4" strokeWidth={1.6} />,
    "Sales forecast": <TrendingUp className="h-4 w-4" strokeWidth={1.6} />,
  };

  return (
    <aside className="flex h-full w-full flex-col items-center bg-transparent pt-0.5 pb-0.5">
      <div className="flex h-10 w-10 items-center justify-center rounded-[9px] bg-transparent text-ink">
        <Image
          src="/logo.png"
          alt="Overbase"
          width={64}
          height={32}
          className="h-10 w-auto object-contain"
          priority
        />
      </div>
      <nav className="mt-1.5 flex flex-1 flex-col items-center gap-1.5">
        {navItems.map((item) => {
          const isActive =
            (item.label === "Market audit" && isMarketAudit) ||
            (item.label === "Datasources" && isDatasources) ||
            (item.label === "Internal audit" && isInternalAudit) ||
            (item.label === "Sales forecast" && isSalesForecast);
          const baseClasses =
            "flex h-7 w-7 items-center justify-center rounded-[8px] text-sm transition-colors";
          if (item.disabled) {
            return (
              <span
                key={item.label}
                aria-disabled="true"
                className={cn(baseClasses, "cursor-not-allowed text-muted/50")}
              >
                {iconMap[item.label] ?? (
                  <span className="h-1.5 w-1.5 rounded-full bg-muted/50" />
                )}
                <span className="sr-only">{item.label}</span>
              </span>
            );
          }
          return (
            <Link
              key={item.label}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              aria-label={item.label}
              className={cn(
                baseClasses,
                isActive
                  ? "bg-edge/50 text-ink"
                  : "text-muted hover:bg-edge/50 hover:text-ink",
              )}
            >
              {iconMap[item.label] ?? (
                <span className="h-1.5 w-1.5 rounded-full bg-muted/50" />
              )}
              <span className="sr-only">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
