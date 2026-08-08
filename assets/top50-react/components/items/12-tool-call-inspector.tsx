"use client";

import { useState } from "react";
import { PreviewFrame, Pill } from "../shared";

export function ToolCallInspector() {
  const calls = [
    { name: "search_docs", args: { query: "FCBS components" }, ok: true },
    { name: "fetch_pricing", args: { id: "pro" }, ok: true },
    { name: "create_ticket", args: { title: "Bug" }, ok: false },
  ];
  const [open, setOpen] = useState(0);
  return (
    <PreviewFrame title="Expandable tool call inspector" variant="solid" className="p-5">
      <div className="mb-2 text-xs text-ink-soft">Tool Call Inspector</div>
      <div className="space-y-2">{calls.map((call, index) => <section key={call.name} className="rounded-lg border border-white/10 bg-white/5"><button type="button" onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index} className="flex w-full items-center justify-between p-2 text-left text-[11px]"><span className="font-mono text-ink">{call.name}</span><Pill tone={call.ok ? "green" : "red"}>{call.ok ? "ok" : "error"}</Pill></button>{open === index && <pre className="overflow-x-auto border-t border-white/5 px-2 py-2 text-[10px] text-ink-mute">{JSON.stringify(call.args, null, 2)}</pre>}</section>)}</div>
    </PreviewFrame>
  );
}
