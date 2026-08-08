"use client";

import { useRef, useState } from "react";
import { PreviewFrame } from "../shared";

export function Tilt3DCard() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  return (
    <PreviewFrame title="Pointer-responsive 3D tilt card" variant="solid" className="flex items-center justify-center p-6">
      <div ref={ref} role="img" aria-label="3D card that tilts toward the pointer" onPointerMove={(event) => { const rect = ref.current?.getBoundingClientRect(); if (!rect) return; setTilt({ x: ((event.clientX - rect.left) / rect.width - 0.5) * 14, y: ((event.clientY - rect.top) / rect.height - 0.5) * -14 }); }} onPointerLeave={() => setTilt({ x: 0, y: 0 })} style={{ transform: `perspective(700px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)` }} className="relative h-40 w-64 rounded-2xl border border-white/10 bg-gradient-to-br from-violet-600/30 to-fuchsia-600/30 p-5 shadow-soft transition-transform"><div className="text-xs uppercase tracking-wide text-ink-soft">Component #049</div><div className="mt-2 text-grad text-xl font-semibold">3D Tilt Card</div><div className="mt-3 text-xs text-ink-soft">Move your pointer across the card.</div><span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-2xl bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.18)_50%,transparent_70%)] opacity-50" /></div>
    </PreviewFrame>
  );
}
