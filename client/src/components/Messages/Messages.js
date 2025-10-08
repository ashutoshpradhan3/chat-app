import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message/Message";

import "./Messages.css";

const Messages = ({ messages, name }) => (
  <ScrollToBottom className="messages">
    {messages.map((msg, i) => <Message key={i} message={msg} name={name} />)}
  </ScrollToBottom>
);

export default Messages;
