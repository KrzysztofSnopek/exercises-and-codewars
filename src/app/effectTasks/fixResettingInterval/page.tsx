"use client";

import ReturnButton from "@/app/components/ReturnButton";
import { useState, useEffect } from "react";

// This Effect sets up an interval that ticks every second. You’ve noticed something strange happening: it seems like the interval gets destroyed and re-created every time it ticks. Fix the code so that the interval doesn’t get constantly re-created.

export default function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("✅ Creating an interval");

    const id = setInterval(() => {
      console.log("⏰ Interval tick");
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      console.log("❌ Clearing an interval");
      clearInterval(id);
    };
  }, []);

  return (
    <>
      <h1>Counter: {count}</h1>
      <ReturnButton />
    </>
  );
}
