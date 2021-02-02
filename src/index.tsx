import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {io} from 'socket.io-client';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//connecting to Socket.IO chat server
const socket = io("https://ow-chat-server.herokuapp.com");



socket.on("connect", function() {
    console.log("connected to chat server!");
});
socket.on("disconnect", function() {
    console.log("disconnected from chat server!");
});

