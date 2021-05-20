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
            <Link to="/"> Home </Link>
          </div>
          <div>
            <Link to="/globalData"> Global Data </Link>
          </div>
          <div><Link to="/games"> Games </Link></div>
        </li>
      </ul>
      </header>
    </div>
  );
}
