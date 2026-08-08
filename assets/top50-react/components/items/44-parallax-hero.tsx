"use client";

import { useState } from "react";
import { PreviewFrame } from "../shared";

export function ParallaxHero() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  return (
    <PreviewFrame title="Pointer-responsive parallax hero" variant="solid" className="relative overflow-hidden p-0" onPointerMove={(event) => { const rect = event.currentTarget.getBoundingClientRect(); setOffset({ x: ((event.clientX - rect.left) / rect.width - 0.5) * 18, y: ((event.clientY - rect.top) / rect.height - 0.5) * 18 }); }} onPointerLeave={() => setOffset({ x: 0, y: 0 })}>
      <div aria-hidden="true" className="absolute -inset-6 transition-transform" style={{ background: "radial-gradient(ellipse at 30% 20%, rgba(167,139,250,0.4), transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(34,211,238,0.3), transparent 60%)", transform: `translate(${offset.x * 0.45}px, ${offset.y * 0.45}px)` }} />
      <div className="relative flex h-full items-center justify-center text-center" style={{ transform: `translate(${offset.x * -0.12}px, ${offset.y * -0.12}px)` }}><div><div className="text-grad text-2xl font-semibold">Parallax</div><div className="text-xs text-ink-soft">Layers respond to pointer depth</div></div></div>
    </PreviewFrame>
  );
}
