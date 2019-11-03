"use strict";

const app = require('@app');
const consoln = require('consoln');
const routerMiddleware = require('ioa-router');
const { Subscribe } = require('ioa-router/lib/common.js');

const { socketIo, config } = app;

const { port } = config;

consoln.log(`socket server: http://localhost:${port}`);

socketIo.on('connection', function (socket) {

   consoln.success(`socket connection`);

   socket.on('disconnect', () => {

      consoln.error(`socket disconnect`);

   });

   for (const onPath of Subscribe) {

      socket.on(onPath, async body => {

         const ctx = {
            path: onPath,
            method: "Subscribe",
            request: { body },
            emit(...args) {
               socket.emit(...args);
            },
         }

         await routerMiddleware(ctx);

         if (ctx.body) {
            socket.emit(onPath, ctx.body);
         }

      });

   }

});