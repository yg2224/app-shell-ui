"use client";

import { useState } from "react";
import { PreviewFrame, Pill } from "../shared";

export function MonthCalendar() {
  const days = Array.from({ length: 35 }, (_, index) => index - 1);
  const events: Record<number, number> = { 5: 1, 12: 1, 18: 2, 24: 1 };
  const [selectedDay, setSelectedDay] = useState(18);
  return (
    <PreviewFrame title="Interactive month calendar" variant="solid" className="p-4 sm:p-5">
      <div className="mb-2 flex items-center justify-between text-xs"><span className="text-ink-soft">November 2024</span><Pill tone="violet">{events[selectedDay] ?? 0} events on day {selectedDay}</Pill></div>
      <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-ink-mute" aria-hidden="true">{["S", "M", "T", "W", "T", "F", "S"].map((day, index) => <span key={index}>{day}</span>)}</div>
      <div className="mt-1 grid grid-cols-7 gap-1" role="grid" aria-label="November 2024 calendar">
        {days.map((day, index) => day < 1 || day > 30
          ? <span key={`${day}-${index}`} className="aspect-square rounded-md" aria-hidden="true" />
          : <button type="button" role="gridcell" key={day} onClick={() => setSelectedDay(day)} aria-selected={selectedDay === day} aria-label={`November ${day}${events[day] ? `, ${events[day]} events` : ""}`} className={`aspect-square rounded-md border p-1 text-left text-[10px] transition-colors ${selectedDay === day ? "border-accent bg-accent/15 text-ink" : "border-white/5 bg-white/[0.03] text-ink-soft hover:border-white/15"}`}><span>{day}</span>{events[day] && <span aria-hidden="true" className="block text-accent-glow">{"●".repeat(events[day])}</span>}</button>)}
      </div>
    </PreviewFrame>
  );
}
