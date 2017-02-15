var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 5000;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

var debug = false;

debug && console.log("Server Started");
io.sockets.on('connection', function (socket) {
    debug && console.log("New Connection");
    io.sockets.emit('message', [ {
      "id": 1,
      "label": "Adele New York"
    }, {
      "id": 2,
      "label": "Adele London"
    }, {
      "id": 3,
      "label": "Adele Budapest"
    } ]);

});
