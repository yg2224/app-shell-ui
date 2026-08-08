"use client";

import { useState } from "react";
import { PreviewFrame, Avatar } from "../shared";

export function CommentThread() {
  const comments = [
    { id: 1, who: "Ada", text: "Love the gradient.", hue: 280, reply: true },
    { id: 2, who: "Linus", text: "Could we add dark/light?", hue: 200, reply: false },
  ];
  const [liked, setLiked] = useState<number[]>([]);
  const [replying, setReplying] = useState<number | null>(null);
  return (
    <PreviewFrame title="Interactive comment thread" variant="solid" className="p-5">
      <div className="mb-3 text-xs text-ink-soft">Comments</div>
      <div className="space-y-3">
        {comments.map((comment) => <article key={comment.id} className="flex gap-2"><Avatar initial={comment.who[0]} hue={comment.hue} /><div className="min-w-0 flex-1"><div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs"><span className="text-ink">{comment.who}: </span><span className="text-ink-soft">{comment.text}</span></div><div className="ml-2 mt-1 flex gap-2 text-[10px] text-ink-mute"><button type="button" onClick={() => setLiked((current) => current.includes(comment.id) ? current.filter((id) => id !== comment.id) : [...current, comment.id])} aria-pressed={liked.includes(comment.id)} className="hover:text-ink">{liked.includes(comment.id) ? "Liked" : "Like"}</button><button type="button" onClick={() => setReplying(replying === comment.id ? null : comment.id)} aria-expanded={replying === comment.id} className="hover:text-ink">Reply</button><span>· 5m</span></div>{comment.reply && <div className="ml-6 mt-2 flex gap-2"><Avatar initial="G" hue={160} /><div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-ink-soft">Grace: +1, agree</div></div>}{replying === comment.id && <div className="ml-6 mt-2 flex gap-2"><input aria-label={`Reply to ${comment.who}`} autoFocus className="min-w-0 flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-ink outline-none" placeholder="Write a reply…" /><button type="button" onClick={() => setReplying(null)} className="rounded-lg bg-accent px-3 text-[10px] text-white">Send</button></div>}</div></article>)}
      </div>
    </PreviewFrame>
  );
}
