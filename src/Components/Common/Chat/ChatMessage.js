import React from "react";

const ChatMessage = (props) => {
  return (
    <p style={{ marginBottom: 0 }}>
      {props.message}
      <br />
      <small>{props.timestamp}</small>
    </p>
  );
};

export default ChatMessage;
