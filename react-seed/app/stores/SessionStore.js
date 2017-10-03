import {EventEmitter} from "events";
import {forEach, toArray, find, filter} from "lodash";
import AppDispatcher from '../dispatcher/AppDispatcher';
import {
  BOOKING_REQUEST_SUCCESS,
  BOOKING_REQUEST_ERROR,
  BOOKING_RESPONSE_RECEIVED
} from '../constants/AppConstants';

class SessionStore extends EventEmitter {

  getBookingResponse() {
    return JSON.parse(localStorage.getItem("bookingResponse"));
  }

  setBookingResponse(value) {
    localStorage.setItem("bookingResponse", JSON.stringify(value));
    this.emitBookingResponseReceived();
  }

  emitBookingResponseReceived() {
    this.emit(BOOKING_RESPONSE_RECEIVED);
  }

  addBookingResponseReceiveListener(callback) {
    this.on(BOOKING_RESPONSE_RECEIVED, callback);
  }

  removeBookingResponseReceiveListener(callback) {
    this.removeListener(BOOKING_RESPONSE_RECEIVED, callback);
  }

}

let store = new SessionStore();

AppDispatcher.register((action) => {
  switch(action.actionType) {
    case BOOKING_REQUEST_SUCCESS:
    case BOOKING_REQUEST_ERROR:
      store.setBookingResponse(action.response);
      break;
    default:
  }
});

export default store;
