"use client";

import { useState } from "react";
import { PreviewFrame } from "../shared";

export function CookieBanner() {
  const [visible, setVisible] = useState(true);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  return (
    <PreviewFrame title="Cookie consent banner" variant="solid" className="p-5 flex items-end justify-center">
      {visible ? (
        <section className="w-80 rounded-2xl border border-white/10 bg-bg-soft p-4 shadow-soft" aria-label="Cookie consent">
          <div className="text-xs text-ink">Cookie preferences</div>
          <div className="mt-1 text-[11px] text-ink-soft">Choose whether analytics preferences can be stored across sessions.</div>
          {preferencesOpen && <label className="mt-3 flex items-center justify-between rounded-lg bg-white/5 px-3 py-2 text-[10px] text-ink-soft"><span>Anonymous analytics</span><input type="checkbox" defaultChecked className="accent-violet-500" /></label>}
          <div className="mt-3 flex gap-2">
            <button type="button" onClick={() => setPreferencesOpen((value) => !value)} aria-expanded={preferencesOpen} className="flex-1 rounded-lg border border-white/15 py-1.5 text-[11px] text-ink-soft">Preferences</button>
            <button type="button" onClick={() => setVisible(false)} className="flex-1 rounded-lg bg-accent py-1.5 text-[11px] text-white">Accept</button>
          </div>
        </section>
      ) : (
        <button type="button" onClick={() => setVisible(true)} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] text-ink-soft">Cookie settings saved · Edit</button>
      )}
    </PreviewFrame>
  );
}
