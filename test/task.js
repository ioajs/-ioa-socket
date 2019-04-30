"use strict";

const client = require('socket.io-client');

const socket = client.connect(`http://localhost:9200`);

socket.on('connect', function () {

   socket.on('/task/queue', function (data) {

      console.log(data);

      socket.emit('/task/queue', [1, 2, 3]);

   })

   socket.emit('/task/feedback', [99.9, 34]);
   
})