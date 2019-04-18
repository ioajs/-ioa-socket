"use strict";

const app = require('@app');
const io = require('socket.io');
const logger = require('loggercc');

module.exports = function (directory) {

   const { port } = app.config;

   logger.log(`socket: http://localhost:${port}`);

   const socketIo = io(port);

   for (const name in directory) {

      const controller = directory[name];

      const spaces = socketIo.of(`/${name}`);

      spaces.on('connection', function (socket) {

         const socketController = { ...controller };

         logger.success(`socket connection ./${name}`);

         socket.on('disconnect', (reason) => {

            logger.error(`socket disconnect ./${name}`);

         });

         for (const name in socketController) {

            const func = socketController[name];
            if (typeof func === 'function') {
               socket.on(name, func.bind(socket));
            }

         }

         socketController.emit = function (...args) {
            socket.emit(...args);
         }

      });

      // emit代理
      controller.emit = function (...args) {
         spaces.emit(...args);
      };

   }

   return directory;

};