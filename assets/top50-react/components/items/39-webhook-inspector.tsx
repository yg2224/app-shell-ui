"use client";

import { useState } from "react";
import { PreviewFrame, Pill } from "../shared";

export function WebhookInspector() {
  const items = [
    { id: 1, url: "/hooks/billing", status: 200, attempts: 1 },
    { id: 2, url: "/hooks/billing", status: 500, attempts: 3 },
    { id: 3, url: "/hooks/usage", status: 200, attempts: 1 },
  ];
  const [replayed, setReplayed] = useState<number | null>(null);
  return (
    <PreviewFrame title="Webhook event inspector" variant="solid" className="p-5">
      <div className="mb-3 text-xs text-ink-soft">Webhook Inspector</div>
      <div className="space-y-2">{items.map((item) => <div key={item.id} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-2 text-[11px]"><Pill tone={item.status === 200 ? "green" : "red"}>{replayed === item.id ? 202 : item.status}</Pill><span className="flex-1 truncate font-mono text-ink-soft">{item.url}</span><span className="text-ink-mute">{item.attempts}×</span><button type="button" onClick={() => setReplayed(item.id)} className="text-accent-glow">{replayed === item.id ? "Queued" : "Replay"}</button></div>)}</div>
    </PreviewFrame>
  );
}
