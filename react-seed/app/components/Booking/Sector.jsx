import styles from "./style/_Sector.scss";
import React from "react";
import PropTypes from "prop-types";

export default class Sector extends React.Component {

  render() {
    return (
      <div className={styles.sector}>
        <div>{this.props.sector.id}</div>
        <div>{this.props.sector.capacity}</div>
        <div>{this.props.sector.positions}</div>
      </div>
    );
  }
}

Sector.propTypes = {
  sector: PropTypes.any.isRequired
};
