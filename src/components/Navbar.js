import { Link } from "gatsby";
import * as React from "react";
import * as styles from "./Navbar.module.css";
import "../globalStyle/globalStyle.css";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    if (typeof (sessionStorage) != "undefined") {
      if (sessionStorage.getItem("lang") == null) {
        sessionStorage.setItem("lang", "it");
        return;
      }
    }
  };

  handleLanguageChange() {
    if (typeof (sessionStorage) != "undefined") {
      if (sessionStorage.getItem("lang") === "it") {
        sessionStorage.setItem("lang", "gb");
        window.location.reload();
      } else if (sessionStorage.getItem("lang") === "gb") {
        sessionStorage.setItem("lang", "it");
        window.location.reload();
      }
    }
  }

  render() {
    if (typeof (sessionStorage) == "undefined") {
      return (
        <div className={styles.container}>
          <header>
            <div className={styles.linkList}>
              <Link to="/">
                <div className={styles.linkListItem}>
                  <h4>Home</h4>
                </div>
              </Link>
              <Link to="/globalData">
                <div className={styles.linkListItem}>
                  <h4>Global Data</h4>
                </div>
              </Link>
              <Link to="/games">
                <div className={styles.linkListItem}>
                  <h4>Games</h4>
                </div>
              </Link>
            </div>
          </header>
        </div>
      );
    } else {
      return (
        <div className={styles.container}>
          <header>
            <div className={styles.linkList}>
              <Link to="/">
                <div className={styles.linkListItem}>
                  <h4>Home</h4>
                </div>
              </Link>
              <Link to="/globalData">
                <div className={styles.linkListItem}>
                  <h4>Global Data</h4>
                </div>
              </Link>
              <Link to="/games">
                <div className={styles.linkListItem}>
                  <h4>Games</h4>
                </div>
              </Link>
              
            </div>
          </header>
        </div>
      );
    }
  }
}

/*
<div className={styles.lastItem} onClick={this.handleLanguageChange.bind(this)}>
                <LazyLoadImage
                  src={"https://www.countryflags.io/" + sessionStorage.getItem("lang") + "/flat/32.png"}
                  alt={"it"}
                  width={32}
                  height={32}
                //height={this.props.height}
                />
              </div>
              */ //FLAG IMAGE