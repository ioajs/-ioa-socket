'use strict';

class Task {
   async queue(ctx) {

      const { body } = ctx.request;

      console.log(body);

      ctx.emit('/task/queue', { type: "emit" });

   }
   async feedback(ctx) {

      const { body } = ctx.request;

      console.log(body);

      ctx.body = { type: "ctx.body" }

   }
}

module.exports = Task;