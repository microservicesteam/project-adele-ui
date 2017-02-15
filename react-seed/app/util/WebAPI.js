var request = require('superagent'),
  io = require('socket.io-client');

var socketURL = 'http://localhost:5000';

var options ={
    transports: ['websocket'],
      'force new connection': true
};

export default {
  getItemsREST() {
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
  },
  getItems() {
    return new Promise((resolve, reject) => {
        var client = io.connect(socketURL, options);
        client.on('message', function(msg){
          resolve(msg);
        });
    });
  }
};
