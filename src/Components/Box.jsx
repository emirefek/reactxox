import React from "react";
import "../Styles/Box.css";

import { Xletter, Oletter } from "./letters";

export default function Box(props) {
  const { content } = props;

  return (
    <div className="box" onClick={props.onClick}>
      {content === "X" ? <Xletter /> : null}
      {content === "O" ? <Oletter /> : null}
    </div>
  );
}
