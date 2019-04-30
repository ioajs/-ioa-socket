'use strict';

class Task {
   async queue(ctx) {

      const { body } = ctx.request;

      console.log(body);

   }
   async feedback(ctx) {

      const { body } = ctx.request;

      console.log(body);

      ctx.emit('/task/queue', { ttt: 222 });

   }
}

module.exports = Task;