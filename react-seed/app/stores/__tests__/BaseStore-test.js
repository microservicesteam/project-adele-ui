import "babel-core/polyfill";
import BaseStore from "../BaseStore.js";
import {expect} from "chai";

const EVENTS_UPDATED = 'EVENTS_UPDATED';

class TestStore extends BaseStore {
  emitChange() {
    this.emit(EVENTS_UPDATED);
  }
  addChangeListener(callback) {
    this.on(EVENTS_UPDATED, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(EVENTS_UPDATED, callback);
  }
}

describe('BaseStore', () => {

  it('Should set, get and remove data', function() {

    let store = new TestStore();

    expect(store.getAll()).to.eql([]);

    let item = {
      id: 1,
      foo: 'bar'
    };

    store.setAll([item]);
    expect(store.getAll()).to.eql([item]);

    let item2 = {
      id: 2,
      foobar: 'bar'
    };

    store.set(item2);
    store.set(item2); // intentional check for unique items
    expect(store.getAll()).to.eql([item, item2]);

    store.remove(1);
    expect(store.getAll()).to.eql([item2]);
  });

  it('Should call the change listener when data changes', () => {

    let store = new TestStore();
    let onChange = sinon.spy();
    store.addChangeListener(onChange);

    store.setAll([{
      id: 1,
      foo: 'bar'
    }]);
    store.set({
      id: 2,
      foobar: 'bar'
    });
    store.remove(1);
    expect(onChange.callCount).to.equal(3);
  });

  it('Should remove the change listener', () => {

    let store = new TestStore();
    let onChange = sinon.spy();
    store.addChangeListener(onChange);
    store.setAll([{
      id: 1,
      foo: 'bar'
    }]);
    store.removeChangeListener(onChange);
    store.setAll([{
      id: 2,
      foo: 'bar'
    }]);
    expect(onChange.callCount).to.equal(1);
  });

  it('Should get requested item', function() {

    let store = new TestStore();

    expect(store.getAll()).to.eql([]);

    let item1 = {
      id: 1
    };
    let item2 = {
      id: 2
    };

    store.setAll([item1, item2]);
    expect(store.getAll()).to.eql([item1, item2]);
    expect(store.get(1)).to.eql(item1);
    expect(store.get(2)).to.eql(item2);
  });

  it('Should find requested item by specific field', function() {

    let store = new TestStore();

    expect(store.getAll()).to.eql([]);

    let item1 = {
      id: 1,
      foo: "bar"
    };
    let item2 = {
      id: 2,
      foo: "something else"
    };

    store.setAll([item1, item2]);
    expect(store.findBy("foo", "bar")).to.eql(item1);
    expect(store.findBy("foo", "something else")).to.eql(item2);
    expect(store.findBy("foo", "something something")).to.eql(undefined);
  });
});
