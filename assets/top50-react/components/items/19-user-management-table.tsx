"use client";

import { useState } from "react";
import { PreviewFrame, Avatar, Pill } from "../shared";

export function UserManagementTable() {
  const users = [
    { name: "Ada Lovelace", role: "Admin", status: "active", hue: 280 },
    { name: "Linus Torvalds", role: "Owner", status: "active", hue: 200 },
    { name: "Grace Hopper", role: "Editor", status: "pending", hue: 320 },
    { name: "Alan Turing", role: "Viewer", status: "active", hue: 160 },
  ];
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <PreviewFrame title="Responsive user management table" variant="solid" className="p-4 sm:p-5">
      <div className="mb-3 flex items-center justify-between"><span className="text-xs text-ink-soft">Users</span><span className="text-[10px] text-ink-mute">{users.length} members</span></div>
      <div className="overflow-x-auto rounded-lg border border-white/10">
        <table className="w-full min-w-[560px] text-xs"><caption className="sr-only">Workspace users, roles, and account status</caption><thead className="bg-white/5 text-[10px] uppercase text-ink-mute"><tr><th scope="col" className="px-3 py-2 text-left font-normal">Name</th><th scope="col" className="px-3 py-2 text-left font-normal">Role</th><th scope="col" className="px-3 py-2 text-left font-normal">Status</th><th scope="col" className="px-3 py-2 text-right font-normal">Actions</th></tr></thead><tbody>{users.map((user) => <tr key={user.name} className={`border-t border-white/5 ${selected === user.name ? "bg-white/[0.045]" : ""}`}><th scope="row" className="px-3 py-2 text-left font-normal"><span className="flex items-center gap-2"><Avatar initial={user.name.split(" ").map((name) => name[0]).join("")} hue={user.hue} /><span className="text-ink">{user.name}</span></span></th><td className="px-3 py-2 text-ink-soft">{user.role}</td><td className="px-3 py-2"><Pill tone={user.status === "active" ? "green" : "amber"}>{user.status}</Pill></td><td className="px-3 py-2 text-right"><button type="button" onClick={() => setSelected(selected === user.name ? null : user.name)} aria-label={`Open actions for ${user.name}`} aria-expanded={selected === user.name} className="rounded-md px-2 py-1 text-ink-mute hover:bg-white/5 hover:text-ink">•••</button></td></tr>)}</tbody></table>
      </div>
      {selected && <p className="mt-2 text-[10px] text-accent-glow" role="status">Actions opened for {selected}</p>}
    </PreviewFrame>
  );
}
