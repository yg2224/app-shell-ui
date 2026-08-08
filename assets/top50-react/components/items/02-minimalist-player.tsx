"use client";

import { useEffect, useState } from "react";
import { PreviewFrame } from "../shared";

export function MinimalistPlayer() {
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(34);
  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setProgress((value) => (value + 1) % 101), 500);
    return () => clearInterval(id);
  }, [playing]);
  return (
    <PreviewFrame title="Minimalist audio player" variant="solid" className="p-5 flex items-center justify-center">
      <div className="w-72 rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="text-[10px] uppercase text-ink-mute">Now Playing</div>
        <div className="mt-1 text-sm text-ink">Lo-Fi Dreamscape</div>
        <div className="text-[11px] text-ink-soft">Neon Static · 3:42</div>
        <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10" role="progressbar" aria-label="Playback progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}>
          <div className="h-full rounded-full bg-ink transition-[width]" style={{ width: `${progress}%` }} />
        </div>
        <div className="mt-3 flex items-center justify-center gap-5 text-ink-soft">
          <button type="button" onClick={() => setProgress((value) => Math.max(0, value - 10))} aria-label="Rewind 10 seconds" className="rounded-md p-1 hover:text-ink"><span aria-hidden="true">⏮</span></button>
          <button type="button" className="h-9 w-9 rounded-full bg-ink text-bg" onClick={() => setPlaying((value) => !value)} aria-label={playing ? "Pause" : "Play"}><span aria-hidden="true">{playing ? "⏸" : "▶"}</span></button>
          <button type="button" onClick={() => setProgress((value) => Math.min(100, value + 10))} aria-label="Forward 10 seconds" className="rounded-md p-1 hover:text-ink"><span aria-hidden="true">⏭</span></button>
        </div>
      </div>
    </PreviewFrame>
  );
}
