import {EventEmitter} from "events";
import AppDispatcher from "../dispatcher/AppDispatcher";
import {TICKET_EVENT_RECEIVED, TICKET_EVENT_PUSH, TICKET_EVENT_SHIFT} from "../constants/AppConstants";

class TicketEventStore extends EventEmitter {

  constructor(...args) {
    super(...args);
    this.queue = [];
  }

  push(ticketEvent) {
    this.queue.push(ticketEvent);
    this.emitPush();
  }

  shift() {
    var value = this.queue.shift();
    if (value != undefined) {
      this.emitShift();
    }
    return value;
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  emitPush() {
    this.emit(TICKET_EVENT_PUSH);
  }

  emitShift() {
    this.emit(TICKET_EVENT_SHIFT);
  }

  addPushListener(callback) {
    this.on(TICKET_EVENT_PUSH, callback);
  }

  removePushListener(callback) {
    this.removeListener(TICKET_EVENT_PUSH, callback);
  }

  addShiftListener(callback) {
    this.on(TICKET_EVENT_SHIFT, callback);
  }

  removeShiftListener(callback) {
    this.removeListener(TICKET_EVENT_SHIFT, callback);
  }
}

let store = new TicketEventStore();

AppDispatcher.register((action) => {
  switch(action.actionType) {
    case TICKET_EVENT_RECEIVED:
      store.push(action.ticketEvent);
      break;
    default:
  }
});

export default store;
