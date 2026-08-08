"use client";

import { useEffect, useState } from "react";
import { PreviewFrame } from "../shared";

export function StreamingMarkdown() {
  const text = "# Hello\n\nThis is **streaming** markdown with `inline code` and a safe link.";
  const [shown, setShown] = useState("");
  const [run, setRun] = useState(0);
  useEffect(() => {
    let index = 0;
    const id = setInterval(() => {
      index = Math.min(text.length, index + 4);
      setShown(text.slice(0, index));
      if (index >= text.length) clearInterval(id);
    }, 40);
    return () => clearInterval(id);
  }, [run, text]);
  const renderInline = (line: string) => line.split(/(\*\*.+?\*\*|`.+?`)/g).filter(Boolean).map((part, index) => part.startsWith("**") && part.endsWith("**") ? <strong key={index}>{part.slice(2, -2)}</strong> : part.startsWith("`") && part.endsWith("`") ? <code key={index} className="rounded bg-white/10 px-1">{part.slice(1, -1)}</code> : <span key={index}>{part}</span>);
  return (
    <PreviewFrame title="Safe streaming Markdown renderer" variant="solid" className="p-5">
      <div className="mb-2 flex items-center justify-between"><span className="text-xs text-ink-soft">Streaming Markdown</span><button type="button" onClick={() => { setShown(""); setRun((value) => value + 1); }} className="text-[10px] text-accent-glow">Replay</button></div>
      <div className="text-xs" aria-live="polite">{shown.split("\n").map((line, index) => line.startsWith("# ") ? <h1 key={index} className="text-base font-semibold text-ink">{line.slice(2)}</h1> : <p key={index} className="min-h-4 text-ink-soft">{renderInline(line)}</p>)}<span aria-hidden="true" className="inline-block h-3 w-1.5 animate-twinkle bg-accent-glow align-middle" /></div>
    </PreviewFrame>
  );
}
