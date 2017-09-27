import BaseStore from "./BaseStore";
import AppDispatcher from "../dispatcher/AppDispatcher";
import {VENUES_UPDATED, VENUE_GET_SUCCESS} from "../constants/AppConstants";

class VenueStore extends BaseStore {

  findByEvent(event) {
    return this.findBy("eventId", event.id);
  }

  emitChange() {
    this.emit(VENUES_UPDATED);
  }

  addChangeListener(callback) {
    this.on(VENUES_UPDATED, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(VENUES_UPDATED, callback);
  }
}

let store = new VenueStore();

AppDispatcher.register((action) => {
  switch(action.actionType) {
    case VENUE_GET_SUCCESS:
      store.set(action.venue);
      break;
    default:
  }
});

export default store;
