import React from "react";
import "./Chatbot.css";

function Chatbot() {
  const keyPressHandler = (e) => {
    if (e.key === "Enter") {
      if (!e.target.value) {
        return alert("you need to type something first");
      }

      //we will send request to text query route
      //textQuery(e.target.value);

      e.target.value = "";
    }
  };

  return (
    <df-messenger
      intent="WELCOME"
      chat-title="chat-app-test"
      agent-id="6e7c66a8-623e-4db9-b8ee-260b29b6a9ba"
      language-code="en"
    ></df-messenger>
  );
}

export default Chatbot;
