import { Link } from "gatsby";
import * as React from "react";
import * as styles from './navbar.module.css';
import "../globalStyle/globalStyle.css";

export default function Layout({ children }) {
  return (
    <div>
      <ul>
          <li>
            <div>
                <Link className="mioLink" to="../pages/index.js"> Home </Link>
            </div>
            <div>
                Funct1
            </div>
            <div>
                Funct2
            </div>
          </li>
      </ul>
    </div>
  );
}
