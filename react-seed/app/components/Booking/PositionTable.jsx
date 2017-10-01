import styles from "./style/_PositionTable.scss";
import React from "react";
import {includes, pull} from "lodash";
import PropTypes from "prop-types";
import Position from "./Position";
import PositionStore from "../../stores/PositionStore";

export default class PositionTable extends React.Component {

  render() {
    var positions = PositionStore.findByEventAndSector(this.props.event, this.props.sector);

    return (
      <div className={styles.positionTable}>
        <div className={styles.header}>Positions for Sector {this.props.sector.id}</div>
        <hr/>
        <div><span className={[styles.legendFree, styles.legendItem].join(' ')}>&nbsp;&nbsp;&nbsp;&nbsp;</span><span className={styles.legendText}> free</span></div>
        <div><span className={[styles.legendBooked, styles.legendItem].join(' ')}>&nbsp;&nbsp;&nbsp;&nbsp;</span><span className={styles.legendText}> already booked</span></div>
        <div><span className={[styles.legendSelected, styles.legendItem].join(' ')}>&nbsp;&nbsp;&nbsp;&nbsp;</span><span className={styles.legendText}> selected by you</span></div>
        <hr/>
        <div>
          {positions.map((position) =>
            <Position key={'position-' + position.position}
                      position={position}/>)}
        </div>
      </div>
    );
  }
}

PositionTable.propTypes = {
  event: PropTypes.any.isRequired,
  sector: PropTypes.any.isRequired
};
