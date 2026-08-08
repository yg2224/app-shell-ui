"use client";

import { useState } from "react";
import { PreviewFrame } from "../shared";

export function SoftPastelForm() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <PreviewFrame title="Soft pastel email signup form" variant="solid" className="p-5 flex items-center justify-center">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
        className="w-72 rounded-2xl bg-rose-100 p-5 text-rose-900"
      >
        <div className="text-sm font-semibold">{submitted ? "You are on the list" : "Hello there"}</div>
        <div className="mt-1 text-xs opacity-80">{submitted ? "A confirmation was sent to your inbox." : "Sign up to keep scoring components."}</div>
        <label htmlFor="pastel-email" className="sr-only">Email address</label>
        <input id="pastel-email" type="email" autoComplete="email" required disabled={submitted} className="mt-3 w-full rounded-full border border-rose-200 bg-white/80 px-3 py-2 text-xs outline-none placeholder:text-rose-400 focus:border-rose-400 disabled:opacity-60" placeholder="name@studio.com" />
        <button type="submit" disabled={submitted} className="mt-3 w-full rounded-full bg-rose-500 py-2 text-xs font-medium text-white shadow disabled:cursor-default disabled:bg-rose-300">{submitted ? "Subscribed" : "Continue"}</button>
      </form>
    </PreviewFrame>
  );
}
