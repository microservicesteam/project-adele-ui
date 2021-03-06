import {forEach} from "lodash";
import AppDispatcher from "../dispatcher/AppDispatcher";
import WebAPI from "../util/WebAPI";
import StompClient from "../util/StompClient";
import {
  EVENTS_GET_ERROR,
  EVENTS_GET_SUCCESS,
  VENUE_GET_SUCCESS,
  VENUE_GET_ERROR,
  SECTORS_GET_SUCCESS,
  SECTORS_GET_ERROR,
  BOOKINGS_GET_SUCCESS,
  BOOKINGS_GET_ERROR,
  BOOKING_REQUEST_SUCCESS,
  BOOKING_REQUEST_ERROR,
  TICKET_EVENT_RECEIVED
} from "../constants/AppConstants";

export default {
  getEvents() {
    WebAPI.getEvents()
    .then((response) => {
      AppDispatcher.dispatch({
        actionType: EVENTS_GET_SUCCESS,
        events: response._embedded.events
      });
    })
    .catch(() => {
      AppDispatcher.dispatch({
        actionType: EVENTS_GET_ERROR
      });
    });
  },
  getVenue(event) {
    WebAPI.getVenue(event)
      .then((response) => {
        response.eventId = event.id;
        AppDispatcher.dispatch({
          actionType: VENUE_GET_SUCCESS,
          venue: response
        });
      })
      .catch(() => {
        AppDispatcher.dispatch({
          actionType: VENUE_GET_ERROR
        });
      });
  },
  getSectors(venue) {
    WebAPI.getSectors(venue)
      .then((response) => {
        forEach(response._embedded.sectors, function (sector) {
          sector.venueId = venue.id;
        });
        AppDispatcher.dispatch({
          actionType: SECTORS_GET_SUCCESS,
          sectors: response._embedded.sectors
        });
      })
      .catch(() => {
        AppDispatcher.dispatch({
          actionType: SECTORS_GET_ERROR
        });
      });
  },
  getBookings(event) {
    WebAPI.getBookings(event)
      .then((response) => {
        AppDispatcher.dispatch({
          actionType: BOOKINGS_GET_SUCCESS,
          bookings: response
        });
      })
      .catch(() => {
        AppDispatcher.dispatch({
          actionType: BOOKINGS_GET_ERROR
        });
      });
  },
  sendBookingRequest(event, sector, positions) {
    WebAPI.sendBookingRequest(event, sector, positions)
      .then((response) => {
        AppDispatcher.dispatch({
          actionType: BOOKING_REQUEST_SUCCESS,
          response: response
        });
      })
      .catch(() => {
        AppDispatcher.dispatch({
          actionType: BOOKING_REQUEST_ERROR
        });
      });
  },
  subscribeForTicketEvents() {
    StompClient.subscribeForTicketEvents(function (ticketEvent) {
      AppDispatcher.dispatch({
        actionType: TICKET_EVENT_RECEIVED,
        ticketEvent: JSON.parse(ticketEvent.body)
      });
    });
  }
};
