import React, { useState, useEffect } from "react";
import { Container, Box } from "@material-ui/core";
import SingleInputForm from "./Components/SingleInputForm/SingleInputForm.js";
import MessagesListBox from "./Components/MessagesListBox/MessagesListBox";
import UserDetailsService from "./userDetailsService";

import socketSerivce from "./socketService";
import useLocalStorage from "./Hooks/useLocalStroage";
import "./App.css";

const USER_DETAILS_KEY = "userDetails";

function App() {
  const [messages, setMessages] = useState([]);
  const [userDetails, setUserDetails] = useLocalStorage(USER_DETAILS_KEY, "");

  useEffect(() => {
    socketSerivce.subscribeMessages(updateMessages);
    return () => {
      socketSerivce.unSubscribeMessages(updateMessages);
    };
  }, []);

  const updateMessages = (msg) => {
    setMessages((messages) => [...messages, msg]);
  };

  const onSubmit = (msg) => {
    socketSerivce.sendMessage({ ...userDetails, text: msg });
  };

  const onUserNameSubmit = (name) => {
    const userDetails = UserDetailsService.getUserDetails();
    setUserDetails({ name, ...userDetails });
  };

  return (
    <Container className="app-container">
      <Box height="100%">
        {!userDetails ? (
          <div className="user-name-input">
            <div>Please insert a user name:</div>
            <SingleInputForm onSubmit={onUserNameSubmit} buttonText="submit" />
          </div>
        ) : (
          <>
            <MessagesListBox
              messages={messages}
              currentUserId={userDetails.userId}
            />
            <SingleInputForm onSubmit={onSubmit} />
          </>
        )}
      </Box>
    </Container>
  );
}

export default App;
