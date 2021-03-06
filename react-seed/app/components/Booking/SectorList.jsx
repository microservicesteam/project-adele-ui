import styles from "./style/_SectorList.scss";
import React from "react";
import PropTypes from "prop-types";
import AppActions from "../../actions/AppActions";
import Sector from "./Sector";
import PositionTable from "./PositionTable";
import BookingRequestButton from "./BookingRequestButton";

export default class SectorList extends React.Component {

  constructor() {
    super();
    this.state = {
      selected: null
    };
  }

  setSelected = (sector) => {
    this.setState({
      selected: sector
    });
  };

  componentWillReceiveProps(props) {
    AppActions.getBookings(props.event);
  }

  render() {
    return (
      <div>
        <div className={styles.header}>Sectors</div>
        <div>
          {this.props.sectors.map((sector) =>
            <Sector key={'sector-' + sector.id}
                    sector={sector}
                    selected={this.state.selected == sector}
                    setSelected={this.setSelected}/>)}
        </div>

        {this.state.selected != null &&
        <PositionTable event={this.props.event} sector={this.state.selected}/>}

        {this.state.selected != null &&
        <BookingRequestButton event={this.props.event} sector={this.state.selected} />}
      </div>
    );
  }
}

SectorList.propTypes = {
  event: PropTypes.any.isRequired,
  sectors: PropTypes.any.isRequired
};
