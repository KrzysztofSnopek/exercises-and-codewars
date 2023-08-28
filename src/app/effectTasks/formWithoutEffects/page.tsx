"use client";

import ReturnButton from "@/app/components/ReturnButton";
import { useState, useEffect } from "react";

// This Form component lets you send a message to a friend. When you submit the form, the showForm state variable is set to false. This triggers an Effect calling sendMessage(message), which sends the message (you can see it in the console). After the message is sent, you see a “Thank you” dialog with an “Open chat” button that lets you get back to the form.

// Your app’s users are sending way too many messages. To make chatting a little bit more difficult, you’ve decided to show the “Thank you” dialog first rather than the form. Change the showForm state variable to initialize to false instead of true. As soon as you make that change, the console will show that an empty message was sent. Something in this logic is wrong!

// What’s the root cause of this problem? And how can you fix it?

export default function Form() {
  const [showForm, setShowForm] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!showForm) {
      sendMessage(message);
    }
  }, [showForm, message]);

  function handleSubmit(e: any) {
    e.preventDefault();
    setShowForm(false);
  }

  if (!showForm) {
    return (
      <>
        <h1>Thanks for using our services!</h1>
        <button
          className="mt-4 p-2 border border-slate-300 text-slate-300 px-2 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          onClick={() => {
            setMessage("");
            setShowForm(true);
          }}
        >
          Open chat
        </button>
      </>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Message"
          className="text-slate-500 mr-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          disabled={message === ""}
          className="border border-slate-300 text-slate-300 px-2 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none cursor-pointer"
        >
          Send
        </button>
      </form>
      <ReturnButton />
    </div>
  );
}

function sendMessage(message: string) {
  console.log("Sending message: " + message);
}
