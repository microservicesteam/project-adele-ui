import styles from "./style/_Sector.scss";
import React from "react";
import PropTypes from "prop-types";

export default class Sector extends React.Component {

  onClick = () => {
    this.props.setSelected(this.props.sector);
  };

  render() {
    return (
      <div className={[styles.sector, this.props.selected ? styles.active : styles.inactive].join(' ')}
           onClick={this.onClick}>{this.props.sector.id}</div>
    );
  }
}

Sector.propTypes = {
  sector: PropTypes.any.isRequired,
  selected: PropTypes.any.isRequired,
  setSelected: PropTypes.any.isRequired
};
