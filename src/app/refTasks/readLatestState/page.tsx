"use client";

import ReturnButton from "@/app/components/ReturnButton";
import { useState, useRef } from "react";

// Can you think of a way to make the alert show the current input text rather than what it was at the time of the click?

export default function Chat() {
  const [text, setText] = useState("");
  const textRef = useRef(text);

  function handleInputChange(e: any) {
    setText(e.target.value);
    textRef.current = e.target.value;
  }

  function handleSend() {
    setTimeout(() => {
      alert("Sending: " + textRef.current);
    }, 3000);
  }

  return (
    <>
      <input
        className="text-slate-700"
        value={text}
        onChange={handleInputChange}
      />
      <button className="p-2" onClick={handleSend}>
        Send
      </button>
      <ReturnButton />
    </>
  );
}
