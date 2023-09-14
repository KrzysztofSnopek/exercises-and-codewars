"use client";

import ReturnButton from "@/app/components/ReturnButton.tsx";
// In this example, the usePointerPosition() Hook tracks the current pointer position. Try moving your cursor or your finger over the preview area and see the red dot follow your movement. Its position is saved in the pos1 variable.

// In fact, there are five (!) different red dots being rendered. You don’t see them because currently they all appear at the same position. This is what you need to fix. What you want to implement instead is a “staggered” movement: each dot should “follow” the previous dot’s path. For example, if you quickly move your cursor, the first dot should follow it immediately, the second dot should follow the first dot with a small delay, the third dot should follow the second dot, and so on.

// You need to implement the useDelayedValue custom Hook. Its current implementation returns the value provided to it. Instead, you want to return the value back from delay milliseconds ago. You might need some state and an Effect to do this.

// After you implement useDelayedValue, you should see the dots move following one another.

import { usePointerPosition } from "./usePointerPosition.ts";

function useDelayedValue(value: any, delay: number) {
  // TODO: Implement this Hook
  return value;
}

export default function Canvas() {
  const pos1 = usePointerPosition();
  const pos2 = useDelayedValue(pos1, 100);
  const pos3 = useDelayedValue(pos2, 200);
  const pos4 = useDelayedValue(pos3, 100);
  const pos5 = useDelayedValue(pos3, 50);
  return (
    <>
      <Dot position={pos1} opacity={1} />
      <Dot position={pos2} opacity={0.8} />
      <Dot position={pos3} opacity={0.6} />
      <Dot position={pos4} opacity={0.4} />
      <Dot position={pos5} opacity={0.2} />
      <ReturnButton />
    </>
  );
}

function Dot({
  position,
  opacity,
}: {
  position: { x: number; y: number };
  opacity: number;
}) {
  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "pink",
        borderRadius: "50%",
        opacity,
        transform: `translate(${position.x}px, ${position.y}px)`,
        pointerEvents: "none",
        left: -20,
        top: -20,
        width: 40,
        height: 40,
      }}
    />
  );
}
