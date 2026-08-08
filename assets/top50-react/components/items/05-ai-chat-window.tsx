"use client";

import { useState } from "react";
import { PreviewFrame, Avatar, Pill } from "../shared";

export function AIChatWindow() {
  const [messages, setMessages] = useState([
    { role: "user", text: "Sketch a hero for an AI note app." },
    { role: "ai", text: "Here is a glassy hero with a subtle aurora glow and a clear CTA." },
    { role: "user", text: "Add a code preview." },
    { role: "ai", text: "<Hero title=\"Notes that think\" />" },
  ]);
  const [draft, setDraft] = useState("");
  const send = () => {
    const value = draft.trim();
    if (!value) return;
    setMessages((current) => [...current, { role: "user", text: value }, { role: "ai", text: "I will turn that request into a production-ready component variant." }]);
    setDraft("");
  };
  return (
    <PreviewFrame title="Interactive AI chat window" variant="solid" className="flex flex-col p-4 sm:p-5">
      <div className="mb-3 flex items-center gap-2 text-xs text-ink-soft"><Pill tone="violet">live</Pill><span>AI Chat</span></div>
      <div className="min-h-0 flex-1 space-y-2 overflow-y-auto pr-1" aria-live="polite">{messages.map((message, index) => <div key={`${message.role}-${index}`} className={`flex gap-2 ${message.role === "user" ? "justify-end" : ""}`}>{message.role === "ai" && <Avatar initial="A" hue={280} />}<div className={`max-w-[80%] rounded-2xl px-3 py-2 text-xs ${message.role === "user" ? "bg-accent/30 text-ink" : "border border-white/10 bg-white/5 text-ink-soft"}`}><pre className="whitespace-pre-wrap font-sans">{message.text}</pre></div>{message.role === "user" && <Avatar initial="U" hue={200} />}</div>)}</div>
      <div className="mt-3 flex gap-2"><label className="sr-only" htmlFor="ai-chat-draft">Message</label><input id="ai-chat-draft" value={draft} onChange={(event) => setDraft(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter") send(); }} className="min-w-0 flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-ink outline-none focus:border-accent/50" placeholder="Ask the assistant…" /><button type="button" onClick={send} disabled={!draft.trim()} className="rounded-lg bg-accent px-3 text-xs font-medium text-white disabled:opacity-40">Send</button></div>
    </PreviewFrame>
  );
}
