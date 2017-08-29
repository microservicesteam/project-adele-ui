import styles from "./style/_Booking.scss";
import React from "react";
import PropTypes from "prop-types";

export default class Booking extends React.Component {

  render() {
    return (
      <div className={styles.booking}>
        <div>{this.props.event.id}</div>
        <div>{this.props.event.name}</div>
        <div>{this.props.event.dateTime}</div>
        <div>{this.props.event.status}</div>
        <div>{this.props.event.venue.shortName}</div>
      </div>
    );
  }
}

Booking.propTypes = {
  event: PropTypes.object.isRequired
};
