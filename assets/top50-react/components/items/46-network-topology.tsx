"use client";

import { PreviewFrame, makeRng } from "../shared";

export function NetworkTopology() {
  const r = makeRng(7);
  const nodes = Array.from({ length: 12 }).map(() => ({
    x: 40 + r() * 200,
    y: 30 + r() * 140,
    size: 6 + r() * 6,
    hue: 200 + r() * 120,
  }));
  const edges = nodes.flatMap((n, i) =>
    nodes.slice(i + 1).map((m, j) =>
      Math.hypot(n.x - m.x, n.y - m.y) < 80 ? [i, i + 1 + j] : null
    )
  ).filter(Boolean) as [number, number][];
  return (
    <PreviewFrame title="Service network topology" variant="solid" className="p-5">
      <div className="text-xs text-ink-soft mb-2">Network · Service Topology</div>
      <svg viewBox="0 0 280 200" className="w-full" role="img" aria-label="Connected service nodes in a network topology">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="rgba(167,139,250,0.35)"
            strokeWidth="1"
          />
        ))}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle
              cx={n.x}
              cy={n.y}
              r={n.size}
              fill={`hsl(${n.hue} 70% 60%)`}
              stroke="rgba(255,255,255,0.4)"
            />
          </g>
        ))}
      </svg>
    </PreviewFrame>
  );
}
