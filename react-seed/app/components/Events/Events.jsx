import styles from './style/_Events.scss';
import React from 'react';
import EventCard from './EventCard';

let { Component, PropTypes } = React;

export default class Events extends Component {

  static defaultProps = {
    events: []
  }

  static propTypes = {
    events: PropTypes.array.isRequired
  }

  render() {
    return (
      <ul className={styles.events_list}>
        {this.props.events.map((event) => {
          return (<EventCard event={event} />);
        }, this)}
      </ul>
    );
  }
}
