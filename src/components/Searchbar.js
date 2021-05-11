import { Link } from "gatsby";
import * as React from "react";
import * as styles from "./Searchbar.module.css";
import "../globalStyle/globalStyle.css";

export default function Searchbar({ children }) {
  return (
    <div className={styles.container}>
      <form>
        <input type="search" className={styles.bar}></input>
      </form>
    </div>
  );
}
