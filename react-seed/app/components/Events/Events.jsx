import styles from "./style/_Events.scss";
import React from "react";
import PropTypes from "prop-types";
import EventCard from "./EventCard";

export default class Events extends React.Component {

  render() {
    return (
      <div className={styles.events_list}>
        {this.props.events.map((event) => {
          return (<EventCard key={event.id} event={event}/>);
        }, this)}
      </div>
    );
  }
}

Events.propTypes = {
  events: PropTypes.array.isRequired
};
