"use client";

import { PreviewFrame } from "../shared";

export function SankeyFlow() {
  const cols = [
    [
      { x: 0, y: 10, h: 30, label: "Ads" },
      { x: 0, y: 50, h: 24, label: "SEO" },
      { x: 0, y: 84, h: 22, label: "Email" },
    ],
    [
      { x: 120, y: 6, h: 22, label: "Visit" },
      { x: 120, y: 36, h: 28, label: "Sign up" },
      { x: 120, y: 70, h: 18, label: "Trial" },
      { x: 120, y: 96, h: 24, label: "Pay" },
    ],
    [
      { x: 240, y: 30, h: 40, label: "Active" },
      { x: 240, y: 80, h: 36, label: "Churn" },
    ],
  ];
  const ribbons = [
    ["0,0", "1,0"],
    ["0,1", "1,1"],
    ["0,2", "1,1"],
    ["1,1", "2,0"],
    ["1,2", "2,0"],
    ["1,3", "2,1"],
    ["1,2", "2,1"],
  ];
  const nodeAt = (c: number, i: number) => {
    const n = cols[c][i];
    return { x: n.x, y: n.y, h: n.h };
  };
  return (
    <PreviewFrame title="Sankey conversion flow diagram" variant="solid" className="p-5">
      <div className="text-xs text-ink-soft mb-2">Sankey · Funnel Flow</div>
      <svg viewBox="0 0 300 140" className="w-full" role="img" aria-label="Traffic sources flowing through visit, sign up, trial, and payment to active or churn outcomes">
        {ribbons.map(([a, b], i) => {
          const [c1, i1] = a.split(",").map(Number);
          const [c2, i2] = b.split(",").map(Number);
          const n1 = nodeAt(c1, i1);
          const n2 = nodeAt(c2, i2);
          const y1 = n1.y + n1.h / 2;
          const y2 = n2.y + n2.h / 2;
          const path = `M ${n1.x + 60} ${y1} C ${n1.x + 90} ${y1}, ${n2.x} ${y2}, ${n2.x} ${y2}`;
          return (
            <path
              key={i}
              d={path}
              fill="none"
              stroke="rgba(167,139,250,0.35)"
              strokeWidth={Math.min(n1.h, n2.h) * 0.6}
            />
          );
        })}
        {cols.flat().map((n, i) => (
          <g key={i}>
            <rect
              x={n.x}
              y={n.y}
              width={60}
              height={n.h}
              rx={4}
              fill="rgba(167,139,250,0.55)"
            />
            <text x={n.x + 6} y={n.y + n.h / 2 + 3} fontSize="8" fill="white">
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </PreviewFrame>
  );
}
