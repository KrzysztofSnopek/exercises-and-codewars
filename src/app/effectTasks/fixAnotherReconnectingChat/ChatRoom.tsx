import { useState, useEffect } from "react";
import { experimental_useEffectEvent as useEffectEvent } from "react";

interface ChatRoomProps {
  roomId: string;
  createConnection: () => any;
  onMessage: (msg: string) => void;
}

export default function ChatRoom({
  roomId,
  createConnection,
  onMessage,
}: ChatRoomProps) {
  useEffect(() => {
    const connection = createConnection();
    connection.on("message", (msg: string) => onMessage(msg));
    connection.connect();
    return () => connection.disconnect();
  }, [createConnection, onMessage]);

  return <h1>Welcome to the {roomId} room!</h1>;
}
