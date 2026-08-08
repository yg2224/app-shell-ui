"use client";

import { PreviewFrame } from "../shared";

export function AgentWorkflow() {
  const nodes = [{ x: 30, y: 70, label: "Input" }, { x: 120, y: 40, label: "Plan" }, { x: 120, y: 110, label: "Tool" }, { x: 220, y: 70, label: "Reply" }];
  const edges = [[0, 1], [0, 2], [1, 3], [2, 3]];
  return (
    <PreviewFrame title="Agent workflow graph" variant="solid" className="p-5">
      <div className="mb-2 text-xs text-ink-soft">Agent Workflow</div>
      <svg viewBox="0 0 280 160" className="w-full" role="img" aria-label="Workflow from input to planning and tool execution, then reply">{edges.map(([from, to], index) => { const start = nodes[from], end = nodes[to]; return <path key={index} d={`M ${start.x + 40} ${start.y} C ${start.x + 70} ${start.y}, ${end.x} ${end.y}, ${end.x} ${end.y}`} fill="none" stroke="rgba(167,139,250,0.6)" strokeWidth="1.5" />; })}{nodes.map((node) => <g key={node.label}><rect x={node.x} y={node.y - 16} width="80" height="32" rx="8" fill="rgba(167,139,250,0.2)" stroke="#a78bfa" /><text x={node.x + 40} y={node.y + 4} textAnchor="middle" fontSize="11" fill="white">{node.label}</text></g>)}</svg>
    </PreviewFrame>
  );
}
