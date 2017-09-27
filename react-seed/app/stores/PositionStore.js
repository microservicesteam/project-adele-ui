import BaseStore from './BaseStore';
import AppDispatcher from '../dispatcher/AppDispatcher';
import {forEach, filter} from "lodash";

import {
  POSITIONS_UPDATED,
  BOOKINGS_GET_SUCCESS
} from '../constants/AppConstants';

class PositionStore extends BaseStore {

  findByEventAndSector(event, sector) {
    return filter(this.getAll(), function (item) {
      return item.eventId === event.id && item.sectorId === sector.id;
    });
  }

  setAll(bookings) {
    var self = this;
    // TODO maybe we should do this outside?
    forEach(bookings, function (booking) {
      var position = booking.position;
      var positionId = position.eventId + "-" + position.sectorId + "-" + position.id;
      self.data[positionId] = {
        id: positionId,
        eventId: position.eventId,
        sectorId: position.sectorId,
        position: position.id,
        status: booking.status
      };
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
}

let store = new PositionStore();

AppDispatcher.register((action) => {
  switch(action.actionType) {
    case BOOKINGS_GET_SUCCESS:
      store.setAll(action.bookings);
      break;
    default:
  }
});

export default store;
