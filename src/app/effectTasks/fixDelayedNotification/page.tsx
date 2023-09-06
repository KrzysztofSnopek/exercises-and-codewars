"use client";

// When you join a chat room, this component shows a notification. However, it doesn’t show the notification immediately. Instead, the notification is artificially delayed by two seconds so that the user has a chance to look around the UI.

// This almost works, but there is a bug. Try changing the dropdown from “general” to “travel” and then to “music” very quickly. If you do it fast enough, you will see two notifications (as expected!) but they will both say “Welcome to music”.

// Fix it so that when you switch from “general” to “travel” and then to “music” very quickly, you see two notifications, the first one being “Welcome to travel” and the second one being “Welcome to music”. (For an additional challenge, assuming you’ve already made the notifications show the correct rooms, change the code so that only the latter notification is displayed.)

import ReturnButton from "../../components/ReturnButton.tsx";
import { useState, useEffect } from "react";
import { experimental_useEffectEvent as useEffectEvent } from "react";
import { createConnection } from "./chat.ts";
import { showNotification } from "./notifications.ts";

const serverUrl = "https://localhost:1234";

function ChatRoom({ roomId, theme }: { roomId: string; theme: string }) {
  const onConnected = useEffectEvent((roomId: string) => {
    showNotification("Welcome to " + roomId, theme);
  });

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.on("connected", () => {
      setTimeout(() => {
        onConnected(roomId);
      }, 2000);
    });
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  return <h1>Welcome to the {roomId} room!</h1>;
}

export default function App() {
  const [roomId, setRoomId] = useState("general");
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <label>
        Choose the chat room:{" "}
        <select
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          className="text-slate-700"
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <br />
      <label>
        Use dark theme
        <input
          className="m-2"
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
      </label>
      <hr />
      <ChatRoom roomId={roomId} theme={isDark ? "dark" : "light"} />
      <ReturnButton />
    </>
  );
}
