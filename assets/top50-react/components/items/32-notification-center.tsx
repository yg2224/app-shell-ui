"use client";

import { useState } from "react";
import { PreviewFrame } from "../shared";

export function NotificationCenter() {
  const initial = [
    { id: 1, group: "Today", icon: "🚀", text: "Component #042 shipped", when: "2m" },
    { id: 2, group: "Today", icon: "💬", text: "Reviewer commented on #031", when: "1h" },
    { id: 3, group: "Earlier", icon: "🏷", text: "Tag added: glassmorphism", when: "1d" },
    { id: 4, group: "Earlier", icon: "⭐", text: "Reached Top 10", when: "3d" },
  ];
  const [readIds, setReadIds] = useState<number[]>([]);
  const groups = ["Today", "Earlier"];
  return (
    <PreviewFrame title="Notification center with read state" variant="solid" className="p-0">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-xs"><span className="text-ink-soft">Notifications · {initial.length - readIds.length} unread</span><button type="button" onClick={() => setReadIds(initial.map((item) => item.id))} disabled={readIds.length === initial.length} className="text-accent-glow disabled:text-ink-mute">Mark all read</button></div>
      <div className="space-y-3 p-4">
        {groups.map((group) => <section key={group} aria-labelledby={`notification-${group}`}><h3 id={`notification-${group}`} className="mb-1 text-[10px] uppercase text-ink-mute">{group}</h3><div className="space-y-1.5">{initial.filter((item) => item.group === group).map((item) => {
          const read = readIds.includes(item.id);
          return <button type="button" key={item.id} onClick={() => setReadIds((current) => current.includes(item.id) ? current.filter((id) => id !== item.id) : [...current, item.id])} aria-pressed={read} className={`flex w-full items-center gap-2 rounded-lg border p-2 text-left text-[11px] transition-opacity ${read ? "border-white/5 bg-white/[0.015] opacity-55" : "border-white/10 bg-white/[0.04]"}`}><span aria-hidden="true" className="text-lg">{item.icon}</span><span className="flex-1 text-ink">{item.text}</span><span className="text-ink-mute">{item.when}</span></button>;
        })}</div></section>)}
      </div>
    </PreviewFrame>
  );
}
