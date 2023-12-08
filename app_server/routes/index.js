//express
const express = require('express');
const router = express.Router();
var passport = require('passport');
var Account = require('../models/account.js');
const ctrlTasks = require('../controllers/tasks');

router.get('/', function(req, res) {
    res.render('login', { title: 'Login' , user: req.user});
});
router.post('/', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) {
            // Handle error from passport
            return next(err);
        }
        if (!user) {
            // If user is not found or password is wrong
            // 'info' contains the message from the local strategy (e.g., 'Incorrect username.')
            return res.render('login', { title: 'Login', error: info.message });
        }
        req.logIn(user, function(err) {
            if (err) {
                // Handle error from login function
                return next(err);
            }
            return res.redirect('/tasks');
        });
    })(req, res, next);
});


router.get('/tasks', ctrlTasks.homelist);

router.get('/register', function(req, res) {
    res.render('register-form', { title: 'Register' , user: req.user});
});

router.post('/register', function(req, res, next) {
    if (!req.body.username || !req.body.password) {
        return res.render('register-form', { error: 'Username and password are required.' });
    }
    Account.register(new Account({ username: req.body.username }), req.body.password, function(err, account) {
        if (err) {
            // Check for the unique constraint error, which is common with registration
            if (err.name === 'UserExistsError') {
                // Handle existing user error
                return res.render('register-form', { error: 'A user with the given username is already registered.' });
            }
            // For other types of errors, log the error and display a generic message
            console.error('Error during registration:', err);
            return res.render('register-form', { error: 'Registration error. Please try again later.' });
        }

        // Authenticate the newly registered user
        passport.authenticate('local')(req, res, function() {
            // Save the session to ensure the user is logged in after registering
            req.session.save(function(err) {
                if (err) {
                    // Log the error and redirect to the error handling middleware
                    console.error('Session save error:', err);
                    return next(err);
                }
                // Successful registration and login
                res.redirect('/tasks');
            });
        });
    });
});


router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

module.exports = router;
