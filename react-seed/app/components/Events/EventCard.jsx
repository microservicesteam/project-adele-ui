import styles from "./style/_Events.scss";
import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export default class EventCard extends React.Component {

  render() {
    return (
      <div key={'event-card-'} className={styles.event_card}>
        <div>
          <div>
            <img className={styles.event_card_img} src={require("../../assets/event" + this.props.event.id + ".jpg")} />
          </div>
          <div>
            <Link to={`/booking/${this.props.event.id}`}>{this.props.event.name}</Link>
          </div>
          <div className='description'>
            {this.props.event.description}
          </div>
        </div>
      </div>
    );
  }
}

EventCard.propTypes = {
  event: PropTypes.any.isRequired
};
