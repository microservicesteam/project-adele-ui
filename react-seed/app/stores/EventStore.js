import BaseStore from './BaseStore';
import AppDispatcher from '../dispatcher/AppDispatcher';

import {
  EVENTS_UPDATED,
  EVENTS_GET_SUCCESS
} from '../constants/AppConstants';

class EventStore extends BaseStore {

  find(id) {
    var result = null;
    this.getAll().forEach(function (event) {
      if (parseInt(id) === event.id) {
        result = event;
      }
    });
    return result;
  }

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

let store = new EventStore();

AppDispatcher.register((action) => {
  switch(action.actionType) {
    case EVENTS_GET_SUCCESS:
      store.setAll(action.events);
      break;
    default:
  }
});

export default store;
