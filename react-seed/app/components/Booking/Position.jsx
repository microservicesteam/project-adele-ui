import styles from "./style/_Position.scss";
import React from "react";
import PropTypes from "prop-types";

export default class Position extends React.Component {

  onClick = () => {
    this.props.onClick(this.props.position);
  };

  render() {
    return (
      <div className={[styles.position, this.props.selected ? styles.active : styles.inactive].join(' ')}
           onClick={this.onClick}>{this.props.position}</div>
    );
  }
}

Position.propTypes = {
  position: PropTypes.any.isRequired,
  selected: PropTypes.any.isRequired,
  onClick: PropTypes.any.isRequired
};
