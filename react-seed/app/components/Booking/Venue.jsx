import styles from "./style/_Venue.scss";
import React from "react";
import PropTypes from "prop-types";

export default class Venue extends React.Component {

  render() {
    return (
      <div className={styles.venue}>
        {this.props.venue.address}
      </div>
    );
  }
}

Venue.propTypes = {
  venue: PropTypes.any.isRequired
};
