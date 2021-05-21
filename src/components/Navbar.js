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
            <div>
              <Link to="/">
                <h4>Home</h4>
              </Link>
            </div>
            <div>
              <Link to="/globalData">
                <h4>Global Data</h4>
              </Link>
            </div>
            <div><Link to="/games">
              <h4>Games</h4>
            </Link></div>
          </li>
        </ul>
      </header>
    </div>
  );
}
