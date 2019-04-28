'use strict';

const component = require('@app');
const directory = require('./directory.js');

component.setLevels({
   "socket": {
      level: 60,
      directory
   },
});

module.exports = {}