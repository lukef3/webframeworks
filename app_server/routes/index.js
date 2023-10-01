const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');


/* Locations pages */
router.get('/', ctrlLocations.login);
router.get('/tasks', ctrlLocations.tasklist);
router.get('/register', ctrlLocations.register);
module.exports = router;
