const express = require('express');
const router = express.Router();
const ctrlTasks = require('../controllers/tasks');

// Route for the root path
router
  .route('/')
  .get(ctrlTasks.login);

// Route for '/tasks'
router
  .route('/tasks')
  .get(ctrlTasks.tasklist);

// Route for deleting a task with a specific ID
router
  .route('/tasks/:taskid')
  .delete(ctrlTasks.taskDeleteOne);

// Route for '/register'
router
  .route('/register')
  .get(ctrlTasks.register);

module.exports = router;
