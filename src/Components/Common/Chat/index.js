import React, { useState } from "react";
import ChatMessageHistory from "./ChatMessageHistory";

var MESSAGES = [
  { message: "Hi Josh", timestamp: "Tuesday" },
  { message: "How are you?", timestamp: "Wednesday" },
];

const ChatWindow = (props) => {
  const [messages, setMessages] = useState(MESSAGES);
  const [inputText, setInputText] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    var nextMessages = messages.concat([
      { message: inputText, timestamp: "Thursday" },
    ]);
    setMessages(nextMessages);
    setInputText("");
  }

  function onChange(e) {
    setInputText(e.target.value);
  }

  var windowStyles = {
    maxWidth: "40em",
    margin: "1rem auto",
  };

  var formStyles = {
    display: "flex",
  };

  var inputStyles = {
    flex: "1 auto",
  };

  var btnStyles = {
    backgroundColor: "#00d8ff",
    border: "none",
    color: "#336699",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    fontWeight: "bold",
    fontSize: "0.8em",
  };

  return (
    <div style={windowStyles}>
      <ChatMessageHistory messages={messages} />
      <form style={formStyles} onSubmit={onSubmit}>
        <input
          style={inputStyles}
          type="text"
          onChange={onChange}
          value={inputText}
        />
        <button style={btnStyles}>Send</button>
      </form>
    </div>
  );
};

export default ChatWindow;
