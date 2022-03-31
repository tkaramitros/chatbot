import React from "react";

const Message = (props) => {
  const avatar = props.who == "bot" ? "bi bi-robot" : "bi bi-person";

  return (
    <div>
      <div key={props.key} style={{ padding: "1rem" }}>
        <i className={avatar}></i>
        <span> {props.who}</span>
        <br />
        <span>{props.text}</span>
      </div>
    </div>
  );
};

export default Message;
