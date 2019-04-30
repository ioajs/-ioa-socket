'use strict';

const { router } = require('@app');

router.socket('/task/queue', 'token', 'task.queue');

router.socket('/task/feedback', 'token', 'task.feedback');