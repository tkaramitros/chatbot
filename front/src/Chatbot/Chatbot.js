import React, { useEffect } from "react";
import "./Chatbot.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { saveMessage } from "../_actions/message_actions";
import Message from "./Sections/Message";

function Chatbot() {
  const dispatch = useDispatch();
  const messagesFromRedux = useSelector((state) => state.message.messages);

  useEffect(() => {
    eventQuery("Welcome");
  }, []);

  const textQuery = async (text) => {
    //  First  Need to  take care of the message I sent
    let conversation = {
      who: "user",
      content: {
        text: {
          text: text,
        },
      },
    };

    dispatch(saveMessage(conversation));
    // console.log('text I sent', conversation)

    // We need to take care of the message Chatbot sent
    const textQueryVariables = {
      text,
    };
    try {
      //I will send request to the textQuery ROUTE
      const response = await axios.post(
        "/dialogflow/textQuery",
        textQueryVariables
      );

      for (let content of response.data.fulfillmentMessages) {
        conversation = {
          who: "bot",
          content: content,
        };

        dispatch(saveMessage(conversation));
      }
    } catch (error) {
      conversation = {
        who: "bot",
        content: {
          text: {
            text: " Error just occured, please check the problem",
          },
        },
      };

      dispatch(saveMessage(conversation));
    }
  };

  const eventQuery = async (event) => {
    // We need to take care of the message Chatbot sent
    const eventQueryVariables = {
      event,
    };
    try {
      //I will send request to the textQuery ROUTE
      const response = await axios.post(
        "/dialogflow/eventQuery",
        eventQueryVariables
      );
      for (let content of response.data.fulfillmentMessages) {
        let conversation = {
          who: "bot",
          content: content,
        };

        dispatch(saveMessage(conversation));
      }
    } catch (error) {
      let conversation = {
        who: "bot",
        content: {
          text: {
            text: " Error just occured, please check the problem",
          },
        },
      };
      dispatch(saveMessage(conversation));
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

  const renderOneMessage = (message, i) => {
    console.log("message", message);

    return (
      <Message key={i} who={message.who} text={message.content.text.text} />
    );
  };

  const renderMessage = (returnMessages) => {
    if (returnMessages) {
      return returnMessages.map((message, i) => {
        return renderOneMessage(message, i);
      });
    } else {
      return null;
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
        background: "white",
      }}
    >
      <div style={{ height: 344, width: "100%", overflow: "auto" }}>
        {renderMessage(messagesFromRedux)}
      </div>
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
