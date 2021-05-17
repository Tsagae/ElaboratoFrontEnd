import { Link } from "gatsby";
import * as React from "react";
import * as styles from "./Searchbar.module.css";
import "../globalStyle/globalStyle.css";
import { StaticImage } from "gatsby-plugin-image";

export default function Searchbar({ children }) {
  return (
    <div className={styles.container}>
      <form>
        <input type="search" className={styles.bar} placeholder="Scrivi qua" />
      </form>
      <button style={styles.btnImage} >
        <StaticImage
          src="../images/searchIcon.png"
          placeholder="blurred"
          layout="fixed"
          width={30}
          height={30}
        />
      </button>
    </div>
  );
}