//express
const express = require('express');
const router = express.Router();
const ctrlTasks = require('../controllers/tasks');

router.get('/', ctrlTasks.login);
router.get('/tasks', ctrlTasks.homelist);
router.get('/register', ctrlTasks.register);

module.exports = router;
