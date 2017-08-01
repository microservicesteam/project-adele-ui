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
      <li key={'event-card-'}>
        <div>
            <img src='https://upload.wikimedia.org/wikipedia/commons/1/1c/Paramore_Concert.jpg' width='300' height='200' />
            <a className='event-title' href="#" onClick={this.onEventCardClick}>
                {this.props.event.name}
            </a>
            <div className='description'>
                Lorem ipsum dolor sit amet, ius movet ludus prompta at, vis ex nostro corrumpit prodesset, vix sonet ornatus meliore ne. Ius no laudem epicurei interesset, esse mollis accommodare qui ei.
            </div>
        </div>
      </li>
    );
  }
}
