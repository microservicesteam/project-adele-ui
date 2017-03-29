import styles from './_App.scss';

import React from 'react';
import AppActions from '../../actions/AppActions';
import ItemsStore from '../../stores/ItemsStore';
import Menu from '../Menu/Menu';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';


function getAppState() {
  return {
    items: ItemsStore.getAll()
  };
}

export default class App extends React.Component {

  state = getAppState()

  componentDidMount() {
    ItemsStore.addChangeListener(this.onChange);
    AppActions.getItems();
  }

  componentWillUnmount() {
    ItemsStore.removeChangeListener(this.onChange);
  }

  onChange = () => {
    this.setState(getAppState());
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.header}>
          <h1 className={styles.title}>Project Adele</h1>
          <Menu items={this.state.items} />
        </div>
        <Body items={this.state.items} />
        <Footer />
      </div>
    );
  }
}
