import React from "react";
import "./Message.css";
const Message = ({ message, myOwn }) => {
  return (
    <div key={message.text} className={`msg-box ${myOwn ? "mine" : ""}`}>
      <img src={message.avatar} width="30px" />
      <div className="msg-username-text">
        <b>{message.name}:</b>
        {message.text}
      </div>
    </div>
  );
};
export default Message;
