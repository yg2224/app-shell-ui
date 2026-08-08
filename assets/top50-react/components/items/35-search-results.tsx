"use client";

import { useState } from "react";
import { PreviewFrame, Pill } from "../shared";

export function SearchResults() {
  const results = [
    { title: "Heatmap Calendar", section: "Visualization", icon: "▦" },
    { title: "AI Chat Window", section: "AI", icon: "◫" },
    { title: "Pricing Table", section: "SaaS", icon: "◇" },
  ];
  const [query, setQuery] = useState("");
  const filtered = results.filter((result) => result.title.toLowerCase().includes(query.toLowerCase()));
  return (
    <PreviewFrame title="Filterable component search results" variant="solid" className="p-5">
      <label className="sr-only" htmlFor="component-search-demo">Search components</label>
      <input id="component-search-demo" value={query} onChange={(event) => setQuery(event.target.value)} className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-ink outline-none placeholder:text-ink-mute focus:border-accent/50" placeholder="Search components…" />
      <div className="mt-3 space-y-2" role="list" aria-live="polite">
        {filtered.map((result) => <button type="button" key={result.title} role="listitem" className="flex w-full items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-2 text-left text-xs hover:border-white/20"><span aria-hidden="true" className="grid size-6 place-items-center rounded bg-white/5 text-ink-soft">{result.icon}</span><span className="text-ink">{result.title}</span><Pill tone="violet" className="ml-auto">{result.section}</Pill></button>)}
        {filtered.length === 0 && <p className="rounded-lg border border-dashed border-white/10 p-4 text-center text-xs text-ink-mute">No matching components</p>}
      </div>
    </PreviewFrame>
  );
}
