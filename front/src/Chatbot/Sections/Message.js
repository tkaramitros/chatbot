import React, { useEffect, useRef } from "react";
import "../Chatbot.css";

const Message = (props) => {
  const avatar = props.who == "bot" ? "bi bi-robot avatar" : "";
  const sender = props.who == "bot" ? "" : "media-chat-reverse";

  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  //const current = new Date();
  //const date = `${current.getHours()}:${current.getMinutes() + 1}`;
  var time = new Date();
  const date = time.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return (
    <>
      <div
        class="ps-container ps-theme-default ps-active-y"
        id="chat-content"
        style={{
          overflowY: "scroll !important",
          height: "400px !important",
        }}
      >
        <div
          className={`media media-chat ${sender}`}
          key={props.key}
          //style={{ padding: "1rem" }}
          ref={divRef}
        >
          <i className={avatar}></i>

          <div className="media-body">
            <p>{props.text}</p>
            <p class="meta">{/* <time datetime="2022">{date}</time> */}</p>
          </div>
        </div>
      </div>

      <div class="ps-scrollbar-x-rail" style={{ left: "0px", bottom: "0px" }}>
        <div
          class="ps-scrollbar-x"
          tabindex="0"
          style={{ left: "0px", width: "0px" }}
        ></div>
      </div>
      <div
        class="ps-scrollbar-y-rail"
        style={{ top: "0px", height: "0px", right: "2px" }}
      >
        <div
          class="ps-scrollbar-y"
          tabindex="0"
          style={{ top: "0px", height: "2px" }}
        ></div>
      </div>
    </>
  );
};

export default Message;
