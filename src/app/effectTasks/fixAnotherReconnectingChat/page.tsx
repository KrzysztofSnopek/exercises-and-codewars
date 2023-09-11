"use client";

// This example connects to the chat either with or without encryption. Toggle the checkbox and notice the different messages in the console when the encryption is on and off. Try changing the room. Then, try toggling the theme. When you’re connected to a chat room, you will receive new messages every few seconds. Verify that their color matches the theme you’ve picked.

// In this example, the chat re-connects every time you try to change the theme. Fix this. After the fix, changing the theme should not re-connect the chat, but toggling encryption settings or changing the room should re-connect.

// Don’t change any code in chat.js. Other than that, you can change any code as long as it results in the same behavior. For example, you may find it helpful to change which props are being passed down.

import { useState } from "react";
import ChatRoom from "./ChatRoom.tsx";
import {
  createEncryptedConnection,
  createUnencryptedConnection,
} from "./chat.ts";
import { showNotification } from "./notifications.ts";
import ReturnButton from "@/app/components/ReturnButton.tsx";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [roomId, setRoomId] = useState("general");
  const [isEncrypted, setIsEncrypted] = useState(false);

  return (
    <>
      <label>
        <input
          className="m-2"
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Use dark theme
      </label>
      <br />
      <label>
        <input
          className="m-2"
          type="checkbox"
          checked={isEncrypted}
          onChange={(e) => setIsEncrypted(e.target.checked)}
        />
        Enable encryption
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
      <ChatRoom
        roomId={roomId}
        onMessage={(msg: string) => {
          showNotification("New message: " + msg, isDark ? "dark" : "light");
        }}
        isEncrypted={isEncrypted}
      />
      <ReturnButton />
    </>
  );
}
