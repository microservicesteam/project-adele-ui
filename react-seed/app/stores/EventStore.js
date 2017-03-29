import BaseStore from './BaseStore';
import AppDispatcher from '../dispatcher/AppDispatcher';

import {
  EVENTS_UPDATED,
  EVENTS_GET_SUCCESS
} from '../constants/AppConstants';

class EventsStore extends BaseStore {

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

let store = new EventsStore();

AppDispatcher.register((action) => {
  switch(action.actionType) {
    case EVENTS_GET_SUCCESS:
      store.setAll(action.events);
      break;
    default:
  }
});

export default store;
