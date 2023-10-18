const express = require('express');
const router = express.Router();
const ctrlTasks = require('../controllers/tasks');


/* Locations pages */
router.get('/', ctrlTasks.login);
router.get('/tasks', ctrlTasks.tasklist);
router.get('/register', ctrlTasks.register);
module.exports = router;
