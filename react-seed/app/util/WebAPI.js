var request = require('superagent');

var url = process.env.EVENTS_API_URL || "http://localhost:9000/events";

export default {
  getEvents() {
    return new Promise((resolve, reject) => {
      request
          .get(url)
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
  }
};
