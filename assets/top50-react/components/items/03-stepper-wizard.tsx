"use client";

import { useState } from "react";
import { PreviewFrame } from "../shared";

export function StepperWizard() {
  const steps = [
    { label: "Basics", content: "Choose the component name and category." },
    { label: "Style", content: "Apply spacing, color, and typography tokens." },
    { label: "Review", content: "Verify accessibility and production readiness." },
  ];
  const [active, setActive] = useState(0);
  return (
    <PreviewFrame title="Accessible three-step wizard" variant="solid" className="p-5">
      <ol className="flex items-center gap-2" aria-label="Setup progress">
        {steps.map((step, index) => <li key={step.label} className="flex min-w-0 flex-1 items-center gap-2"><span aria-current={active === index ? "step" : undefined} className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] ${index <= active ? "bg-accent text-white" : "bg-white/10 text-ink-mute"}`}>{index + 1}</span><span className={`truncate text-xs ${index <= active ? "text-ink" : "text-ink-mute"}`}>{step.label}</span>{index < steps.length - 1 && <span aria-hidden="true" className="h-px flex-1 bg-white/10" />}</li>)}
      </ol>
      <div className="mt-4 rounded-lg border border-white/10 bg-white/5 p-3 text-xs text-ink-soft" aria-live="polite"><strong className="block text-ink">{steps[active].label}</strong><span className="mt-1 block">{steps[active].content}</span></div>
      <div className="mt-3 flex justify-between"><button type="button" disabled={active === 0} className="rounded-lg border border-white/15 px-3 py-1 text-xs text-ink-soft disabled:opacity-35" onClick={() => setActive((value) => Math.max(0, value - 1))}>Back</button><button type="button" disabled={active === steps.length - 1} className="rounded-lg bg-accent px-3 py-1 text-xs text-white disabled:opacity-35" onClick={() => setActive((value) => Math.min(steps.length - 1, value + 1))}>Next</button></div>
    </PreviewFrame>
  );
}
