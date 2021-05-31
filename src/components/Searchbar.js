import { Link } from "gatsby";
import * as React from "react";
import * as styles from "./Searchbar.module.css";
import "../globalStyle/globalStyle.css";
import { StaticImage } from "gatsby-plugin-image";

export default class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }


  render() {
    return (
      <div className={styles.container}>
        <form>
          <input type="search" className={styles.bar} placeholder="Scrivi qua" />
        </form>
        <button className={styles.btnImage} >
          <StaticImage
            src="../images/whitesearchIcon.png"
            placeholder="blurred"
            layout="fixed"
            width={30}
            height={30}
          />
        </button>
      </div>
    );
  }
}