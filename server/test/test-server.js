// NOT WORKING

var should = require('should');
var io = require('socket.io-client'),
    server = require('../server');

var socketURL = 'http://localhost:3000';

var options ={
  transports: ['websocket'],
  'force new connection': true
};

var user1 = {'name':'Andi'};
var user2 = {'name':'Ombre'};
var user3 = {'name':'Zoli'};


describe("Server",function(){

  it('Should be able to broadcast messages', function(done){
    var client1, client2, client3;
    var message = 'Hello Adele';
    var messages = 0;

    var checkMessage = function(client){
      client.on('message', function(msg){
        message.should.equal(msg);
        client.disconnect();
        messages++;
        if(messages === 3){
          done();
        };
      });
    };

    client1 = io.connect(socketURL, options);
    checkMessage(client1);
    client1.on('connect', function(data){
      client2 = io.connect(socketURL, options);
      checkMessage(client2);
      client2.on('connect', function(data){
        client3 = io.connect(socketURL, options);
        checkMessage(client3);
        client3.on('connect', function(data){
          client2.send(message);
        });
      });
    });
  });

});
