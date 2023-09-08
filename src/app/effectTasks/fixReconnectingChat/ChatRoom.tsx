import { useEffect } from "react";
import { createConnection } from "./chat.ts";

export default function ChatRoom({
  options,
}: {
  options: { serverUrl: string; roomId: string };
}) {
  useEffect(() => {
    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, [options]);

  return <h1>Welcome to the {options.roomId} room!</h1>;
}
