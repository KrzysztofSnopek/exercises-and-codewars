"use client";

// Currently, your useCounter Hook does two things. It sets up an interval, and it also increments a state variable on every interval tick. Split out the logic that sets up the interval into a separate Hook called useInterval. It should take two arguments: the onTick callback, and the delay. After this change, your useCounter implementation should look like this:

// export function useCounter(delay) {
//   const [count, setCount] = useState(0);
//   useInterval(() => {
//     setCount(c => c + 1);
//   }, delay);
//   return count;
// }

import { useState } from "react";
import { useCounter } from "./useCounter.ts";

export default function Counter() {
  const count = useCounter(1000);
  return <h1>Seconds passed: {count}</h1>;
}
