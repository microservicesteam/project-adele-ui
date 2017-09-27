import { Stomp } from "stompjs";

var url = process.env.WEB_SOCKET_URL || "ws://localhost:8080/ws";

export default {
  subscribeForTicketEvents(callback) {
    var socket = new WebSocket(url);
    var client = Stomp.over(socket);
    client.connect({}, function (frame) {
      console.log('Connected: ' + frame);
      client.subscribe('/topic/tickets', callback);
    });
  }
}
