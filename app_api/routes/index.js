const express = require('express');
const router = express.Router();
const ctrlTasks = require('../controllers/tasks');

router
  .route('/tasks')
  .get(ctrlTasks.taskList);

router
  .route('/tasks/:taskid')
  .delete(ctrlTasks.taskDeleteOne);

module.exports = router;
