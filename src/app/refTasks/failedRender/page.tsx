"use client";

import { useRef, useState } from "react";

// This button is supposed to toggle between showing “On” and “Off”. However, it always shows “Off”. What is wrong with this code? Fix it.

export default function Toggle() {
  const [isOn, setIsOn] = useState<boolean>(true);
  //   const isOnRef = useRef(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return <button onClick={handleClick}>{isOn ? "On" : "Off"}</button>;
}
