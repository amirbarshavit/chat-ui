import React from "react";
import { Box } from "@material-ui/core";
import Message from "../Message/Message";
import "./MessagesListBox.css";
const MessagesListBox = ({ messages, currentUserId }) => {
  return (
    <Box height="100%" bgcolor="grey.100">
      <div className="messages-box">
        {messages.map((msg) => {
          return (
            <div key={msg.id}>
              <Message
                message={msg}
                myOwn={msg.userId && currentUserId === msg.userId}
              />
            </div>
          );
        })}
      </div>
    </Box>
  );
};
export default MessagesListBox;
