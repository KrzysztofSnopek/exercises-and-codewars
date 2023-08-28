"use client";

// In this example, the ChatRoom component connects to the chat room when the component mounts, disconnects when it unmounts, and reconnects when you select a different chat room. This behavior is correct, so you need to keep it working.

// However, there is a problem. Whenever you type into the message box input at the bottom, ChatRoom also reconnects to the chat. (You can notice this by clearing the console and typing into the input.) Fix the issue so that this doesn’t happen.

import { useState, useEffect } from "react";
import { createConnection } from "./chat.ts";
import ReturnButton from "@/app/components/ReturnButton.tsx";

const serverUrl = "https://localhost:1234";

function ChatRoom({ roomId }: { roomId: string }) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  return (
    <>
      <h1>Welcome to the {roomId} room!</h1>
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="text-slate-500"
      />
    </>
  );
}

export default function App() {
  const [roomId, setRoomId] = useState<string>("general");
  return (
    <>
      <label>
        Choose the chat room:{" "}
        <select
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          className="my-2 text-slate-500"
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <ChatRoom roomId={roomId} />
      <ReturnButton />
    </>
  );
}
