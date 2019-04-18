'use strict';

const component = require('@app');
const directory = require('./directory.js');

component.setOption({
   "socket": {
      level: 60,
      directory
   },
});

module.exports = {}