"use client";

import { useState } from "react";
import { PreviewFrame } from "../shared";

export function RolesPermissionsMatrix() {
  const roles = ["Admin", "Editor", "Viewer"];
  const capabilities = ["Read", "Write", "Delete", "Invite", "Billing"];
  const [matrix, setMatrix] = useState([[true, true, true, true, true], [true, true, true, false, false], [true, false, false, false, false]]);
  const toggle = (roleIndex: number, capabilityIndex: number) => setMatrix((current) => current.map((row, index) => index === roleIndex ? row.map((value, column) => column === capabilityIndex ? !value : value) : row));
  return (
    <PreviewFrame title="Editable roles and permissions matrix" variant="solid" className="p-4 sm:p-5">
      <div className="mb-3 text-xs text-ink-soft">Permissions Matrix</div>
      <div className="overflow-x-auto rounded-lg border border-white/10">
        <div className="grid min-w-[560px] grid-cols-[1fr_repeat(5,1fr)] bg-white/5 px-2 py-2 text-[10px] uppercase text-ink-mute"><span>Role</span>{capabilities.map((capability) => <span key={capability} className="text-center">{capability}</span>)}</div>
        {roles.map((role, roleIndex) => <div key={role} className="grid min-w-[560px] grid-cols-[1fr_repeat(5,1fr)] items-center border-t border-white/5 px-2 py-2 text-xs"><span className="text-ink-soft">{role}</span>{capabilities.map((capability, capabilityIndex) => <div key={capability} className="flex justify-center"><button type="button" role="switch" aria-checked={matrix[roleIndex][capabilityIndex]} aria-label={`${role}: ${capability}`} onClick={() => toggle(roleIndex, capabilityIndex)} className={`relative h-4 w-7 rounded-full transition-colors ${matrix[roleIndex][capabilityIndex] ? "bg-accent" : "bg-white/10"}`}><span aria-hidden="true" className={`absolute top-0.5 h-3 w-3 rounded-full bg-white transition-all ${matrix[roleIndex][capabilityIndex] ? "left-3.5" : "left-0.5"}`} /></button></div>)}</div>)}
      </div>
    </PreviewFrame>
  );
}
