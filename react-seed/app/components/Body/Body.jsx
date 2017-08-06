import styles from './style/_Body.scss';
import React from 'react';
import Events from '../Events/Events';

export default class Body extends React.Component {
  render() {
    return (
      <div className={styles.body}>
        <Events events={this.props.events} />
      </div>
    );
  }
}
