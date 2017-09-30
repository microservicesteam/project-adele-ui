import styles from "./style/_Position.scss";
import React from "react";
import PropTypes from "prop-types";
import { POSITION_FREE, POSITION_BOOKED, POSITION_SELECTED } from "../../constants/AppConstants";

export default class Position extends React.Component {

  onClick = () => {
    this.props.onClick(this.props.position.position);
  };

  render() {
    return (
      <div className={[
        styles.position,
        this.props.position.status == POSITION_FREE ? styles.free : "",
        this.props.position.status == POSITION_BOOKED ? styles.booked : "",
        this.props.position.status == POSITION_SELECTED ? styles.selected : ""
      ].join(' ')}
           onClick={this.onClick}>{this.props.position.position}</div>
    );
  }
}

Position.propTypes = {
  position: PropTypes.any.isRequired,
  selected: PropTypes.any.isRequired,
  onClick: PropTypes.any.isRequired
};
