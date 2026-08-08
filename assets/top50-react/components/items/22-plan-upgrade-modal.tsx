"use client";

import { useState } from "react";
import { PreviewFrame } from "../shared";

export function PlanUpgradeModal() {
  const tiers = [
    { name: "Free", price: "$0", cta: "Current" },
    { name: "Pro", price: "$48", cta: "Upgrade", highlight: true },
    { name: "Team", price: "$199", cta: "Contact" },
  ];
  const [selected, setSelected] = useState("Free");
  return (
    <PreviewFrame title="Plan upgrade selector" variant="solid" className="p-4 sm:p-5">
      <div className="mb-3 flex items-center justify-between"><span className="text-xs text-ink-soft">Choose your plan</span><span className="text-[10px] text-ink-mute">Selected: {selected}</span></div>
      <div className="flex snap-x gap-2 overflow-x-auto pb-1 sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0">{tiers.map((tier) => <article key={tier.name} className={`min-w-[190px] snap-start rounded-xl border p-3 sm:min-w-0 ${tier.highlight ? "border-accent bg-accent/10 shadow-glow" : "border-white/10 bg-white/5"}`}><div className="text-[10px] uppercase text-ink-mute">{tier.name}</div><div className="mt-1 text-lg font-semibold text-ink">{tier.price}</div><button type="button" onClick={() => setSelected(tier.name)} disabled={selected === tier.name} className={`mt-2 w-full rounded-lg py-1.5 text-xs ${tier.highlight ? "bg-accent text-white shadow-glow" : "border border-white/15 text-ink-soft"} disabled:cursor-default disabled:opacity-50`}>{selected === tier.name ? "Selected" : tier.cta}</button></article>)}</div>
    </PreviewFrame>
  );
}
