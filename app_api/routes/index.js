//api
const express = require('express');
const router = express.Router();
const ctrlTasks = require('../controllers/tasks');
const ctrlUsers = require('../controllers/users');

router
  .route('/tasks')
  .get(ctrlTasks.taskList);

router
  .route('/tasks/:taskid')
  .delete(ctrlTasks.taskDeleteOne);

router
  .route('/register')
  .post(ctrlUsers.registerUser);

module.exports = router;
