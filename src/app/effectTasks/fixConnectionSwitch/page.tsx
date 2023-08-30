"use client";

// In this example, the chat service in chat.js exposes two different APIs: createEncryptedConnection and createUnencryptedConnection. The root App component lets the user choose whether to use encryption or not, and then passes down the corresponding API method to the child ChatRoom component as the createConnection prop.

// Notice that initially, the console logs say the connection is not encrypted. Try toggling the checkbox on: nothing will happen. However, if you change the selected room after that, then the chat will reconnect and enable encryption (as you’ll see from the console messages). This is a bug. Fix the bug so that toggling the checkbox also causes the chat to reconnect.

import { useState } from "react";
import ChatRoom from "./ChatRoom.tsx";
import {
  createEncryptedConnection,
  createUnencryptedConnection,
} from "./chat.ts";
import ReturnButton from "@/app/components/ReturnButton.tsx";

export default function App() {
  const [roomId, setRoomId] = useState("general");
  const [isEncrypted, setIsEncrypted] = useState(false);
  return (
    <>
      <label>
        Choose the chat room:{" "}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={isEncrypted}
          onChange={(e) => setIsEncrypted(e.target.checked)}
        />
        Enable encryption
      </label>
      <hr />
      <ChatRoom
        roomId={roomId}
        isEncrypted={isEncrypted}
        createConnection={
          isEncrypted ? createEncryptedConnection : createUnencryptedConnection
        }
      />
      <ReturnButton />
    </>
  );
}
