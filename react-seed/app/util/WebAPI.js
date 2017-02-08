var request = require('superagent');

export default {
  getItems() {
    return new Promise((resolve, reject) => {
      request
          .get("http://localhost:9001/events")
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
