"use client";

// This Timer component keeps a count state variable which increases every second. The value by which it’s increasing is stored in the increment state variable. You can control the increment variable with the plus and minus buttons.

// However, no matter how many times you click the plus button, the counter is still incremented by one every second. What’s wrong with this code? Why is increment always equal to 1 inside the Effect’s code? Find the mistake and fix it.

import ReturnButton from "../../components/ReturnButton";
import { useState, useEffect } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + increment);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [increment]);

  return (
    <>
      <h1>
        Counter: {count}
        <button
          className="m-2 p-1 border border-slate-300 text-slate-300 px-2 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </h1>
      <hr />
      <p>
        Every second, increment by:
        <br />
        <button
          className="m-2 p-1 border border-slate-300 text-slate-300 px-2 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          disabled={increment === 0}
          onClick={() => {
            setIncrement((i) => i - 1);
          }}
        >
          –
        </button>
        <b>{increment}</b>
        <button
          className="m-2 p-1 border border-slate-300 text-slate-300 px-2 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          onClick={() => {
            setIncrement((i) => i + 1);
          }}
        >
          +
        </button>
      </p>
      <ReturnButton />
    </>
  );
}
