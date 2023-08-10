"use client";

import { useRef } from "react";

// This button is supposed to toggle between showing “On” and “Off”. However, it always shows “Off”. What is wrong with this code? Fix it.

export default function Toggle() {
  const isOnRef = useRef(false);

  return (
    <button
      onClick={() => {
        isOnRef.current = !isOnRef.current;
      }}
    >
      {isOnRef.current ? "On" : "Off"}
    </button>
  );
}
