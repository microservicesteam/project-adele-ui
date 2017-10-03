import styles from "./style/_BookingRequestButton.scss";
import React from "react";
import PropTypes from "prop-types";
import {map} from "lodash";
import PositionStore from "../../stores/PositionStore";
import AppActions from "../../actions/AppActions";

export default class BookingRequestButton extends React.Component {

  constructor(args) {
    super(args);
    this.state = {
      positions: PositionStore.getSelectedPositions(args.event, args.sector)
    };
  }

  componentWillMount() {
    PositionStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    PositionStore.removeChangeListener(this.onChange);
  }

  onChange = () => {
    this.setState({
      positions: PositionStore.getSelectedPositions(this.props.event, this.props.sector)
    });
  };

  onClick = () => {
    AppActions.sendBookingRequest(this.props.event, this.props.sector, map(this.state.positions, "position"));
  };

  render() {
    return (
      <div className={styles.container}>
        <button
          name="send"
          className={styles.button}
          disabled={this.state.positions.length === 0}
          onClick={this.onClick.bind(this)}>Send booking request</button>
      </div>
    );
  }
}

BookingRequestButton.propTypes = {
  event: PropTypes.any.isRequired,
  sector: PropTypes.any.isRequired
};
