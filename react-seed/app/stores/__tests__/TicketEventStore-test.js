import "babel-core/polyfill";
import {expect} from "chai";
import TicketEventStore from "../TicketEventStore.js";

describe('TicketEventStore', () => {

  it('Should push and shift items', function() {

    var store = TicketEventStore;

    let onPush = sinon.spy();
    let onShift = sinon.spy();
    store.addPushListener(onPush);
    store.addShiftListener(onShift);

    expect(store.isEmpty()).to.eql(true);

    store.push(4);
    store.push(3);
    store.push(2);

    expect(onPush.callCount).to.equal(3);
    expect(store.isEmpty()).to.eql(false);

    expect(store.shift()).to.eql(4);
    expect(store.shift()).to.eql(3);
    expect(store.shift()).to.eql(2);

    expect(onShift.callCount).to.equal(3);
    expect(store.isEmpty()).to.eql(true);
    expect(store.shift()).to.eql(undefined);
    expect(onShift.callCount).to.equal(3);

    store.push(5);
    expect(onPush.callCount).to.equal(4);
    expect(store.isEmpty()).to.eql(false);
    expect(store.shift()).to.eql(5);
    expect(onShift.callCount).to.equal(4);
    expect(store.isEmpty()).to.eql(true);
    expect(store.shift()).to.eql(undefined);
    expect(onShift.callCount).to.equal(4);
  });

});
