import React from 'react';

let { Component, PropTypes } = React;

export default class EventCard extends Component {

  static propTypes = {
    event: PropTypes.object.isRequired
  };

  onItemClick = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <li key={'event-item-'}>
        <div>
            <img src='https://upload.wikimedia.org/wikipedia/commons/1/1c/Paramore_Concert.jpg' width='300' height='200' />
            <a className='event-title' href="#" onClick={this.onItemClick}>
                {this.props.event.label}
            </a>
            <div className='description'>
                Lorem ipsum dolor sit amet, ius movet ludus prompta at, vis ex nostro corrumpit prodesset, vix sonet ornatus meliore ne. Ius no laudem epicurei interesset, esse mollis accommodare qui ei.
            </div>
        </div>
      </li>
    );
  }
}
