"use strict";

const app = require('@app');
const io = require('socket.io');

const { port } = app.config;

const socketIo = io(port);

module.exports = socketIo;