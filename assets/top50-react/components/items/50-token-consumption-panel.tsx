"use client";

import { PreviewFrame } from "../shared";

export function TokenConsumption() {
  const usage = [
    { model: "GPT-4o", value: 18400, max: 30000, color: "#a78bfa" },
    { model: "Claude", value: 9120, max: 30000, color: "#f472b6" },
    { model: "Embeddings", value: 24000, max: 30000, color: "#22d3ee" },
  ];
  return (
    <PreviewFrame title="Daily token consumption panel" variant="solid" className="p-5">
      <div className="mb-3 text-xs text-ink-soft">Token Usage · Today</div>
      <div className="space-y-3">{usage.map((item) => { const percent = (item.value / item.max) * 100; return <div key={item.model}><div className="flex items-center justify-between text-[11px]"><span className="text-ink-soft">{item.model}</span><span className="text-ink-mute">{item.value.toLocaleString()} / {item.max.toLocaleString()}</span></div><div className="mt-1 h-2 overflow-hidden rounded-full bg-white/5" role="progressbar" aria-label={`${item.model} token usage`} aria-valuemin={0} aria-valuemax={item.max} aria-valuenow={item.value}><div className="h-full rounded-full" style={{ width: `${percent}%`, background: item.color }} /></div></div>; })}</div>
    </PreviewFrame>
  );
}
