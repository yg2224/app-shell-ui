"use client";

import { useState } from "react";
import { PreviewFrame } from "../shared";

export function CommandPalette() {
  const items = [
    { label: "Go to Dashboard", shortcut: "G D" },
    { label: "Open Compare", shortcut: "⌘ K" },
    { label: "Mark as Keep", shortcut: "K" },
    { label: "Next Component", shortcut: "→" },
  ];
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [executed, setExecuted] = useState("");
  const filtered = items.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()));
  const run = (label: string) => setExecuted(label);
  return (
    <PreviewFrame title="Keyboard-first command palette" variant="solid" className="p-0">
      <div className="flex h-full min-h-[260px] flex-col">
        <input
          autoFocus
          value={query}
          onChange={(event) => { setQuery(event.target.value); setActive(0); }}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown") { event.preventDefault(); setActive((value) => Math.min(filtered.length - 1, value + 1)); }
            if (event.key === "ArrowUp") { event.preventDefault(); setActive((value) => Math.max(0, value - 1)); }
            if (event.key === "Enter" && filtered[active]) run(filtered[active].label);
          }}
          aria-label="Search commands"
          aria-activedescendant={filtered[active] ? `command-${active}` : undefined}
          placeholder="Type a command…"
          className="border-b border-white/10 bg-transparent px-4 py-3 text-sm text-ink placeholder:text-ink-mute focus:outline-none"
        />
        <div className="flex-1 p-2" role="listbox" aria-label="Commands">
          {filtered.length > 0 ? filtered.map((item, index) => (
            <button
              type="button"
              id={`command-${index}`}
              role="option"
              aria-selected={active === index}
              key={item.label}
              onMouseEnter={() => setActive(index)}
              onClick={() => run(item.label)}
              className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-xs ${active === index ? "bg-white/10" : "hover:bg-white/5"}`}
            >
              <span className="text-ink">{item.label}</span>
              <span className="rounded border border-white/15 px-1.5 py-0.5 font-mono text-[10px] text-ink-mute">{item.shortcut}</span>
            </button>
          )) : <p className="px-3 py-6 text-center text-xs text-ink-mute">No commands found</p>}
        </div>
        {executed && <p className="border-t border-white/10 px-4 py-2 text-[10px] text-emerald-300" role="status">Executed: {executed}</p>}
      </div>
    </PreviewFrame>
  );
}
