var request = require('superagent');

var eventUrl = process.env.EVENTS_API_URL || "http://localhost:9000/events";
var bookingUrl = process.env.EVENTS_API_URL || "http://localhost:8080/bookings";

export default {
  getEvents() {
    return new Promise((resolve, reject) => {
      request
          .get(eventUrl)
          .end(function (error, response) {
            if (error) {
              reject();
            }
            if (response.status !== 200) {
              reject();
            } else {
              resolve(JSON.parse(response.text));
            }
          });
    });
  },
  getVenue(event) {
    return new Promise((resolve, reject) => {
      request
        .get(event._links.venue.href)
        .end(function (error, response) {
          if (error) {
            reject();
          }
          if (response.status !== 200) {
            reject();
          } else {
            resolve(JSON.parse(response.text));
          }
        });
    });
  },
  getSectors(venue) {
    return new Promise((resolve, reject) => {
      request
        .get(venue._links.sectors.href)
        .end(function (error, response) {
          if (error) {
            reject();
          }
          if (response.status !== 200) {
            reject();
          } else {
            resolve(JSON.parse(response.text));
          }
        });
    });
  },
  getBookings(event) {
    return new Promise((resolve, reject) => {
      request
        .get(bookingUrl + "?eventId=" + event.id)
        .end(function (error, response) {
          if (error) {
            reject();
          }
          if (response.status !== 200) {
            reject();
          } else {
            resolve(JSON.parse(response.text));
          }
        });
    });
  }
};
