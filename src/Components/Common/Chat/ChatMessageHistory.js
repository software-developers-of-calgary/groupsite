import React from "react";
import ChatMessage from "./ChatMessage";

const ChatWindow = (props) => {
  var createMessage = function (message, index) {
    var liStyles = {
      backgroundColor: index % 2 === 1 ? "#ddd" : "#efefef",
      padding: "1rem",
      borderBottom: "1px solid #ddd",
    };

    return (
      <li style={liStyles}>
        <ChatMessage message={message.message} timestamp={message.timestamp} />
      </li>
    );
  };

  var ulStyles = {
    listStyle: "none",
    margin: 0,
    padding: 0,
  };

  return <ul style={ulStyles}>{props.messages.map(createMessage)}</ul>;
};

export default ChatWindow;
