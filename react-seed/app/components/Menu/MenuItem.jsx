import React from 'react';

let { Component, PropTypes } = React;

export default class MenuItem extends Component {

  static propTypes = {
    event: PropTypes.object.isRequired
  };

  onItemClick = (e) => {
    e.preventDefault();
    window.alert('You clicked ' + this.props.event.name);
  }

  render() {
    return (
      <li key={'menu-item-' + this.props.event.id}>
        <a href="#" onClick={this.onItemClick}>
          {this.props.event.name}
        </a>
      </li>
    );
  }
}
