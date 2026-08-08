"use client";

import { PreviewFrame } from "../shared";

export function SkeletonLoaderSet() {
  const shimmer = "bg-white/10 animate-shimmer bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.05)_100%)] bg-[length:200%_100%]";
  return (
    <PreviewFrame title="Content loading skeleton set" variant="solid" className="p-5 space-y-3" role="status" aria-busy="true">
      <span className="sr-only">Loading content</span>
      <div aria-hidden="true" className="flex items-center gap-3">
        <div className={`h-10 w-10 rounded-full ${shimmer}`} />
        <div className="flex-1 space-y-2"><div className={`h-2.5 w-2/3 rounded ${shimmer}`} /><div className={`h-2 w-1/2 rounded ${shimmer}`} /></div>
      </div>
      <div aria-hidden="true" className={`h-20 w-full rounded ${shimmer}`} />
      <div aria-hidden="true" className="grid grid-cols-3 gap-2">{[0, 1, 2].map((index) => <div key={index} className={`h-10 rounded ${shimmer}`} />)}</div>
    </PreviewFrame>
  );
}
