import React, { useEffect, useRef } from "react";
import "../Chatbot.css";
//import soundEffect from "../../assets/soundEffect.mp3";

const Message = (props) => {
  const avatar = props.who == "bot" ? "bi bi-robot avatar" : "";
  const sender = props.who == "bot" ? "" : "media-chat-reverse";

  // function playSound(url) {
  //   const audio = new Audio(url);
  //   if (props.who == "bot") {
  //     audio.play();
  //   }
  // }

  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
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
          key={props.i}
          //style={{ padding: "1rem" }}
          ref={divRef}
          //onLoad={playSound(soundEffect)}
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
          tabIndex="0"
          style={{ left: "0px", width: "0px" }}
        ></div>
      </div>
      <div
        class="ps-scrollbar-y-rail"
        style={{ top: "0px", height: "0px", right: "2px" }}
      >
        <div
          class="ps-scrollbar-y"
          tabIndex="0"
          style={{ top: "0px", height: "2px" }}
        ></div>
      </div>
    </>
  );
};

export default Message;
