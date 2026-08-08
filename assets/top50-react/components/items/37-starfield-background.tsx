"use client";

import { PreviewFrame, makeRng } from "../shared";

export function StarfieldBackground() {
  const random = makeRng(47);
  const stars = Array.from({ length: 90 }, () => ({ x: random() * 100, y: random() * 100, size: random() * 1.6 + 0.3, delay: random() * 2 }));
  return (
    <PreviewFrame title="Animated starfield background" variant="solid" className="relative bg-[radial-gradient(ellipse_at_30%_20%,rgba(124,58,237,0.35),transparent_60%),radial-gradient(ellipse_at_70%_80%,rgba(34,211,238,0.25),transparent_60%)] p-0">
      <div aria-hidden="true" className="absolute inset-0">{stars.map((star, index) => <span key={index} className="absolute animate-twinkle rounded-full bg-white" style={{ left: `${star.x}%`, top: `${star.y}%`, width: star.size, height: star.size, animationDelay: `${star.delay}s` }} />)}</div>
      <div className="absolute inset-0 flex items-center justify-center text-center"><div><div className="text-grad text-2xl font-semibold">FCBS · Universe</div><div className="mt-1 text-xs text-ink-soft">50 curated components</div></div></div>
    </PreviewFrame>
  );
}
