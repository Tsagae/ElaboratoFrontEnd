import * as React from "react";
import * as styles from "./Layout.module.css";
import "../globalStyle/globalStyle.css";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar></Navbar>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>EsportWatcher</h1>
        </div>
        {children}
      </div>
    </div>
  );
}
