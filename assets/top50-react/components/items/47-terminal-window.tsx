"use client";

import { PreviewFrame } from "../shared";

export function TerminalWindow() {
  const lines = [
    "$ fcbs review --id 23",
    "→ Loading component #023",
    "✓ Ready",
    "$ _",
  ];
  return (
    <PreviewFrame title="Terminal command output window" variant="solid" className="p-5">
      <div className="rounded-xl border border-white/10 bg-black/60">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="ml-2 text-[10px] text-ink-mute">fcbs ~ zsh</span>
        </div>
        <pre className="px-3 py-3 font-mono text-[11px] text-emerald-200">
          {lines.map((l, i) => (
            <div key={i}>
              {l}
              {i === lines.length - 1 && <span className="inline-block h-3 w-1.5 align-middle animate-twinkle bg-emerald-200" />}
            </div>
          ))}
        </pre>
      </div>
    </PreviewFrame>
  );
}
