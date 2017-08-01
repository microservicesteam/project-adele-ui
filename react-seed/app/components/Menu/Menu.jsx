import styles from './_Menu.scss';
import React from 'react';
import MenuItem from './MenuItem';

let { Component, PropTypes } = React;

export default class Menu extends Component {

  static defaultProps = {
    events: []
  }

  static propTypes = {
    events: PropTypes.array.isRequired
  }

  render() {
    return (
      <ul className={styles.menu}>
        {this.props.events.map((event) => {
          return (<MenuItem event={event} />);
        }, this)}
      </ul>
    );
  }
}
