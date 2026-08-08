"use client";

import { PreviewFrame } from "../shared";

export function PricingComparison() {
  const rows = ["Seats", "Projects", "AI quota", "SSO", "Audit log"];
  const tiers = ["Free", "Pro", "Team"];
  const grid = [["1", "5", "Unlimited"], ["1", "20", "Unlimited"], ["100", "10k", "1M"], ["—", "✓", "✓"], ["—", "—", "✓"]];
  return (
    <PreviewFrame title="Responsive pricing comparison table" variant="solid" className="p-4 sm:p-5">
      <div className="mb-3 text-xs text-ink-soft">Plan comparison</div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[420px] text-[11px]"><caption className="sr-only">Features included in Free, Pro, and Team plans</caption><thead><tr className="text-ink-mute"><th scope="col" className="pb-2 text-left font-normal">Feature</th>{tiers.map((tier) => <th scope="col" key={tier} className="pb-2 font-medium text-ink">{tier}</th>)}</tr></thead><tbody>{rows.map((row, rowIndex) => <tr key={row} className="border-t border-white/5"><th scope="row" className="py-1.5 text-left font-normal text-ink-soft">{row}</th>{grid[rowIndex].map((value, columnIndex) => <td key={columnIndex} className="py-1.5 text-center text-ink">{value}</td>)}</tr>)}</tbody></table>
      </div>
    </PreviewFrame>
  );
}
