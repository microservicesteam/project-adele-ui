import styles from './_Body.scss';
import React from 'react';
import Events from '../Events/Events';

export default class Body extends React.Component {
  render() {
    return (
      <div>
        <Events events={this.props.items} />
      </div>
    );
  }
}
