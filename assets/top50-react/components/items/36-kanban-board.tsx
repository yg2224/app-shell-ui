"use client";

import { useState } from "react";
import { PreviewFrame } from "../shared";

export function KanbanBoard() {
  const [columns, setColumns] = useState([
    { name: "Todo", items: ["Define rubric", "Pick categories"] },
    { name: "Doing", items: ["Build #01–#20", "Review design"] },
    { name: "Done", items: ["Set up Next.js", "Design system"] },
  ]);
  const moveForward = (columnIndex: number, item: string) => {
    if (columnIndex >= columns.length - 1) return;
    setColumns((current) => current.map((column, index) => index === columnIndex
      ? { ...column, items: column.items.filter((value) => value !== item) }
      : index === columnIndex + 1
        ? { ...column, items: [...column.items, item] }
        : column));
  };
  return (
    <PreviewFrame title="Interactive Kanban board" variant="solid" className="p-4 sm:p-5">
      <div className="mb-3 flex items-center justify-between"><span className="text-xs text-ink-soft">Kanban</span><span className="text-[10px] text-ink-mute">Select a card to advance it</span></div>
      <div className="flex snap-x gap-2 overflow-x-auto pb-1 sm:grid sm:grid-cols-3 sm:gap-3 sm:overflow-visible sm:pb-0">
        {columns.map((column, columnIndex) => (
          <section key={column.name} className="min-w-[220px] snap-start rounded-lg border border-white/10 bg-white/5 p-2 sm:min-w-0" aria-label={`${column.name} tasks`}>
            <div className="mb-2 flex items-center justify-between text-[10px] uppercase text-ink-mute"><span>{column.name}</span><span>{column.items.length}</span></div>
            <div className="space-y-1.5">
              {column.items.map((item) => <button type="button" key={item} onClick={() => moveForward(columnIndex, item)} disabled={columnIndex === columns.length - 1} className="block w-full rounded-md border border-white/5 bg-black/30 px-2 py-1.5 text-left text-[11px] text-ink-soft transition-colors hover:border-white/15 hover:text-ink disabled:cursor-default disabled:hover:border-white/5">{item}</button>)}
              {column.items.length === 0 && <p className="rounded-md border border-dashed border-white/10 px-2 py-3 text-center text-[10px] text-ink-mute">No tasks</p>}
            </div>
          </section>
        ))}
      </div>
    </PreviewFrame>
  );
}
