"use client";

import { useState } from "react";
import { PreviewFrame } from "../shared";

export function LinearSidebar() {
  const items = ["Inbox", "My Issues", "Views", "Projects", "Teams"];
  const [active, setActive] = useState(items[0]);
  return (
    <PreviewFrame title="Linear-style workspace navigation" variant="solid" className="p-0 overflow-hidden">
      <div className="flex h-full min-h-[260px]">
        <nav className="w-36 shrink-0 border-r border-white/5 bg-white/[0.02] p-3 sm:w-44" aria-label="Workspace navigation">
          <div className="mb-3 text-xs text-ink-soft">Workspace</div>
          {items.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => setActive(item)}
              aria-current={active === item ? "page" : undefined}
              className={`mb-1 flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-xs transition-colors ${
                active === item ? "bg-white/10 text-ink" : "text-ink-soft hover:bg-white/5 hover:text-ink"
              }`}
            >
              <span aria-hidden="true" className={`inline-block h-2 w-2 rounded-sm ${active === item ? "bg-accent-soft" : "bg-ink-mute"}`} />
              {item}
            </button>
          ))}
        </nav>
        <div className="min-w-0 flex-1 p-4">
          <p className="text-[10px] uppercase tracking-wider text-ink-mute">Current view</p>
          <p className="mt-2 text-sm font-medium text-ink">{active}</p>
          <div className="mt-4 space-y-2" aria-hidden="true">
            <div className="h-9 rounded-lg bg-white/5" />
            <div className="h-9 rounded-lg bg-white/[0.035]" />
            <div className="h-9 rounded-lg bg-white/[0.025]" />
          </div>
        </div>
      </div>
    </PreviewFrame>
  );
}
