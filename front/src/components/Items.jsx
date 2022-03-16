import React from "react";

const Items = (props) => {
  return (
    <div>
      {props.title}
      <p>{props.description}</p>
    </div>
  );
};

export default Items;
