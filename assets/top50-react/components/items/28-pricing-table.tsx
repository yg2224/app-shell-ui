"use client";

import { useState } from "react";
import { PreviewFrame, Pill } from "../shared";

export function PricingTable() {
  const tiers = [
    { name: "Starter", price: "$0", features: ["1 project", "Community support"] },
    { name: "Pro", price: "$48", features: ["Unlimited projects", "Email support", "AI features"], highlight: true },
    { name: "Team", price: "$199", features: ["Everything in Pro", "SSO", "Audit log"] },
  ];
  const [selected, setSelected] = useState("Pro");
  return (
    <PreviewFrame title="Responsive pricing cards" variant="solid" className="p-4 sm:p-5">
      <div className="mb-3 flex items-center justify-between"><span className="text-xs text-ink-soft">Pricing</span><span className="text-[10px] text-ink-mute">Selected: {selected}</span></div>
      <div className="flex snap-x gap-2 overflow-x-auto pb-1 sm:grid sm:grid-cols-3 sm:gap-3 sm:overflow-visible sm:pb-0">{tiers.map((tier) => <article key={tier.name} className={`min-w-[210px] snap-start rounded-xl border p-3 sm:min-w-0 ${tier.highlight ? "border-accent bg-accent/10 shadow-glow" : "border-white/10 bg-white/5"}`}><div className="flex items-center justify-between"><span className="text-sm text-ink">{tier.name}</span>{tier.highlight && <Pill tone="violet">Popular</Pill>}</div><div className="mt-1 text-xl font-semibold text-ink">{tier.price}<span className="text-xs text-ink-mute">/mo</span></div><ul className="mt-2 min-h-16 space-y-1 text-[11px] text-ink-soft">{tier.features.map((feature) => <li key={feature} className="flex items-center gap-1"><span aria-hidden="true" className="text-emerald-300">✓</span>{feature}</li>)}</ul><button type="button" onClick={() => setSelected(tier.name)} disabled={selected === tier.name} className={`mt-3 w-full rounded-lg py-1.5 text-[11px] ${tier.highlight ? "bg-accent text-white" : "border border-white/15 text-ink-soft"} disabled:opacity-50`}>{selected === tier.name ? "Selected" : "Choose plan"}</button></article>)}</div>
    </PreviewFrame>
  );
}
