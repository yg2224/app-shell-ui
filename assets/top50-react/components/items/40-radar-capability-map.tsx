"use client";

import { PreviewFrame } from "../shared";

export function RadarCapabilityMap() {
  const cx = 110, cy = 110, r = 80;
  const axes = ["UI", "UX", "Perf", "A11y", "DX", "AI"];
  const dataA = [0.85, 0.7, 0.9, 0.6, 0.8, 0.5];
  const dataB = [0.6, 0.85, 0.65, 0.8, 0.5, 0.75];
  const point = (i: number, v: number) => {
    const a = (Math.PI * 2 * i) / axes.length - Math.PI / 2;
    return [cx + r * v * Math.cos(a), cy + r * v * Math.sin(a)] as const;
  };
  const poly = (data: number[]) =>
    data.map((v, i) => point(i, v).join(",")).join(" ");
  return (
    <PreviewFrame title="Team capability radar chart" variant="solid" className="p-5">
      <div className="text-xs text-ink-soft mb-2 flex items-center justify-between">
        <span>Radar · Capability Map</span>
        <div className="flex gap-2 text-[10px]">
          <span className="text-violet-300">● Team A</span>
          <span className="text-emerald-300">● Team B</span>
        </div>
      </div>
      <svg viewBox="0 0 220 220" className="w-full max-w-[360px] mx-auto" role="img" aria-label="Radar comparison of Team A and Team B across UI, UX, performance, accessibility, developer experience, and AI">
        {[0.25, 0.5, 0.75, 1].map((g, i) => (
          <polygon
            key={i}
            points={axes
              .map((_, k) => {
                const a = (Math.PI * 2 * k) / axes.length - Math.PI / 2;
                return `${cx + r * g * Math.cos(a)},${cy + r * g * Math.sin(a)}`;
              })
              .join(" ")}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
          />
        ))}
        {axes.map((_, i) => {
          const a = (Math.PI * 2 * i) / axes.length - Math.PI / 2;
          return (
            <line
              key={i}
              x1={cx}
              y1={cy}
              x2={cx + r * Math.cos(a)}
              y2={cy + r * Math.sin(a)}
              stroke="rgba(255,255,255,0.06)"
            />
          );
        })}
        <polygon points={poly(dataA)} fill="rgba(167,139,250,0.25)" stroke="#a78bfa" />
        <polygon points={poly(dataB)} fill="rgba(52,211,153,0.25)" stroke="#34d399" />
        {axes.map((label, i) => {
          const a = (Math.PI * 2 * i) / axes.length - Math.PI / 2;
          const x = cx + (r + 14) * Math.cos(a);
          const y = cy + (r + 14) * Math.sin(a);
          return (
            <text
              key={label}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="10"
              fill="#a0a0b0"
            >
              {label}
            </text>
          );
        })}
      </svg>
    </PreviewFrame>
  );
}
