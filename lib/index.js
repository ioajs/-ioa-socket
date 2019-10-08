'use strict';

const app = require('@app');
const levels = require('ioa-router/lib/levels.js');

app.emit('levels', levels);

module.exports = {
   "socketIo.js": {
      "level": 15,
      module(socket) {
         app.emit("socket", socket);
         return socket;
      }
   },
   "connection.js": {
      "level": 100,
   },
}