import AppDispatcher from '../dispatcher/AppDispatcher';
import EventWebAPI from '../util/EventWebAPI';

import {
  ITEMS_GET_SUCCESS,
  ITEMS_GET_ERROR,
  EVENTS_UPDATED,
  EVENTS_GET_SUCCESS
} from '../constants/AppConstants';

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
  },
  getItems() {
    WebAPI.getItems()
    .then((items) => {
      AppDispatcher.dispatch({
        actionType: ITEMS_GET_SUCCESS,
        items: items
      });
    })
    .catch(() => {
      AppDispatcher.dispatch({
        actionType: ITEMS_GET_ERROR
      });
    });
  }
};
