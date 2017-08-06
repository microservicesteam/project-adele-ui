import styles from './style/_Events.scss';
import React from 'react';

let { Component, PropTypes } = React;

export default class EventCard extends Component {

  static propTypes = {
    event: PropTypes.object.isRequired
  };

  onEventCardClick = (e) => {
    console.log("clicked");
    e.preventDefault();
  }

  render() {
    return (
      <div key={'event-card-'} className={styles.event_card}>
        <div>
          <div>
            <img className={styles.event_card_img} src={this.props.event.accessories.eventCardImg} />
          </div>
          <div>
            <a className='event-title' href="#" onClick={this.onEventCardClick}>
              {this.props.event.name}
            </a>
          </div>
          <div className='description'>
            Lorem ipsum dolor sit amet, ius movet ludus prompta at, vis ex nostro corrumpit prodesset, vix sonet ornatus meliore ne. Ius no laudem epicurei interesset, esse mollis accommodare qui ei.
          </div>
        </div>
      </div>
    );
  }
}
