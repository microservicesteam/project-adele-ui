import styles from "./style/_Booking.scss";
import React from "react";
import AppActions from "../../actions/AppActions";
import EventStore from "../../stores/EventStore";
import VenueStore from "../../stores/VenueStore";
import SectorStore from "../../stores/SectorStore";
import Venue from "./Venue";
import Sector from "./Sector";

export default class Booking extends React.Component {

  constructor() {
    super();
    this.state = {
      event: null,
      venue: null,
      sectors: null
    };
  }

  componentWillMount() {
    EventStore.addChangeListener(this.onEventsChange);
    VenueStore.addChangeListener(this.onVenuesChange);
    SectorStore.addChangeListener(this.onSectorsChange);
    AppActions.getEvents();
  }

  componentWillUnmount() {
    EventStore.removeChangeListener(this.onEventsChange);
    VenueStore.removeChangeListener(this.onVenuesChange);
    SectorStore.removeChangeListener(this.onSectorsChange);
  }

  onEventsChange = () => {
    var event = EventStore.get(this.props.match.params.eventId);
    this.setState({
      event: event,
      venue: null,
      sectors: null
    });
    AppActions.getVenue(event);
  };

  onVenuesChange = () => {
    var venue = VenueStore.get(this.state.event.id);
    this.setState({
      event: this.state.event,
      venue: venue,
      sectors: null
    });
    AppActions.getSectors(venue);
  };

  onSectorsChange = () => {
    this.setState({
      event: this.state.event,
      venue: this.state.venue,
      sectors: SectorStore.get(this.state.venue.id)
    });
  };

  render() {
    var event = this.state.event;

    if (event == null) {
      return (<div className={styles.booking}></div>);
    }

    return (
      <div className={styles.booking}>
        <div>{event.id}</div>
        <div>{event.name}</div>
        <div>{event.dateTime}</div>
        <div>{event.status}</div>

        {this.state.venue != null &&
        <Venue venue={this.state.venue} />}

        {this.state.sectors != null &&
          this.state.sectors.map((sector) => <Sector sector={sector} key={'sector-' + sector.number} />)}

      </div>
    );
  }
}
