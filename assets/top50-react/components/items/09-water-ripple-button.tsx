"use client";

import { useState } from "react";
import { PreviewFrame } from "../shared";

export function WaterRippleButton() {
  const [ripples, setRipples] = useState<{ x: number; y: number; key: number }[]>([]);
  return (
    <PreviewFrame title="Accessible water ripple button" variant="solid" className="flex items-center justify-center">
      <button type="button" onClick={(event) => { const rect = event.currentTarget.getBoundingClientRect(); setRipples((current) => [...current, { x: event.clientX - rect.left, y: event.clientY - rect.top, key: Date.now() }]); }} className="relative overflow-hidden rounded-xl bg-accent px-6 py-3 text-sm font-medium text-white shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-glow">Click me{ripples.map((ripple) => <span aria-hidden="true" key={ripple.key} onAnimationEnd={() => setRipples((current) => current.filter((item) => item.key !== ripple.key))} className="absolute h-2 w-2 rounded-full bg-white/60" style={{ left: ripple.x - 4, top: ripple.y - 4, animation: "ripple 0.7s ease-out forwards" }} />)}</button>
      <style>{`@keyframes ripple { to { transform: scale(40); opacity: 0; } }`}</style>
    </PreviewFrame>
  );
}
