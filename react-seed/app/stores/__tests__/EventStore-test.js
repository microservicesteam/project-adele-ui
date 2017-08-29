import 'babel-core/polyfill';
import EventStore from '../EventStore.js';
import { expect } from 'chai';

const EVENTS_UPDATED = 'EVENTS_UPDATED';

describe('EventStore', () => {

  it('Should find requested item', function() {

    let store = new EventStore();

    expect(store.getAll()).to.eql([]);

    let item1 = {
      id: 1
    };
    let item2 = {
      id: 2
    };

    store.setAll([item1, item2]);
    expect(store.getAll()).to.eql([item1, item2]);
    expect(store.find(1)).to.eql(item1);
    expect(store.find(2)).to.eql(item2);
  });

});
