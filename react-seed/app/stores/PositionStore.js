import BaseStore from './BaseStore';
import AppDispatcher from '../dispatcher/AppDispatcher';
import {forEach, filter} from "lodash";

import {
  POSITIONS_UPDATED,
  BOOKINGS_GET_SUCCESS,
  TICKET_EVENT_RECEIVED,
  POSITION_BOOKED,
  POSITION_SELECTED
} from '../constants/AppConstants';

class PositionStore extends BaseStore {

  findByEventAndSector(event, sector) {
    return filter(this.getAll(), function (item) {
      return item.eventId === event.id && item.sectorId === sector.id;
    });
  }

  getSelectedPositions(event, sector) {
    return filter(this.findByEventAndSector(event, sector), function (item) {
      return item.status === POSITION_SELECTED;
    })
  }

  setAll(positions) {
    var self = this;
    forEach(positions, function (position) {
      position.id = self.getPositionId(position);
      self.data[position.id] = position;
    });
    this.emitChange();
  }

  emitChange() {
    this.emit(POSITIONS_UPDATED);
  }

  addChangeListener(callback) {
    this.on(POSITIONS_UPDATED, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(POSITIONS_UPDATED, callback);
  }

  getPositionId(position) {
    return position.eventId + "-" + position.sectorId + "-" + position.position
  }
}

let store = new PositionStore();

AppDispatcher.register((action) => {
  var positions;
  switch(action.actionType) {
    case BOOKINGS_GET_SUCCESS:
      positions = [];
      forEach(action.bookings, function (booking) {
        booking.position.position = booking.position.id;
        booking.position.status = booking.status;
        positions.push(booking.position);
      });
      store.setAll(positions);
      break;
    case TICKET_EVENT_RECEIVED:
      positions = [];
      forEach(action.ticketEvent.positions, function (position) {
        position.position = position.id;
        position.status = POSITION_BOOKED;
        positions.push(position);
      });
      store.setAll(positions);
      break;
    default:
  }
});

export default store;
