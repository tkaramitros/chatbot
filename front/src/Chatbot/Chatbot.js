import React, { useEffect } from "react";
import "./Chatbot.css";
import axios from "axios";

function Chatbot() {
  useEffect(() => {
    eventQuery("Welcome");
  }, []);

  const textQuery = async (text) => {
    let conversation = {
      who: "user",
      content: {
        text: {
          text: text,
        },
      },
    };
    console.log(conversation);

    const textQueryVariables = {
      text,
    };

    try {
      const response = await axios.post(
        "/dialogflow/textQuery",
        textQueryVariables
      );
      const content = response.data.fulfillmentMessages[0];

      conversation = {
        who: "bot",
        content: content,
      };
      console.log(conversation);
    } catch (error) {
      conversation = {
        who: "bot",
        content: {
          text: {
            text: "Error just occured, please check the problem.",
          },
        },
      };
    }
    console.log(conversation);
  };

  const eventQuery = async (event) => {
    const eventQueryVariables = {
      event,
    };

    try {
      const response = await axios.post(
        "/dialogflow/eventQuery",
        eventQueryVariables
      );
      const content = response.data.fulfillmentMessages[0];

      let conversation = {
        who: "bot",
        content: content,
      };
      console.log(conversation);
    } catch (error) {
      let conversation = {
        who: "bot",
        content: {
          text: {
            text: "Error just occured, please check the problem.",
          },
        },
      };
    }
  };

  const keyPressHandler = (e) => {
    if (e.key === "Enter") {
      if (!e.target.value) {
        return alert("you need to type something first");
      }

      //we will send request to text query route
      textQuery(e.target.value);

      e.target.value = "";
    }
  };

  return (
    <div
      style={{
        height: 400,
        width: 400,
        border: "3px solid black",
        borderRadius: "7px",
        position: "fixed",
        zIndex: "1000",
        top: "500px",
        right: "30px",
      }}
    >
      <div style={{ height: 344, width: "100%", overflow: "auto" }}></div>
      <input
        style={{
          margin: 0,
          width: "100%",
          height: 50,
          borderRadius: "4px",
          padding: "5px",
          fontSize: "1rem",
        }}
        placeholder="Send a message..."
        onKeyPress={keyPressHandler}
        type="text"
      />
    </div>
  );
}

export default Chatbot;
