import styles from "./styles/_App.scss";
import React from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import AppActions from "../../actions/AppActions";
import EventStore from "../../stores/EventStore";
import Home from "../Home/Home";
import Booking from "../Booking/Booking";
import Footer from "../Footer/Footer";
import Flash from "../Flash/Flash";

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      events: EventStore.getAll()
    };
  }

  componentWillMount() {
    EventStore.addChangeListener(this.onChange);
    AppActions.getEvents();
  }

  componentWillUnmount() {
    EventStore.removeChangeListener(this.onChange);
  }

  onChange = () => {
    this.setState({
      events: EventStore.getAll()
    });
  };

  render() {
    return (
      <HashRouter>
        <div className={styles.app}>
          <div className={styles.header}>
            <h1 className={styles.title}>Project Adele</h1>
          </div>
          <Flash />
          <Switch>
            <Route exact={true} path="/" component={Home}/>
            <Route path="/booking/:eventId" component={Booking} />}/>
          </Switch>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}
