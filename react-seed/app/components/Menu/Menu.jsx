import styles from "./style/_Menu.scss";
import React from "react";
import PropTypes from "prop-types";
import MenuItem from "./MenuItem";

export default class Menu extends React.Component {

  render() {
    return (
      <ul className={styles.menu}>
        {this.props.events.map((event) => {
          return (<MenuItem key={event.id} event={event}/>);
        }, this)}
      </ul>
    );
  }
}

Menu.propTypes = {
  events: PropTypes.array.isRequired
};
