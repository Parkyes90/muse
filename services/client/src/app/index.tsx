import React, { FormEvent, useEffect, useState } from "react";

type Message = {
  message: string;
};

function Index() {
  const [socket, setSocket] = useState<null | WebSocket>(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  useEffect(() => {
    const socketInstance = new WebSocket(
      `ws://${window.location.host}/ws/games/test/`
    );
    socketInstance.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log(data);
      setMessages((prev) => [...prev, data]);
    };
    socketInstance.onclose = () => {
      console.log("Socket Closed");
    };
    socketInstance.onopen = () => {
      console.log("Socket Connected");
    };

    setSocket(socketInstance);
  }, []);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    socket?.send(
      JSON.stringify({
        message,
      })
    );
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
      </form>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message.message}</div>
        ))}
      </div>
    </div>
  );
}

export default Index;
