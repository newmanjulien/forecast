"use client";

import { useRef, useState } from "react";

export type InlineEditableNumberProps = {
  value: number;
  display: string;
  onCommit: (value: number) => void;
  unitLabel?: string;
  displayClassName?: string;
  inputClassName?: string;
  ariaLabel?: string;
};

export function InlineEditableNumber({
  value,
  display,
  onCommit,
  unitLabel,
  displayClassName,
  inputClassName,
  ariaLabel,
}: InlineEditableNumberProps) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState("");

  const skipBlurCommitRef = useRef(false);

  const commit = (source: "blur" | "key" = "blur") => {
    if (source === "blur" && skipBlurCommitRef.current) {
      skipBlurCommitRef.current = false;
      return;
    }
    const normalized = draft.trim();
    if (!normalized) {
      cancel();
      return;
    }
    const next = Number(normalized);
    if (!Number.isFinite(next)) {
      cancel();
      return;
    }
    onCommit(next);
    setEditing(false);
  };

  const cancel = () => {
    setEditing(false);
    setDraft("");
  };

  if (editing) {
    return (
      <span className="inline-flex items-center gap-2">
        <input
          type="number"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          aria-label={ariaLabel ?? "Edit value"}
          onBlur={() => commit("blur")}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              skipBlurCommitRef.current = true;
              commit("key");
            }
            if (event.key === "Escape") {
              skipBlurCommitRef.current = true;
              cancel();
            }
          }}
          autoFocus
          className={
            inputClassName ??
            "w-20 rounded-md border border-edge/70 bg-panel px-2 py-1 text-right text-sm text-ink focus:outline-none focus:ring-2 focus:ring-ink/20"
          }
        />
        {unitLabel && <span className="text-xs text-muted">{unitLabel}</span>}
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={() => {
        setDraft(Number.isFinite(value) ? String(value) : "");
        setEditing(true);
      }}
      className={
        displayClassName ??
        "border-0 bg-transparent p-0 text-left text-ink focus:outline-none"
      }
    >
      {display}
    </button>
  );
}
