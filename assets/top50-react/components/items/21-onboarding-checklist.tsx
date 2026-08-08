"use client";

import { useState } from "react";
import { PreviewFrame } from "../shared";

export function OnboardingChecklist() {
  const labels = ["Verify email", "Connect data source", "Invite team", "Launch first agent"];
  const [completed, setCompleted] = useState([true, true, false, false]);
  const done = completed.filter(Boolean).length;
  const percent = (done / labels.length) * 100;
  return (
    <PreviewFrame title="Interactive onboarding checklist" variant="solid" className="p-5">
      <div className="mb-3 flex items-center justify-between text-xs text-ink-soft"><span>Onboarding</span><span className="text-ink-mute">{done}/{labels.length}</span></div>
      <div className="relative mx-auto mb-3 h-20 w-20"><svg viewBox="0 0 36 36" className="h-20 w-20 -rotate-90" role="img" aria-label={`${percent.toFixed(0)} percent complete`}><circle cx="18" cy="18" r="15" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" /><circle cx="18" cy="18" r="15" fill="none" stroke="#a78bfa" strokeWidth="3" strokeDasharray={`${percent} 100`} strokeLinecap="round" /></svg><span className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-ink">{percent.toFixed(0)}%</span></div>
      <div className="space-y-1">{labels.map((label, index) => <label key={label} className="flex cursor-pointer items-center gap-2 text-xs"><input type="checkbox" checked={completed[index]} onChange={() => setCompleted((current) => current.map((value, itemIndex) => itemIndex === index ? !value : value))} className="size-4 accent-violet-500" /><span className={completed[index] ? "text-ink-soft line-through" : "text-ink"}>{label}</span></label>)}</div>
    </PreviewFrame>
  );
}
