'use strict';

const Task = {
   async queue(data) {

      console.log(data)

   },
   async feedback(data) {

      console.log(data)

      this.emit('queue', { ttt: 222 });

   }
}

module.exports = Task;