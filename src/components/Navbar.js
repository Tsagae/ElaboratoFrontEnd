import { Link } from "gatsby";
import * as React from "react";
import * as styles from "./Navbar.module.css";
import "../globalStyle/globalStyle.css";

export default function Navbar({ children }) {
  return (
    <div className={styles.container}>
      <header>
        <ul className={styles.linkList}>
          <li className={styles.linkListItem}>
            <Link to="/">
              <div className={styles.navBtn}>
                <h4>Home</h4>
              </div>
            </Link>
            <Link to="/globalData">
              <div className={styles.navBtn}>
                <h4>Global Data</h4>
              </div>
            </Link>
            <Link to="/games">
              <div className={styles.navBtn}>
                <h4>Games</h4>
              </div>
            </Link>
          </li>
        </ul>
      </header>
    </div >
  );
}
