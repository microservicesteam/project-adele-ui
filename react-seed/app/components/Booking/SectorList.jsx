import styles from "./style/_SectorList.scss";
import React from "react";
import PropTypes from "prop-types";
import Sector from "./Sector";

export default class SectorList extends React.Component {

  render() {
    return (
      <div>
        <div className={styles.header}>Sectors</div>
        <div>
          {this.props.sectors.map((sector) => <Sector sector={sector} key={'sector-' + sector.id} />)}
        </div>
      </div>
    );
  }
}

SectorList.propTypes = {
  sectors: PropTypes.any.isRequired
};
