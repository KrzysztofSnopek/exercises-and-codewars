import { useState, useEffect } from "react";

export default function ChatRoom({
  roomId,
  createConnection,
  isEncrypted,
}: any) {
  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, isEncrypted]);

  return <h1>Welcome to the {roomId} room!</h1>;
}
