"use client";

// This component uses a state variable and an Effect to display a number that increments every second. Extract this logic into a custom Hook called useCounter. Your goal is to make the Counter component implementation look exactly like this:

// export default function Counter() {
//   const count = useCounter();
//   return <h1>Seconds passed: {count}</h1>;
// }
// You’ll need to write your custom Hook in useCounter.js and import it into the Counter.js file.

import ReturnButton from "@/app/components/ReturnButton";
import useCounter from "./useCounter";

export default function Counter() {
  const count = useCounter();
  return (
    <>
      <h1>Seconds passed: {count}</h1>
      <ReturnButton />
    </>
  );
}
