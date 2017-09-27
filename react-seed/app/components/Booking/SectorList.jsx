import styles from "./style/_SectorList.scss";
import React from "react";
import PropTypes from "prop-types";
import AppActions from "../../actions/AppActions";
import Sector from "./Sector";
import PositionTable from "./PositionTable";

export default class SectorList extends React.Component {

  constructor(props) {
    super();
    this.state = {
      selected: null
    };
    AppActions.subscribeForTicketEvents();
    AppActions.getBookings(props.event);
  }

  setSelected = (sector) => {
    this.setState({
      selected: sector
    })
  };

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
      </div>
    );
  }
}

SectorList.propTypes = {
  event: PropTypes.any.isRequired,
  sectors: PropTypes.any.isRequired
};
