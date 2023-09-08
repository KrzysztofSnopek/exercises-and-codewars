"use client";

// In this example, every time you press “Toggle theme”, the chat re-connects. Why does this happen? Fix the mistake so that the chat re-connects only when you edit the Server URL or choose a different chat room.

// Treat chat.js as an external third-party library: you can consult it to check its API, but don’t edit it.

import { useState } from "react";
import ChatRoom from "./ChatRoom.tsx";
import ReturnButton from "@/app/components/ReturnButton.tsx";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [roomId, setRoomId] = useState("general");
  const [serverUrl, setServerUrl] = useState("https://localhost:1234");

  return (
    <div className={isDark ? "bg-slate-700" : "bg-slate-900"}>
      <button
        onClick={() => setIsDark(!isDark)}
        className="m-2 p-2 border border-slate-300 text-slate-300 px-2 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
      >
        Toggle theme
      </button>
      <br />
      <label>
        Server URL:{" "}
        <input
          className="text-slate-700 m-2"
          value={serverUrl}
          onChange={(e) => setServerUrl(e.target.value)}
        />
      </label>
      <br />
      <label>
        Choose the chat room:{" "}
        <select
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          className="text-slate-700 m-2"
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <ChatRoom serverUrl={serverUrl} roomId={roomId} />
      <ReturnButton />
    </div>
  );
}
