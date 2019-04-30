"use strict";

const app = require('@app');
const io = require('socket.io');
const logger = require('loggercc');
const routerMiddleware = require('ioa-router');
const { socketScope } = require('ioa-router/lib/common.js');

const { port } = app.config;

logger.log(`socket: http://localhost:${port}`);

const socketIo = io(port);

socketIo.on('connection', function (socket) {

   logger.success(`socket connection`);

   socket.on('disconnect', () => {

      logger.error(`socket disconnect`);

   });

   for (const scope of socketScope) {

      socket.on(scope, async body => {

         const ctx = {
            path: scope,
            method: "SOCKET",
            request: { body },
            emit(...args) {
               socket.emit(...args);
            }
         }

         await routerMiddleware(ctx);

         if (ctx.body) {
            socket.emit(scope, ctx.body);
         }

      });

   }

});

module.exports = socketIo;

