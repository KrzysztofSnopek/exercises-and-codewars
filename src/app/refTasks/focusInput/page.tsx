"use client";

// Make it so that clicking the “Search” button puts focus into the field.

import { useRef } from "react";

export default function Page() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <>
      <nav>
        <button
          onClick={handleClick}
          className="p-2 mb-2 border border-slate-300 text-slate-300 px-2 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        >
          Search
        </button>
      </nav>
      <input placeholder="Looking for something?" ref={inputRef} />
    </>
  );
}
