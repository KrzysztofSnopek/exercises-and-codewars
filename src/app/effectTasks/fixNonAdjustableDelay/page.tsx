"use client";

// In this example, you can customize the interval delay. It’s stored in a delay state variable which is updated by two buttons. However, even if you press the “plus 100 ms” button until the delay is 1000 milliseconds (that is, a second), you’ll notice that the timer still increments very fast (every 100 ms). It’s as if your changes to the delay are ignored. Find and fix the bug.

import ReturnButton from "../../components/ReturnButton";
import { useState, useEffect } from "react";
import { experimental_useEffectEvent as useEffectEvent } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);
  const [delay, setDelay] = useState(100);

  const onTick = useEffectEvent(() => {
    setCount((c) => c + increment);
  });

  useEffect(() => {
    const id = setInterval(() => {
      onTick();
    }, delay);
    return () => {
      clearInterval(id);
    };
  }, [delay]);

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
        Increment by:
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
      <p>
        Increment delay:
        <button
          className="m-2 p-1 border border-slate-300 text-slate-300 px-2 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          disabled={delay === 100}
          onClick={() => {
            setDelay((d) => d - 100);
          }}
        >
          –100 ms
        </button>
        <b>{delay} ms</b>
        <button
          className="m-2 p-1 border border-slate-300 text-slate-300 px-2 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          onClick={() => {
            setDelay((d) => d + 100);
          }}
        >
          +100 ms
        </button>
      </p>
      <ReturnButton />
    </>
  );
}
