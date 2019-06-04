"use strict";

const io = require('socket.io-client');

const socket = io.connect(`http://localhost:9200`);

socket.on('connect', function () {

   socket.on('/task/queue', function (data) {

      console.log(data);

      // socket.emit('/task/feedback', [1, 2, 3]);

   });

   socket.emit('/task/queue', {
      a: 1,
      b: 2,
   });

})