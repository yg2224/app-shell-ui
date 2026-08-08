"use client";

import { useState } from "react";
import { PreviewFrame } from "../shared";

export function ModelComparator() {
  const models = [
    { name: "GPT-4o", latency: "1.2s", quality: 9.1, color: "#a78bfa" },
    { name: "Claude", latency: "1.6s", quality: 8.9, color: "#f472b6" },
    { name: "Llama", latency: "0.8s", quality: 8.2, color: "#22d3ee" },
  ];
  const [selected, setSelected] = useState(models[0].name);
  return (
    <PreviewFrame title="Selectable model comparison cards" variant="solid" className="p-4 sm:p-5">
      <div className="mb-3 flex items-center justify-between"><span className="text-xs text-ink-soft">Model Comparator</span><span className="text-[10px] text-ink-mute">Selected: {selected}</span></div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">{models.map((model) => <button type="button" key={model.name} onClick={() => setSelected(model.name)} aria-pressed={selected === model.name} className={`rounded-xl border p-3 text-left transition-colors ${selected === model.name ? "border-accent bg-accent/10" : "border-white/10 bg-white/5 hover:border-white/20"}`}><div className="text-[10px] uppercase text-ink-mute">{model.name}</div><div className="mt-1 text-lg font-semibold" style={{ color: model.color }}>{model.quality}</div><div className="mt-1 flex items-center gap-2 text-[10px] text-ink-soft"><span>Latency</span><span className="text-ink">{model.latency}</span></div></button>)}</div>
    </PreviewFrame>
  );
}
