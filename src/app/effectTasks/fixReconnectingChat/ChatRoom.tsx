import { useEffect } from "react";
import { createConnection } from "./chat.ts";

export default function ChatRoom({
  serverUrl,
  roomId,
}: {
  serverUrl: string;
  roomId: string;
}) {
  useEffect(() => {
    const options = {
      serverUrl: serverUrl,
      roomId: roomId,
    };

    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, [serverUrl, roomId]);

  return <h1>Welcome to the {roomId} room!</h1>;
}
