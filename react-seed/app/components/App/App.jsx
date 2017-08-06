import styles from "./styles/_App.scss";

import React from "react";
import AppActions from "../../actions/AppActions";
import EventStore from "../../stores/EventStore";
import Menu from "../Menu/Menu";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";


function getAppState() {
  return {
    events: EventStore.getAll()
  };
}

export default class App extends React.Component {

  state = getAppState();

  componentDidMount() {
    EventStore.addChangeListener(this.onChange);
    AppActions.getEvents();
  }

  componentWillUnmount() {
    EventStore.removeChangeListener(this.onChange);
  }

  onChange = () => {
    this.setState(getAppState());
  };

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.header}>
          <h1 className={styles.title}>Project Adele</h1>
          <Menu events={this.state.events}/>
        </div>
        <Body events={this.state.events}/>
        <Footer />
      </div>
    );
  }
}
