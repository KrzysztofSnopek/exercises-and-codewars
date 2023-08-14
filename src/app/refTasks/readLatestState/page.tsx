"use client";

import ReturnButton from "@/app/components/ReturnButton";
import { useState, useRef } from "react";

// Can you think of a way to make the alert show the current input text rather than what it was at the time of the click?

export default function Chat() {
  const [text, setText] = useState("");

  function handleSend() {
    setTimeout(() => {
      alert("Sending: " + text);
    }, 3000);
  }

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button className="p-2" onClick={handleSend}>
        Send
      </button>
      <ReturnButton />
    </>
  );
}
