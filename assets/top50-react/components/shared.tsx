"use client";

import { cn } from "../lib/cn";

/**
 * Shared primitives used by all renderer components.
 * Keeps the preview area consistent across the catalog.
 */

export function PreviewFrame({
  children,
  className,
  variant = "checker",
  title,
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "checker" | "solid" | "aurora" | "grid";
  title?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  const bg =
    variant === "checker"
      ? "bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:14px_14px]"
      : variant === "grid"
      ? "bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px]"
      : variant === "aurora"
      ? "bg-gradient-to-br from-violet-900/30 via-fuchsia-900/20 to-sky-900/30"
      : "bg-bg-card";
  return (
    <div
      {...rest}
      title={title}
      role={rest.role ?? "region"}
      aria-label={rest["aria-label"] ?? title ?? "Component preview"}
      className={cn(
        "relative w-full h-full overflow-hidden rounded-2xl border border-white/5",
        bg,
        className
      )}
    >
      {children}
    </div>
  );
}

export function Pill({
  children,
  tone = "default",
  className,
}: {
  children: React.ReactNode;
  tone?: "default" | "violet" | "green" | "amber" | "red" | "sky";
  className?: string;
}) {
  const tones = {
    default: "bg-white/8 text-ink-soft border-white/10",
    violet: "bg-accent/20 text-accent-glow border-accent/30",
    green: "bg-emerald-500/15 text-emerald-300 border-emerald-400/30",
    amber: "bg-amber-500/15 text-amber-300 border-amber-400/30",
    red: "bg-rose-500/15 text-rose-300 border-rose-400/30",
    sky: "bg-sky-500/15 text-sky-300 border-sky-400/30",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}

export function Avatar({
  initial,
  hue = 220,
  size = 28,
}: {
  initial: string;
  hue?: number;
  size?: number;
}) {
  return (
    <span
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, hsl(${hue} 70% 55%), hsl(${(hue + 40) % 360} 70% 45%))`,
      }}
      className="inline-flex items-center justify-center rounded-full text-[10px] font-semibold text-white/90 shadow-soft"
    >
      {initial}
    </span>
  );
}

// Deterministic pseudo-random so server/client match.
export function makeRng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 0xffffffff;
  };
}