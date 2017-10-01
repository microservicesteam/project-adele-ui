import styles from "./style/_PositionTable.scss";
import React from "react";
import {includes, pull} from "lodash";
import PropTypes from "prop-types";
import Position from "./Position";
import PositionStore from "../../stores/PositionStore";

export default class PositionTable extends React.Component {

  constructor(args) {
    super();

    PositionStore.addChangeListener(this.onPositionsChange);
    this.state = {
      event: args.event,
      sector: args.sector,
      selected: [],
      positions: PositionStore.findByEventAndSector(args.event, args.sector)
    };
  }

  componentWillUnmount() {
    PositionStore.removeChangeListener(this.onPositionsChange);
  }

  onPositionsChange = () => {
    var self = this;
    this.setState({
      event: self.state.event,
      sector: self.state.sector,
      selected: self.state.selected,
      positions: PositionStore.findByEventAndSector(self.state.event, self.state.sector)
    })
  };

  render() {
    return (
      <div className={styles.positionTable}>
        <div className={styles.header}>Positions for Sector {this.props.sector.id}</div>
        <hr/>
        <div><span className={[styles.legendFree, styles.legendItem].join(' ')}>&nbsp;&nbsp;&nbsp;&nbsp;</span><span className={styles.legendText}> free</span></div>
        <div><span className={[styles.legendBooked, styles.legendItem].join(' ')}>&nbsp;&nbsp;&nbsp;&nbsp;</span><span className={styles.legendText}> already booked</span></div>
        <div><span className={[styles.legendSelected, styles.legendItem].join(' ')}>&nbsp;&nbsp;&nbsp;&nbsp;</span><span className={styles.legendText}> selected by you</span></div>
        <hr/>
        <div>
          {this.state.positions.map((position) =>
            <Position key={'position-' + position.position}
                      position={position}
                      selected={includes(this.state.selected, position.position)}/>)}
        </div>
      </div>
    );
  }
}

PositionTable.propTypes = {
  event: PropTypes.any.isRequired,
  sector: PropTypes.any.isRequired
};
