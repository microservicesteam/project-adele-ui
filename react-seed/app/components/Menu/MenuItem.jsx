import React from "react";
import PropTypes from "prop-types";

export default class MenuItem extends React.Component {

  onItemClick = (e) => {
    e.preventDefault();
    window.alert('You clicked ' + this.props.event.name);
  };

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

MenuItem.propTypes = {
  event: PropTypes.object.isRequired
};
