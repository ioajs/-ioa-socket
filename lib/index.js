'use strict';

const app = require('@app');
const loads = require('ioa-router/lib/loads.js');

app.emit('loads', loads);

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