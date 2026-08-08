"use client";

import { useState } from "react";
import { PreviewFrame } from "../shared";

export function FeatureFlagMatrix() {
  const environments = ["Prod", "Stage", "Dev"];
  const [flags, setFlags] = useState([
    { name: "New Billing", envs: [true, false, false] },
    { name: "AI Search", envs: [true, true, false] },
    { name: "Dark Mode", envs: [true, true, true] },
  ]);
  const toggle = (flagIndex: number, environmentIndex: number) => setFlags((current) => current.map((flag, index) => index === flagIndex ? { ...flag, envs: flag.envs.map((value, envIndex) => envIndex === environmentIndex ? !value : value) } : flag));
  return (
    <PreviewFrame title="Editable feature flag matrix" variant="solid" className="p-4 sm:p-5">
      <div className="mb-3 text-xs text-ink-soft">Feature Flags</div>
      <div className="grid grid-cols-[1.5fr_repeat(3,1fr)] gap-y-2 text-xs"><span />{environments.map((environment) => <span key={environment} className="text-center text-[10px] uppercase text-ink-mute">{environment}</span>)}{flags.flatMap((flag, flagIndex) => [<span key={flag.name} className="text-ink">{flag.name}</span>, ...flag.envs.map((enabled, environmentIndex) => <div key={`${flag.name}-${environmentIndex}`} className="flex justify-center"><button type="button" role="switch" aria-checked={enabled} aria-label={`${flag.name} in ${environments[environmentIndex]}`} onClick={() => toggle(flagIndex, environmentIndex)} className={`relative h-4 w-7 rounded-full transition-colors ${enabled ? "bg-accent" : "bg-white/10"}`}><span aria-hidden="true" className={`absolute top-0.5 h-3 w-3 rounded-full bg-white transition-all ${enabled ? "left-3.5" : "left-0.5"}`} /></button></div>)])}</div>
    </PreviewFrame>
  );
}
