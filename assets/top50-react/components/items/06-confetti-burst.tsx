"use client";

import { useState, type CSSProperties } from "react";
import { PreviewFrame, makeRng } from "../shared";

export function ConfettiBurst() {
  const [burst, setBurst] = useState(0);
  const random = makeRng(52 + burst);
  const pieces = Array.from({ length: 40 }, () => ({ x: 50 + (random() - 0.5) * 6, y: 50, vx: (random() - 0.5) * 18, vy: -10 - random() * 6, color: ["#a78bfa", "#f472b6", "#22d3ee", "#34d399", "#fbbf24"][Math.floor(random() * 5)], rotate: random() * 360 }));
  return (
    <PreviewFrame title="Confetti celebration button" variant="solid" className="relative overflow-hidden p-0">
      <button type="button" onClick={() => setBurst((value) => value + 1)} className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-accent px-4 py-2 text-xs font-medium text-white shadow-glow">Celebrate</button>
      <span className="sr-only" aria-live="polite">{burst > 0 ? `Celebration ${burst}` : "Ready to celebrate"}</span>
      <div aria-hidden="true">{pieces.map((piece, index) => <span key={`${burst}-${index}`} className="absolute h-2 w-2 rounded-sm" style={{ left: `${piece.x}%`, top: `${piece.y}%`, background: piece.color, transform: `rotate(${piece.rotate}deg)`, animation: "confetti 1.2s ease-out forwards", "--vx": `${piece.vx * 4}px`, "--vy": `${piece.vy * 4}px` } as CSSProperties} />)}</div>
      <style>{`@keyframes confetti { to { transform: translate(var(--vx), var(--vy)) rotate(720deg); opacity: 0; } }`}</style>
    </PreviewFrame>
  );
}
