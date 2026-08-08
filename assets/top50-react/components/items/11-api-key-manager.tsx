"use client";

import { useState } from "react";
import { PreviewFrame, Pill } from "../shared";

export function APIKeyManager() {
  const initialKeys = [
    { label: "Production", secret: "sk_live_•••••82af", scopes: ["read", "write"], last: "2m" },
    { label: "Staging", secret: "sk_test_•••••91cd", scopes: ["read"], last: "1h" },
    { label: "Mobile", secret: "sk_live_•••••44be", scopes: ["read"], last: "3d" },
  ];
  const [keys, setKeys] = useState(initialKeys);
  return (
    <PreviewFrame title="API key management list" variant="solid" className="p-5">
      <div className="mb-3 flex items-center justify-between"><span className="text-xs text-ink-soft">API Keys</span><span className="text-[10px] text-ink-mute">{keys.length} active</span></div>
      <div className="space-y-2">{keys.map((key) => <div key={key.label} className="rounded-lg border border-white/10 bg-white/5 p-2"><div className="flex items-center justify-between text-[11px]"><span className="text-ink">{key.label}</span><button type="button" onClick={() => setKeys((current) => current.filter((item) => item.label !== key.label))} aria-label={`Revoke ${key.label} API key`} className="text-ink-mute hover:text-rose-300">Revoke</button></div><div className="font-mono text-[10px] text-ink-mute">{key.secret}</div><div className="mt-1 flex gap-1">{key.scopes.map((scope) => <Pill key={scope} tone="violet">{scope}</Pill>)}<span className="ml-auto text-[10px] text-ink-mute">last {key.last}</span></div></div>)}{keys.length === 0 && <p className="rounded-lg border border-dashed border-white/10 p-4 text-center text-xs text-ink-mute">No active API keys</p>}</div>
    </PreviewFrame>
  );
}
