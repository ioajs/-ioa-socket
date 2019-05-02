'use strict';

const component = require('@app');
const levels = require('ioa-router/lib/levels.js');

component.shared('levels', levels);

module.exports = {
   "socketIo.js": {
      "level": 15,
      module(socket) {
         component.shared("socket", socket);
         return socket;
      }
   },
   "connection.js": {
      "level": 100,
   },
}