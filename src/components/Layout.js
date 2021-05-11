import * as React from "react";
import * as styles from "./Layout.module.css";
import "../globalStyle/globalStyle.css";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Navbar />
      <h1>Titolo</h1>
      {children}
    </div>
  );
}
