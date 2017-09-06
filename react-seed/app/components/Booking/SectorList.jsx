import styles from "./style/_SectorList.scss";
import React from "react";
import PropTypes from "prop-types";
import Sector from "./Sector";

export default class SectorList extends React.Component {

  constructor() {
    super();
    this.state = {
      selected: null
    };
  }

  setSelected = (id) => {
    this.setState({
      selected: id
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
                    selected={this.state.selected == sector.id}
                    setSelected={this.setSelected}/>)}
        </div>
      </div>
    );
  }
}

SectorList.propTypes = {
  sectors: PropTypes.any.isRequired
};
