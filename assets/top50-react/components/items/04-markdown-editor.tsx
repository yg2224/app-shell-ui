"use client";

import { useState } from "react";
import { PreviewFrame } from "../shared";

export function MarkdownEditor() {
  const [src, setSrc] = useState("# Hello\n\n**Bold** and *italic*");
  const renderInline = (line: string) => line.split(/(\*\*.+?\*\*|\*.+?\*)/g).filter(Boolean).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    if (part.startsWith("*") && part.endsWith("*")) return <em key={`${part}-${index}`}>{part.slice(1, -1)}</em>;
    return <span key={`${part}-${index}`}>{part}</span>;
  });
  return (
    <PreviewFrame title="Safe split-pane Markdown editor" variant="solid" className="p-0">
      <div className="grid h-full min-h-[260px] grid-cols-1 divide-y divide-white/5 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
        <label className="flex min-h-0 flex-col">
          <span className="border-b border-white/5 px-3 py-2 text-[9px] uppercase tracking-wider text-ink-mute">Markdown</span>
          <textarea aria-label="Markdown source" value={src} onChange={(event) => setSrc(event.target.value)} className="min-h-32 flex-1 resize-none bg-transparent p-3 font-mono text-[11px] text-ink-soft focus:outline-none" />
        </label>
        <div className="min-h-32 p-3 text-xs" aria-label="Rendered Markdown preview" aria-live="polite">
          {src.split("\n").map((line, index) => line.startsWith("# ")
            ? <h1 key={index} className="text-sm font-semibold text-ink">{line.slice(2)}</h1>
            : <p key={index} className="min-h-4 text-ink-soft">{renderInline(line)}</p>)}
        </div>
      </div>
    </PreviewFrame>
  );
}
