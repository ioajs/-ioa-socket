"use strict";

const client = require('socket.io-client');

const socket = client.connect(`http://localhost:9200/task`);

socket.on('connect', function () {

   socket.emit('feedback', [99.9, 34]);

   socket.on('queue', function (data) {

      console.log(data);

      socket.emit('queue', [1, 2, 3]);

   })

})