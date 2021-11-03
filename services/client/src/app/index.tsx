import React, { FormEvent, useEffect, useState } from "react";

type Message = {
  message: string;
};

function Index() {
  const [socketState, setSocketState] = useState(false);
  const [socket, setSocket] = useState<null | WebSocket>(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  useEffect(() => {
    const socketInstance = new WebSocket(
      `ws://${window.location.host}/ws/games/test`,
    );
    socketInstance.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages((prev) => [...prev, data]);
    };
    socketInstance.onclose = () => {
      setSocketState(false);
    };
    socketInstance.onopen = () => {
      setSocketState(true);
    };

    setSocket(socketInstance);
  }, []);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    socket?.send(
      JSON.stringify({
        message,
      }),
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
        socket State: {socketState}
        {messages.map((message) => (
          <div key={`${message}`}>{message.message}</div>
        ))}
      </div>
    </div>
  );
}

export default Index;
