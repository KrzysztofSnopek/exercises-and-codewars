"use client";

// This Timer component keeps a count state variable which increases every second. The value by which it’s increasing is stored in the increment state variable, which you can control it with the plus and minus buttons. For example, try pressing the plus button nine times, and notice that the count now increases each second by ten rather than by one.

// There is a small issue with this user interface. You might notice that if you keep pressing the plus or minus buttons faster than once per second, the timer itself seems to pause. It only resumes after a second passes since the last time you’ve pressed either button. Find why this is happening, and fix the issue so that the timer ticks on every second without interruptions.

import ReturnButton from "../../components/ReturnButton";
import { useState, useEffect } from "react";
import { experimental_useEffectEvent as useEffectEvent } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  const onTick = useEffectEvent(() => {
    setCount((c) => c + increment);
  });

  useEffect(() => {
    const id = setInterval(() => {
      onTick();
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

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
          className="m-2 p-1 border border-slate-300 text-slate-300 px-2 rounded
        hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
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
