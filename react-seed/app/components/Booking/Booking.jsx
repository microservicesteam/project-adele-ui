import styles from "./style/_Booking.scss";
import React from "react";
import AppActions from "../../actions/AppActions";
import EventStore from "../../stores/EventStore";

export default class Booking extends React.Component {

  constructor() {
    super();
    this.state = {
      event: EventStore.getAll()
    };
  }

  componentWillMount() {
    EventStore.addChangeListener(this.onChange);
    AppActions.getEvents();
  }

  componentWillUnmount() {
    EventStore.removeChangeListener(this.onChange);
  }

  onChange = () => {
    this.setState({
      events: EventStore.getAll()
    })
  };

  render() {
    var event = EventStore.find(this.props.match.params.eventId);

    if (event == null) {
      return (<div className={styles.booking}></div>);
    }

    return (
      <div className={styles.booking}>
        <div>{event.id}</div>
        <div>{event.name}</div>
        <div>{event.dateTime}</div>
        <div>{event.status}</div>
        <div>{event.venue.shortName}</div>
      </div>
    );
  }
}
