import styles from "./style/_Header.scss";
import React from "react";
import PropTypes from "prop-types";

export default class Header extends React.Component {

  render() {
    return (
      <div className={styles.header}>
        <div>
          <span>{this.props.event.name}</span>
          {' ('}<span>{this.props.event.dateTime}</span>
          {this.props.venue != null && <span>{', ' + this.props.venue.address}</span>}
          {')'}
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  event: PropTypes.any.isRequired
};
