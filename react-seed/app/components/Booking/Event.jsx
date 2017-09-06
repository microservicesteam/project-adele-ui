import styles from "./style/_Event.scss";
import React from "react";
import PropTypes from "prop-types";

export default class Event extends React.Component {

  render() {
    return (
      <div className={styles.event}>
        <div className={styles.floatLeft}>
          <img className={styles.image} src={require("../../assets/event" + this.props.event.id + ".jpg")} />
        </div>
        <div className={styles.description}>{this.props.event.description}</div>
        <div className={styles.clear}> </div>
      </div>
    );
  }
}

Event.propTypes = {
  event: PropTypes.any.isRequired
};
