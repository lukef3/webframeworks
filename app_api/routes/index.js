const express = require('express');
const router = express.Router();
const ctrlTasks = require('../controllers/tasks');

// tasks
router
  .route('/')
  .get(ctrlTasks.login);
router
  .route('/tasks')
  .get(ctrlTasks.tasklist);
router
  .route('/register')
  .get(ctrlTasks.register);

module.exports = router;