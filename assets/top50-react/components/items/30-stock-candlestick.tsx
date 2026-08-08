"use client";

import { PreviewFrame, makeRng } from "../shared";

export function StockCandlestick() {
  const r = makeRng(6);
  const candles = Array.from({ length: 18 }).map((_, i) => {
    const open = 50 + r() * 30;
    const close = open + (r() - 0.5) * 10;
    const high = Math.max(open, close) + r() * 4;
    const low = Math.min(open, close) - r() * 4;
    return { open, close, high, low, x: i * 14 + 8 };
  });
  const max = Math.max(...candles.map((c) => c.high));
  const min = Math.min(...candles.map((c) => c.low));
  const y = (v: number) => 120 - ((v - min) / (max - min || 1)) * 100;
  return (
    <PreviewFrame title="OHLC candlestick chart" variant="solid" className="p-5">
      <div className="text-xs text-ink-soft mb-2 flex items-center justify-between">
        <span>Stock · OHLC</span>
        <span className="text-[10px] text-ink-mute">1D · ACME</span>
      </div>
      <svg viewBox="0 0 270 130" className="w-full" role="img" aria-label="ACME one-day candlestick price chart">
        {candles.map((c, i) => (
          <g key={i}>
            <line x1={c.x} y1={y(c.high)} x2={c.x} y2={y(c.low)} stroke="rgba(255,255,255,0.4)" />
            <rect
              x={c.x - 4}
              y={y(Math.max(c.open, c.close))}
              width={8}
              height={Math.max(2, Math.abs(y(c.open) - y(c.close)))}
              fill={c.close >= c.open ? "#34d399" : "#f87171"}
            />
          </g>
        ))}
      </svg>
    </PreviewFrame>
  );
}
