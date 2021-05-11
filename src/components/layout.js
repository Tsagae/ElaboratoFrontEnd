import * as React from "react";
import * as styles from "./layout.module.css";
import "../globalStyle/globalStyle.css";
import Navbar from "./navabar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <h1 className={styles.titolo}>Titolo</h1>
      {children}
    </div>
  );
}
