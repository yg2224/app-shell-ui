"use client";

import { useRef, useState } from "react";
import { PreviewFrame } from "../shared";

export function MagneticButton() {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  return (
    <PreviewFrame title="Magnetic pointer button" variant="solid" className="flex items-center justify-center">
      <button type="button" ref={ref} onPointerMove={(event) => { const rect = ref.current?.getBoundingClientRect(); if (!rect) return; setPosition({ x: (event.clientX - (rect.left + rect.width / 2)) * 0.3, y: (event.clientY - (rect.top + rect.height / 2)) * 0.3 }); }} onPointerLeave={() => setPosition({ x: 0, y: 0 })} onBlur={() => setPosition({ x: 0, y: 0 })} style={{ transform: `translate(${position.x}px, ${position.y}px)` }} className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm text-ink shadow-soft transition-transform hover:bg-white/10">Hover or tap me</button>
    </PreviewFrame>
  );
}
