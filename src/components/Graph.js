import * as React from "react";
import * as styles from "./Graph.module.css";
import "../globalStyle/globalStyle.css";

export default function Graph(props) {
  return (
    <div>
      <p>{props.source}</p>
    </div>
  );
}
