import styles from "./style/_SectorList.scss";
import React from "react";
import PropTypes from "prop-types";
import AppActions from "../../actions/AppActions";
import Sector from "./Sector";
import PositionTable from "./PositionTable";
import BookingStore from "../../stores/PositionStore";
import TicketEventStore from "../../stores/TicketEventStore";

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
    // TODO reinitialize sector data when new selected
  };

  componentWillMount() {
    BookingStore.addChangeListener(this.onBookingsChange);

    AppActions.subscribeForTicketEvents();
    AppActions.getBookings(this.event);
  }

  componentWillUnmount() {
    BookingStore.removeChangeListener(this.onBookingsChange);
    TicketEventStore.removePushListener(this.onTicketEventPush);
  }

  componentWillReceiveProps(props) {
    AppActions.getBookings(props.event);
  }

  onBookingsChange = () => {
    TicketEventStore.addPushListener(this.onTicketEventPush);
    this.onTicketEventPush();
  };

  onTicketEventPush = () => {
    this.processTicketEvents();
  };

  processTicketEvents() {
    var ticketEvent;
    while(ticketEvent = TicketEventStore.shift() !== undefined) {
      console.log(ticketEvent);
    }
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
      </div>
    );
  }
}

SectorList.propTypes = {
  event: PropTypes.any.isRequired,
  sectors: PropTypes.any.isRequired
};
