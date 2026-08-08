"use client";

import { PreviewFrame } from "../shared";

export function BentoGrid() {
  return (
    <PreviewFrame title="Responsive bento content grid" variant="solid" className="p-5">
      <div className="grid h-44 grid-cols-3 grid-rows-2 gap-2">
        <div className="col-span-2 row-span-2 rounded-xl bg-gradient-to-br from-violet-600/40 to-fuchsia-600/40 p-3 text-xs text-ink">
          <div className="text-grad text-sm font-semibold">Hero</div>
          <div className="text-ink-soft">Large card</div>
        </div>
        <div className="rounded-xl bg-white/5 p-3 text-xs text-ink-soft">Stats</div>
        <div className="rounded-xl bg-white/5 p-3 text-xs text-ink-soft">Chart</div>
      </div>
    </PreviewFrame>
  );
}
