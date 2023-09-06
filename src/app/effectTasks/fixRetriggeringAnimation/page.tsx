"use client";

// In this example, when you press “Show”, a welcome message fades in. The animation takes a second. When you press “Remove”, the welcome message immediately disappears. The logic for the fade-in animation is implemented in the animation.js file as plain JavaScript animation loop. You don’t need to change that logic. You can treat it as a third-party library. Your Effect creates an instance of FadeInAnimation for the DOM node, and then calls start(duration) or stop() to control the animation. The duration is controlled by a slider. Adjust the slider and see how the animation changes.

// This code already works, but there is something you want to change. Currently, when you move the slider that controls the duration state variable, it retriggers the animation. Change the behavior so that the Effect does not “react” to the duration variable. When you press “Show”, the Effect should use the current duration on the slider. However, moving the slider itself should not by itself retrigger the animation.

import { useState, useEffect, useRef } from "react";
import { experimental_useEffectEvent as useEffectEvent } from "react";
import { FadeInAnimation } from "./animation.ts";
import ReturnButton from "@/app/components/ReturnButton";

function Welcome({ duration }: { duration: number }) {
  const ref = useRef(null);

  const onAnimation = useEffectEvent((animation: FadeInAnimation) => {
    animation.start(duration);
  });

  useEffect(() => {
    const animation = new FadeInAnimation(ref.current);
    onAnimation(animation);
    return () => {
      animation.stop();
    };
  }, []);

  return (
    <h1
      ref={ref}
      style={{
        opacity: 0,
        color: "white",
        padding: 50,
        textAlign: "center",
        fontSize: 50,
        backgroundImage:
          "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
      }}
    >
      Welcome
    </h1>
  );
}

export default function App() {
  const [duration, setDuration] = useState(1000);
  const [show, setShow] = useState(false);

  return (
    <>
      <label>
        <input
          type="range"
          min="100"
          max="3000"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
        />
        <br />
        Fade in duration: {duration} ms
      </label>
      <button onClick={() => setShow(!show)}>{show ? "Remove" : "Show"}</button>
      <hr />
      {show && <Welcome duration={duration} />}
      <ReturnButton />
    </>
  );
}
