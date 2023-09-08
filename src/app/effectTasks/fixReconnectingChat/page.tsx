"use client";

// In this example, every time you press “Toggle theme”, the chat re-connects. Why does this happen? Fix the mistake so that the chat re-connects only when you edit the Server URL or choose a different chat room.

// Treat chat.js as an external third-party library: you can consult it to check its API, but don’t edit it.

import { useState } from "react";
import ChatRoom from "./ChatRoom.ts";
import ReturnButton from "@/app/components/ReturnButton.tsx";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [roomId, setRoomId] = useState("general");
  const [serverUrl, setServerUrl] = useState("https://localhost:1234");

  const options = {
    serverUrl: serverUrl,
    roomId: roomId,
  };

  return (
    <div className={isDark ? "dark" : "light"}>
      <button onClick={() => setIsDark(!isDark)}>Toggle theme</button>
      <label>
        Server URL:{" "}
        <input
          value={serverUrl}
          onChange={(e) => setServerUrl(e.target.value)}
        />
      </label>
      <label>
        Choose the chat room:{" "}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <ChatRoom options={options} />
      <ReturnButton />
    </div>
  );
}
