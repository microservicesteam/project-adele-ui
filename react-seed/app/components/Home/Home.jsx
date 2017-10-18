import styles from "./style/_Home.scss";
import React from "react";
import Events from "../Events/Events";
import EventStore from "../../stores/EventStore";

export default class Home extends React.Component {
  render() {
    return (
      <div className={styles.body}>
        <Events events={EventStore.getAll()} />
      </div>
    );
  }
}
