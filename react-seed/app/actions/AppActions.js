import AppDispatcher from "../dispatcher/AppDispatcher";
import EventWebAPI from "../util/EventWebAPI";
import {EVENTS_GET_ERROR, EVENTS_GET_SUCCESS} from "../constants/AppConstants";

export default {
  getEvents() {
    EventWebAPI.getEvents()
    .then((events) => {
      AppDispatcher.dispatch({
        actionType: EVENTS_GET_SUCCESS,
        events: events
      });
    })
    .catch(() => {
      AppDispatcher.dispatch({
        actionType: EVENTS_GET_ERROR
      });
    });
  }
};
