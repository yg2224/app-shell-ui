"use client";

import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  Code2,
  Layers3,
  Search,
} from "lucide-react";
import { top50Components } from "../data/top50";

const dimensions = [
  { key: "visual", label: "Visual" },
  { key: "distinctiveness", label: "Distinct" },
  { key: "utility", label: "Utility" },
  { key: "interaction", label: "UX / A11y" },
  { key: "engineering", label: "Engineering" },
] as const;

export function Top50Gallery() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedRank, setSelectedRank] = useState(1);
  const [copied, setCopied] = useState(false);
  const categories = ["All", ...Array.from(new Set(top50Components.map((component) => component.category)))];

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return top50Components.filter((component) =>
      (category === "All" || component.category === category)
      && (!normalized || `${component.name} ${component.exportName} ${component.category}`.toLowerCase().includes(normalized)),
    );
  }, [category, query]);

  const selected = filtered.find((component) => component.rank === selectedRank) ?? filtered[0] ?? top50Components[0];
  const selectedIndex = filtered.findIndex((component) => component.rank === selected.rank);
  const Renderer = selected.Renderer;
  const importCode = `import { ${selected.exportName} } from "@/components";`;

  const move = (direction: -1 | 1) => {
    if (filtered.length === 0) return;
    const nextIndex = (selectedIndex + direction + filtered.length) % filtered.length;
    setSelectedRank(filtered[nextIndex].rank);
  };

  const copyImport = async () => {
    await navigator.clipboard.writeText(importCode);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="min-h-dvh bg-[var(--background)] lg:grid lg:grid-cols-[300px_minmax(0,1fr)]">
      <aside className="border-b border-[var(--line)] bg-[#151714] text-white lg:sticky lg:top-0 lg:h-dvh lg:border-b-0 lg:border-r lg:border-white/5">
        <div className="border-b border-white/10 p-5">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-[11px] bg-[var(--accent)] font-mono text-[12px] font-black text-black">50</span>
            <div>
              <h1 className="text-[14px] font-semibold">UI Top 50</h1>
              <p className="text-[9px] uppercase tracking-[0.16em] text-white/40">Standalone learning gallery</p>
            </div>
          </div>
          <label className="relative mt-5 block">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/35" />
            <span className="sr-only">搜索组件</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="搜索组件或 export"
              className="h-10 w-full rounded-[9px] border border-white/10 bg-white/[0.06] pl-9 pr-3 text-[11px] text-white outline-none placeholder:text-white/30 focus:border-white/25"
            />
          </label>
          <div className="mt-3 flex gap-1.5 overflow-x-auto pb-1 lg:flex-wrap">
            {categories.map((item) => (
              <button
                type="button"
                key={item}
                onClick={() => setCategory(item)}
                aria-pressed={category === item}
                className={`shrink-0 rounded-full px-2.5 py-1.5 text-[9px] font-medium ${category === item ? "bg-white text-black" : "bg-white/[0.06] text-white/55 hover:text-white"}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="max-h-[360px] overflow-y-auto p-2 lg:max-h-[calc(100dvh-202px)]" aria-label="Top 50 组件列表">
          {filtered.map((component) => (
            <button
              type="button"
              key={component.rank}
              onClick={() => setSelectedRank(component.rank)}
              aria-current={selected.rank === component.rank ? "true" : undefined}
              className={`mb-1 grid w-full grid-cols-[32px_1fr_auto] items-center gap-2 rounded-[9px] px-2 py-2.5 text-left transition-colors ${selected.rank === component.rank ? "bg-white/10 text-white" : "text-white/55 hover:bg-white/[0.05] hover:text-white"}`}
            >
              <span className={`grid size-7 place-items-center rounded-[8px] font-mono text-[9px] ${selected.rank === component.rank ? "bg-[var(--accent)] text-black" : "bg-white/[0.06]"}`}>{String(component.rank).padStart(2, "0")}</span>
              <span className="min-w-0"><span className="block truncate text-[11px] font-medium">{component.name}</span><span className="block truncate text-[8px] text-white/35">{component.category}</span></span>
              <span className="font-mono text-[10px] font-semibold">{component.score.toFixed(2)}</span>
            </button>
          ))}
          {filtered.length === 0 && <p className="px-3 py-8 text-center text-[11px] text-white/35">没有匹配的组件</p>}
        </div>
      </aside>

      <main className="min-w-0">
        <header className="border-b border-[var(--line)] bg-[var(--surface)] px-5 py-6 sm:px-8 lg:px-10">
          <div className="mx-auto flex max-w-[1380px] flex-wrap items-end justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="eyebrow">Rank #{selected.rank}</span>
                <span className="text-[var(--line-strong)]">/</span>
                <span className="eyebrow">{selected.category}</span>
              </div>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.055em] sm:text-4xl">{selected.name}</h2>
              <p className="mt-2 max-w-2xl text-[11px] leading-5 text-[var(--muted)]">{selected.description}</p>
            </div>
            <div className="flex items-center gap-2">
              <button type="button" onClick={() => move(-1)} className="grid size-11 place-items-center rounded-[10px] border border-[var(--line)] bg-white" aria-label="上一个组件"><ArrowLeft size={15} /></button>
              <button type="button" onClick={() => move(1)} className="grid size-11 place-items-center rounded-[10px] bg-black text-white" aria-label="下一个组件"><ArrowRight size={15} /></button>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-[1380px] space-y-5 px-5 py-6 sm:px-8 lg:px-10 lg:py-8">
          <section className="overflow-hidden rounded-[18px] border border-[var(--line)] bg-[#0a0a0f] p-2 shadow-[var(--shadow-sm)] sm:p-3" aria-label={`${selected.name} 实时预览`}>
            <div className="h-[456px] min-h-[430px] text-[#e7e7ee] sm:h-[560px] lg:h-[min(66vh,680px)]">
              <Renderer />
            </div>
          </section>

          <section className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_360px]">
            <article className="rounded-[16px] border border-[var(--line)] bg-white p-5 shadow-[var(--shadow-sm)]">
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-[10px] bg-black text-white"><Layers3 size={15} /></span>
                <div><p className="eyebrow">五维评分</p><h3 className="mt-1 text-lg font-semibold tracking-[-0.035em]">Weighted score · {selected.score.toFixed(2)}</h3></div>
              </div>
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-5">
                {dimensions.map((dimension) => {
                  const value = selected.scores[dimension.key];
                  return <div key={dimension.key} className="rounded-[11px] border border-[var(--line)] bg-[var(--surface)] p-3"><div className="flex items-center justify-between gap-2"><span className="text-[9px] font-semibold text-[var(--muted)]">{dimension.label}</span><span className="font-mono text-[11px] font-semibold">{value.toFixed(1)}</span></div><div className="mt-2 h-1.5 overflow-hidden rounded-full bg-black/10"><i className="block h-full rounded-full bg-black" style={{ width: `${value * 10}%` }} /></div></div>;
                })}
              </div>
            </article>

            <article className="rounded-[16px] border border-[var(--line)] bg-white p-5 shadow-[var(--shadow-sm)]">
              <div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-[10px] bg-[var(--accent)]"><Code2 size={15} /></span><div><p className="eyebrow">源码入口</p><h3 className="mt-1 text-sm font-semibold">{selected.exportName}</h3></div></div>
              <code className="mt-4 block overflow-x-auto rounded-[10px] bg-[#171816] p-3 font-mono text-[10px] leading-5 text-white/70">{importCode}</code>
              <p className="mt-3 break-all font-mono text-[9px] leading-4 text-[var(--muted)]">{selected.sourceFile}</p>
              <button type="button" onClick={copyImport} className="mt-4 flex min-h-10 w-full items-center justify-center gap-2 rounded-[10px] border border-[var(--line-strong)] text-[10px] font-semibold">{copied ? <Check size={13} /> : <BookOpen size={13} />}{copied ? "已复制" : "复制 import"}</button>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
}
