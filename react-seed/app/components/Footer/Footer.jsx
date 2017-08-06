import styles from "./style/_Footer.scss";
import React from "react";

export default class Footer extends React.Component {
  render() {
    var year = (new Date()).getFullYear();
    return (
      <footer className={styles.footer}>
        <div className={styles.footer_content}>&copy; Microservices Team&nbsp;{year}</div>
      </footer>
    );
  }
}
