"use client";

import Image from "next/image";
import type { FormEvent, ReactNode } from "react";

interface FormPageLayoutProps {
  children?: ReactNode;
  title?: ReactNode;
  description?: string;
  onLogoClick: () => void;
  onSubmit?: (e: FormEvent) => void;
  onPrimaryAction?: () => void;
  primaryActionText?: string;
  isPrimaryDisabled?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  error?: string | null;
  onBack?: () => void;
  footer?: ReactNode;
  step?: number;
  totalSteps?: number;
  showVideoOnMobile?: boolean;
  sideImageSrc?: string;
  sideImageAlt?: string;
  sideImageClassName?: string;
  sideImagePriority?: boolean;
}

export function FormPageLayout({
  children,
  title,
  description,
  onLogoClick,
  onSubmit,
  onPrimaryAction,
  primaryActionText,
  isPrimaryDisabled,
  isLoading,
  loadingText = "Submitting...",
  error,
  onBack,
  footer,
  step,
  totalSteps,
  showVideoOnMobile = false,
  sideImageSrc,
  sideImageAlt = "Portal preview",
  sideImageClassName,
  sideImagePriority = false,
}: FormPageLayoutProps) {
  const showStepIndicator =
    typeof step === "number" && typeof totalSteps === "number";
  const content = (
    <>
      {(title || description || showStepIndicator) && (
        <div className="space-y-4 text-center">
          {showStepIndicator && (
            <div
              className="flex items-center justify-center gap-2"
              aria-label={`Step ${step} of ${totalSteps}`}
            >
              {Array.from({ length: totalSteps }).map((_, index) => {
                const dotIndex = index + 1;
                return (
                  <span
                    key={dotIndex}
                    className={`h-1.5 w-1.5 rounded-full ${
                      dotIndex <= (step ?? 0) ? "bg-gray-900" : "bg-gray-300"
                    }`}
                  />
                );
              })}
            </div>
          )}
          {title &&
            (typeof title === "string" ? (
              <h1 className="text-3xl text-gray-900 font-medium tracking-tight">
                {title}
              </h1>
            ) : (
              title
            ))}
          {description && (
            <p className="text-sm text-gray-900 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      )}
      {children}

      {(primaryActionText || onBack || error) && (
        <div className="space-y-4 w-full">
          {error && <p className="text-red-600 text-sm text-center">{error}</p>}

          <div className="pt-2 space-y-3">
            {primaryActionText && (
              <button
                type={onSubmit ? "submit" : "button"}
                className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-ink px-4 text-sm font-medium text-white transition-colors hover:bg-ink/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/20 disabled:pointer-events-none disabled:opacity-50"
                disabled={isLoading || isPrimaryDisabled}
                onClick={onSubmit ? undefined : onPrimaryAction}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-20"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-80"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8"
                      ></path>
                    </svg>
                    {loadingText}
                  </div>
                ) : (
                  primaryActionText
                )}
              </button>
            )}

            {onBack && (
              <button
                type="button"
                onClick={onBack}
                className="w-full text-sm text-gray-500 hover:text-gray-700 transition-colors"
                disabled={isLoading}
              >
                ← Back
              </button>
            )}
          </div>
          {footer}
        </div>
      )}
    </>
  );

  return (
    <div className="min-h-screen flex">
      {/* Left side - Content */}
      <div className="flex-1 flex flex-col bg-white relative">
        {/* Header with logo */}
        <div className="absolute top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-8">
          <button type="button" aria-label="Go back" onClick={onLogoClick}>
            <Image
              src="/logo.png"
              alt="Overbase logo"
              width={51}
              height={32}
              className="object-contain"
              priority
            />
          </button>
        </div>

        {/* Content Centered */}
        <div className="flex-1 flex flex-col justify-center items-center px-6 md:px-12 lg:px-24">
          <div className="w-full max-w-xs space-y-6">
            {onSubmit ? (
              <form onSubmit={onSubmit} className="space-y-6">
                {content}
              </form>
            ) : (
              content
            )}
          </div>
        </div>
      </div>

      {/* Right side - Video background */}
      <div
        className={`flex-1 relative ${showVideoOnMobile ? "" : "hidden lg:block"}`}
      >
        {sideImageSrc ? (
          <Image
            src={sideImageSrc}
            alt={sideImageAlt}
            fill
            priority={sideImagePriority}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className={`absolute inset-0 h-full w-full object-cover ${
              sideImageClassName ?? ""
            }`}
          />
        ) : (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover filter grayscale"
          >
            <source src="/form.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-surface via-surface/70 to-transparent" />
      </div>
    </div>
  );
}
