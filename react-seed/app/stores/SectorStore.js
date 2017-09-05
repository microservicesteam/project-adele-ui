import BaseStore from "./BaseStore";
import AppDispatcher from "../dispatcher/AppDispatcher";
import {SECTORS_UPDATED, SECTORS_GET_SUCCESS} from "../constants/AppConstants";

class SectorStore extends BaseStore {

  emitChange() {
    this.emit(SECTORS_UPDATED);
  }

  addChangeListener(callback) {
    this.on(SECTORS_UPDATED, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(SECTORS_UPDATED, callback);
  }
}

let store = new SectorStore();

AppDispatcher.register((action) => {
  switch(action.actionType) {
    case SECTORS_GET_SUCCESS:
      store.set(action.sectors);
      break;
    default:
  }
});

export default store;
