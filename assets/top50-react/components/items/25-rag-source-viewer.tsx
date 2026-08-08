"use client";

import { useState } from "react";
import { PreviewFrame, Pill } from "../shared";

export function RAGSourceViewer() {
  const sources = [
    { title: "Onboarding Guide", score: 0.91, snippet: "Steps to activate your workspace and invite collaborators." },
    { title: "Billing FAQ", score: 0.78, snippet: "Refunds are processed within five business days." },
    { title: "API Limits", score: 0.66, snippet: "Rate limits vary by plan tier and request class." },
  ];
  const [selected, setSelected] = useState(sources[0].title);
  return (
    <PreviewFrame title="Selectable RAG citation sources" variant="solid" className="p-5">
      <div className="mb-3 text-xs text-ink-soft">RAG Sources</div>
      <div className="space-y-2">{sources.map((source) => <button type="button" key={source.title} onClick={() => setSelected(source.title)} aria-pressed={selected === source.title} className={`block w-full rounded-lg border p-2 text-left ${selected === source.title ? "border-accent bg-accent/10" : "border-white/10 bg-white/5 hover:border-white/20"}`}><span className="flex items-center justify-between text-[11px]"><span className="text-ink">{source.title}</span><Pill tone="violet">{(source.score * 100).toFixed(0)}%</Pill></span><span className="mt-1 block text-[10px] text-ink-soft">{source.snippet}</span></button>)}</div>
    </PreviewFrame>
  );
}
