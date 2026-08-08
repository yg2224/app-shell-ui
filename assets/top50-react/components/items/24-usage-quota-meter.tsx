"use client";

import { useState } from "react";
import { PreviewFrame, Pill } from "../shared";

export function UsageQuotaMeter() {
  const [limit, setLimit] = useState(100000);
  const used = 84210;
  const percent = Math.round((used / limit) * 100);
  return (
    <PreviewFrame title="API quota usage meter" variant="solid" className="p-5">
      <div className="mb-3 text-xs text-ink-soft">API Quota</div>
      <div className="mb-1 flex items-center justify-between text-[11px]"><span className="text-ink-soft">{used.toLocaleString()} / {limit.toLocaleString()} requests</span><Pill tone={percent >= 80 ? "amber" : "green"}>{percent >= 80 ? "Near limit" : "Healthy"}</Pill></div>
      <div className="h-3 overflow-hidden rounded-full bg-white/5" role="progressbar" aria-label="API quota used" aria-valuemin={0} aria-valuemax={limit} aria-valuenow={used}><div className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-amber-400 to-rose-500 transition-[width]" style={{ width: `${percent}%` }} /></div>
      <button type="button" onClick={() => setLimit((value) => value === 100000 ? 250000 : 100000)} className="mt-3 w-full rounded-lg border border-white/15 py-1.5 text-xs text-ink-soft">{limit === 100000 ? "Upgrade plan" : "Use standard plan"} →</button>
    </PreviewFrame>
  );
}
