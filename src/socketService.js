import { io } from "socket.io-client";
const socket = io("https://ow-chat-server.herokuapp.com");
let subscribesFuncs = [];

const init = () => {
  socket.on("connect", function () {
    console.log("connected to chat server!");
  });
  socket.on("disconnect", function () {
    console.log("disconnected from chat server!");
  });

  socket.on("ow/chat", function (msg = {}) {
    msg.id = Date.now();
    subscribesFuncs.forEach((func) => {
      func(msg);
    });
    console.log("message: " + msg);
  });
};

const subscribeMessages = (cb) => {
  subscribesFuncs.push(cb);
};
const unSubscribeMessages = (cb) => {
  const cbIndex = subscribesFuncs.indexOf(cb);
  if (cbIndex !== -1) {
    subscribesFuncs.splice(cbIndex, 1);
  }
};

const sendMessage = (msg) => {
  socket.emit("ow/chat", msg);
};

export default { init, subscribeMessages, sendMessage, unSubscribeMessages };
