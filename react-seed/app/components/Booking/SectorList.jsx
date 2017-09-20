import styles from "./style/_SectorList.scss";
import React from "react";
import PropTypes from "prop-types";
import Sector from "./Sector";
import PositionTable from "./PositionTable";
import { Stomp } from "stompjs";

export default class SectorList extends React.Component {

  constructor() {
    super();
    this.state = {
      selected: null
    };

    console.log("Connecting...");
    this.socket = new WebSocket("ws://localhost:8080/ws");
    this.client = Stomp.over(this.socket);
    var client = this.client;
    this.client.connect({}, function (frame) {
      console.log('Connected: ' + frame);
      client.subscribe('/topic/tickets', function (ticketEvent) {
        console.log(ticketEvent);
      });
    });
  }

  setSelected = (sector) => {
    this.setState({
      selected: sector
    })
  };

  render() {
    return (
      <div>
        <div className={styles.header}>Sectors</div>
        <div>
          {this.props.sectors.map((sector) =>
            <Sector key={'sector-' + sector.id}
                    sector={sector}
                    selected={this.state.selected == sector}
                    setSelected={this.setSelected}/>)}
        </div>

        {this.state.selected != null &&
        <PositionTable event={this.props.event} sector={this.state.selected}/>}
      </div>
    );
  }
}

SectorList.propTypes = {
  event: PropTypes.any.isRequired,
  sectors: PropTypes.any.isRequired
};
