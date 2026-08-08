"use client";

import { PreviewFrame, makeRng } from "../shared";

export function MetricsDashboard() {
  const spark = (seed: number) => {
    const r = makeRng(seed);
    const pts: number[] = [];
    let v = 50;
    for (let i = 0; i < 14; i++) {
      v += (r() - 0.5) * 10;
      pts.push(v);
    }
    const min = Math.min(...pts), max = Math.max(...pts);
    const norm = pts.map((p) => ((p - min) / (max - min || 1)) * 24);
    return norm.map((n, i) => `${i * 4},${24 - n}`).join(" ");
  };
  const kpis = [
    { label: "MRR", value: "$48.2k", delta: "+8.4%", seed: 11 },
    { label: "Active", value: "12,830", delta: "+2.1%", seed: 22 },
    { label: "Churn", value: "1.6%", delta: "-0.3%", seed: 33 },
  ];
  return (
    <PreviewFrame title="KPI metrics dashboard" variant="solid" className="p-5">
      <div className="text-xs text-ink-soft mb-3">Dashboard · KPI Overview</div>
      <div className="grid grid-cols-3 gap-3">
        {kpis.map((k) => (
          <div key={k.label} className="rounded-xl border border-white/10 bg-white/5 p-3">
            <div className="text-[10px] uppercase text-ink-mute">{k.label}</div>
            <div className="text-lg font-semibold text-ink">{k.value}</div>
            <div className="text-[10px] text-emerald-300">{k.delta}</div>
            <svg viewBox="0 0 56 24" className="mt-1 h-6 w-full" role="img" aria-label={`${k.label} trend sparkline`}>
              <polyline points={spark(k.seed)} fill="none" stroke="#a78bfa" strokeWidth="1.5" />
            </svg>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3">
        <div className="flex items-center justify-between text-xs">
          <span className="text-ink">Revenue by Plan</span>
          <span className="text-ink-mute">Last 30d</span>
        </div>
        <div className="mt-2 flex h-2 overflow-hidden rounded-full bg-white/10" role="img" aria-label="Revenue by plan: 42 percent Starter, 28 percent Pro, 18 percent Team, 12 percent Enterprise">
          <div className="h-full w-[42%] bg-violet-500" />
          <div className="h-full w-[28%] bg-fuchsia-500" />
          <div className="h-full w-[18%] bg-sky-500" />
          <div className="h-full w-[12%] bg-emerald-500" />
        </div>
      </div>
    </PreviewFrame>
  );
}
