import styles from "./style/_Position.scss";
import React from "react";
import PropTypes from "prop-types";
import { POSITION_FREE, POSITION_BOOKED, POSITION_SELECTED } from "../../constants/AppConstants";
import PositionStore from "../../stores/PositionStore";

export default class Position extends React.Component {

  componentWillReceiveProps(props) {
    this.setState({
      status: props.position.status
    });
  }

  onClick = () => {
    var position = this.props.position;
    if (position.status == POSITION_FREE) {
      position.status = POSITION_SELECTED;
    } else if (position.status == POSITION_SELECTED) {
      position.status = POSITION_FREE;
    }
    PositionStore.set(position);
    this.setState({
      status: position.status
    });
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
  position: PropTypes.any.isRequired
};
