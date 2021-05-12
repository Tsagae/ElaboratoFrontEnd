import { Link } from "gatsby";
import * as React from "react";
import * as styles from "./Navbar.module.css";
import "../globalStyle/globalStyle.css";

export default function Navbar({ children }) {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <div>
            <Link to="/"> Home </Link>
          </div>
          <div>
            <Link to="/oldindex"> oldindex </Link>
          </div>
          <div>Funct2</div>
        </li>
      </ul>
    </div>
  );
}
