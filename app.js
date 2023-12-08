require('./app_api/models/db');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');
var http = require('http');
var https = require('https');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// Initialize the Express application
var app = express();

// Set views, view engine, logger, parsers, and static files
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'angular-app')));

// Passport configuration
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Define routes
const indexRouter = require('./app_server/routes/index');
const apiRoutes = require('./app_api/routes/index');
app.use('/', indexRouter);
app.use('/api', apiRoutes);

// Passport config
var Account = require('./app_server/models/account.js');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

// SSL setup
var privateKey = fs.readFileSync('./sslcert/key.pem', 'utf8');
var certificate = fs.readFileSync('./sslcert/cert.pem', 'utf8');
var credentials = { key: privateKey, cert: certificate };

// Create HTTP and HTTPS servers
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

// Listen on the respective ports
httpServer.listen(8000, function() {
  console.log('HTTP server running on port 8000');
});
httpsServer.listen(443, function() {
  console.log('HTTPS server running on port 443');
});

module.exports = app;
