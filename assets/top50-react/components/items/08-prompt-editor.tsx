"use client";

import { useState } from "react";
import { PreviewFrame, Pill } from "../shared";

export function PromptEditor() {
  const [blocks, setBlocks] = useState([
    { tag: "system", text: "You are a helpful design critic." },
    { tag: "context", text: "Product: AI Notes · Audience: designers" },
    { tag: "user", text: "Suggest a hero section layout." },
  ]);
  const tokens = Math.ceil(blocks.reduce((total, block) => total + block.text.length, 0) / 4);
  return (
    <PreviewFrame title="Structured prompt editor" variant="solid" className="p-5">
      <div className="mb-2 flex items-center justify-between text-xs text-ink-soft"><span>Prompt Editor</span><Pill tone="violet">{tokens} tokens</Pill></div>
      <div className="space-y-2">{blocks.map((block, index) => <label key={`${block.tag}-${index}`} className="block rounded-lg border border-white/10 bg-white/5 p-2"><span className="mb-1 flex items-center gap-2"><Pill tone="violet">{block.tag}</Pill><span className="text-[10px] text-ink-mute">{`{{${block.tag}}}`}</span></span><textarea aria-label={`${block.tag} prompt block`} value={block.text} onChange={(event) => setBlocks((current) => current.map((item, itemIndex) => itemIndex === index ? { ...item, text: event.target.value } : item))} rows={1} className="w-full resize-none bg-transparent text-xs text-ink outline-none" /></label>)}<button type="button" onClick={() => setBlocks((current) => [...current, { tag: "user", text: "New instruction" }])} className="w-full rounded-lg border border-dashed border-white/15 py-2 text-xs text-ink-mute hover:border-white/25 hover:text-ink">+ Add block</button></div>
    </PreviewFrame>
  );
}
