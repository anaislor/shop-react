import React from "react";

function Pictures(props) {
  return (
    <div className="list-group-item">
      <img src={props.url} alt="img" />
      <button onClick={props.onClick}>+</button>
      {props.minus ? <button onClick={props.remove}>-</button> : ""}
      <br />
      {props.title}
    </div>
  );
}

export default Pictures;
