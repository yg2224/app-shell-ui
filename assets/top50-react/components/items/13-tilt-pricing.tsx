"use client";

import { useRef, useState } from "react";
import { PreviewFrame, Pill } from "../shared";

export function TiltPricing() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [selected, setSelected] = useState(false);
  return (
    <PreviewFrame title="Interactive tilt pricing card" variant="solid" className="p-5 flex items-center justify-center">
      <div
        ref={ref}
        onMouseMove={(event) => {
          const rect = ref.current?.getBoundingClientRect();
          if (!rect) return;
          setTilt({ x: ((event.clientX - rect.left) / rect.width - 0.5) * 10, y: ((event.clientY - rect.top) / rect.height - 0.5) * -10 });
        }}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        style={{ transform: `perspective(900px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) translateZ(8px)` }}
        className="w-72 rounded-2xl border border-accent/40 bg-gradient-to-br from-violet-600/30 to-fuchsia-600/30 p-5 shadow-glow transition-transform"
      >
        <div className="flex items-center justify-between"><Pill tone="violet">Recommended</Pill><span className="text-[10px] text-ink-soft">$48/mo</span></div>
        <div className="mt-3 text-grad text-xl font-semibold">Pro</div>
        <ul className="mt-3 space-y-1 text-[11px] text-ink-soft"><li>✓ All 100 components</li><li>✓ Compare mode</li><li>✓ Local persistence</li></ul>
        <button type="button" onClick={() => setSelected((value) => !value)} aria-pressed={selected} className="mt-4 w-full rounded-lg bg-white/10 py-2 text-[11px] font-medium text-ink hover:bg-white/15">{selected ? "Plan selected" : "Choose Pro"}</button>
      </div>
    </PreviewFrame>
  );
}
