import React, { useEffect } from "react";
//import "./Chatbot.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { saveMessage } from "../_actions/message_actions";
import Message from "./Sections/Message";

function Chatbot({ setUserQuery, getResults }) {
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
    //console.log("message", message);
    if (message.content && message.content.text && message.content.text.text) {
      return (
        <Message i={i} who={message.who} text={message.content.text.text} />
      );
    } else if (message.content && message.content.payload.fields.richContent) {
      return (
        <>
          <div style={{ padding: "1rem" }}>
            <i className="bi bi-robot"></i>
          </div>
          <a
            //href={
            //  message.content.payload.fields.richContent.listValue.values[0]
            //    .listValue.values[0].structValue.fields.link.stringValue
            //}
            onClick={() => {
              getResults();
              setUserQuery(true);
            }}
            class="btn btn-secondary btn-lg "
            tabIndex="-1"
            role="button"
            style={{ marginLeft: "10px", marginBottom: "10px" }}
          >
            Press
          </a>
        </>
      );
    }
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
    <>
      <div class="page-content page-container" id="page-content">
        <div class="">
          <div class="row container justify-content-center">
            <div class="col-md-6">
              <div
                class="card card-bordered"
                style={{
                  height: 400,
                  width: 400,

                  position: "fixed",
                  zIndex: "2000",
                  top: "400px",
                  right: "30px",
                  background: "white",
                }}
              >
                <div class="card-header">
                  <h4 class="card-title">
                    <strong>ChatBot</strong>
                  </h4>{" "}
                </div>
                <div style={{ height: 344, width: "100%", overflow: "auto" }}>
                  {renderMessage(messagesFromRedux)}
                </div>
                <div class="publisher bt-1 border-light">
                  {" "}
                  <i class="avatar avatar-xs bi bi-person" />{" "}
                  <input
                    class="publisher-input"
                    placeholder="Send a message..."
                    onKeyPress={keyPressHandler}
                    type="text"
                  />{" "}
                  <span class="publisher-btn file-group">
                    {" "}
                    <i class="fa fa-paperclip file-browser"></i>{" "}
                    <input type="file" />{" "}
                  </span>{" "}
                  <a class="publisher-btn" href="#" data-abc="true">
                    <i class="fa fa-smile"></i>
                  </a>{" "}
                  <a class="publisher-btn text-info" href="#" data-abc="true">
                    <i class="fa fa-paper-plane"></i>
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chatbot;
