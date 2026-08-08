"use client";

import { useState } from "react";
import { PreviewFrame } from "../shared";

export function FAQAccordion() {
  const items = [
    { q: "How is the score calculated?", a: "Five dimensions are combined with the published production-readiness weights." },
    { q: "Can I export the data?", a: "Yes. The complete 200-record CSV is available from the audit page." },
    { q: "Is personal state persisted?", a: "Yes. Favorites and compare selections use the fcbs-reviews-v2 local-storage key." },
  ];
  const [open, setOpen] = useState(0);
  return (
    <PreviewFrame title="Accessible FAQ accordion" variant="solid" className="p-5">
      <div className="mb-3 text-xs text-ink-soft">FAQ</div>
      <div className="space-y-2">
        {items.map((item, index) => {
          const expanded = open === index;
          return <section key={item.q} className="rounded-lg border border-white/10 bg-white/5"><h3><button type="button" className="flex w-full items-center justify-between px-3 py-2 text-left text-xs text-ink" onClick={() => setOpen(expanded ? -1 : index)} aria-expanded={expanded} aria-controls={`faq-panel-${index}`}>{item.q}<span aria-hidden="true" className={`transition-transform ${expanded ? "rotate-45" : ""}`}>+</span></button></h3><div id={`faq-panel-${index}`} hidden={!expanded} className="px-3 pb-3 text-[11px] text-ink-soft">{item.a}</div></section>;
        })}
      </div>
    </PreviewFrame>
  );
}
