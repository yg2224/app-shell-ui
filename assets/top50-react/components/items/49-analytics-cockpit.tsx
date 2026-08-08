"use client";

import { PreviewFrame, makeRng } from "../shared";

export function AnalyticsCockpit() {
  const random = makeRng(34);
  const data = Array.from({ length: 16 }, () => 30 + random() * 30);
  const max = Math.max(...data);
  return (
    <PreviewFrame title="SaaS analytics cockpit" variant="solid" className="p-5">
      <div className="mb-3 text-xs text-ink-soft">Analytics Cockpit</div>
      <div className="mb-3 grid grid-cols-3 gap-2">{[{ label: "Revenue", value: "$124k" }, { label: "Active", value: "8.2k" }, { label: "NPS", value: "+42" }].map((metric) => <div key={metric.label} className="rounded-lg border border-white/10 bg-white/5 p-2 text-center"><div className="text-[10px] uppercase text-ink-mute">{metric.label}</div><div className="text-sm font-semibold text-ink">{metric.value}</div></div>)}</div>
      <svg viewBox="0 0 240 60" className="w-full" role="img" aria-label="Revenue trend over sixteen periods"><polyline points={data.map((value, index) => `${index * 16},${60 - (value / max) * 50}`).join(" ")} fill="none" stroke="#a78bfa" strokeWidth="1.5" /></svg>
    </PreviewFrame>
  );
}
