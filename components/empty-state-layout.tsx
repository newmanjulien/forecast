import * as React from "react";
import { EmptyState } from "@/components/empty-state";
import { Panel } from "@/components/ui/panel";
import { TextLink } from "@/components/ui/text-link";
import { cn } from "@/lib/shared";

export type EmptyStateLayoutProps = {
  pageTitle: string;
  pageDescription: string;
  panelTitle: string;
  panelDescription: string;
  ctaText?: string;
  ctaLinkLabel: string;
  ctaSuffix?: string;
  ctaHref: string;
  preview: React.ReactNode;
  className?: string;
};

export function EmptyStateLayout({
  pageTitle,
  pageDescription,
  panelTitle,
  panelDescription,
  ctaText,
  ctaLinkLabel,
  ctaSuffix,
  ctaHref,
  preview,
  className,
}: EmptyStateLayoutProps) {
  return (
    <section className="space-y-8">
      <header>
        <h1 className="text-3xl font-medium tracking-tight text-ink">
          {pageTitle}
        </h1>
        <p className="mt-3 max-w-2xl text-muted/80">{pageDescription}</p>
      </header>
      <Panel className={cn("p-6", className)}>
        <div>
          <h2 className="text-2xl font-medium text-ink">{panelTitle}</h2>
          <p className="mt-2 text-sm text-muted">{panelDescription}</p>
        </div>
        <EmptyState className="mt-4 px-5 py-6">
          {ctaText ? `${ctaText} ` : ""}
          <TextLink href={ctaHref}>{ctaLinkLabel}</TextLink>
          {ctaSuffix ? ` ${ctaSuffix}` : ""}
        </EmptyState>
      </Panel>
      {preview}
    </section>
  );
}
