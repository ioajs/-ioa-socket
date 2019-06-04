'use strict';

const { router } = require('@app');

router.on('/task/queue', 'task.queue');

router.on('/task/feedback', 'task.feedback');

// router.socket('/', 'token', function (socket) {

//    socket.on('task/queue', 'task.queue');

//    socket.on('task/feedback', 'task.feedback');

// });

// router.socket('/', 'token').connection(function (socket) {

//    socket.on('task/queue', 'task.queue');

//    socket.on('task/feedback', 'task.feedback');

// });