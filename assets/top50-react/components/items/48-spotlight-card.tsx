"use client";

import { useRef, useState } from "react";
import { PreviewFrame } from "../shared";

export function SpotlightCard() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  return (
    <PreviewFrame title="Cursor-responsive spotlight card" variant="solid" className="p-5 flex items-center justify-center">
      <div
        ref={ref}
        role="img"
        aria-label="Spotlight card with a glow that follows pointer movement"
        onMouseMove={(event) => {
          const rect = ref.current?.getBoundingClientRect();
          if (!rect) return;
          setPos({ x: ((event.clientX - rect.left) / rect.width) * 100, y: ((event.clientY - rect.top) / rect.height) * 100 });
        }}
        onMouseLeave={() => setPos({ x: 50, y: 50 })}
        className="relative w-72 overflow-hidden rounded-2xl border border-white/10 bg-bg-soft p-5"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-50" style={{ background: `radial-gradient(160px circle at ${pos.x}% ${pos.y}%, rgba(167,139,250,0.5), transparent 60%)` }} />
        <div className="relative">
          <div className="text-[10px] uppercase text-ink-mute">Component #092</div>
          <div className="mt-1 text-grad text-lg font-semibold">Spotlight</div>
          <p className="mt-1 text-xs text-ink-soft">Border glow follows your cursor.</p>
        </div>
      </div>
    </PreviewFrame>
  );
}
