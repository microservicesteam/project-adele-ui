import styles from "./style/_Sector.scss";
import React from "react";
import PropTypes from "prop-types";

export default class Sector extends React.Component {

  render() {
    return (
      <div className={styles.sector}>{this.props.sector.id}</div>
    );
  }
}

Sector.propTypes = {
  sector: PropTypes.any.isRequired
};
