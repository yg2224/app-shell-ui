"use client";

import { PreviewFrame } from "../shared";

export function AuroraCodeBlock() {
  const code = `export function weightedScore(s) {
  return s.visual * 0.25 + s.distinctive * 0.10 +
         s.utility * 0.25 + s.interaction * 0.15 +
         s.engineering * 0.25;
}`;
  return (
    <PreviewFrame title="Syntax-highlighted weighted score example" variant="aurora" className="p-5">
      <figure className="rounded-xl border border-white/10 bg-black/40 p-4 font-mono text-[11px] text-emerald-200">
        <pre className="overflow-x-auto whitespace-pre-wrap"><code>{code}</code></pre>
        <figcaption className="mt-2 border-t border-white/10 pt-2 text-ink-mute">{code.split("\n").length} lines · TypeScript</figcaption>
      </figure>
    </PreviewFrame>
  );
}
